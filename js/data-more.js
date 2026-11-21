/* R2R demo — additional samples f4–f9. ALL VALUES ARE ILLUSTRATIVE (hypothetical), not measured results. */
Object.assign(window.R2R_SAMPLES, {
  f4: {
    id: 'f4',
    swatch: 'assets/img/f4_swatch.jpg',
    name: { fa: 'ساتن ابریشمی زمردی (Charmeuse)', en: 'Emerald silk satin (charmeuse)' },
    short: { fa: 'ساتن · براق · ریزش بالا', en: 'Satin weave · high lustre · fluid' },
    cat: { fa: 'لباس مجلسی', en: 'Evening wear' },
    roll: { len: 40, width: 140, usable: 136, reserve: 3 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'بافت ساتن ۵ یا ۸ وردی؛ رو براق، پشت مات', en: '5- or 8-end satin; lustrous face, matte back' }, t: 'T1', m: { fa: 'تصویر ماکرو رو و پشت', en: 'Macro, face and back' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'ابریشم؟ یا پلی‌استر شبه‌ابریشم', en: 'Silk? or silk-like polyester' }, t: 'T1', m: { fa: 'ظاهر و دست‌خور؛ تست سوزاندن نمونه‌ی کوچک مبهم بود', en: 'Look & hand; small-sample burn test inconclusive' }, lab: 'AATCC TM20 / ISO 1833' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۱۹ momme (≈ ۸۰ g/m²)', en: '≈ 19 momme (≈ 80 g/m²)' }, t: 'T2', m: { fa: 'برگه‌ی فروشنده', en: 'Supplier sheet' }, lab: 'ISO 3801' },
      { a: { fa: 'لغزش درز', en: 'Seam slippage' }, v: { fa: 'ریسک بالا در درزهای تحت کشش', en: 'High risk on stressed seams' }, t: 'T1', m: { fa: 'دانش ساختار ساتن', en: 'Satin-structure prior' }, lab: 'ISO 13936-2' },
      { a: { fa: 'جهت براقیت', en: 'Sheen direction' }, v: { fa: 'شید با جهت نور عوض می‌شود → برش یک‌طرفه', en: 'Shade shifts with light → one-way lay' }, t: 'T3', m: { fa: 'عکس از دو جهت', en: 'Photos from two directions' } },
      { a: { fa: 'ریزش (Drape)', en: 'Drape' }, v: { fa: 'بسیار روان؛ بدنه‌ی ایستاده ندارد', en: 'Very fluid; no standing body' }, t: 'T1', m: { fa: 'ویدیوی آویز', en: 'Hanging video' } },
      { a: { fa: 'ثبات رنگ (آب/لکه‌ی آب)', en: 'Colour fastness (water spotting)' }, v: { fa: 'نامعلوم', en: 'Unknown' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 105-E07 / D01' }
    ],
    market: {
      fa: ['جست‌وجوی فارسی <b>پیراهن مجلسی پوشیده</b> و <b>لباس نامزدی ساتن</b> پیش از فصل عروسی (تابستان) بالا می‌رود.', 'رنگ زمردی و سبز یشمی در مجالس پاییزی دیده می‌شود.', 'بلوز ساتن برای ست با شلوار پارچه‌ای، خرید دوم مشتری است.', 'نکته‌ها نمایشی‌اند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['Persian searches for <b>modest evening gowns</b> and <b>satin engagement dresses</b> rise before wedding season (summer).', 'Emerald and jade green appear in autumn event wear.', 'A satin blouse to pair with tailored trousers is a typical second purchase.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f4_p1.jpg', name: { fa: 'پیراهن مجلسی بایس‌کات آستین‌دار، یقه‌ی آبشاری', en: 'Long-sleeve bias-cut evening gown, cowl neck' }, fit: { fa: 'قبول — ریزش پارچه برای برش بایس ایده‌آل است', en: 'Pass — fluid drape is ideal for bias cut' }, dec: 'produce', cons: 3.4, units: 6, sizes: { S: 1, M: 2, L: 2, XL: 1 } },
      { id: 'P2', img: 'assets/img/f4_p2.jpg', name: { fa: 'بلوز ساتن پاپیونی، آستین پفی', en: 'Pussy-bow satin blouse, bishop sleeves' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 1.9, units: 8, sizes: { S: 2, M: 3, L: 2, XL: 1 } },
      { id: 'P3', img: 'assets/img/f4_p3.jpg', name: { fa: 'لباس پرنسسی دامن‌پفی ساختارمند', en: 'Structured ball gown, sculpted pleated skirt' }, fit: { fa: 'رد — پارچه بدنه ندارد که فرم بگیرد', en: 'Fail — fabric has no body to hold volume' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'دامن پف‌دار ایستاده به پارچه‌ی خشک (میکادو، تافته یا داچس) نیاز دارد. این ساتن ۸۰ گرمی روی بدن می‌ریزد؛ فرم فقط با لایه‌های تور و لایی سنگین ممکن است که هزینه و وزن را بالا می‌برد.', en: 'A standing ball skirt needs a crisp fabric (mikado, taffeta or duchess). This 80 g/m² satin collapses onto the body; the shape would need heavy tulle and interlining, adding cost and weight.' } }
    ],
    render: 'assets/img/f4_render.jpg',
    marker: { fa: ['برش یک‌طرفه و تک‌لایه (Single-ply) به‌خاطر جهت براقیت', 'قطعات بایس با زاویه‌ی ۴۵° → مصرف بیشتر در هر عدد', 'ساندویچ کاغذ زیر و روی پارچه برای جلوگیری از لغزش'], en: ['One-way, single-ply lay because of sheen direction', 'Bias pieces at 45° → higher consumption per unit', 'Paper sandwich above and below to stop slipping'] },
    dnp: { fa: ['دامن پف‌دار ساختارمند', 'برچسب «ابریشم ۱۰۰٪» تا تأیید آزمایشگاه', 'دستور شست‌وشوی ماشینی پیش از تست ثبات رنگ'], en: ['Structured volume skirts', 'Any "100% silk" label before lab confirmation', 'Machine-wash care label before colour-fastness tests'] },
    machine: { file: 'R2R_F4_Emerald_bias_gown_v1.dxf', target: { fa: 'الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber (برش تک‌لایه)', en: 'Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber (single-ply cut)' },
      checks: { fa: ['خط راه پارچه‌ی ۴۵° روی هر قطعه‌ی بایس', 'فلش جهت براقیت روی همه‌ی قطعات', 'آزادی درز ۱٫۵ cm برای جبران لغزش درز', 'بدون ارسال خودکار — تأیید G4'], en: ['45° grainline on every bias piece', 'Sheen-direction arrow on all pieces', '1.5 cm seam allowance against seam slippage', 'No auto-send — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: تشخیص نخ‌کشیدگی (Snag)، لکه‌ی آب و اختلاف شید براقیت روی رول (A8).', en: 'Machine vision: snags, water marks and sheen shading along the roll (A8).' },
    caption: { fa: 'پیراهن مجلسی «زمرد» 💚\nبرش بایس که روی بدن می‌ریزه و با هر قدم موج می‌گیره؛ پوشیده و آستین‌دار.\nتولید محدود: فقط ۶ عدد ✨\nبرای مشاوره‌ی سایز دایرکت بدید.\n#لباس_مجلسی #مجلسی_پوشیده #ساتن', en: '"Zomorrod" evening gown 💚\nA bias cut that flows with every step; modest, with long sleeves.\nLimited run: only 6 pieces ✨\nDM for sizing advice.\n#EveningWear #ModestEvening #Satin' },
    claim: { fa: 'کلمه‌ی «ابریشم» در کپشن نیامده؛ جنس فقط T1 است و پلی‌استر شبه‌ابریشم رد نشده.', en: 'The word "silk" is not used: fibre is only T1 and silk-like polyester is not ruled out.' }
  },
  f5: {
    id: 'f5',
    swatch: 'assets/img/f5_swatch.jpg',
    name: { fa: 'کتان سنگین طبیعی (لینن)', en: 'Heavy natural linen' },
    short: { fa: 'تاری‌پودی ساده · گره‌دار · خنک', en: 'Plain weave · slubby · breathable' },
    cat: { fa: 'پوشاک مردانه', en: 'Menswear' },
    roll: { len: 50, width: 145, usable: 141, reserve: 3.5 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'بافت ساده با نخ‌های گره‌دار (Slub)', en: 'Plain weave with slub yarns' }, t: 'T1', m: { fa: 'تصویر ماکرو', en: 'Macro image' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'کتان (Linen) — شاید مخلوط با ویسکوز', en: 'Linen — possibly viscose blend' }, t: 'T3', m: { fa: 'تست سوزاندن: بوی کاغذ سوخته، خاکستر خاکستری', en: 'Burn test: burnt-paper smell, grey ash' }, lab: 'ISO 1833 / AATCC TM20' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۲۰۰ g/m²', en: '≈ 200 g/m²' }, t: 'T3', m: { fa: 'دایره‌بُر + ترازو', en: 'GSM cutter + scale' }, lab: 'ISO 3801' },
      { a: { fa: 'چروک‌پذیری', en: 'Crease recovery' }, v: { fa: 'کم — چروک طبیعی کتان', en: 'Low — natural linen creasing' }, t: 'T3', m: { fa: 'تست مچاله‌کردن دستی ۳۰ ثانیه', en: '30-second hand-crush test' }, lab: 'ISO 2313 / AATCC TM124' },
      { a: { fa: 'آبرفتگی', en: 'Shrinkage' }, v: { fa: 'تار ≈ ۵٪ · پود ≈ ۳٪ (شسته‌نشده)', en: 'Warp ≈ 5% · weft ≈ 3% (unwashed)' }, t: 'T3', m: { fa: 'شست‌وشوی نمونه‌ی علامت‌دار', en: 'Marked-swatch wash' }, lab: 'ISO 5077 / ISO 6330' },
      { a: { fa: 'گره‌ها (Slub)', en: 'Slubs' }, v: { fa: 'ویژگی طبیعی، نه عیب — باید از عیب تفکیک شود', en: 'Natural feature, not a defect — must be told apart' }, t: 'T1', m: { fa: 'بینایی (A8)', en: 'Vision (A8)' } },
      { a: { fa: 'ثبات رنگ نور', en: 'Light fastness' }, v: { fa: 'نامعلوم (رنگ طبیعی بی‌رنگ‌شده)', en: 'Unknown (undyed natural)' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 105-B02' }
    ],
    market: {
      fa: ['<b>پیراهن یقه‌کوبایی مردانه</b> و <b>شلوار کتان کش‌کمری</b> در جنوب کشور و سفرهای تابستانی پرطرفدارند.', 'رنگ‌های خام و بژ طبیعی برای مخاطب ۲۵ تا ۴۰ سال.', 'مشتری کتان، چروک را «حس طبیعی» می‌داند؛ نباید وعده‌ی «بدون چروک» داد.', 'نکته‌ها نمایشی‌اند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['<b>Men’s camp-collar shirts</b> and <b>drawstring linen trousers</b> are popular in the south and for summer travel.', 'Raw and natural beige tones for the 25–40 audience.', 'Linen buyers read wrinkles as a “natural feel”; never promise “wrinkle-free”.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f5_p1.jpg', name: { fa: 'پیراهن مردانه یقه‌کوبایی آستین‌کوتاه', en: 'Men’s short-sleeve camp-collar shirt' }, fit: { fa: 'قبول — فرم آزاد با چروک طبیعی کتان سازگار است', en: 'Pass — relaxed fit suits natural linen creasing' }, dec: 'produce', cons: 1.55, units: 18, sizes: { M: 5, L: 7, XL: 4, XXL: 2 } },
      { id: 'P2', img: 'assets/img/f5_p2.jpg', name: { fa: 'شلوار گشاد کش‌کمری مردانه', en: 'Men’s relaxed drawstring trousers' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 1.4, units: 13, sizes: { M: 4, L: 5, XL: 3, XXL: 1 } },
      { id: 'P3', img: 'assets/img/f5_p3.jpg', name: { fa: 'پیراهن اداری اسلیم «بدون اتو»', en: 'Slim “non-iron” business shirt' }, fit: { fa: 'رد — ادعای «بدون اتو» با کتان خام ممکن نیست', en: 'Fail — “non-iron” is impossible with untreated linen' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'کتان برگشت‌پذیری چروک پایینی دارد. پیراهن رسمی صاف و «بدون اتو» فقط با تکمیل رزینی و قبول تست ظاهر پس از شست‌وشو (AATCC TM124) قابل ادعاست؛ این رول تکمیل ندارد.', en: 'Linen has low crease recovery. A smooth “non-iron” formal shirt can only be claimed with a resin finish that passes the after-wash appearance test (AATCC TM124); this roll is unfinished.' } }
    ],
    render: 'assets/img/f5_render.jpg',
    marker: { fa: ['پیش‌شست‌وشوی رول (Pre-wash) پیش از برش', 'جبران آبرفتگی: ضریب ۱/(۱−۰٫۰۵) در جهت تار', 'برش دوطرفه مجاز است (بدون جهت)'], en: ['Pre-wash the roll before cutting', 'Shrinkage compensation: ×1/(1−0.05) in warp', 'Two-way lay allowed (non-directional)'] },
    dnp: { fa: ['پیراهن «بدون اتو» یا «ضد چروک»', 'برچسب «۱۰۰٪ کتان» تا تست ISO 1833', 'برش پیش از پیش‌شست‌وشو'], en: ['“Non-iron” or “wrinkle-free” shirts', '“100% linen” label before ISO 1833', 'Cutting before pre-wash'] },
    machine: { file: 'R2R_F5_Oat_linen_menswear_v1.dxf', target: { fa: 'الگو و مارکر → DXF-AAMA برای CLO · Lectra · Gerber', en: 'Pattern & marker → DXF-AAMA for CLO · Lectra · Gerber' },
      checks: { fa: ['سایزبندی مردانه M تا XXL', 'مارکر دوطرفه پس از پیش‌شست‌وشو، عرض مفید ۱۴۱ cm', 'نقاط دکمه و جیب در DXF', 'بدون ارسال خودکار — تأیید G4'], en: ['Menswear grading M–XXL', 'Two-way marker after pre-wash, usable width 141 cm', 'Button & pocket drill points in DXF', 'No auto-send — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: تفکیک گره‌ی طبیعی (Slub) از گره‌ی بافت، پارگی و لکه‌ی روغن (A8).', en: 'Machine vision: tells natural slubs from weaving knots, holes and oil stains (A8).' },
    caption: { fa: 'پیراهن یقه‌کوبایی «ساحل» 🌊\nکتان خنک با گره‌های طبیعی؛ چروکش هم جزو حسشه.\nبرای سفرهای تابستونی و عصرهای کنار دریا.\nدر ۴ سایز، تعداد محدود.\n#پیراهن_مردانه #کتان #استایل_تابستانه', en: '"Sahel" camp-collar shirt 🌊\nCool linen with natural slubs; the creases are part of the feel.\nFor summer trips and seaside evenings.\nIn 4 sizes, limited quantity.\n#Menswear #Linen #SummerStyle' },
    claim: { fa: 'هیچ ادعای «بدون چروک» یا «۱۰۰٪ کتان» نیامده؛ جنس T3 است و تکمیل ضد چروک وجود ندارد.', en: 'No “wrinkle-free” or “100% linen” claim: fibre is T3 and there is no anti-crease finish.' }
  },
  f6: {
    id: 'f6',
    swatch: 'assets/img/f6_swatch.jpg',
    name: { fa: 'فاستونی پشمی راه‌راه ذغالی', en: 'Charcoal pinstripe wool suiting' },
    short: { fa: 'سرژه‌ی فاستونی · راه‌ریز · متوسط', en: 'Worsted twill · pinstripe · mid-weight' },
    cat: { fa: 'کت‌وشلوار و تیلورینگ', en: 'Tailoring' },
    roll: { len: 30, width: 150, usable: 146, reserve: 2.5 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'سرژه‌ی ۲/۲ فاستونی با راه گچی هر ≈ ۱٫۲ cm', en: '2/2 worsted twill, chalk stripe every ≈ 1.2 cm' }, t: 'T1', m: { fa: 'تصویر ماکرو + خط‌کش', en: 'Macro + ruler' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'پشم غالب (شاید مخلوط با پلی‌استر)', en: 'Wool-dominant (maybe polyester blend)' }, t: 'T3', m: { fa: 'تست سوزاندن: خودخاموش‌شونده، بوی مو', en: 'Burn test: self-extinguishing, hair smell' }, lab: 'ISO 1833' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۲۶۰ g/m²', en: '≈ 260 g/m²' }, t: 'T2', m: { fa: 'برگه‌ی کارخانه', en: 'Mill sheet' }, lab: 'ISO 3801' },
      { a: { fa: 'کجی و قوس راه‌ها', en: 'Stripe bow & skew' }, v: { fa: 'باید روی کل عرض سنجیده شود', en: 'To measure across full width' }, t: 'T1', m: { fa: 'بینایی (A8)', en: 'Vision (A8)' }, lab: 'ASTM D3882' },
      { a: { fa: 'قابلیت شست‌وشو', en: 'Washability' }, v: { fa: 'خشک‌شویی؛ ریسک نمدی‌شدن در شست‌وشوی ماشینی', en: 'Dry-clean; felting risk in machine wash' }, t: 'T1', m: { fa: 'دانش الیاف پشم', en: 'Wool prior' }, lab: 'IWTO TM31 / ISO 6330' },
      { a: { fa: 'پرزدهی', en: 'Pilling' }, v: { fa: 'کم (فاستونی)', en: 'Low (worsted)' }, t: 'T1', m: { fa: 'دانش ساختار', en: 'Structure prior' }, lab: 'ISO 12945-2' },
      { a: { fa: 'ثبات رنگ خشک‌شویی', en: 'Dry-clean fastness' }, v: { fa: 'نامعلوم', en: 'Unknown' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 105-D01' }
    ],
    market: {
      fa: ['<b>کت‌وشلوار تک‌دکمه‌ی مردانه</b> با راه‌ریز برای فصل عقد و مراسم پاییز.', '<b>شلوار پیلی‌دار گشاد زنانه</b> از پارچه‌ی کت‌وشلواری، ترند پوشش اداری.', 'خریدار کت‌وشلوار به «تطابق راه‌ها در درزها» حساس است.', 'نکته‌ها نمایشی‌اند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['<b>Men’s single-breasted pinstripe suits</b> for engagement season and autumn ceremonies.', '<b>Women’s wide pleated trousers</b> in suiting cloth trend in office wear.', 'Suit buyers notice whether stripes match at the seams.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f6_p1.jpg', name: { fa: 'کت‌وشلوار مردانه تک‌دکمه‌ی دوتایی', en: 'Men’s two-button single-breasted suit' }, fit: { fa: 'قبول — بدنه و ثبات فاستونی برای تیلورینگ عالی است', en: 'Pass — worsted body & stability are ideal for tailoring' }, dec: 'produce', cons: 3.1, units: 6, sizes: { '48': 1, '50': 2, '52': 2, '54': 1 } },
      { id: 'P2', img: 'assets/img/f6_p2.jpg', name: { fa: 'شلوار زنانه پیلی‌دار گشاد', en: 'Women’s pleated wide-leg trousers' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 1.45, units: 6, sizes: { S: 1, M: 2, L: 2, XL: 1 } },
      { id: 'P3', img: 'assets/img/f6_p3.jpg', name: { fa: 'سارافون مدرسه‌ی کودک (شست‌وشوی ماشینی)', en: 'Kids’ school pinafore (machine-washable)' }, fit: { fa: 'رد — پشم در شست‌وشوی ماشینی نمدی و جمع می‌شود', en: 'Fail — wool felts and shrinks in machine wash' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'لباس مدرسه‌ی کودک هر هفته در ماشین شسته می‌شود. پشمِ بدون تکمیل ضد نمد (Superwash) در شست‌وشوی گرم جمع می‌شود؛ ادعای «قابل شست‌وشو» فقط با قبولی در IWTO TM31 مجاز است.', en: 'Kids’ uniforms are machine-washed weekly. Wool without a superwash finish felts and shrinks in warm washes; a “washable” claim needs a pass in IWTO TM31.' } }
    ],
    render: 'assets/img/f6_render.jpg',
    marker: { fa: ['مارکر با تطابق راه (Stripe matching) → حدود ۸٪ مصرف بیشتر', 'برش یک‌طرفه؛ نقاط تطابق روی سرشانه، پهلو و آستین', 'آزمون کجی راه‌ها پیش از چیدن لایه‌ها'], en: ['Stripe-matched marker → about 8% more fabric', 'One-way lay; match points on shoulder, side and sleeve', 'Check stripe skew before spreading plies'] },
    dnp: { fa: ['لباس کودک با شست‌وشوی ماشینی', 'برچسب «۱۰۰٪ پشم» تا تست ISO 1833', 'برش انبوه بدون مارکر تطابق راه'], en: ['Machine-washable kidswear', '“100% wool” label before ISO 1833', 'Bulk cutting without a stripe-matched marker'] },
    machine: { file: 'R2R_F6_Pinstripe_tailoring_v1.dxf', target: { fa: 'الگو و مارکر تطابق راه → DXF-AAMA برای Lectra · Gerber · CLO', en: 'Stripe-matched pattern & marker → DXF-AAMA for Lectra · Gerber · CLO' },
      checks: { fa: ['نقاط تطابق راه (Match points) در DXF', 'تکرار راه ۱٫۲ cm در موتور مارکر ثبت شد', 'قطعات لایی چسب‌دار + پارامتر پرس (دما، فشار، زمان) جدا', 'بدون ارسال خودکار — تأیید G4'], en: ['Stripe match points in DXF', '1.2 cm stripe repeat set in the marker engine', 'Fusible interlining pieces + fusing-press settings (temp, pressure, time)', 'No auto-send — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: اندازه‌گیری کجی و قوس راه‌ها روی عرض رول و ثبت عیب ۴ امتیازی (A8).', en: 'Machine vision: stripe bow & skew across the width and 4-point defect logging (A8).' },
    caption: { fa: 'کت‌وشلوار «تهران» 🖤\nفاستونی راه‌ریز با راه‌های هم‌تراز در هر درز؛ برای روزهایی که مهم‌اند.\nفقط ۶ دست، سایز ۴۸ تا ۵۴.\nوقت پرو رو دایرکت هماهنگ کنید.\n#کت_و_شلوار #تیلورینگ #استایل_مردانه', en: '"Tehran" suit 🖤\nPinstripe worsted with stripes aligned at every seam; for the days that matter.\nOnly 6 suits, sizes 48–54.\nBook a fitting via DM.\n#Suit #Tailoring #Menswear' },
    claim: { fa: 'از «پشم خالص» حرف زده نشده؛ جنس T3 است و دستور نگهداری «فقط خشک‌شویی» است.', en: 'No “pure wool” claim: fibre is T3, and the care label is “dry-clean only”.' }
  },
  f7: {
    id: 'f7',
    swatch: 'assets/img/f7_swatch.jpg',
    name: { fa: 'شیفون گلبهی (پلی‌استر)', en: 'Dusty-rose chiffon (polyester)' },
    short: { fa: 'تاری‌پودی کرپ · نیمه‌شفاف · بسیار سبک', en: 'Crepe-twist plain weave · sheer · featherweight' },
    cat: { fa: 'پوشش محجبه و مانتو', en: 'Modest wear' },
    roll: { len: 60, width: 150, usable: 146, reserve: 4 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'بافت ساده با نخ کرپ (تاب زیاد)', en: 'Plain weave, high-twist crepe yarns' }, t: 'T1', m: { fa: 'تصویر ماکرو', en: 'Macro image' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'پلی‌استر', en: 'Polyester' }, t: 'T3', m: { fa: 'تست سوزاندن: ذوب، دانه‌ی سخت سیاه', en: 'Burn test: melts, hard black bead' }, lab: 'ISO 1833' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۵۰ g/m²', en: '≈ 50 g/m²' }, t: 'T2', m: { fa: 'برگه‌ی فروشنده', en: 'Supplier sheet' }, lab: 'ISO 3801' },
      { a: { fa: 'شفافیت', en: 'Opacity' }, v: { fa: 'نیمه‌شفاف — بدون آستر دید دارد', en: 'Semi-sheer — see-through without lining' }, t: 'T3', m: { fa: 'تست نور پشت (دست پشت پارچه)', en: 'Backlight test (hand behind fabric)' }, lab: 'Light-transmittance test' },
      { a: { fa: 'لغزش و ریش‌ریش‌شدن', en: 'Fraying & slippage' }, v: { fa: 'زیاد — لبه باید دوخته یا ذوب شود', en: 'High — edges must be rolled or sealed' }, t: 'T1', m: { fa: 'دانش ساختار', en: 'Structure prior' }, lab: 'ISO 13936-2' },
      { a: { fa: 'الکتریسیته‌ی ساکن', en: 'Static cling' }, v: { fa: 'احتمال چسبیدن به بدن در هوای خشک', en: 'Likely cling in dry air' }, t: 'T1', m: { fa: 'دانش الیاف', en: 'Fibre prior' } },
      { a: { fa: 'ثبات رنگ شست‌وشو', en: 'Wash fastness' }, v: { fa: 'نامعلوم', en: 'Unknown' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 105-C06' }
    ],
    market: {
      fa: ['<b>مانتوی جلوباز لایه‌ای</b> و <b>شال شیفون</b> از پرفروش‌ترین اقلام پوشش محجبه در بهار و تابستان‌اند.', 'گلبهی، کرم و نود رنگ‌های تکرارشونده‌ی فصل هستند.', 'شال، پرتیراژ و کم‌ریسک است و برای سنجش بازار مناسب است.', 'نکته‌ها نمایشی‌اند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['<b>Layered open mantos</b> and <b>chiffon shawls</b> are top sellers in spring/summer modest wear.', 'Dusty rose, cream and nude recur in the season’s palette.', 'Shawls are high-volume and low-risk — good for testing the market.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f7_p1.jpg', name: { fa: 'مانتو جلوباز لایه‌ای با آستین چین‌دار (روی سارافون آستردار)', en: 'Layered open manto, tiered sleeves (over a lined slip)' }, fit: { fa: 'قبول — شفافیت به‌صورت لایه‌ی رویی و با زیرپوش مات حل شده', en: 'Pass — sheerness used as an outer layer over an opaque slip' }, dec: 'produce', cons: 3.6, units: 9, sizes: { 'S/M': 4, 'L/XL': 5 } },
      { id: 'P2', img: 'assets/img/f7_p2.jpg', name: { fa: 'شال شیفون ۷۰×۲۰۰ با لبه‌ی رول', en: 'Chiffon shawl 70×200, rolled hem' }, fit: { fa: 'قبول — دو شال در عرض رول', en: 'Pass — two shawls across the width' }, dec: 'limited', cons: 1.03, units: 22, sizes: { '70×200': 22 } },
      { id: 'P3', img: 'assets/img/f7_p3.jpg', name: { fa: 'پیراهن تک‌لایه‌ی بدون آستر', en: 'Single-layer unlined dress' }, fit: { fa: 'رد — پارچه دید دارد؛ پوشش لازم را نمی‌دهد', en: 'Fail — fabric is see-through; does not give the required coverage' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'شیفون ۵۰ گرمی بدون آستر بدن را نشان می‌دهد و برای پوشش محجبه یا حتی پوشش عمومی پذیرفته نیست. این مدل فقط با آستر کامل ممکن است که آن هم پارچه‌ی دوم و هزینه‌ی جدا لازم دارد.', en: 'Unlined 50 g/m² chiffon shows the body and is not acceptable for modest or even general wear. It only works fully lined, which needs a second fabric and its own cost.' } }
    ],
    render: 'assets/img/f7_render.jpg',
    marker: { fa: ['دو شال ۷۰ cm کنار هم در عرض مفید ۱۴۶ cm', 'میز برش با کاغذ زیرین و وزنه؛ بدون سنجاق', 'لبه‌ی شال با دوخت رول یا برش لیزری (ذوب لبه)'], en: ['Two 70 cm shawls side by side in 146 cm usable width', 'Cut on paper underlay with weights; no pins', 'Shawl edges rolled-hem or laser-sealed'] },
    dnp: { fa: ['لباس تک‌لایه‌ی بدون آستر', 'ادعای «ضد الکتریسیته» بدون تکمیل و تست', 'اتوی داغ (ذوب پلی‌استر)'], en: ['Single-layer unlined garments', '“Anti-static” claim without a finish and test', 'Hot iron settings (polyester melts)'] },
    machine: { file: 'R2R_F7_Rose_chiffon_laser_v1.dxf', target: { fa: 'شال‌ها → فایل برداری DXF برای دستگاه برش لیزری / اولتراسونیک (لبه‌ی ذوب‌شده) · مانتو → DXF-AAMA', en: 'Shawls → vector DXF for laser / ultrasonic cutter (sealed edges) · manto → DXF-AAMA' },
      checks: { fa: ['مسیر برش لیزر تک‌خطی بدون همپوشانی', 'توان و سرعت لیزر برای پلی‌استر ۵۰ گرمی (تست روی تکه)', 'الگوی مانتو با آستین چین‌دار، سایز آزاد ۲ گروه', 'بدون ارسال خودکار — تأیید G4'], en: ['Single-line laser path, no overlaps', 'Laser power & speed for 50 g/m² polyester (test on offcut)', 'Manto pattern with tiered sleeves, 2 free-size groups', 'No auto-send — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: تشخیص نخ‌کشیدگی، سوراخ ریز و یکنواختی شفافیت با نور پشت روی رول (A8).', en: 'Machine vision: pulled threads, pinholes and opacity evenness with backlight along the roll (A8).' },
    caption: { fa: 'مانتو لایه‌ای «نارنجستان» 🌸\nشیفون سبک و رقصان، روی سارافون آستردار؛ پوشیده، خنک و مجلسی.\nبه‌همراه شال هم‌رنگ 🧕\nتولید محدود، ۲ سایز آزاد.\n#مانتو_مجلسی #شال_شیفون #پوشش_محجبه', en: '"Narenjestan" layered manto 🌸\nLight, floating chiffon over a lined slip; modest, cool and dressy.\nWith a matching shawl 🧕\nLimited run, 2 free sizes.\n#ModestFashion #ChiffonShawl #Manto' },
    claim: { fa: 'واژه‌ی «ابریشم» یا «حریر» به کار نرفته؛ جنس پلی‌استر (T3) است و کپشن آن را بزرگ‌نمایی نمی‌کند.', en: 'No “silk” wording: the fibre is polyester (T3) and the caption does not dress it up.' }
  },
  f8: {
    id: 'f8',
    swatch: 'assets/img/f8_swatch.jpg',
    name: { fa: 'مخمل پنبه‌ای زرشکی', en: 'Burgundy cotton velvet' },
    short: { fa: 'پرزدار تاری‌پودی · خواب‌دار · سنگین', en: 'Woven pile · napped · heavy' },
    cat: { fa: 'منسوجات خانگی + مجلسی', en: 'Home textile + evening' },
    roll: { len: 35, width: 140, usable: 134, reserve: 3 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'مخمل تاری‌پودی با پرز بریده‌شده', en: 'Woven velvet, cut pile' }, t: 'T1', m: { fa: 'تصویر ماکرو، پرز از کنار', en: 'Macro, pile side view' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'پنبه‌ی غالب؟ (شاید ویسکوز در پرز)', en: 'Cotton-dominant? (maybe viscose pile)' }, t: 'T1', m: { fa: 'ظاهر و دست‌خور', en: 'Look & hand' }, lab: 'ISO 1833' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۳۲۰ g/m²', en: '≈ 320 g/m²' }, t: 'T3', m: { fa: 'دایره‌بُر + ترازو', en: 'GSM cutter + scale' }, lab: 'ISO 3801' },
      { a: { fa: 'جهت خواب پرز', en: 'Nap direction' }, v: { fa: 'شید با جهت خواب عوض می‌شود → برش یک‌طرفه اجباری', en: 'Shade flips with nap → one-way lay mandatory' }, t: 'T3', m: { fa: 'کشیدن دست در دو جهت + عکس', en: 'Hand-brush both ways + photo' } },
      { a: { fa: 'له‌شدن پرز', en: 'Pile crush' }, v: { fa: 'حساس به فشار و اتو', en: 'Sensitive to pressure & ironing' }, t: 'T1', m: { fa: 'دانش ساختار', en: 'Structure prior' }, lab: 'ISO 12947 (Martindale)' },
      { a: { fa: 'اشتعال‌پذیری (مبلمان)', en: 'Ignitability (furnishing)' }, v: { fa: 'برای روکش کوسن/مبل تست لازم است', en: 'Test needed for cushion/upholstery use' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'EN 1021-1/-2' },
      { a: { fa: 'ثبات رنگ سایشی', en: 'Rub fastness' }, v: { fa: 'زرشکی تیره: ریسک رنگ‌دهی', en: 'Dark burgundy: crocking risk' }, t: 'T1', m: { fa: 'دانش رنگ', en: 'Dye prior' }, lab: 'ISO 105-X12' }
    ],
    market: {
      fa: ['<b>کوسن و رومبلی مخمل</b> در دکوراسیون شب یلدا و پاییز تقاضای فصلی دارد.', '<b>کت مجلسی مخمل زنانه</b> برای مهمانی‌های زمستانی.', 'کوسن، ورود کم‌ریسک به بازار منسوجات خانگی است.', 'نکته‌ها نمایشی‌اند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['<b>Velvet cushions and throws</b> see seasonal demand for Yalda-night and autumn décor.', '<b>Women’s velvet evening blazer</b> for winter parties.', 'Cushions are a low-risk entry into home textiles.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f8_p1.jpg', name: { fa: 'روکش کوسن ۴۵×۴۵ با لوله‌دوزی و زیپ مخفی', en: 'Cushion cover 45×45, piped, hidden zip' }, fit: { fa: 'قبول — مخمل سنگین برای منسوجات خانگی عالی است', en: 'Pass — heavy velvet is ideal for home textiles' }, dec: 'produce', cons: 0.55, units: 30, sizes: { '45×45': 30 } },
      { id: 'P2', img: 'assets/img/f8_p2.jpg', name: { fa: 'کت مجلسی مخمل زنانه، یقه‌ی شال ساتن', en: 'Women’s velvet evening blazer, satin shawl lapel' }, fit: { fa: 'قبول', en: 'Pass' }, dec: 'limited', cons: 2.1, units: 7, sizes: { S: 1, M: 3, L: 2, XL: 1 } },
      { id: 'P3', img: 'assets/img/f8_p3.jpg', name: { fa: 'شلوار مخمل با خط اتوی تیز', en: 'Velvet trousers with sharp pressed creases' }, fit: { fa: 'رد — اتو پرز را له می‌کند و جای براق می‌گذارد', en: 'Fail — pressing crushes the pile and leaves shiny marks' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'خط اتوی تیز با فشار اتو ساخته می‌شود و پرز مخمل را برای همیشه می‌خواباند (لکه‌ی براق). مخمل فقط روی «نیدل‌برد» و با بخار اتو می‌شود؛ طرح باید بدون خط اتو باشد.', en: 'A sharp crease needs iron pressure, which permanently flattens velvet pile (shiny marks). Velvet can only be steamed on a needle board; the design must be crease-free.' } }
    ],
    render: 'assets/img/f8_render.jpg',
    renderCap: { fa: 'رندر دکوراسیون داخلی — پیشنهاد P1', en: 'Interior styling render — proposal P1' },
    marker: { fa: ['برش یک‌طرفه‌ی اجباری؛ فلش خواب پرز روی همه‌ی قطعات', 'کوسن: دو ردیف ۴۸ cm در عرض ۱۳۴ cm، نوار لوله از بایس', 'چیدن لایه‌ها پرز روی پرز (Face-to-face) برای جلوگیری از لغزش'], en: ['Mandatory one-way lay; nap arrow on every piece', 'Cushions: two 48 cm panels across 134 cm, bias-cut piping strips', 'Spread plies pile-to-pile to stop shifting'] },
    dnp: { fa: ['هر طرحی با خط اتوی تیز', 'فروش روکش مبل پیش از تست اشتعال EN 1021', 'ادعای «پنبه‌ی ۱۰۰٪» تا تست الیاف'], en: ['Any design with sharp pressed creases', 'Selling upholstery covers before EN 1021 ignitability test', '“100% cotton” claim before fibre test'] },
    machine: { file: 'R2R_F8_Burgundy_velvet_nap_v1.dxf', target: { fa: 'مارکر یک‌طرفه → DXF-AAMA برای Lectra · Gerber · خط تولید کوسن', en: 'One-way marker → DXF-AAMA for Lectra · Gerber · cushion line' },
      checks: { fa: ['فلش جهت خواب در همه‌ی قطعات DXF', 'نوارهای بایس لوله‌دوزی در مارکر جدا', 'دستور پرس: فقط بخار روی نیدل‌برد', 'بدون ارسال خودکار — تأیید G4'], en: ['Nap arrow on all DXF pieces', 'Bias piping strips as a separate marker', 'Press note: steam only, on a needle board', 'No auto-send — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: تشخیص پرز له‌شده، نقاط بی‌پرز (Bald spot) و اختلاف شید خواب روی رول (A8).', en: 'Machine vision: crushed pile, bald spots and nap shading along the roll (A8).' },
    caption: { fa: 'کوسن‌های مخمل «یلدا» ❤️\nزرشکی گرم برای شب‌های بلند؛ لوله‌دوزی ظریف و زیپ مخفی.\nدر ست‌های ۳تایی.\nبه‌همراه کت مجلسی هم‌پارچه 🍷\n#دکوراسیون #کوسن_مخمل #شب_یلدا', en: '"Yalda" velvet cushions ❤️\nWarm burgundy for long nights; fine piping and a hidden zip.\nIn sets of 3.\nWith a matching evening blazer 🍷\n#HomeDecor #VelvetCushions #Yalda' },
    claim: { fa: 'هیچ ادعای ایمنی آتش یا «مناسب مبلمان» نیامده؛ تست EN 1021 انجام نشده است.', en: 'No fire-safety or “upholstery-grade” claim: EN 1021 has not been tested.' }
  },
  f9: {
    id: 'f9',
    swatch: 'assets/img/f9_swatch.jpg',
    name: { fa: 'ژاکارد بته‌جقه‌ی سرمه‌ای و طلایی', en: 'Navy & gold boteh jacquard' },
    short: { fa: 'ژاکارد تاری‌پودی · نخ متالیک · خشک', en: 'Woven jacquard · metallic yarn · structured' },
    cat: { fa: 'بیرونی + کودک', en: 'Outerwear + kidswear' },
    roll: { len: 25, width: 140, usable: 136, reserve: 2.5 },
    passport: [
      { a: { fa: 'ساختار', en: 'Construction' }, v: { fa: 'ژاکارد دو پود؛ نقش طلایی با پرش‌های بلند (Float) در پشت', en: 'Two-weft jacquard; gold motif with long floats on the back' }, t: 'T1', m: { fa: 'تصویر ماکرو رو و پشت', en: 'Macro, face and back' } },
      { a: { fa: 'جنس الیاف', en: 'Fibre' }, v: { fa: 'زمینه: پلی‌استر/پنبه؟ · نقش: نخ متالیک (لورکس)', en: 'Ground: polyester/cotton? · motif: metallic (lurex) yarn' }, t: 'T1', m: { fa: 'ظاهر و دست‌خور', en: 'Look & hand' }, lab: 'ISO 1833' },
      { a: { fa: 'گرماژ', en: 'Mass per area' }, v: { fa: '≈ ۳۴۰ g/m²', en: '≈ 340 g/m²' }, t: 'T2', m: { fa: 'برگه‌ی کارخانه', en: 'Mill sheet' }, lab: 'ISO 3801' },
      { a: { fa: 'ابعاد تکرار نقش', en: 'Motif repeat' }, v: { fa: '≈ ۳۲ × ۲۸ cm، تکرار مستقیم (Straight)', en: '≈ 32 × 28 cm, straight repeat' }, t: 'T3', m: { fa: 'خط‌کش روی عکس رول', en: 'Ruler on roll photo' } },
      { a: { fa: 'گیرکردن پرش‌ها', en: 'Float snagging' }, v: { fa: 'ریسک بالا — پرش‌های بلندتر از ۷ mm', en: 'High risk — floats longer than 7 mm' }, t: 'T3', m: { fa: 'اندازه‌گیری پرش روی ماکرو', en: 'Float length on macro' }, lab: 'ASTM D3939' },
      { a: { fa: 'ریزش (Drape)', en: 'Drape' }, v: { fa: 'خشک و ایستاده؛ بدنه‌ی بالا', en: 'Stiff, standing; high body' }, t: 'T1', m: { fa: 'ویدیوی آویز', en: 'Hanging video' } },
      { a: { fa: 'ثبات نخ متالیک', en: 'Metallic yarn durability' }, v: { fa: 'ریسک تیره‌شدن در خشک‌شویی', en: 'Tarnish risk in dry cleaning' }, t: 'T1', m: { fa: '—', en: '—' }, lab: 'ISO 105-D01' }
    ],
    market: {
      fa: ['<b>کت کوتاه ژاکارد</b> با نقش ایرانی برای نوروز و مراسم، با شلوار ساده‌ی کرم.', '<b>جلیقه‌ی نوروزی کودک</b> هر سال پیش از عید تقاضای کوتاه‌مدت و پرتیراژ دارد.', 'بته‌جقه در بازار صادراتی هم «هویت ایرانی» شناخته می‌شود.', 'نکته‌ها نمایشی‌اند؛ در حالت زنده از داده‌ی واقعی خوانده می‌شوند.'],
      en: ['<b>Cropped jacquard jackets</b> with Persian motifs for Nowruz and ceremonies, worn with plain cream trousers.', '<b>Kids’ Nowruz waistcoats</b> see short, high-volume demand before the New Year.', 'Boteh reads as “Iranian identity” in export markets too.', 'Illustrative notes; read from live data in live mode.']
    },
    proposals: [
      { id: 'P1', img: 'assets/img/f9_p1.jpg', name: { fa: 'کت کوتاه باکسی زنانه، نقش جای‌گذاری‌شده', en: 'Women’s boxy cropped jacket, placed motif' }, fit: { fa: 'قبول — بدنه‌ی خشک ژاکارد فرم باکسی را نگه می‌دارد', en: 'Pass — stiff jacquard holds the boxy shape' }, dec: 'produce', cons: 1.95, units: 7, sizes: { S: 2, M: 2, L: 2, XL: 1 } },
      { id: 'P2', img: 'assets/img/f9_p2.jpg', name: { fa: 'جلیقه‌ی نوروزی پسرانه', en: 'Boys’ Nowruz waistcoat' }, fit: { fa: 'قبول — پشت جلیقه از پارچه‌ی ساده (آستر)', en: 'Pass — plain lining fabric on the back' }, dec: 'limited', cons: 0.62, units: 13, sizes: { '4Y': 3, '6Y': 4, '8Y': 4, '10Y': 2 } },
      { id: 'P3', img: 'assets/img/f9_p3.jpg', name: { fa: 'پیراهن بلند بایس‌کات با یقه‌ی آبشاری', en: 'Long bias-cut cowl-neck dress' }, fit: { fa: 'رد — پارچه خشک است و آبشار نمی‌سازد', en: 'Fail — fabric is too stiff to cowl or drape' }, dec: 'no', cons: 0, units: 0,
        why: { fa: 'یقه‌ی آبشاری و برش بایس به پارچه‌ی روان نیاز دارد. ژاکارد ۳۴۰ گرمی می‌ایستد و زاویه می‌سازد؛ برش بایس هم نقش بته را کج می‌کند و پرش‌های بلند در تماس با بدن گیر می‌کنند.', en: 'A cowl and bias cut need a fluid fabric. This 340 g/m² jacquard stands away and forms angles; bias cutting also tilts the boteh motif, and long floats snag against the body.' } }
    ],
    render: 'assets/img/f9_render.jpg',
    repeat: 'assets/img/f9_repeat.jpg',
    repeatCap: { fa: 'تکرار نقش ژاکارد (Straight، ≈ ۳۲ × ۲۸ cm)', en: 'Jacquard motif repeat (straight, ≈ 32 × 28 cm)' },
    marker: { fa: ['جای‌گذاری نقش (Motif placement): بته در مرکز پشت و دو جلو', 'تطابق نقش در جلوی کت → حدود ۱۲٪ مصرف بیشتر', 'جلیقه‌ها از فاصله‌ی بین قطعات کت (بهره‌وری مارکر)'], en: ['Motif placement: boteh centred on back and both fronts', 'Motif matching on the jacket fronts → about 12% more fabric', 'Waistcoats nested between jacket pieces (marker yield)'] },
    dnp: { fa: ['لباس بایس یا آبشاری', 'دستور «شست‌وشوی ماشینی» برای نخ متالیک', 'لباس کودک با پرش‌های بلند در داخل (بدون آستر)'], en: ['Bias-cut or cowl designs', '“Machine wash” care for metallic yarn', 'Kidswear with long floats inside (unlined)'] },
    machine: { file: 'R2R_F9_Boteh_jacquard_v1.jc5', target: { fa: 'دستگاه ژاکارد → فایل طرح بافت (Weave file) از EAT DesignScope / ArahWeave برای Stäubli (JC5) یا Bonas (EP) · الگو → DXF-AAMA', en: 'Jacquard loom → weave file from EAT DesignScope / ArahWeave for Stäubli (JC5) or Bonas (EP) · pattern → DXF-AAMA' },
      checks: { fa: ['بافت‌گذاری هر رنگ: ساتن ۸ برای طلایی، تافته برای زمینه', 'سقف طول پرش ۷ mm (ریسک گیرکردن)', 'تکرار ۳۲ cm × تعداد هوک ماشین، ۴ تکرار در عرض', 'رنگ‌بندی بعدی (زمردی/طلایی) از همین فایل', 'پیش از تولید: نمونه‌ی بافت (Blanket) — تأیید G4'], en: ['Weave per colour: 8-end satin for gold, plain for ground', 'Max float length 7 mm (snag risk)', '32 cm repeat mapped to the loom’s hook count, 4 repeats across', 'Next colourway (emerald/gold) from the same file', 'Before production: woven blanket sample — G4 approval'] } },
    qc: { fa: 'بینایی ماشین: تشخیص پود افتاده، پرش پاره و انطباق نقش بافته‌شده با فایل طرح (A8).', en: 'Machine vision: missing picks, broken floats and woven-motif registration against the design file (A8).' },
    caption: { fa: 'کت کوتاه «بته» ✨\nژاکارد سرمه‌ای با بته‌جقه‌ی طلایی؛ هویت ایرانی، فرم امروزی.\nبرای نوروز و مهمانی‌ها 🌱\nبا جلیقه‌ی نوروزی هم‌پارچه برای کوچولوها 👦\n#بته_جقه #ژاکارد #نوروز', en: '"Boteh" cropped jacket ✨\nNavy jacquard with golden boteh; Iranian identity, modern shape.\nFor Nowruz and parties 🌱\nWith a matching Nowruz waistcoat for little ones 👦\n#Boteh #Jacquard #Nowruz' },
    claim: { fa: 'از «نخ طلا» یا «دست‌باف» حرف زده نشده؛ نخ متالیک است و پارچه ماشینی بافته شده.', en: 'No “gold thread” or “hand-woven” claim: the yarn is metallic and the fabric is machine-woven.' }
  }
});
