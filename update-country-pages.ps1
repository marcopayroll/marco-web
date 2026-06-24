# Apply Get Started + overflow-anchor updates to all 59 country pages
param()

$workDir = "C:\Users\JiaJieSaw\OneDrive - Marco Global Payroll Pte Ltd\Documents\Marco Web\Web 1.0"

$slugs = @(
  "algeria","kenya","nigeria","south-africa","tunisia",
  "argentina","brazil","canada","chile","colombia","mexico","peru","usa",
  "bangladesh","brunei","cambodia","china","hong-kong","india","indonesia",
  "japan","malaysia","new-zealand","pakistan","philippines","singapore",
  "south-korea","sri-lanka","taiwan","thailand","vietnam",
  "austria","belgium","bulgaria","croatia","czech-republic","denmark",
  "finland","france","germany","hungary","ireland","italy","netherlands",
  "poland","portugal","romania","russia","spain","sweden","switzerland",
  "turkey","ukraine","united-kingdom",
  "azerbaijan","egypt","israel","saudi-arabia","uae"
)

# Map slug → display name (for the h2 title)
$names = @{
  "algeria"="Algeria"; "kenya"="Kenya"; "nigeria"="Nigeria"; "south-africa"="South Africa"; "tunisia"="Tunisia";
  "argentina"="Argentina"; "brazil"="Brazil"; "canada"="Canada"; "chile"="Chile"; "colombia"="Colombia";
  "mexico"="Mexico"; "peru"="Peru"; "usa"="USA";
  "bangladesh"="Bangladesh"; "brunei"="Brunei"; "cambodia"="Cambodia"; "china"="China"; "hong-kong"="Hong Kong";
  "india"="India"; "indonesia"="Indonesia"; "japan"="Japan"; "malaysia"="Malaysia"; "new-zealand"="New Zealand";
  "pakistan"="Pakistan"; "philippines"="Philippines"; "singapore"="Singapore"; "south-korea"="South Korea";
  "sri-lanka"="Sri Lanka"; "taiwan"="Taiwan"; "thailand"="Thailand"; "vietnam"="Vietnam";
  "austria"="Austria"; "belgium"="Belgium"; "bulgaria"="Bulgaria"; "croatia"="Croatia";
  "czech-republic"="Czech Republic"; "denmark"="Denmark"; "finland"="Finland"; "france"="France";
  "germany"="Germany"; "hungary"="Hungary"; "ireland"="Ireland"; "italy"="Italy";
  "netherlands"="Netherlands"; "poland"="Poland"; "portugal"="Portugal"; "romania"="Romania";
  "russia"="Russia"; "spain"="Spain"; "sweden"="Sweden"; "switzerland"="Switzerland";
  "turkey"="Turkey"; "ukraine"="Ukraine"; "united-kingdom"="United Kingdom";
  "azerbaijan"="Azerbaijan"; "egypt"="Egypt"; "israel"="Israel"; "saudi-arabia"="Saudi Arabia"; "uae"="UAE"
}

$reOptions = [System.Text.RegularExpressions.RegexOptions]::Singleline

$updated = 0
$skipped = 0

foreach ($slug in $slugs) {
  $path = Join-Path $workDir "hr-knowledge-hub-payroll-guide-$slug.html"
  if (-not (Test-Path $path)) { Write-Host "  MISSING: $slug"; $skipped++; continue }

  $html = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
  $name = $names[$slug]

  # 1. overflow-anchor: none (add after the box-sizing reset line)
  $html = $html.Replace(
    '*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }',
    '*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }' + "`n    html, body { overflow-anchor: none; }"
  )

  # 2. gs-cta-title: fluid font-size + line-height ratio
  $html = [regex]::Replace($html,
    '\.gs-cta-title \{[^}]+\}',
    '.gs-cta-title {
      font-family: var(--font);
      font-size: clamp(40px, calc(0.8vw + 36.48px), 48px);
      font-weight: 600; line-height: 1.25;
      color: #162351; letter-spacing: -2.4px; margin: 0;
    }'
  )

  # 3. gs-cta-title .accent: remove display:block
  $html = $html.Replace(
    '.gs-cta-title .accent { color: #019de7; display: block; }',
    '.gs-cta-title .accent { color: #019de7; }'
  )

  # 4. gs-cta-subtitle: fluid font-size
  $html = [regex]::Replace($html,
    '\.gs-cta-subtitle \{[^}]+\}',
    '.gs-cta-subtitle {
      position: absolute;
      left: max(var(--gutter), calc((100% - 1224px) / 2));
      top: 282px;
      width: 600px;
      font-family: var(--font);
      font-size: clamp(12px, calc(0.4vw + 10.24px), 16px);
      font-weight: 400;
      color: #162351; line-height: 20px; margin: 0;
    }'
  )

  # 5. gs-cta-thumb: fluid left position (24px gap from content)
  $html = $html.Replace(
    '      left: 50.8%;',
    '      left: max(calc(var(--gutter) + 624px), calc((100% - 1224px) / 2 + 624px));'
  )

  # 6. Get Started h2 title text
  $gsPattern = '<h2 class="gs-cta-title">[\s\S]*?</h2>'
  $newH2 = '<h2 class="gs-cta-title">' + "`n" +
            '      Need help with Payroll Compliance in' + "`n" +
            '      <span class="accent">' + $name + '?</span>' + "`n" +
            '    </h2>'
  $html = [regex]::Replace($html, $gsPattern, $newH2, $reOptions)

  [System.IO.File]::WriteAllText($path, $html, [System.Text.Encoding]::UTF8)
  Write-Host "  [$($updated+1)/59] $slug"
  $updated++
}

Write-Host ""
Write-Host "Done - updated $updated pages, skipped $skipped."
