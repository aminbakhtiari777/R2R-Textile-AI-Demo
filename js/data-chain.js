/* R2R demo — FULL CHAIN scenarios (mill → apparel). Mill and maker names are FICTIONAL. All values are ILLUSTRATIVE sample data. */
(function(){
const B=(fa,en)=>({fa,en}); const M=window.R2R_MILLS||{}; const m2=M.m2||{}, m3=M.m3||{};
const pp=(a,v,t,m,lab)=>Object.assign({a,v,t,m},lab?{lab}:{});
window.R2R_CHAINS = {
c1: Object.assign({}, {profile:m2.profile,pulse:m2.pulse,portfolio:m2.portfolio,newArt:m2.newArt,colourways:m2.colourways,dead:m2.dead}, {
  id:'c1', chain:true, kind:'print', pick:0,
  swatch:'assets/img/m2_cw1.jpg', cover:'assets/img/m2_cover.jpg',
  name:B('کرپ ویسکوز چاپی «کاشی»','Printed “Tile” viscose crepe'),
  short:B('چاپ نگارین ← تولیدی مانتو آیلین (نام‌ها فرضی)','Negarin Print → Aylin Manto Atelier (fictional)'),
  cat:B('چاپ ← مانتو','Print → manto'),
  millName:m2.name, maker:B('تولیدی مانتو آیلین (نام فرضی)','Aylin Manto Atelier (fictional)'),
  design:{code:'NG-G40-TC', img:'assets/img/m2_cw1.jpg', repeat:'assets/img/c1_repeat.jpg',
    n:B('هندسی کاشی ایرانی · سفالی و زیتونی','Persian-tile geometric · terracotta & olive'),
    spec:'CV crepe · 120 g/m² · 145 cm',
    rep:B('تکرار ۶۴ cm (برابر محیط شابلون روتاری) · قرینه‌ی چهارطرفه · بدون جهت','64 cm repeat (= rotary screen circumference) · 4-way mirror · non-directional'),
    colours:['#c8664a','#7d8452','#efe6d2','#b9a27a']},
  millMachine:m2.machine,
  quality:Object.assign({}, m2.quality||{}),
  rollCode:'NG-G40-TC-0007', ship:B('۲۰ رول × ۶۰ متر به تولیدی‌ها؛ یک رول برای این دمو','20 rolls × 60 m to apparel makers; one roll follows in this demo'),
  roll:{len:60,width:145,usable:141,reserve:3},
  passport:[
    pp(B('ساختار','Construction'),B('کرپ ویسکوز چاپ‌شده (روتاری)','Printed viscose crepe (rotary)'),'T4',B('شناسنامه‌ی دیجیتال کارخانه','Mill digital passport')),
    pp(B('جنس الیاف','Fibre'),B('۱۰۰٪ ویسکوز (CV)','100% viscose (CV)'),'T4',B('گواهی ترکیب الیاف کارخانه','Mill composition certificate'),'ISO 1833'),
    pp(B('گرماژ','Mass per area'),B('۱۲۰ g/m²','120 g/m²'),'T4',B('اندازه‌گیری در کارخانه','Measured at the mill'),'ISO 3801'),
    pp(B('آبرفتگی','Shrinkage'),B('تار ≈ ۳٪ · پود ≈ ۲٪ (پس از تکمیل)','Warp ≈ 3% · weft ≈ 2% (after finishing)'),'T4',B('تست کارخانه','Mill test'),'ISO 5077'),
    pp(B('شید رنگ','Shade'),B('ΔE₀₀ ۰٫۵ نسبت به استاندارد (دستور اصلاح‌شده SO-3)','ΔE₀₀ 0.5 vs standard (corrected recipe SO-3)'),'T4',B('کنترل کیفیت کارخانه (M5 ← G2)','Mill QC (M5 → G2)')),
    pp(B('عیب رول','Roll defects'),B('۳٫۲ امتیاز در ۱۰۰ یارد مربع — درجه‌ی یک','3.2 pts / 100 yd² — first quality'),'T4',B('گزارش بازرسی M5','M5 inspection report')),
    pp(B('ریزش و دست‌خور','Drape & handle'),B('روان و نرم — ریزش زیاد','Fluid and soft — high drape'),'T2',B('ویدئوی ماکرو + لمس','Macro video + hand feel')),
    pp(B('ثبات رنگ در شست‌وشو','Wash fastness'),B('روی این لات تست نشده','Not tested on this lot'),'T1',B('—','—'),'ISO 105-C06')
  ],
  market:{fa:['<b>مانتو بلند جلوباز</b> و <b>پیراهن ماکسی کمربنددار</b> با طرح هندسی ریز پرطرفدارند (نبض M1: ‎+۳۱٪‎).','رنگ‌های خاکی گرم (سفالی، زیتونی) برای مخاطب ۲۵ تا ۴۰ سال.','ویسکوز «خنک و روان» نقطه‌ی فروش است؛ نباید «ابریشم» گفت.','نکته‌ها نمایشی‌اند.'],
          en:['<b>Long open-front mantos</b> and <b>belted maxi shirt dresses</b> in small geometrics are rising (pulse M1: +31%).','Warm earth tones (terracotta, olive) for the 25–40 audience.','“Cool and fluid” viscose is the selling point; never call it “silk”.','Illustrative notes.']},
  proposals:[
    {id:'P1',img:'assets/img/c1_p1.jpg',name:B('مانتو بلند جلوباز آستین‌گشاد','Long open-front manto, wide sleeves'),fit:B('قبول — ریزش ویسکوز برای فرم آزاد و بلند عالی است','Pass — viscose drape suits a long relaxed shape'),dec:'produce',cons:2.6,units:12,sizes:{S:2,M:4,L:4,XL:2}},
    {id:'P2',img:'assets/img/c1_p2.jpg',name:B('پیراهن ماکسی کمربنددار','Belted maxi shirt dress'),fit:B('قبول — تولید محدود آزمایشی','Pass — limited test batch'),dec:'limited',cons:3.0,units:7,sizes:{S:1,M:3,L:2,XL:1}},
    {id:'P3',img:'assets/img/c1_p3.jpg',name:B('کت‌وشلوار رسمی سرشانه‌دار','Tailored suit with padded shoulders'),fit:B('رد — کرپ ۱۲۰ گرمی فرم ساختارمند را نگه نمی‌دارد','Fail — a 120 g/m² crepe cannot hold a structured shape'),dec:'no',cons:0,units:0,
     why:B('سرشانه‌ی سفت و یقه‌ی تیز به لایی چسب سنگین نیاز دارد که ریزش ویسکوز را از بین می‌برد و پس از شست‌وشو حباب می‌زند. برای کت رسمی پارچه‌ی فاستونی لازم است.','Crisp shoulders and lapels need heavy fusing, which kills the viscose drape and can bubble after washing. A tailored suit needs a suiting fabric.')}
  ],
  render:'assets/img/c1_render.jpg', renderCap:B('رندر روی مدل — P1 با همان پارچه‌ی NG-G40-TC','On-model render — P1 in the same NG-G40-TC fabric'),
  repeat:'assets/img/c1_repeat.jpg', repeatCap:B('همان طرح تکرارشونده‌ی کارخانه (۶۴ cm، بدون جهت)','The mill’s own repeat (64 cm, non-directional)'),
  marker:{fa:['طرح قرینه و بدون جهت است ← برش دوطرفه مجاز','تطبیق طرح در جلو و آستین: تکرار ۶۴ cm (در مصرف لحاظ شده)','جبران آبرفتگی: ضریب ۱/(۱−۰٫۰۳) در جهت تار','کرپ ویسکوز: برش روی کاغذ زیرین، بدون کشیدن پارچه'],
          en:['Symmetric, non-directional print → two-way lay allowed','Print match at front and sleeves: 64 cm repeat (included in consumption)','Shrinkage compensation: ×1/(1−0.03) in warp','Viscose crepe: cut on paper underlay, never stretch the fabric']},
  dnp:{fa:['کت و کت‌وشلوار ساختارمند','ادعای «ابریشم» یا «نخی»','دستور شست‌وشوی داغ — برچسب: ملایم ۳۰ درجه'],en:['Structured jackets and suits','“Silk” or “cotton” claims','Hot-wash care — label: gentle 30 °C']},
  machine:{file:'R2R_C1_Aylin_tile_manto_v1.dxf',target:B('الگو و مارکر با شکاف تطبیق طرح → DXF-AAMA برای CLO · Lectra · Gerber','Pattern & marker with print-match notches → DXF-AAMA for CLO · Lectra · Gerber'),
    checks:{fa:['سایزبندی S تا XL','مارکر با تطبیق تکرار ۶۴ cm، عرض مفید ۱۴۱ cm','باقی‌مانده‌ی ۴٫۸ متر ← ۴ شال هم‌طرح ۷۰×۲۰۰ (دو ردیف × دو عدد)','بدون ارسال خودکار — تأیید G4'],en:['Grading S–XL','Marker matched to the 64 cm repeat, usable width 141 cm','Residual 4.8 m → 4 matching 70×200 scarves (2 across × 2)','No auto-send — G4 approval']}},
  caption:{fa:'مانتو بلند «کاشی» 🧡\nطرح کاشی ایرانی روی کرپ ویسکوز خنک و روان؛ سفالی و زیتونی.\nاز کارخانه تا تن شما، با شناسنامه‌ی دیجیتال پارچه.\nتولید محدود: ۱۲ عدد + شال هم‌طرح ✨\n#مانتو #طرح_کاشی #ویسکوز',
           en:'“Kashi” long manto 🧡\nA Persian-tile print on cool, fluid viscose crepe; terracotta and olive.\nFrom the mill to you, with the fabric’s digital passport.\nLimited run: 12 pieces + a matching scarf ✨\n#Manto #PersianTile #Viscose'},
  claim:B('ترکیب «ویسکوز» ادعا شده چون گواهی کارخانه روی شناسنامه‌ی رول است (T4)؛ از «ابریشم» یا «نخی» حرفی نیست.','“Viscose” is claimed because the mill certificate sits on the roll passport (T4); no “silk” or “cotton” wording.'),
  qc:B('بینایی ماشین: گزارش عیب کارخانه همراه رول آمده است.','Machine vision: the mill’s defect report travels with the roll.')
}),
c2: Object.assign({}, {profile:m3.profile,dead:m3.dead,colourways:m3.colourways}, {
  id:'c2', chain:true, kind:'weave', pick:0,
  swatch:'assets/img/m3_cw1.jpg', cover:'assets/img/m3_cover.jpg',
  name:B('ژاکارد پوشاکی «مشبک»','“Lattice” apparel jacquard'),
  short:B('ژاکارد ترمه‌خانه ← پوشاک پاییزان (نام‌ها فرضی)','Termeh-Khaneh Jacquard → Paeezan Outerwear (fictional)'),
  cat:B('ژاکارد ← کت و جلیقه','Jacquard → jackets & vests'),
  millName:m3.name, maker:B('پوشاک بیرونی پاییزان (نام فرضی)','Paeezan Outerwear (fictional)'),
  pulse:[
    {d:B('طرح','Design'),s:B('ژاکارد هندسی مینیمال (لوزی) برای پوشاک بیرونی زنانه','Minimal geometric (lattice) jacquard for women’s outerwear'),t:27,src:'shop',c:'T2'},
    {d:B('محصول','Product'),s:B('کت کوتاه جعبه‌ای و جلیقه‌ی بلند روی مانتو','Boxy short jackets & long vests over mantos'),t:23,src:'shop',c:'T2'},
    {d:B('رنگ','Colour'),s:B('خاکی روشن، طوسی گرم، زغالی','Greige, warm taupe, charcoal'),t:18,src:'shop',c:'T2'},
    {d:B('گرماژ','Weight'),s:B('ژاکارد میان‌وزن ۲۸۰ تا ۳۲۰ g/m² برای پاییز','Mid-weight 280–320 g/m² jacquard for autumn'),t:12,src:'b2b',c:'T2'},
    {d:B('جنس','Fibre'),s:B('مخلوط پلی‌استر/ویسکوز با دست‌خور نرم‌تر','PES/viscose blends with a softer hand'),t:9,src:'b2b',c:'T3'},
    {d:B('طرح','Design'),s:B('نقش‌های درشت باروک روی پوشاک','Large baroque motifs on apparel'),t:-19,src:'bazaar',c:'T2'}
  ],
  portfolio:(m3.portfolio||[]).map(p=>p.code==='TK-D88'?Object.assign({},p,{why:B('۱۳ ماه موجودی؛ نقش باروک رو به افت (‎−۱۹٪‎)','13 months of cover; baroque motifs falling (−19%)')}):p),
  newArt:{code:'TK-A20',n:B('ژاکارد لوزی پوشاکی — ۳ رنگ (همان هارنس)','Apparel lattice jacquard — 3 colourways (same harness)'),spec:'PES/CV 65/35 · 300 g/m² · 150 cm',plan:B('ورود به بازار پوشاک: ۳ رنگ × ۱٬۵۰۰ متر','Entry into apparel: 3 colours × 1,500 m'),why:B('بازار جدید برای همان ماشین ژاکارد؛ هم‌جهت با نبض پوشاک','A new market for the same jacquard looms; matches the apparel pulse')},
  design:{code:'TK-A20-GR', img:'assets/img/m3_cw1.jpg', repeat:'assets/img/c2_repeat.jpg',
    n:B('لوزی مینیمال · خاکی روشن','Minimal lattice · greige'), spec:'PES/CV 65/35 · 300 g/m² · 150 cm',
    rep:B('تکرار مستقیم ≈ ۸ × ۸ cm · قرینه · بدون جهت','Straight repeat ≈ 8 × 8 cm · symmetric · non-directional'),
    colours:['#b9b0a2','#e8e1d2','#8f8576']},
  millMachine:{file:'R2R_TK-A20_lattice_apparel_v1.jc5',target:B('ژاکارد: EAT DesignScope / ArahWeave → فایل Stäubli (JC5) یا Bonas (EP)','Jacquard: EAT DesignScope / ArahWeave → Stäubli (JC5) or Bonas (EP) file'),
    checks:[B('نگاشت نقش به هوک‌های ماشین؛ تکرار در عرض ۱۵۰ cm','Motif mapped to the loom hooks; repeats across 150 cm'),B('سقف طول پرش ۴ mm برای پوشاک (گیرکردن)','Max float 4 mm for apparel (snagging)'),B('۲ رنگ پود: کرم برای لوزی، خاکی برای زمینه','2 weft colours: cream lattice, taupe ground'),B('نمونه‌ی بافت (Blanket) پیش از تولید — تأیید G1/G2','Woven blanket sample before bulk — G1/G2 approval')]},
  quality:Object.assign({}, m3.quality||{}, {insp:B('میز بازرسی پس از ماشین ژاکارد · رول TK-A20 · ۶۰ یارد × ۵۵ اینچ','Inspection table after the jacquard loom · roll TK-A20 · 60 yd × 55 in'),
    shade:Object.assign({}, (m3.quality||{}).shade||{}, {art:'TK-A20'})}),
  rollCode:'TK-A20-GR-0012', ship:B('۳۰ رول × ۵۰ متر؛ یک رول برای این دمو','30 rolls × 50 m; one roll follows in this demo'),
  roll:{len:50,width:150,usable:146,reserve:3},
  passport:[
    pp(B('ساختار','Construction'),B('ژاکارد لوزی، دوپود','Lattice jacquard, two wefts'),'T4',B('فایل طرح کارخانه (JC5)','Mill design file (JC5)')),
    pp(B('جنس الیاف','Fibre'),B('پلی‌استر ۶۵٪ / ویسکوز ۳۵٪','65% polyester / 35% viscose'),'T4',B('گواهی ترکیب الیاف کارخانه','Mill composition certificate'),'ISO 1833'),
    pp(B('گرماژ','Mass per area'),B('۳۰۰ g/m²','300 g/m²'),'T4',B('اندازه‌گیری در کارخانه','Measured at the mill'),'ISO 3801'),
    pp(B('آبرفتگی','Shrinkage'),B('تار ≈ ۲٪ · پود ≈ ۱٫۵٪','Warp ≈ 2% · weft ≈ 1.5%'),'T4',B('تست کارخانه','Mill test'),'ISO 5077'),
    pp(B('شید رنگ','Shade'),B('لات J-07 · ΔE₀₀ ۰٫۵ — گروه A','Lot J-07 · ΔE₀₀ 0.5 — group A'),'T4',B('کنترل کیفیت کارخانه (M5 ← G2)','Mill QC (M5 → G2)')),
    pp(B('عیب رول','Roll defects'),B('۱۲ امتیاز در ۱۰۰ یارد مربع — درجه‌ی یک؛ ۳ عیب علامت‌گذاری شده','12 pts / 100 yd² — first quality; 3 defects flagged'),'T4',B('گزارش بازرسی M5','M5 inspection report')),
    pp(B('طول پرش','Float length'),B('≤ ۴ mm','≤ 4 mm'),'T4',B('فایل طرح کارخانه','Mill design file')),
    pp(B('گیرکردن (Snag)','Snagging'),B('روی این لات تست نشده','Not tested on this lot'),'T1',B('—','—'),'ASTM D3939')
  ],
  market:{fa:['<b>کت کوتاه جعبه‌ای</b> و <b>جلیقه‌ی بلند</b> روی مانتو، ترند پاییز (نبض M1: ‎+۲۳٪‎).','ژاکارد هندسی مینیمال به‌جای نقش درشت باروک.','بازه‌ی رنگ خاکی روشن تا زغالی؛ ست با مانتو تیره.','نکته‌ها نمایشی‌اند.'],
          en:['<b>Boxy short jackets</b> and <b>long vests</b> over mantos trend for autumn (pulse M1: +23%).','Minimal geometric jacquard instead of large baroque motifs.','Greige to charcoal range; pairs with dark mantos.','Illustrative notes.']},
  proposals:[
    {id:'P1',img:'assets/img/c2_p1.jpg',name:B('کت کوتاه جعبه‌ای بدون یقه','Boxy collarless short jacket'),fit:B('قبول — ژاکارد ۳۰۰ گرمی فرم جعبه‌ای را نگه می‌دارد','Pass — a 300 g/m² jacquard holds a boxy shape'),dec:'produce',cons:1.45,units:16,sizes:{S:3,M:5,L:5,XL:3}},
    {id:'P2',img:'assets/img/c2_p2.jpg',name:B('جلیقه‌ی بلند چاک‌دار','Long side-slit vest'),fit:B('قبول — تولید محدود آزمایشی','Pass — limited test batch'),dec:'limited',cons:1.6,units:12,sizes:{S:2,M:4,L:4,XL:2}},
    {id:'P3',img:'assets/img/c2_p3.jpg',name:B('پیراهن ماکسی اریب (بایس) با یقه‌ی آبشاری','Bias-cut maxi dress with cowl neck'),fit:B('رد — ژاکارد ساختارمند روی اریب نمی‌ریزد','Fail — a structured jacquard cannot flow on the bias'),dec:'no',cons:0,units:0,
     why:B('ژاکارد ۳۰۰ گرمی روی اریب، لوزی‌ها را کج می‌کند و لباس از بدن فاصله می‌گیرد؛ یقه‌ی آبشاری به کرپ یا ساتن روان نیاز دارد.','On the bias a 300 g/m² jacquard distorts the lattice and stands away from the body; a cowl needs a fluid crepe or satin.')}
  ],
  render:'assets/img/c2_render.jpg', renderCap:B('رندر روی مدل — P1 با همان پارچه‌ی TK-A20-GR','On-model render — P1 in the same TK-A20-GR fabric'),
  repeat:'assets/img/c2_repeat.jpg', repeatCap:B('همان تکرار ژاکارد کارخانه (مستقیم، بدون جهت)','The mill’s own jacquard repeat (straight, non-directional)'),
  marker:{fa:['نقش قرینه و بدون جهت ← برش دوطرفه مجاز','تطبیق لوزی در جلو و جیب‌ها','جبران آبرفتگی: ضریب ۱/(۱−۰٫۰۲) در جهت تار','کنترل رو و پشت ژاکارد پیش از پهن کردن'],
          en:['Symmetric, non-directional motif → two-way lay allowed','Match the lattice at centre front and pockets','Shrinkage compensation: ×1/(1−0.02) in warp','Check jacquard face/back before spreading']},
  dnp:{fa:['مدل‌های اریب و آبشاری','ادعای «ترمه» یا «دست‌باف» — ژاکارد ماشینی است','گوشه‌ی جیب روی پرش‌های بلند'],en:['Bias-cut and draped styles','“Termeh” or “hand-woven” claims — it is machine jacquard','Pocket corners on long floats']},
  machine:{file:'R2R_C2_Paeezan_lattice_jacket_v1.dxf',target:B('الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber','Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber'),
    checks:{fa:['سایزبندی S تا XL','مارکر دوطرفه با تطبیق لوزی، عرض مفید ۱۴۶ cm','باقی‌مانده‌ی ۴٫۶ متر ← کیف دستی هم‌پارچه','بدون ارسال خودکار — تأیید G4'],en:['Grading S–XL','Two-way marker with lattice match, usable width 146 cm','Residual 4.6 m → matching tote bags','No auto-send — G4 approval']}},
  caption:{fa:'کت کوتاه «مشبک» 🤍\nژاکارد لوزی خاکی روشن؛ ساختارمند، سبک و امروزی.\nروی مانتو بلند پاییزی عالی می‌نشینه 🍂\nفقط ۱۶ عدد + جلیقه‌ی بلند هم‌پارچه.\n#کت_کوتاه #ژاکارد #استایل_پاییزی',
           en:'“Moshabbak” short jacket 🤍\nGreige lattice jacquard; structured, light and modern.\nSits perfectly over a long autumn manto 🍂\nOnly 16 pieces + a matching long vest.\n#ShortJacket #Jacquard #AutumnStyle'},
  claim:B('از «ترمه» یا «دست‌باف» حرفی نیست؛ ژاکارد ماشینی است و ترکیب الیاف از گواهی کارخانه آمده (T4).','No “termeh” or “hand-woven” claim: it is machine jacquard, and the composition comes from the mill certificate (T4).'),
  qc:B('بینایی ماشین: گزارش عیب کارخانه همراه رول آمده است.','Machine vision: the mill’s defect report travels with the roll.')
})
};
})();
