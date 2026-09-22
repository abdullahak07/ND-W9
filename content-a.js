document.getElementById('apps').insertAdjacentHTML('beforeend', `
<section id="ciaApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>CIA Control Manager</b><span>security://cia</span></div>
  <div class="app-body">
    <div class="label">APP 01 · CIA TRIAD</div><h2>Three promises every control must protect.</h2>
    <p class="lead">Confidentiality limits who can see data. Integrity ensures users can trust data and software. Availability keeps information accessible when needed.</p>
    <div class="cols3">
      <div class="tile"><div class="label">CONFIDENTIALITY</div><h3>Right person, right data</h3><p>Access restriction, privacy policy, trusted networks/devices, least privilege and no permission by default.</p></div>
      <div class="tile"><div class="label">INTEGRITY</div><h3>Trust what changed</h3><p>Define who may modify assets, detect tampering, log changes and generate prioritised alerts.</p></div>
      <div class="tile"><div class="label">AVAILABILITY</div><h3>Reach it when needed</h3><p>Retention period, response time, storage location and tested backups all matter.</p></div>
    </div>
    <div class="toolpane">
      <div class="toolhead"><b>CONTROL PLACEMENT</b><small>Toggle controls and watch the profile change.</small></div>
      <div class="cols2">
        <div class="control-list">
          <button data-cia="mfa">Multi-factor authentication</button><button data-cia="least">Least privilege</button><button data-cia="audit">Tamper/change logging</button><button data-cia="backup">Tested backups</button><button data-cia="trusted">Trusted device/network policy</button>
        </div>
        <div>
          <div class="meterrow"><span>Confidentiality</span><div class="meter"><i id="barC" style="--v:25%"></i></div><b id="valC">25</b></div>
          <div class="meterrow"><span>Integrity</span><div class="meter"><i id="barI" style="--v:25%"></i></div><b id="valI">25</b></div>
          <div class="meterrow"><span>Availability</span><div class="meter"><i id="barA" style="--v:25%"></i></div><b id="valA">25</b></div>
          <div id="ciaText" class="readout">Baseline only. The environment still relies too heavily on trust.</div>
        </div>
      </div>
    </div>
    <div class="scenario-grid">
      <div class="scenario"><div class="label">JAMES</div><h3>Legitimate use</h3><p>James downloads a subset of customer data for his work.</p><button data-person="james">Inspect identity</button></div>
      <div class="scenario"><div class="label">JOHN</div><h3>Credential theft</h3><p>John steals James' credentials and downloads the same data.</p><button data-person="john">Inspect identity</button></div>
      <div class="scenario"><div class="label">MOLLY</div><h3>Credential sharing</h3><p>Molly borrows James' credentials to avoid delay.</p><button data-person="molly">Inspect identity</button></div>
    </div>
    <div id="identityAnswer" class="readout">All three can appear as james_analyst. Extra verification such as MFA, tokens or verification codes is needed.</div>
    <div class="checkpoint" data-answer="1"><div class="q">Which control most directly reduces this identity ambiguity?</div><button>Longer retention</button><button>Additional identity verification such as MFA</button><button>More storage</button><div class="feedback"></div></div>
  </div>
</section>

<section id="failApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Defense Failure Analyzer</b><span>security://pitfalls</span></div>
  <div class="app-body">
    <div class="label">APP 02 · WHY DEFENSE FAILS</div><h2>Process gaps can defeat expensive security.</h2>
    <p class="lead">Data growth, regulation, third-party exposure, DevOps complexity and skills shortages create pressure. The lecture's five common pitfalls turn that pressure into repeatable failure patterns.</p>
    <div class="failure-list">
      <div class="failure"><b>Compliance only</b><p>Compliance is a starting point, not the goal.</p></div>
      <div class="failure"><b>No central data view</b><p>If you do not know where sensitive data lives, protection becomes inconsistent.</p></div>
      <div class="failure"><b>No owner</b><p>Responsibility for data security needs explicit accountability.</p></div>
      <div class="failure"><b>Known flaws ignored</b><p>Weak patch management leaves disclosed vulnerabilities exploitable.</p></div>
      <div class="failure"><b>Poor activity monitoring</b><p>User activity, privileges and permissions must be observed.</p></div>
    </div>
    <div class="toolpane"><div class="toolhead"><b>EQUIFAX CASE</b><small>Known flaw + failed remediation</small></div><p>The lecture uses the 2017 Equifax breach to show that a disclosed Apache Struts vulnerability could still be exploited because the affected server was not patched. The deeper lesson is ownership, patch process and continuous assessment.</p></div>
    <div class="checkpoint" data-answer="2"><div class="q">Main lesson from the Equifax example?</div><button>Unknown flaws are the only serious risk</button><button>Third-party software should never be used</button><button>A known vulnerability can still cause a major breach if remediation fails</button><div class="feedback"></div></div>
  </div>
</section>

<section id="monitorApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Live Monitoring Console</b><span>security://monitor</span></div>
  <div class="app-body">
    <div class="label">APP 03 · MONITORING & ANALYTICS</div><h2>Do not just collect logs. Watch behaviour.</h2>
    <p class="lead">A reliable defence knows where critical assets exist, then watches traffic, delay, uptime, availability and bandwidth for abnormal behaviour.</p>
    <div class="cols2">
      <div class="tile">
        <div class="segmented"><button data-monitor="active" class="active">Active</button><button data-monitor="passive">Passive</button></div>
        <div id="flow" class="flow"><div class="node">Traffic source</div><b>→</b><div class="node">R/W security element</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div></div>
        <p id="monitorText">Active monitoring sits directly in the network and can block, discard or quarantine traffic.</p>
      </div>
      <div class="tile">
        <div id="scope" class="scope"></div>
        <div class="segmented" style="margin-top:8px"><button id="spike">Inject traffic spike</button><button id="normalise">Return to baseline</button></div>
        <p id="scopeText">The bars represent a stable traffic baseline.</p>
      </div>
    </div>
    <div class="cols3" style="margin-top:10px">
      <div class="tile"><h3>Real-time alerting</h3><p>Suspicious activity should notify administrators automatically.</p></div>
      <div class="tile"><h3>Analytics</h3><p>Reports, dashboards and recommendations turn telemetry into insight.</p></div>
      <div class="tile"><h3>Integration</h3><p>Monitoring should feed SIEM, TIP and incident management systems.</p></div>
    </div>
    <div class="checkpoint" data-answer="0"><div class="q">Which model can directly influence live traffic?</div><button>Active monitoring</button><button>Passive monitoring</button><button>Archived monitoring</button><div class="feedback"></div></div>
  </div>
</section>

<section id="vulnApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Vulnerability Triage</b><span>security://cvss</span></div>
  <div class="app-body">
    <div class="label">APP 04 · VULNERABILITY ASSESSMENT</div><h2>Find everything. Fix what matters first.</h2>
    <p class="lead">Assessment is iterative: plan, choose methodology, scan, identify, analyse, assess, remediate, report and repeat.</p>
    <div class="cols3">
      <div class="tile"><h3>Black box</h3><p>No internal information; behaves like an outside adversary and may use OSINT.</p></div>
      <div class="tile"><h3>Gray box</h3><p>Limited information is provided and the tester discovers the rest.</p></div>
      <div class="tile"><h3>White box</h3><p>Complete system information reduces the chance that components are missed.</p></div>
    </div>
    <div class="toolpane">
      <div class="toolhead"><b>CVSS-STYLE CLASSROOM TRIAGE</b><small>Illustrative model based on lecture dimensions.</small></div>
      <div class="risklayout">
        <div class="sliders">
          <label>Attack vector / reach <span id="s1v">80</span><input id="s1" type="range" min="0" max="100" value="80"></label>
          <label>Ease of exploitation <span id="s2v">75</span><input id="s2" type="range" min="0" max="100" value="75"></label>
          <label>Low privileges required <span id="s3v">85</span><input id="s3" type="range" min="0" max="100" value="85"></label>
          <label>Low user interaction <span id="s4v">80</span><input id="s4" type="range" min="0" max="100" value="80"></label>
          <label>CIA impact <span id="s5v">90</span><input id="s5" type="range" min="0" max="100" value="90"></label>
        </div>
        <div class="scorecard"><div id="riskN" class="score">8.2</div><b id="riskBand">HIGH</b><p id="riskText">Expedite remediation ahead of routine work.</p></div>
      </div>
    </div>
    <div class="checkpoint" data-answer="1"><div class="q">Which lecture range is Critical?</div><button>7.0–8.9</button><button>9.0–10.0</button><button>4.0–6.9</button><div class="feedback"></div></div>
  </div>
</section>
`);