document.getElementById('partB').innerHTML=`
<section id="protect" class="chapter">
  <div class="chapter-no">05</div>
  <div class="chapter-main">
    <div class="eyebrow">PROTECT THE DATA ITSELF</div>
    <h2>Assume access controls can fail.</h2>
    <p class="intro">The lecture adds protection directly to data: encryption in transit and at rest, tokenisation, masking, and quarantining suspicious requests.</p>

    <div class="protect-stage">
      <div class="record">
        <span class="tape red">SENSITIVE RECORD</span>
        <pre id="record">NAME: ALEX MORGAN
CARD: 5412 7788 9911 4207
SALARY: $148,000
ACCOUNT: AU-92217</pre>
        <div class="decision-row">
          <button data-protect="encrypt">ENCRYPT</button>
          <button data-protect="token">TOKENISE</button>
          <button data-protect="mask">MASK</button>
          <button data-protect="quarantine">QUARANTINE</button>
        </div>
      </div>
      <div id="protectNote">
        <div class="strip"><b>IN TRANSIT</b><p>TLS supersedes SSL; the lecture points to HTTPS, FTPS and SSH as secure equivalents for moving data.</p></div>
        <div class="strip"><b>AT REST</b><p>Encrypt sensitive data before storage, encrypt the storage layer, or use both.</p></div>
        <div class="strip"><b>TOKENISATION</b><p>Replace sensitive values with random tokens while the real value remains protected in a token vault.</p></div>
        <div class="strip"><b>MASKING</b><p>Reveal only the portion a role needs to see.</p></div>
      </div>
    </div>

    <div class="checkpoint" data-answer="2"><div class="q">Which control changes what a user can see without replacing the original sensitive value with a token?</div><button>Active monitoring</button><button>Tokenisation</button><button>Masking</button><div class="feedback"></div></div>
  </div>
</section>

<section id="fleet" class="chapter">
  <div class="chapter-no">06</div>
  <div class="chapter-main">
    <div class="eyebrow">ENDPOINT MANAGEMENT</div>
    <h2>The perimeter now walks around in a pocket.</h2>
    <p class="intro">Only authorised devices meeting minimum requirements should connect. Endpoint management must enforce device policy, user access, credentials, patching and continuous integration with SIEM/TIP.</p>

    <div class="fleet">
      <div class="device"><span class="tape green">MANAGED</span><h3>Finance laptop</h3><p>Patched Windows device, MFA enabled, organisation-managed.</p><button data-device="allow">Evaluate</button></div>
      <div class="device"><span class="tape">REVIEW</span><h3>Personal Android</h3><p>Personal phone, outdated security patch, employee-owned.</p><button data-device="review">Evaluate</button></div>
      <div class="device"><span class="tape red">HIGH RISK</span><h3>Jailbroken iPhone</h3><p>OS restrictions bypassed.</p><button data-device="block">Evaluate</button></div>
      <div class="device"><span class="tape blue">CRITICAL</span><h3>Warehouse POS</h3><p>Managed payment endpoint handling sensitive card transactions.</p><button data-device="allow">Evaluate</button></div>
    </div>
    <div id="deviceNote" class="stage-readout">Select a device. Policy should consider endpoint type, OS, patch state, credentials and business risk.</div>

    <div class="strip"><b>MOBILE RISK</b><p>Rooting/jailbreaking, weaponised or over-permissioned applications, social engineering, malicious files and MITM attacks all increase endpoint risk.</p></div>
    <div class="strip"><b>AUTOMATION</b><p>The volume and diversity of endpoints makes manual control impractical; policy enforcement must be automated.</p></div>
    <div class="strip"><b>PATCHING</b><p>A reliable endpoint strategy should enforce major software patches across supported device and operating-system types.</p></div>
    <div class="strip"><b>FLEXIBILITY</b><p>Security must tighten the environment without making legitimate work impossible.</p></div>

    <div class="checkpoint" data-answer="0"><div class="q">Which device should be blocked most clearly under the lecture's mobile-security logic?</div><button>A jailbroken device bypassing OS restrictions</button><button>A patched managed laptop</button><button>A compliant managed POS terminal</button><div class="feedback"></div></div>
  </div>
</section>

<section id="replay" class="chapter">
  <div class="chapter-no">07</div>
  <div class="chapter-main">
    <div class="eyebrow">HOME DEPOT BREACH REPLAY</div>
    <h2>Now place the controls before the attacker moves.</h2>
    <p class="intro">The lecture's Home Depot case ties the whole week together: stolen third-party credentials, network movement, endpoint malware, large-scale exfiltration, and a long detection delay.</p>

    <div class="replay">
      <div class="step"><div class="num">1</div><h3>Vendor credentials stolen</h3><p>Attackers obtained third-party credentials.</p><button data-stop="mfa">Place control</button></div>
      <div class="step"><div class="num">2</div><h3>Vendor access abused</h3><p>Those credentials were used to access the connected environment.</p><button data-stop="least">Place control</button></div>
      <div class="step"><div class="num">3</div><h3>Windows pivot</h3><p>A Windows zero-day enabled movement into the corporate network.</p><button data-stop="segment">Place control</button></div>
      <div class="step"><div class="num">4</div><h3>POS malware deployed</h3><p>Memory-scraping malware reached more than 7,000 POS terminals.</p><button data-stop="endpoint">Place control</button></div>
      <div class="step"><div class="num">5</div><h3>Mass exfiltration</h3><p>Payment-card and email data were stolen at scale.</p><button data-stop="monitor">Place control</button></div>
    </div>
    <div id="replayNote" class="stage-readout">Choose any stage to place a defensive control. The objective is containment, not pretending one control could have guaranteed prevention.</div>

    <div class="three-col" style="margin-top:18px">
      <div><span class="tape red">56M</span><h3>Credit cards</h3><p>The lecture reports data associated with 56 million payment cards was stolen.</p></div>
      <div><span class="tape">53M</span><h3>Email addresses</h3><p>Around 53 million customer email addresses were also affected.</p></div>
      <div><span class="tape blue">5 MONTHS</span><h3>Detection delay</h3><p>The compromise began in April 2014 and was discovered in September 2014.</p></div>
    </div>

    <div class="strip"><b>PREVENTION THEMES</b><p>Secure POS configuration, point-to-point encryption, OS upgrades, VLAN segmentation, vulnerability assessment and monitoring feeding SIEM/TIP.</p></div>

    <div class="checkpoint" data-answer="2"><div class="q">What does the Home Depot case demonstrate most clearly?</div><button>Only endpoint malware matters</button><button>Encryption alone is sufficient</button><button>Several defensive gaps can combine into one large breach</button><div class="feedback"></div></div>
  </div>
</section>
`;