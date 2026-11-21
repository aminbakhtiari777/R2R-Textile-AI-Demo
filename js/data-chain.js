/* R2R demo — FULL CHAIN scenarios (mill → apparel maker). Names are FICTIONAL; all values are ILLUSTRATIVE sample data. */
(function(){
const B=(fa,en)=>({fa,en}); const M=window.R2R_MILLS||{};
const pick=(o,ks)=>{const r={};ks.forEach(k=>{if(o&&o[k]!==undefined)r[k]=o[k];});return r;};
const MILLK=['pulse','portfolio','newArt','colourways','dead','quality'];
const P=(a,v,t,m,lab)=>Object.assign({a,v,t,m},lab?{lab}:{});
const MLAB=B('گزارش آزمایشگاه کارخانه (در شناسنامه)','Mill lab report (in the passport)');
window.R2R_CHAINS={
c1: Object.assign({}, pick(M.m2,MILLK), {
  id:'c1', chain:true, kind:'print', mill:false, pickCw:0, pick:0, cover:'assets/img/c1_mill.jpg',
  ship:B('از اینجا تولیدی همان رول را با شناسنامه‌ی کامل کارخانه دریافت می‌کند: جنس، گرماژ، آبرفتگی و ثبات رنگ همه T4 — دیگر لازم نیست از روی عکس حدس بزند.','From here the maker receives this exact roll with the mill’s full passport: fibre, mass, shrinkage and fastness are all T4 — no more guessing from a photo.'),
  millName:B('نگارین (نام فرضی)','Negarin (fictional)'), maker:B('تولیدی مانتو «آیلا» (نام فرضی)','“Ayla” manto maker (fictional)'), makerName:B('تولیدی مانتو «آیلا» (نام فرضی)','“Ayla” manto maker (fictional)'),
  swatch:'assets/img/m2_cw1.jpg', millCover:'assets/img/c1_mill.jpg',
  name:B('زنجیره‌ی کامل: ویسکوز چاپی کاشی','Full chain: tile-print viscose'),
  short:B('نگارین (چاپ) ← تولیدی مانتو · طرح کاشی سفالی','Negarin (print) → manto maker · terracotta tile'),
  cat:B('چاپ ← پوشاک','Print → apparel'),
  design:{code:'NG-G40-TC',spec:'CV crepe · 120 g/m² · 145 cm',rep:B('مربعی ۶۴ × ۶۴ cm · بدون جهت','Square 64 × 64 cm · non-directional'),colours:['#c8664a','#86865a','#f6efe0','#efe4cf'],repeat:'assets/img/c1_repeat.jpg',img:'assets/img/m2_cw1.jpg',
    n:B('هندسی کاشی ایرانی · سفالی و زیتونی روی کرم','Persian-tile geometric · terracotta & olive on cream'),
    rows:[[B('تکرار','Repeat'),B('مربعی ۶۴ × ۶۴ cm — بدون درز، بدون جهت','Square 64 × 64 cm — seamless, non-directional')],[B('رنگ‌ها','Colours'),B('۴ رنگ تخت (ایندکس‌شده) + زمینه','4 flat indexed colours + ground')],[B('پارچه‌ی پایه','Base fabric'),B('کرپ ویسکوز ۱۲۰ g/m² · ۱۴۵ cm (از موجودی راکد GR-CV1)','Viscose crepe 120 g/m² · 145 cm (from dead stock GR-CV1)')],[B('ریشه‌ی تصمیم','Decision trail'),B('M1 هندسی کاشی ‎+۳۱٪‎ · رنگ سفالی ‎+۱۹٪‎ · M3 طرح جدید','M1 tile geometric +31% · terracotta +19% · M3 new article')]]},
  millMachine:M.m2&&M.m2.machine,
  roll:{len:60,width:145,usable:141,reserve:3}, rollCode:'NG-G40-TC · #0412',
  passport:[
    P(B('ساختار','Construction'),B('کرپ تاری‌پودی، چاپ دیجیتال رنگدانه‌ای/راکتیو','Woven crepe, digitally printed (reactive)'),'T4',B('برگه‌ی فنی کارخانه','Mill tech sheet')),
    P(B('جنس الیاف','Fibre'),B('۱۰۰٪ ویسکوز','100% viscose'),'T4',MLAB),
    P(B('گرماژ','Mass per area'),B('۱۲۰ g/m²','120 g/m²'),'T4',MLAB),
    P(B('آبرفتگی','Shrinkage'),B('تار ۳٪ · پود ۲٪','Warp 3% · weft 2%'),'T4',MLAB),
    P(B('ثبات رنگ شست‌وشو','Wash fastness'),B('درجه‌ی ۴ (۳۰°C)','Grade 4 (30 °C)'),'T4',MLAB),
    P(B('شید رول','Roll shade'),B('گروه A · ΔE₀₀ ۰٫۷ نسبت به استاندارد','Group A · ΔE₀₀ 0.7 vs standard'),'T4',B('M5 + اسپکتروفتومتر','M5 + spectrophotometer')),
    P(B('عیب رول','Roll defects'),B('۳٫۲ امتیاز / ۱۰۰ یارد² — درجه‌ی یک','3.2 pts / 100 yd² — first quality'),'T4',B('گزارش بازرسی M5','M5 inspection report')),
    P(B('افتادگی (Drape)','Drape'),B('بسیار روان — بدون فرم‌پذیری','Very fluid — no structure'),'T2',B('تصویر + دست‌خور','Image + hand feel'),'BS 5058')],
  proposals:[
    {id:'P1',img:'assets/img/c1_p1.jpg',name:B('مانتو بلند جلوباز با آستین گشاد','Long open-front manto, wide sleeves'),fit:B('قبول — افتادگی روان کرپ ویسکوز برای فرم آزاد ایده‌آل است','Pass — fluid viscose crepe is ideal for a relaxed silhouette'),dec:'produce',cons:2.4,units:14,sizes:{S:3,M:5,L:4,XL:2}},
    {id:'P2',img:'assets/img/c1_p2.jpg',name:B('پیراهن بلند کمربنددار','Belted maxi shirt dress'),fit:B('قبول — تطبیق طرح در جلو لازم است','Pass — needs pattern matching at centre front'),dec:'limited',cons:3.0,units:7,sizes:{S:2,M:3,L:2}},
    {id:'P3',img:'assets/img/c1_p3.jpg',name:B('کت‌وشلوار فرم‌دار با سرشانه','Structured tailored suit'),fit:B('رد — پارچه فرم نمی‌گیرد','Fail — the fabric cannot hold structure'),dec:'no',cons:0,units:0,why:B('کرپ ویسکوز ۱۲۰ g/m² بسیار روان است؛ سرشانه و یقه‌ی فرم‌دار فقط با لایی سنگین ممکن است که دست‌خور و افتادگی را از بین می‌برد. این تصمیم مستقیماً از شناسنامه‌ی کارخانه (گرماژ T4، افتادگی T2) می‌آید.','120 g/m² viscose crepe is very fluid; sharp shoulders and lapels would need heavy fusing that kills the hand and drape. This comes straight from the mill passport (mass T4, drape T2).')}],
  render:'assets/img/c1_render.jpg', renderCap:B('رندر روی مدل — P1 با همان طرح NG-G40-TC','On-model render — P1 in the same NG-G40-TC print'),
  repeat:'assets/img/c1_repeat.jpg', repeatCap:B('طرح تکرارشونده‌ی کارخانه — همان فایل چاپ','The mill’s repeat — the same print file'),
  marker:{fa:['تطبیق طرح در خط وسط جلو و جیب‌ها (تکرار ۶۴ cm)','جبران آبرفتگی از شناسنامه: تار ×۱/(۱−۰٫۰۳) · پود ×۱/(۱−۰٫۰۲)','برش دوطرفه مجاز (طرح بدون جهت)'],en:['Pattern match at centre front and pockets (64 cm repeat)','Shrinkage from the passport: warp ×1/(1−0.03) · weft ×1/(1−0.02)','Two-way lay allowed (non-directional print)']},
  dnp:{fa:['کت و کت‌وشلوار فرم‌دار','برچسب «شست‌وشو با آب داغ / خشک‌کن»','برش بدون تطبیق طرح در جلو'],en:['Structured jackets and suits','“Hot wash / tumble dry” care label','Cutting without front pattern matching']},
  machine:{file:'R2R_C1_NG-G40_manto_v1.dxf',target:B('الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber','Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber'),checks:{fa:['سایزبندی S تا XL','مارکر با تطبیق طرح · عرض مفید ۱۴۱ cm','شناسه‌ی رول NG-G40-TC #0412 در فایل','بدون ارسال خودکار — تأیید G4'],en:['Grading S–XL','Pattern-matched marker · usable width 141 cm','Roll ID NG-G40-TC #0412 embedded','No auto-send — G4 approval']}},
  qc:B('—','—'),
  caption:{fa:'✨ کالکشن «کاشی» رسید!\nمانتو بلند جلوباز با طرح کاشی ایرانی، رنگ سفالی و زیتونی 🧡\n۱۰۰٪ ویسکوز — خنک و روان\n📏 سایز S تا XL · تعداد محدود\n🧺 شست‌وشو با آب سرد\n#مانتو #مانتو_بلند #طرح_کاشی #ویسکوز',en:'✨ The “Kashi” collection is here!\nLong open-front manto in a Persian-tile print, terracotta & olive 🧡\n100% viscose — cool and fluid\n📏 Sizes S–XL · limited run\n🧺 Cold wash\n#manto #longmanto #tileprint #viscose'},
  claim:B('«۱۰۰٪ ویسکوز» مجاز است چون جنس در شناسنامه‌ی کارخانه T4 است (گزارش آزمایشگاه). «ضد چروک» یا «بدون اتو» مجاز نیست.','“100% viscose” is allowed because fibre is T4 in the mill passport (lab report). “Anti-wrinkle” or “non-iron” is not.')
}),
c2: Object.assign({}, pick(M.m3,['portfolio','colourways','dead']), {
  id:'c2', chain:true, kind:'jacquard', mill:false, pickCw:0, pick:0, cover:'assets/img/m3_cover.jpg',
  ship:B('از اینجا تولیدی همان رول را با شناسنامه‌ی کامل کارخانه دریافت می‌کند: ساختار ژاکارد، الیاف، گرماژ و پرزدهی T4 — و طول پرش برای ریسک گیرکردن نخ.','From here the maker receives this exact roll with the mill’s full passport: jacquard construction, fibre, mass and pilling are T4 — plus float length for snag risk.'),
  millName:B('ترمه‌خانه (نام فرضی)','Termeh-Khaneh (fictional)'), maker:B('تولیدی پالتو «بارین» (نام فرضی)','“Barin” coat maker (fictional)'), makerName:B('تولیدی پالتو «بارین» (نام فرضی)','“Barin” coat maker (fictional)'),
  swatch:'assets/img/m3_cw1.jpg', millCover:'assets/img/m3_cover.jpg',
  name:B('زنجیره‌ی کامل: ژاکارد لوزی','Full chain: lattice jacquard'),
  short:B('ترمه‌خانه (ژاکارد) ← تولیدی پالتو · لوزی خاکی روشن','Termeh-Khaneh (jacquard) → coat maker · greige lattice'),
  cat:B('ژاکارد ← پوشاک','Jacquard → apparel'),
  pulse:[
    {d:B('محصول','Product'),s:B('مانتو و پالتوی زمستانی ژاکارد فرم‌دار','Structured jacquard winter mantos & coats'),t:27,src:'shop',c:'T2'},
    {d:B('طرح','Design'),s:B('هندسی مینیمال و بافت لوزی (Lattice)','Minimal geometric & lattice textures'),t:29,src:'shop',c:'T2'},
    {d:B('رنگ','Colour'),s:B('خاکی روشن (Greige)، موکا، سبز مریمی','Greige, mocha, sage'),t:21,src:'shop',c:'T2'},
    {d:B('جنس','Fibre'),s:B('مخلوط پلی‌استر/ویسکوز با بدنه ۲۸۰ تا ۳۲۰ g/m²','PES/viscose blends with body, 280–320 g/m²'),t:15,src:'b2b',c:'T2'},
    {d:B('عرض','Width'),s:B('۱۵۰ cm برای برش پوشاک','150 cm for apparel cutting'),t:12,src:'b2b',c:'T3'},
    {d:B('طرح','Design'),s:B('دامسک باروک طلایی سنگین','Heavy gold baroque damask'),t:-23,src:'bazaar',c:'T2'}],
  newArt:{code:'TK-A20',n:B('ژاکارد لوزی پوشاکی — ۳ رنگ (همان هارنس TK-L14)','Apparel lattice jacquard — 3 colourways (same harness as TK-L14)'),spec:'PES/CV 65/35 · 300 g/m² · 150 cm',plan:B('آزمایشی: ۳ رنگ × ۸۰۰ متر؛ اولین سفارش B2B از تولیدی پالتو','Pilot: 3 colours × 800 m; first B2B order from a coat maker'),why:B('بازار جدید (پوشاک زمستانی) با طرح روز؛ بدون هارنس جدید','A new market (winter apparel) with a trending design; no new harness')},
  quality:Object.assign({},M.m3&&M.m3.quality,{insp:B('میز بازرسی پس از ماشین ژاکارد · رول TK-A20 · ۶۰ یارد × ۵۹ اینچ','Inspection table after the jacquard loom · roll TK-A20 · 60 yd × 59 in'),yd:60,win:59,
    shade:{art:B('TK-A20 · خاکی روشن','TK-A20 · greige'),std:'#b9b0a2',tol:1.0,lots:[{l:'J-21',de:0.5,hex:'#b9b1a3'},{l:'J-22',de:0.8,hex:'#bab2a2'},{l:'J-23',de:1.4,hex:'#beb4a0'}]}}),
  design:{code:'TK-A20-GR',spec:'PES/CV 65/35 · 300 g/m² · 150 cm',rep:B('لوزی ۴٫۲ × ۴٫۸ cm · نگاشت به هوک‌ها','4.2 × 4.8 cm diamond · mapped to hooks'),colours:['#b9b0a2','#e4dccb'],repeat:'assets/img/c2_repeat.jpg',img:'assets/img/m3_cw1.jpg',
    n:B('لوزی مینیمال · نخ پود کرم روی زمینه‌ی خاکی روشن','Minimal lattice · cream weft on greige ground'),
    rows:[[B('تکرار','Repeat'),B('لوزی ۴٫۲ × ۴٫۸ cm — نگاشت‌شده به هوک‌ها','4.2 × 4.8 cm diamond — mapped to the hooks')],[B('بافت','Weaves'),B('۲ بافت: زمینه‌ی ساده + پرش پود برای خطوط لوزی','2 weaves: plain ground + weft floats for the lattice')],[B('عرض','Width'),B('۱۵۰ cm (پوشاکی)','150 cm (apparel)')],[B('ریشه‌ی تصمیم','Decision trail'),B('M1 پالتو ژاکارد ‎+۲۷٪‎ · لوزی ‎+۲۹٪‎ · M3 طرح جدید','M1 jacquard coats +27% · lattice +29% · M3 new article')]]},
  millMachine:{file:'R2R_TK-A20_lattice_apparel_v1.jc5',target:B('ژاکارد: EAT DesignScope / ArahWeave → فایل Stäubli (JC5) یا Bonas (EP)','Jacquard: EAT DesignScope / ArahWeave → Stäubli (JC5) or Bonas (EP) file'),
    checks:[B('نگاشت نقش به تعداد هوک و تکرار در عرض ۱۵۰ cm','Motif mapped to the hook count and repeats across 150 cm'),B('سقف پرش ۴ mm برای پوشاک (گیرکردن نخ)','Max float 4 mm for apparel (snagging)'),B('۳ رنگ با تعویض نخ پود — همان هارنس','3 colourways by weft change — same harness'),B('نمونه‌ی بافت (Blanket) پیش از تولید انبوه','Woven blanket sample before bulk')]},
  roll:{len:50,width:150,usable:146,reserve:3}, rollCode:'TK-A20-GR · #0087',
  passport:[
    P(B('ساختار','Construction'),B('ژاکارد دوبافته: زمینه‌ی ساده + پرش پود','Jacquard: plain ground + weft floats'),'T4',B('فایل ژاکارد کارخانه','Mill jacquard file')),
    P(B('جنس الیاف','Fibre'),B('پلی‌استر/ویسکوز ۶۵/۳۵','PES/viscose 65/35'),'T4',MLAB),
    P(B('گرماژ','Mass per area'),B('۳۰۰ g/m²','300 g/m²'),'T4',MLAB),
    P(B('آبرفتگی','Shrinkage'),B('تار ۲٪ · پود ۱٫۵٪','Warp 2% · weft 1.5%'),'T4',MLAB),
    P(B('پرزدهی','Pilling'),B('درجه‌ی ۴ (Martindale)','Grade 4 (Martindale)'),'T4',MLAB),
    P(B('گیرکردن نخ (Snag)','Snagging'),B('ریسک متوسط — پرش ۴ mm','Medium risk — 4 mm floats'),'T2',B('طول پرش از فایل ژاکارد','Float length from the jacquard file'),'ASTM D3939'),
    P(B('شید رول','Roll shade'),B('گروه A · ΔE₀₀ ۰٫۵','Group A · ΔE₀₀ 0.5'),'T4',B('M5 + اسپکتروفتومتر','M5 + spectrophotometer')),
    P(B('عیب رول','Roll defects'),B('۱۱٫۲ امتیاز / ۱۰۰ یارد² — درجه‌ی یک','11.2 pts / 100 yd² — first quality'),'T4',B('گزارش بازرسی M5','M5 inspection report'))],
  proposals:[
    {id:'P1',img:'assets/img/c2_p1.jpg',name:B('مانتو پالتویی زانو، بدون یقه','Knee-length collarless coat-manto'),fit:B('قبول — بدنه‌ی ژاکارد فرم صاف و جعبه‌ای را نگه می‌دارد','Pass — the jacquard body holds a clean boxy shape'),dec:'produce',cons:2.3,units:12,sizes:{S:2,M:4,L:4,XL:2}},
    {id:'P2',img:'assets/img/c2_p2.jpg',name:B('جلیقه‌ی بلند مردانه','Men’s long gilet'),fit:B('قبول — تطبیق لوزی در جلو و جیب‌ها','Pass — match the lattice at front and pockets'),dec:'limited',cons:1.3,units:14,sizes:{M:4,L:5,XL:3,XXL:2}},
    {id:'P3',img:'assets/img/c2_p3.jpg',name:B('پیراهن مجلسی اریب‌بُرش و روان','Fluid bias-cut evening dress'),fit:B('رد — پارچه افتادگی ندارد و برش اریب لوزی را کج می‌کند','Fail — no drape, and bias cutting skews the lattice'),dec:'no',cons:0,units:0,why:B('ژاکارد ۳۰۰ g/m² با پرش پود، بدنه‌دار و سفت است؛ برش اریب برای افتادگی روان طراحی می‌شود و خطوط لوزی را کج و نامتقارن می‌کند. این تصمیم از شناسنامه‌ی کارخانه (گرماژ و ساختار T4) می‌آید.','A 300 g/m² weft-float jacquard is firm; bias cutting is meant for fluid drape and would skew the lattice lines. This comes from the mill passport (mass & construction T4).')}],
  render:'assets/img/c2_render.jpg', renderCap:B('رندر روی مدل — P1 با همان ژاکارد TK-A20-GR','On-model render — P1 in the same TK-A20-GR jacquard'),
  repeat:'assets/img/c2_repeat.jpg', repeatCap:B('تکرار ژاکارد کارخانه — همان فایل بافت','The mill’s jacquard repeat — the same weave file'),
  marker:{fa:['برش یک‌طرفه (جهت براقیت پرش پود)','تطبیق لوزی در خط وسط جلو، جیب و درز پهلو','جبران آبرفتگی از شناسنامه: تار ×۱/(۱−۰٫۰۲)'],en:['One-way lay (weft-float sheen direction)','Lattice match at centre front, pockets and side seams','Shrinkage from the passport: warp ×1/(1−0.02)']},
  dnp:{fa:['لباس اریب‌بُرش یا روان','ادعای «ضدآب»','برش بدون تطبیق لوزی'],en:['Bias-cut or fluid garments','“Waterproof” claim','Cutting without lattice matching']},
  machine:{file:'R2R_C2_TK-A20_coat_v1.dxf',target:B('الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber','Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber'),checks:{fa:['سایزبندی زنانه S تا XL و مردانه M تا XXL','مارکر یک‌طرفه با تطبیق لوزی · عرض مفید ۱۴۶ cm','شناسه‌ی رول TK-A20-GR #0087 در فایل','بدون ارسال خودکار — تأیید G4'],en:['Grading women S–XL, men M–XXL','One-way, lattice-matched marker · usable width 146 cm','Roll ID TK-A20-GR #0087 embedded','No auto-send — G4 approval']}},
  qc:B('—','—'),
  caption:{fa:'🍂 پالتو «شبکه» برای روزهای مه‌آلود شمال\nژاکارد لوزی بافت ایران، رنگ خاکی روشن\nپلی‌استر/ویسکوز ۶۵/۳۵ · فرم صاف و گرم\n📏 سایز S تا XL · تعداد محدود\n#مانتو_پالتویی #ژاکارد #پالتو_زنانه #تولید_ایران',en:'🍂 The “Lattice” coat for misty northern days\nIranian-woven lattice jacquard in greige\nPES/viscose 65/35 · clean, warm shape\n📏 Sizes S–XL · limited run\n#coatmanto #jacquard #womenscoat #madeiniran'},
  claim:B('ترکیب الیاف (T4) و «بافت ایران» مجازند چون از شناسنامه‌ی کارخانه می‌آیند؛ «ضدآب» یا «ضد پرز» مجاز نیست.','Fibre blend (T4) and “woven in Iran” are allowed because they come from the mill passport; “waterproof” or “anti-pill” are not.')
})
};
})();
