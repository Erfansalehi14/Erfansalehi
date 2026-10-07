/* ------------------------------------------------------------------ */
/*  Site content — single source of truth for all copy and imagery.    */
/*  Swap this module for a CMS/API adapter without touching components */
/* ------------------------------------------------------------------ */

export const CLUB = {
  name: 'Padel Club',
  tagline: 'بازی. پیوند. اوج.',
  address: 'Köpenicker Str. 96, 10179 Berlin',
  phone: '+49 30 555 0180',
  phoneHref: 'tel:+49305550180',
  email: 'hello@padelclub.com',
};

export const NAV_LINKS = [
  { id: 'home', label: 'خانه' },
  { id: 'club', label: 'باشگاه' },
  { id: 'courts', label: 'زمین‌ها' },
  { id: 'membership', label: 'عضویت' },
  { id: 'gallery', label: 'گالری' },
  { id: 'contact', label: 'تماس' },
];

export const FACILITIES = [
  {
    icon: 'court',
    title: 'زمین‌های لوکس',
    text: 'سطوحی درجه‌یک، نورپردازی حرفه‌ای و شرایط بازی بی‌نقص در سطح جهان.',
  },
  {
    icon: 'lounge',
    title: 'خانهٔ باشگاه',
    text: 'در لانژ و کافهٔ لوکس ما ریکاوری کنید و انرژی بگیرید.',
  },
  {
    icon: 'fitness',
    title: 'فضای بدنسازی',
    text: 'فضاهای تمرین عملکردی، طراحی‌شده برای ارتقای بازی شما.',
  },
  {
    icon: 'community',
    title: 'جامعهٔ بازیکنان',
    text: 'به رویدادها، لیگ‌ها و جامعه‌ای بپیوندید که با هم بازی می‌کند.',
  },
];

export const SHOWCASE_IMAGES = [
  { src: '/images/gallery-racket.jpg', label: 'تجهیزات', alt: 'راکت و توپ‌های پدل روی زمین آبی' },
  { src: '/images/gallery-clubhouse.jpg', label: 'خانهٔ باشگاه', alt: 'لانژ و بار خانهٔ باشگاه با نور گرم' },
  { src: '/images/gallery-dusk.jpg', label: 'زمین‌ها', alt: 'زمین‌های پدل روشن در غروب' },
  { src: '/images/gallery-detail.jpg', label: 'جزئیات', alt: 'نمای نزدیک راکت و توپ‌های پدل' },
];

export const COURTS = [
  {
    id: 'panoramic',
    code: 'زمین ۰۱',
    name: 'زمین پانوراما',
    img: '/images/court-1.jpg',
    desc: 'شیشه‌های سرتاسری و بازشوهای تمام‌قد با منظوری بی‌واسطه از سراسر باشگاه.',
    capacity: '۲–۴ بازیکن',
    lighting: 'سیستم کامل LED',
    surface: 'چمن مونوفیلامنت',
  },
  {
    id: 'premium',
    code: 'زمین ۰۲',
    name: 'زمین پرمیوم',
    img: '/images/court-2.jpg',
    desc: 'چمن آبی در سطح مسابقات، تنظیم‌شده برای سرعت، کنترل و رالی‌های طولانی زیر نورافکن‌ها.',
    capacity: '۲–۴ بازیکن',
    lighting: 'نورافکن‌های LED',
    surface: 'چمن مونوفیلامنت آبی',
  },
  {
    id: 'private',
    code: 'زمین ۰۳',
    name: 'زمین خصوصی',
    img: '/images/court-3.jpg',
    desc: 'زمین سرپوشیده و محصور با فضایی آرام‌تر و حس‌وحال باشگاهی، ویژهٔ اعضا.',
    capacity: '۲–۴ بازیکن',
    lighting: 'LED گرم غیرمستقیم',
    surface: 'چمن اکریلیک پرمیوم',
  },
];

export const MEMBERSHIPS = [
  {
    id: 'essential',
    name: 'پایه',
    price: 49,
    blurb: 'برای بازیکنانی که دسترسی مطمئن به زمین‌ها می‌خواهند.',
    benefits: [
      'دسترسی به رزرو زمین',
      'رویدادهای اعضا',
      'دسترسی به خانهٔ باشگاه',
      'شرکت در لیگ‌ها',
    ],
    featured: false,
  },
  {
    id: 'performance',
    name: 'حرفه‌ای',
    price: 99,
    blurb: 'تجربهٔ کامل بازی، هفت روزِ هفته.',
    benefits: [
      'دسترسی به رزرو زمین',
      'رزرو در اولویت',
      'رویدادهای اعضا',
      'دسترسی به خانهٔ باشگاه',
      'فضای بدنسازی',
      'شرکت در لیگ‌ها',
    ],
    featured: true,
  },
  {
    id: 'elite',
    name: 'ویژه',
    price: 199,
    blurb: 'بالاترین سطح زندگی باشگاهی؛ داخل و خارج زمین.',
    benefits: [
      'همهٔ امکانات طرح حرفه‌ای',
      'پذیرایی از مهمان',
      'اولویت زمین خصوصی',
      'جلسهٔ تمرین شخصی',
      'کمد و سرویس حوله',
      'کنسیرژ اختصاصی',
    ],
    featured: false,
  },
];

export const EVENTS = [
  {
    day: '۱۷',
    month: 'اکتبر',
    title: 'تورنمنت پدل',
    text: 'صعودی یک‌روزه برای اعضا و مهمانان؛ بازی‌های سریع، هیجان بالا.',
    location: 'زمین پانوراما',
  },
  {
    day: '۲۳',
    month: 'اکتبر',
    title: 'جمع‌شب پدل',
    text: 'دورهای اجتماعی زیر نورافکن‌ها و پس از آن، نوشیدنی در خانهٔ باشگاه.',
    location: 'همهٔ زمین‌ها',
  },
  {
    day: '۰۵',
    month: 'نوامبر',
    title: 'دورهمی اعضا',
    text: 'شبی در لانژ برای اعضای تازه و دیرینه.',
    location: 'لانژ خانهٔ باشگاه',
  },
  {
    day: '۱۴',
    month: 'نوامبر',
    title: 'کلینیک مقدماتی',
    text: 'دو ساعت آشنایی با پدل در کنار سرمربی ما.',
    location: 'زمین پرمیوم',
  },
];

export const GALLERY_CATS = ['همه', 'زمین‌ها', 'خانهٔ باشگاه', 'جامعه', 'رویدادها'];

export const GALLERY_ITEMS = [
  { src: '/images/hero.jpg', cat: 'زمین‌ها', label: 'نشست شبانه', alt: 'زمین‌های پدل روشن و حصارکشی زیر نورافکن‌های شب' },
  { src: '/images/gallery-clubhouse.jpg', cat: 'خانهٔ باشگاه', label: 'لانژ', alt: 'لانژ و بار خانهٔ باشگاه با نور گرم' },
  { src: '/images/gallery-players.jpg', cat: 'جامعه', label: 'مسابقهٔ باشگاه', alt: 'بازیکنان در مسابقه‌ای پرانرژی روی زمین‌های آبی' },
  { src: '/images/gallery-racket.jpg', cat: 'زمین‌ها', label: 'راکت و توپ‌ها', alt: 'راکت‌ها و توپ‌های پدل روی زمین' },
  { src: '/images/gallery-event.jpg', cat: 'رویدادها', label: 'شب نمایشی', alt: 'مسابقهٔ نمایشی حرفه‌ای پدل در شب' },
  { src: '/images/gallery-dusk.jpg', cat: 'زمین‌ها', label: 'ساعت آبی', alt: 'زمین‌های پدل درخشان در غروب' },
  { src: '/images/gallery-lounge.jpg', cat: 'خانهٔ باشگاه', label: 'پس از ساعت بازی', alt: 'فضای آرام لانژ در غروب شب' },
  { src: '/images/gallery-detail.jpg', cat: 'زمین‌ها', label: 'آرنا سرپوشیده', alt: 'فضای داخلی آرنای سرپوشیدهٔ پدل' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'باشگاه',
    links: [
      { label: 'درباره ما', href: '#club' },
      { label: 'امکانات', href: '#facilities' },
      { label: 'عضویت', href: '#membership' },
      { label: 'رویدادها', href: '#events' },
    ],
  },
  {
    title: 'بازی',
    links: [
      { label: 'زمین‌ها', href: '#courts' },
      { label: 'رزرو زمین', href: '#booking' },
      { label: 'لیگ‌ها', href: '#events' },
      { label: 'مربیگری', href: '#events' },
    ],
  },
  {
    title: 'شبکه‌های اجتماعی',
    links: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Facebook', href: 'https://facebook.com' },
      { label: 'YouTube', href: 'https://youtube.com' },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: 'سیاست حفظ حریم خصوصی', href: '#' },
  { label: 'شرایط و مقررات', href: '#' },
  { label: 'سیاست کوکی‌ها', href: '#' },
];
