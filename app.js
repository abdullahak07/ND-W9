// SecureOS window manager
const dock=[...document.querySelectorAll('.dock button')];
const home=document.getElementById('home');
const apps=[...document.querySelectorAll('.app-window')];

function openApp(id){
  dock.forEach(b=>b.classList.toggle('active',b.dataset.open===id));
  if(id==='home'){
    home.classList.remove('hidden');
    apps.forEach(a=>a.classList.remove('open'));
    return;
  }
  home.classList.add('hidden');
  apps.forEach(a=>a.classList.toggle('open',a.id===id));
}
dock.forEach(b=>b.onclick=()=>openApp(b.dataset.open));

document.querySelectorAll('.traffic-lights i:first-child').forEach(dot=>{
  dot.onclick=()=>openApp('home');
});

function updateClock(){
  const d=new Date();
  document.getElementById('clock').textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
}
updateClock(); setInterval(updateClock,30000);

// Home breach chain
const stageText={
  cred:'Credential theft attacks identity first. MFA, third-party access control and credential policy reduce the chance that stolen credentials become valid access.',
  pivot:'Network movement tests segmentation and least privilege. A compromised vendor account should not automatically reach the rest of the enterprise.',
  malware:'Endpoint compromise tests patching, endpoint policy, secure configuration and protection close to the device.',
  exfil:'Exfiltration tests monitoring, encryption, tokenisation, masking and the organisation’s ability to detect abnormal data movement.'
};
document.querySelectorAll('[data-stage]').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('[data-stage]').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  document.getElementById('stageReadout').textContent=stageText[b.dataset.stage];
});

// CIA control builder
const effects={mfa:[26,8,2],least:[20,20,2],audit:[3,32,3],backup:[2,4,45],trusted:[22,10,3]};
const chosen=new Set();
document.querySelectorAll('[data-cia]').forEach(b=>b.onclick=()=>{
  const k=b.dataset.cia;
  b.classList.toggle('on');
  b.classList.contains('on')?chosen.add(k):chosen.delete(k);
  let c=25,i=25,a=25;
  chosen.forEach(x=>{c+=effects[x][0];i+=effects[x][1];a+=effects[x][2]});
  c=Math.min(100,c);i=Math.min(100,i);a=Math.min(100,a);
  [['C',c],['I',i],['A',a]].forEach(([k,v])=>{
    document.getElementById('bar'+k).style.setProperty('--v',v+'%');
    document.getElementById('val'+k).textContent=v;
  });
  document.getElementById('ciaText').textContent=
    chosen.size>=4?'Layered controls now reinforce all three CIA properties.':
    chosen.size>=2?'The design is improving, but important gaps remain.':
    'Baseline only. The environment still relies too heavily on trust.';
});

document.querySelectorAll('[data-person]').forEach(b=>b.onclick=()=>{
  const t={
    james:'Legitimate use: the system sees james_analyst and the person really is James.',
    john:'Credential theft: the system may still see james_analyst even though John is using the account. MFA or another verification layer helps expose the mismatch.',
    molly:'Credential sharing: the system again sees james_analyst even though Molly is using the account. Shared credentials destroy accountability.'
  };
  document.getElementById('identityAnswer').textContent=t[b.dataset.person];
});

// Active/passive monitoring
document.querySelectorAll('[data-monitor]').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('[data-monitor]').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const active=b.dataset.monitor==='active';
  document.getElementById('flow').innerHTML=active
    ?'<div class="node">Traffic source</div><b>→</b><div class="node">R/W security element</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div>'
    :'<div class="node">Traffic source</div><b>↘</b><div class="node">Agent / probe</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div>';
  document.getElementById('monitorText').textContent=active
    ?'Active monitoring sits directly in the network and can block, discard or quarantine traffic.'
    :'Passive monitoring observes a copy of traffic. It captures and analyses but cannot directly change the live flow.';
});

const scope=document.getElementById('scope');
for(let i=0;i<34;i++){
  const x=document.createElement('i');
  x.style.height=(18+Math.random()*55)+'px';
  scope.appendChild(x);
}
function baseline(){
  [...scope.children].forEach(x=>{
    x.style.height=(18+Math.random()*55)+'px';
    x.classList.remove('hot');
  });
  document.getElementById('scopeText').textContent='The bars represent a stable traffic baseline.';
}
document.getElementById('spike').onclick=()=>{
  [...scope.children].forEach((x,i)=>{
    const hot=i>21&&i<29;
    x.style.height=(hot?125+Math.random()*45:18+Math.random()*55)+'px';
    x.classList.toggle('hot',hot);
  });
  document.getElementById('scopeText').textContent='Traffic has jumped beyond the baseline. Monitoring should alert, correlate context and support containment.';
};
document.getElementById('normalise').onclick=baseline;

// CVSS-style classroom model
const ids=['s1','s2','s3','s4','s5'];
function risk(){
  const v=ids.map(id=>+document.getElementById(id).value);
  ids.forEach((id,i)=>document.getElementById(id+'v').textContent=v[i]);
  const score=Math.max(0,Math.min(10,(v[0]*.18+v[1]*.18+v[2]*.16+v[3]*.13+v[4]*.35)/10));
  document.getElementById('riskN').textContent=score.toFixed(1);
  let band='LOW',txt='Track and remediate through routine processes.';
  if(score>=9){band='CRITICAL';txt='Immediate action: prioritise before routine work.'}
  else if(score>=7){band='HIGH';txt='Expedite remediation ahead of routine work.'}
  else if(score>=4){band='MEDIUM';txt='Schedule remediation within normal patch cycles.'}
  document.getElementById('riskBand').textContent=band;
  document.getElementById('riskText').textContent=txt;
}
ids.forEach(id=>document.getElementById(id).oninput=risk); risk();

// Data protection transformer
document.querySelectorAll('[data-protect]').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('[data-protect]').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  const r=document.getElementById('record'), n=document.getElementById('protectNote'), mode=b.dataset.protect;
  if(mode==='encrypt'){
    r.textContent='CIPHERTEXT: 9F A1 73 C2 5E 0B 44 D8 ...';
    n.innerHTML='<h3>Encryption</h3><p>Reversible cryptographic protection when the authorised key is available. The lecture applies it to data in transit and at rest.</p>';
  }else if(mode==='token'){
    r.textContent='NAME: ALEX MORGAN\nCARD TOKEN: tok_7Q2-91X-Z44\nSALARY: $148,000\nACCOUNT TOKEN: tok_AU_551';
    n.innerHTML='<h3>Tokenisation</h3><p>Sensitive values are replaced with random stand-ins while the originals remain protected in a token vault.</p>';
  }else if(mode==='mask'){
    r.textContent='NAME: ALEX M*****\nCARD: 541 *** **** 207\nSALARY: $***,***\nACCOUNT: AU-***17';
    n.innerHTML='<h3>Masking</h3><p>Only the portion required by the role remains visible, limiting exposure even after authentication.</p>';
  }else{
    r.textContent='REQUEST: QUARANTINED\nSESSION: BLOCKED\nACTIVITY: LOGGED\nALERT: SENT';
    n.innerHTML='<h3>Quarantine</h3><p>Suspicious access is stopped, logged and escalated instead of being allowed to continue.</p>';
  }
});

// Endpoint decisions
document.querySelectorAll('[data-device]').forEach(b=>b.onclick=()=>{
  const d=b.closest('.device');
  const m={
    allow:'Compliant or managed endpoint: allow under policy, then keep monitoring and enforcing patches.',
    review:'Review required: a personal device with outdated patching should receive restricted access until it meets policy.',
    block:'Block: a jailbroken device bypasses OS restrictions and represents elevated risk.'
  };
  d.classList.toggle('block',b.dataset.device==='block');
  document.getElementById('deviceNote').textContent=m[b.dataset.device];
});

// Home Depot replay
document.querySelectorAll('[data-stop]').forEach(b=>b.onclick=()=>{
  const step=b.closest('.step');
  const m={
    mfa:'Use stronger third-party credential controls and MFA before stolen credentials can become valid access.',
    least:'Apply least privilege and tighter vendor access boundaries so the account cannot reach unnecessary systems.',
    segment:'Use network segmentation to constrain movement from the vendor-connected zone into the wider corporate network.',
    endpoint:'Harden and patch POS endpoints; point-to-point encryption can reduce payment-data exposure.',
    monitor:'Use monitoring feeding SIEM/TIP to identify abnormal malware or exfiltration activity earlier.'
  };
  step.classList.add('stopped');
  document.getElementById('replayNote').innerHTML='<b>CONTROL PLACED:</b> '+m[b.dataset.stop];
});

// Embedded checks
document.querySelectorAll('.checkpoint').forEach(cp=>{
  const ans=+cp.dataset.answer, bs=[...cp.querySelectorAll('button')];
  bs.forEach((b,i)=>b.onclick=()=>{
    if(cp.dataset.done)return;
    cp.dataset.done='1';
    bs.forEach(x=>x.disabled=true);
    if(i===ans){b.classList.add('correct');cp.querySelector('.feedback').textContent='Correct.'}
    else{b.classList.add('wrong');bs[ans].classList.add('correct');cp.querySelector('.feedback').textContent='Not quite — compare it with the lecture definition and example.'}
  });
});
