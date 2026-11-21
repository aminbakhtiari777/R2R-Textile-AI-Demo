/* R2R — Roll-to-Run · NCTAF4 talk front end. Fully offline; no network calls. */
(function(){
'use strict';
const S = { lang: 'fa', mode: 'slides', slide: 0 };
try { const sl = localStorage.getItem('r2r_lang'); if (sl === 'en' || sl === 'fa') S.lang = sl; } catch(e) {}
const $ = (q, el) => (el || document).querySelector(q);
const L = (fa, en) => S.lang === 'fa' ? fa : en;
const tx = o => o == null ? '' : (typeof o === 'string' ? o : (o[S.lang] != null ? o[S.lang] : o.en));
const FD = '۰۱۲۳۴۵۶۷۸۹';
const N = v => S.lang === 'fa' ? String(v).replace(/[0-9]/g, d => FD[d]).replace(/\./g, '٫') : String(v);
const fmt = (v, d=1) => N((Math.round(v*Math.pow(10,d))/Math.pow(10,d)).toFixed(d));

/* ---------------- AGENTS ---------------- */
const AG = [
 { id:'A1', ic:'🔬', n:{fa:'شناخت پارچه',en:'Fabric perception'},
   role:{fa:'تصویر ماکرو، برگه‌ی مشخصات و تست‌های ساده‌ی کارگاهی را ترکیب می‌کند و برای هر ویژگی پارچه یک مقدار + سطح اطمینان (T1–T4) می‌دهد. هر جا لازم باشد می‌گوید «تست آزمایشگاه لازم است».',en:'Fuses macro images, spec sheets and simple shop tests into attribute estimates, each with a confidence tier (T1–T4) and a "requires lab test" escalation.'},
   chips:['Vision LLM','JSON Schema','RAG · ISO/AATCC/ASTM','Confidence tiers'] },
 { id:'A2', ic:'📈', n:{fa:'بازار و ترند ایران',en:'Iran market & trend'},
   role:{fa:'سیگنال‌های فارسی بازارهای آنلاین، شبکه‌های اجتماعی و تاریخچه‌ی فروش خود شرکت را تحلیل می‌کند: جهت تقاضا، بازه‌ی قیمت و سبک‌های مرتبط.',en:'Analyses Persian-language signals from marketplaces, social commerce and the firm\'s own sales history: demand direction, price bands, relevant styles.'},
   chips:['Persian NLP','Web signals','Trend KB','Sales history'] },
 { id:'A3', ic:'🎨', n:{fa:'طراحی مولد',en:'Generative design'},
   role:{fa:'طرح تکرارشونده‌ی بدون درز (Straight / Half-drop)، رنگ‌بندی، کاهش رنگ، اسکچ لباس و رندر روی مدل؛ همه زیر محدودیت‌های شناسنامه‌ی پارچه.',en:'Seamless repeats (straight / half-drop), colourways, colour reduction, garment sketches and on-model renders — all constrained by the fabric passport.'},
   chips:['Image generation','Reference conditioning','Seamless repeat','Colour reduction'] },
 { id:'A4', ic:'📐', n:{fa:'تک‌پک و مارکر',en:'Tech pack & marker'},
   role:{fa:'پیش‌نویس تک‌پک (اندازه‌ها، دوخت، نگهداری)، برآورد مصرف پارچه و ملاحظات مارکر: جهت برش، تطبیق طرح، جبران آبرفتگی.',en:'Drafts the tech pack (measurements, construction, care), estimates consumption and marker considerations: lay direction, pattern matching, shrinkage compensation.'},
   chips:['Rule engine','Marker heuristics','Consumption model','DXF'] },
 { id:'A5', ic:'⚖️', n:{fa:'تصمیم تولید',en:'Production decision'},
   role:{fa:'امکان‌سنجی فنی + شواهد بازار + اقتصاد موجودی را ترکیب می‌کند: «تولید کن»، «تولید محدود آزمایشی» یا «تولید نکن» — با تعداد به تفکیک سایز زیر محدودیت رول.',en:'Combines technical feasibility, market evidence and inventory economics: produce, limited test batch, or do not produce — with size-level quantities under the roll constraint.'},
   chips:['Constraint optimisation','Do-not-produce list','Size curve'] },
 { id:'A6', ic:'✍️', n:{fa:'محتوای فارسی',en:'Persian content'},
   role:{fa:'نام محصول، توضیح، کپشن و پست فارسی. سطح اطمینان شناسنامه را به ارث می‌برد؛ پس ادعای تأییدنشده (مثلاً جنس) در تبلیغ نمی‌آید.',en:'Persian product names, descriptions, captions and posts. Inherits passport tiers, so unverified claims (e.g. fibre) never reach marketing.'},
   chips:['Persian LLM','Brand voice','Claim filter'] },
 { id:'A7', ic:'🏭', n:{fa:'تحویل به ماشین',en:'Machine handoff'},
   role:{fa:'تا لبه‌ی ماشین: TIFF ← RIP چاپ دیجیتال (Mimaki TxLink, Epson Edge Print, Kornit)، تصویر ایندکس ← ArahWeave/EAT/NedGraphics ← Stäubli/Bonas، و DXF-AAMA برای CLO/Lectra/Gerber.',en:'To the machine\'s edge: TIFF → print RIP (Mimaki TxLink, Epson Edge Print, Kornit), indexed image → ArahWeave/EAT/NedGraphics → Stäubli/Bonas, DXF-AAMA for CLO/Lectra/Gerber.'},
   chips:['TIFF · ICC','Indexed colour','DXF-AAMA/ASTM','Handoff contracts'] },
 { id:'A8', ic:'👁️', n:{fa:'کنترل کیفیت بصری',en:'Vision QC'},
   role:{fa:'عامل توسعه‌ای: اختلاف رنگ استرایک‌آف (ΔE₀₀)، تشخیص عیب رول، تفکیک شید-باند، کج‌شدگی و بارِه.',en:'Extension agent: strike-off colour difference (ΔE₀₀), roll defect detection, shade banding, spirality and barré.'},
   chips:['Computer vision','CIEDE2000','ASTM D5430'] }
];
const GATES = [
 { id:'G1', n:{fa:'شناسنامه‌ی پارچه تأیید شد',en:'Fabric passport verified'}, own:{fa:'مهندس پارچه / کیفیت',en:'Fabric / quality engineer'}, d:{fa:'وقتی همه‌ی ویژگی‌های حیاتی به سطح لازم برسند، یا مسئول ریسک را صریحاً بپذیرد.',en:'Closes when decision-critical attributes reach their required tier, or the engineer explicitly accepts the risk.'} },
 { id:'G2', n:{fa:'طرح و فیت تأیید شد',en:'Design & fit approved'}, own:{fa:'طراح + الگوساز',en:'Designer + pattern maker'}, d:{fa:'سهم خلاقانه‌ی انسان ثبت می‌شود؛ طرح‌های ناسازگار با پارچه بیرون می‌روند.',en:'Human creative contribution is recorded; fabric-incompatible designs are removed.'} },
 { id:'G3', n:{fa:'برنامه‌ی تولید تأیید شد',en:'Production plan approved'}, own:{fa:'مدیر تولید',en:'Production manager'}, d:{fa:'تعداد، سایزبندی و فهرست «تولید نکن».',en:'Quantities, size curve and the do-not-produce list.'} },
 { id:'G4', n:{fa:'فایل ماشین آزاد شد',en:'Machine files released'}, own:{fa:'تکنسین ماشین',en:'Machine technician'}, d:{fa:'پس از استرایک‌آف؛ هیچ فایلی خودکار به ماشین فرستاده نمی‌شود.',en:'After strike-off; no file is ever auto-sent to a machine.'} }
];

/* ---------------- SLIDES (part 1) ---------------- */
const head = (k, t) => `<div class="kicker">${k}</div><h1 class="t">${t}</h1>`;
const SL = [];
SL.push(() => `<div class="slide hero">
  <div class="kicker">NCTAF4 · ${L('محور ۴: هوش مصنوعی، تحول دیجیتال و فناوری‌های آینده','Track 4: AI, Digital Transformation & Future Technologies')}</div>
  <div class="big gt">R2R</div>
  <div class="sub">${L('از رول پارچه تا تصمیم تولید','From Fabric Roll to Production Decision')}</div>
  <div class="lead">${L('یک سیستم هوش مصنوعی چندعاملیِ آگاه به پارچه برای طراحی، تولید و فروش در زنجیره‌ی نساجی و پوشاک ایران','A fabric-aware multi-agent AI framework for design, production and commercialisation in the Iranian textile & apparel value chain')}</div>
  <div class="flowline"><span class="s">📷 ${L('یک عکس رول','One roll photo')}</span><span class="ar">→</span><span class="s">🧠 ${L('۸ ایجنت','8 agents')}</span><span class="ar">→</span><span class="s">🛡️ ${L('۴ تأیید انسانی','4 human gates')}</span><span class="ar">→</span><span class="s">🏭 ${L('فایل آماده‌ی ماشین','Machine-ready files')}</span></div>
  <div class="meta"><span class="pill">👤 ${L('امین بختیاری — مهندس هوش مصنوعی، بنیان‌گذار زمیث','Amin Bakhtiari — AI Engineer, Founder of Zamith')}</span><span class="pill">🎓 ${L('دانشگاه آزاد اسلامی قائم‌شهر','Islamic Azad University, Qaemshahr')}</span><span class="pill">📅 ${L('۱۸ آذر ۱۴۰۵','9 Dec 2026')}</span></div>
</div>`);
SL.push(() => `<div class="slide">${head(L('مسئله','The problem'), L('پارچه در انبار، تصمیم در حدس', 'Fabric in stock, decisions by guesswork'))}
  <div class="grid g3" style="margin-bottom:30px">
    <div class="card"><h3><span class="ic">📦</span>${L('رول بلاتکلیف','Orphan rolls')}</h3><p>${L('رول‌های پارچه با مشخصات ناقص و منشأ مختلف؛ کسی دقیق نمی‌داند با آن چه بسازد.','Rolls of mixed provenance with incomplete specs; nobody knows exactly what to make from them.')}</p></div>
    <div class="card"><h3><span class="ic">⏳</span>${L('چرخه‌ی کند','Slow cycle')}</h3><p>${L('از ایده تا نمونه و عکس و پست، هفته‌ها طول می‌کشد؛ بازار منتظر نمی‌ماند.','Idea → sample → photo → post takes weeks; the market does not wait.')}</p></div>
    <div class="card"><h3><span class="ic">🔗</span>${L('گسست داده','Broken data chain')}</h3><p>${L('ویژگی‌های پارچه، سیگنال بازار و فایل ماشین در سه جزیره‌ی جدا هستند؛ نتیجه: تولید اشتباه و ضایعات.','Fabric properties, market signals and machine files live in separate silos → wrong production and waste.')}</p></div>
  </div>
  <div class="grid g3">
    <div class="card glow"><div class="stat gt ltr">92%</div><p>${L('سازمان‌ها قصد افزایش سرمایه‌گذاری در هوش مصنوعی مولد دارند — اما فقط ۱٪ پیاده‌سازی خود را «بالغ» می‌دانند.','plan to increase GenAI investment — yet only 1% call their deployments mature.')}</p><div class="src">BoF–McKinsey, State of Fashion 2026</div></div>
    <div class="card glow"><div class="stat gt ltr">90%</div><p>${L('کاهش هزینه‌ی تولید تصاویر کمپین در Zalando با هوش مصنوعی مولد؛ از ۶–۸ هفته به ۳–۴ روز.','lower campaign-image cost at Zalando with GenAI; from 6–8 weeks to 3–4 days.')}</p><div class="src">Reuters, May 2025</div></div>
    <div class="card glow"><div class="stat gt ltr">$1T</div><p>${L('درآمد خرده‌فروشی B2C آمریکا که تا ۲۰۳۰ می‌تواند توسط «تجارت ایجنتی» هدایت شود.','of US B2C retail revenue that agentic commerce could orchestrate by 2030.')}</p><div class="src">McKinsey, 2025</div></div>
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('ایده','The idea'), L('<span class="gt">Roll in → Run out</span>: یک عکس، هفت خروجی', '<span class="gt">Roll in → Run out</span>: one photo, seven outputs'))}
  <p class="lead" style="margin-bottom:34px">${L('سیستمی که پارچه را «می‌فهمد» و از همان ویژگی‌ها، محدودیت می‌سازد برای طراحی، برش و تعداد تولید — حتی می‌گوید <b style="color:var(--red)">چه چیزی تولید نشود</b>.','A system that understands the fabric and turns its properties into constraints for design, cutting and quantities — it even says <b style="color:var(--red)">what not to produce</b>.')}</p>
  <div class="grid" style="grid-template-columns:repeat(7,1fr);gap:18px">
  ${[['🪪',L('شناسنامه‌ی دیجیتال پارچه','Fabric Digital Passport')],['📈',L('تحلیل بازار ایران','Iran market brief')],['🎨',L('۳ پیشنهاد طرح + رندر','3 proposals + renders')],['📐',L('تک‌پک و مصرف','Tech pack & consumption')],['⚖️',L('تعداد + «تولید نکن»','Quantities + do-not-produce')],['🏭',L('فایل آماده‌ی ماشین','Machine-ready file')],['📱',L('پست اینستاگرام فارسی','Persian Instagram post')]].map((x,i)=>`<div class="card" style="text-align:center;padding:30px 16px"><div style="font-size:52px">${x[0]}</div><div style="font-size:15px;color:var(--cy);margin:10px 0 4px;font-weight:800">${N('0'+(i+1))}</div><div style="font-size:21px;font-weight:700;line-height:1.5">${x[1]}</div></div>`).join('')}
  </div>
  <div class="grid g3" style="margin-top:34px">
   <div class="card"><h3>🎯 ${L('اصل ۱: ادعای منضبط','P1: Claim discipline')}</h3><p>${L('هر ویژگی منبع و سطح اطمینان دارد.','Every attribute carries its evidence and tier.')}</p></div>
   <div class="card"><h3>🔗 ${L('اصل ۲: انتشار محدودیت','P2: Constraint propagation')}</h3><p>${L('ویژگی پارچه ← قید طراحی، مارکر و تعداد.','Fabric property → design, marker & quantity constraint.')}</p></div>
   <div class="card"><h3>🛡️ ${L('اصل ۳: اختیار انسان','P3: Human authority')}</h3><p>${L('هوش مصنوعی پیشنهاد می‌دهد، انسان تصمیم می‌گیرد.','AI proposes, people decide.')}</p></div>
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('معماری','Architecture'), L('هسته‌ی مرکزی + ۸ ایجنت + ۴ دروازه‌ی انسانی','Central core + 8 agents + 4 human gates'))}
  <div class="arch"><div id="archsvg">${archSVG()}</div><div class="detail" id="archdet"></div></div></div>`);
SL.push(() => `<div class="slide">${head(L('نوآوری ۱ و ۲','Contributions C1–C2'), L('شناسنامه‌ی دیجیتال پارچه و سطح اطمینان','Fabric Digital Passport & confidence tiers'))}
  <p class="lead" style="margin-bottom:30px">${L('ایجنت بی‌صدا حدس نمی‌زند؛ <b style="color:var(--tx)">سطح اطمینان می‌دهد</b> و هر جا لازم باشد می‌گوید برو آزمایشگاه.','The agent never guesses silently; it <b style="color:var(--tx)">states its confidence</b> and escalates to the lab when needed.')}</p>
  <div class="tierrow">
   <div class="tier"><div class="lv" style="color:#fda4af">T1</div><h4>${L('نشانگر','Indicative')}</h4><p>${L('فقط برآورد بصری از تصویر.','Visual estimate only.')}</p></div>
   <div class="tier"><div class="lv" style="color:#fcd34d">T2</div><h4>${L('اعلامی','Declared')}</h4><p>${L('برگه‌ی مشخصات تأمین‌کننده یا خریدار.','Supplier or buyer specification.')}</p></div>
   <div class="tier"><div class="lv" style="color:#67e8f9">T3</div><h4>${L('غربال‌شده','Screened')}</h4><p>${L('تست ساده‌ی کارگاهی انجام و ثبت شده (سوزاندن، کشش، شست‌وشو).','Simple shop test performed & recorded (burn, stretch, wash).')}</p></div>
   <div class="tier"><div class="lv" style="color:#6ee7b7">T4</div><h4>${L('تأییدشده','Verified')}</h4><p>${L('گزارش آزمایشگاه با روش استاندارد.','Laboratory report with a standard method.')}</p></div>
  </div>
  <div class="esc"><div class="ic">🧪</div><div><b>${L('قانون ارجاع: «تست آزمایشگاه لازم است»','Escalation rule: "requires lab test"')}</b><br><span>${L('اگر تصمیمی به ویژگیِ تأییدنشده وابسته باشد، سیستم متوقف می‌شود و روش استاندارد را پیشنهاد می‌کند:','If a decision depends on an unverified attribute, R2R stops and names the standard method:')}<br><span class="mono" style="display:inline-block;margin-top:8px;color:#c4b5fd">ISO 1833 · AATCC TM20 · ISO 5077/6330 · ISO 105-C06 · ASTM D2594 · ISO 12945</span></span></div></div>
  <div class="note">${L('تشخیص جنس الیاف از روی عکس ذاتاً نامطمئن است؛ R2R آن را حداکثر T1 می‌داند — این یک انتخاب طراحی است، نه ضعف.','Fibre identification from a photo is inherently uncertain; R2R treats it as T1 at most — a design choice, not a weakness.')}</div></div>`);
SL.push(() => `<div class="slide">${head(L('اختیار انسان','Human authority'), L('چهار دروازه‌ی تأیید انسانی — غیرقابل دور زدن','Four human approval gates — cannot be bypassed'))}
  <div class="gates">${GATES.map(g=>`<div class="gatec"><div class="g">${g.id}</div><h4>${tx(g.n)}</h4><p>${tx(g.d)}</p><div class="own">👤 ${tx(g.own)}</div></div>`).join('')}</div>
  <div class="card" style="margin-top:30px"><div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;font-size:22px;direction:${S.lang==='fa'?'rtl':'ltr'};justify-content:center">
   ${['A1','G1','A2','A3','G2','A4','A5','G3','A7','A6','A8','G4'].map(x=>`<span class="tag ltr" style="height:44px;font-size:19px;${x[0]==='G'?'color:var(--gold);border-color:rgba(245,196,107,.6)':''}">${x}</span>`).join(`<span style="color:var(--dim)">${S.lang==='fa'?'←':'→'}</span>`)}
  </div></div>
  <div class="note">${L('هر تصمیم در لاگ ممیزی ثبت می‌شود: چه کسی، چه زمانی، بر اساس کدام شواهد.','Every decision is written to an audit log: who, when, on what evidence.')}</div></div>`);
SL.push(() => `<div class="slide">${head(L('نوآوری ۵','Contribution C5'), L('تا لبه‌ی ماشین: قراردادهای تحویل قابل‌راستی‌آزمایی','To the machine\'s edge: verifiable handoff contracts'))}
  <div class="card" style="padding:10px 18px"><table class="tb"><thead><tr><th>${L('فرایند','Process')}</th><th>${L('سیستم‌ها','Systems')}</th><th>${L('خروجی R2R','R2R deliverable')}</th><th>${L('کنترل‌های A7','A7 checks')}</th></tr></thead><tbody>
   <tr><td><b>🖨️ ${L('چاپ دیجیتال','Digital printing')}</b></td><td class="mono">Mimaki TxLink · Epson Edge Print · Kornit hot folder</td><td>${L('TIFF آماده‌ی چاپ + پروفایل ICC','Print-ready TIFF + ICC')}</td><td>${L('تکرار بی‌درز، عرض مفید، پیش‌جبران آبرفتگی، رنگ‌های کتابخانه','Seamless repeat, usable width, shrinkage pre-scale, library colours')}</td></tr>
   <tr><td><b>🧵 ${L('بافت ژاکارد','Jacquard weaving')}</b></td><td class="mono">ArahWeave · EAT DesignScope · NedGraphics → Stäubli JC5/JC6/JC7 · Bonas</td><td>${L('تصویر ایندکس؛ تعداد رنگ = تعداد بافت','Indexed image; palette = weave count')}</td><td>${L('شبکه = تار × پود، حد رنگ، هشدار پیکسل منفرد و فلوت بلند','Grid = ends × picks, palette limit, isolated-pixel & long-float warnings')}</td></tr>
   <tr><td><b>✂️ ${L('الگو و برش','Pattern & cutting')}</b></td><td class="mono">CLO 3D · Lectra · Gerber</td><td class="mono">DXF-AAMA / ASTM D6673</td><td>${L('سایزبندی، Grainline، Notch، جهت برش','Grading, grainline, notches, lay direction')}</td></tr>
   <tr><td><b>🧶 ${L('بافت تخت (افق آینده)','Flat knitting (horizon)')}</b></td><td class="mono">Stoll · Shima Seiki</td><td>${L('فایل طراحی بافت','Knit design file')}</td><td>${L('در نقشه‌ی راه','On the roadmap')}</td></tr>
  </tbody></table></div>
  <div class="esc" style="border-color:rgba(245,196,107,.5);background:linear-gradient(90deg,rgba(245,196,107,.12),transparent)"><div class="ic">🛑</div><div><b>${L('بدون ارسال خودکار به ماشین','No auto-send to machines')}</b><br><span>${L('R2R فایل تحویل می‌دهد و اعتبارسنجی می‌کند؛ اجرای ماشین همیشه با تکنسین است (G4).','R2R delivers and validates files; running the machine always stays with the technician (G4).')}</span></div></div></div>`);
/* ---------------- SLIDES (part 2) ---------------- */
const cards = (arr, icStyle) => arr.map(c=>`<div class="card"><h3><span class="ic"${icStyle?` style="${icStyle}"`:''}>${c[0]}</span>${c[1]}</h3><p>${c[2]}</p></div>`).join('');
SL.push(() => `<div class="slide">${head(L('نوآوری ۴','Contribution C4'), L('یک سیستم، سه بخش صنعت','One framework, three industry segments'))}
  <div class="grid g3" style="flex:1">
   ${[[ '🧵', L('تولیدکنندگان پارچه‌ی خام','Greige producers'), L('بافندگی تاری‌پودی و حلقوی','Weaving & knitting'), ['A2','A3','A7','A1'], L(['مجموعه‌ی پارچه‌ی خام و ژاکارد بر اساس بازار','طرح ژاکارد با رنگ کاهش‌یافته و تصویر ایندکس','برگه‌ی مشخصات برای خریدار'],['Market-informed greige & jacquard assortments','Colour-reduced indexed jacquard designs','Buyer specification sheets'])],
      [ '🎨', L('رنگرزی، چاپ و تکمیل','Dyeing, printing & finishing'), L('واحدهای تکمیل','Finishing mills'), ['A1','A3','A4','A7','A8'], L(['رنگ‌بندی و طرح تکرارشونده','فایل چاپ با جبران آبرفتگی','ثبت ΔE استرایک‌آف'],['Colourways & seamless repeats','Shrinkage-compensated print files','Strike-off ΔE records'])],
      [ '👗', L('تولیدکنندگان پوشاک و برندها','Apparel makers & brands'), L('تولیدی‌ها و برندها','Manufacturers & brands'), ['A1–A8'], L(['پیشنهاد کالکشن + تک‌پک','تعداد + فهرست «تولید نکن»','محتوای فارسی + الگوی DXF'],['Collection proposals + tech packs','Quantities + do-not-produce list','Persian content + DXF patterns'])]
     ].map(c=>`<div class="card glow" style="display:flex;flex-direction:column"><div style="font-size:64px">${c[0]}</div><h3 style="margin-top:14px">${c[1]}</h3><p style="margin-bottom:14px">${c[2]}</p><div class="chips" style="margin:0 0 18px">${c[3].map(a=>`<span class="tag ltr">${a}</span>`).join('')}</div><ul>${c[4].map(li=>`<li>${li}</li>`).join('')}</ul></div>`).join('')}
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('پشته‌ی فنی','Tech stack'), L('چطور ساخته می‌شود','How it is built'))}
  <div class="grid g4" style="margin-bottom:26px">
   ${[['🐍','Python · FastAPI',L('سرویس‌ها و API داخلی','Services & internal API')],['🕸️',L('ارکستراسیون گرافی','Graph orchestration'),L('سبک LangGraph: گره = ایجنت، یال = قرارداد','LangGraph-style: node = agent, edge = contract')],['👁️','Vision LLM',L('خواندن تصویر پارچه و برچسب','Reads fabric images & labels')],['🖼️',L('تولید تصویر','Image generation'),L('طرح، اسکچ و رندر با تصویر مرجع','Repeats, sketches, renders with references')],['📚','RAG · Vector DB',L('استانداردهای ISO/AATCC/ASTM + دانش‌نامه','ISO/AATCC/ASTM + knowledge base')],['🧾','JSON Schema',L('قرارداد داده‌ی سخت بین ایجنت‌ها','Strict data contracts between agents')],['🗄️',L('حافظه + لاگ ممیزی','Memory + audit log'),L('شناسنامه‌ی پارچه و تاریخچه‌ی تصمیم','Passport & decision history')],['🧩',L('خروجی فایل','File writers'),'TIFF · Indexed PNG · DXF-AAMA']].map(c=>`<div class="card"><h3><span class="ic">${c[0]}</span><span>${c[1]}</span></h3><p>${c[2]}</p></div>`).join('')}
  </div>
  <div class="grid g2">
   <div class="card glow"><h3>🎤 ${L('این دمو امروز','Today\'s demo')}</h3><p>${L('این وب‌اپ یک <b style="color:var(--tx)">فرانت‌اند حرفه‌ای و کاملاً آفلاین</b> است. هوش زنده، دستیار هوش مصنوعی پشت صحنه است؛ هیچ سروری لازم نیست و هیچ داده‌ای از این صفحه بیرون نمی‌رود.','This web app is a <b style="color:var(--tx)">polished, fully offline front end</b>. The live intelligence is the AI assistant behind the scenes; no server is needed and no data leaves this page.')}</p></div>
   <div class="card"><h3>🏢 ${L('استقرار صنعتی','Industrial deployment')}</h3><p>${L('روی سرور داخلی کارخانه (On-prem)، مدل‌ها قابل‌تعویض، داده‌ی تولید داخل شبکه‌ی کارخانه.','On-prem at the factory, swappable models, production data stays inside the plant network.')}</p></div>
  </div>
  <div class="note">${L('جزئیات پیاده‌سازی (پرامپت‌ها، مدل‌ها، داده‌ها و وزن‌ها) به‌عنوان دارایی فکری منتشر نمی‌شوند.','Implementation details (prompts, models, datasets, weights) are withheld as intellectual property.')}</div></div>`);
SL.push(() => `<div class="slide">${head(L('قابلیت اطمینان','Reliability'), L('اهداف خطا — و روش سنجش آن','Error targets — and how we would measure them'))}
  <div style="display:flex;gap:14px;margin-bottom:20px"><span class="illu">⚠️ ${L('این‌ها «هدف و برآورد» هستند، نه نتیجه‌ی اندازه‌گیری‌شده','These are TARGETS / ESTIMATES, not measured results')}</span></div>
  <div class="card" style="padding:8px 18px"><table class="tb"><thead><tr><th>${L('وظیفه','Task')}</th><th>${L('هدف','Target')}</th><th></th><th>${L('رفتار سیستم','System behaviour')}</th></tr></thead><tbody>
  ${[[L('تشخیص ساختار (تاری‌پودی / حلقوی / سرژه)','Construction (woven / knit / twill)'),'≥ 90%',90,L('T1؛ با تصویر ماکرو','T1; macro image')],
     [L('جنس الیاف از روی عکس','Fibre type from photo'),L('ذاتاً نامطمئن','Inherently uncertain'),35,L('همیشه ← «تست آزمایشگاه لازم است»','Always → "requires lab test"')],
     [L('خطای برآورد مصرف پارچه','Consumption estimate error'),'≤ ±5%',85,L('در برابر مارکر واقعی CAD','vs. real CAD marker')],
     [L('بازخوانی ارجاع (Escalation recall)','Escalation recall'),'≥ 95%',95,L('خطاهای حیاتی پیش از G1 علامت بخورند','Critical errors flagged before G1')],
     [L('اعتبار فایل ماشین','Machine-file validity'),'100%',100,L('قرارداد تحویل؛ فایل نامعتبر آزاد نمی‌شود','Contract check; invalid files never released')],
     [L('پذیرش طرح در G2 بدون اصلاح اساسی','Design acceptance at G2'),'≥ 60%',60,L('بازبینی طراح و الگوساز','Designer & pattern-maker review')]
    ].map(r=>`<tr><td>${r[0]}</td><td><b class="ltr">${r[1]}</b></td><td style="width:220px;padding-top:24px"><div class="bar"><i style="width:${r[2]}%"></i></div></td><td>${r[3]}</td></tr>`).join('')}
  </tbody></table></div>
  <div class="grid g3" style="margin-top:22px">
   <div class="card"><h3>🧪 ${L('مرجع: آزمایشگاه','Ground truth: lab')}</h3><p>${L('مقایسه‌ی شناسنامه با گزارش آزمایشگاه، به تفکیک سطح اطمینان (کالیبراسیون).','Passport vs. lab reports per tier (calibration).')}</p></div>
   <div class="card"><h3>👥 ${L('پنل خبرگان','Expert panel')}</h3><p>${L('توافق تصمیم A5 با پنل مستقل تولید.','A5 decisions vs. an independent production panel.')}</p></div>
   <div class="card"><h3>📋 ${L('پروتکل از پیش ثبت‌شده','Pre-registered protocol')}</h3><p>${L('معیارها پیش از آزمون اعلام می‌شوند؛ ابطال‌پذیر (C6).','Metrics fixed before testing; falsifiable (C6).')}</p></div>
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('چالش‌های فنی','Technical challenges'), L('سخت‌ترین بخش‌ها — و پاسخ ما','The hard parts — and our answers'))}
  <div class="grid g3" style="flex:1">${cards([
     ['📷',L('نور، زاویه و رنگ عکس','Lighting, angle & colour'),L('کارت رنگ مرجع در عکس، پروتکل عکاسی ماکرو، تصحیح رنگ پیش از تحلیل.','Reference colour card, macro photo protocol, colour correction before analysis.')],
     ['🧬',L('جنس الیاف دیده نمی‌شود','Fibre is not visible'),L('ترکیب شواهد: عکس + برگه + تست کارگاهی؛ و ارجاع به ISO 1833 / AATCC TM20.','Evidence fusion: photo + sheet + shop test; escalate to ISO 1833 / AATCC TM20.')],
     ['🌀',L('توهم مدل زبانی','LLM hallucination'),L('خروجی فقط در قالب JSON Schema، استناد به RAG، و رد خودکار ادعای بدون منبع.','Schema-only outputs, RAG citations, automatic rejection of unsourced claims.')],
     ['🔁',L('تکرار بی‌درز و ایندکس رنگ','Seamless repeat & indexing'),L('بررسی پیوستگی لبه‌ها، کاهش رنگ کنترل‌شده، هشدار فلوت بلند برای ژاکارد.','Edge-continuity checks, controlled colour reduction, long-float warnings for jacquard.')],
     ['🌐',L('اینترنت و تحریم','Connectivity & sanctions'),L('حالت آفلاین، اجرای محلی، مدل‌های قابل‌تعویض و میزبانی داخلی.','Offline mode, local execution, swappable models, domestic hosting.')],
     ['🗣️',L('زبان فارسی صنعت','Persian industry language'),L('واژه‌نامه‌ی نساجی فارسی–انگلیسی و اصطلاحات بازار (مانتو، شومیز، کرپ...).','Persian–English textile glossary and market terms (manto, shomiz, crepe…).')]])}
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('امنیت و مالکیت فکری','Security & IP'), L('اعتماد، طراحی می‌شود','Trust is designed in'))}
  <div class="grid g3" style="flex:1">${cards([
     ['🛡️',L('دروازه‌های تأیید انسانی','Human approval gates'),L('G1 تا G4؛ هیچ تصمیم حیاتی بدون امضای انسان.','G1–G4; no critical decision without a human sign-off.')],
     ['🛑',L('بدون ارسال خودکار به ماشین','No auto-send to machines'),L('فایل‌ها تحویل و اعتبارسنجی می‌شوند؛ اجرا با تکنسین.','Files are delivered and validated; execution stays with the technician.')],
     ['🏠',L('داده محلی می‌ماند','Data stays local'),L('استقرار On-prem؛ طرح‌ها و داده‌ی فروش از کارخانه خارج نمی‌شوند.','On-prem; designs and sales data never leave the plant.')],
     ['📜',L('لاگ ممیزی','Audit log'),L('ثبت کامل: ورودی، خروجی ایجنت، تأییدکننده و زمان.','Full trace: inputs, agent outputs, approver, timestamp.')],
     ['🧱',L('محافظ تزریق پرامپت','Prompt-injection guard'),L('متن داخل تصویر، فایل و وب «داده» است، نه دستور؛ ابزارها با کمترین دسترسی.','Text in images, files and web is data, not instructions; least-privilege tools.')],
     ['🔐',L('حفاظت از ایده','IP protection'),L('فقط چارچوب و معماری منتشر می‌شود؛ پرامپت، کد، داده و وزن‌ها محرمانه‌اند.','Only the framework and architecture are published; prompts, code, data and weights stay confidential.')]])}
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('نقشه‌ی راه','Roadmap'), L('سه افق','Three horizons'))}
  <div class="horizons" style="flex:1">
   <div class="card hz glow"><div class="yr">${L('افق ۱ · اکنون تا ۱ سال','H1 · now – 1 year')}</div><h3>${L('دستیار تصمیم','Decision copilot')}</h3><ul><li>${L('A1–A7 با تأیید انسانی','A1–A7 with human gates')}</li><li>${L('تحویل فایل TIFF و DXF','TIFF & DXF handoff')}</li><li>${L('پایلوت با یک تولیدی و یک واحد چاپ','Pilot: one apparel maker + one print mill')}</li><li>${L('اجرای پروتکل ارزیابی','Run the evaluation protocol')}</li></ul></div>
   <div class="card hz"><div class="yr">${L('افق ۲ · ۱ تا ۳ سال','H2 · 1 – 3 years')}</div><h3>${L('کارخانه‌ی متصل','Connected plant')}</h3><ul><li>${L('A8 روی خط تولید','A8 on the production line')}</li><li>${L('اتصال به ERP و انبار','ERP & inventory integration')}</li><li>${L('فایل ژاکارد و بافت تخت Stoll/Shima','Jacquard & Stoll/Shima knit files')}</li><li>${L('پرو مجازی سه‌بعدی (CLO)','3D virtual try-on (CLO)')}</li></ul></div>
   <div class="card hz"><div class="yr">${L('افق ۳ · ۳ تا ۵ سال','H3 · 3 – 5 years')}</div><h3>${L('دوقلوی دیجیتال','Digital twin')}</h3><ul><li>${L('اتصال ماشین با OPC UA','Machine connectivity via OPC UA')}</li><li>${L('یکپارچگی با MES','MES integration')}</li><li>${L('دوقلوی دیجیتال خط تولید','Production-line digital twin')}</li><li>${L('بهینه‌سازی حلقه‌بسته با تأیید انسانی','Closed-loop optimisation with human sign-off')}</li></ul></div>
  </div></div>`);
SL.push(() => `<div class="slide">${head(L('افق‌های آینده','Future horizons'), L('R2R تا کجا می‌تواند رشد کند؟','How far can R2R grow?'))}
  <div class="fut" style="flex:1">${cards([
     ['🔌',L('اتصال مستقیم ماشین','Direct machine integration'),L('OPC UA برای خواندن وضعیت ماشین و ارسال کنترل‌شده‌ی کار.','OPC UA for machine state and controlled job dispatch.')],
     ['🏭',L('یکپارچگی MES','MES integration'),L('برنامه‌ریزی تولید، ردیابی سفارش و ظرفیت.','Production scheduling, order tracking, capacity.')],
     ['🪞',L('دوقلوی دیجیتال','Digital twin'),L('شبیه‌سازی خط پیش از برش و چاپ واقعی.','Simulate the line before real cutting & printing.')],
     ['🧍',L('پرو مجازی و سه‌بعدی','Virtual try-on & 3D'),L('CLO 3D با پارامترهای فیزیکی واقعی پارچه از شناسنامه.','CLO 3D driven by real fabric physics from the passport.')],
     ['👁️',L('کنترل کیفیت روی خط','Inline vision QC'),L('دوربین روی ماشین تکمیل و میز بازرسی؛ گزارش لحظه‌ای عیب.','Cameras on finishing & inspection tables; live defect reports.')],
     ['📊',L('پیش‌بینی تقاضا و زنجیره‌ی تأمین','Demand & supply forecasting'),L('خرید نخ و پارچه بر اساس پیش‌بینی، نه حدس.','Buy yarn and fabric on forecasts, not guesses.')],
     ['🛒',L('بازار B2B پارچه','B2B fabric marketplace'),L('هر رول با شناسنامه‌ی دیجیتالش قابل خرید و فروش.','Every roll tradable with its digital passport.')],
     ['🕸️',L('شبکه‌ی چندکارخانه‌ای','Multi-factory network'),L('توزیع سفارش بین کارخانه‌ها بر اساس ظرفیت و توانایی.','Route orders across factories by capacity & capability.')],
     ['🇮🇷',L('LLM فارسی داخلی','On-prem Persian LLM'),L('مدل فارسی بومی روی سرور کارخانه؛ استقلال کامل.','A domestic Persian model on factory servers; full independence.')]],'width:44px;height:44px;font-size:22px')}
  </div></div>`);
SL.push(() => `<div class="slide hero" style="align-items:center;text-align:center">
  <div class="kicker" style="justify-content:center">${L('دموی زنده','Live demo')}</div>
  <div class="big gt" style="font-size:150px">${L('اجرا','RUN')}</div>
  <div class="sub">${L('یک رول پارچه — چند دقیقه — تصمیم تولید','One roll — a few minutes — a production decision')}</div>
  <p class="lead" style="margin:0 auto 40px">${L('یک داستان پیوسته: از نبض بازار در کارخانه تا پست اینستاگرام در تولیدی — یا نُه پارچه‌ی نمونه، سه کارخانه، یا عکس پارچه‌ی خود شما.','One continuous story: from the market pulse at the mill to the Instagram post at the apparel maker — or nine sample fabrics, three mills, or a photo of your own fabric.')}</p>
  <div class="runbtns"><button class="approve chainbtn" data-act="chain" style="height:84px;font-size:30px;padding:0 46px">⛓️ ${L('زنجیره‌ی کامل: کارخانه ← پوشاک','Full chain: mill → apparel')}</button><button class="approve" data-act="demo" style="height:76px;font-size:26px;padding:0 36px;margin-inline-start:22px">👕 ${L('حالت پوشاک','Apparel mode')}</button><button class="approve millbtn" data-act="mill" style="height:76px;font-size:26px;padding:0 36px;margin-inline-start:22px">🏭 ${L('حالت کارخانه نساجی','Mill mode')}</button></div>
  <div class="note" style="margin-top:40px">${L('Enter یا C = زنجیره‌ی کامل · A = پوشاک · M = کارخانه','Enter or C = Full chain · A = Apparel · M = Mill')}</div></div>`);
SL.push(() => `<div class="slide hero" style="align-items:center;text-align:center">
  <div class="big gt" style="font-size:130px">${L('پرسش؟','Questions?')}</div>
  <div class="sub">${L('سؤال فنی‌تان را بپرسید — ایجنت پاسخ می‌دهد.','Ask your technical question — the agent answers.')}</div>
  <p class="lead" style="margin:0 auto">${L('از جنس و کشسانی تا آبرفتگی، ثبات رنگ، مارکر و فایل ماشین.','From fibre and stretch to shrinkage, colour fastness, markers and machine files.')}</p>
  <div class="meta" style="justify-content:center"><span class="pill">👤 ${L('امین بختیاری','Amin Bakhtiari')}</span><span class="pill">✉️ <span class="ltr">Dadardey779@gmail.com</span></span><span class="pill">R2R · Roll-to-Run</span></div></div>`);
/* ---------------- ARCHITECTURE DIAGRAM ---------------- */
function archSVG(){
  const cx=560, cy=420, R=320, out=[];
  const pos = AG.map((a,i)=>{const ang=-Math.PI/2+i*2*Math.PI/8;return {x:cx+R*Math.cos(ang),y:cy+R*Math.sin(ang)};});
  out.push(`<svg viewBox="0 0 1120 840" xmlns="http://www.w3.org/2000/svg"><defs>
   <linearGradient id="lg" x1="0" x2="1"><stop offset="0" stop-color="#a78bfa"/><stop offset=".5" stop-color="#22d3ee"/><stop offset="1" stop-color="#f5c46b"/></linearGradient>
   <radialGradient id="cg"><stop offset="0" stop-color="#3b1d8f"/><stop offset="1" stop-color="#0b0d17"/></radialGradient>
   <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`);
  out.push(`<circle class="ring" cx="${cx}" cy="${cy}" r="${R}"/><circle class="ringflow" cx="${cx}" cy="${cy}" r="${R}"/>`);
  pos.forEach(p=>{out.push(`<line class="link" x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}"/><line class="flow" x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}"/>`);});
  out.push(`<circle class="core-pulse" cx="${cx}" cy="${cy}" r="178" fill="none" stroke="#8b5cf6" stroke-width="2" opacity=".5"/>
   <circle cx="${cx}" cy="${cy}" r="160" fill="url(#cg)" stroke="url(#lg)" stroke-width="3" filter="url(#glow)"/>
   <text x="${cx}" y="${cy-62}" fill="#22d3ee" font-size="18" font-weight="800" text-anchor="middle" font-family="Vazirmatn">${L('هسته‌ی مرکزی','CENTRAL CORE')}</text>
   <text x="${cx}" y="${cy-18}" fill="#fff" font-size="38" font-weight="900" text-anchor="middle" font-family="Vazirmatn">Orchestrator</text>
   <text x="${cx}" y="${cy+22}" fill="#c4b5fd" font-size="17" text-anchor="middle" font-family="Vazirmatn">🧠 ${L('حافظه','Memory')} · 🪪 ${L('شناسنامه‌ی پارچه','Fabric Passport')}</text>
   <text x="${cx}" y="${cy+52}" fill="#c4b5fd" font-size="17" text-anchor="middle" font-family="Vazirmatn" direction="ltr">📚 RAG · ISO / AATCC / ASTM</text>
   <text x="${cx}" y="${cy+84}" fill="#9aa1b8" font-size="15" text-anchor="middle" font-family="Vazirmatn" direction="ltr">JSON Schema · Audit log</text>`);
  [[0,'G1'],[2,'G2'],[4,'G3'],[6,'G4']].forEach(([i,g])=>{const ang=-Math.PI/2+(i+.5)*2*Math.PI/8;const x=cx+232*Math.cos(ang),y=cy+232*Math.sin(ang);
    out.push(`<g class="gate" transform="translate(${x.toFixed(1)},${y.toFixed(1)})"><rect x="-22" y="-22" width="44" height="44" rx="8" transform="rotate(45)"/><text y="6" direction="ltr">${g}</text></g>`);});
  pos.forEach((p,i)=>{const a=AG[i];const ly=p.y>cy+40?100:(p.y<cy-40?-86:100);
    out.push(`<g class="node" data-ag="${i}" transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)})"><circle class="bgc" r="66"/><text y="-4" style="font-size:30px">${a.ic}</text><text class="id" y="32" style="font-size:22px" direction="ltr">${a.id}</text><text class="nm" y="${ly}">${tx(a.n)}</text></g>`);});
  out.push('</svg>');
  return out.join('');
}
let archI=0, archTimer=null, archHold=0;
function archShow(i){
  archI=i; document.querySelectorAll('.node').forEach(n=>n.classList.toggle('act', +n.dataset.ag===i));
  const a=AG[i], d=$('#archdet'); if(!d) return;
  d.innerHTML=`<div class="card glow" style="animation:rise .5s both"><div style="display:flex;align-items:center;gap:18px"><span style="font-size:60px">${a.ic}</span><div><div class="big-id gt ltr">${a.id}</div><h3 style="margin:0">${tx(a.n)}</h3></div></div><p style="margin-top:18px">${tx(a.role)}</p><div class="chips">${a.chips.map(c=>`<span class="tag ltr">${c}</span>`).join('')}</div></div>
   <div class="card" style="flex:none"><p style="font-size:18px">${L('روی هر ایجنت کلیک کنید. ایجنت‌ها فقط از طریق هسته و با قرارداد JSON با هم حرف می‌زنند؛ دروازه‌های <b style="color:var(--gold)">G1–G4</b> جریان را برای تأیید انسانی نگه می‌دارند.','Click any agent. Agents talk only through the core via JSON contracts; gates <b style="color:var(--gold)">G1–G4</b> hold the flow for human approval.')}</p></div>`;
}
function archStart(){ archStop(); archShow(archI); archTimer=setInterval(()=>{ if(Date.now()<archHold) return; archShow((archI+1)%8); }, 3200); }
function archStop(){ if(archTimer){clearInterval(archTimer);archTimer=null;} }

/* ---- added slides (mill mode): inserted without removing any existing slide ---- */
const S_NEED=() => `<div class="slide">${head(L('نیاز کارخانه‌ها','What mills need'), L('کارخانه‌ی نساجی چه می‌خواهد بداند؟','What does a textile mill need to know?'))}
  <div class="grid g4" style="margin-bottom:26px">
   ${[['📡',L('الان چه می‌فروشد؟','What sells right now?'),L('کدام طرح، رنگ، الیاف، گرماژ و عرض در بازار پوشاک و فروشگاه‌های آنلاین ایران رو به رشد است.','Which designs, colours, fibres, weights and widths are rising in Iran’s apparel market and online shops.')],
      ['⚖️',L('چه ببافیم، چه نبافیم؟','What to weave — and not?'),L('سبد محصول در برابر بازار و موجودی: بیشتر، کمتر یا توقف — پیش از آنکه رول راکد شود.','Portfolio vs market and stock: more, less or stop — before rolls go dead.')],
      ['🧊',L('انبار راکد','Dead stock'),L('رول‌های فروش‌نرفته را به تولیدی مناسب برسانیم، نه به حراج.','Route unsold rolls to the right apparel maker, not a fire sale.')],
      ['👁️',L('کیفیت و شید','Quality & shade'),L('عیب را پیش از خریدار پیدا کنیم و شید لات‌ها را یکدست نگه داریم.','Find defects before the buyer does and keep lot shades consistent.')]].map(c=>`<div class="card"><h3><span class="ic">${c[0]}</span><span>${c[1]}</span></h3><p>${c[2]}</p></div>`).join('')}
  </div>
  <div class="grid g3">
    <div class="card glow"><div class="stat gt ltr">~70%</div><p>${L('از عیب‌های پارچه با بازرسی چشمی پیدا می‌شود — حتی با بازرسان آموزش‌دیده.','of fabric defects are found by manual inspection — even with highly trained inspectors.')}</p><div class="src">Kumar &amp; Pang, IEEE Trans. SMC-B, 2002</div></div>
    <div class="card glow"><div class="stat gt ltr">45–65%</div><p>${L('قیمت پارچه‌ی درجه‌ی دو نسبت به درجه‌ی یک؛ هر عیب کشف‌نشده مستقیماً از سود کم می‌کند.','is the price of second-quality fabric vs first quality; every missed defect cuts margin.')}</p><div class="src">Chan &amp; Pang, 2000 · cited in Brenzovich, NCSU 2003</div></div>
    <div class="card glow"><div class="stat gt ltr">&lt;1%</div><p>${L('از مواد مصرفی پوشاک دوباره به پوشاک تبدیل می‌شود؛ تولید بیش از تقاضا یعنی ضایعه‌ی دائمی.','of clothing material is recycled into new clothing — overproduction is a permanent loss.')}</p><div class="src">Ellen MacArthur Foundation, A New Textiles Economy, 2017</div></div>
  </div>
  <p class="note" style="margin-top:18px">💬 ${L('از گفت‌وگو با مدیران کارخانه‌های نساجی: «می‌خواهیم بدانیم کدام طرح، جنس و الیاف الان فروش دارد.»','From conversations with textile mill managers: “We want to know which designs, materials and fibres are selling now.”')}</p></div>`;
const S_DDI=() => `<div class="slide">${head(L('پیوست · اختیاری — ماژول جدید','Appendix · optional — new module'), L('هوش تقاضا و طراحی برای کارخانه','Demand & Design Intelligence for mills'))}
  <div class="mflow">
   ${[['🛒',L('منابع','Sources'),L('فروشگاه‌های آنلاین، آگهی‌های بازار، سفارش عمده‌فروشان، فروش ERP کارخانه','Online shops, marketplace listings, wholesaler orders, the mill’s ERP sales')],
      ['📡',L('M1 نبض بازار','M1 Market Pulse'),L('طرح · رنگ · الیاف · گرماژ · عرض — هرکدام با روند و سطح اطمینان T1–T4','Design · colour · fibre · weight · width — each with a trend and a T1–T4 tier')],
      ['📦',L('M2 سبد و موجودی','M2 Portfolio & stock'),L('ماه‌های پوشش موجودی برای هر کالا','Months of stock cover per article')],
      ['⚖️',L('M3 تصمیم','M3 Decision'),L('بیشتر / کمتر / توقف + رنگ‌بندی مولد فصل بعد','MORE / REDUCE / STOP + generated next-season colourways')],
      ['🧊',L('M4 انبار راکد','M4 Dead stock'),L('تطبیق B2B رول‌های فروش‌نرفته با تولیدی‌ها','B2B matching of unsold rolls to apparel makers')]].map(c=>`<div class="card mstep"><div style="font-size:50px">${c[0]}</div><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join('<div class="mar">→</div>')}
  </div>
  <div class="grid g2" style="margin-top:26px">
   <div class="card glow"><h3>🛡️ ${L('انسان تصمیم می‌گیرد','Humans decide')}</h3><p>${L('G1: مدیر فروش گزارش بازار را می‌پذیرد · G2: برنامه‌ریزی و طراح ارشد ترکیب تولید را امضا می‌کنند.','G1: the sales manager accepts the market brief · G2: planning and the chief designer sign the production mix.')}</p></div>
   <div class="card"><h3>⚠️ ${L('صداقت داده','Data honesty')}</h3><p>${L('در دموی امروز، داده‌ها کاتالوگ نمونه‌ی نمایشی‌اند و نام کارخانه‌ها فرضی است؛ اتصال زنده به منابع در مرحله‌ی استقرار.','In today’s demo the data is an illustrative sample catalogue and mill names are fictional; live connectors come with deployment.')}</p></div>
  </div></div>`;
const S_QAI=() => `<div class="slide">${head(L('پیوست · اختیاری — ماژول جدید','Appendix · optional — new module'), L('هوش کیفیت: عیب‌یابی و تطبیق شید','Quality AI: defects & shade'))}
  <div class="grid g2" style="flex:1;gap:30px;align-items:stretch">
   <div class="card" style="padding:16px;display:flex;flex-direction:column"><img src="assets/img/m1_defect_boxed.jpg" alt="" ${lbA('assets/img/m1_defect_boxed.jpg',L('تشخیص عیب با کادر و سطح اطمینان — تصویر نمونه‌ی تولیدشده','Defect detection with boxes and confidence — generated sample image'))} style="width:100%;flex:1;min-height:0;object-fit:cover;border-radius:14px;cursor:zoom-in"><div class="src" style="margin-top:10px">${L('تصویر نمونه‌ی تولیدشده · نمایشی','Generated sample image · illustrative')}</div></div>
   <div style="display:flex;flex-direction:column;gap:18px">
    <div class="card"><h3><span class="ic">🔲</span>${L('تشخیص عیب روی میز بازرسی','Defect detection on the inspection table')}</h3><p>${L('مدل بینایی (CNN/ViT) نوار پود، نخ پاره، لکه، سوراخ و پرش را با کادر و درصد اطمینان علامت می‌زند؛ اطمینان پایین ← بازبینی انسانی.','A vision model (CNN/ViT) boxes weft bars, broken ends, stains, holes and floats with a confidence; low confidence → human review.')}</p></div>
    <div class="card"><h3><span class="ic">🧮</span>${L('امتیازدهی خودکار ۴ نقطه‌ای','Automatic 4-point scoring')}</h3><p>${L('امتیاز در ۱۰۰ یارد مربع طبق ASTM D5430 و درجه‌بندی رول برای خریدار.','Points per 100 yd² per ASTM D5430, and roll grading for the buyer.')}</p></div>
    <div class="card"><h3><span class="ic">🎯</span>${L('تطبیق شید لات‌ها (ΔE₀₀)','Lot shade matching (ΔE₀₀)')}</h3><p>${L('مقایسه‌ی هر لات با استاندارد با فرمول CIEDE2000؛ گروه‌بندی A/B و نگه‌داشتن لات خارج از تلرانس. اسپکتروفتومتر مرجع نهایی می‌ماند.','Each lot vs the standard with CIEDE2000; A/B shade grouping and holding out-of-tolerance lots. The spectrophotometer stays the final reference.')}</p></div>
    <div class="card glow"><p>${L('بازرسی چشمی حتی با بازرسان آموزش‌دیده حدود ۷۰٪ عیب‌ها را پیدا می‌کند.','Manual inspection finds about 70% of defects, even with trained inspectors.')}</p><div class="src">Kumar &amp; Pang, IEEE Trans. SMC-B, 2002</div></div>
   </div></div></div>`;
const S_DEP=() => `<div class="slide">${head(L('توسعه‌ی آینده · مسیرهای استقرار','Future development · deployment paths'), L('سه راه استقرار — داده در کارخانه می‌ماند','Three ways to deploy — data stays in the factory'))}
  <div class="grid g3" style="margin-bottom:24px">
   <div class="card glow"><div style="font-size:54px">🏭</div><h3>${L('روی سرور کارخانه (On-prem)','On-prem on factory servers')}</h3><ul><li>${L('مدل‌های بینایی اختصاصی کارخانه: CNN/ViT برای عیب‌یابی و تشخیص الیاف و نوع بافت','The mill’s own vision models: CNN/ViT for defects and fibre / weave recognition')}</li><li>${L('مدل طراحی مولد اختصاصی، آموزش‌دیده روی آرشیو طرح‌های خود کارخانه','The mill’s own generative design model, trained on its design archive')}</li><li>${L('بدون اینترنت؛ داده هرگز از کارخانه خارج نمی‌شود','No internet needed; data never leaves the factory')}</li></ul></div>
   <div class="card"><div style="font-size:54px">☁️</div><h3>${L('هوش مصنوعی متصل با API','API-connected AI')}</h3><ul><li>${L('شروع سریع بدون سخت‌افزار GPU','Fast start, no GPU hardware')}</li><li>${L('ارسال فقط داده‌ی لازم و بی‌نام‌شده، با قرارداد','Only minimal, anonymised data sent, under contract')}</li><li>${L('مناسب پایلوت و کارخانه‌های کوچک‌تر','Good for pilots and smaller mills')}</li></ul></div>
   <div class="card"><div style="font-size:54px">🔀</div><h3>${L('ترکیبی (Hybrid)','Hybrid')}</h3><ul><li>${L('بینایی و داده‌ی حساس روی سرور کارخانه','Vision and sensitive data on factory servers')}</li><li>${L('مدل‌های عمومی از طریق API','General models via API')}</li><li>${L('مهاجرت تدریجی به On-prem کامل','Gradual migration to full on-prem')}</li></ul></div>
  </div>
  <div class="card" style="padding:20px 26px"><h3 style="margin-bottom:12px">🔌 ${L('یکپارچگی با خط تولید','Integration with the line')}</h3><div class="chips" style="margin:0">${['Jacquard · Stäubli JC5 / Bonas EP','Dobby · WIF','Digital RIP · TIFF/ICC','ERP','MES','OPC UA',L('دوربین میز بازرسی','Inspection cameras'),L('اسپکتروفتومتر','Spectrophotometer')].map(c=>`<span class="tag ltr">${c}</span>`).join('')}</div></div>
  <p class="note" style="margin-top:16px">🔒 ${L('در هر سه مسیر: دروازه‌های تأیید انسانی، لاگ ممیزی و مالکیت کامل کارخانه بر داده و مدل‌ها.','In all three paths: human approval gates, an audit log, and full mill ownership of data and models.')}</p></div>`;
/* order: … problem, [What mills need], idea … C4, [DDI], [Quality AI] … Future horizons, [Deployment paths], RUN, Questions */
{ const iF=SL.length-2; SL.splice(iF,0,S_DEP); SL.splice(8,0,S_DDI,S_QAI); SL.splice(2,0,S_NEED); }
/* ---------------- SLIDE NAV ---------------- */
function renderSlides(){
  const box=$('#slides'); box.innerHTML=SL.map(f=>f()).join('');
  box.querySelectorAll('.slide').forEach((el,i)=>el.classList.toggle('on', i===S.slide));
  box.querySelectorAll('[data-act=demo]').forEach(b=>b.onclick=()=>openApparel());
  box.querySelectorAll('[data-act=chain]').forEach(b=>b.onclick=()=>openChain());
  box.querySelectorAll('[data-act=mill]').forEach(b=>b.onclick=()=>openMill());
  box.querySelectorAll('.node').forEach(n=>n.onclick=()=>{archHold=Date.now()+12000;archShow(+n.dataset.ag);});
  onSlideChange();
}
function go(i){
  i=Math.max(0,Math.min(SL.length-1,i)); S.slide=i;
  document.querySelectorAll('#slides .slide').forEach((el,k)=>el.classList.toggle('on',k===i));
  onSlideChange();
}
function onSlideChange(){
  if(S.mode==='slides' && $('#slides .slide.on #archsvg')) archStart(); else archStop();
  updChrome();
}
function updChrome(){
  const p=$('#progress'), c=$('#counter');
  if(S.mode==='slides'){ p.style.width=((S.slide+1)/SL.length*100)+'%'; c.textContent=`${N(S.slide+1)} / ${N(SL.length)}`; }
  else { p.style.width='100%'; c.textContent=L('حالت دموی زنده','Live demo mode'); }
  document.body.classList.toggle('demo',S.mode==='demo'); $('#bPrev').disabled=S.slide===0; $('#bNext').disabled=S.slide===SL.length-1;
  $('#btnSlides').classList.toggle('hot',S.mode==='slides'); $('#btnDemo').classList.toggle('hot',S.mode==='demo');
}
/* ---------------- DEMO ENGINE ---------------- */
const ASTEPS=['A1','G1','A2','A3','G2','A4','A5','G3','A7','A6','A8','G4','DONE'];
let STEPS=ASTEPS;
const MSG={
 A1:{fa:['الان داره تصویر ماکرو رو بررسی می‌کنه...','الان داره ساختار بافت رو تشخیص می‌ده...','الان داره جنس پارچه رو تشخیص می‌ده...','الان داره برای هر ویژگی سطح اطمینان تعیین می‌کنه...'],en:['Reading the macro image...','Detecting the weave / knit structure...','Estimating the fibre type...','Assigning a confidence tier to every attribute...']},
 A2:{fa:['الان داره سیگنال‌های بازار فارسی رو می‌خونه...','الان داره ترندهای فصل رو با پایگاه دانش تطبیق می‌ده...','الان داره جهت تقاضا رو جمع‌بندی می‌کنه...'],en:['Reading Persian market signals...','Matching seasonal trends against the knowledge base...','Summarising demand direction...']},
 A3:{fa:['الان داره ویژگی‌های پارچه رو به قیدهای طراحی تبدیل می‌کنه...','الان داره سه پیشنهاد لباس اسکچ می‌کنه...','الان داره فیت هر طرح رو با پارچه چک می‌کنه...','الان داره روی مدل رندر می‌گیره...'],en:['Turning fabric properties into design constraints...','Sketching three garment proposals...','Checking each design\'s fit against the fabric...','Rendering on a model...']},
 A4:{fa:['الان داره مصرف پارچه‌ی هر مدل رو حساب می‌کنه...','الان داره جهت برش و نکات مارکر رو تعیین می‌کنه...'],en:['Calculating fabric consumption per style...','Setting lay direction and marker notes...']},
 A5:{fa:['الان داره امکان‌سنجی فنی و شواهد بازار رو ترکیب می‌کنه...','الان داره تعداد رو زیر محدودیت طول رول بهینه می‌کنه...','الان داره فهرست «تولید نکن» رو می‌نویسه...'],en:['Combining technical feasibility with market evidence...','Optimising quantities under the roll-length constraint...','Writing the do-not-produce list...']},
 A7:{fa:['الان داره فایل آماده‌ی ماشین رو می‌سازه...','الان داره فایل رو با قرارداد تحویل اعتبارسنجی می‌کنه...'],en:['Building the machine-ready file...','Validating the file against its handoff contract...']},
 A6:{fa:['الان داره کپشن فارسی اینستاگرام رو می‌نویسه...','الان داره ادعاهای تبلیغ رو با شناسنامه‌ی پارچه چک می‌کنه...'],en:['Writing the Persian Instagram caption...','Checking marketing claims against the fabric passport...']},
 A8:{fa:['الان داره برنامه‌ی کنترل کیفیت بصری رو آماده می‌کنه...'],en:['Preparing the vision QC plan...']}
};
const R={ pmode:'chain', sample:null, idx:-1, done:[], waiting:false, gen:0, cur:null, skip:false, paused:false, t0:0, t1:0, approvals:{}, resolver:null, view:'pick' };
const alive=g=>g===R.gen;
function sleep(ms,g){return new Promise(res=>{let left=ms;const tick=()=>{if(!alive(g))return res(false);if(R.skip&&!R.waiting)return res(true);if(!R.paused)left-=50;if(left<=0)return res(true);setTimeout(tick,50);};setTimeout(tick,50);});}
const smp=()=>R.sample;

function openDemo(){ S.mode='demo'; $('#slides').style.display='none'; $('#demo').classList.add('on'); archStop(); if(R.view==='pick'||!R.sample) renderPick(); else renderRun(); updChrome(); }
function closeDemo(){ S.mode='slides'; $('#demo').classList.remove('on'); $('#slides').style.display=''; go(S.slide); }

const SKEYS=()=>Object.keys(window.R2R_SAMPLES).sort((a,b)=>+a.slice(1)-+b.slice(1));
const rollTxt=s=>s.roll?L(`رول ${N(s.roll.len)} متر × ${N(s.roll.width)} سانتی‌متر`,`Roll ${s.roll.len} m × ${s.roll.width} cm`):'';
function renderPick(){
  R.view='pick'; R.gen++; R.waiting=false; R.resolver=null;
  if(R.pmode==='chain') return renderChainPick();
  if(R.pmode==='mill') return renderMillPick();
  const ss=window.R2R_SAMPLES;
  $('#demo').innerHTML=`<div class="demo-pick"><div class="pickhd"><div class="kicker">${L('دموی زنده · مرحله‌ی ۱','Live demo · step 1')}</div>${modeSw()}</div><h1 class="t" style="margin-bottom:10px">${L('یک رول پارچه انتخاب کنید','Choose a fabric roll')}</h1>
   <div style="display:flex;gap:18px;align-items:center"><span class="illu">⚠️ ${L('داده‌های نمونه، مثال‌های نمایشی (Illustrative) هستند، نه نتیجه‌ی اندازه‌گیری','Sample data are illustrative examples, not measured results')}</span><span style="color:var(--dim);font-size:17px">${L('کلیدهای ۱ تا ۹ · آپلود با کلید <bdi>U</bdi> · حالت کارخانه با کلید <bdi>M</bdi>','Keys 1–9 · U = upload · M = Mill mode')}</span></div>
   <div class="samples many">${SKEYS().map((k,i)=>`<div class="sample" role="button" tabindex="0" data-s="${k}"><span class="num">${N(i+1)}</span><button class="zoom" ${lbA(ss[k].swatch,tx(ss[k].name))} title="${L('بزرگ‌نمایی','Enlarge')}">⤢</button><div class="im" style="background-image:url('${ss[k].swatch}')"></div>${ss[k].cat?`<span class="catb">${tx(ss[k].cat)}</span>`:''}<div class="tx"><h3>${tx(ss[k].name)}</h3><p>${tx(ss[k].short)}</p><p class="rl">${rollTxt(ss[k])}</p></div></div>`).join('')}
    <label class="sample upload" tabindex="0" id="upl"><span class="num">U</span><div class="im"><div class="plus">+</div></div><div class="tx"><h3>${L('عکس پارچه‌ی خودتان','Your own fabric photo')}</h3><p>${L('آپلود از همین دستگاه — تحلیل زنده در دستیار انجام می‌شود','Upload from this device — live analysis runs in the assistant')}</p></div><input type="file" accept="image/*" id="file" style="display:none"></label></div></div>`;
  $('#demo').querySelectorAll('[data-s]').forEach(b=>{b.onclick=e=>{ if(e.target.closest('[data-lb]')) return; startRun(ss[b.dataset.s]); }; b.onkeydown=e=>{ if(e.target!==b) return; if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();startRun(ss[b.dataset.s]);} };});
  const up=$('#upl'); up.onkeydown=e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();$('#file').click();} };
  $('#file').onchange=e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>startRun({id:'up',upload:true,swatch:rd.result,name:{fa:'پارچه‌ی آپلودشده',en:'Uploaded fabric'},short:{fa:f.name,en:f.name}});rd.readAsDataURL(f);};
  bindModeSw();
}
function startRun(s){ STEPS=(s&&s.chain)?CSTEPS:(s&&s.mill)?MSTEPS:ASTEPS; R.sample=s; R.idx=-1; R.done=['IN']; R.waiting=false; R.resolver=null; R.approvals={}; R.paused=false; R.skip=false; R.cur=null; R.t0=Date.now(); R.t1=0; R.view='run'; renderRun(); loop(0); }

function renderRun(){
  const s=smp();
  $('#demo').innerHTML=`<div class="runview"><div class="rail">
     <div class="src-card"><img src="${s.swatch}" alt="" ${lbA(s.swatch,tx(s.name))}><div><b>${tx(s.name)}</b><span>${(s.upload||s.mill||s.chain)?tx(s.short):rollTxt(s)}</span></div></div>
     <div class="steps" id="steps"></div>
     <div style="display:flex;gap:10px"><button class="ghost" id="bBack">↩ ${s.chain?L('زنجیره‌ی دیگر','Other chain'):s.mill?L('کارخانه‌ی دیگر','Other mill'):L('پارچه‌ی دیگر','Other fabric')}</button><button class="ghost" id="bRe">↺ ${L('از اول','Restart')}</button></div>
   </div><div class="main"><div class="status" id="status"><div class="spin"></div><div class="msg" id="msg"></div><div class="ctl"><button class="ghost" id="bPause" title="Pause">${R.paused?'▶':'⏸'}</button><button class="ghost" id="bSkip">⏭ ${L('رد شو','Skip')}</button></div></div><div class="out" id="out"></div></div></div>`;
  $('#bBack').onclick=()=>renderPick(); $('#bRe').onclick=()=>startRun(R.sample);
  $('#bPause').onclick=()=>{R.paused=!R.paused;$('#bPause').textContent=R.paused?'▶':'⏸';};
  $('#bSkip').onclick=()=>advance();
  renderRail();
  const o=$('#out');
  R.done.forEach(k=>o.insertAdjacentHTML('beforeend',card(k,false)));
  if(R.waiting) o.insertAdjacentHTML('beforeend',card(STEPS[R.idx],false));
  bindGate(); setStatusNow();
  o.scrollTop=o.scrollHeight;
}
function renderRail(){
  const el=$('#steps'); if(!el) return;
  el.onclick=e=>{const st=e.target.closest('[data-step]'); if(!st) return; const c=$('#out [data-k="'+st.dataset.step+'"]'); if(c){const o=$('#out'); o.scrollTop=Math.max(0,c.offsetTop-o.offsetTop-6); c.classList.remove('flash'); void c.offsetWidth; c.classList.add('flash');}};
  el.innerHTML=STEPS.filter(k=>k!=='DONE').map(k=>{const isG=k[0]==='G';const st=R.done.includes(k)?'done':(STEPS[R.idx]===k?(isG?'wait':'run'):'');
    const nm=isG?tx(GT()[+k[1]-1].n):tx(agN(k));
    const lab=st==='done'?'✓':(st==='run'?L('در حال اجرا','running'):(st==='wait'?L('منتظر شما','awaiting you'):''));
    return `<div class="step ${isG?'gate':''} ${st}${isChain()?' side-'+chainSide(k):''}" data-step="${k}"${st?' role="button" tabindex="0"':''}><span class="sid">${k}</span><span>${nm}</span><span class="st">${lab}</span></div>`;}).join('');
}
function setStatus(text,cls){const st=$('#status');if(!st)return;st.className='status '+(cls||'');$('#msg').innerHTML=text;}
function setStatusNow(){
  const k=STEPS[R.idx]; if(!k) return setStatus('');
  if(k==='DONE') return setStatus('✅ '+L('اجرا کامل شد — همه‌ی خروجی‌ها آماده‌اند','Run complete — all outputs ready'),'idle');
  if(k[0]==='G') return setStatus('🛡️ '+L('منتظر تأیید انسانی: ','Waiting for human approval: ')+`<span class="ltr">${k}</span> — `+tx(GT()[+k[1]-1].n),'gatew');
  if(R.cur&&R.cur.k===k) setStatus(MSG[k][S.lang][R.cur.mi]+'<span class="cur"></span>');
}
async function typeMsg(k,mi,g){
  R.cur={k,mi}; let n=0;
  while(true){ if(!alive(g))return; if(R.skip)break; const cur=MSG[k][S.lang][mi]; if(n>=cur.length)break; setStatus(cur.slice(0,n)+'<span class="cur"></span>'); n+=2; await sleep(30,g); }
  if(alive(g)) setStatus(MSG[k][S.lang][mi]+'<span class="cur"></span>');
}
async function loop(i){
  const g=++R.gen;
  for(;i<STEPS.length;i++){
    if(!alive(g))return;
    const k=STEPS[i]; R.idx=i; R.skip=false; renderRail();
    if(k==='DONE'){ R.t1=Date.now(); R.done.push('DONE'); setStatusNow(); append(card('DONE',true)); renderRail(); return; }
    if(k[0]==='G'){
      R.waiting=true; setStatusNow(); append(card(k,true)); bindGate();
      await new Promise(res=>{R.resolver=res;}); if(!alive(g))return;
      R.waiting=false; R.approvals[k]=new Date(); R.done.push(k);
      const gc=$('#gate-'+k); if(gc) gc.outerHTML=card(k,false);
      continue;
    }
    for(let m=0;m<MSG[k].en.length;m++){ if(R.skip)break; await typeMsg(k,m,g); if(!alive(g))return; await sleep(700,g); if(!alive(g))return; }
    R.skip=false; R.done.push(k); append(card(k,true)); renderRail();
    await sleep(500,g);
  }
}
function append(html){const o=$('#out');if(!o)return;o.insertAdjacentHTML('beforeend',html);const l=o.lastElementChild;if(l)setTimeout(()=>{o.scrollTop=Math.max(0,l.offsetTop-o.offsetTop-6);},30);}
function bindGate(){document.querySelectorAll('[data-approve]').forEach(b=>b.onclick=()=>approve());}
function approve(){ if(R.waiting&&R.resolver){const r=R.resolver;R.resolver=null;r();} }
function advance(){ if(R.view!=='run')return; if(R.waiting) approve(); else if(STEPS[R.idx]!=='DONE') R.skip=true; }
/* ---------------- OUTPUT CARDS ---------------- */
const esc=t=>String(t).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const lbA=(src,cap,tile)=>`data-lb="${esc(src)}" data-cap="${esc(cap||'')}"${tile?' data-tile="1"':''} role="button" tabindex="0" aria-label="${esc(L('بزرگ‌نمایی','Enlarge'))}"`;
const ilu=()=>`<span class="illu">⚠️ ${L('نمونه‌ی نمایشی','Illustrative')}</span>`;
const hdr=(id,t,extra)=>`<div class="oh"><span class="aid">${id}</span><h3>${t}</h3>${extra!=null?extra:ilu()}</div>`;
const tierTag=t=>`<span class="tag ${t.toLowerCase()}">${t}</span>`;
const decTag=d=>`<span class="dec ${d}">${d==='produce'?L('تولید کن','Produce'):d==='limited'?L('تولید محدود آزمایشی','Limited test batch'):L('تولید نکن','Do not produce')}</span>`;
function card(k,anim){ return card0(k,anim).replace('<div class="oc','<div data-k="'+k+'" class="oc'); }
function card0(k,anim){
  const s=smp(); const a=anim?'':' style="animation:none"';
  if(k[0]==='G') return gateCard(k,a);
  if(k==='DONE') return doneCard(a);
  if(k==='IN') return inCard(a);
  if(k[0]==='M') return millCard(k,a);
  if(k[0]==='X') return chainCard(k,a);
  if(s.upload) return upCard(k,a);
  if(k==='A1') return `<div class="oc"${a}>${hdr('A1','🪪 '+L('شناسنامه‌ی دیجیتال پارچه','Fabric Digital Passport'))}
    <table class="tb"><thead><tr><th>${L('ویژگی','Attribute')}</th><th>${L('مقدار','Value')}</th><th>${L('اطمینان','Tier')}</th><th>${L('شاهد','Evidence')}</th><th>${L('ارجاع','Escalation')}</th></tr></thead><tbody>
    ${s.passport.map(r=>`<tr><td><b>${tx(r.a)}</b></td><td>${tx(r.v)}</td><td>${tierTag(r.t)}</td><td>${tx(r.m)}</td><td>${r.lab?`<span class="tag lab">🧪 ${L('تست آزمایشگاه لازم است','Requires lab test')}</span><div class="mono" style="font-size:14px;color:var(--dim);margin-top:4px">${r.lab}</div>`:'—'}</td></tr>`).join('')}</tbody></table></div>`;
  if(k==='A2') return `<div class="oc"${a}>${hdr('A2','📈 '+L('تحلیل بازار و ترند ایران','Iran market & trend brief'))}<ul>${s.market[S.lang].map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  if(k==='A3') return `<div class="oc"${a}>${hdr('A3','🎨 '+L('سه پیشنهاد طرح — با بررسی فیت پارچه','Three proposals — with fabric-fit check'))}
    <div class="props">${s.proposals.map(p=>`<div class="prop ${p.dec==='no'?'rej':''}"><img src="${p.img}" alt="" ${lbA(p.img,p.id+' · '+tx(p.name))}>${p.dec==='no'?`<div class="stamp">✕ ${L('رد شد','REJECTED')}</div>`:''}<div class="pb"><b><span class="ltr">${p.id}</span> · ${tx(p.name)}</b><span>${tx(p.fit)}</span>${p.why?`<div class="why">${tx(p.why)}</div>`:''}</div></div>`).join('')}</div>
    <div class="visrow"><div class="vis"><img src="${s.render}" alt="" style="object-position:top" ${lbA(s.render,s.renderCap?tx(s.renderCap):L('رندر روی مدل — P1','On-model render — P1'))}><div class="cap">📸 ${s.renderCap?tx(s.renderCap):L('رندر روی مدل — پیشنهاد P1','On-model render — proposal P1')}</div></div>
    ${s.repeat?`<div class="vis tile" style="background-image:url('${s.repeat}')" ${lbA(s.repeat,s.repeatCap?tx(s.repeatCap):L('طرح تکرارشونده‌ی بی‌درز','Seamless repeat'),1)}><div class="cap">🔁 ${s.repeatCap?tx(s.repeatCap):L('طرح تکرارشونده‌ی بی‌درز (Half-drop، بدون جهت)','Seamless repeat (half-drop, non-directional)')}</div></div>`:`<div class="vis"><img src="${s.swatch}" alt="" ${lbA(s.swatch,tx(s.name))}><div class="cap">🧵 ${L('مرجع بافت پارچه برای رندر','Fabric texture reference for rendering')}</div></div>`}</div></div>`;
  if(k==='A4'){ const r=s.roll, av=r.len-r.reserve;
    return `<div class="oc"${a}>${hdr('A4','📐 '+L('تک‌پک، مصرف و مارکر','Tech pack, consumption & marker'))}
    <div class="grid g2"><div><table class="tb"><tbody>
      <tr><td>${L('طول رول','Roll length')}</td><td><b>${N(r.len)} m</b></td></tr>
      <tr><td>${L('عرض کل / مفید','Width total / usable')}</td><td><b>${N(r.width)} / ${N(r.usable)} cm</b></td></tr>
      <tr><td>${L('رزرو (استرایک‌آف، ضایعات سر رول، عیب)','Reserve (strike-off, end loss, defects)')}</td><td><b>${fmt(r.reserve)} m</b></td></tr>
      <tr><td>${L('طول قابل‌استفاده','Usable length')}</td><td><b style="color:var(--cy)">${fmt(av)} m</b></td></tr></tbody></table></div>
     <div><table class="tb"><thead><tr><th>${L('مدل','Style')}</th><th>${L('مصرف هر عدد (با جبران آبرفتگی)','Per unit (incl. shrinkage)')}</th></tr></thead><tbody>
      ${s.proposals.filter(p=>p.dec!=='no').map(p=>`<tr><td><span class="ltr">${p.id}</span> · ${tx(p.name)}</td><td><b>${fmt(p.cons,2)} m</b></td></tr>`).join('')}</tbody></table>
      <ul style="margin-top:12px">${s.marker[S.lang].map(x=>`<li>${x}</li>`).join('')}</ul></div></div></div>`;}
  if(k==='A5'){ const r=s.roll, av=r.len-r.reserve; const ps=s.proposals.filter(p=>p.dec!=='no'); const used=ps.reduce((t,p)=>t+p.units*p.cons,0); const res=av-used;
    const col=['#22d3ee','#a78bfa','#34d399'];
    return `<div class="oc"${a}>${hdr('A5','⚖️ '+L('تصمیم تولید','Production decision'))}
    <table class="tb"><thead><tr><th>${L('پیشنهاد','Proposal')}</th><th>${L('تصمیم','Decision')}</th><th>${L('تعداد','Units')}</th><th>${L('پارچه','Fabric')}</th><th>${L('سایزبندی','Size curve')}</th></tr></thead><tbody>
    ${s.proposals.map(p=>`<tr><td><span class="ltr">${p.id}</span> · ${tx(p.name)}</td><td>${decTag(p.dec)}</td><td><b>${N(p.units)}</b></td><td>${p.units?fmt(p.units*p.cons)+' m':'—'}</td><td>${p.sizes?`<div class="sizes">${Object.entries(p.sizes).map(([z,q])=>`<span>${z}: ${q}</span>`).join('')}</div>`:'—'}</td></tr>`).join('')}</tbody></table>
    <div class="rollbar">${ps.map((p,i)=>`<div style="flex:${(p.units*p.cons).toFixed(2)} 1 0;background:${col[i]}">${p.id} · ${(p.units*p.cons).toFixed(1)} m</div>`).join('')}<div style="flex:${r.reserve} 1 0;background:#f5c46b">${L('رزرو','Reserve')} ${fmt(r.reserve)} m</div><div style="flex:${Math.max(res,.6).toFixed(2)} 1 0;background:#5d6480;color:#fff">${res.toFixed(1)}</div></div>
    <div class="legend"><span>${L('رول','Roll')} ${N(r.len)} m = ${ps.map(p=>`<span class="ltr">${p.id}</span> ${fmt(p.units*p.cons)}`).join(' + ')} + ${L('رزرو','reserve')} ${fmt(r.reserve)} + ${L('باقی‌مانده برای اکسسوری','residual for accessories')} ${fmt(res)} m</span></div>
    <div class="card" style="margin-top:16px;border-color:rgba(251,113,133,.45);background:rgba(251,113,133,.06);padding:18px 24px"><h3 style="font-size:21px;color:#fda4af">🚫 ${L('فهرست «تولید نکن»','Do-not-produce list')}</h3><ul>${s.dnp[S.lang].map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`;}
  if(k==='A7') return `<div class="oc"${a}>${hdr('A7','🏭 '+L('فایل آماده‌ی ماشین','Machine-ready file'))}
    <div class="file"><div class="fi">${s.machine.file.split('.').pop().toUpperCase()}</div><div><b class="mono">${s.machine.file}</b><p>${tx(s.machine.target)}</p></div></div>
    <ul>${s.machine.checks[S.lang].map(x=>`<li>${x}</li>`).join('')}</ul>
    <p style="margin-top:10px;color:var(--gold)">🛑 ${L('فایل منتظر آزادسازی در G4 است؛ هیچ ارسال خودکاری به ماشین انجام نمی‌شود.','File is held for release at G4; nothing is auto-sent to a machine.')}</p></div>`;
  if(k==='A6') return `<div class="oc"${a}>${hdr('A6','📱 '+L('محتوای اینستاگرام فارسی','Persian Instagram content'))}
    <div class="ig"><div class="igpost"><div class="ih"><i></i>your.brand</div><img src="${s.render}" alt="" style="object-position:top" ${lbA(s.render,L('پست اینستاگرام','Instagram post'))}><div class="icons">♡ 💬 ↗</div><div class="ct">${s.caption.fa}</div></div>
    <div>${S.lang==='en'?`<p style="color:var(--tx);font-weight:700;margin-bottom:8px">English translation</p><div class="card" style="padding:18px 22px;white-space:pre-line;font-size:18px;line-height:1.8">${s.caption.en}</div>`:''}
     <div class="card" style="margin-top:14px;border-color:rgba(139,92,246,.5);padding:18px 22px"><h3 style="font-size:21px">🎯 ${L('انضباط ادعا','Claim discipline')}</h3><p>${tx(s.claim)}</p></div></div></div></div>`;
  if(k==='A8') return `<div class="oc"${a}>${hdr('A8','👁️ '+L('کنترل کیفیت بصری','Vision QC'))}<p>${tx(s.qc)}</p></div>`;
  return '';
}
function inCard(a){
  const s=smp(); if(s.chain) return chainIn(a); if(s.mill) return millIn(a);
  const live=`<div class="livenote" style="margin:14px 0 0">🤖 ${L('تحلیل زنده در دستیار انجام می‌شود — این عکس را در چت برای دستیار بفرستید.','Live analysis runs in the assistant — send this photo to the assistant in chat.')}</div>`;
  return `<div class="oc"${a}><div class="oh"><span class="aid">IN</span><h3>📷 ${L('ورودی: عکس رول پارچه','Input: fabric roll photo')}</h3></div>
   <div style="display:grid;grid-template-columns:440px 1fr;gap:26px;align-items:start"><img src="${s.swatch}" alt="" ${lbA(s.swatch,tx(s.name))} style="width:100%;height:300px;object-fit:${s.upload?'contain':'cover'};border-radius:18px;background:#000;display:block">
   <div><table class="tb"><tbody>
    <tr><td>${L('پارچه','Fabric')}</td><td><b>${tx(s.name)}</b></td></tr>
    <tr><td>${L('رول','Roll')}</td><td><b>${s.roll?L(`${N(s.roll.len)} متر × ${N(s.roll.width)} سانتی‌متر`,`${s.roll.len} m × ${s.roll.width} cm`):'—'}</b></td></tr>
    <tr><td>${L('هدف','Goal')}</td><td>${L('بهترین استفاده از این رول: چه بسازیم، چندتا، و چه نسازیم','Best use of this roll: what to make, how many, and what not to make')}</td></tr>
    <tr><td>${L('مخاطب','User')}</td><td>${L('تولیدکننده‌ی پوشاک','Apparel manufacturer')}</td></tr></tbody></table>${s.upload?live:''}</div></div></div>`;
}
function gateCard(k,a){
  const G=GT()[+k[1]-1]; const ok=R.approvals[k];
  if(ok) return `<div class="oc gatecard" style="animation:none;padding:14px 24px" id="gate-${k}"><div class="oh" style="margin:0"><span class="aid" style="background:var(--gold)">${k}</span><h3 style="font-size:20px">✓ ${tx(G.n)} — ${L('تأیید شد توسط','approved by')} ${tx(G.own)}</h3><span class="mono" style="margin-inline-start:auto;color:var(--dim);font-size:15px">${ok.toLocaleTimeString('en-GB')}</span></div></div>`;
  return `<div class="oc gatecard"${a} id="gate-${k}"><div class="oh"><span class="aid" style="background:var(--gold)">${k}</span><h3>🛡️ ${L('دروازه‌ی تأیید انسانی','Human approval gate')} — ${tx(G.n)}</h3></div>
   <p>${tx(G.d)}</p><p>👤 ${L('مسئول','Owner')}: <b style="color:var(--tx)">${tx(G.own)}</b></p>
   <div style="display:flex;gap:14px;margin-top:16px;align-items:center"><button class="approve" data-approve="1">✓ ${L('تأیید و ادامه','Approve & continue')}</button><span style="color:var(--dim);font-size:16px">${L('یا Enter / PageDown','or Enter / PageDown')}</span></div></div>`;
}
function doneCard(a){
  if(smp().chain) return chainDone(a);
  if(smp().mill) return millDone(a);
  const s=smp(); const secs=Math.round(((R.t1||Date.now())-R.t0)/1000);
  const b=[L('شناسنامه‌ی پارچه','Fabric passport'),L('تحلیل بازار','Market brief'),L('۳ پیشنهاد + رندر','3 proposals + render'),L('تک‌پک و مارکر','Tech pack & marker'),L('برنامه‌ی تولید + «تولید نکن»','Plan + do-not-produce'),L('فایل ماشین','Machine file'),L('پست اینستاگرام','Instagram post')];
  return `<div class="oc final"${a}><div class="ok">✅</div><h2 class="gt">${L('از رول تا تولید — کامل شد','Roll to Run — complete')}</h2><p>${s.upload?L('پیش‌نمایش جریان کار؛ تحلیل واقعی این عکس در دستیار انجام می‌شود.','Workflow preview; the real analysis of this photo runs in the assistant.'):L('۸ ایجنت · ۴ تأیید انسانی · زمان اجرا: ','8 agents · 4 human approvals · run time: ')+`<b>${N(secs)} ${L('ثانیه','s')}</b>`}</p>
   <div class="bundle">${b.map(x=>`<span class="tag" style="height:40px;font-size:17px">📦 ${x}</span>`).join('')}</div>
   <p style="margin-top:20px;font-size:17px;color:var(--dim)">${s.upload?'':L('همه‌ی مقادیر این نمونه فرضی و نمایشی‌اند.','All values in this sample are hypothetical and illustrative.')}</p></div>`;
}
function upCard(k,a){
  const s=smp(); const ag=AG[+k[1]-1];
  const live=`<div class="livenote">🤖 ${L('تحلیل زنده در دستیار انجام می‌شود — این عکس را در چت برای دستیار بفرستید تا خروجی واقعی همین مرحله ساخته شود.','Live analysis runs in the assistant — send this photo to the assistant in chat to produce this step\'s real output.')}</div>`;
  const what={A1:L('شناسنامه‌ی پارچه: ساختار، جنس احتمالی، گرماژ، کشسانی، آبرفتگی، ریزش — هرکدام با T1–T4 و ارجاع آزمایشگاهی.','Passport: construction, likely fibre, mass, stretch, shrinkage, drape — each with T1–T4 and lab escalation.'),
    A2:L('سیگنال‌های بازار فارسی و جهت تقاضا برای این پارچه.','Persian market signals and demand direction for this fabric.'),
    A3:L('سه پیشنهاد لباس با اسکچ، یکی ردشده با دلیل، و رندر روی مدل.','Three garment proposals with sketches, one rejected with a reason, and an on-model render.'),
    A4:L('مصرف پارچه برای هر مدل و نکات مارکر بر اساس طول و عرض رول.','Consumption per style and marker notes based on roll length and width.'),
    A5:L('تعداد به تفکیک سایز و فهرست «تولید نکن».','Size-level quantities and the do-not-produce list.'),
    A7:L('TIFF برای RIP یا DXF-AAMA برای CAD الگو.','TIFF for the RIP or DXF-AAMA for pattern CAD.'),
    A6:L('کپشن فارسی اینستاگرام با انضباط ادعا.','Persian Instagram caption with claim discipline.'),
    A8:L('برنامه‌ی کنترل کیفیت بصری.','Vision QC plan.')}[k];
  return `<div class="oc"${a}>${hdr(k,ag.ic+' '+tx(ag.n),`<span class="illu" style="border-color:rgba(34,211,238,.6);color:#a5f3fc">LIVE · ${L('در دستیار','in the assistant')}</span>`)}${k==='A1'?live:''}<div class="ph">${what}</div></div>`;
}
/* ---------------- MILL MODE (added; apparel flow above is untouched) ---------------- */
const MAG=[
 {id:'M1',ic:'📡',n:{fa:'نبض بازار',en:'Market Pulse'}},
 {id:'M2',ic:'📦',n:{fa:'سبد محصول و موجودی',en:'Portfolio & stock'}},
 {id:'M3',ic:'⚖️',n:{fa:'تصمیم بافت/چاپ + رنگ‌بندی',en:'Weave/print decision + colourways'}},
 {id:'M4',ic:'🧊',n:{fa:'انبار راکد و فروش B2B',en:'Dead stock & B2B clearance'}},
 {id:'M5',ic:'👁️',n:{fa:'هوش کیفیت: عیب و شید',en:'Quality AI: defects & shade'}},
 {id:'M6',ic:'🏭',n:{fa:'تحویل به ماشین',en:'Machine handoff'}}];
const MGATES=[
 {id:'G1',n:{fa:'گزارش بازار پذیرفته شد',en:'Market brief accepted'},own:{fa:'مدیر فروش / بازاریابی',en:'Sales / marketing manager'},d:{fa:'سیگنال‌ها جهت‌دار و نمونه‌اند؛ مدیر فروش آن‌ها را با سفارش‌های واقعی و شناخت مشتریان مقایسه و تأیید می‌کند.',en:'Signals are directional samples; the sales manager checks them against real orders and customer knowledge before they drive any decision.'}},
 {id:'G2',n:{fa:'ترکیب تولید و رنگ‌بندی تأیید شد',en:'Weave/print mix & colourways approved'},own:{fa:'مدیر برنامه‌ریزی + طراح ارشد',en:'Planning manager + chief designer'},d:{fa:'هیچ تغییری در برنامه‌ی ماشین‌ها بدون امضای برنامه‌ریزی و طراح ارشد انجام نمی‌شود؛ سهم خلاقانه‌ی طراح ثبت می‌شود.',en:'No loom or printer schedule changes without planning and the chief designer signing off; the designer’s creative input is recorded.'}},
 {id:'G3',n:{fa:'آزادسازی کیفیت و شید',en:'Quality & shade release'},own:{fa:'مدیر کنترل کیفیت / آزمایشگاه رنگ',en:'QC manager / colour lab'},d:{fa:'عیب‌های کم‌اطمینان را انسان بازبینی می‌کند؛ لات‌های خارج از تلرانس جدا یا اصلاح می‌شوند؛ اسپکتروفتومتر مرجع نهایی است.',en:'Low-confidence defects get human review; out-of-tolerance lots are separated or corrected; the spectrophotometer stays the final reference.'}},
 {id:'G4',n:{fa:'فایل ماشین آزاد شد',en:'Machine files released'},own:{fa:'تکنسین بافندگی / چاپ',en:'Loom / print technician'},d:{fa:'فایل فقط پس از نمونه‌ی بافت یا استرایک‌آف و تأیید تکنسین به ماشین می‌رود؛ هیچ ارسال خودکاری وجود ندارد.',en:'The file goes to the machine only after a blanket sample or strike-off and the technician’s approval; nothing is auto-sent.'}}];
const MSTEPS=['M1','G1','M2','M3','G2','M4','M5','G3','M6','G4','DONE'];
Object.assign(MSG,{
 M1:{fa:['الان داره کاتالوگ نمونه‌ی فروشگاه‌های آنلاین رو می‌خونه...','الان داره طرح، رنگ، الیاف، گرماژ و عرض پرفروش رو استخراج می‌کنه...','الان داره روند هر سیگنال رو حساب می‌کنه...'],en:['Reading the prepared online-shop catalogue...','Extracting trending designs, colours, fibres, weights and widths...','Scoring the trend of each signal...']},
 M2:{fa:['الان داره سبد محصول کارخانه رو با نبض بازار تطبیق می‌ده...','الان داره ماه‌های پوشش موجودی هر کالا رو حساب می‌کنه...'],en:['Matching the mill’s product list against the market pulse...','Calculating months of stock cover for every article...']},
 M3:{fa:['الان داره برای هر کالا تصمیم بیشتر / کمتر / توقف می‌گیره...','الان داره رنگ‌بندی فصل بعد رو تولید می‌کنه...'],en:['Deciding MORE / REDUCE / STOP for every article...','Generating next-season colourways...']},
 M4:{fa:['الان داره رول‌های راکد رو پیدا می‌کنه...','الان داره رول‌ها رو با تولیدی‌های پوشاک تطبیق B2B می‌ده...'],en:['Finding slow-moving rolls...','B2B-matching unsold rolls to apparel makers...']},
 M5:{fa:['الان داره تصویر میز بازرسی رو برای عیب بررسی می‌کنه...','الان داره امتیاز سیستم ۴ امتیازی رو حساب می‌کنه...','الان داره اختلاف رنگ لات‌ها (ΔE) رو می‌سنجه...'],en:['Scanning the inspection-table image for defects...','Scoring the roll with the 4-point system...','Measuring lot-to-lot shade difference (ΔE)...']},
 M6:{fa:['الان داره فایل ماشین بافندگی/چاپ رو می‌سازه...','الان داره فایل رو با قرارداد تحویل اعتبارسنجی می‌کنه...'],en:['Building the loom / print machine file...','Validating the file against its handoff contract...']}
});
const isMill=()=>!!(R.sample&&R.sample.mill);
const GT=()=>isChain()?CGATES:isMill()?MGATES:GATES;
const agN=k=>k[0]==='X'?XAG[+k[1]-1].n:k[0]==='M'?MAG[+k[1]-1].n:AG[+k[1]-1].n;
const MKEYS=()=>Object.keys(window.R2R_MILLS||{}).sort((a,b)=>+a.slice(1)-+b.slice(1));
const MBADGE=()=>`<span class="illu millb">⚠️ ${L('داده‌ی نمونه‌ی نمایشی (Illustrative) · اتصال زنده در مرحله‌ی استقرار','Illustrative sample data · live connectors in deployment')}</span>`;
const msrc=k=>tx((window.R2R_MSRC||{})[k]||k);
const mvb=s=>(s.kind?s.kind==='print':s.id==='m2')?L('چاپ','PRINT'):L('بافت','WEAVE');
const mdec=(d,s)=>`<span class="mdec ${d}">${d==='more'?(S.lang==='fa'?mvb(s)+' بیشتر':mvb(s)+' MORE'):d==='reduce'?L('کاهش','REDUCE'):d==='stop'?L('توقف','STOP'):d==='new'?L('طرح جدید','NEW'):L('ادامه','KEEP')}</span>`;
const cov=p=>p.stock/p.sales;
const covC=c=>c>6?'bad':c>3?'mid':'good';
function millCard(k,a){
  const s=smp(), ag=MAG[+k[1]-1]; const H=t=>hdr(k,ag.ic+' '+t,MBADGE());
  if(k==='M1'){ const mx=Math.max(...s.pulse.map(p=>Math.abs(p.t)));
    return `<div class="oc"${a}>${H(L('نبض بازار: چه طرح، رنگ و الیافی الان می‌فروشد؟','Market Pulse: which designs, colours & fibres sell now?'))}
    <table class="tb"><thead><tr><th>${L('بُعد','Dimension')}</th><th>${L('سیگنال','Signal')}</th><th style="width:290px">${L('روند تقاضا','Demand trend')}</th><th>${L('منبع','Source')}</th><th>${L('اطمینان','Tier')}</th></tr></thead><tbody>
    ${s.pulse.map(p=>`<tr><td><b>${tx(p.d)}</b></td><td>${tx(p.s)}</td><td><div class="tbar ${p.t<0?'dn':'up'}"><i style="width:${Math.max(8,Math.round(Math.abs(p.t)/mx*100))}%"></i><b class="ltr">${p.t<0?'−':'+'}${N(Math.abs(p.t))}%</b></div></td><td style="font-size:16px">${msrc(p.src)}</td><td>${tierTag(p.c)}</td></tr>`).join('')}</tbody></table>
    <p class="mnote">🔌 ${L('در استقرار: اتصال به فروشگاه‌های آنلاین، آگهی‌های بازار، سفارش عمده‌فروشان و فروش ERP خود کارخانه. روی صحنه: کاتالوگ نمونه‌ی آماده.','In deployment: connectors to online shops, marketplace listings, wholesaler orders and the mill’s own ERP sales. On stage: a prepared illustrative catalogue.')}</p></div>`;}
  if(k==='M2'){ const tot=s.portfolio.reduce((t,p)=>t+p.stock,0);
    return `<div class="oc"${a}>${H(L('سبد محصول و موجودی در برابر بازار','Portfolio & stock vs the market'))}
    <table class="tb"><thead><tr><th>${L('کد','Code')}</th><th>${L('کالا','Article')}</th><th>${L('مشخصات','Spec')}</th><th>${L('موجودی','Stock')}</th><th>${L('فروش ماهانه','Sales / month')}</th><th>${L('پوشش موجودی','Stock cover')}</th></tr></thead><tbody>
    ${s.portfolio.map(p=>`<tr><td class="ltr"><b>${p.code}</b></td><td>${tx(p.n)}</td><td class="mono" style="font-size:15px">${p.spec}</td><td><b>${N(p.stock.toLocaleString('en-US'))} m</b></td><td>${N(p.sales.toLocaleString('en-US'))} m</td><td><span class="cov ${covC(cov(p))}">${fmt(cov(p))} ${L('ماه','mo')}</span></td></tr>`).join('')}</tbody></table>
    <div class="legend" style="margin-top:12px"><span>${L('جمع موجودی','Total stock')}: <b>${N(tot.toLocaleString('en-US'))} m</b> · ${L('پوشش = موجودی ÷ فروش ماهانه','Cover = stock ÷ monthly sales')} · <span class="cov good">≤ ${N(3)}</span> <span class="cov mid">${N(3)}–${N(6)}</span> <span class="cov bad">&gt; ${N(6)} ${L('ماه','mo')}</span></span></div></div>`;}
  if(k==='M3'){ const na=s.newArt;
    return `<div class="oc"${a}>${H(L('تصمیم: بیشتر / کمتر / توقف — با دلیل','Decision: MORE / REDUCE / STOP — with reasons'))}
    <table class="tb"><thead><tr><th>${L('تصمیم','Decision')}</th><th>${L('کد','Code')}</th><th>${L('کالا','Article')}</th><th>${L('دلیل','Reason')}</th></tr></thead><tbody>
    ${s.portfolio.map(p=>`<tr><td>${mdec(p.dec,s)}</td><td class="ltr"><b>${p.code}</b></td><td>${tx(p.n)}</td><td>${tx(p.why)}</td></tr>`).join('')}
    <tr class="newrow"><td>${mdec('new',s)}</td><td class="ltr"><b>${na.code}</b></td><td>${tx(na.n)}<div class="mono" style="font-size:14px;color:var(--dim)">${na.spec}</div></td><td>${tx(na.why)}<div style="color:var(--cy);margin-top:4px">${tx(na.plan)}</div></td></tr></tbody></table>
    <h3 class="msub">🎨 ${L('رنگ‌بندی فصل بعد','Next-season colourways')} — <span class="ltr">${na.code}</span></h3>
    <div class="cws">${s.colourways.map((c,i)=>`<div class="cw${s.chain&&i===s.pick?' pick':''}">${s.chain&&i===s.pick?`<span class="pk">⛓️ ${L('انتخاب برای زنجیره','Chosen for the chain')}</span>`:''}<img src="${c.img}" alt="" ${lbA(c.img,na.code+' · '+tx(c.n))}><div class="cb"><i style="background:${c.hex}"></i><b>${tx(c.n)}</b><span class="mono">${c.hex}</span></div></div>`).join('')}</div></div>`;}
  if(k==='M4'){ const d=s.dead, tot=d.rolls.reduce((t,r)=>t+r.m,0), mt=d.b2b.reduce((t,b)=>t+b.m,0);
    return `<div class="oc"${a}>${H(L('ریسک انبار راکد و فروش B2B','Dead-stock risk & B2B clearance'))}
    <div class="grid g2" style="gap:24px"><div><table class="tb"><thead><tr><th>${L('رول','Roll')}</th><th>${L('متراژ','Metres')}</th><th>${L('ماندگاری','Age')}</th><th>${L('ریسک','Risk')}</th></tr></thead><tbody>
     ${d.rolls.map(r=>`<tr><td><b class="ltr">${r.code}</b><div style="font-size:15px">${tx(r.n)}</div></td><td><b>${N(r.m.toLocaleString('en-US'))} m</b></td><td>${N(r.age)} ${L('روز','days')}<div class="agebar"><i style="width:${Math.min(100,Math.round(r.age/450*100))}%"></i></div></td><td><span class="cov ${r.age>=365?'bad':'mid'}">${r.age>=365?L('بالا','High'):L('متوسط','Medium')}</span></td></tr>`).join('')}</tbody></table>
     <ul style="margin-top:12px">${d.actions.map(x=>`<li>${tx(x)}</li>`).join('')}</ul></div>
     <div><h3 class="msub" style="margin-top:0">🤝 ${L('تطبیق B2B با تولیدی‌های پوشاک','B2B matches with apparel makers')}</h3><table class="tb"><tbody>
     ${d.b2b.map(b=>`<tr><td>${tx(b.who)}</td><td class="ltr"><b>${b.code}</b></td><td><b>${N(b.m.toLocaleString('en-US'))} m</b></td></tr>`).join('')}</tbody></table>
     <div class="clr"><div class="clrbar"><i style="width:${Math.round(Math.min(1,mt/tot)*100)}%"></i></div><span>${L('تطبیق‌شده','Matched')}: <b>${N(mt.toLocaleString('en-US'))}</b> / ${N(tot.toLocaleString('en-US'))} m (${N(Math.round(mt/tot*100))}%)</span></div>
     <p class="mnote">${L('خریداران نمونه و فرضی‌اند؛ در استقرار، از شبکه‌ی خریداران و تاریخچه‌ی سفارش کارخانه می‌آیند.','Buyers are fictional samples; in deployment they come from the mill’s buyer network and order history.')}</p></div></div></div>`;}
  if(k==='M5'){ const q=s.quality, sh=q.shade, pts=q.boxes.reduce((t,b)=>t+b.p,0), per=pts*3600/(q.yd*q.win);
    const grp=de=>de<=sh.tol?['ok',L('قبول · گروه A','Pass · group A')]:de<=sh.tol*1.5?['mid',L('گروه شید جدا (B)','Separate shade group (B)')]:['bad',L('نگه‌دار / اصلاح دستور','Hold / correct recipe')];
    return `<div class="oc"${a}>${H(L('هوش کیفیت: تشخیص عیب و تطبیق شید','Quality AI: defect detection & shade matching'))}
    <div class="qgrid"><div><div class="defimg" ${lbA(q.boxed,tx(q.insp))}><img src="${q.img}" alt="">${q.boxes.map((b,i)=>`<div class="dbx ${b.c<0.5?'rev':''}" style="left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%"><span>${N(i+1)} · ${N(Math.round(b.c*100))}%</span></div>`).join('')}</div><div class="cap2">📷 ${tx(q.insp)}</div></div>
    <div><table class="tb"><thead><tr><th>#</th><th>${L('عیب','Defect')}</th><th>${L('اطمینان','Conf.')}</th><th>${L('امتیاز','Points')}</th></tr></thead><tbody>
     ${q.boxes.map((b,i)=>`<tr><td>${N(i+1)}</td><td>${tx(b.n)}</td><td><b class="${b.c<0.5?'lowc':''}">${N(Math.round(b.c*100))}%</b></td><td>${b.c<0.5?`<span class="cov mid">${L('بازبینی انسانی','Human review')}</span>`:N(b.p)}</td></tr>`).join('')}</tbody></table>
     <div class="score"><b class="ltr">${fmt(per)}</b><span>${L('امتیاز در ۱۰۰ یارد مربع (سیستم ۴ امتیازی، ASTM D5430)','points per 100 yd² (4-point system, ASTM D5430)')}<br><small class="ltr">${pts} × 3600 ÷ (${q.yd} yd × ${q.win} in)</small> · ${per<=40?`<span class="cov good">${L('زیر حد رایج ۴۰ — درجه‌ی یک','Under the common 40 limit — first quality')}</span>`:`<span class="cov bad">${L('بالای حد ۴۰','Over the 40 limit')}</span>`}</span></div></div></div>
    <h3 class="msub">🎯 ${L('تطبیق شید لات‌ها','Lot shade matching')} — ${tx(sh.art)} · ΔE₀₀ ${L('تلرانس','tolerance')} ≤ ${fmt(sh.tol)}</h3>
    <div class="lots"><div class="lot std"><i style="background:${sh.std}"></i><b>${L('استاندارد','Standard')}</b><span class="mono">${sh.std}</span></div>
     ${sh.lots.map(l=>{const g=grp(l.de);return `<div class="lot ${g[0]}"><i style="background:${l.hex}"></i><b class="ltr">${l.l}</b><span>ΔE₀₀ <b>${fmt(l.de)}</b></span><em>${g[1]}</em></div>`;}).join('')}</div>
    <p class="mnote">🔬 ${L('ΔE دوربین فقط غربالگری است؛ تصمیم نهایی شید با اسپکتروفتومتر زیر نور D65 و تلرانس قرارداد خریدار.','Camera ΔE is screening only; the final shade decision uses a spectrophotometer under D65 and the buyer’s contract tolerance.')}</p></div>`;}
  if(k==='M6') return `<div class="oc"${a}>${H(L('فایل آماده‌ی ماشین','Machine-ready file'))}
    <div class="file"><div class="fi">${s.machine.file.split('.').pop().toUpperCase()}</div><div><b class="mono">${s.machine.file}</b><p>${tx(s.machine.target)}</p></div></div>
    <ul>${s.machine.checks.map(x=>`<li>${tx(x)}</li>`).join('')}</ul>
    <p style="margin-top:10px;color:var(--gold)">🛑 ${L('فایل منتظر آزادسازی در G4 است؛ هیچ ارسال خودکاری به ماشین انجام نمی‌شود.','File is held for release at G4; nothing is auto-sent to a machine.')}</p></div>`;
  return '';
}
function millIn(a){
  const s=smp();
  return `<div class="oc"${a}><div class="oh"><span class="aid">IN</span><h3>🏭 ${L('ورودی: پروفایل کارخانه + سبد محصول + موجودی','Input: mill profile + product list + stock')}</h3>${MBADGE()}</div>
   <div style="display:grid;grid-template-columns:400px 1fr;gap:26px;align-items:start"><img src="${s.swatch}" alt="" ${lbA(s.swatch,tx(s.name))} style="width:100%;height:290px;object-fit:cover;border-radius:18px;background:#000;display:block">
   <div><table class="tb"><tbody><tr><td>${L('کارخانه','Mill')}</td><td><b>${tx(s.name)}</b></td></tr>
    ${s.profile.map(r=>`<tr><td>${tx(r[0])}</td><td>${tx(r[1])}</td></tr>`).join('')}
    <tr><td>${L('مخاطب','User')}</td><td>${L('کارخانه‌ی نساجی (بافندگی، چاپ و تکمیل)','Textile mill (weaving, printing & finishing)')}</td></tr></tbody></table></div></div></div>`;
}
function millDone(a){
  const s=smp(); const secs=Math.round(((R.t1||Date.now())-R.t0)/1000);
  const b=[L('گزارش نبض بازار','Market Pulse brief'),L('تصمیم بیشتر / کمتر / توقف','MORE / REDUCE / STOP decisions'),L('۳ رنگ‌بندی فصل بعد','3 next-season colourways'),L('برنامه‌ی تخلیه‌ی انبار راکد + تطبیق B2B','Dead-stock plan + B2B matches'),L('گزارش عیب + امتیاز ۴ نقطه‌ای','Defect report + 4-point score'),L('تفکیک شید لات‌ها (ΔE)','Lot shade sorting (ΔE)'),L('فایل ماشین','Machine file')+' · '+s.machine.file.split('.').pop().toUpperCase()];
  return `<div class="oc final"${a}><div class="ok">✅</div><h2 class="gt">${L('از داده‌ی بازار تا ماشین — کامل شد','Market to machine — complete')}</h2><p>${L(`${N(secs)} ثانیه · ۶ ایجنت کارخانه · ۴ تأیید انسانی`,`${secs} s · 6 mill agents · 4 human approvals`)}</p>
   <div class="bundle">${b.map(x=>`<span class="tag" style="height:40px;font-size:17px">📦 ${x}</span>`).join('')}</div>
   <p style="margin-top:20px;font-size:17px;color:var(--dim)">${L('نام کارخانه فرضی است و همه‌ی مقادیر داده‌ی نمونه‌ی نمایشی‌اند؛ اتصال زنده در مرحله‌ی استقرار.','The mill name is fictional and all values are illustrative sample data; live connectors come with deployment.')}</p></div>`;
}
const modeSw=()=>`<div class="modesw" role="tablist"><button role="tab" data-mode="chain" aria-selected="${R.pmode==='chain'}" class="${R.pmode==='chain'?'on':''}">⛓️ ${L('زنجیره‌ی کامل','Full chain')}</button><button role="tab" data-mode="apparel" aria-selected="${R.pmode==='apparel'}" class="${R.pmode==='apparel'?'on':''}">👕 ${L('حالت پوشاک','Apparel mode')}</button><button role="tab" data-mode="mill" aria-selected="${R.pmode==='mill'}" class="${R.pmode==='mill'?'on':''}">🏭 ${L('حالت کارخانه نساجی','Mill mode')}</button></div>`;
function bindModeSw(){ $('#demo').querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>setPickMode(b.dataset.mode)); }
function setPickMode(m){ R.pmode=m==='mill'?'mill':m==='chain'?'chain':'apparel'; renderPick(); }
function openMill(){ R.pmode='mill'; R.view='pick'; openDemo(); }
function renderMillPick(){
  const ms=window.R2R_MILLS||{};
  $('#demo').innerHTML=`<div class="demo-pick"><div class="pickhd"><div class="kicker">${L('دموی زنده · حالت کارخانه نساجی','Live demo · Mill mode')}</div>${modeSw()}</div><h1 class="t" style="margin-bottom:10px">${L('یک کارخانه‌ی نمونه انتخاب کنید','Choose a sample mill')}</h1>
   <div style="display:flex;gap:18px;align-items:center">${MBADGE()}<span style="color:var(--dim);font-size:17px">${L('کلیدهای ۱ تا ۳ · حالت پوشاک با کلید <bdi>M</bdi>','Keys 1–3 · M = Apparel mode')}</span></div>
   <div class="samples mills">${MKEYS().map((k,i)=>{const m=ms[k];return `<div class="sample" role="button" tabindex="0" data-mill="${k}"><span class="num">${N(i+1)}</span><button class="zoom" ${lbA(m.swatch,tx(m.name))} title="${L('بزرگ‌نمایی','Enlarge')}">⤢</button><div class="im" style="background-image:url('${m.swatch}')"></div><span class="catb">${tx(m.cat)}</span><div class="tx"><h3>${tx(m.name)}</h3><p>${tx(m.short)}</p><p class="rl">❓ ${tx(m.profile[3][1])}</p></div></div>`;}).join('')}</div>
   <div class="millflow">${MAG.map(g=>`<span><b class="ltr">${g.id}</b> ${g.ic} ${tx(g.n)}</span>`).join('<i>→</i>')}<span class="g">🛡️ <b class="ltr">G1–G4</b></span></div></div>`;
  $('#demo').querySelectorAll('[data-mill]').forEach(b=>{b.onclick=e=>{ if(e.target.closest('[data-lb]')) return; startRun(ms[b.dataset.mill]); }; b.onkeydown=e=>{ if(e.target!==b) return; if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();startRun(ms[b.dataset.mill]);} };});
  bindModeSw();
}
/* ---------------- FULL CHAIN MODE (added; apparel & mill flows untouched) ---------------- */
const XAG=[
 {id:'X1',ic:'🧵',n:{fa:'طرح جدید + فایل ماشین کارخانه',en:'New design + mill machine file'}},
 {id:'X2',ic:'🚚',n:{fa:'رول از کارخانه خارج می‌شود',en:'The roll leaves the mill'}}];
const CGATES=[
 {id:'G1',n:{fa:'طرح و رنگ‌بندی تأیید شد',en:'Design & colourway approved'},own:{fa:'طراح ارشد + مدیر فروش کارخانه',en:'Mill chief designer + sales manager'},d:{fa:'پیش از صرف وقت ماشین و استرایک‌آف، سیگنال بازار و رنگ‌بندی انتخابی را انسان تأیید می‌کند.',en:'Before any machine time or strike-off is spent, a human approves the market signal and the chosen colourway.'}},
 {id:'G2',n:{fa:'کیفیت و شید آزاد شد — رول قابل ارسال است',en:'Quality & shade released — the roll may ship'},own:{fa:'مدیر کنترل کیفیت / آزمایشگاه رنگ کارخانه',en:'Mill QC manager / colour lab'},d:{fa:'عیب‌های کم‌اطمینان بازبینی می‌شوند؛ فقط لات‌های داخل تلرانس با گزارش کیفیت روی شناسنامه‌ی رول ارسال می‌شوند.',en:'Low-confidence defects are reviewed; only in-tolerance lots ship, with the QC report attached to the roll passport.'}},
 {id:'G3',n:{fa:'برنامه‌ی تولید پوشاک تأیید شد',en:'Apparel production plan approved'},own:{fa:'مدیر تولید تولیدی',en:'Apparel production manager'},d:{fa:'تعداد، سایزبندی و فهرست «تولید نکن» برای همین رول امضا می‌شود.',en:'Quantities, size curve and the do-not-produce list for this roll are signed off.'}},
 {id:'G4',n:{fa:'فایل‌های برش و محتوا آزاد شد',en:'Cutting & content files released'},own:{fa:'الگوساز / سالن برش + مدیر برند',en:'Pattern maker / cutting room + brand manager'},d:{fa:'فایل DXF و پست اینستاگرام فقط پس از تأیید انسانی منتشر یا به برش فرستاده می‌شوند.',en:'The DXF and the Instagram post are only sent to cutting or published after human approval.'}}];
const CSTEPS=['M1','M3','G1','X1','M5','G2','X2','A1','A3','A5','G3','A7','A6','G4','DONE'];
Object.assign(MSG,{
 X1:{fa:['الان داره طرح تکرارشونده‌ی بی‌درز رو با رنگ‌بندی انتخابی می‌سازه...','الان داره فایل ماشین کارخانه رو آماده می‌کنه...'],en:['Building the seamless repeat in the chosen colourway...','Preparing the mill’s machine file...']},
 X2:{fa:['الان داره شناسنامه‌ی دیجیتال و گزارش کیفیت رو به رول می‌چسبونه...','رول داره از کارخانه به تولیدی پوشاک می‌ره...'],en:['Attaching the digital passport and QC report to the roll...','The roll is travelling from the mill to the apparel maker...']}
});
const isChain=()=>!!(R.sample&&R.sample.chain);
const CKEYS=()=>Object.keys(window.R2R_CHAINS||{}).sort((a,b)=>+a.slice(1)-+b.slice(1));
const chainSide=k=>{const i=CSTEPS.indexOf(k);return i>=0&&i<=CSTEPS.indexOf('X2')?'mill':'app';};
function chainIn(a){
  const s=smp();
  return `<div class="oc"${a}><div class="oh"><span class="aid">IN</span><h3>⛓️ ${L('زنجیره‌ی کامل: از نبض بازار تا پست اینستاگرام','Full chain: from market pulse to Instagram post')}</h3>${MBADGE()}</div>
   <div class="chin"><div class="side"><img src="${s.cover}" alt="" ${lbA(s.cover,tx(s.millName))}><b>🏭 ${tx(s.millName)}</b><span>${L('کارخانه: بازار ← طرح ← ماشین ← کیفیت','Mill: market → design → machine → quality')}</span></div>
    <div class="mid"><div class="rl0" style="background-image:url('${s.design.repeat}')"></div><span>${L('یک رول، یک شناسنامه','One roll, one passport')}</span><i>→</i></div>
    <div class="side"><img src="${s.render}" alt="" style="object-position:top" ${lbA(s.render,tx(s.maker))}><b>👗 ${tx(s.maker)}</b><span>${L('تولیدی: شناسنامه ← طرح لباس ← تولید ← محتوا','Maker: passport → garments → plan → content')}</span></div></div></div>`;
}
function chainCard(k,a){
  const s=smp(), d=s.design, ag=XAG[+k[1]-1];
  if(k==='X1'){ const mm=s.millMachine;
    return `<div class="oc"${a}>${hdr('X1',ag.ic+' '+L('طرح جدید پارچه + فایل ماشین کارخانه','New fabric design + mill machine file'),MBADGE())}
    <div class="x1"><div class="vis tile x1t" style="background-image:url('${d.repeat}')" ${lbA(d.repeat,d.code+' · '+tx(d.rep),1)}><div class="cap">🔁 ${L('طرح تکرارشونده‌ی بی‌درز','Seamless repeat')} · <span class="ltr">${d.code}</span></div></div>
     <div><table class="tb"><tbody><tr><td>${L('کد طرح','Design code')}</td><td><b class="ltr">${d.code}</b></td></tr><tr><td>${L('طرح و رنگ','Design & colour')}</td><td>${tx(d.n)}</td></tr><tr><td>${L('پارچه','Base')}</td><td class="mono">${d.spec}</td></tr><tr><td>${L('تکرار','Repeat')}</td><td>${tx(d.rep)}</td></tr>
      <tr><td>${L('رنگ‌های طرح','Design colours')}</td><td><div class="pal">${d.colours.map(c=>`<i style="background:${c}" title="${c}"></i>`).join('')}</div></td></tr></tbody></table>
      <div class="file" style="margin-top:14px"><div class="fi">${mm.file.split('.').pop().toUpperCase()}</div><div><b class="mono">${mm.file}</b><p>${tx(mm.target)}</p></div></div>
      <ul>${mm.checks.map(x=>`<li>${tx(x)}</li>`).join('')}</ul></div></div></div>`;}
  if(k==='X2'){ const still=a?' still':''; const r=s.roll;
    return `<div class="oc ship"${a}>${hdr('X2',ag.ic+' '+L('رول از کارخانه خارج می‌شود','The roll leaves the mill'),'')}
    <div class="trk${still}"><div class="end e0"><span>🏭</span><b>${tx(s.millName)}</b></div><div class="line"><i></i></div>
     <div class="roll" style="background-image:url('${d.repeat}')"><em>🪪 QR</em></div><div class="end e1"><span>👗</span><b>${tx(s.maker)}</b></div></div>
    <div class="shipchips${still}"><span style="--d:.2s">📦 ${L('بسته‌بندی','Packed')} · <b class="ltr">${s.rollCode}</b></span><span style="--d:1.2s">🪪 ${L('شناسنامه + گزارش کیفیت + ΔE روی QR','Passport + QC report + ΔE on the QR')}</span><span style="--d:2.2s">🚚 ${L('ارسال','Shipped')} · ${L(`${N(r.len)} متر × ${N(r.width)} سانتی‌متر`,`${r.len} m × ${r.width} cm`)}</span><span style="--d:3.4s">📥 ${L('تحویل به تولیدی — شناسنامه از پیش پر شده است','Received by the maker — the passport arrives pre-filled')}</span></div>
    <p class="mnote">${tx(s.ship)}</p></div>`;}
  return '';
}
function chainDone(a){
  const s=smp(); const secs=Math.round(((R.t1||Date.now())-R.t0)/1000); const p1=s.proposals[0];
  const mo=[L('نبض بازار: طرح، رنگ، الیاف','Market pulse: designs, colours, fibres'),L('تصمیم بیشتر / کمتر / توقف','MORE / REDUCE / STOP decisions'),L('طرح جدید + رنگ‌بندی','New design + colourway')+` · <span class="ltr">${s.design.code}</span>`,L('فایل ماشین','Machine file')+` · <span class="mono">${s.millMachine.file}</span>`,L('گزارش عیب + امتیاز ۴ نقطه‌ای + ΔE','Defect report + 4-point score + ΔE')];
  const ao=[L('شناسنامه‌ی پارچه (از پیش پر شده)','Fabric passport (pre-filled)'),L('۳ پیشنهاد لباس (۱ رد شده) + رندر','3 garment proposals (1 rejected) + render'),L('برنامه‌ی تولید + «تولید نکن»','Production plan + do-not-produce'),L('فایل برش','Cutting file')+` · <span class="mono">${s.machine.file}</span>`,L('پست اینستاگرام فارسی','Persian Instagram post')];
  const units=s.proposals.reduce((t,p)=>t+p.units,0);
  return `<div class="oc final chainfin"${a}><div class="ok">✅</div><h2 class="gt">${L('زنجیره‌ی کامل — از نبض بازار تا پست اینستاگرام','Full chain — from market pulse to Instagram post')}</h2>
   <p>${L(`${N(secs)} ثانیه · ۹ مرحله‌ی هوش مصنوعی + جابه‌جایی رول · ۴ تأیید انسانی`,`${secs} s · 9 AI steps + the roll handoff · 4 human approvals`)}</p>
   <div class="cfin"><div class="col"><h3>🏭 ${tx(s.millName)}</h3><div class="th"><div class="tl" style="background-image:url('${s.design.repeat}')" ${lbA(s.design.repeat,s.design.code,1)}></div><img src="${s.quality.boxed}" alt="" ${lbA(s.quality.boxed,tx(s.quality.insp))}></div><ul>${mo.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="arrow"><div class="roll sm" style="background-image:url('${s.design.repeat}')"></div><b class="ltr">${s.rollCode}</b><span>${L('یک رول · یک شناسنامه','one roll · one passport')}</span><i>→</i></div>
    <div class="col"><h3>👗 ${tx(s.maker)}</h3><div class="th"><img src="${s.render}" alt="" style="object-position:top" ${lbA(s.render,tx(s.renderCap))}><img src="${p1.img}" alt="" style="object-position:top" ${lbA(p1.img,p1.id+' · '+tx(p1.name))}></div><ul>${ao.map(x=>`<li>${x}</li>`).join('')}</ul></div></div>
   <div class="cval"><span>📈 ${L('کارخانه: می‌داند چه ببافد/چاپ کند و چه را متوقف کند','Mill: knows what to weave/print and what to stop')}</span><span>🧾 ${L('تولیدی:','Maker:')} ${N(units)} ${L('لباس از یک رول، بدون حدس','garments from one roll, no guesswork')}</span><span>🔗 ${L('داده‌ی کیفیت همراه رول می‌رود — دوباره‌کاری نیست','Quality data travels with the roll — no rework')}</span></div>
   <p style="margin-top:14px;font-size:16px;color:var(--dim)">${L('نام‌ها فرضی‌اند و همه‌ی مقادیر داده‌ی نمونه‌ی نمایشی‌اند؛ اتصال زنده در مرحله‌ی استقرار.','Names are fictional and all values are illustrative sample data; live connectors come with deployment.')}</p></div>`;
}
function openChain(){ R.pmode='chain'; R.view='pick'; openDemo(); }
function openApparel(){ R.pmode='apparel'; R.view='pick'; openDemo(); }
function renderChainPick(){
  const cs=window.R2R_CHAINS||{};
  $('#demo').innerHTML=`<div class="demo-pick"><div class="pickhd"><div class="kicker">${L('دموی زنده · زنجیره‌ی کامل','Live demo · Full chain')}</div>${modeSw()}</div><h1 class="t" style="margin-bottom:10px">${L('یک زنجیره انتخاب کنید: کارخانه ← تولیدی پوشاک','Choose a chain: mill → apparel maker')}</h1>
   <div style="display:flex;gap:18px;align-items:center">${MBADGE()}<span style="color:var(--dim);font-size:17px">${L('کلیدهای ۱ و ۲ · پوشاک با کلید <bdi>A</bdi> · کارخانه با کلید <bdi>M</bdi>','Keys 1–2 · A = Apparel · M = Mill')}</span></div>
   <div class="samples chains">${CKEYS().map((k,i)=>{const c=cs[k];return `<div class="sample" role="button" tabindex="0" data-chain="${k}"><span class="num">${N(i+1)}</span><button class="zoom" ${lbA(c.render,tx(c.renderCap))} title="${L('بزرگ‌نمایی','Enlarge')}">⤢</button>
     <div class="jr"><div style="background-image:url('${c.cover}')"></div><i>→</i><div style="background-image:url('${c.design.repeat}')"></div><i>→</i><div style="background-image:url('${c.render}');background-position:top"></div></div><span class="catb">${tx(c.cat)}</span>
     <div class="tx"><h3>${tx(c.name)}</h3><p>${tx(c.short)}</p><p class="rl">⏱ ${L('حدود ۶ تا ۸ دقیقه · ۱۴ مرحله · ۴ تأیید انسانی','About 6–8 min · 14 steps · 4 human approvals')}</p></div></div>`;}).join('')}</div>
   <div class="millflow">${['M1 📡','M3 ⚖️','G1','X1 🧵','M5 👁️','G2','X2 🚚','A1 🪪','A3 🎨','A5 ⚖️','G3','A7 🏭','A6 📱','G4'].map(x=>`<span class="${x[0]==='G'?'g':''}"><b class="ltr">${x}</b></span>`).join('<i>→</i>')}</div></div>`;
  $('#demo').querySelectorAll('[data-chain]').forEach(b=>{b.onclick=e=>{ if(e.target.closest('[data-lb]')) return; startRun(cs[b.dataset.chain]); }; b.onkeydown=e=>{ if(e.target!==b) return; if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();startRun(cs[b.dataset.chain]);} };});
  bindModeSw();
}
/* ---------------- CHROME / LANG / KEYS ---------------- */
const isStandalone=()=>{try{return (window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||(window.matchMedia&&matchMedia('(display-mode: fullscreen)').matches)||navigator.standalone===true;}catch(e){return false;}};
const fsEl=()=>document.fullscreenElement||document.webkitFullscreenElement||null;
const fsOK=()=>!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);
S.cached=false;
function applyLang(){
  const rtl=S.lang==='fa';
  document.documentElement.lang=S.lang; document.documentElement.dir=rtl?'rtl':'ltr';
  try{localStorage.setItem('r2r_lang',S.lang);}catch(e){}
  $('#lfa').classList.toggle('on',rtl); $('#len').classList.toggle('on',!rtl);
  $('#brandSub').textContent=L('رول تا تولید · همایش ملی نساجی و پوشاک','Roll-to-Run · NCTAF4');
  $('#btnSlides').textContent=L('اسلایدها','Slides'); $('#btnDemo').textContent=L('دموی زنده','Live demo');
  $('#btnLite').textContent=L('سبک','Lite'); $('#btnLite').title=L('حالت سبک: خاموش کردن افکت‌های سنگین','Lite mode: turn off heavy effects');
  $('#btnFS').title=L('تمام‌صفحه','Fullscreen'); $('#btnHelp').title=L('راهنما','Help');
  $('#bPrev').textContent=rtl?'→':'←'; $('#bNext').textContent=rtl?'←':'→';
  $('#bPrev').title=L('اسلاید قبلی','Previous slide'); $('#bNext').title=L('اسلاید بعدی','Next slide');
  $('#foot').textContent=L('امین بختیاری · NCTAF4 · ۱۸ آذر ۱۴۰۵','Amin Bakhtiari · NCTAF4 · 9 Dec 2026');
  $('#rot').textContent=L('📱 برای نمایش بهتر، دستگاه را افقی بچرخانید','📱 Rotate to landscape for the best view');
  $('#lbX').title=L('بستن','Close'); $('#lbPrev').textContent=rtl?'›':'‹'; $('#lbNext').textContent=rtl?'‹':'›';
  updNet(); renderHelp(); renderSlides();
  if(S.mode==='demo'){ if(R.view==='pick') renderPick(); else renderRun(); }
  updChrome(); updFS(); if(LB.open) lbShow();
}
function setLang(l){ if(S.lang===l)return; S.lang=l; applyLang(); }
function updNet(){
  const on=navigator.onLine;
  const c=location.protocol==='file:'?L('فایل محلی','local file'):(S.cached?L('ذخیره برای آفلاین ✓','saved for offline ✓'):L('در حال ذخیره برای آفلاین…','caching for offline…'));
  $('#net').innerHTML=`<span class="dot"></span>${L('آماده‌ی کار آفلاین','Offline-ready')}<span style="color:var(--dim)">· ${c} · ${on?L('اینترنت: وصل','net: online'):L('اینترنت: قطع','net: offline')}</span>`;
}
function renderHelp(){
  const touch=L('روی آیپد: برای اسلاید بعدی/قبلی انگشت را به چپ/راست بکشید یا دکمه‌های پایین صفحه را بزنید. روی هر تصویر بزنید تا بزرگ شود.','On iPad: swipe left/right or use the arrows at the bottom to change slides. Tap any image to enlarge it.');
  const rows=[['PageDown / Space / ↓',L('بعدی (در دمو: ادامه / تأیید)','Next (demo: advance / approve)')],['PageUp / ↑',L('قبلی (در دمو: انتخاب پارچه)','Previous (demo: back to fabrics)')],[S.lang==='fa'?'← / →':'→ / ←',L('بعدی / قبلی (جهت با زبان عوض می‌شود)','Next / previous (direction follows language)')],['D',L('دموی زنده','Live demo')],['Esc / S',L('بازگشت','Back')],['1 … 9 · U',L('انتخاب پارچه در دمو · U = آپلود عکس','Pick a fabric in the demo · U = upload a photo')],['C',L('زنجیره‌ی کامل کارخانه ← پوشاک (در دمو: ۱–۲ = زنجیره)','Full chain mill → apparel (in the demo: 1–2 = chain)')],['A',L('حالت پوشاک','Apparel mode')],['M',L('حالت کارخانه نساجی (در دمو: تعویض پوشاک / کارخانه · ۱–۳ = کارخانه)','Mill mode (in the demo: toggle Apparel / Mill · 1–3 = mill)')],['L',L('تغییر زبان فارسی / English','Toggle FA / EN')],['F',L('تمام‌صفحه','Fullscreen')],['Home / End',L('اولین / آخرین اسلاید','First / last slide')],['?',L('راهنما','Help')]];
  $('#help').innerHTML=`<div class="card"><button class="hx" aria-label="close">✕</button><h3>⌨️ ${L('راهنما و کلیدها','Help & shortcuts')}</h3><p style="margin-bottom:12px">👆 ${touch}</p><table>${rows.map(r=>`<tr><td><kbd>${r[0]}</kbd></td><td>${r[1]}</td></tr>`).join('')}</table><p style="margin-top:16px;font-size:17px">${L('برای بستن، هر جا بزنید یا هر کلیدی را فشار دهید.','Tap anywhere or press any key to close.')}</p></div>`;
}
function fit(){const w=window.innerWidth,h=window.innerHeight;const sc=Math.min(w/1920,h/1080);$('#stage').style.transform=`scale(${sc})`;S.scale=sc;
  /* keep every chrome tap target >=44 CSS px even when the stage is scaled down (iPad portrait) */
  document.documentElement.style.setProperty('--hit',Math.max(16,Math.ceil((46/sc-54)/2))+'px');}
function toast(msg,ms){const t=$('#toast');t.innerHTML=msg;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),ms||4200);}
function updFS(){
  const b=$('#btnFS'); if(!b) return;
  b.style.display=isStandalone()?'none':'';
  b.textContent=fsEl()?'🗗':'⛶';
}
function toggleFS(){
  try{
    if(fsEl()){ (document.exitFullscreen||document.webkitExitFullscreen).call(document); return; }
    const el=document.documentElement; const rq=el.requestFullscreen||el.webkitRequestFullscreen;
    if(!rq||!fsOK()){ toast(L('این مرورگر تمام‌صفحه را پشتیبانی نمی‌کند. روی آیپد: Safari ← Share ← Add to Home Screen و از آیکون صفحه‌ی اصلی باز کنید.','This browser has no fullscreen API. On iPad: Safari → Share → Add to Home Screen, then open from the icon.'),6500); return; }
    const p=rq.call(el); if(p&&p.catch)p.catch(()=>toast(L('تمام‌صفحه انجام نشد.','Fullscreen was blocked.')));
  }catch(e){ toast(L('تمام‌صفحه انجام نشد.','Fullscreen was blocked.')); }
}
function setLite(on,save){ document.documentElement.classList.toggle('lite',on); $('#btnLite').classList.toggle('hot',on); if(save){try{localStorage.setItem('r2r_lite',on?'1':'0');}catch(e){}} }

/* ---------------- LIGHTBOX ---------------- */
const LB={open:false,items:[],i:0,wasPaused:false};
function lbOpen(el){
  const scope=el.closest('.oc')||el.closest('.rail')||el.closest('.samples')||el.closest('.slide')||document;
  const items=[...scope.querySelectorAll('[data-lb]')]; const seen=new Set(); LB.items=[];
  items.forEach(x=>{const k=x.dataset.lb+'|'+x.dataset.tile; if(seen.has(k))return; seen.add(k); LB.items.push({src:x.dataset.lb,cap:x.dataset.cap||'',tile:!!x.dataset.tile});});
  LB.i=Math.max(0,LB.items.findIndex(it=>it.src===el.dataset.lb&&it.tile===!!el.dataset.tile));
  LB.open=true; LB.wasPaused=R.paused; R.paused=true;
  $('#lb').classList.add('on'); $('#lb').setAttribute('aria-hidden','false'); lbShow();
}
function lbShow(){
  const it=LB.items[LB.i]; if(!it) return;
  const im=$('#lbImg'), tl=$('#lbTile');
  if(it.tile){ im.style.display='none'; tl.style.display='block'; tl.style.backgroundImage=`url("${it.src}")`; }
  else { tl.style.display='none'; im.style.display='block'; im.src=it.src; }
  $('#lbCap').textContent=it.cap; const n=LB.items.length;
  $('#lbCount').textContent=n>1?`${N(LB.i+1)} / ${N(n)}`:'';
  $('#lbPrev').style.visibility=n>1?'visible':'hidden'; $('#lbNext').style.visibility=n>1?'visible':'hidden';
}
function lbStep(d){ const n=LB.items.length; if(n<2) return; LB.i=(LB.i+d+n)%n; lbShow(); }
function lbClose(){ if(!LB.open) return; LB.open=false; $('#lb').classList.remove('on'); $('#lb').setAttribute('aria-hidden','true'); R.paused=LB.wasPaused; const b=$('#bPause'); if(b) b.textContent=R.paused?'▶':'⏸'; }
document.addEventListener('click',e=>{ const t=e.target.closest&&e.target.closest('[data-lb]'); if(t&&!LB.open){ e.preventDefault(); e.stopPropagation(); lbOpen(t); } },true);

/* ---------------- KEYS ---------------- */
document.addEventListener('keydown',e=>{
  const h=$('#help'); if(h.classList.contains('on')){h.classList.remove('on');e.preventDefault();return;}
  if(e.ctrlKey||e.metaKey||e.altKey) return;
  if(e.target&&e.target.tagName==='INPUT') return;
  const k=e.key, rtl=S.lang==='fa';
  let dir=0;
  if(k==='PageDown'||k===' '||k==='ArrowDown') dir=1;
  else if(k==='PageUp'||k==='ArrowUp') dir=-1;
  else if(k==='ArrowLeft') dir=rtl?1:-1;
  else if(k==='ArrowRight') dir=rtl?-1:1;
  if(LB.open){ e.preventDefault(); if(k==='Escape'||k==='Enter') lbClose(); else if(dir) lbStep(dir); return; }
  const fe=e.target&&e.target.closest&&e.target.closest('[data-lb]');
  if(fe&&(k==='Enter')){ e.preventDefault(); lbOpen(fe); return; }
  if(k==='?'){h.classList.add('on');e.preventDefault();return;}
  if(k==='l'||k==='L'){setLang(S.lang==='fa'?'en':'fa');return;}
  if(k==='f'||k==='F'){toggleFS();return;}
  if(S.mode==='slides'){
    if(dir){go(S.slide+dir);e.preventDefault();return;}
    if(k==='Home'){go(0);return;} if(k==='End'){go(SL.length-1);return;}
    if(k==='d'||k==='D'){openDemo();return;}
    if(k==='m'||k==='M'){openMill();return;}
    if(k==='c'||k==='C'){openChain();return;}
    if(k==='a'||k==='A'){openApparel();return;}
    if(k==='Enter'&&$('#slides .slide.on [data-act=demo]')){e.preventDefault();openChain();return;}
  } else {
    if(k==='Escape'||k==='s'||k==='S'){ if(R.view==='run'&&k==='Escape') renderPick(); else closeDemo(); return; }
    if(R.view==='pick'){
      if(k==='m'||k==='M'){setPickMode(R.pmode==='mill'?'apparel':'mill');return;}
      if(k==='c'||k==='C'){setPickMode('chain');return;}
      if(k==='a'||k==='A'){setPickMode('apparel');return;}
      if(R.pmode==='chain'){ if(/^[1-9]$/.test(k)){const id=CKEYS()[+k-1]; if(id) startRun(window.R2R_CHAINS[id]); return;} if(k==='u'||k==='U'||k==='0') return; }
      if(R.pmode==='mill'){ if(/^[1-9]$/.test(k)){const id=MKEYS()[+k-1]; if(id) startRun(window.R2R_MILLS[id]); return;} if(k==='u'||k==='U'||k==='0') return; }
      if(/^[1-9]$/.test(k)){const id=SKEYS()[+k-1]; if(id){startRun(window.R2R_SAMPLES[id]);return;}}
      if(k==='u'||k==='U'||k==='0'){$('#file').click();return;}
      if(dir===1){e.preventDefault();closeDemo();go(S.slide+1);return;}
      if(dir===-1){e.preventDefault();closeDemo();return;}
    } else {
      if(dir===1||k==='Enter'){e.preventDefault();advance();return;}
      if(dir===-1){e.preventDefault();renderPick();return;}
    }
  }
});

/* ---------------- TOUCH ---------------- */
function swipe(el,cb){
  let x0=0,y0=0,t0=0,ok=false;
  el.addEventListener('touchstart',e=>{ if(e.touches.length!==1){ok=false;return;} const t=e.touches[0]; x0=t.clientX; y0=t.clientY; t0=Date.now(); ok=true; },{passive:true});
  el.addEventListener('touchend',e=>{ if(!ok) return; ok=false; const t=e.changedTouches[0]; const dx=t.clientX-x0, dy=t.clientY-y0;
    if(Date.now()-t0<800 && Math.abs(dx)>50 && Math.abs(dx)>1.5*Math.abs(dy)) cb(dx,e); },{passive:true});
}
function swipeDir(dx){ const rtl=S.lang==='fa'; return dx<0 ? (rtl?-1:1) : (rtl?1:-1); } /* LTR: swipe left = next; RTL: swipe right = next */

window.addEventListener('resize',()=>{fit();updFS();}); window.addEventListener('orientationchange',()=>setTimeout(fit,250));
if(window.visualViewport) visualViewport.addEventListener('resize',fit);
window.addEventListener('online',updNet); window.addEventListener('offline',updNet);
document.addEventListener('fullscreenchange',updFS); document.addEventListener('webkitfullscreenchange',updFS);

function init(){
  $('#lfa').onclick=()=>setLang('fa'); $('#len').onclick=()=>setLang('en');
  $('#btnSlides').onclick=()=>{ if(S.mode==='demo') closeDemo(); else go(S.slide); };
  $('#btnDemo').onclick=()=>openDemo();
  $('#btnHelp').onclick=()=>$('#help').classList.add('on');
  $('#btnFS').onclick=toggleFS;
  $('#btnLite').onclick=()=>setLite(!document.documentElement.classList.contains('lite'),true);
  $('#bPrev').onclick=()=>go(S.slide-1); $('#bNext').onclick=()=>go(S.slide+1);
  $('#help').onclick=()=>$('#help').classList.remove('on');
  $('#lbX').onclick=lbClose; $('#lbPrev').onclick=e=>{e.stopPropagation();lbStep(-1);}; $('#lbNext').onclick=e=>{e.stopPropagation();lbStep(1);};
  $('#lb').addEventListener('click',e=>{ if(e.target.closest('#lbPrev,#lbNext,#lbImg,#lbTile')) return; lbClose(); });
  swipe($('#lb'),dx=>lbStep(swipeDir(dx)));
  swipe($('#viewport'),(dx,e)=>{ if(LB.open||S.mode!=='slides') return; go(S.slide+swipeDir(dx)); });
  let lite=null; try{lite=localStorage.getItem('r2r_lite');}catch(e){}
  const rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  setLite(lite==='1'||(lite===null&&rm),false);
  fit(); applyLang();
  if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
    navigator.serviceWorker.register('sw.js',{scope:'./'}).then(()=>navigator.serviceWorker.ready).then(()=>{
      const chk=()=>caches.open(window.R2R_CACHE).then(c=>c.match('index.html')).then(r=>{ if(r){S.cached=true;updNet();} else setTimeout(chk,1500); });
      chk();
    }).catch(()=>{});
  }
  window.R2R={openChain,openApparel,chains:window.R2R_CHAINS,openMill,setPickMode,mills:window.R2R_MILLS,go,openDemo,closeDemo,startRun,advance,approve,setLang,setLite,lbClose,state:S,run:R,lb:LB,samples:window.R2R_SAMPLES};
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
})();
