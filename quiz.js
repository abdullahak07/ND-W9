const qs=[
['What does least privilege mean?',['Give every user broad access for convenience','Give only the access genuinely needed for the role','Allow access only during backups'],1],
['Why could James, John and Molly appear identical to the system?',['They used the same account identity','They used the same laptop model','They were all administrators'],0],
['Which monitoring model can block or quarantine live traffic?',['Active','Passive','Archived'],0],
['What is the vulnerability-management cycle intended to do?',['Scan once and stop','Continuously identify, analyse, assess, remediate and rescan','Replace patch management'],1],
['What lecture score range is Critical?',['4.0–6.9','7.0–8.9','9.0–10.0'],2],
['What does tokenisation do?',['Replaces sensitive values with stand-in tokens','Makes every user an administrator','Creates a backup copy'],0],
['What does masking do?',['Shows only the data portion a role needs','Deletes the original data','Disables encryption'],0],
['Why should a jailbroken mobile device be treated as high risk?',['It bypasses operating-system restrictions','It always has a small screen','It cannot use Wi-Fi'],0],
['What is the main lesson from the Home Depot case?',['One missing firewall caused everything','Several defensive gaps interacted across credentials, network, endpoints and monitoring','Third-party access is low risk'],1]
];
let done=0,score=0;const host=document.getElementById('finalQuiz');
qs.forEach((q,i)=>{const d=document.createElement('div');d.className='quiz';d.innerHTML='<h3>'+(i+1)+'. '+q[0]+'</h3>';q[1].forEach((o,j)=>{const b=document.createElement('button');b.textContent=o;b.onclick=()=>{if(d.dataset.done)return;d.dataset.done='1';done++;const bs=[...d.querySelectorAll('button')];bs.forEach(x=>x.disabled=true);if(j===q[2]){score++;b.classList.add('correct')}else{b.classList.add('wrong');bs[q[2]].classList.add('correct')}render()};d.appendChild(b)});host.appendChild(d)});
const res=document.createElement('div');res.className='final-result';res.textContent='Complete all 9 decisions to reveal your final score.';host.appendChild(res);
function render(){document.getElementById('quizProgress').textContent=done+' / 9 complete';if(done<qs.length){res.textContent='Current score: '+score+'/'+done;return}const p=Math.round(score/qs.length*100);res.innerHTML='FINAL SCORE '+score+'/9 · '+p+'%<br><span style="font-weight:600">'+(p>=85?'Strong defensive reasoning across the full stack.':p>=60?'Good foundation — revisit the missed decisions.':'Re-run the lecture journey, then try again.')+'</span>'}