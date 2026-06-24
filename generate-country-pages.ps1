# Generate 59 country payroll guide pages from Australia template
param()

$workDir = "C:\Users\JiaJieSaw\OneDrive - Marco Global Payroll Pte Ltd\Documents\Marco Web\Web 1.0"
$templatePath = Join-Path $workDir "hr-knowledge-hub-payroll-guide-australia.html"
$template = [System.IO.File]::ReadAllText($templatePath, [System.Text.Encoding]::UTF8)

$colors = @('#DAF3FF', '#E3DAFF', '#FFEFCE', '#FFDCD8')

$countries = @(
  @{ name="Algeria";        slug="algeria";         currency="DZD"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/algeria.jpg" },
  @{ name="Kenya";          slug="kenya";           currency="KES"; img="" },
  @{ name="Nigeria";        slug="nigeria";         currency="NGN"; img="" },
  @{ name="South Africa";   slug="south-africa";    currency="ZAR"; img="" },
  @{ name="Tunisia";        slug="tunisia";         currency="TND"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/tunisia.webp" },
  @{ name="Argentina";      slug="argentina";       currency="ARS"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/argentina 2.jpg" },
  @{ name="Brazil";         slug="brazil";          currency="BRL"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/brazil.png" },
  @{ name="Canada";         slug="canada";          currency="CAD"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/canada.jpg" },
  @{ name="Chile";          slug="chile";           currency="CLP"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/chile.png" },
  @{ name="Colombia";       slug="colombia";        currency="COP"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/colombia 1.png" },
  @{ name="Mexico";         slug="mexico";          currency="MXN"; img="" },
  @{ name="Peru";           slug="peru";            currency="PEN"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/peru.jpg" },
  @{ name="USA";            slug="usa";             currency="USD"; img="" },
  @{ name="Bangladesh";     slug="bangladesh";      currency="BDT"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/bangladesh.jpg" },
  @{ name="Brunei";         slug="brunei";          currency="BND"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/brunei.jpg" },
  @{ name="Cambodia";       slug="cambodia";        currency="KHR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/cambodia.jpg" },
  @{ name="China";          slug="china";           currency="CNY"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/china.jpg" },
  @{ name="Hong Kong";      slug="hong-kong";       currency="HKD"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/hong kong.jpg" },
  @{ name="India";          slug="india";           currency="INR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/india.png" },
  @{ name="Indonesia";      slug="indonesia";       currency="IDR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/indonesia.webp" },
  @{ name="Japan";          slug="japan";           currency="JPY"; img="" },
  @{ name="Malaysia";       slug="malaysia";        currency="MYR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/malaysia.webp" },
  @{ name="New Zealand";    slug="new-zealand";     currency="NZD"; img="" },
  @{ name="Pakistan";       slug="pakistan";        currency="PKR"; img="" },
  @{ name="Philippines";    slug="philippines";     currency="PHP"; img="" },
  @{ name="Singapore";      slug="singapore";       currency="SGD"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/singapore.webp" },
  @{ name="South Korea";    slug="south-korea";     currency="KRW"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/south-korea.jpg" },
  @{ name="Sri Lanka";      slug="sri-lanka";       currency="LKR"; img="" },
  @{ name="Taiwan";         slug="taiwan";          currency="TWD"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/taiwan.jpg" },
  @{ name="Thailand";       slug="thailand";        currency="THB"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/thailand.jpg" },
  @{ name="Vietnam";        slug="vietnam";         currency="VND"; img="" },
  @{ name="Austria";        slug="austria";         currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/austria.jpg" },
  @{ name="Belgium";        slug="belgium";         currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/belgium.jpg" },
  @{ name="Bulgaria";       slug="bulgaria";        currency="BGN"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/bulgaria.jpg" },
  @{ name="Croatia";        slug="croatia";         currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/croatia 1.jpg" },
  @{ name="Czech Republic"; slug="czech-republic";  currency="CZK"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/czech republic.webp" },
  @{ name="Denmark";        slug="denmark";         currency="DKK"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/denmark.webp" },
  @{ name="Finland";        slug="finland";         currency="EUR"; img="" },
  @{ name="France";         slug="france";          currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/france.jpg" },
  @{ name="Germany";        slug="germany";         currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/germany 2.webp" },
  @{ name="Hungary";        slug="hungary";         currency="HUF"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/hungary.webp" },
  @{ name="Ireland";        slug="ireland";         currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/ireland.jpeg" },
  @{ name="Italy";          slug="italy";           currency="EUR"; img="" },
  @{ name="Netherlands";    slug="netherlands";     currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/netherlands.jpeg" },
  @{ name="Poland";         slug="poland";          currency="PLN"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/poland.jpg" },
  @{ name="Portugal";       slug="portugal";        currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/portugal.avif" },
  @{ name="Romania";        slug="romania";         currency="RON"; img="" },
  @{ name="Russia";         slug="russia";          currency="RUB"; img="" },
  @{ name="Spain";          slug="spain";           currency="EUR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/spain.jpg" },
  @{ name="Sweden";         slug="sweden";          currency="SEK"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/sweden.jpg" },
  @{ name="Switzerland";    slug="switzerland";     currency="CHF"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/switzerland.jpg" },
  @{ name="Turkey";         slug="turkey";          currency="TRY"; img="" },
  @{ name="Ukraine";        slug="ukraine";         currency="UAH"; img="" },
  @{ name="United Kingdom"; slug="united-kingdom";  currency="GBP"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/united-kingdom.jpg" },
  @{ name="Azerbaijan";     slug="azerbaijan";      currency="AZN"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/azerbaijan.jpg" },
  @{ name="Egypt";          slug="egypt";           currency="EGP"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/egypt 1.jpeg" },
  @{ name="Israel";         slug="israel";          currency="ILS"; img="" },
  @{ name="Saudi Arabia";   slug="saudi-arabia";    currency="SAR"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/saudi-arabia.jpg" },
  @{ name="UAE";            slug="uae";             currency="AED"; img="assets/HR Knowledge Hub/Payroll Guide/thumbnails/uae.webp" }
)

# Build the EXPLORE_COUNTRIES JS block for a given page (excludes currentSlug, includes Australia)
function Build-ExploreJs {
  param([string]$currentSlug, $allCountries)

  $entries = [System.Collections.Generic.List[PSCustomObject]]::new()

  foreach ($c in $allCountries) {
    if ($c.slug -eq $currentSlug) { continue }
    $imgVal = if ($c.img) { '"' + $c.img + '"' } else { '""' }
    $url = "hr-knowledge-hub-payroll-guide-$($c.slug).html"
    $entries.Add([PSCustomObject]@{
      name = $c.name
      line = "      { name: `"$($c.name)`", currency: `"$($c.currency)`", img: $imgVal, url: `"$url`", date: `"1 January 2026`" }"
    })
  }
  # Add Australia entry
  $entries.Add([PSCustomObject]@{
    name = "Australia"
    line = '      { name: "Australia", currency: "AUD", img: "assets/HR Knowledge Hub/Payroll Guide/thumbnails/australia.jpg", url: "hr-knowledge-hub-payroll-guide-australia.html", date: "22 June 2026" }'
  })

  $sorted = $entries | Sort-Object { $_.name }
  $lines = $sorted | ForEach-Object { $_.line }
  return "var EXPLORE_COUNTRIES = [`n" + ($lines -join ",`n") + "`n    ];"
}

# Regex patterns
$reOptions = [System.Text.RegularExpressions.RegexOptions]::Singleline

# Article section replacement
$articlePattern = '<section class="article-section">[\s\S]*?</section>'

# EXPLORE_COUNTRIES array
$explorePattern = 'var EXPLORE_COUNTRIES = \[[\s\S]*?\];'

# buildCard function (update to use c.date)
$buildCardPattern = 'function buildCard\(c\) \{[\s\S]*?return a;\s*\}'
$newBuildCardFn = @'
function buildCard(c) {
      var a = document.createElement('a');
      a.className = 'explore-card';
      a.href = c.url || '#';
      var thumbHtml = c.img
        ? '<img src="' + c.img + '" alt="' + c.name + '" loading="lazy" />'
        : '';
      a.innerHTML =
        '<div class="explore-card-thumb">' + thumbHtml + '</div>' +
        '<div class="explore-card-body">' +
          '<div class="explore-card-title-row">' +
            '<span class="explore-card-name">' + c.name + '</span>' +
            '<span class="explore-card-currency">' + c.currency + '</span>' +
          '</div>' +
          '<span class="explore-card-date">Last Updated by, ' + (c.date || '1 January 2026') + '</span>' +
        '</div>';
      return a;
    }
'@

# GET STARTED h2 pattern
$gsPattern = '<h2 class="gs-cta-title">[\s\S]*?</h2>'

# ─── Generate 59 country pages ────────────────────────────────────────────────
Write-Host "Generating 59 country pages..."

for ($idx = 0; $idx -lt $countries.Count; $idx++) {
  $c      = $countries[$idx]
  $color  = $colors[$idx % 4]
  $name   = $c.name
  $slug   = $c.slug
  $img    = $c.img

  $html = $template

  # 1. Page title
  $html = $html.Replace(
    '<title>Marco | Payroll Guide - Australia</title>',
    "<title>Marco | Payroll Guide - $name</title>"
  )

  # 2. Background color (hero + explore-section both use background: #e3daff;)
  $html = $html.Replace('background: #e3daff;', "background: $color;")

  # 3. Hero heading
  $html = $html.Replace(
    '<h1 class="pg-hero-title">Payroll Guide - Australia</h1>',
    '<h1 class="pg-hero-title">Payroll Guide - ' + $name + '</h1>'
  )

  # 4. Hero description (handle both raw em-dash and HTML entity)
  $html = [regex]::Replace($html,
    '<p class="pg-hero-desc">Complete operational guide to Australia payroll compliance[\s\S]*?</p>',
    '<p class="pg-hero-desc">Description to be added</p>'
  )

  # 5. Hero last-updated date
  $html = $html.Replace(
    '<p class="pg-hero-last-updated">Last Update by, 22 June 2026</p>',
    '<p class="pg-hero-last-updated">Last Update by, 1 January 2026</p>'
  )

  # 6. Hero image + GET STARTED image (both use same australia.jpg src/alt string)
  $oldImg = '<img src="assets/HR Knowledge Hub/Payroll Guide/thumbnails/australia.jpg" alt="Australia" />'
  if ($img) {
    $newImg = '<img src="' + $img + '" alt="' + $name + '" />'
    $html = $html.Replace($oldImg, $newImg)
  } else {
    $html = $html.Replace($oldImg, '')
  }

  # 7. Article section → coming soon
  $comingSoon = '<section class="article-section">' + "`n" +
    '  <div class="container" style="padding: 60px 0;">' + "`n" +
    '    <p style="color: #475072; font-size: 18px;">' + $name + ' Payroll Guide content coming soon</p>' + "`n" +
    '  </div>' + "`n" +
    '</section>'
  $html = [regex]::Replace($html, $articlePattern, $comingSoon, $reOptions)

  # 8. GET STARTED country name
  $newGsH2 = '<h2 class="gs-cta-title">' + "`n" +
    '      Ready to Expand in' + "`n" +
    '      <span class="accent">' + $name + '?</span>' + "`n" +
    '    </h2>'
  $html = [regex]::Replace($html, $gsPattern, $newGsH2, $reOptions)

  # 9. EXPLORE_COUNTRIES array
  $newExplore = Build-ExploreJs -currentSlug $slug -allCountries $countries
  $html = [regex]::Replace($html, $explorePattern, $newExplore, $reOptions)

  # 10. buildCard → use c.date
  $html = [regex]::Replace($html, $buildCardPattern, $newBuildCardFn, $reOptions)

  # 11. PDF filename
  $html = $html.Replace(
    "var fileName = 'Marco Payroll Guide - Australia.pdf';",
    "var fileName = 'Marco Payroll Guide - $name.pdf';"
  )

  $outPath = Join-Path $workDir "hr-knowledge-hub-payroll-guide-$slug.html"
  [System.IO.File]::WriteAllText($outPath, $html, [System.Text.Encoding]::UTF8)
  Write-Host "  [$($idx+1)/59] $slug  ($color)"
}

Write-Host ""
Write-Host "All 59 pages generated."

# ─── Update Australia page explore section (add URLs to all 59 entries) ───────
Write-Host ""
Write-Host "Updating Australia page EXPLORE_COUNTRIES..."
$ausHtml = [System.IO.File]::ReadAllText($templatePath, [System.Text.Encoding]::UTF8)

$ausEntries = [System.Collections.Generic.List[PSCustomObject]]::new()
foreach ($c in ($countries | Sort-Object { $_.name })) {
  $imgVal = if ($c.img) { '"' + $c.img + '"' } else { '""' }
  $url = "hr-knowledge-hub-payroll-guide-$($c.slug).html"
  $ausEntries.Add([PSCustomObject]@{
    name = $c.name
    line = "      { name: `"$($c.name)`", currency: `"$($c.currency)`", img: $imgVal, url: `"$url`", date: `"1 January 2026`" }"
  })
}
$ausLines = $ausEntries | ForEach-Object { $_.line }
$ausExploreJs = "var EXPLORE_COUNTRIES = [`n" + ($ausLines -join ",`n") + "`n    ];"

$ausHtml = [regex]::Replace($ausHtml, $explorePattern, $ausExploreJs, $reOptions)
$ausHtml = [regex]::Replace($ausHtml, $buildCardPattern, $newBuildCardFn, $reOptions)

[System.IO.File]::WriteAllText($templatePath, $ausHtml, [System.Text.Encoding]::UTF8)
Write-Host "  Updated: hr-knowledge-hub-payroll-guide-australia.html"

# ─── Update listing page COUNTRIES array (add url to each country entry) ──────
Write-Host ""
Write-Host "Updating listing page COUNTRIES..."
$listingPath = Join-Path $workDir "hr-knowledge-hub-payroll-guide.html"
$listingHtml = [System.IO.File]::ReadAllText($listingPath, [System.Text.Encoding]::UTF8)

foreach ($c in $countries) {
  $url = "hr-knowledge-hub-payroll-guide-$($c.slug).html"
  $nameEsc = [regex]::Escape($c.name)
  # Match the country object that does NOT already have a url property
  # Pattern: { name: "...", ..., img: "..." } (no url field yet)
  $entryPattern = '(\{[^}]*name:\s*"' + $nameEsc + '"[^}]*\})'
  $m = [regex]::Match($listingHtml, $entryPattern)
  if ($m.Success -and $m.Value -notmatch '"url"') {
    $existing = $m.Value
    # Insert url before closing brace
    $withUrl = $existing.TrimEnd('}') + ', url: "' + $url + '" }'
    $listingHtml = $listingHtml.Replace($existing, $withUrl)
  }
}

[System.IO.File]::WriteAllText($listingPath, $listingHtml, [System.Text.Encoding]::UTF8)
Write-Host "  Updated: hr-knowledge-hub-payroll-guide.html"

Write-Host ""
Write-Host "Done!"
