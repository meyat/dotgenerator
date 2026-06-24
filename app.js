/* ============================================================
   DotMail Generator — app.js
   ============================================================ */

// ──────────────────────────────────────────
// Domain definitions with inline SVG logos
// ──────────────────────────────────────────
const DOMAINS = [
  {
    value: '@gmail.com', label: '@gmail.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.909 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
      <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64V9.548L5.455 4.64 3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#4285F4"/>
      <path d="M18.545 11.73v9.273h3.819A1.636 1.636 0 0 0 24 19.366V5.457c0-2.023-2.309-3.178-3.927-1.964L18.545 4.64v7.09z" fill="#34A853"/>
      <path d="M12 9.548v7.09l6.545-4.909V4.64L12 9.548z" fill="#FBBC05"/>
    </svg>`
  },
  {
    value: '@googlemail.com', label: '@googlemail.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.909 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
      <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64V9.548L5.455 4.64 3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#4285F4"/>
      <path d="M18.545 11.73v9.273h3.819A1.636 1.636 0 0 0 24 19.366V5.457c0-2.023-2.309-3.178-3.927-1.964L18.545 4.64v7.09z" fill="#34A853"/>
      <path d="M12 9.548v7.09l6.545-4.909V4.64L12 9.548z" fill="#FBBC05"/>
    </svg>`
  },
  {
    value: '@yahoo.com', label: '@yahoo.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0H0v24h24V0z" fill="#6001D2"/>
      <path d="M11.184 13.82L8.184 7.5H5.5l4.592 8.805V20h2.184v-3.695L16.868 7.5h-2.684l-3 6.32z" fill="#fff"/>
      <path d="M17.5 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#fff"/>
    </svg>`
  },
  {
    value: '@yahoo.co.id', label: '@yahoo.co.id',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 0H0v24h24V0z" fill="#6001D2"/>
      <path d="M11.184 13.82L8.184 7.5H5.5l4.592 8.805V20h2.184v-3.695L16.868 7.5h-2.684l-3 6.32z" fill="#fff"/>
      <path d="M17.5 13a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" fill="#fff"/>
    </svg>`
  },
  {
    value: '@outlook.com', label: '@outlook.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.88 12.04c0-3.243 2.622-5.87 5.86-5.87 3.237 0 5.86 2.627 5.86 5.87S17.977 17.9 14.74 17.9c-3.238 0-5.86-2.622-5.86-5.86z" fill="#0072C6"/>
      <path d="M0 4.7v14.4l9 2.3V2.4L0 4.7z" fill="#0072C6"/>
      <path d="M9 17.1V6.9l6 1.3v7.6L9 17.1z" fill="#fff" opacity=".8"/>
      <circle cx="14.74" cy="12.04" r="3.5" fill="#fff"/>
    </svg>`
  },
  {
    value: '@hotmail.com', label: '@hotmail.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="3" fill="#0078D4"/>
      <path d="M4 8h6v8H4zM14 8h6v8h-6z" fill="#fff" opacity=".9"/>
      <path d="M10 12h4v4h-4z" fill="#fff"/>
    </svg>`
  },
  {
    value: '@icloud.com', label: '@icloud.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="icg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#61C0FF"/>
          <stop offset="100%" stop-color="#1B76C8"/>
        </linearGradient>
      </defs>
      <path d="M19.5 10.5a4.5 4.5 0 0 0-4.28-4.49 5.5 5.5 0 0 0-10.72 1.5A4 4 0 0 0 5 16h14a3.5 3.5 0 0 0 .5-5.5z" fill="url(#icg)"/>
    </svg>`
  },
  {
    value: '@proton.me', label: '@proton.me',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pmg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6D4AFF"/>
          <stop offset="100%" stop-color="#AA8FFF"/>
        </linearGradient>
      </defs>
      <path d="M4 4h10a6 6 0 0 1 0 12H4V4z" fill="url(#pmg)"/>
      <path d="M4 10h10a.5.5 0 0 1 0 1H4v-1z" fill="#fff" opacity=".3"/>
      <rect x="4" y="13" width="5" height="7" rx="1" fill="url(#pmg)"/>
    </svg>`
  },
  {
    value: '@protonmail.com', label: '@protonmail.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pmg2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#6D4AFF"/>
          <stop offset="100%" stop-color="#AA8FFF"/>
        </linearGradient>
      </defs>
      <path d="M4 4h10a6 6 0 0 1 0 12H4V4z" fill="url(#pmg2)"/>
      <path d="M4 10h10a.5.5 0 0 1 0 1H4v-1z" fill="#fff" opacity=".3"/>
      <rect x="4" y="13" width="5" height="7" rx="1" fill="url(#pmg2)"/>
    </svg>`
  },
  {
    value: '@zoho.com', label: '@zoho.com',
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#E42527"/>
      <text x="3" y="17" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#fff">ZOHO</text>
    </svg>`
  },
  {
    value: 'custom', label: 'Custom Domain...',
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#6366f1" stroke-width="1.5"/>
      <path d="M8 12h8M12 8v8" stroke="#6366f1" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`
  }
];

// ──────────────────────────────────────────
// State
// ──────────────────────────────────────────
let generatedEmails = [];
let filteredEmails  = [];
let history         = JSON.parse(localStorage.getItem('dotmail_history') || '[]');
let selectedDomainValue = '@gmail.com';

// ──────────────────────────────────────────
// DOM
// ──────────────────────────────────────────
const emailInput        = document.getElementById('emailInput');
const domainHidden      = document.getElementById('domainSelect');
const customDomainGrp   = document.getElementById('customDomainGroup');
const customDomainInput = document.getElementById('customDomainInput');
const generateBtn       = document.getElementById('generateBtn');
const clearBtn          = document.getElementById('clearBtn');
const statsBar          = document.getElementById('statsBar');
const totalCount        = document.getElementById('totalCount');
const uniqueCount       = document.getElementById('uniqueCount');
const dotCount          = document.getElementById('dotCount');
const resultsSection    = document.getElementById('resultsSection');
const resultSubtitle    = document.getElementById('resultSubtitle');
const emailList         = document.getElementById('emailList');
const filterInput       = document.getElementById('filterInput');
const copyAllBtn        = document.getElementById('copyAllBtn');
const exportMenuBtn     = document.getElementById('exportMenuBtn');
const exportMenu        = document.getElementById('exportMenu');
const exportCsvBtn      = document.getElementById('exportCsvBtn');
const exportExcelBtn    = document.getElementById('exportExcelBtn');
const exportPdfBtn      = document.getElementById('exportPdfBtn');
const waNumber          = document.getElementById('waNumber');
const waBtn             = document.getElementById('waBtn');
const historyList       = document.getElementById('historyList');
const historyEmpty      = document.getElementById('historyEmpty');
const clearHistoryBtn   = document.getElementById('clearHistoryBtn');
const toast             = document.getElementById('toast');

// Custom select elements
const csTrigger = document.getElementById('csTrigger');
const csList    = document.getElementById('csList');
const csLabel   = document.getElementById('csLabel');
const csLogo    = document.getElementById('csLogo');

// ──────────────────────────────────────────
// Build Custom Domain Dropdown
// ──────────────────────────────────────────
function buildDropdown() {
  csList.innerHTML = '';
  DOMAINS.forEach(d => {
    const li = document.createElement('li');
    li.className = 'cs-item';
    li.setAttribute('role', 'option');
    li.dataset.value = d.value;
    li.innerHTML = `<span class="cs-item-logo">${d.svg}</span><span class="cs-item-label mono">${d.label}</span>`;
    li.addEventListener('click', () => selectDomain(d));
    csList.appendChild(li);
  });
}

function selectDomain(d) {
  selectedDomainValue = d.value;
  domainHidden.value  = d.value;
  csLabel.textContent = d.label;
  csLogo.innerHTML    = d.svg;
  closeDropdown();

  // Mark active
  csList.querySelectorAll('.cs-item').forEach(el =>
    el.classList.toggle('active', el.dataset.value === d.value)
  );

  if (d.value === 'custom') {
    customDomainGrp.style.display = 'block';
    customDomainInput.focus();
  } else {
    customDomainGrp.style.display = 'none';
  }
}

function openDropdown() {
  csList.classList.add('open');
  csTrigger.setAttribute('aria-expanded', 'true');
}

function closeDropdown() {
  csList.classList.remove('open');
  csTrigger.setAttribute('aria-expanded', 'false');
}

csTrigger.addEventListener('click', (e) => {
  e.stopPropagation();
  csList.classList.contains('open') ? closeDropdown() : openDropdown();
});

document.addEventListener('click', closeDropdown);
csList.addEventListener('click', e => e.stopPropagation());

// Keyboard nav
csTrigger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDropdown(); }
  if (e.key === 'Escape') closeDropdown();
});

// Init dropdown
buildDropdown();
selectDomain(DOMAINS[0]);

// ──────────────────────────────────────────
// Core Generator
// ──────────────────────────────────────────
function generateDotVariants(username) {
  const chars = username.split('');
  const len   = chars.length;
  if (len === 0) return [];
  const positions = len - 1;
  const count     = 1 << positions;
  const results   = [];
  for (let i = 0; i < count; i++) {
    let variant = chars[0];
    for (let j = 0; j < positions; j++) {
      if (i & (1 << j)) variant += '.';
      variant += chars[j + 1];
    }
    results.push(variant);
  }
  return results;
}

function getSelectedDomain() {
  if (selectedDomainValue === 'custom') {
    const custom = customDomainInput.value.trim();
    if (!custom) return null;
    return custom.startsWith('@') ? custom : '@' + custom;
  }
  return selectedDomainValue;
}

function sanitizeUsername(raw) {
  return raw.toLowerCase().replace(/\s/g, '').split('@')[0].replace(/[^a-z0-9._+-]/g, '');
}

// ──────────────────────────────────────────
// Render
// ──────────────────────────────────────────
function highlightDots(email) {
  const atIdx = email.indexOf('@');
  const username = email.slice(0, atIdx);
  const domain   = email.slice(atIdx);
  const highlighted = username.split('').map(c =>
    c === '.' ? `<span class="dot-highlight">.</span>` : c
  ).join('');
  return highlighted + domain;
}

function renderEmailList(emails) {
  emailList.innerHTML = '';
  if (!emails.length) {
    emailList.innerHTML = '<li class="empty-state"><span class="empty-icon">🔍</span><p>Tidak ada email yang cocok.</p></li>';
    return;
  }
  const fragment = document.createDocumentFragment();
  emails.forEach((email, idx) => {
    const li = document.createElement('li');
    li.className = 'email-item';
    li.style.animationDelay = `${Math.min(idx * 12, 200)}ms`;
    li.innerHTML = `
      <span class="index">${String(idx + 1).padStart(3, '0')}</span>
      <span class="email-text">${highlightDots(email)}</span>
      <button class="copy-single" data-email="${email}" title="Salin">⎘</button>
    `;
    fragment.appendChild(li);
  });
  emailList.appendChild(fragment);
  emailList.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-single');
    if (btn) copyToClipboard(btn.dataset.email);
  });
}

function updateStats(emails, username) {
  totalCount.textContent  = emails.length;
  uniqueCount.textContent = new Set(emails).size;
  dotCount.textContent    = username.length - 1;
}

// ──────────────────────────────────────────
// Generate
// ──────────────────────────────────────────
function generate() {
  const rawInput = emailInput.value.trim();
  if (!rawInput) { showToast('⚠ Masukkan username email', 'error'); emailInput.focus(); return; }
  const username = sanitizeUsername(rawInput);
  if (!username.length) { showToast('⚠ Username tidak valid', 'error'); return; }
  const domain = getSelectedDomain();
  if (!domain) { showToast('⚠ Masukkan custom domain', 'error'); customDomainInput.focus(); return; }

  const variants = generateDotVariants(username);
  generatedEmails = variants.map(v => v + domain);
  filteredEmails  = [...generatedEmails];

  updateStats(generatedEmails, username);
  renderEmailList(filteredEmails);
  resultSubtitle.textContent = `${generatedEmails.length} variasi untuk "${username + domain}"`;
  filterInput.value = '';
  statsBar.style.display       = 'flex';
  resultsSection.style.display = 'block';
  setTimeout(() => resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  addToHistory(username + domain, generatedEmails.length);
  showToast(`✓ ${generatedEmails.length} email berhasil digenerate!`, 'success');
}

filterInput.addEventListener('input', () => {
  const q = filterInput.value.toLowerCase();
  filteredEmails = generatedEmails.filter(e => e.includes(q));
  renderEmailList(filteredEmails);
});

// ──────────────────────────────────────────
// Copy
// ──────────────────────────────────────────
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('✓ Disalin ke clipboard!', 'success');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('✓ Disalin ke clipboard!', 'success');
  }
}
copyAllBtn.addEventListener('click', () => {
  if (!filteredEmails.length) return showToast('Belum ada email', 'error');
  copyToClipboard(filteredEmails.join('\n'));
});

// ──────────────────────────────────────────
// Export
// ──────────────────────────────────────────
exportMenuBtn.addEventListener('click', (e) => { e.stopPropagation(); exportMenu.classList.toggle('open'); });
document.addEventListener('click', () => exportMenu.classList.remove('open'));

exportCsvBtn.addEventListener('click', () => {
  if (!filteredEmails.length) return showToast('Tidak ada email', 'error');
  const csv = 'No,Email\n' + filteredEmails.map((e, i) => `${i+1},"${e}"`).join('\n');
  downloadFile('dotmail-export.csv', csv, 'text/csv;charset=utf-8;');
  showToast('✓ CSV diunduh', 'success'); exportMenu.classList.remove('open');
});

exportExcelBtn.addEventListener('click', () => {
  if (!filteredEmails.length) return showToast('Tidak ada email', 'error');
  const data = [['No','Email'], ...filteredEmails.map((e,i) => [i+1, e])];
  const ws = XLSX.utils.aoa_to_sheet(data);
  ws['!cols'] = [{ wch: 6 }, { wch: 45 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Emails');
  XLSX.writeFile(wb, 'dotmail-export.xlsx');
  showToast('✓ Excel diunduh', 'success'); exportMenu.classList.remove('open');
});

exportPdfBtn.addEventListener('click', () => {
  if (!filteredEmails.length) return showToast('Tidak ada email', 'error');
  exportMenu.classList.remove('open');
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const pageW = doc.internal.pageSize.getWidth(), margin = 18;
  let y = margin;
  doc.setFillColor(99, 102, 241); doc.rect(0, 0, pageW, 30, 'F');
  doc.setFont('helvetica','bold'); doc.setFontSize(18); doc.setTextColor(255,255,255);
  doc.text('DotMail Generator — Export', margin, 19);
  doc.setFontSize(9); doc.setFont('helvetica','normal');
  doc.text(`Generated: ${new Date().toLocaleString('id-ID')}  |  Total: ${filteredEmails.length} emails`, margin, 26);
  y = 40;
  doc.setFillColor(230,231,253); doc.rect(margin-2, y-5, pageW-margin*2+4, 8, 'F');
  doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(40,40,80);
  doc.text('No.', margin, y); doc.text('Email Address', margin+16, y); y += 6;
  doc.setFont('courier','normal'); doc.setFontSize(8); doc.setTextColor(30,30,60);
  filteredEmails.forEach((email, i) => {
    if (y > 280) {
      doc.addPage(); y = margin;
      doc.setFillColor(230,231,253); doc.rect(margin-2, y-5, pageW-margin*2+4, 8, 'F');
      doc.setFont('helvetica','bold'); doc.setFontSize(9); doc.setTextColor(40,40,80);
      doc.text('No.', margin, y); doc.text('Email Address', margin+16, y); y += 6;
      doc.setFont('courier','normal'); doc.setFontSize(8); doc.setTextColor(30,30,60);
    }
    if (i % 2 === 1) { doc.setFillColor(245,245,255); doc.rect(margin-2, y-4, pageW-margin*2+4, 6, 'F'); }
    doc.text(String(i+1).padStart(3,'0'), margin, y);
    doc.text(email, margin+16, y); y += 6;
  });
  const pages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p); doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(160,160,160);
    doc.text(`Halaman ${p} / ${pages}`, pageW-margin, 290, { align: 'right' });
    doc.text('DotMail Generator', margin, 290);
  }
  doc.save('dotmail-export.pdf');
  showToast('✓ PDF diunduh', 'success');
});

function downloadFile(filename, content, mimeType) {
  const blob = new Blob(['\uFEFF' + content], { type: mimeType });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ──────────────────────────────────────────
// Share
// ──────────────────────────────────────────

waBtn.addEventListener('click', () => {
  if (!filteredEmails.length) return showToast('Tidak ada email', 'error');
  let num = waNumber.value.trim().replace(/[\s\-().]/g, '');
  if (!num) return showToast('⚠ Masukkan nomor WhatsApp', 'error');
  if (num.startsWith('0'))      num = '62' + num.slice(1);
  else if (num.startsWith('+')) num = num.slice(1);
  else if (!num.startsWith('62')) num = '62' + num;
  const body = `*DotMail Generator*\n\nBerikut daftar variasi email:\n\n` +
    filteredEmails.slice(0, 50).map((e, i) => `${i+1}. ${e}`).join('\n') +
    (filteredEmails.length > 50 ? `\n...dan ${filteredEmails.length - 50} lainnya` : '') +
    `\n\nTotal: ${filteredEmails.length} email`;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(body)}`, '_blank');
});

// ──────────────────────────────────────────
// History
// ──────────────────────────────────────────
function addToHistory(email, count) {
  const entry = { id: Date.now(), email, count, time: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }) };
  if (history.length && history[0].email === email) history[0] = entry;
  else { history.unshift(entry); if (history.length > 30) history.pop(); }
  saveHistory(); renderHistory();
}

function saveHistory() { localStorage.setItem('dotmail_history', JSON.stringify(history)); }

function renderHistory() {
  if (!history.length) {
    historyEmpty.style.display = 'block';
    Array.from(historyList.querySelectorAll('.history-item')).forEach(el => el.remove());
    return;
  }
  historyEmpty.style.display = 'none';
  historyList.querySelectorAll('.history-item').forEach(el => el.remove());
  history.forEach(entry => {
    const div = document.createElement('div');
    div.className = 'history-item'; div.dataset.id = entry.id;
    div.innerHTML = `
      <span class="history-email">${entry.email}</span>
      <div class="history-meta">
        <span class="history-count">${entry.count} email</span>
        <span class="history-time">${entry.time}</span>
      </div>
      <button class="history-delete" data-id="${entry.id}" title="Hapus">✕</button>
    `;
    historyList.appendChild(div);
  });
  historyList.querySelectorAll('.history-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.history-delete')) return;
      const entry = history.find(h => h.id == item.dataset.id);
      if (!entry) return;
      const atIdx  = entry.email.indexOf('@');
      const uname  = entry.email.slice(0, atIdx);
      const domain = entry.email.slice(atIdx);
      emailInput.value = uname;
      const found = DOMAINS.find(d => d.value === domain);
      if (found) selectDomain(found);
      else { selectDomain(DOMAINS[DOMAINS.length - 1]); customDomainInput.value = domain; }
      generate();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  historyList.querySelectorAll('.history-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      history = history.filter(h => h.id != btn.dataset.id);
      saveHistory(); renderHistory();
      showToast('Riwayat dihapus', 'success');
    });
  });
}

clearHistoryBtn.addEventListener('click', () => {
  if (!history.length) return;
  if (confirm('Hapus semua riwayat?')) {
    history = []; saveHistory(); renderHistory();
    showToast('✓ Semua riwayat dihapus', 'success');
  }
});

// ──────────────────────────────────────────
// Toast
// ──────────────────────────────────────────
let toastTimer;
function showToast(msg, type = '') {
  clearTimeout(toastTimer);
  toast.textContent = msg; toast.className = `toast ${type} show`;
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ──────────────────────────────────────────
// Buttons
// ──────────────────────────────────────────
generateBtn.addEventListener('click', generate);
emailInput.addEventListener('keydown', e => { if (e.key === 'Enter') generate(); });
customDomainInput.addEventListener('keydown', e => { if (e.key === 'Enter') generate(); });
clearBtn.addEventListener('click', () => {
  emailInput.value = ''; filterInput.value = '';
  generatedEmails = []; filteredEmails = []; emailList.innerHTML = '';
  statsBar.style.display = 'none'; resultsSection.style.display = 'none';
  emailInput.focus();
});

// ──────────────────────────────────────────
// Init
// ──────────────────────────────────────────
renderHistory();
emailInput.focus();
