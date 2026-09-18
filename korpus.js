/* Turkigo‘y adiblar — korpus mexanizmi (ochiq manba) */
(function () {
  const ADIBLAR = {
    lutfiy: "Lutfiy", sakkokiy: "Sakkokiy", gadoiy: "Gadoiy",
    xorazmiy: "Hofiz Xorazmiy", atoyi: "Atoyi"
  };
  const K = Array.isArray(window.KORPUS) ? window.KORPUS : [];
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  // Tutuq belgilarini yagona shaklga keltirish: ʻ ’ ‘ ' ` ʼ → '
  const norm = (t) => String(t).toLowerCase().replace(/[ʻʼ’‘`´']/g, "'").replace(/\s+/g, " ");
  const tokens = (t) => norm(t).match(/[a-zа-яёқғҳўʻ'\u00c0-\u024f]+/giu) || [];

  // Statistika
  let sozlar = 0;
  const hisob = {};
  K.forEach(g => {
    hisob[g.adib] = (hisob[g.adib] || 0) + 1;
    g.baytlar.forEach(b => b.lotin.forEach(m => { sozlar += tokens(m).length; }));
  });
  $("st-matn").textContent = K.length;
  $("st-soz").textContent = sozlar;
  document.querySelectorAll(".cnt[data-adib]").forEach(p => {
    const n = hisob[p.dataset.adib] || 0;
    p.textContent = n ? `Devon · ${n} ta matn` : "Devon · matn yuklanmoqda";
  });

  // Modal
  const mbg = $("mbg"), modal = $("modal");
  const yop = () => mbg.classList.remove("open");
  mbg.addEventListener("click", e => { if (e.target === mbg) yop(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") yop(); });
  const ochish = (html) => {
    modal.innerHTML = '<button class="close" aria-label="Yopish">×</button>' + html;
    modal.querySelector(".close").onclick = yop;
    mbg.classList.add("open");
    modal.scrollIntoView({ block: "start" });
  };

  function devon(adib) {
    const list = K.filter(g => g.adib === adib);
    let h = `<h2>${esc(ADIBLAR[adib] || adib)}</h2><div class="meta">Devon</div>`;
    if (!list.length) h += '<p class="empty-note">Bu adib matnlari hozirda raqamlashtirilmoqda.</p>';
    else h += '<div class="glist">' + list.map(g =>
      `<button data-id="${esc(g.id)}">${esc(g.nom)} <span style="color:var(--muted);font-size:13px">· ${esc(g.janr)}${g.vazn ? " · " + esc(g.vazn) : ""}</span></button>`).join("") + "</div>";
    ochish(h);
    modal.querySelectorAll(".glist button").forEach(b => b.onclick = () => matn(b.dataset.id, null, adib));
  }

  function matn(id, belgi, qaytish) {
    const g = K.find(x => x.id === id);
    if (!g) return;
    const m = g.nashr || {};
    const iqtibos = [m.tuzuvchi, m.nomi, [m.shahar, m.nashriyot].filter(Boolean).join(": "), m.yil].filter(Boolean).join(". ");
    let h = qaytish ? '<button class="back">← Devonga qaytish</button>' : "";
    h += `<h2>${esc(g.nom)}</h2>
      <div class="meta"><b>${esc(ADIBLAR[g.adib] || g.adib)}</b> · ${esc(g.janr)}${g.vazn ? " · Vazn: " + esc(g.vazn) : ""}${g.taqte ? " · Taqteʼ: " + esc(g.taqte) : ""}<br>
      Nashr: ${esc([iqtibos || "maʼlumot kiritilmoqda", m.sahifa, m.isbn ? "ISBN " + m.isbn : ""].filter(Boolean).join(". – "))}.${m.yozuv ? " (asl nashr yozuvi: " + esc(m.yozuv) + ")" : ""}${g.izoh ? "<br>Izoh: " + esc(g.izoh) : ""}${g.vazn ? "" : "<br><i>Aruz-vazn annotatsiyasi keyingi bosqichda qoʻshiladi.</i>"}</div>`;
    g.baytlar.forEach((b, i) => {
      const hl = belgi === i ? " hl" : "";
      const sah = b.sahifa ? ` · ${esc(b.sahifa)}` : "";
      const lug = b.lugat ? `<div class="lugat">${Object.entries(b.lugat).map(([k, v]) => `<b>${esc(k)}</b> – ${esc(v)}`).join("; ")}</div>` : "";
      h += `<div class="bayt one"><div class="no">${i + 1}-bayt${sah}</div>
        <div class="lotin${hl}">${b.lotin.map(esc).join("<br>")}${lug}</div></div>`;
    });
    ochish(h);
    const bk = modal.querySelector(".back");
    if (bk) bk.onclick = () => devon(qaytish);
  }

  document.querySelectorAll("button[data-adib]").forEach(b => b.onclick = () => devon(b.dataset.adib));

  // Qidiruv (KWIC)
  function qidir() {
    const q = norm($("q").value.trim());
    const box = $("natijalar");
    box.hidden = false;
    if (!q) { box.innerHTML = ""; box.hidden = true; return; }
    const topildi = [];
    K.forEach(g => {
      const adibMos = norm(ADIBLAR[g.adib] || "").includes(q) || norm(g.nom).includes(q);
      g.baytlar.forEach((b, i) => b.lotin.forEach(misra => {
        if (norm(misra).includes(q) || (adibMos && i === 0 && misra === b.lotin[0]))
          topildi.push({ g, i, misra });
      }));
    });
    const belgila = (t) => {
      const n = norm(t); let out = "", pos = 0, j;
      // norm() uzunlikni saqlaydi (bo'shliqlardan tashqari) — belgilash uchun asl matn ustida ishlaymiz
      const src = t.replace(/\s+/g, " ");
      while (q && (j = n.indexOf(q, pos)) !== -1) {
        out += esc(src.slice(pos, j)) + "<mark>" + esc(src.slice(j, j + q.length)) + "</mark>";
        pos = j + q.length;
      }
      return out + esc(src.slice(pos));
    };
    box.innerHTML = `<h3>Qidiruv natijalari: ${topildi.length}</h3>` + (topildi.length
      ? topildi.slice(0, 300).map((r, k) => `<div class="kwic" data-k="${k}"><div class="line">${belgila(r.misra)}</div>
          <div class="ref">${esc(ADIBLAR[r.g.adib] || r.g.adib)} · ${esc(r.g.nom)} · ${r.i + 1}-bayt</div></div>`).join("")
      : '<p class="empty-note">Hech narsa topilmadi.</p>');
    box.querySelectorAll(".kwic").forEach(el => el.onclick = () => {
      const r = topildi[+el.dataset.k]; matn(r.g.id, r.i, r.g.adib);
    });
    box.scrollIntoView({ behavior: "smooth" });
  }
  $("qbtn").onclick = qidir;
  $("q").addEventListener("keydown", e => { if (e.key === "Enter") qidir(); });
})();
