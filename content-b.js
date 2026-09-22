document.getElementById('scenes').insertAdjacentHTML('beforeend', `
<section id="scene-data" class="scene" data-scene="data">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 05 · DATA VAULT</span><h2>Protect the data even after access is granted.</h2><p>Encryption, tokenisation, masking and quarantining protect the information itself rather than relying only on identity controls.</p></div>
    <div class="vault">
      <div class="record"><span class="sign">SENSITIVE RECORD</span><pre id="record">NAME: ALEX MORGAN
CARD: 5412 7788 9911 4207
SALARY: $148,000
ACCOUNT: AU-92217</pre><div class="actions"><button data-protect="encrypt">Encrypt</button><button data-protect="token">Tokenise</button><button data-protect="mask">Mask</button><button data-protect="quarantine">Quarantine</button></div></div>
      <div id="protectNote" class="lesson"><h3>Choose a protection control</h3><p><b>In transit:</b> TLS and secure protocols such as HTTPS, FTPS and SSH.</p><p><b>At rest:</b> encrypt sensitive data, the storage layer, or both.</p><p><b>Tokenisation:</b> replace sensitive values with stand-ins.</p><p><b>Masking:</b> show only what a role needs.</p></div>
    </div>
    <div class="checkpoint" data-answer="2"><div class="q">Which control changes what a user can see without replacing the original value with a token?</div><button>Active monitoring</button><button>Tokenisation</button><button>Masking</button><div class="feedback"></div></div>
  </div>
</section>

<section id="scene-endpoint" class="scene" data-scene="endpoint">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 06 · DEVICE GARAGE</span><h2>Every device is part of the perimeter.</h2><p>Only authorised endpoints meeting minimum requirements should connect. Automation is essential because manual control does not scale.</p></div>
    <div class="fleet">
      <div class="device"><span class="sign">MANAGED</span><h3>Finance Laptop</h3><p>Patched Windows · MFA · organisation-managed</p><button data-device="allow">Evaluate</button></div>
      <div class="device"><span class="sign">REVIEW</span><h3>Personal Android</h3><p>Personal phone · outdated patch</p><button data-device="review">Evaluate</button></div>
      <div class="device"><span class="sign">HIGH RISK</span><h3>Jailbroken iPhone</h3><p>Operating-system restrictions bypassed</p><button data-device="block">Evaluate</button></div>
      <div class="device"><span class="sign">CRITICAL</span><h3>Warehouse POS</h3><p>Managed payment endpoint</p><button data-device="allow">Evaluate</button></div>
    </div>
    <div id="deviceNote" class="readout">Policy should consider device type, OS, patch state, credentials and business risk.</div>
    <div class="lesson-grid">
      <div class="lesson"><h3>Patch enforcement</h3><p>Major software patches should be consistently covered.</p></div>
      <div class="lesson"><h3>Credential policy</h3><p>Passwords, key pairs and MFA belong at the endpoint level too.</p></div>
      <div class="lesson"><h3>Mobile risk</h3><p>Rooting, malicious apps, social engineering and MITM attacks all matter.</p></div>
    </div>
    <div class="checkpoint" data-answer="0"><div class="q">Which device should be blocked most clearly?</div><button>A jailbroken device bypassing OS restrictions</button><button>A patched managed laptop</button><button>A compliant managed POS terminal</button><div class="feedback"></div></div>
  </div>
</section>

<section id="scene-breach" class="scene" data-scene="breach">
  <button class="back-map">← Campus Map</button>
  <div class="scene-shell">
    <div class="scene-head"><span>LOCATION 07 · INCIDENT THEATRE</span><h2>Home Depot breach replay.</h2><p>The case ties stolen third-party credentials, network movement, POS malware, exfiltration and delayed detection into one chain.</p></div>
    <div class="replay">
      <div class="step"><b>STEP 1</b><h3>Vendor credentials stolen</h3><p>Third-party credentials were obtained.</p><button data-stop="mfa">Place control</button></div>
      <div class="step"><b>STEP 2</b><h3>Vendor access abused</h3><p>The credentials were used to enter the connected environment.</p><button data-stop="least">Place control</button></div>
      <div class="step"><b>STEP 3</b><h3>Windows pivot</h3><p>A Windows zero-day enabled movement inward.</p><button data-stop="segment">Place control</button></div>
      <div class="step"><b>STEP 4</b><h3>POS malware</h3><p>Memory-scraping malware reached 7,000+ terminals.</p><button data-stop="endpoint">Place control</button></div>
      <div class="step"><b>STEP 5</b><h3>Mass exfiltration</h3><p>Payment-card and email data were stolen at scale.</p><button data-stop="monitor">Place control</button></div>
    </div>
    <div id="replayNote" class="readout">Choose a stage to place a defensive control. The point is layered containment, not pretending one control guarantees prevention.</div>
    <div class="lesson-grid">
      <div class="lesson"><span class="sign">56M</span><h3>Payment cards</h3><p>The lecture reports data associated with 56 million payment cards was stolen.</p></div>
      <div class="lesson"><span class="sign">~53M</span><h3>Email addresses</h3><p>Around 53 million customer email addresses were also affected.</p></div>
      <div class="lesson"><span class="sign">5 MONTHS</span><h3>Detection delay</h3><p>The compromise began in April 2014 and was discovered in September 2014.</p></div>
    </div>
    <div class="checkpoint" data-answer="2"><div class="q">What is the main case-study lesson?</div><button>Only endpoint malware matters</button><button>Encryption alone is sufficient</button><button>Several defensive gaps can combine into one large breach</button><div class="feedback"></div></div>
  </div>
</section>
`);