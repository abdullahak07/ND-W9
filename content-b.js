document.getElementById('apps').insertAdjacentHTML('beforeend', `
<section id="protectApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Data Protection Studio</b><span>security://protect</span></div>
  <div class="app-body">
    <div class="label">APP 05 · DATA PROTECTION</div><h2>Protect the data even after access is granted.</h2>
    <p class="lead">The lecture combines encryption, tokenisation, masking and quarantining so one failed control does not automatically expose the underlying data.</p>
    <div class="cols2">
      <div class="record"><div class="label" style="color:#8be1d7">SENSITIVE RECORD</div><pre id="record">NAME: ALEX MORGAN
CARD: 5412 7788 9911 4207
SALARY: $148,000
ACCOUNT: AU-92217</pre><div class="actions"><button data-protect="encrypt">Encrypt</button><button data-protect="token">Tokenise</button><button data-protect="mask">Mask</button><button data-protect="quarantine">Quarantine</button></div></div>
      <div id="protectNote" class="tile"><h3>Choose a control</h3><p><b>In transit:</b> TLS and secure protocols such as HTTPS, FTPS and SSH.</p><p><b>At rest:</b> encrypt sensitive data, the storage layer, or both.</p><p><b>Tokenisation:</b> replace sensitive values with stand-ins.</p><p><b>Masking:</b> show only what a role needs.</p></div>
    </div>
    <div class="checkpoint" data-answer="2"><div class="q">Which control changes what a user can see without replacing the original value with a token?</div><button>Active monitoring</button><button>Tokenisation</button><button>Masking</button><div class="feedback"></div></div>
  </div>
</section>

<section id="endpointApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Endpoint Fleet Manager</b><span>security://devices</span></div>
  <div class="app-body">
    <div class="label">APP 06 · ENDPOINT MANAGEMENT</div><h2>Every device is part of the perimeter.</h2>
    <p class="lead">Only authorised devices meeting minimum security requirements should connect. Automation is essential because endpoint variety makes manual control impractical.</p>
    <div class="device-grid">
      <div class="device"><div class="label">MANAGED</div><h3>Finance Laptop</h3><p>Patched Windows · MFA · organisation-managed</p><button data-device="allow">Evaluate</button></div>
      <div class="device"><div class="label">REVIEW</div><h3>Personal Android</h3><p>Personal phone · outdated security patch</p><button data-device="review">Evaluate</button></div>
      <div class="device"><div class="label">HIGH RISK</div><h3>Jailbroken iPhone</h3><p>Operating-system restrictions bypassed</p><button data-device="block">Evaluate</button></div>
      <div class="device"><div class="label">CRITICAL</div><h3>Warehouse POS</h3><p>Managed payment endpoint</p><button data-device="allow">Evaluate</button></div>
    </div>
    <div id="deviceNote" class="readout">Policy should consider device type, OS, patch state, credentials and business risk.</div>
    <div class="cols3" style="margin-top:10px"><div class="tile"><h3>Patch enforcement</h3><p>Major software patches should be consistently covered.</p></div><div class="tile"><h3>Credential policy</h3><p>Passwords, key pairs and MFA belong at the endpoint level too.</p></div><div class="tile"><h3>Mobile risk</h3><p>Rooting, malicious apps, social engineering and MITM attacks all matter.</p></div></div>
    <div class="checkpoint" data-answer="0"><div class="q">Which device should be blocked most clearly?</div><button>A jailbroken device bypassing OS restrictions</button><button>A patched managed laptop</button><button>A compliant managed POS terminal</button><div class="feedback"></div></div>
  </div>
</section>

<section id="breachApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Home Depot Breach Replay</b><span>security://incident-2014</span></div>
  <div class="app-body">
    <div class="label">APP 07 · CASE REPLAY</div><h2>Where could the attacker have been slowed or contained?</h2>
    <p class="lead">The lecture's case links stolen third-party credentials, network movement, POS malware, exfiltration and delayed detection into one chain.</p>
    <div class="replay">
      <div class="step"><b>STEP 1</b><h3>Vendor credentials stolen</h3><p>Third-party credentials were obtained.</p><button data-stop="mfa">Place control</button></div>
      <div class="step"><b>STEP 2</b><h3>Vendor access abused</h3><p>The credentials were used to enter the connected environment.</p><button data-stop="least">Place control</button></div>
      <div class="step"><b>STEP 3</b><h3>Windows pivot</h3><p>A Windows zero-day enabled movement inward.</p><button data-stop="segment">Place control</button></div>
      <div class="step"><b>STEP 4</b><h3>POS malware</h3><p>Memory-scraping malware reached 7,000+ terminals.</p><button data-stop="endpoint">Place control</button></div>
      <div class="step"><b>STEP 5</b><h3>Mass exfiltration</h3><p>Payment-card and email data were stolen at scale.</p><button data-stop="monitor">Place control</button></div>
    </div>
    <div id="replayNote" class="readout">Choose a stage to place a defensive control. The point is layered containment, not pretending one control guarantees prevention.</div>
    <div class="cols3" style="margin-top:10px"><div class="tile"><h3>56 million</h3><p>Payment cards affected in the lecture case.</p></div><div class="tile"><h3>~53 million</h3><p>Customer email addresses affected.</p></div><div class="tile"><h3>5 months</h3><p>Approximate time from compromise to discovery.</p></div></div>
    <div class="checkpoint" data-answer="2"><div class="q">What is the main case-study lesson?</div><button>Only endpoint malware matters</button><button>Encryption alone is sufficient</button><button>Several defensive gaps can combine into one large breach</button><div class="feedback"></div></div>
  </div>
</section>

<section id="quizApp" class="app-window">
  <div class="titlebar"><div class="traffic-lights"><i></i><i></i><i></i></div><b>Final Defense Review</b><span>security://assessment</span></div>
  <div class="app-body"><div class="label">APP 08 · FINAL CHECK</div><h2>Would your defensive design survive?</h2><p class="lead">Nine decisions across the whole lecture.</p><div id="finalQuiz"></div></div>
</section>
`);