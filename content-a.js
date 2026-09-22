document.getElementById('partA').innerHTML = `
<section id="cia" class="zone">
  <div class="section-kicker">LAB 01 · CIA TRIAD</div>
  <div class="section-head">
    <h2>Security starts with three promises.</h2>
    <p>Confidentiality limits who can see data. Integrity ensures users can trust data and software. Availability keeps information accessible when it is needed. The lecture treats all three as controls that must be designed in and evaluated continuously.</p>
  </div>
  <div class="grid3">
    <div class="card"><div class="badge blue">CONFIDENTIALITY</div><h3>Right person, right data</h3><p>Restrict access, enforce privacy policies, use trusted networks/devices, apply least privilege, and grant no permission by default.</p></div>
    <div class="card"><div class="badge orange">INTEGRITY</div><h3>Trust what changed</h3><p>Define who may modify assets, detect tampering, log changes, and convert suspicious modification into prioritised alerts.</p></div>
    <div class="card"><div class="badge green">AVAILABILITY</div><h3>Reach it when needed</h3><p>Retention, response time, storage location and tested backups determine whether information is actually usable when the organisation needs it.</p></div>
  </div>
  <div class="lab">
    <div class="lab-head"><h3>CIA control builder</h3><small>Toggle controls and watch the defensive profile change.</small></div>
    <div class="cia-builder">
      <div class="cia-switches">
        <button data-cia="mfa">Multi-factor authentication</button>
        <button data-cia="least">Least privilege</button>
        <button data-cia="audit">Tamper/change logging</button>
        <button data-cia="backup">Tested backups</button>
        <button data-cia="trusted">Trusted device/network policy</button>
      </div>
      <div class="card">
        <div class="meter">
          <div class="meter-row"><span>Confidentiality</span><div class="track"><i id="mC" style="--v:28%"></i></div><b id="mCv">28</b></div>
          <div class="meter-row"><span>Integrity</span><div class="track"><i id="mI" style="--v:28%"></i></div><b id="mIv">28</b></div>
          <div class="meter-row"><span>Availability</span><div class="track"><i id="mA" style="--v:28%"></i></div><b id="mAv">28</b></div>
        </div>
        <p id="ciaAdvice">A policy exists, but the defensive stack is still thin.</p>
      </div>
    </div>
  </div>
  <div class="scenario-board" style="margin-top:14px">
    <div class="scenario"><div class="badge red">SCENARIO 1</div><h3>James downloads data legitimately</h3><p>The system logs <b>james_analyst</b>. Access is expected and low priority.</p><button data-identity="legit">Classify</button></div>
    <div class="scenario"><div class="badge red">SCENARIO 2</div><h3>John steals James' credentials</h3><p>The same username appears, but the person using it is different.</p><button data-identity="stolen">Classify</button></div>
    <div class="scenario"><div class="badge red">SCENARIO 3</div><h3>James shares credentials with Molly</h3><p>The system still sees <b>james_analyst</b>, even though another person is using the account.</p><button data-identity="shared">Classify</button></div>
  </div>
  <div id="identityReadout" class="card dark" style="margin-top:10px"><p>The key lesson: role-based access alone cannot distinguish all three scenarios. Extra verification such as MFA, tokens or verification codes is needed.</p></div>
  <div class="check" data-answer="2"><div class="q">Which CIA property is most directly concerned with detecting unauthorised modification?</div><button>Availability</button><button>Confidentiality</button><button>Integrity</button><div class="feedback"></div></div>
</section>

<section id="pitfalls" class="zone">
  <div class="section-kicker">LAB 02 · DEFENSE FAILURE BOARD</div>
  <div class="section-head">
    <h2>Most failures are not one missing product.</h2>
    <p>Data growth, regulation, third parties, DevOps complexity and skills shortages create pressure. IBM's five pitfalls in the lecture show that organisations often fail through governance and process gaps, not just missing technology.</p>
  </div>
  <div class="pitfall-list">
    <div class="pitfall"><b>Compliance-only thinking</b><p>Compliance is a starting point, not the goal. Policies must stay current and data should still be protected in transit and at rest.</p></div>
    <div class="pitfall"><b>No central data view</b><p>If you do not know where sensitive data lives across on-premises and cloud environments, you cannot protect it consistently.</p></div>
    <div class="pitfall"><b>No clear owner</b><p>Sensitive data and asset security need explicit accountability, such as a CDO or DPO role.</p></div>
    <div class="pitfall"><b>Known flaws ignored</b><p>Patch management, ethical testing and timely remediation are required so disclosed vulnerabilities do not remain exploitable.</p></div>
    <div class="pitfall"><b>Weak activity monitoring</b><p>User activity, privilege and permission changes must be observed rather than assumed to be safe.</p></div>
  </div>
  <div class="grid2" style="margin-top:14px">
    <div class="card"><div class="badge orange">EQUIFAX LESSON</div><h3>A known vulnerability still caused a breach</h3><p>The lecture uses the 2017 Equifax breach to show third-party and DevOps exposure: an Apache Struts flaw had been disclosed and patched, but the affected web server was not updated.</p></div>
    <div class="card"><div class="badge blue">DEVOPS RESPONSE</div><h3>Move security earlier</h3><p>Assess security throughout development, assign ownership, choose a management model, audit continuously, and communicate patch/change management clearly.</p></div>
  </div>
  <div class="check" data-answer="1"><div class="q">What does “compliance is a floor, not a ceiling” mean?</div><button>Once compliant, no more controls are needed</button><button>Compliance is the minimum; security must keep improving beyond it</button><button>Compliance replaces monitoring</button><div class="feedback"></div></div>
</section>

<section id="monitoring" class="zone">
  <div class="section-kicker">LAB 03 · MONITORING & ACTIVE ANALYTICS</div>
  <div class="section-head">
    <h2>Logging sees the past. Monitoring can change the present.</h2>
    <p>A reliable defence first knows where critical data exists, then tracks behaviour such as traffic, delay, uptime and bandwidth. The lecture distinguishes active monitoring, which can influence traffic, from passive monitoring, which observes without changing the flow.</p>
  </div>
  <div class="monitor-grid">
    <div class="pipe">
      <div class="toggle-row"><button data-monitor="active" class="active">Active</button><button data-monitor="passive">Passive</button></div>
      <div id="monitorFlow" class="flow"><div class="node">Traffic source</div><div class="arrow">→</div><div class="node">R/W security element</div><div class="arrow">→</div><div class="node">Repository</div><div class="arrow">→</div><div class="node">Analytics</div></div>
      <p id="monitorExplain">Active monitoring sits directly in the network and can block, discard or quarantine traffic. Firewalls, IDS/IPS and active probes are examples used for real-time policy enforcement.</p>
    </div>
    <div class="card dark">
      <div class="badge green">LIVE BEHAVIOUR</div>
      <h3>Traffic baseline</h3>
      <div class="traffic" id="traffic"></div>
      <p id="trafficText">Normal activity is forming a baseline. Trigger an anomaly to see why near-real-time analytics matters.</p>
      <button id="trafficSpike" style="padding:8px 10px;font-weight:900">Trigger abnormal spike</button>
    </div>
  </div>
  <div class="grid3" style="margin-top:14px">
    <div class="card"><h3>Real-time alerting</h3><p>Suspicious activity should notify administrators automatically.</p></div>
    <div class="card"><h3>Tool integration</h3><p>Monitoring should feed SIEM, TIP and incident-management systems rather than create another isolated console.</p></div>
    <div class="card"><h3>Analytics & redundancy</h3><p>Reports, dashboards, recommendations and resilient components turn raw telemetry into useful defensive action.</p></div>
  </div>
  <div class="check" data-answer="0"><div class="q">Which monitoring model can directly block or quarantine traffic?</div><button>Active monitoring</button><button>Passive monitoring</button><button>Archived monitoring</button><div class="feedback"></div></div>
</section>

<section id="vuln" class="zone">
  <div class="section-kicker">LAB 04 · VULNERABILITY TRIAGE</div>
  <div class="section-head">
    <h2>Find everything. Fix what matters first.</h2>
    <p>Vulnerability assessment scans systems, benchmarks configurations, prioritises weaknesses, recommends remediation and should integrate with the wider security stack. The process is continuous: identify, analyse, assess, remediate, then scan again.</p>
  </div>
  <div class="grid3">
    <div class="card"><div class="badge">HOST</div><h3>Servers & network elements</h3><p>Assess critical hosts, routers, switches and the applications running on them.</p></div>
    <div class="card"><div class="badge">LAN / WLAN</div><h3>Network infrastructure</h3><p>Assess both wired and wireless environments for configuration and protocol weaknesses.</p></div>
    <div class="card"><div class="badge">DB + APP</div><h3>Data & application layer</h3><p>Check databases for sensitive-data exposure and applications using frameworks such as OWASP guidance.</p></div>
  </div>
  <div class="lab">
    <div class="lab-head"><h3>Assessment methodology</h3><small>Choose how much knowledge the tester receives.</small></div>
    <div class="method-tabs"><button data-method="black">Black box</button><button data-method="gray">Gray box</button><button data-method="white">White box</button></div>
    <div id="methodReadout" class="card" style="margin-top:10px"><p><b>Black box:</b> the tester starts outside with no internal information and behaves more like an external adversary, often using OSINT against public-facing assets.</p></div>
  </div>
  <div class="lab">
    <div class="lab-head"><h3>CVSS-style prioritisation lab</h3><small>Illustrative classroom model based on the lecture's exploitability and impact dimensions.</small></div>
    <div class="vuln-board">
      <div class="cvss-controls">
        <label>Attack reach / vector <span id="cv1v">80</span><input id="cv1" type="range" min="0" max="100" value="80"></label>
        <label>Ease of exploitation <span id="cv2v">72</span><input id="cv2" type="range" min="0" max="100" value="72"></label>
        <label>Low privileges needed <span id="cv3v">85</span><input id="cv3" type="range" min="0" max="100" value="85"></label>
        <label>Low user interaction <span id="cv4v">80</span><input id="cv4" type="range" min="0" max="100" value="80"></label>
        <label>CIA impact <span id="cv5v">90</span><input id="cv5" type="range" min="0" max="100" value="90"></label>
      </div>
      <div class="scorebox"><div class="badge blue">PRIORITY SCORE</div><div id="cvScore" class="score-num">8.1</div><div id="cvRating" class="rating high">HIGH</div><p id="cvAdvice">Expedite remediation ahead of routine work.</p></div>
    </div>
  </div>
  <div class="check" data-answer="1"><div class="q">In the lecture's qualitative CVSS scale, what range is “Critical”?</div><button>7.0–8.9</button><button>9.0–10.0</button><button>4.0–6.9</button><div class="feedback"></div></div>
</section>
`;