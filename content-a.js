document.getElementById('scenes').insertAdjacentHTML('beforeend', `
<section id="scene-cia" class="scene" data-scene="cia">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 01 · CIA HALL</span><h2>Three promises every control must protect.</h2><p>Confidentiality limits who can see data. Integrity ensures users can trust it. Availability keeps it accessible when needed.</p></div>
    <div class="lesson-grid">
      <div class="lesson"><span class="sign">CONFIDENTIALITY</span><h3>Right person, right data</h3><p>Access restriction, privacy policy, trusted networks/devices, least privilege and no permission by default.</p></div>
      <div class="lesson"><span class="sign">INTEGRITY</span><h3>Trust what changed</h3><p>Define who may modify assets, detect tampering, log changes and generate prioritised alerts.</p></div>
      <div class="lesson"><span class="sign">AVAILABILITY</span><h3>Reach it when needed</h3><p>Retention, response time, storage location and tested backups determine whether information stays usable.</p></div>
    </div>
    <div class="activity">
      <h3>Build the control set</h3>
      <div class="control-list"><button data-cia="mfa">MFA</button><button data-cia="least">Least privilege</button><button data-cia="audit">Change logging</button><button data-cia="backup">Tested backups</button><button data-cia="trusted">Trusted devices</button></div>
      <div class="meterrow"><span>Confidentiality</span><div class="meter"><i id="barC" style="--v:25%"></i></div><b id="valC">25</b></div>
      <div class="meterrow"><span>Integrity</span><div class="meter"><i id="barI" style="--v:25%"></i></div><b id="valI">25</b></div>
      <div class="meterrow"><span>Availability</span><div class="meter"><i id="barA" style="--v:25%"></i></div><b id="valA">25</b></div>
      <div id="ciaText" class="readout">Baseline only. The environment still relies too heavily on trust.</div>
    </div>
    <div class="case-strip">
      <div class="case"><span class="sign">JAMES</span><h3>Legitimate use</h3><p>James downloads customer data for his assigned work.</p><button data-person="james">Inspect</button></div>
      <div class="case"><span class="sign">JOHN</span><h3>Credential theft</h3><p>John steals James' credentials and performs the same download.</p><button data-person="john">Inspect</button></div>
      <div class="case"><span class="sign">MOLLY</span><h3>Credential sharing</h3><p>Molly borrows James' credentials to avoid a project delay.</p><button data-person="molly">Inspect</button></div>
    </div>
    <div id="identityAnswer" class="readout">All three can appear as james_analyst. Extra verification is needed to restore accountability.</div>
    <div class="checkpoint" data-answer="1"><div class="q">Which control most directly reduces this identity ambiguity?</div><button>Longer retention</button><button>Additional identity verification such as MFA</button><button>More storage</button><div class="feedback"></div></div>
  </div>
</section>

<section id="scene-fail" class="scene" data-scene="fail">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 02 · FAILURE MUSEUM</span><h2>Security fails through process gaps too.</h2><p>Data growth, regulation, third-party exposure, DevOps complexity and skills shortages create recurring weaknesses.</p></div>
    <div class="failure-wall">
      <div class="failure"><b>Compliance only</b><p>Compliance is a starting point, not the finish line.</p></div>
      <div class="failure"><b>No central data view</b><p>If you do not know where sensitive data lives, protection becomes inconsistent.</p></div>
      <div class="failure"><b>No clear owner</b><p>Data security needs explicit accountability.</p></div>
      <div class="failure"><b>Known flaws ignored</b><p>Weak patch management leaves disclosed vulnerabilities exploitable.</p></div>
      <div class="failure"><b>Poor activity monitoring</b><p>User activity, privileges and permission changes must be watched.</p></div>
    </div>
    <div class="activity"><h3>Equifax exhibit</h3><p>The lecture uses the 2017 Equifax breach to show that a disclosed Apache Struts vulnerability could still be exploited because the affected server was not patched. The deeper lesson is ownership, remediation process and continuous assessment.</p></div>
    <div class="checkpoint" data-answer="2"><div class="q">Main lesson from the Equifax example?</div><button>Unknown flaws are the only serious risk</button><button>Third-party software should never be used</button><button>A known vulnerability can still cause a major breach if remediation fails</button><div class="feedback"></div></div>
  </div>
</section>

<section id="scene-monitor" class="scene" data-scene="monitor">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 03 · WATCHTOWER</span><h2>Watch behaviour, not just logs.</h2><p>Traffic, delay, uptime, availability and bandwidth become useful when compared against a known baseline.</p></div>
    <div class="monitor-room">
      <div class="activity">
        <h3>Monitoring mode</h3>
        <div class="segmented"><button data-monitor="active" class="active">Active</button><button data-monitor="passive">Passive</button></div>
        <div id="flow" class="flow"><div class="node">Traffic source</div><b>→</b><div class="node">R/W security element</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div></div>
        <p id="monitorText">Active monitoring sits directly in the network and can block, discard or quarantine traffic.</p>
      </div>
      <div class="activity">
        <h3>Traffic baseline</h3>
        <div id="scope" class="scope"></div>
        <div class="segmented" style="margin-top:8px"><button id="spike">Inject spike</button><button id="normalise">Return to baseline</button></div>
        <p id="scopeText">The bars represent a stable traffic baseline.</p>
      </div>
    </div>
    <div class="lesson-grid">
      <div class="lesson"><h3>Real-time alerting</h3><p>Suspicious activity should notify administrators automatically.</p></div>
      <div class="lesson"><h3>Analytics</h3><p>Reports, dashboards and recommendations turn telemetry into insight.</p></div>
      <div class="lesson"><h3>Integration</h3><p>Monitoring should feed SIEM, TIP and incident-management systems.</p></div>
    </div>
    <div class="checkpoint" data-answer="0"><div class="q">Which model can directly influence live traffic?</div><button>Active monitoring</button><button>Passive monitoring</button><button>Archived monitoring</button><div class="feedback"></div></div>
  </div>
</section>

<section id="scene-vuln" class="scene" data-scene="vuln">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 04 · TRIAGE CLINIC</span><h2>Find everything. Fix what matters first.</h2><p>Assessment is iterative: plan, choose methodology, scan, identify, analyse, assess, remediate, report and repeat.</p></div>
    <div class="lesson-grid">
      <div class="lesson"><span class="sign">BLACK BOX</span><p>No internal information; behaves like an external adversary.</p></div>
      <div class="lesson"><span class="sign">GRAY BOX</span><p>Limited information is provided and the tester discovers the rest.</p></div>
      <div class="lesson"><span class="sign">WHITE BOX</span><p>Complete system information reduces the chance that components are missed.</p></div>
    </div>
    <div class="activity">
      <h3>CVSS-style classroom triage</h3>
      <div class="riskroom">
        <div class="sliders">
          <label>Attack vector / reach <span id="s1v">80</span><input id="s1" type="range" min="0" max="100" value="80"></label>
          <label>Ease of exploitation <span id="s2v">75</span><input id="s2" type="range" min="0" max="100" value="75"></label>
          <label>Low privileges required <span id="s3v">85</span><input id="s3" type="range" min="0" max="100" value="85"></label>
          <label>Low user interaction <span id="s4v">80</span><input id="s4" type="range" min="0" max="100" value="80"></label>
          <label>CIA impact <span id="s5v">90</span><input id="s5" type="range" min="0" max="100" value="90"></label>
        </div>
        <div class="scoretower"><div id="riskN" class="score">8.2</div><b id="riskBand">HIGH</b><p id="riskText">Expedite remediation ahead of routine work.</p></div>
      </div>
    </div>
    <div class="checkpoint" data-answer="1"><div class="q">Which lecture range is Critical?</div><button>7.0–8.9</button><button>9.0–10.0</button><button>4.0–6.9</button><div class="feedback"></div></div>
  </div>
</section>
`);