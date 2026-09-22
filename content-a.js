document.getElementById('partA').innerHTML=`
<section id="cia" class="chapter">
  <div class="chapter-no">01</div>
  <div class="chapter-main">
    <div class="eyebrow">BUILD THE FOUNDATION</div>
    <h2>Three promises every control must protect.</h2>
    <p class="intro">The lecture starts with confidentiality, integrity and availability because every later defensive choice should reinforce at least one of them.</p>
    <div class="three-col">
      <div><span class="tape blue">CONFIDENTIALITY</span><h3>Only the right people should see it.</h3><p>Restrict access, enforce privacy rules, use trusted networks and authorised devices, apply least privilege, and grant no permission by default.</p></div>
      <div><span class="tape red">INTEGRITY</span><h3>Users must be able to trust it.</h3><p>Define who can modify assets, detect tampering, log changes and turn suspicious modification into prioritised alerts.</p></div>
      <div><span class="tape green">AVAILABILITY</span><h3>It must be there when needed.</h3><p>Retention period, response time, storage location and tested backups determine whether information remains usable.</p></div>
    </div>

    <div class="workbench">
      <div class="workbench-head"><h3>CONTROL PLACEMENT BOARD</h3><small>Add controls and watch which CIA properties improve.</small></div>
      <div class="cia-board">
        <div class="control-list">
          <button data-cia="mfa">+ Multi-factor authentication</button>
          <button data-cia="least">+ Least privilege</button>
          <button data-cia="audit">+ Tamper/change logging</button>
          <button data-cia="backup">+ Tested backups</button>
          <button data-cia="trusted">+ Trusted device/network policy</button>
        </div>
        <div>
          <div class="scoreline"><span>Confidentiality</span><i id="barC" style="--v:25%"></i><b id="valC">25</b></div>
          <div class="scoreline"><span>Integrity</span><i id="barI" style="--v:25%"></i><b id="valI">25</b></div>
          <div class="scoreline"><span>Availability</span><i id="barA" style="--v:25%"></i><b id="valA">25</b></div>
          <p id="ciaText">Baseline only. The environment still relies too heavily on trust.</p>
        </div>
      </div>
    </div>

    <div class="case-three">
      <div class="casefile"><span class="tape">JAMES</span><h3>Legitimate use</h3><p>James accesses customer transaction data and downloads a subset for his work.</p><button data-person="james">What does the system see?</button></div>
      <div class="casefile"><span class="tape red">JOHN</span><h3>Credential theft</h3><p>John steals James' credentials, spoofs his IP and downloads the same data.</p><button data-person="john">What does the system see?</button></div>
      <div class="casefile"><span class="tape blue">MOLLY</span><h3>Credential sharing</h3><p>Molly borrows James' credentials to avoid a project delay and accesses the same data.</p><button data-person="molly">What does the system see?</button></div>
    </div>
    <div id="identityAnswer" class="stage-readout">All three can appear as <b>james_analyst</b>. This is why roles alone are not enough; the lecture recommends an extra verification layer such as MFA, tokens or verification codes.</div>

    <div class="checkpoint" data-answer="1"><div class="q">Which control most directly reduces the James/John/Molly identity ambiguity?</div><button>Longer data retention</button><button>Additional identity verification such as MFA</button><button>More storage capacity</button><div class="feedback"></div></div>
  </div>
</section>

<section id="failures" class="chapter">
  <div class="chapter-no">02</div>
  <div class="chapter-main">
    <div class="eyebrow">WHY DEFENSE FAILS</div>
    <h2>Security breaks through process gaps as often as product gaps.</h2>
    <p class="intro">The lecture groups pressure around explosive data growth, overlapping regulation, third-party/DevOps exposure and skills shortages. IBM's five pitfalls turn those pressures into concrete failure patterns.</p>

    <div class="failure-wall">
      <div class="failure"><b>1 · Compliance only</b><p>Treating compliance as the finish line. The lecture's remedy is to keep policy current and protect data at rest and in transit.</p></div>
      <div class="failure"><b>2 · No central data view</b><p>If the organisation cannot identify where sensitive data resides, on-premises or in cloud systems, controls become inconsistent.</p></div>
      <div class="failure"><b>3 · No owner</b><p>Responsibility for sensitive data and assets must be explicit rather than diffused across teams.</p></div>
      <div class="failure"><b>4 · Known flaws ignored</b><p>Weak patch management means even public, fixable vulnerabilities can remain exploitable.</p></div>
      <div class="failure"><b>5 · Poor activity monitoring</b><p>Without watching user activity, privileges and permissions, abnormal behaviour can remain invisible.</p></div>
    </div>

    <div class="strip"><b>DATA GROWTH</b><p>Finance, healthcare, transport, telecom, retail, manufacturing and IoT all generate rapidly growing volumes of sensitive data.</p></div>
    <div class="strip"><b>REGULATION</b><p>Privacy requirements overlap across jurisdictions. The lecture cites HIPAA for medical information and PCI DSS for payment-card handling.</p></div>
    <div class="strip"><b>THIRD PARTIES</b><p>Cloud and DevOps stacks add software and services the organisation does not fully control.</p></div>
    <div class="strip"><b>SKILLS</b><p>A defence system is only as strong as the people operating it; training, exercises, external expertise and adaptable staff all matter.</p></div>

    <div class="workbench">
      <div class="workbench-head"><h3>EQUIFAX PATCH FAILURE</h3><small>Known vulnerability + missed remediation</small></div>
      <p>The lecture uses the 2017 Equifax breach to show how a disclosed Apache Struts vulnerability could still be exploited because the affected web server was never patched. The lesson is not simply “patch faster”; it is that patch ownership, change management and continuous assessment must be structured.</p>
    </div>

    <div class="checkpoint" data-answer="2"><div class="q">What is the lecture's main lesson from the Equifax example?</div><button>Unknown vulnerabilities are the only serious risk</button><button>Third-party software should never be used</button><button>A known vulnerability can still cause a major breach if remediation processes fail</button><div class="feedback"></div></div>
  </div>
</section>

<section id="watch" class="chapter">
  <div class="chapter-no">03</div>
  <div class="chapter-main">
    <div class="eyebrow">MAKE DEFENSE ACTIVE</div>
    <h2>Do not just collect logs. Watch behaviour.</h2>
    <p class="intro">Monitoring begins by knowing where critical data exists and cataloguing the applications, servers and endpoints that hold it. Traffic, delay, availability, uptime and bandwidth then become signals of normal versus abnormal behaviour.</p>

    <div class="monitor-stage">
      <div class="flowpaper">
        <div class="decision-row"><button data-monitor="active" class="active">ACTIVE MONITORING</button><button data-monitor="passive">PASSIVE MONITORING</button></div>
        <div id="flow" class="flow"><div class="node">Traffic source</div><span class="arrow">→</span><div class="node">R/W security element</div><span class="arrow">→</span><div class="node">Repository</div><span class="arrow">→</span><div class="node">Analytics</div></div>
        <p id="monitorText">Active monitoring sits in the network with read/write capability. It can block, discard or quarantine traffic.</p>
      </div>
      <div>
        <div id="scope" class="scope"></div>
        <div class="decision-row" style="margin-top:8px"><button id="spike">Inject traffic spike</button><button id="normalise">Return to baseline</button></div>
        <p id="scopeText">The bars represent a stable traffic baseline.</p>
      </div>
    </div>

    <div class="three-col" style="margin-top:18px">
      <div><span class="tape">ALERT</span><h3>Real-time notification</h3><p>Suspicious activity should reach administrators automatically rather than wait for manual review.</p></div>
      <div><span class="tape blue">ANALYTICS</span><h3>Turn telemetry into insight</h3><p>Reports, dashboards and recommendations help distinguish useful patterns from raw events.</p></div>
      <div><span class="tape green">INTEGRATION</span><h3>Connect the stack</h3><p>Monitoring should consolidate with SIEM, TIP and incident-management systems.</p></div>
    </div>

    <div class="checkpoint" data-answer="0"><div class="q">Which monitoring model can directly influence live traffic?</div><button>Active monitoring</button><button>Passive monitoring</button><button>Archive-only monitoring</button><div class="feedback"></div></div>
  </div>
</section>

<section id="triage" class="chapter">
  <div class="chapter-no">04</div>
  <div class="chapter-main">
    <div class="eyebrow">VULNERABILITY MANAGEMENT</div>
    <h2>A scanner gives you findings. Risk decides the order.</h2>
    <p class="intro">The assessment process is iterative: plan, choose methodology and baseline, scan, identify, analyse, assess, remediate, report and repeat. The lecture covers host, LAN/WLAN, database and application assessment.</p>

    <div class="strip"><b>BLACK BOX</b><p>Tester starts outside with no internal information and behaves like an external adversary, often using OSINT against public-facing assets.</p></div>
    <div class="strip"><b>GRAY BOX</b><p>Tester receives limited information and must work out the rest.</p></div>
    <div class="strip"><b>WHITE BOX</b><p>Tester receives complete system information, reducing the chance that components are missed.</p></div>

    <div class="workbench">
      <div class="workbench-head"><h3>RISK TRIAGE — CLASSROOM MODEL</h3><small>Illustrative control based on CVSS dimensions from the lecture</small></div>
      <div class="triage-grid">
        <div class="sliders">
          <label>Attack vector / reach <span id="s1v">80</span><input id="s1" type="range" min="0" max="100" value="80"></label>
          <label>Ease of exploitation <span id="s2v">75</span><input id="s2" type="range" min="0" max="100" value="75"></label>
          <label>Low privileges required <span id="s3v">85</span><input id="s3" type="range" min="0" max="100" value="85"></label>
          <label>Low user interaction <span id="s4v">80</span><input id="s4" type="range" min="0" max="100" value="80"></label>
          <label>CIA impact <span id="s5v">90</span><input id="s5" type="range" min="0" max="100" value="90"></label>
        </div>
        <div class="scoreposter"><div class="eyebrow" style="color:#fff">PRIORITY</div><div id="riskN" class="n">8.2</div><div id="riskBand" class="band">HIGH</div><p id="riskText">Expedite remediation ahead of routine work.</p></div>
      </div>
    </div>

    <div class="strip"><b>0.0</b><p>None</p></div>
    <div class="strip"><b>0.1–3.9</b><p>Low</p></div>
    <div class="strip"><b>4.0–6.9</b><p>Medium</p></div>
    <div class="strip"><b>7.0–8.9</b><p>High</p></div>
    <div class="strip"><b>9.0–10.0</b><p>Critical</p></div>

    <div class="checkpoint" data-answer="1"><div class="q">What should happen after raw vulnerabilities are identified?</div><button>Patch everything in random order</button><button>Analyse root cause and business impact, then prioritise remediation</button><button>Ignore results until the next annual audit</button><div class="feedback"></div></div>
  </div>
</section>
`;