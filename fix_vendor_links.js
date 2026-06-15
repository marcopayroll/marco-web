const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'hr-knowledge-hub-vendor-list.html');

let navFixed = 0, footerFixed = 0, filesChanged = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // ── Nav: <a href="#" class="nav-hub-item"> followed by Vendor List SVG
  // Pattern: the href="#" on the nav-hub-item that contains Vendor List.svg
  const navOld = '<a href="#" class="nav-hub-item">\n                <div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Vendor List.svg" alt=""></div>';
  const navNew = '<a href="hr-knowledge-hub-vendor-list.html" class="nav-hub-item">\n                <div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Vendor List.svg" alt=""></div>';
  if (html.includes(navOld)) {
    html = html.split(navOld).join(navNew);
    navFixed++;
    changed = true;
  }

  // Also try \r\n variant
  const navOldCR = '<a href="#" class="nav-hub-item">\r\n                <div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Vendor List.svg" alt=""></div>';
  const navNewCR = '<a href="hr-knowledge-hub-vendor-list.html" class="nav-hub-item">\r\n                <div class="nav-hub-item-icon"><img src="assets/HR Knowledge Hub/Vendor List.svg" alt=""></div>';
  if (html.includes(navOldCR)) {
    html = html.split(navOldCR).join(navNewCR);
    navFixed++;
    changed = true;
  }

  // ── Footer: <a href="#">Vendor List</a>
  const footerOld = '<a href="#">Vendor List</a>';
  const footerNew = '<a href="hr-knowledge-hub-vendor-list.html">Vendor List</a>';
  if (html.includes(footerOld)) {
    html = html.split(footerOld).join(footerNew);
    footerFixed++;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, html);
    filesChanged++;
  }
}

console.log(`Files changed: ${filesChanged}`);
console.log(`Nav links fixed: ${navFixed}`);
console.log(`Footer links fixed: ${footerFixed}`);
