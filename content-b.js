document.getElementById('slidesB').innerHTML=`
<section class="slide" data-title="Data Protection">
  <div class="scene-copy">
    <div class="num">05</div>
    <div class="eyebrow">DATA PROTECTION</div>
    <h2>Protect the data itself.</h2>
    <p>Encryption, tokenisation, masking and quarantining reduce exposure even if another defensive layer fails.</p>
    <div class="memory">Identity controls decide who gets access. Data controls decide what remains exposed after access.</div>
  </div>
  <div class="visual-stage">
    <div class="protection-demo">
      <pre id="record">NAME: ALEX MORGAN
CARD: 5412 7788 9911 4207
SALARY: $148,000
ACCOUNT: AU-92217</pre>
      <div class="actions"><button data-protect="encrypt">Encrypt</button><button data-protect="token">Tokenise</button><button data-protect="mask">Mask</button><button data-protect="quarantine">Quarantine</button></div>
    </div>
    <div id="protectNote" class="case-banner"><b>IN TRANSIT:</b> TLS and secure protocol equivalents. <b>AT REST:</b> encrypt the data, the storage layer, or both.</div>
    <div class="checkpoint" data-answer="2"><div class="q">Which control changes what a user can see without replacing the original value with a token?</div><button>Active monitoring</button><button>Tokenisation</button><button>Masking</button><div class="feedback"></div></div>
  </div>
</section>

<section class="slide" data-title="Endpoint Management">
  <div class="scene-copy">
    <div class="num">06</div>
    <div class="eyebrow">ENDPOINT MANAGEMENT</div>
    <h2>The perimeter walks around.</h2>
    <p>Laptops, phones, tablets, POS terminals and other endpoints all expand the attack surface. Policy must be automated because manual control does not scale.</p>
    <div class="memory">Authorised user + risky device can still equal risky access.</div>
  </div>
  <div class="visual-stage endpoint-list">
    <div class="device"><div><b>Finance Laptop</b><small>Patched · MFA · managed</small></div><button data-device="allow">Evaluate</button></div>
    <div class="device"><div><b>Personal Android</b><small>Outdated patch · personal device</small></div><button data-device="review">Evaluate</button></div>
    <div class="device"><div><b>Jailbroken iPhone</b><small>OS restrictions bypassed</small></div><button data-device="block">Evaluate</button></div>
    <div class="device"><div><b>Warehouse POS</b><small>Managed · payment endpoint</small></div><button data-device="allow">Evaluate</button></div>
    <div id="deviceNote" class="readout">Evaluate each endpoint against policy: type, OS, patch state, credentials and business risk.</div>
    <div class="checkpoint" data-answer="0"><div class="q">Which device should be blocked most clearly?</div><button>A jailbroken device bypassing OS restrictions</button><button>A patched managed laptop</button><button>A compliant managed POS terminal</button><div class="feedback"></div></div>
  </div>
</section>

<section class="slide" data-title="Home Depot Replay">
  <div class="scene-copy">
    <div class="num">07</div>
    <div class="eyebrow">HOME DEPOT CASE</div>
    <h2>One breach.<br>Many gaps.</h2>
    <p>The lecture links third-party credentials, network movement, POS malware, exfiltration and delayed detection into one defensive failure chain.</p>
    <div class="memory">The lesson is layered containment—not pretending one product could have guaranteed prevention.</div>
  </div>
  <div class="visual-stage breach-line">
    <div class="breach-step"><span>1</span><div><b>Vendor credentials stolen</b><small>Third-party identity compromise</small></div><button data-stop="mfa">Place control</button></div>
    <div class="breach-step"><span>2</span><div><b>Vendor access abused</b><small>Account reaches connected systems</small></div><button data-stop="least">Place control</button></div>
    <div class="breach-step"><span>3</span><div><b>Windows pivot</b><small>Movement deeper into the network</small></div><button data-stop="segment">Place control</button></div>
    <div class="breach-step"><span>4</span><div><b>POS malware deployed</b><small>7,000+ terminals affected</small></div><button data-stop="endpoint">Place control</button></div>
    <div class="breach-step"><span>5</span><div><b>Mass exfiltration</b><small>Payment and email data stolen</small></div><button data-stop="monitor">Place control</button></div>
    <div id="replayNote" class="readout">Place a control at any stage to see how layered defense can reduce movement or impact.</div>
    <div class="checkpoint" data-answer="2"><div class="q">What is the main case-study lesson?</div><button>Only endpoint malware matters</button><button>Encryption alone is sufficient</button><button>Several defensive gaps can combine into one large breach</button><div class="feedback"></div></div>
  </div>
</section>

<section class="slide" data-title="Defense Synthesis">
  <div class="scene-copy">
    <div class="num">08</div>
    <div class="eyebrow">PUT THE STACK TOGETHER</div>
    <h2>Defense is a system.</h2>
    <p>The lecture's major controls reinforce one another. Identity reduces unauthorised entry. Monitoring exposes behaviour. Vulnerability management reduces exploitable weaknesses. Data protection limits disclosure. Endpoint policy controls the devices touching critical assets.</p>
    <div class="memory">The goal is not zero risk. The goal is fewer opportunities, smaller blast radius and faster detection.</div>
  </div>
  <div class="visual-stage">
    <div class="chain">
      <div><span>01</span><b>IDENTITY</b></div><i></i>
      <div><span>02</span><b>MONITORING</b></div><i></i>
      <div><span>03</span><b>VULNERABILITY MGMT</b></div><i></i>
      <div><span>04</span><b>DATA PROTECTION</b></div><i></i>
      <div><span>05</span><b>ENDPOINT CONTROL</b></div>
    </div>
    <div class="big-rule">DEFENSE-IN-DEPTH<br><strong>MAKE EACH STEP HARDER.</strong></div>
  </div>
</section>
`;