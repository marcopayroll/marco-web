from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    for w in [900, 801, 800, 600, 375]:
        page = browser.new_page(viewport={"width": w, "height": 1200})
        page.goto("http://localhost:8812/index.html", wait_until="networkidle")
        data = page.evaluate("""
            () => {
                const right = document.querySelector('.cta-right');
                const line = document.querySelector('.cta-section .section-label .line');
                const span = document.querySelector('.cta-section .section-label span');
                const title = document.querySelector('.cta-title');
                const desc = document.querySelector('.cta-desc');
                const cs = (el) => { const s = getComputedStyle(el); return {fontSize:s.fontSize, fontWeight:s.fontWeight, lineHeight:s.lineHeight, letterSpacing:s.letterSpacing, width:s.width, position:s.position}; };
                return { right: cs(right), line: cs(line), span: cs(span), title: cs(title), desc: cs(desc) };
            }
        """)
        scroll_w = page.evaluate("document.documentElement.scrollWidth")
        client_w = page.evaluate("document.documentElement.clientWidth")
        overflow = "OVERFLOW" if scroll_w > client_w else "ok"
        print(f"=== width={w} {overflow} ===")
        print("right-pos:", data['right']['position'])
        print("line:", data['line'])
        print("span:", data['span'])
        print("title:", data['title'])
        print("desc:", data['desc'])
        page.close()
    browser.close()
