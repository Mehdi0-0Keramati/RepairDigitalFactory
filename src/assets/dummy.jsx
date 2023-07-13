import {
  BookTimePic,
  FunFact1,
  FunFact2,
  FunFact3,
  FunFact4,
  TeamMember1,
  TeamMember2,
  TeamMember3,
  TeamMember4,
  WhyChoseUs1,
  WhyChoseUs2,
  WhyChoseUs3,
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  Banner1,
  Banner2,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  commentPic1,
  commentPic2,
  commentPic3,
} from "./index";

export const NavbarItems = [
  {
    name: "صفحه اصلی",
    href: "#Home",
  },
  {
    name: "درباره ما",
    href: "#AboutUs",
  },
  {
    name: "خدمات",
    href: "#Services",
  },
  {
    name: "متخصصین",
    href: "#Experts",
  },
  {
    name: "نظرات مشتریان",
    href: "#Comments",
  },
];

export const IntroduceData = [
  {
    bgSource: Banner2,
    prefix: "چیزی که شما احتباج دارید",
    title: (
      <p>
        یک تیم حرفه ایی <br /> تجربه و خدمات
      </p>
    ),
    href: "#",
    description: (
      <p>
        همواره در تلاشیم بهترین تیم رو به استخدام شرکت در بیاوریم که بتوانیم بهترین
        سرعت و کیفیت را برای مشتریان خود رقم بزنیم
      </p>
    ),
    order: "order-1",
  },
  {
    bgSource: Banner1,
    prefix: "کیفیت یعنی علم بالا",
    title: <p>تحلیل گران سیستم</p>,
    href: "#",
    description: (
      <ul>
        <li>تعمیرات تخصصی کامپیوتر و لپ تاپ در منزل و محل کار شما</li>
        <li>ارائه کلیه خدمات سخت افزاری و نرم افزاری</li>
        <li>نصب و راه اندازی شبکه و پرینتر</li>
        <li>بازیابی اطلاعت هارد و تلفن همراه</li>
        <li>گارانتی خدمات و مشاوره رایگان</li>
      </ul>
    ),
  },
];

export const AboutData = {
  title: "تعمیرات عالی با متخصصین تحلیل گران سیستم",
  description: (
    <p>
      تحلیل گران سیستم از سال 1384 و با رویکرد خدمت رسانی به تمامی هموطنان عزیز
      پایه‌گذاری شد، تا با بهره‌گیری ازکارشناسان مجرب در تمامی زمینه‌های رایانه‌ای و
      موبایل و تبلت، پاسخگوی سوالات و مشکلات رایانه ای هموطنان عزیز باشد.
      <br />
      <br />
      تحلیل گران سیستم قزوین آمادگی خود را جهت ارائه خدمات کامپیوتری به شرکتها ،
      سازمان ها و ارگان های دولتی و خصوصی به صورت موردی و قرارداد همکاری اعلام می
      دارد
      <br />
      <br />
      تلاش ما استفاده ار تکنولوژی های روز دنیا جهت رفع نیاز های مشتریان با سه مشخصه
      کیفیت مطلوب ، صرفه جویی در زمان و هزینه مناسب می باشد.
    </p>
  ),
};

export const AboutDataSwiper = [
  {
    title: "تعمیر کامپیوتر در محل",
    description:
      "یکی از اهداف مهم تحلیل گران سیستم قزوین تعمیر کامپیوتر در محل مشتری  می باشد.با توجه به حجم بالای ترافیک و بالا رفتن ارزش وقت برای مردم این نیاز یک امری بدیهی است که توسط تحلیل گران سیستم براورده می شود.",
    bgColor: "bg-blue-900",
  },
  {
    title: "تعمیر چاپگر در محل",
    description:
      "هدف دیگر تحلیل گران سیستم قزوین این است که علاوه بر تعمیر کامپیوتر  در محل ، تعمیر لپ تاپ در محل را نیز انجام بدهد. البته تمامی تعمیر لپ تاپ در محل شاید امکان پذیر نباشد. ولی تحلیل گران سیستم سعی کرده که تا حد امکان تعمیر لپ تاپ در محل مشتری انجام بگیرد.",
    bgColor: "bg-second-color",
  },
  {
    title: "تعمیر لپتاپ در محل",
    description:
      "یکی از اهداف مهم تحلیل گران سیستم قزوین تعمیر کامپیوتر در محل مشتری  می باشد.با توجه به حجم بالای ترافیک و بالا رفتن ارزش وقت برای مردم این نیاز یک امری بدیهی است که توسط تحلیل گران سیستم براورده می شود.",
    bgColor: "bg-blue-950",
  },
];

export const FunFact = [
  {
    title: "پروژه موفقیت آمیز",
    count: "254",
    icon: FunFact1,
  },
  {
    title: "متخصصین",
    count: "5",
    icon: FunFact2,
  },
  {
    title: "خدمات",
    count: "43",
    icon: FunFact3,
  },
  {
    title: "سابقه",
    count: "254",
    icon: FunFact4,
  },
];

export const ServicesData = [
  {
    picSource: service1,
    title: "تعمیر کامپیوتر",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service2,
    title: "تعمیر لپ تاپ",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service3,
    title: "تعمیر چاپگر",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service4,
    title: "تعمیر کنسول",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service5,
    title: "تعمیر دوربین",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service6,
    title: "طراحی وبسایت",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
];

export const NewServicesData = [
  {
    picSource: service5,
    title: "تعمیر کامپیوتر",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service6,
    title: "تعمیر لپ تاپ",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service4,
    title: "تعمیر کامپیوتر",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service1,
    title: "تعمیر لپ تاپ",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },

  {
    picSource: service3,
    title: "تعمیر کامپیوتر",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
  {
    picSource: service2,
    title: "تعمیر لپ تاپ",
    description:
      "تعمیر کامپیوتر در محل با بهترین کیفیت و کارایی انجام میشود تعمیر کامپیوتر در محل با بهترین کیفیت و",
    href: "#",
  },
];

export const OnlineAppointment = {
  picSource: BookTimePic,
  title: "گرفتن قرار برای خدمات در محل",
  ButtonTxt: "ملاقات آنلاین",
  description:
    "سیستم خدمات رسانی در محل و ملاقات حضوری با ثبت آنلاینسیستم خدمات رسانی در محل و ملاقات حضوری بار محل و ملاقات حضوری با ثبت آنلاین",
};

export const WhyChooseUsData = [
  {
    icon: WhyChoseUs3,
    title: "پاسخگویی سریع",
    description:
      "این تیم سعی میکند تا با بهترین روش و متد های روز دنیا پاسخ های شما عزیزان را بدهد",
  },
  {
    icon: WhyChoseUs2,
    title: "کارایی بهتر",
    description: "تمام تلاش این تیم برای رساندن خدمات به صورت عالی است",
  },
  {
    icon: WhyChoseUs1,
    title: "بهترین خدمات",
    description:
      "این تیم سعی میکند تا با بهترین روش و متد های روز دنیا پاسخ های شما عزیزان را بدهد",
  },
];

export const OurTeamData = [
  {
    bgSource: TeamMember1,
    name: "مهندس صادقی",
    position: "مدیر عامل",
  },
  {
    bgSource: TeamMember2,
    name: "مهندس عظیمی",
    position: "برنامه نویس",
  },
  {
    bgSource: TeamMember3,
    name: "مهندس مهرعلیان",
    position: "مغز سخت افزار",
  },
  {
    bgSource: TeamMember4,
    name: "مهندس حبیب زاده",
    position: "تعمیرکار",
  },
];

export const CostumerCommentsData = [
  {
    bgSource: commentPic1,
    name: "علی منصوری",
    position: "مدیر کل",
    commentText:
      "سلام خیلی از خدمات به موقع و عالی شما لذت بردم خدا خیرتون بده . حتما پیشنهاد میکنم به دیگران",
  },
  {
    bgSource: commentPic2,
    name: "داریوش حیدری",
    position: "سازمان تبلیغات",
    commentText:
      "سلام خیلی از خدمات به موقع و عالی شما لذت بردم خدا خیرتون بده . حتما پیشنهاد میکنم به دیگران",
  },
  {
    bgSource: commentPic3,
    name: "اتوسا گردینه",
    position: "کاربر ویژه",
    commentText:
      "سلام خیلی از خدمات به موقع و عالی شما لذت بردم خدا خیرتون بده . حتما پیشنهاد میکنم به دیگران",
  },
  {
    bgSource: commentPic1,
    name: "علی منصوری",
    position: "مدیر کل",
    commentText:
      "سلام خیلی از خدمات به موقع و عالی شما لذت بردم خدا خیرتون بده . حتما پیشنهاد میکنم به دیگران",
  },
];

export const SocialMediaData = [
  { icon: InstagramIcon, href: "#", name: "Instagram" },
  { icon: TelegramIcon, href: "#", name: "Telegra" },
  { icon: WhatsappIcon, href: "#", name: "Whatsapp" },
];
