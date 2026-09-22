document.getElementById('slidesA').innerHTML=`
<section class="slide" data-title="CIA Triad">
  <div class="scene-copy">
    <div class="num">01</div>
    <div class="eyebrow">CIA FOUNDATION</div>
    <h2>Three promises.</h2>
    <p>Confidentiality limits who can see information. Integrity ensures users can trust information and software. Availability keeps data and services accessible when they are needed.</p>
    <div class="memory">Security controls should strengthen at least one part of CIA without silently destroying the others.</div>
  </div>
  <div class="visual-stage">
    <div class="triptych">
      <div><span class="tag">CONFIDENTIALITY</span><b>Right person. Right data.</b><p>Use access restrictions, trusted devices, privacy policy and least privilege.</p></div>
      <div><span class="tag">INTEGRITY</span><b>Trust what changed.</b><p>Detect tampering, record modifications and alert on suspicious changes.</p></div>
      <div><span class="tag">AVAILABILITY</span><b>Reach it when needed.</b><p>Retention, response time, storage location and tested backups all matter.</p></div>
    </div>
    <div class="activity" style="margin-top:12px">
      <div class="control-grid"><button data-cia="mfa">MFA</button><button data-cia="least">Least privilege</button><button data-cia="audit">Change logging</button><button data-cia="backup">Tested backups</button><button data-cia="trusted">Trusted devices</button></div>
      <div class="meters">
        <div class="meterrow"><span>Confidentiality</span><div class="bar"><i id="barC" style="--v:25%"></i></div><b id="valC">25</b></div>
        <div class="meterrow"><span>Integrity</span><div class="bar"><i id="barI" style="--v:25%"></i></div><b id="valI">25</b></div>
        <div class="meterrow"><span>Availability</span><div class="bar"><i id="barA" style="--v:25%"></i></div><b id="valA">25</b></div>
      </div>
      <div id="ciaText" class="readout">Baseline only. The environment still relies too heavily on trust.</div>
    </div>
    <div class="identity-strip">
      <button data-person="james"><b>James</b><span>Legitimate use</span></button>
      <button data-person="john"><b>John</b><span>Stolen credentials</span></button>
      <button data-person="molly"><b>Molly</b><span>Shared credentials</span></button>
    </div>
    <div id="identityAnswer" class="readout">All three can appear as james_analyst. Identity needs stronger verification.</div>
  </div>
</section>

<section class="slide" data-title="Defense Failures">
  <div class="scene-copy">
    <div class="num">02</div>
    <div class="eyebrow">WHY DEFENSE FAILS</div>
    <h2>Process gaps beat products.</h2>
    <p>Large data volumes, regulation, third-party services, DevOps complexity and skills shortages create conditions where known weaknesses can remain exploitable.</p>
    <div class="memory">Compliance is a floor, not a ceiling.</div>
  </div>
  <div class="visual-stage">
    <div class="failure-stack">
      <div><b>Compliance-only thinking</b><p>Meeting a requirement does not mean the organisation is secure.</p></div>
      <div><b>No central data view</b><p>You cannot protect sensitive information if you do not know where it lives.</p></div>
      <div><b>No clear owner</b><p>Security accountability cannot be diffused indefinitely.</p></div>
      <div><b>Known flaws ignored</b><p>Weak patch management leaves public vulnerabilities exploitable.</p></div>
      <div><b>Poor activity monitoring</b><p>Abnormal permissions and user behaviour remain invisible.</p></div>
    </div>
    <div class="case-banner"><b>EQUIFAX:</b> the lecture uses the 2017 breach to show how a disclosed Apache Struts vulnerability still caused damage because the affected system was not patched.</div>
    <div class="checkpoint" data-answer="2"><div class="q">What is the main Equifax lesson?</div><button>Unknown flaws are the only serious risk</button><button>Third-party software should never be used</button><button>Known vulnerabilities still cause breaches when remediation fails</button><div class="feedback"></div></div>
  </div>
</section>

<section class="slide" data-title="Monitoring">
  <div class="scene-copy">
    <div class="num">03</div>
    <div class="eyebrow">ACTIVE MONITORING</div>
    <h2>Watch behaviour.</h2>
    <p>Monitoring becomes useful when activity is compared against a baseline. Traffic, delay, uptime, availability and bandwidth can expose abnormal patterns.</p>
    <div class="memory">Logging records what happened. Active monitoring can also influence what happens next.</div>
  </div>
  <div class="visual-stage monitor-panel">
    <div class="modeBtns"><button data-monitor="active" class="active">Active</button><button data-monitor="passive">Passive</button></div>
    <div id="flow" class="flow"><div class="node">Traffic</div><b>→</b><div class="node">R/W security element</div><b>→</b><div class="node">Repository</div><b>→</b><div class="node">Analytics</div></div>
    <p id="monitorText">Active monitoring can block, discard or quarantine traffic.</p>
    <div id="scope" class="scope"></div>
    <div class="modeBtns"><button id="spike">Inject traffic spike</button><button id="normalise">Return to baseline</button></div>
    <p id="scopeText">The bars represent a stable traffic baseline.</p>
    <div class="checkpoint" data-answer="0"><div class="q">Which model can directly influence live traffic?</div><button>Active monitoring</button><button>Passive monitoring</button><button>Archived monitoring</button><div class="feedback"></div></div>
  </div>
</section>

<section class="slide" data-title="Vulnerability Triage">
  <div class="scene-copy">
    <div class="num">04</div>
    <div class="eyebrow">VULNERABILITY MANAGEMENT</div>
    <h2>Find everything.<br>Fix what matters first.</h2>
    <p>Assessment is iterative: plan, choose methodology, scan, identify, analyse, assess, remediate, report and repeat.</p>
    <div class="memory">A scanner produces findings. Risk analysis decides the order.</div>
  </div>
  <div class="visual-stage">
    <div class="risk-layout">
      <div class="sliders">
        <label>Attack vector / reach <span id="s1v">80</span><input id="s1" type="range" min="0" max="100" value="80"></label>
        <label>Ease of exploitation <span id="s2v">75</span><input id="s2" type="range" min="0" max="100" value="75"></label>
        <label>Low privileges required <span id="s3v">85</span><input id="s3" type="range" min="0" max="100" value="85"></label>
        <label>Low user interaction <span id="s4v">80</span><input id="s4" type="range" min="0" max="100" value="80"></label>
        <label>CIA impact <span id="s5v">90</span><input id="s5" type="range" min="0" max="100" value="90"></label>
      </div>
      <div class="scorebox"><div id="riskN" class="score">8.2</div><b id="riskBand">HIGH</b><p id="riskText">Expedite remediation ahead of routine work.</p></div>
    </div>
    <div class="triptych" style="margin-top:12px">
      <div><span class="tag">BLACK BOX</span><b>No internal knowledge</b><p>Tester behaves like an external adversary.</p></div>
      <div><span class="tag">GRAY BOX</span><b>Partial knowledge</b><p>Some information is supplied; the rest is discovered.</p></div>
      <div><span class="tag">WHITE BOX</span><b>Full knowledge</b><p>Complete system information reduces blind spots.</p></div>
    </div>
    <div class="checkpoint" data-answer="1"><div class="q">Which lecture range is Critical?</div><button>7.0–8.9</button><button>9.0–10.0</button><button>4.0–6.9</button><div class="feedback"></div></div>
  </div>
</section>
`;