/* R2R demo — sample data. ALL VALUES ARE ILLUSTRATIVE (hypothetical), not measured results. */
window.R2R_SAMPLES = {
  f1: {
    id: 'f1',
    swatch: 'assets/img/f1_swatch.jpg',
    name: { fa: 'وویل چاپی گل‌دار (سلولزی)', en: 'Printed floral voile (cellulosic)' },
    short: { fa: 'تاری‌پودی · چاپ دیجیتال · سبک', en: 'Woven · digitally printed · lightweight' },
    roll: { len: 45, width: 150, usable: 146, reserve: 3.5 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'تاری‌پودی، بافت ساده (Plain weave)', en: 'Woven, plain weave' }, t: 'T1', m: { fa: 'تصویر ماکرو', en: 'Macro image' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'سلولزی (ویسکوز / پنبه / مودال؟)', en: 'Cellulosic (viscose / cotton / modal?)' }, t: 'T3', m: { fa: 'تست سوزاندن: سوختن سریع، خاکستر نرم خاکستری', en: 'Burn test: fast burn, soft grey ash' }, lab: 'AATCC TM20 / ISO 1833' },
      { a: { fa: 'ادعای برگه‌ی فروشنده', en: 'Supplier claim' }, v: { fa: '۱۰۰٪ ویسکوز', en: '100% viscose' }, t: 'T2', m: { fa: 'برگه‌ی مشخصات', en: 'Spec sheet' } },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '۱۲۵ g/m²', en: '125 g/m²' }, t: 'T2', m: { fa: 'برگه‌ی مشخصات', en: 'Spec sheet' }, lab: 'ISO 3801' },
      { a: { fa: 'کشسانی', en: 'Stretch / recovery' }, v: { fa: 'بدون برگشت‌پذیری محسوس', en: 'No perceptible elastic recovery' }, t: 'T3', m: { fa: 'تست کشش دستی', en: 'Hand-stretch check' } },
      { a: { fa: 'آبرفتگی', en: 'Shrinkage' }, v: { fa: 'تار ≈ ۴٪ · پود ≈ ۲٪', en: 'Warp ≈ 4% · weft ≈ 2%' }, t: 'T3', m: { fa: 'شست‌وشوی خانگی نمونه‌ی علامت‌دار', en: 'Marked-swatch home wash' }, lab: 'ISO 5077 / ISO 6330' },
      { a: { fa: 'ریزش (Drape)', en: 'Drape' }, v: { fa: 'بسیار افتاده و روان', en: 'Highly fluid' }, t: 'T1', m: { fa: 'ویدیوی آویز پارچه', en: 'Hanging video' } },
      { a: { fa: 'ثبات رنگ', en: 'Colour fastness' }, v: { fa: 'نامعلوم', en: 'Unknown' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 105-C06 / X12' }
    ],
    market: {
      fa: ['سیگنال‌های فارسی به سمت <b>مانتوی بهاره‌ی گشاد</b> و <b>پیراهن میدی</b> با چاپ گیاهی اشاره دارند (نزدیک نوروز).', 'رنگ‌های روشن و پاستلی در فصل بهار تقاضای بالاتری دارند.', 'فرم‌های چسبان برای این دسته کمتر دیده می‌شوند.', 'بازه‌ی قیمت: رده‌ی میانی بازار آنلاین (در حالت زنده از داده‌ی واقعی خوانده می‌شود).'],
      en: ['Persian-language signals point to <b>loose-fit spring manto</b> and <b>midi dresses</b> with botanical prints (pre-Nowruz).', 'Light, pastel palettes show stronger spring demand.', 'Body-contouring fits are less visible in this category.', 'Price band: mid-market online (read from live data in live mode).']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f1_p1.jpg', name: { fa: 'مانتو گشاد بهاره، چاپ هاف‌دراپ', en: 'Loose spring manto, half-drop print' }, fit: { fa: 'قبول — نیاز به کش ندارد؛ برش دوطرفه', en: 'Pass — no stretch needed; two-way lay' }, dec: 'produce', cons: 2.2, units: 9, sizes: { S: 2, M: 3, L: 3, XL: 1 } },
      { id: 'P2', img: 'assets/img/f1_p2.jpg', name: { fa: 'پیراهن میدی A-line، رنگ‌بندی کاهش‌یافته', en: 'A-line midi dress, reduced colourway' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 2.6, units: 8, sizes: { S: 2, M: 3, L: 2, XL: 1 } },
      { id: 'P3', img: 'assets/img/f1_p3.jpg', name: { fa: 'پیراهن جلوباز چسبان (Wrap)', en: 'Body-contouring wrap dress' }, fit: { fa: 'رد — پارچه برگشت‌پذیری کشسانی ندارد', en: 'Fail — no elastic recovery' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'این پارچه کش ندارد؛ فرم چسبان یا به پارچه‌ی کشی نیاز دارد یا به آزادی زیاد در الگو که هدف طرح را از بین می‌برد.', en: 'The fabric has no elastic recovery; a body-contouring fit needs a stretch fabric or so much ease that the design intent is lost.' } }
    ],
    render: 'assets/img/f1_render.jpg',
    repeat: 'assets/img/f1_repeat.jpg',
    marker: { fa: ['موتیف بدون جهت → برش دوطرفه (Two-way lay)، بازده مارکر بالاتر', 'جبران آبرفتگی: ضریب ۱/(۱−۰٫۰۴) در جهت تار', 'هشدار: پارچه‌ی لغزنده — میز برش با کاغذ زیرین'], en: ['Non-directional motif → two-way lay, better marker yield', 'Shrinkage compensation: ×1/(1−0.04) in warp', 'Warning: slippery fabric — cut with paper underlay'] },
    dnp: { fa: ['پیراهن چسبان Wrap (بدون کشسانی)', 'لباس با برچسب «۱۰۰٪ ویسکوز» تا پیش از تأیید آزمایشگاه', 'محصول شست‌وشوی داغ تا تست ثبات رنگ'], en: ['Body-contouring wrap dress (no stretch)', 'Any "100% viscose" label before lab confirmation', 'Hot-wash products before colour-fastness test'] },
    machine: { file: 'R2R_F1_PersianGarden_halfdrop_146cm_v1.tif', target: { fa: 'چاپ دیجیتال → RIP (Mimaki TxLink · Epson Edge Print · Kornit hot folder)', en: 'Digital print → RIP (Mimaki TxLink · Epson Edge Print · Kornit hot folder)' },
      checks: { fa: ['تکرار هاف‌دراپ: ۴ تکرار در عرض ۱۴۶ cm', 'پیش‌مقیاس تار ×۱٫۰۴۲ برای آبرفتگی ۴٪', 'نگاشت به ۸ رنگ نام‌دار کتابخانه‌ی کارخانه', 'TIFF · 300 dpi · پروفایل ICC کارخانه', 'الگوی مانتو: DXF-AAMA برای CLO / Lectra / Gerber'], en: ['Half-drop repeat: 4 repeats across 146 cm', 'Warp pre-scale ×1.042 for 4% shrinkage', 'Mapped to 8 named mill library colours', 'TIFF · 300 dpi · mill ICC profile', 'Manto pattern: DXF-AAMA for CLO / Lectra / Gerber'] } },
    qc: { fa: 'استرایک‌آف: اختلاف رنگ ΔE₀₀ با تلورانس توافق‌شده با کارخانه سنجیده می‌شود (A8).', en: 'Strike-off: CIEDE2000 ΔE checked against the tolerance agreed with the mill (A8).' },
    caption: { fa: 'مانتو بهاره‌ی «باغ ایرانی» 🌿\nپارچه‌ی سبک و خنک با چاپ گیاهی اختصاصی؛ طراحی و دوخت ایرانی.\nتولید محدود: فقط ۹ عدد ✨\nراهنمای سایز و نگهداری در هایلایت‌ها. برای سفارش دایرکت بدید.\n#مانتو_بهاره #مد_ایرانی #تولید_محدود', en: 'Spring manto "Persian Garden" 🌿\nLight, cool fabric with an exclusive botanical print; Iranian design and tailoring.\nLimited run: only 9 pieces ✨\nSize & care guide in highlights. DM to order.\n#SpringManto #IranianFashion #LimitedEdition' },
    claim: { fa: 'کلمه‌ی «ویسکوز» عمداً در کپشن نیامده، چون جنس هنوز در G1 باز است (T3).', en: 'The word "viscose" is deliberately omitted: fibre content is still open at G1 (T3).' }
  },
  f2: {
    id: 'f2',
    swatch: 'assets/img/f2_swatch.jpg',
    name: { fa: 'دنیم جناغی ایندیگو (Rigid)', en: 'Indigo denim twill (rigid)' },
    short: { fa: 'سرژه ۳/۱ · سنگین · بدون کش', en: '3/1 twill · heavy · non-stretch' },
    roll: { len: 45, width: 150, usable: 145, reserve: 3 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'سرژه ۳/۱ راست‌گرد (RHT)', en: '3/1 right-hand twill' }, t: 'T1', m: { fa: 'تصویر ماکرو، زاویه‌ی خطوط', en: 'Macro image, twill angle' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'احتمالاً پنبه‌ی غالب', en: 'Likely cotton-dominant' }, t: 'T1', m: { fa: 'ظاهر و دست‌خور', en: 'Appearance & hand' }, lab: 'AATCC TM20 / ISO 1833' },
      { a: { fa: 'وزن', en: 'Weight' }, v: { fa: '≈ ۱۲ oz/yd² (≈ ۴۰۰ g/m²)', en: '≈ 12 oz/yd² (≈ 400 g/m²)' }, t: 'T2', m: { fa: 'برگه‌ی خریدار', en: 'Buyer sheet' }, lab: 'ISO 3801' },
      { a: { fa: 'کشسانی', en: 'Stretch' }, v: { fa: 'بدون کش (Rigid)', en: 'None (rigid)' }, t: 'T3', m: { fa: 'تست کشش دستی', en: 'Hand-stretch check' } },
      { a: { fa: 'سانفورایز', en: 'Sanforized' }, v: { fa: 'نامعلوم — ریسک آبرفتگی بالا', en: 'Unknown — high shrinkage risk' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 6330 + ISO 5077' },
      { a: { fa: 'اختلاف شید', en: 'Shade variation' }, v: { fa: 'بررسی شید-باند بین رول‌ها لازم است', en: 'Shade banding across rolls to check' }, t: 'T1', m: { fa: 'بینایی (A8)', en: 'Vision (A8)' } },
      { a: { fa: 'ثبات رنگ سایشی', en: 'Rub fastness' }, v: { fa: 'ایندیگو: ریسک رنگ‌دهی', en: 'Indigo: crocking risk' }, t: 'T1', m: { fa: 'دانش عمومی', en: 'Domain prior' }, lab: 'ISO 105-X12' }
    ],
    market: {
      fa: ['سیگنال‌ها: فرم <b>راسته و گشاد</b> جای اسکینی را گرفته است.', '<b>اورشرت جین</b> یونیسکس برای پاییز و بهار مطرح است.', 'ست هم‌پارچه (جین + اورشرت) برای محتوای اینستاگرام جذاب است.', 'همه‌ی نکات نمونه‌ای هستند؛ در حالت زنده از داده‌ی واقعی بازار خوانده می‌شوند.'],
      en: ['Signals: <b>straight & wide-leg</b> fits have displaced skinny.', 'Unisex <b>denim overshirt</b> is relevant for autumn/spring.', 'Matching set (jeans + overshirt) works well for Instagram content.', 'All notes are illustrative; read from live market data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f2_p1.jpg', name: { fa: 'جین راسته فاق‌بلند', en: 'High-rise straight-leg jeans' }, fit: { fa: 'قبول — فرم راسته با پارچه‌ی Rigid سازگار است', en: 'Pass — straight fit suits rigid denim' }, dec: 'produce', cons: 1.35, units: 20, sizes: { '28': 3, '30': 6, '32': 6, '34': 4, '36': 1 } },
      { id: 'P2', img: 'assets/img/f2_p2.jpg', name: { fa: 'اورشرت جین اورسایز', en: 'Oversized denim overshirt' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 1.9, units: 7, sizes: { M: 2, L: 3, XL: 2 } },
      { id: 'P3', img: 'assets/img/f2_p3.jpg', name: { fa: 'جین اسکینی چسبان', en: 'Skinny jeans' }, fit: { fa: 'رد — پارچه الاستین ندارد', en: 'Fail — no elastane' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'فرم اسکینی معمولاً به دنیم کشی (حاوی الاستین) نیاز دارد. این پارچه Rigid است و حرکت و نشستن را محدود می‌کند.', en: 'Skinny fits normally require stretch denim with elastane. This fabric is rigid and would restrict movement and sitting.' } }
    ],
    render: 'assets/img/f2_render.jpg',
    marker: { fa: ['برش یک‌طرفه (One-way) برای یکنواختی شید', 'جبران آبرفتگی فقط پس از تست شست‌وشو (سانفورایز نامعلوم)', 'تفکیک رول‌ها بر اساس شید-باند پیش از برش'], en: ['One-way lay for shade consistency', 'Shrinkage compensation only after wash test (sanforization unknown)', 'Sort rolls by shade band before cutting'] },
    dnp: { fa: ['جین اسکینی (پارچه بدون کش)', 'تولید انبوه پیش از تست آبرفتگی', 'رنگ روشن کنار ایندیگو در یک ست بدون تست سایش'], en: ['Skinny jeans (non-stretch fabric)', 'Bulk cutting before shrinkage test', 'Light-colour pairing without rub-fastness test'] },
    machine: { file: 'R2R_F2_Indigo_patterns_v1.dxf', target: { fa: 'الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber', en: 'Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber' },
      checks: { fa: ['الگوهای جین و اورشرت با سایزبندی', 'مارکر یک‌طرفه، عرض مفید ۱۴۵ cm', 'برچسب Grainline و Notch در DXF', 'بدون ارسال خودکار به میز برش — تأیید G4 لازم است'], en: ['Jeans & overshirt patterns, graded', 'One-way marker, usable width 145 cm', 'Grainline & notch labels in DXF', 'No auto-send to cutter — G4 approval required'] } },
    qc: { fa: 'بینایی ماشین: تفکیک شید-باند رول‌ها و ثبت عیوب با سیستم ۴ امتیازی (ASTM D5430) (A8).', en: 'Machine vision: roll shade-band sorting and defect logging with the 4-point system (ASTM D5430) (A8).' },
    caption: { fa: 'جین راسته‌ی «ایندیگو» 💙\nدنیم ضخیم و بادوام با دوخت دوبل؛ فرمی که با هر استایلی جوره.\nبه‌همراه اورشرت هم‌پارچه 🔗\nتعداد محدود. سایزبندی در هایلایت.\n#جین_راسته #دنیم #استایل_روزمره', en: '"Indigo" straight jeans 💙\nHeavy, durable denim with double stitching; a fit that goes with everything.\nWith a matching overshirt 🔗\nLimited quantity. Sizing in highlights.\n#StraightJeans #Denim #EverydayStyle' },
    claim: { fa: 'ادعای «۱۰۰٪ پنبه» نیامده، چون جنس فقط T1 است.', en: 'No "100% cotton" claim: fibre is only T1.' }
  },
  f3: {
    id: 'f3',
    swatch: 'assets/img/f3_swatch.jpg',
    name: { fa: 'سینگل‌جرسی کشی (پنبه/الاستین)', en: 'Stretch single jersey (cotton/elastane)' },
    short: { fa: 'حلقوی پودی · کشسان · نرم', en: 'Weft knit · stretch · soft' },
    roll: { len: 45, width: 150, usable: 146, reserve: 3 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'حلقوی پودی، سینگل‌جرسی', en: 'Weft knit, single jersey' }, t: 'T1', m: { fa: 'تصویر ماکرو (حلقه‌ها)، لبه‌ی لوله‌شونده', en: 'Macro (loops), curling edge' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: '۹۵٪ پنبه / ۵٪ الاستین (اعلامی)', en: '95% cotton / 5% elastane (declared)' }, t: 'T2', m: { fa: 'برگه‌ی فروشنده', en: 'Supplier sheet' }, lab: 'ISO 1833' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۱۹۰ g/m²', en: '≈ 190 g/m²' }, t: 'T3', m: { fa: 'دایره‌بُر + ترازو', en: 'GSM cutter + scale' }, lab: 'ISO 3801' },
      { a: { fa: 'کشسانی', en: 'Stretch / recovery' }, v: { fa: 'عرضی ≈ ۵۰٪، برگشت خوب', en: 'Widthwise ≈ 50%, good recovery' }, t: 'T3', m: { fa: 'تست کشش دستی روی خط‌کش', en: 'Hand stretch on ruler' }, lab: 'ASTM D2594 / EN 14704-1' },
      { a: { fa: 'آبرفتگی', en: 'Shrinkage' }, v: { fa: 'طولی ≈ ۵٪ · عرضی ≈ ۳٪', en: 'Length ≈ 5% · width ≈ 3%' }, t: 'T3', m: { fa: 'شست‌وشوی نمونه', en: 'Swatch wash' }, lab: 'ISO 5077 / ISO 6330' },
      { a: { fa: 'اسپایرالیتی (کج‌شدگی)', en: 'Spirality' }, v: { fa: 'ریسک متوسط', en: 'Moderate risk' }, t: 'T1', m: { fa: 'دانش ساختار', en: 'Structure prior' }, lab: 'ISO 16322' },
      { a: { fa: 'پرزدهی', en: 'Pilling' }, v: { fa: 'نامعلوم', en: 'Unknown' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 12945' }
    ],
    market: {
      fa: ['<b>تاپ‌های بیسیک</b> برای لایه‌پوشی حجاب‌دار تقاضای پایدار دارند.', '<b>پیراهن میدی بادی‌اسکیم</b> برای مهمانی و فضای بسته.', 'رنگ‌های خاکی و سفالی در رنگ‌بندی فصل دیده می‌شوند.', 'نکات نمونه‌ای هستند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['<b>Basic tops</b> for modest layering show steady demand.', '<b>Body-skimming midi dress</b> for events and indoor wear.', 'Earthy terracotta tones appear in seasonal palettes.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f3_p1.jpg', name: { fa: 'تاپ آستین‌بلند فیت', en: 'Fitted long-sleeve top' }, fit: { fa: 'قبول — کشسانی امکان آزادی منفی (Negative ease) می‌دهد', en: 'Pass — stretch allows negative ease' }, dec: 'produce', cons: 0.85, units: 28, sizes: { S: 6, M: 10, L: 8, XL: 4 } },
      { id: 'P2', img: 'assets/img/f3_p2.jpg', name: { fa: 'پیراهن میدی یقه‌ایستاده', en: 'Mock-neck midi dress' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 1.6, units: 11, sizes: { S: 3, M: 4, L: 3, XL: 1 } },
      { id: 'P3', img: 'assets/img/f3_p3.jpg', name: { fa: 'کت تیلورد ساختارمند', en: 'Structured tailored blazer' }, fit: { fa: 'رد — جرسی بدنه و ثبات ابعادی ندارد', en: 'Fail — jersey lacks body & stability' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'کت تیلورد به پارچه‌ی تاری‌پودی یا دابل‌نیت با لایی نیاز دارد. سینگل‌جرسی لبه‌اش لوله می‌شود و یقه و سرشانه فرم نمی‌گیرد.', en: 'A tailored blazer needs a woven or double-knit with fusing. Single jersey curls at the edges and won\'t hold lapels or shoulders.' } }
    ],
    render: 'assets/img/f3_render.jpg',
    marker: { fa: ['دو بدنه کنار هم در عرض ۱۴۶ cm', 'الگو با آزادی منفی و کاهش ۱۰٪ عرضی برای فیت', 'استراحت پارچه (Relaxing) ۲۴ ساعت پیش از برش'], en: ['Two bodies side by side across 146 cm', 'Negative-ease block, −10% width for fit', 'Relax fabric 24 h before cutting'] },
    dnp: { fa: ['کت تیلورد ساختارمند', 'لباس با لبه‌ی آزاد بدون تثبیت (لوله شدن)', 'ادعای «ضد پرز» پیش از تست ISO 12945'], en: ['Structured tailored blazer', 'Raw unstabilised hems (edge curl)', '"Anti-pilling" claim before ISO 12945 test'] },
    machine: { file: 'R2R_F3_Terracotta_knit_patterns_v1.dxf', target: { fa: 'الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber', en: 'Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber' },
      checks: { fa: ['بلوک‌های کشی با آزادی منفی', 'مارکر با تراز کج‌شدگی (Spirality)', 'آینده: فایل بافت مستقیم Stoll / Shima Seiki', 'بدون ارسال خودکار — تأیید G4'], en: ['Stretch blocks with negative ease', 'Marker aligned for spirality', 'Future: direct Stoll / Shima Seiki knit file', 'No auto-send — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: تشخیص راه‌راه بارِه (Barré)، سوراخ و کج‌شدگی روی رول (A8).', en: 'Machine vision: barré, holes and spirality detection on the roll (A8).' },
    caption: { fa: 'تاپ «سفال» 🧡\nبافت کشی نرم که با بدن حرکت می‌کنه؛ پایه‌ی هر استایل.\nدر ۴ سایز، تعداد محدود.\nراهنمای سایز در هایلایت‌ها 🤍\n#تاپ_کشی #بیسیک #استایل_روزمره', en: '"Sofal" top 🧡\nSoft stretch knit that moves with you; the base of every look.\nIn 4 sizes, limited quantity.\nSize guide in highlights 🤍\n#StretchTop #Basics #EverydayStyle' },
    claim: { fa: 'ترکیب ۹۵/۵ فقط «اعلامی» (T2) است؛ کپشن ادعای درصد الیاف نمی‌کند.', en: 'The 95/5 blend is only declared (T2); the caption makes no fibre-percentage claim.' }
  }
};
