const slides=[...document.querySelectorAll('.slide')];
const dotsHost=document.getElementById('dots');
let current=0,locked=false;

slides.forEach((s,i)=>{
  const b=document.createElement('button');
  b.setAttribute('aria-label','Go to slide '+(i+1));
  b.onclick=()=>go(i);
  dotsHost.appendChild(b);
});
const dots=[...dotsHost.children];

function go(i){
  i=Math.max(0,Math.min(slides.length-1,i));
  const direction=i>current?'forward':i<current?'backward':'same';
  current=i;
  slides.forEach((s,j)=>{
    s.classList.toggle('active',j===i);
    s.classList.remove('animate-in','from-forward','from-backward');
  });
  dots.forEach((d,j)=>d.classList.toggle('active',j===i));
  document.getElementById('slideNo').textContent=String(i+1).padStart(2,'0');
  document.getElementById('slideTitle').textContent=slides[i].dataset.title||'';
  if(direction==='forward') slides[i].classList.add('from-forward');
  if(direction==='backward') slides[i].classList.add('from-backward');
  requestAnimationFrame(()=>requestAnimationFrame(()=>slides[i].classList.add('animate-in')));
}
function next(){go(current+1)} function prev(){go(current-1)}
document.getElementById('nextBtn').onclick=next;
document.getElementById('prevBtn').onclick=prev;
addEventListener('keydown',e=>{if(['ArrowDown','ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();next()}if(['ArrowUp','ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}});
addEventListener('wheel',e=>{if(locked)return;locked=true;e.deltaY>0?next():prev();setTimeout(()=>locked=false,520)},{passive:true});
let touchY=null;addEventListener('touchstart',e=>touchY=e.touches[0].clientY,{passive:true});addEventListener('touchend',e=>{if(touchY===null)return;const dy=touchY-e.changedTouches[0].clientY;if(Math.abs(dy)>45)(dy>0?next():prev());touchY=null},{passive:true});
go(0);

const effects={mfa:[26,8,2],least:[20,20,2],audit:[3,32,3],backup:[2,4,45],trusted:[22,10,3]},chosen=new Set();
document.querySelectorAll('[data-cia]').forEach(b=>b.onclick=()=>{const k=b.dataset.cia;b.classList.toggle('on');b.classList.contains('on')?chosen.add(k):chosen.delete(k);let c=25,i=25,a=25;chosen.forEach(x=>{c+=effects[x][0];i+=effects[x][1];a+=effects[x][2]});c=Math.min(100,c);i=Math.min(100,i);a=Math.min(100,a);[['C',c],['I',i],['A',a]].forEach(([k,v])=>{document.getElementById('bar'+k).style.setProperty('--v',v+'%');document.getElementById('val'+k).textContent=v});document.getElementById('ciaText').textContent=chosen.size>=4?'Layered controls now reinforce all three CIA properties.':chosen.size>=2?'The design is improving, but important gaps remain.':'Baseline only. The environment still relies too heavily on trust.'});

document.querySelectorAll('[data-person]').forEach(b=>b.onclick=()=>{const t={james:'Legitimate use: the system sees james_analyst and the person really is James.',john:'Credential theft: the system may still see james_analyst even though John is using the account. MFA helps expose the mismatch.',molly:'Credential sharing: the system again sees james_analyst even though Molly is using the account. Shared credentials destroy accountability.'};document.getElementById('identityAnswer').textContent=t[b.dataset.person]});

document.querySelectorAll('[data-monitor]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-monitor]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const a=b.dataset.monitor==='active';document.getElementById('flow').innerHTML=a?'<div class="node">Traffic</div><b>→</b><div class="node">R/W security element</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div>':'<div class="node">Traffic</div><b>↘</b><div class="node">Agent / probe</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div>';document.getElementById('monitorText').textContent=a?'Active monitoring can block, discard or quarantine traffic.':'Passive monitoring observes a copy of traffic but cannot directly change the live flow.'});

const scope=document.getElementById('scope');
for(let i=0;i<34;i++){const x=document.createElement('i');x.style.height=(18+Math.random()*55)+'px';scope.appendChild(x)}
function baseline(){[...scope.children].forEach(x=>{x.style.height=(18+Math.random()*55)+'px';x.classList.remove('hot')});document.getElementById('scopeText').textContent='The bars represent a stable traffic baseline.'}
document.getElementById('spike').onclick=()=>{[...scope.children].forEach((x,i)=>{const hot=i>21&&i<29;x.style.height=(hot?125+Math.random()*45:18+Math.random()*55)+'px';x.classList.toggle('hot',hot)});document.getElementById('scopeText').textContent='Traffic has jumped beyond the baseline. Monitoring should alert, correlate context and support containment.'};
document.getElementById('normalise').onclick=baseline;

const ids=['s1','s2','s3','s4','s5'];
function risk(){const v=ids.map(id=>+document.getElementById(id).value);ids.forEach((id,i)=>document.getElementById(id+'v').textContent=v[i]);const score=Math.max(0,Math.min(10,(v[0]*.18+v[1]*.18+v[2]*.16+v[3]*.13+v[4]*.35)/10));document.getElementById('riskN').textContent=score.toFixed(1);let band='LOW',txt='Track and remediate through routine processes.';if(score>=9){band='CRITICAL';txt='Immediate action: prioritise before routine work.'}else if(score>=7){band='HIGH';txt='Expedite remediation ahead of routine work.'}else if(score>=4){band='MEDIUM';txt='Schedule remediation within normal patch cycles.'}document.getElementById('riskBand').textContent=band;document.getElementById('riskText').textContent=txt}
ids.forEach(id=>document.getElementById(id).oninput=risk);risk();

document.querySelectorAll('[data-protect]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-protect]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const r=document.getElementById('record'),n=document.getElementById('protectNote'),m=b.dataset.protect;if(m==='encrypt'){r.textContent='CIPHERTEXT: 9F A1 73 C2 5E 0B 44 D8 ...';n.innerHTML='<b>ENCRYPTION:</b> reversible cryptographic protection when the authorised key is available.'}else if(m==='token'){r.textContent='NAME: ALEX MORGAN\nCARD TOKEN: tok_7Q2-91X-Z44\nSALARY: $148,000\nACCOUNT TOKEN: tok_AU_551';n.innerHTML='<b>TOKENISATION:</b> replace sensitive values with stand-ins while originals remain protected in a token vault.'}else if(m==='mask'){r.textContent='NAME: ALEX M*****\nCARD: 541 *** **** 207\nSALARY: $***,***\nACCOUNT: AU-***17';n.innerHTML='<b>MASKING:</b> show only the portion required by the role.'}else{r.textContent='REQUEST: QUARANTINED\nSESSION: BLOCKED\nACTIVITY: LOGGED\nALERT: SENT';n.innerHTML='<b>QUARANTINE:</b> stop suspicious access, preserve evidence and alert defenders.'}});

document.querySelectorAll('[data-device]').forEach(b=>b.onclick=()=>{const d=b.closest('.device'),m={allow:'Compliant or managed endpoint: allow under policy, then continue monitoring and patch enforcement.',review:'Review required: personal device with outdated patching should receive restricted access until it meets policy.',block:'Block: a jailbroken device bypasses OS restrictions and represents elevated risk.'};if(b.dataset.device==='block')d.classList.add('block');document.getElementById('deviceNote').textContent=m[b.dataset.device]});

document.querySelectorAll('[data-stop]').forEach(b=>b.onclick=()=>{const step=b.closest('.breach-step'),m={mfa:'Add stronger third-party credential controls and MFA.',least:'Use least privilege and tighter vendor access boundaries.',segment:'Use network segmentation to constrain movement.',endpoint:'Harden and patch POS endpoints; use point-to-point encryption where appropriate.',monitor:'Use monitoring feeding SIEM/TIP to detect exfiltration earlier.'};step.classList.add('stopped');document.getElementById('replayNote').innerHTML='<b>CONTROL PLACED:</b> '+m[b.dataset.stop]});

document.querySelectorAll('.checkpoint').forEach(cp=>{const ans=+cp.dataset.answer,bs=[...cp.querySelectorAll('button')];bs.forEach((b,i)=>b.onclick=()=>{if(cp.dataset.done)return;cp.dataset.done='1';bs.forEach(x=>x.disabled=true);if(i===ans){b.classList.add('correct');cp.querySelector('.feedback').textContent='Correct.'}else{b.classList.add('wrong');bs[ans].classList.add('correct');cp.querySelector('.feedback').textContent='Not quite — compare it with the lecture definition and example.'}})});