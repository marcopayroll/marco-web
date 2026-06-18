#!/usr/bin/env python3
"""
bulk_replace_nav_footer.py

Reads the fully data-i18n-tagged nav and footer blocks from
service-employer-of-record.html and replaces the corresponding blocks
in every other *.html file in the same directory (with a few explicit
skip rules).
"""

import os
import re
import glob

# ── Configuration ──────────────────────────────────────────────────────────────

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SOURCE_FILE = os.path.join(BASE_DIR, "service-employer-of-record.html")

# Files to skip unconditionally (besides the source file itself)
SKIP_FILES = {
    "service-employer-of-record.html",
    "company-terms-of-use.html",
    "company-privacy-policy.html",
    "company-cookies-policy.html",
}

# ── Block extraction helpers ────────────────────────────────────────────────────

NAV_START_MARKER    = "<!-- ════════════════ NAV ════════════════ -->"
HERO_MARKER_PATTERN = re.compile(r"<!-- ════[^─]*════ -->")   # any section marker
FOOTER_MARKER       = "<!-- ════════════════ FOOTER ════════════════ -->"
MOBILE_FOOTER_START = '<footer class="footer-mobile">'


def extract_blocks(source_text: str):
    """
    Return (nav_block, desktop_footer_block, mobile_footer_block) as strings.
    Each block includes its opening marker line and all content up to
    (but not including) the next boundary.
    """
    lines = source_text.splitlines(keepends=True)

    # ── 1. NAV BLOCK ──────────────────────────────────────────────────────────
    nav_start_idx = None
    for i, line in enumerate(lines):
        if NAV_START_MARKER in line:
            nav_start_idx = i
            break
    if nav_start_idx is None:
        raise ValueError("Could not find NAV marker in source file.")

    # The nav block ends at the line BEFORE the next <!-- ════ --> section marker
    # that follows (i.e. the HERO marker or whatever comes after the panel).
    nav_end_idx = None
    for i in range(nav_start_idx + 1, len(lines)):
        stripped = lines[i].strip()
        if HERO_MARKER_PATTERN.match(stripped) and i > nav_start_idx + 5:
            nav_end_idx = i  # first line of next section, NOT included
            break
    if nav_end_idx is None:
        raise ValueError("Could not find end boundary for NAV block.")

    nav_block = "".join(lines[nav_start_idx:nav_end_idx])

    # ── 2. DESKTOP FOOTER BLOCK ───────────────────────────────────────────────
    footer_start_idx = None
    for i, line in enumerate(lines):
        if FOOTER_MARKER in line:
            footer_start_idx = i
            break
    if footer_start_idx is None:
        raise ValueError("Could not find FOOTER marker in source file.")

    # Desktop footer ends just before <footer class="footer-mobile">
    desktop_footer_end_idx = None
    for i in range(footer_start_idx + 1, len(lines)):
        if MOBILE_FOOTER_START in lines[i]:
            desktop_footer_end_idx = i
            break
    if desktop_footer_end_idx is None:
        raise ValueError("Could not find footer-mobile start in source file.")

    desktop_footer_block = "".join(lines[footer_start_idx:desktop_footer_end_idx])

    # ── 3. MOBILE FOOTER BLOCK ────────────────────────────────────────────────
    mob_start_idx = desktop_footer_end_idx
    # Find the closing </footer> for the mobile footer
    mob_end_idx = None
    depth = 0
    for i in range(mob_start_idx, len(lines)):
        stripped = lines[i].strip()
        if stripped.startswith("<footer"):
            depth += 1
        if stripped == "</footer>":
            depth -= 1
            if depth == 0:
                mob_end_idx = i + 1  # include the closing tag line
                break
    if mob_end_idx is None:
        raise ValueError("Could not find closing </footer> for mobile footer.")

    mobile_footer_block = "".join(lines[mob_start_idx:mob_end_idx])

    return nav_block, desktop_footer_block, mobile_footer_block


# ── Block replacement helpers ───────────────────────────────────────────────────

def replace_nav_block(content: str, new_nav_block: str) -> str:
    """
    Replace the nav block in content.
    Boundary: from NAV marker up to (not including) the next <!-- ════ --> marker.
    """
    lines = content.splitlines(keepends=True)

    nav_start_idx = None
    for i, line in enumerate(lines):
        if NAV_START_MARKER in line:
            nav_start_idx = i
            break
    if nav_start_idx is None:
        return None  # marker not found → skip this file

    nav_end_idx = None
    for i in range(nav_start_idx + 1, len(lines)):
        stripped = lines[i].strip()
        if HERO_MARKER_PATTERN.match(stripped) and i > nav_start_idx + 5:
            nav_end_idx = i
            break
    if nav_end_idx is None:
        return None

    return "".join(lines[:nav_start_idx]) + new_nav_block + "".join(lines[nav_end_idx:])


def replace_footer_blocks(content: str,
                           new_desktop_footer: str,
                           new_mobile_footer: str) -> str:
    """
    Replace the desktop footer (from FOOTER marker through </footer> before
    footer-mobile) and the mobile footer block.
    """
    lines = content.splitlines(keepends=True)

    footer_start_idx = None
    for i, line in enumerate(lines):
        if FOOTER_MARKER in line:
            footer_start_idx = i
            break
    if footer_start_idx is None:
        return None

    # Find mobile footer start
    mob_start_idx = None
    for i in range(footer_start_idx + 1, len(lines)):
        if MOBILE_FOOTER_START in lines[i]:
            mob_start_idx = i
            break
    if mob_start_idx is None:
        return None

    # Find end of mobile footer
    mob_end_idx = None
    depth = 0
    for i in range(mob_start_idx, len(lines)):
        stripped = lines[i].strip()
        if stripped.startswith("<footer"):
            depth += 1
        if stripped == "</footer>":
            depth -= 1
            if depth == 0:
                mob_end_idx = i + 1
                break
    if mob_end_idx is None:
        return None

    return (
        "".join(lines[:footer_start_idx])
        + new_desktop_footer
        + new_mobile_footer
        + "".join(lines[mob_end_idx:])
    )


# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    # Read and validate source file
    with open(SOURCE_FILE, "r", encoding="utf-8") as f:
        source_text = f.read()

    print("Extracting blocks from source file...")
    nav_block, desktop_footer_block, mobile_footer_block = extract_blocks(source_text)

    print(f"\n  NAV block          : {nav_block.count(chr(10))} lines")
    print(f"  Desktop footer     : {desktop_footer_block.count(chr(10))} lines")
    print(f"  Mobile footer      : {mobile_footer_block.count(chr(10))} lines")

    # Sanity-check: make sure data-i18n is present in extracted blocks
    for label, block in [("NAV", nav_block),
                          ("Desktop FOOTER", desktop_footer_block),
                          ("Mobile FOOTER", mobile_footer_block)]:
        count = block.count("data-i18n")
        print(f"  {label}: {count} data-i18n attributes found")
        if count == 0:
            print(f"  WARNING: no data-i18n attributes in {label} block!")

    # Gather target files
    all_html = sorted(glob.glob(os.path.join(BASE_DIR, "*.html")))
    target_files = [
        f for f in all_html
        if os.path.basename(f) not in SKIP_FILES
    ]

    updated = []
    skipped_app_shell = []
    skipped_no_marker = []
    errors = []

    print(f"\nProcessing {len(target_files)} candidate files...\n")

    for filepath in target_files:
        filename = os.path.basename(filepath)

        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        # Skip app-shell / sidebar pages
        if 'class="app-shell"' in content or 'class="sidebar"' in content:
            skipped_app_shell.append(filename)
            print(f"  SKIP (app-shell)  : {filename}")
            continue

        # Skip if NAV marker is absent (different layout)
        if NAV_START_MARKER not in content:
            skipped_no_marker.append(filename)
            print(f"  SKIP (no NAV)     : {filename}")
            continue

        # Replace nav
        new_content = replace_nav_block(content, nav_block)
        if new_content is None:
            errors.append(filename)
            print(f"  ERROR (nav)       : {filename}")
            continue

        # Replace footer
        new_content = replace_footer_blocks(new_content, desktop_footer_block, mobile_footer_block)
        if new_content is None:
            errors.append(filename)
            print(f"  ERROR (footer)    : {filename}")
            continue

        if new_content == content:
            print(f"  UNCHANGED         : {filename}")
        else:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            updated.append(filename)
            print(f"  UPDATED           : {filename}")

    print("=" * 40)
    print("Summary")
    print("=" * 40)
    print(f"  Updated             : {len(updated)}")
    print(f"  Skipped (app-shell) : {len(skipped_app_shell)}  -> {', '.join(skipped_app_shell) or 'none'}")
    print(f"  Skipped (no NAV)    : {len(skipped_no_marker)}")
    print(f"  Errors              : {len(errors)}  -> {', '.join(errors) or 'none'}")
    print(f"  Explicitly skipped  : {', '.join(sorted(SKIP_FILES))}")
    print("=" * 40)
    if updated:
        print("Updated files:")
        for f in updated:
            print(f"  - {f}")


if __name__ == "__main__":
    main()
