const questions=[
['Which principle says users should receive only the access genuinely needed for their role?',['Least privilege','Maximum availability','Open access'],0],
['Why did the James/John/Molly example expose a defence gap?',['The system could not distinguish different people using the same credentials','The database had no backups','The network had no router'],0],
['Which monitoring model can directly block or quarantine traffic?',['Passive','Active','Archived'],1],
['What comes after identifying a vulnerability in the lecture scan lifecycle?',['Ignore it','Analyse it and determine root cause/component','Delete all logs'],1],
['Which assessment gives the tester complete system information?',['White box','Black box','Gray box'],0],
['Which lecture CVSS range is Critical?',['4.0–6.9','7.0–8.9','9.0–10.0'],2],
['Which control replaces sensitive data with a random stand-in value?',['Tokenisation','Passive monitoring','Beaconing'],0],
['Why is endpoint automation essential?',['The number and variety of endpoints make manual control impractical','Endpoints never require patches','Automation removes the need for policy'],0],
['What did the Home Depot case mainly demonstrate?',['One encryption product can prevent every breach','Multiple gaps in credentials, segmentation, endpoints, vulnerability management and monitoring can combine','Third-party access carries no risk'],1]
];
let done=0,score=0;const host=document.getElementById('finalQuiz');
questions.forEach((q,i)=>{const d=document.createElement('div');d.className='quiz';d.innerHTML='<h3>'+(i+1)+'. '+q[0]+'</h3>';q[1].forEach((o,j)=>{const b=document.createElement('button');b.textContent=o;b.onclick=()=>{if(d.dataset.done)return;d.dataset.done='1';done++;const bs=[...d.querySelectorAll('button')];bs.forEach(x=>x.disabled=true);if(j===q[2]){score++;b.classList.add('correct')}else{b.classList.add('wrong');bs[q[2]].classList.add('correct')}render()};d.appendChild(b)});host.appendChild(d)});
const result=document.createElement('div');result.className='result';result.textContent='Complete all 9 decisions to see your final score.';host.appendChild(result);
function render(){if(done<questions.length){result.textContent=done+'/9 complete · current score '+score;return}const p=Math.round(score/questions.length*100);result.innerHTML='Final score: '+score+'/9 ('+p+'%)<br><span style="font-weight:600">'+(p>=85?'Defense review passed: strong understanding across the stack.':p>=60?'Good base: revisit the missed labs before class ends.':'Rebuild the defensive stack from CIA through endpoints, then try again.')+'</span>'}