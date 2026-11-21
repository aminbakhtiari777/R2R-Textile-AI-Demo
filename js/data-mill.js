/* R2R demo — MILL MODE scenarios. Mill names are FICTIONAL. ALL VALUES ARE ILLUSTRATIVE sample data (prepared catalogue), not measured market results; live connectors come with deployment. */
(function(){
const B=(fa,en)=>({fa,en});
const SRC={
  shop:B('کاتالوگ آماده از فروشگاه‌های آنلاین','Prepared online-shop catalogue'),
  bazaar:B('نمونه‌های بازار عمده‌ی پارچه','Wholesale fabric-bazaar samples'),
  b2b:B('سفارش‌های B2B تولیدی‌ها','Apparel makers’ B2B orders'),
  own:B('فروش خود کارخانه (ERP)','Mill’s own sales (ERP)')
};
window.R2R_MSRC = SRC;
window.R2R_MILLS = {
m1: {
  id:'m1', mill:true, swatch:'assets/img/m1_cover.jpg',
  name:B('شمال‌بافت (نام فرضی)','ShomalBaft (fictional)'),
  short:B('بافندگی پنبه/پلی‌استر · سبک مازندران','Cotton/poly weaving · Mazandaran-style'),
  cat:B('بافندگی تاری‌پودی','Woven mill'),
  profile:[
    [B('نوع کارخانه','Mill type'),B('ریسندگی + بافندگی تاری‌پودی پنبه/پلی‌استر','Spinning + cotton/poly woven')],
    [B('ماشین‌آلات (نمونه)','Machines (sample)'),B('ماشین‌های بافندگی راپیری و ایرجت با دابی','Rapier & air-jet looms with dobby')],
    [B('محصولات فعلی','Current products'),B('پیراهنی پلی‌کاتن، ترگال شلواری، پارچه‌ی روپوش مدرسه، ملحفه‌ی عریض','P/C shirting, tergal trousering, school-uniform cloth, wide sheeting')],
    [B('سؤال مدیر کارخانه','Mill manager’s question'),B('فصل بعد چه ببافیم، چه کم کنیم، و با رول‌های مانده چه کنیم؟','What do we weave next season, what do we cut, and what about unsold rolls?')]
  ],
  pulse:[
    {d:B('طرح','Design'),s:B('ساده‌ی «لینن‌نما» با نخ گره‌دار (Slub) برای مانتو و پیراهن تابستانه','Linen-look slub plain for mantos & summer shirts'),t:34,src:'shop',c:'T2'},
    {d:B('رنگ','Colour'),s:B('خانواده‌ی زیتونی، شنی، سبز مریمی','Olive, sand and sage families'),t:22,src:'bazaar',c:'T2'},
    {d:B('جنس','Fibre'),s:B('مخلوط پلی‌استر/ویسکوز (TR) به جای پلی‌کاتن ساده','Poly/viscose (TR) blends over plain P/C'),t:18,src:'b2b',c:'T2'},
    {d:B('گرماژ','Weight'),s:B('۱۴۰ تا ۱۷۰ g/m² برای مانتوی سبک','140–170 g/m² for light mantos'),t:15,src:'shop',c:'T2'},
    {d:B('عرض','Width'),s:B('ملحفه‌ی عریض ۲۴۰ تا ۲۸۰ cm','Wide sheeting 240–280 cm'),t:12,src:'own',c:'T3'},
    {d:B('طرح','Design'),s:B('پیراهنی سفید ساده‌ی پلی‌کاتن ۱۱۰ g/m²','Plain white P/C shirting 110 g/m²'),t:-21,src:'own',c:'T3'},
    {d:B('گرماژ','Weight'),s:B('ترگال سنگین ۲۶۰ g/m²','Heavy tergal 260 g/m²'),t:-14,src:'b2b',c:'T2'}
  ],
  portfolio:[
    {code:'SB-101',n:B('پیراهنی پلی‌کاتن سفید','White P/C shirting'),spec:'PC 65/35 · 110 g/m² · 150 cm',stock:46000,sales:9500,dec:'reduce',why:B('۴٫۸ ماه موجودی؛ فشار واردات ارزان؛ نبض بازار رو به پایین','4.8 months of cover; cheap-import pressure; pulse trending down')},
    {code:'SB-204',n:B('ترگال سرمه‌ای شلواری','Navy tergal trousering'),spec:'PV 65/35 · 220 g/m² · 150 cm',stock:28000,sales:7000,dec:'keep',why:B('تقاضای پایدار؛ فقط پارتی رنگ باید کنترل شود (M5)','Steady demand; only shade lots need control (M5)')},
    {code:'SB-210',n:B('ترگال سنگین مشکی','Heavy black tergal'),spec:'PV · 260 g/m² · 150 cm',stock:21000,sales:2100,dec:'stop',why:B('۱۰ ماه موجودی؛ بازار به گرماژ سبک‌تر رفته','10 months of cover; market moved to lighter weights')},
    {code:'SB-305',n:B('سرژه‌ی روپوش مدرسه طوسی','Grey school-uniform twill'),spec:'PC · 230 g/m² · 150 cm',stock:15000,sales:6000,dec:'more',why:B('فصلی: پیش از مهر؛ سفارش B2B تولیدی‌های روپوش','Seasonal: before school starts; uniform makers’ B2B orders')},
    {code:'SB-401',n:B('ملحفه‌ی ساده‌ی عریض','Plain wide sheeting'),spec:'PC 50/50 · 120 g/m² · 240 cm',stock:9000,sales:4500,dec:'more',why:B('۲ ماه موجودی؛ عرض عریض در نبض بازار بالا','2 months of cover; wide widths rising in the pulse')}
  ],
  newArt:{code:'SB-520',n:B('«لینن‌نما» TR گره‌دار — ۳ رنگ','Linen-look TR slub — 3 colourways'),spec:'TR 70/30 · 160 g/m² · 150 cm',plan:B('آزمایشی: ۳ رنگ × ۴٬۰۰۰ متر','Pilot: 3 colours × 4,000 m'),why:B('سه سیگنال هم‌جهت: طرح لینن‌نما، رنگ زیتونی/شنی، گرماژ سبک','Three aligned signals: linen look, olive/sand colours, light weight')},
  colourways:[
    {img:'assets/img/m1_cw1.jpg',n:B('زیتونی','Olive'),hex:'#5f6b45'},
    {img:'assets/img/m1_cw2.jpg',n:B('شنی','Sand'),hex:'#cbbd9c'},
    {img:'assets/img/m1_cw3.jpg',n:B('سبز مریمی','Sage'),hex:'#93a08a'}
  ],
  dead:{rolls:[
      {code:'SB-210',n:B('ترگال سنگین مشکی','Heavy black tergal'),m:21000,age:240},
      {code:'SB-118',n:B('پیراهنی چهارخانه‌ی قدیمی','Old check shirting'),m:6500,age:410}],
    actions:[
      B('SB-210 → تولیدی‌های لباس کار و شلوار زمستانی (تطبیق B2B)','SB-210 → workwear & winter-trouser makers (B2B match)'),
      B('SB-118 → تولیدی‌های آستر، کیف و لباس خانه؛ فروش بسته‌ای','SB-118 → lining, bag and loungewear makers; bundle sale'),
      B('تولید مشابه SB-210 تا تخلیه‌ی موجودی متوقف شود','Stop similar production until SB-210 stock clears')],
    b2b:[
      {who:B('تولیدی لباس کار (نمونه)','Workwear maker (sample)'),code:'SB-210',m:8000},
      {who:B('تولیدی شلوار مردانه‌ی زمستانی (نمونه)','Men’s winter-trouser maker (sample)'),code:'SB-210',m:5000},
      {who:B('تولیدی آستر و کیف (نمونه)','Lining & bag maker (sample)'),code:'SB-118',m:6500}]},
  quality:{img:'assets/img/m1_defect.jpg',boxed:'assets/img/m1_defect_boxed.jpg',
    insp:B('میز بازرسی با دوربین و نور یکنواخت · رول SB-101 · ۱۰۰ یارد × ۵۹ اینچ','Camera inspection table, even lighting · roll SB-101 · 100 yd × 59 in'),yd:100,win:59,
    boxes:[{x:0,y:15,w:100,h:6.5,n:B('نوار پود (Weft bar)','Weft bar'),c:0.93,p:4},{x:71.5,y:0,w:2.6,h:100,n:B('نخ تار پاره (Broken end)','Broken end'),c:0.88,p:4},{x:13.7,y:72.3,w:12.2,h:15,n:B('لکه‌ی روغن','Oil stain'),c:0.95,p:2}],
    shade:{art:'SB-204',std:'#1f2a44',tol:1.0,lots:[{l:'L-31',de:0.4,hex:'#1f2a45'},{l:'L-32',de:0.8,hex:'#202b47'},{l:'L-33',de:1.3,hex:'#22304b'},{l:'L-34',de:2.2,hex:'#263652'}]}},
  machine:{file:'R2R_SB520_TR_slub_dobby_v1.wif',target:B('دابی ماشین بافندگی → نقشه‌ی بافت WIF + دستور تولید برای ERP','Loom dobby → WIF weave draft + production order to ERP'),
    checks:[B('نقشه‌ی تار: نسبت نخ گره‌دار ۱:۲','Warp plan: slub yarn ratio 1:2'),B('تراکم پود ۲۶ در سانتی‌متر · عرض روی ماشین ۱۵۸ cm','Weft density 26/cm · loom width 158 cm'),B('دستور تولید ۱۲٬۰۰۰ متر در ۳ رنگ → ERP','Production order 12,000 m in 3 colours → ERP'),B('بدون ارسال خودکار به ماشین — تأیید G4','No auto-send to the loom — G4 approval')]}
},
m2: {
  id:'m2', mill:true, swatch:'assets/img/m2_cover.jpg',
  name:B('چاپ و تکمیل نگارین (نام فرضی)','Negarin Print & Finishing (fictional)'),
  short:B('چاپ روتاری و دیجیتال · ویسکوز و پلی‌استر','Rotary & digital printing · viscose & polyester'),
  cat:B('چاپ و تکمیل','Printing & finishing'),
  profile:[
    [B('نوع کارخانه','Mill type'),B('چاپ، رنگرزی و تکمیل روی پارچه‌ی خریداری‌شده','Printing, dyeing & finishing on bought-in greige')],
    [B('ماشین‌آلات (نمونه)','Machines (sample)'),B('چاپ روتاری چندرنگ + چاپگر دیجیتال پارچه + استنتر','Multi-colour rotary + digital textile printers + stenter')],
    [B('محصولات فعلی','Current products'),B('پارچه‌ی چاپی مانتویی، روسری و شال، پیراهنی','Printed manto fabric, scarves & shawls, dress fabric')],
    [B('سؤال مدیر کارخانه','Mill manager’s question'),B('کدام طرح و رنگ را این فصل چاپ کنیم و کدام را متوقف کنیم؟','Which designs and colours do we print this season, and which do we stop?')]
  ],
  pulse:[
    {d:B('طرح','Design'),s:B('هندسی ریز با الهام از کاشی ایرانی','Small-scale geometric, Persian-tile inspired'),t:31,src:'shop',c:'T2'},
    {d:B('طرح','Design'),s:B('گل‌های درشت استوایی','Large tropical florals'),t:-26,src:'shop',c:'T2'},
    {d:B('رنگ','Colour'),s:B('سفالی، فیروزه‌ای تیره، سرمه‌ای جوهری','Terracotta, deep teal, ink navy'),t:19,src:'bazaar',c:'T2'},
    {d:B('جنس پایه','Base fabric'),s:B('کرپ ویسکوز ۱۲۰ g/m² به جای پلی‌استر','Viscose crepe 120 g/m² over polyester'),t:14,src:'b2b',c:'T2'},
    {d:B('طول سفارش','Run length'),s:B('سفارش کوتاه ۳۰۰ تا ۸۰۰ متر در هر رنگ (دیجیتال)','Short runs of 300–800 m per colourway (digital)'),t:24,src:'own',c:'T3'},
    {d:B('محصول','Product'),s:B('چاپ جای‌گذاری‌شده‌ی شال ۷۰×۲۰۰','Placement prints for 70×200 shawls'),t:11,src:'shop',c:'T2'}
  ],
  portfolio:[
    {code:'NG-T12',n:B('گل درشت استوایی روی پلی‌استر','Large tropical floral on PES'),spec:'PES · 105 g/m² · 150 cm',stock:14000,sales:1400,dec:'stop',why:B('۱۰ ماه موجودی؛ نبض بازار ‎−۲۶٪‎','10 months of cover; pulse −26%')},
    {code:'NG-B07',n:B('گیاهی ریز روی ویسکوز','Small botanical on viscose'),spec:'CV · 115 g/m² · 145 cm',stock:12000,sales:5000,dec:'more',why:B('۲٫۴ ماه موجودی؛ هم‌جهت با ویسکوز و طرح ریز','2.4 months of cover; matches viscose & small-scale signals')},
    {code:'NG-P03',n:B('خال‌خالی روی کرپ پلی‌استر','Polka dots on PES crepe'),spec:'PES · 120 g/m² · 150 cm',stock:16000,sales:2600,dec:'reduce',why:B('۶٫۲ ماه موجودی؛ فقط دو رنگ پرفروش بماند','6.2 months of cover; keep only the two best colours')},
    {code:'NG-S21',n:B('شال چاپ جای‌گذاری‌شده','Placement-print shawl'),spec:'CV · 90 g/m² · 140 cm',stock:9000,sales:3000,dec:'keep',why:B('پایدار؛ رنگ‌بندی فصل بعد اضافه شود','Steady; add next-season colourways')}
  ],
  newArt:{code:'NG-G40',n:B('هندسی کاشی روی کرپ ویسکوز — ۳ رنگ','Tile geometric on viscose crepe — 3 colourways'),spec:'CV crepe · 120 g/m² · 145 cm',plan:B('دیجیتال اول: ۳ × ۶۰۰ متر؛ رنگ برنده → روتاری','Digital first: 3 × 600 m; the winning colour → rotary'),why:B('بیشترین رشد در نبض بازار + سفارش کوتاه = ریسک کم','Fastest-growing pulse signal + short runs = low risk')},
  colourways:[
    {img:'assets/img/m2_cw1.jpg',n:B('سفالی و زیتونی','Terracotta & olive'),hex:'#c8664a'},
    {img:'assets/img/m2_cw2.jpg',n:B('فیروزه‌ای و خردلی','Teal & mustard'),hex:'#1f7f95'},
    {img:'assets/img/m2_cw3.jpg',n:B('سرمه‌ای جوهری','Ink navy'),hex:'#23407a'}
  ],
  dead:{rolls:[
      {code:'NG-T12',n:B('گل درشت استوایی چاپ‌شده','Printed large tropical floral'),m:14000,age:300},
      {code:'GR-CV1',n:B('ویسکوز خام آماده‌ی چاپ (PFP)','Viscose greige, ready-for-print (PFP)'),m:8000,age:200}],
    actions:[
      B('GR-CV1 → پارچه‌ی پایه‌ی طرح جدید NG-G40 (بدون ضایعات)','GR-CV1 → base fabric for the new NG-G40 (zero waste)'),
      B('NG-T12 → چاپ روی‌چاپ زمینه‌ی تیره (پس از استرایک‌آف آزمایشی)','NG-T12 → dark-ground overprint (after a test strike-off)'),
      B('NG-T12 → تولیدی‌های لباس خانه و آستر کودک (تطبیق B2B)','NG-T12 → loungewear & kids-lining makers (B2B match)')],
    b2b:[
      {who:B('تولیدی لباس خانه (نمونه)','Loungewear maker (sample)'),code:'NG-T12',m:6000},
      {who:B('تولیدی پیراهن ساحلی (نمونه)','Beachwear maker (sample)'),code:'NG-T12',m:4000}]},
  quality:{img:'assets/img/m2_defect.jpg',boxed:'assets/img/m2_defect_boxed.jpg',
    insp:B('دوربین پس از استنتر · رول آزمایشی NG-G40 · ۱۰۰ یارد × ۵۷ اینچ','Camera after the stenter · pilot roll NG-G40 · 100 yd × 57 in'),yd:100,win:57,
    boxes:[{x:26.4,y:56,w:15.6,h:19.5,n:B('قطره‌ی رنگ','Ink drop'),c:0.97,p:2},{x:50.8,y:2.6,w:9.8,h:28.6,n:B('رد چین (Crease)','Crease mark'),c:0.81,p:3},{x:84,y:43,w:13.7,h:15.6,n:B('جابه‌جایی رنگ؟ (بازبینی انسانی)','Misregistration? (human review)'),c:0.42,p:0}],
    shade:{art:B('استرایک‌آف NG-G40 · سفالی','Strike-off NG-G40 · terracotta'),std:'#c8664a',tol:1.0,lots:[{l:'SO-1',de:0.7,hex:'#c9684c'},{l:'SO-2',de:1.6,hex:'#cf6f50'},{l:'SO-3',de:0.5,hex:'#c8674b'}]}},
  machine:{file:'R2R_NG-G40_tile_8col_v1.tif',target:B('دیجیتال: RIP خط چاپ · روتاری: ۸ جدایش رنگ (شابلون) با تکرار ۶۴ cm','Digital: line RIP · Rotary: 8 colour separations (screens), 64 cm repeat'),
    checks:[B('تکرار بی‌درز ۶۴ cm = محیط شابلون روتاری','Seamless 64 cm repeat = rotary screen circumference'),B('۸ رنگ ایندکس‌شده → دستور آشپزخانه‌ی رنگ کارخانه','8 indexed colours → the mill’s colour-kitchen recipes'),B('TIFF · 300 dpi · پروفایل ICC خط','TIFF · 300 dpi · line ICC profile'),B('دروازه‌ی ΔE استرایک‌آف پیش از تولید انبوه — G4','Strike-off ΔE gate before bulk — G4')]}
},
m3: {
  id:'m3', mill:true, swatch:'assets/img/m3_cover.jpg',
  name:B('ژاکارد ترمه‌خانه (نام فرضی)','Termeh-Khaneh Jacquard (fictional)'),
  short:B('ژاکارد الکترونیک · پرده و مبلمان','Electronic jacquard · curtains & upholstery'),
  cat:B('ژاکارد و منسوجات خانگی','Jacquard & home textiles'),
  profile:[
    [B('نوع کارخانه','Mill type'),B('بافندگی ژاکارد منسوجات خانگی','Jacquard weaving for home textiles')],
    [B('ماشین‌آلات (نمونه)','Machines (sample)'),B('ماشین‌های ژاکارد الکترونیک عریض','Wide electronic jacquard looms')],
    [B('محصولات فعلی','Current products'),B('پرده‌ی عریض، رومبلی، روتختی','Wide curtains, upholstery, bedspreads')],
    [B('سؤال مدیر کارخانه','Mill manager’s question'),B('کدام نقش و رنگ را برای مبلمان و پرده‌ی فصل بعد ببافیم؟','Which motifs and colours do we weave for next season’s upholstery & curtains?')]
  ],
  pulse:[
    {d:B('طرح','Design'),s:B('هندسی مینیمال و بافت لوزی (Lattice)','Minimal geometric & lattice textures'),t:29,src:'shop',c:'T2'},
    {d:B('طرح','Design'),s:B('دامسک باروک طلایی سنگین','Heavy gold baroque damask'),t:-23,src:'bazaar',c:'T2'},
    {d:B('رنگ','Colour'),s:B('خاکی روشن (Greige)، قهوه‌ای موکا، سبز مریمی','Greige, mocha, sage'),t:21,src:'shop',c:'T2'},
    {d:B('دست‌خور','Handle'),s:B('بوکله‌نما و شنیل برای مبل','Boucle-look & chenille for sofas'),t:17,src:'b2b',c:'T2'},
    {d:B('عرض','Width'),s:B('پرده‌ی ۳۰۰ cm بدون درز','Seamless 300 cm curtains'),t:13,src:'own',c:'T3'},
    {d:B('ادعا','Claim'),s:B('«مقاوم در برابر سایش / لکه» برای مبل (نیاز به تست)','“Rub / stain resistant” upholstery (needs testing)'),t:10,src:'shop',c:'T1'}
  ],
  portfolio:[
    {code:'TK-D88',n:B('دامسک باروک طلایی پرده','Gold baroque damask curtain'),spec:'PES · 280 g/m² · 280 cm',stock:26000,sales:2000,dec:'stop',why:B('۱۳ ماه موجودی؛ نبض بازار ‎−۲۳٪‎','13 months of cover; pulse −23%')},
    {code:'TK-L12',n:B('رومبلی لوزی خاکی روشن','Greige lattice upholstery'),spec:'PES/CO · 380 g/m² · 140 cm',stock:7500,sales:3200,dec:'more',why:B('۲٫۳ ماه موجودی؛ هم‌جهت با طرح و رنگ روز','2.3 months of cover; matches trending design & colour')},
    {code:'TK-C05',n:B('شنیل ساده‌ی مبلی','Plain chenille sofa fabric'),spec:'PES · 420 g/m² · 140 cm',stock:11000,sales:2400,dec:'reduce',why:B('۴٫۶ ماه موجودی؛ فقط رنگ‌های خنثی بماند','4.6 months of cover; keep neutral colours only')},
    {code:'TK-B30',n:B('روتختی ژاکارد','Jacquard bedspread'),spec:'PES/CO · 300 g/m² · 240 cm',stock:6000,sales:1500,dec:'keep',why:B('پایدار؛ رنگ‌بندی موکا اضافه شود','Steady; add a mocha colourway')}
  ],
  newArt:{code:'TK-L14',n:B('لوزی مینیمال — ۳ رنگ (همان هارنس)','Minimal lattice — 3 colourways (same harness)'),spec:'PES/CO · 390 g/m² · 140 cm',plan:B('آزمایشی: ۳ رنگ × ۱٬۵۰۰ متر با تعویض نخ پود','Pilot: 3 colours × 1,500 m by changing weft yarns'),why:B('طرح و رنگ روز؛ بدون هزینه‌ی تعویض هارنس','Trending design & colours; no harness change cost')},
  colourways:[
    {img:'assets/img/m3_cw1.jpg',n:B('خاکی روشن','Greige'),hex:'#b9b0a2'},
    {img:'assets/img/m3_cw2.jpg',n:B('موکا','Mocha'),hex:'#7a5634'},
    {img:'assets/img/m3_cw3.jpg',n:B('سبز مریمی','Sage'),hex:'#9aa77f'}
  ],
  dead:{rolls:[
      {code:'TK-D88',n:B('دامسک باروک طلایی','Gold baroque damask'),m:26000,age:380},
      {code:'TK-C02',n:B('شنیل نارنجی (رنگ قدیمی)','Orange chenille (old colour)'),m:3500,age:290}],
    actions:[
      B('TK-D88 → پیمانکاران دکور تالار و هتل (تطبیق B2B)','TK-D88 → event-hall & hotel decor contractors (B2B match)'),
      B('TK-D88 → مبل‌سازان کلاسیک؛ فروش ویژه‌ی حجمی','TK-D88 → classic furniture makers; volume deal'),
      B('TK-C02 → کوسن و پاف (قطعه‌های کوچک)؛ نقش دامسک دیگر بافته نشود','TK-C02 → cushions & poufs (small parts); no more damask weaving')],
    b2b:[
      {who:B('پیمانکار دکور تالار (نمونه)','Event-hall decor contractor (sample)'),code:'TK-D88',m:9000},
      {who:B('مبل‌ساز کلاسیک (نمونه)','Classic furniture maker (sample)'),code:'TK-D88',m:6000},
      {who:B('تولیدی کوسن و پاف (نمونه)','Cushion & pouf maker (sample)'),code:'TK-C02',m:3500}]},
  quality:{img:'assets/img/m3_defect.jpg',boxed:'assets/img/m3_defect_boxed.jpg',
    insp:B('میز بازرسی پس از ماشین ژاکارد · رول TK-L12 · ۶۰ یارد × ۵۵ اینچ','Inspection table after the jacquard loom · roll TK-L12 · 60 yd × 55 in'),yd:60,win:55,
    boxes:[{x:10.7,y:10.4,w:26.4,h:36.5,n:B('پرش کشیده‌شده (Pulled float)','Pulled float'),c:0.94,p:3},{x:0,y:46.2,w:100,h:7.8,n:B('پود افتاده (Missing pick)','Missing pick'),c:0.90,p:4},{x:75.2,y:61.2,w:9.8,h:14.3,n:B('سوراخ','Hole'),c:0.86,p:4}],
    shade:{art:'TK-L12',std:'#b9b0a2',tol:1.0,lots:[{l:'J-07',de:0.5,hex:'#b9b1a3'},{l:'J-08',de:0.9,hex:'#bbb2a2'},{l:'J-09',de:1.2,hex:'#bdb3a1'},{l:'J-10',de:1.8,hex:'#c0b59f'}]}},
  machine:{file:'R2R_TK-L14_lattice_v1.jc5',target:B('ژاکارد: EAT DesignScope / ArahWeave → فایل Stäubli (JC5) یا Bonas (EP)','Jacquard: EAT DesignScope / ArahWeave → Stäubli (JC5) or Bonas (EP) file'),
    checks:[B('نگاشت نقش به تعداد هوک ماشین و تکرار در عرض','Motif mapped to the loom’s hook count and repeats across'),B('سقف طول پرش ۵ mm برای مبل (سایش و گیرکردن)','Max float 5 mm for upholstery (rub & snag)'),B('۳ رنگ با تعویض نخ پود — همان هارنس','3 colourways by weft change — same harness'),B('نمونه‌ی بافت (Blanket) پیش از تولید — تأیید G4','Woven blanket sample before bulk — G4 approval')]}
}
};
})();
