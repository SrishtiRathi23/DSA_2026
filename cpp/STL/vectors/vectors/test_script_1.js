
// ----- Pagination Logic injected dynamically -----
window.addEventListener('DOMContentLoaded', () => {
  // Inject manual checkboxes
  document.querySelectorAll('.toc-chapter summary').forEach(summary => {
    summary.style.display = 'flex';
    summary.style.justifyContent = 'space-between';
    summary.style.alignItems = 'center';
    
    const details = summary.parentElement;
    const chId = details.getAttribute('data-ch');
    
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'chapter-check';
    cb.dataset.ch = chId;
    cb.style.marginLeft = '10px';
    cb.style.cursor = 'pointer';
    cb.style.flexShrink = '0';
    
    cb.addEventListener('click', (e) => e.stopPropagation());
    cb.addEventListener('change', async (e) => {
       const isChecked = cb.checked;
       const topics = details.querySelectorAll('.topic-check');
       let changedCount = 0;
       for (const tcb of topics) {
          if (tcb.checked !== isChecked) {
             tcb.checked = isChecked;
             changedCount++;
             const tId = tcb.dataset.id;
             if (isChecked) {
                seenIds.add(tId);
                await storeSet('visited-' + tId, '1');
             } else {
                seenIds.delete(tId);
                await storeSet('visited-' + tId, '0');
             }
          }
       }
       if (isChecked && changedCount > 0) recordActivity(changedCount); else recordActivity(1);
       updateDashboard();
    });
    summary.appendChild(cb);
  });

  document.querySelectorAll('.toc-sub-list li').forEach(li => {
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    
    const a = li.querySelector('a');
    if(a) {
       const tId = a.getAttribute('data-target');
       const cb = document.createElement('input');
       cb.type = 'checkbox';
       cb.className = 'topic-check';
       cb.dataset.id = tId;
       cb.style.marginLeft = '10px';
       cb.style.cursor = 'pointer';
       cb.style.flexShrink = '0';
       
       cb.addEventListener('click', (e) => e.stopPropagation());
       cb.addEventListener('change', async (e) => {
          if (cb.checked) {
             seenIds.add(tId);
             await storeSet('visited-' + tId, '1');
          } else {
             seenIds.delete(tId);
             await storeSet('visited-' + tId, '0');
          }
          
          const chapterDetails = li.closest('.toc-chapter');
          if (chapterDetails) {
             const allTopics = Array.from(chapterDetails.querySelectorAll('.topic-check'));
             const allChecked = allTopics.every(t => t.checked);
             const chCb = chapterDetails.querySelector('.chapter-check');
             if (chCb) chCb.checked = allChecked;
          }
          
          recordActivity();
          updateDashboard();
       });
       li.appendChild(cb);
    }
  });
  const pages = Array.from(document.querySelectorAll('.chapter, .appendix, .hero, .part-divider'));
  if(pages.length === 0) return;
  
  // Make first page active by default
  pages[0].classList.add('active-page');

  // Add Next/Prev buttons
  pages.forEach((page, index) => {
    const navDiv = document.createElement('div');
    navDiv.className = 'page-nav-buttons';
    navDiv.style.display = 'flex';
    navDiv.style.justifyContent = 'space-between';
    navDiv.style.marginTop = '40px';
    navDiv.style.paddingTop = '20px';
    navDiv.style.borderTop = '1px solid var(--border)';
    
    if(index > 0) {
      const prevBtn = document.createElement('button');
      prevBtn.textContent = '&#9664; Previous Section';
      prevBtn.className = 'nav-btn';
      prevBtn.onclick = () => {
        pages.forEach(p => p.classList.remove('active-page'));
        pages[index - 1].classList.add('active-page');
        window.scrollTo(0, 0);
      };
      navDiv.appendChild(prevBtn);
    } else {
      navDiv.appendChild(document.createElement('div'));
    }
    
    if(index < pages.length - 1) {
      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next Section &#9654;';
      nextBtn.className = 'nav-btn';
      nextBtn.onclick = () => {
        pages.forEach(p => p.classList.remove('active-page'));
        pages[index + 1].classList.add('active-page');
        window.scrollTo(0, 0);
      };
      navDiv.appendChild(nextBtn);
    }
    
    page.appendChild(navDiv);
  });

  // Handle TOC clicks
  document.querySelectorAll('.toc a[href^="#"], .nav-brand').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if(href === '#top') {
        e.preventDefault();
        pages.forEach(p => p.classList.remove('active-page'));
        pages[0].classList.add('active-page');
        window.scrollTo(0, 0);
        return;
      }
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if(targetElement) {
        const page = targetElement.closest('.chapter, .appendix, .hero, .part-divider');
        if(page) {
          e.preventDefault();
          pages.forEach(p => p.classList.remove('active-page'));
          page.classList.add('active-page');
          
          history.pushState(null, null, '#' + targetId);
          
          document.querySelectorAll('.toc a.active').forEach(act => act.classList.remove('active'));
          if(this.classList.contains('toc-link')) {
            this.classList.add('active');
          }
          
          setTimeout(() => {
             targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    });
  });

  // Handle Chapter clicks (clicking the chapter name itself)
  document.querySelectorAll('.toc-chapter summary').forEach(summary => {
    summary.addEventListener('click', function(e) {
      const chapterId = this.parentElement.getAttribute('data-ch');
      if (chapterId) {
        const targetElement = document.getElementById(chapterId);
        if (targetElement) {
          pages.forEach(p => p.classList.remove('active-page'));
          targetElement.classList.add('active-page');
          history.pushState(null, null, '#' + chapterId);
          window.scrollTo(0, 0);
          
          document.querySelectorAll('.toc a.active').forEach(act => act.classList.remove('active'));
        }
      }
    });
  });

  // Handle initial URL hash on load
  const hash = window.location.hash.substring(1);
  if(hash) {
    const target = document.getElementById(hash);
    if(target) {
      const page = target.closest('.chapter, .appendix, .hero, .part-divider');
      if(page) {
        pages.forEach(p => p.classList.remove('active-page'));
        page.classList.add('active-page');
        setTimeout(() => target.scrollIntoView(), 100);
      }
    }
  }
});
  // Handle desktop sidebar collapse
  const desktopCollapseBtn = document.getElementById('desktopCollapseBtn');
  if(desktopCollapseBtn) {
    desktopCollapseBtn.addEventListener('click', () => {
      document.querySelector('.app').classList.add('sidebar-collapsed');
    });
  }

  // Update existing sidebarToggle to handle desktop expand
  const sToggle = document.getElementById('sidebarToggle');
  sToggle.addEventListener('click', (e) => {
    if (window.innerWidth > 980) {
      document.querySelector('.app').classList.remove('sidebar-collapsed');
      e.stopImmediatePropagation();
    }
  });

// Dashboard Logic
async function recordActivity(count = 1) {
  const today = new Date().toISOString().split('T')[0];
  const actLogStr = await storeGet('activity-log') || '{}';
  let actLog = JSON.parse(actLogStr);
  actLog[today] = (actLog[today] || 0) + count;
  await storeSet('activity-log', JSON.stringify(actLog));
  updateDashboard();
}

async function updateDashboard() {
  const actLogStr = await storeGet('activity-log') || '{}';
  const actLog = JSON.parse(actLogStr);
  
  let streak = 0;
  let d = new Date();
  while(true) {
     const dateStr = d.toISOString().split('T')[0];
     if (actLog[dateStr]) {
       streak++;
       d.setDate(d.getDate() - 1);
     } else {
       if (streak === 0 && d.toISOString().split('T')[0] === new Date().toISOString().split('T')[0]) {
          d.setDate(d.getDate() - 1);
          const yestStr = d.toISOString().split('T')[0];
          if(actLog[yestStr]) {
             streak++;
             d.setDate(d.getDate() - 1);
             continue;
          }
       }
       break;
     }
  }
  const ds = document.getElementById('dailyStreak');
  if (ds) ds.textContent = streak;

  const graphEl = document.getElementById('githubGraph');
  if(graphEl) {
    graphEl.innerHTML = '';
    const today = new Date();
    const days = [];
    for(let i=89; i>=0; i--) {
       const past = new Date(today);
       past.setDate(today.getDate() - i);
       days.push(past.toISOString().split('T')[0]);
    }
    
    let col = null; graphEl.style.justifyContent = 'center'; graphEl.style.gap = '6px';
    days.forEach((dateStr, idx) => {
      if(idx % 7 === 0) {
        col = document.createElement('div');
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        col.style.gap = '6px';
        graphEl.appendChild(col);
      }
      const cell = document.createElement('div');
      cell.style.width = '18px';
      cell.style.height = '18px';
      cell.style.borderRadius = '4px';
      cell.title = dateStr + ': ' + (actLog[dateStr] || 0) + ' activities';
      
      const count = actLog[dateStr] || 0;
      if (count === 0) cell.style.background = 'var(--bg-card-2)';
      else if (count === 1) cell.style.background = 'rgba(56,189,248, 0.4)';
      else if (count === 2) cell.style.background = 'rgba(14,165,233, 0.6)';
      else if (count === 3) cell.style.background = 'rgba(2,132,199, 0.8)';
      else cell.style.background = 'rgba(3,105,161, 1)';
      
      col.appendChild(cell);
    });
  }

  const totalTopics = document.querySelectorAll('.subsection, .appendix').length;
  const tc = document.getElementById('topicsCompleted');
  if (tc) tc.textContent = seenIds.size;
  const tt = document.getElementById('topicsTotal');
  if (tt) tt.textContent = totalTopics;

  let chCompleted = 0;
  document.querySelectorAll('.chapter').forEach(ch => {
     if(ch.id === 'home') return;
     const subs = ch.querySelectorAll('.subsection');
     if(subs.length > 0) {
        const allSeen = Array.from(subs).every(sub => seenIds.has(sub.id));
        if(allSeen) chCompleted++;
     }
  });
  const cc = document.getElementById('chaptersCompleted');
  if (cc) cc.textContent = chCompleted;
}

updateDashboard();

