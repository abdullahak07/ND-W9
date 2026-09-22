document.getElementById('partB').innerHTML = `
<section id="protect" class="zone">
  <div class="section-kicker">LAB 05 · DATA PROTECTION</div>
  <div class="section-head">
    <h2>Protect the data even after access is granted.</h2>
    <p>Data protection follows information in transit and at rest. The lecture combines encryption with tokenisation, masking and quarantining so one failed control does not automatically expose the underlying data.</p>
  </div>
  <div class="protection-lab">
    <div class="data-card">
      <div class="badge orange">SENSITIVE RECORD</div>
      <div id="fakeData" class="fake-data">NAME: ALEX MORGAN<br>CARD: 5412 7788 9911 4207<br>SALARY: $148,000<br>ACCOUNT: AU-92217</div>
      <div class="protection-buttons">
        <button data-protect="encrypt">Encrypt</button>
        <button data-protect="token">Tokenise</button>
        <button data-protect="mask">Mask</button>
        <button data-protect="quarantine">Quarantine request</button>
      </div>
    </div>
    <div id="protectExplain" class="card">
      <div class="badge blue">CONTROL EXPLAINER</div>
      <h3>Choose a protection mechanism</h3>
      <p><b>Encryption:</b> protects data using reversible cryptography when authorised keys are available.</p>
      <p><b>Tokenisation:</b> replaces sensitive data with a random token while the real value remains protected in a token vault.</p>
      <p><b>Masking:</b> reveals only the portion a user actually needs.</p>
      <p><b>Quarantining:</b> stops suspicious access, logs activity and alerts defenders.</p>
    </div>
  </div>
  <div class="grid2" style="margin-top:14px">
    <div class="card"><div class="badge green">IN TRANSIT</div><h3>TLS and secure protocol equivalents</h3><p>Protect moving data with TLS and secure protocols such as HTTPS, FTPS and SSH rather than HTTP, FTP and Telnet. The lecture highlights man-in-the-middle and downgrade risk and recommends strict transport security.</p></div>
    <div class="card"><div class="badge blue">AT REST</div><h3>Encrypt the data, storage, or both</h3><p>Sensitive information can be encrypted before storage, the storage layer itself can be encrypted, or both approaches can be combined while preserving usability.</p></div>
  </div>
  <div class="check" data-answer="1"><div class="q">Which mechanism replaces sensitive data with a random stand-in value while the original stays protected elsewhere?</div><button>Masking</button><button>Tokenisation</button><button>Passive monitoring</button><div class="feedback"></div></div>
</section>

<section id="endpoint" class="zone">
  <div class="section-kicker">LAB 06 · ENDPOINT FLEET</div>
  <div class="section-head">
    <h2>Every device is part of the perimeter.</h2>
    <p>Only authorised endpoints that meet minimum security requirements should connect. Endpoint management must be automated, policy-driven, logged and integrated because laptops, phones, printers, tablets and industrial systems all expand the attack surface.</p>
  </div>
  <div class="endpoint-grid">
    <div class="device"><strong>Finance Laptop</strong><small>Windows · patched · MFA · managed</small><button data-device="ok">Evaluate</button></div>
    <div class="device"><strong>Personal Phone</strong><small>Android · outdated patch · personal device</small><button data-device="review">Evaluate</button></div>
    <div class="device"><strong>Jailbroken iPhone</strong><small>iOS restrictions bypassed</small><button data-device="block">Evaluate</button></div>
    <div class="device"><strong>Warehouse POS</strong><small>Managed · critical payment endpoint</small><button data-device="ok">Evaluate</button></div>
  </div>
  <div id="deviceReadout" class="card dark" style="margin-top:10px"><p>Evaluate an endpoint against policy: device type, OS, patch state, credentials, risk and whether it should be allowed to access critical assets.</p></div>
  <div class="grid3" style="margin-top:14px">
    <div class="card"><h3>Permission control</h3><p>Choose which endpoint types, models and operating systems are allowed to connect.</p></div>
    <div class="card"><h3>Credential enforcement</h3><p>Apply password policy, key pairs and MFA at the endpoint level.</p></div>
    <div class="card"><h3>Patch & compliance</h3><p>Enforce major software patches, identify policy violations automatically and send changes to SIEM/TIP.</p></div>
  </div>
  <div class="grid2" style="margin-top:14px">
    <div class="card"><div class="badge red">MOBILE THREATS</div><h3>Rooting, apps, social engineering</h3><p>Rooted or jailbroken devices bypass OS restrictions. Weaponised or over-permissioned applications, cloned sites, malicious files and network MITM attacks all create mobile risk.</p></div>
    <div class="card"><div class="badge green">MOBILE RESPONSE</div><h3>Identify and block risky devices</h3><p>Use device ID, IMEI, model and manufacturer to identify risky endpoints, then block them when policy says the risk is too high. Strong enterprise wireless protection and user education reduce network exposure.</p></div>
  </div>
  <div class="check" data-answer="2"><div class="q">Why must endpoint management be automated?</div><button>Because endpoints never change</button><button>Because automation replaces all policy</button><button>Because the number and variety of endpoints make manual control impractical</button><div class="feedback"></div></div>
</section>

<section id="breach" class="zone">
  <div class="section-kicker">CASE REPLAY · HOME DEPOT</div>
  <div class="section-head">
    <h2>Where could the breach have been stopped?</h2>
    <p>The Home Depot case in the lecture ties the whole defensive stack together: third-party credentials, a network pivot, endpoint malware, weak monitoring and insufficient segmentation combined into a large payment-data breach.</p>
  </div>
  <div class="timeline">
    <div class="event"><b>STEP 1</b><h3>Vendor credentials stolen</h3><p>Attackers obtained third-party credentials.</p><button data-stop="identity">Insert control</button></div>
    <div class="event"><b>STEP 2</b><h3>Vendor access abused</h3><p>Credentials were used to enter the vendor-connected environment.</p><button data-stop="access">Insert control</button></div>
    <div class="event"><b>STEP 3</b><h3>Windows pivot</h3><p>A Windows zero-day enabled movement into the corporate network.</p><button data-stop="segment">Insert control</button></div>
    <div class="event"><b>STEP 4</b><h3>POS malware deployed</h3><p>Memory-scraping malware reached more than 7,000 POS terminals.</p><button data-stop="endpoint">Insert control</button></div>
    <div class="event"><b>STEP 5</b><h3>Mass exfiltration</h3><p>Payment and email data were stolen at massive scale.</p><button data-stop="monitor">Insert control</button></div>
  </div>
  <div id="breachReadout" class="card dark" style="margin-top:10px"><p>Choose an intervention point. The lecture's prevention themes include secure POS configuration, point-to-point encryption, OS upgrades, network segmentation, frequent assessment, stronger credential management and monitoring feeding SIEM/TIP.</p></div>
  <div class="grid2" style="margin-top:14px">
    <div class="card"><div class="badge red">WHAT FAILED</div><h3>Multiple controls at once</h3><p>Vulnerable POS endpoints, poor vulnerability management, weak access/credential management, weak data/network monitoring and poor network design all contributed.</p></div>
    <div class="card"><div class="badge green">WHAT COULD HELP</div><h3>Layered prevention</h3><p>Secure POS configuration, P2PE, OS upgrades, VLAN segmentation and a monitoring/TI program could have reduced likelihood, impact or time-to-detection.</p></div>
  </div>
  <div class="check" data-answer="0"><div class="q">What is the central lesson of the Home Depot case?</div><button>A major breach can emerge from several defensive gaps interacting together</button><button>Encryption alone prevents every endpoint compromise</button><button>Third-party access is always safe</button><div class="feedback"></div></div>
</section>
`;