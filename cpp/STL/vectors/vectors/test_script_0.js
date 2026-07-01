
// ---------- storage helpers (persistent, personal) ----------
async function storeGet(key){
  try{ 
    if(window.storage) { const r = await window.storage.get(key, false); return r ? r.value : null; }
    return localStorage.getItem(key);
  } catch(e){ return localStorage.getItem(key); }
}
async function storeSet(key, value){
  try{ 
    if(window.storage) { await window.storage.set(key, value, false); }
    else { localStorage.setItem(key, value); }
  }catch(e){ localStorage.setItem(key, value); }
}
async function storeListKeys(prefix){
  try{ 
    if(window.storage) { const r = await window.storage.list(prefix, false); return (r && r.keys) ? r.keys : []; }
    return Object.keys(localStorage).filter(k => k.startsWith(prefix));
  } catch(e){ return Object.keys(localStorage).filter(k => k.startsWith(prefix)); }
}

// ---------- sidebar toggle (mobile) ----------
const sidebar = document.getElementById('sidebar');
document.getElementById('sidebarToggle').addEventListener('click', ()=>{
  sidebar.classList.toggle('open');
});
document.querySelectorAll('.toc a').forEach(a=>{
  a.addEventListener('click', ()=> sidebar.classList.remove('open'));
});

// ---------- copy buttons on code blocks ----------
document.querySelectorAll('pre.code-block').forEach(pre=>{
  const wrap = document.createElement('div');
  wrap.className = 'code-wrap';
  pre.parentNode.insertBefore(wrap, pre);
  wrap.appendChild(pre);
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  btn.addEventListener('click', ()=>{
    const text = pre.innerText.replace(/^C\+\+\n?/, '');
    navigator.clipboard.writeText(pre.innerText).then(()=>{
      btn.textContent = 'Copied!';
      setTimeout(()=> btn.textContent = 'Copy', 1200);
    });
  });
  wrap.appendChild(btn);
});

// ---------- highlight.js ----------
if(window.hljs){
  document.querySelectorAll('pre code.language-cpp').forEach(el=> hljs.highlightElement(el));
}

// ---------- search filter ----------
function filterNav(q){
  q = q.trim().toLowerCase();
  document.querySelectorAll('.toc-chapter').forEach(det=>{
    let anyMatch = false;
    det.querySelectorAll('.toc-sub-list li').forEach(li=>{
      const txt = li.textContent.toLowerCase();
      const match = q === '' || txt.includes(q);
      li.style.display = match ? '' : 'none';
      if(match) anyMatch = true;
    });
    const chTitle = det.querySelector('summary').textContent.toLowerCase();
    if(q !== '' && chTitle.includes(q)) anyMatch = true;
    det.style.display = anyMatch ? '' : 'none';
    if(q !== '' && anyMatch) det.open = true;
  });
  document.querySelectorAll('.toc-appendix-list li').forEach(li=>{
    const txt = li.textContent.toLowerCase();
    li.style.display = (q==='' || txt.includes(q)) ? '' : 'none';
  });
}
window.filterNav = filterNav;

// ---------- active link highlight via IntersectionObserver ----------
const allTargets = document.querySelectorAll('.subsection, .appendix');
const navLinks = {};
document.querySelectorAll('.toc a[data-target]').forEach(a=>{
  navLinks[a.dataset.target] = a;
});

const seenIds = new Set();
const totalTrackable = allTargets.length;

function updateMemSlots(){
  const slots = document.querySelectorAll('.mem-slot');
  const pct = totalTrackable ? seenIds.size / totalTrackable : 0;
  const fillCount = Math.round(pct * slots.length);
  slots.forEach((s,i)=> s.classList.toggle('filled', i < fillCount));
  document.getElementById('visitedCount').textContent = seenIds.size;
  document.getElementById('visitedTotal').textContent = totalTrackable;
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    const id = entry.target.id;
    if(entry.isIntersecting){
      document.querySelectorAll('.toc a.active').forEach(a=>a.classList.remove('active'));
      const link = navLinks[id];
      if(link){
        link.classList.add('active');
        const parentDetails = link.closest('details');
        if(parentDetails) parentDetails.open = true;
        link.scrollIntoView({block:'nearest'});
      }
      if(!seenIds.has(id)){
        seenIds.add(id);
        storeSet('visited-'+id, '1');
        recordActivity();
        updateMemSlots();
      }
    }
  });
}, {rootMargin: '-15% 0px -70% 0px'});
allTargets.forEach(t=> io.observe(t));

// ---------- flip cards ----------
document.querySelectorAll('.flip-card').forEach(card=>{
  card.addEventListener('click', (e)=>{
    if(e.target.closest('a') || e.target.tagName === 'INPUT') return;
    card.classList.toggle('flipped');
  });
});

// ---------- generic tracked checkboxes (reviewed / solved) ----------
document.querySelectorAll('.track-check').forEach(cb=>{
  cb.addEventListener('click', e=> e.stopPropagation());
  cb.addEventListener('change', async ()=>{
    const key = cb.dataset.key;
    await storeSet(key, cb.checked ? '1' : '0');
    recordActivity();
    if(cb.classList.contains('solve-check')){
      const card = cb.closest('.problem-card');
      card.classList.toggle('solved', cb.checked);
      updateGroupProgress(cb.dataset.group);
      updateStats();
    }
    if(cb.dataset.key && cb.dataset.key.startsWith('qa-')){
      updateStats();
    }
  });
});

function updateGroupProgress(group){
  const cards = document.querySelectorAll(`.problem-card[data-group="${group}"]`);
  const solved = document.querySelectorAll(`.problem-card[data-group="${group}"] .solve-check:checked`).length;
  const el = document.querySelector(`.group-progress[data-group="${group}"]`);
  if(el) el.textContent = `${solved}/${cards.length} solved`;
}

async function updateStats(){
  const solvedTotal = document.querySelectorAll('.solve-check:checked').length;
  const solvedMax = document.querySelectorAll('.solve-check').length;
  const reviewedTotal = document.querySelectorAll('.track-check:not(.solve-check):checked').length;
  const reviewedMax = document.querySelectorAll('.track-check:not(.solve-check)').length;
  document.getElementById('solvedCount').textContent = solvedTotal;
  document.getElementById('solvedTotal').textContent = solvedMax;
  document.getElementById('reviewedCount').textContent = reviewedTotal;
  document.getElementById('reviewedTotal').textContent = reviewedMax;
}

// ---------- restore persisted state on load ----------
async function restoreState(){
  const visited = await storeListKeys('visited-');
  visited.forEach(k=> seenIds.add(k.replace('visited-','')));
  updateMemSlots();

  document.querySelectorAll('.track-check').forEach(async cb=>{
    const val = await storeGet(cb.dataset.key);
    if(val === '1'){
      cb.checked = true;
      if(cb.classList.contains('solve-check')){
        cb.closest('.problem-card').classList.add('solved');
      }
    }
  });
  document.querySelectorAll('.group-progress').forEach(el=> updateGroupProgress(el.dataset.group));
  setTimeout(updateStats, 400);
  setTimeout(() => {
    document.querySelectorAll('.topic-check').forEach(cb => {
       if (seenIds.has(cb.dataset.id)) cb.checked = true;
    });
    document.querySelectorAll('.toc-chapter').forEach(details => {
       const topics = Array.from(details.querySelectorAll('.topic-check'));
       if (topics.length > 0) {
          const allChecked = topics.every(t => t.checked);
          const chCb = details.querySelector('.chapter-check');
          if (chCb) chCb.checked = allChecked;
       }
    });
  }, 100);
}
restoreState();

// ---------- back to top ----------
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', ()=>{
  backTop.classList.toggle('show', window.scrollY > 800);
});
backTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));


