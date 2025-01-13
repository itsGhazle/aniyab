import Comment from "../UI/Comment";
import { getNews } from "../services/apiBlog";

function News() {

  return (
    <main>
      <h1>راهنمایی گمشدگان در ایام اربعین حسینی</h1>
      <img src="" alt="" />
      <h2>
        با ایجاد مراکز راهنمایی گمشدگان در ایام اربعین حسینی؛ صدها گمشده به
        خانواده هایشان تحویل داده شدند.
      </h2>
      <p>
        آنی یاب در مراسم اربعین با هماهنگی شرکت ملی پست در پیدا کردن اشیاء و
        مدارک پیدا شده که دارای برچسب آنی یاب می باشد همکاری می نماید. کربلای
        معلی در هر روز به ویژه در ایام زیارت های میلیونی مانند ایام اربعین
        میزبان جمعیت کثیری از زائری است که از اقصی نقاط کشور عراق و سایر کشورهای
        مختلف به زیارت مشرف می شوند، شباهت ورودی ها، ازیاد جمعیت و...، درصد
        گمشدن زائران را بالا برده و در این بین کودکان و سالمندان بالاترین سهم را
        دارند. آنی یاب محصولی ویژه در خصوص کودکان و سالمندان ارائه نموده
        است.پیکسل آنی یاب این مشکل در پیدا شدن افراد گمشده حل نموده است شما می
        توانید از این لینک اطلاعات بیشتری را دریافت نمایید و سفارش پیکسل آنی یاب
        خود را ثبت نمایید. بخش ها و واحدهای مختلف آستان مطهر عباسی برای تسهیل
        زیارت راحت و با آرامش میلیون های زائری که در ایام اربعین حسینی به کربلای
        معلی مشرف شده اند، طرح های ویژه را اجرا کرده است، از جمله این اقدامات که
        بسیار مورد رضایت زائران واقع شده است، خدمات مراکز راهنمایی افراد گمشده
        بوده است. این مراکز توسط واحد ارتباطات آستان مطهر عباسی شکل گرفته و
        فعالیت آنها تحت نظارت واحد روابط دانشگاهی است و تعداد زیادی از دانشجویان
        داوطلب دانشگاه‌های مختلف برای راهنمایی افراد گمشده در زیارت اربعین در
        این بخش خدمت رسانی کردند. حیدر کریم کاظم، یکی از ناظران فعالیت مراکز
        راهنمایی افراد گمشده در مصاحبه با شبکه جهانی الکفیل گفت: این خدمت آستان
        مطهر عباسی به دلیل کارایی بسیاری که برای پیدا کردن افراد گمشده به ویژه
        کودکان و سالخوردگان و بازگرداندن آنها به خانواده هایشان دارد، از اهمیت
        بسیاری در زیارت اربعین برخوردار هستند. وی با اشاره به اجرای این برنامه
        برای پنجمین سال متوالی در ایام زیارت میلیونی اربعین حسینی اظهار کرد: با
        اجرای این خدمت تاکنون بیش از نه هزار فرد گمشده به خانواده هایشان تحویل
        داده شده اند. وی ادامه داد: فعالیت‌های این مراکز در سه محور اصلی منتهی
        به کربلا از جمله محور بغداد، محور بابل و محور نجف اجرا شد و در محور نجف
        11 مرکز و در محور بابل 9 مرکز و در محور بغداد 7 مرکز مستقر هستند. وی با
        بیان اینکه یک بخش مرکزی تمامی فعالیت های مراکز را با هم هماهنگ می کند،
        افزود: علاوه بر مراکز سه محور اصلی منتهی به کربلای معلی، 7 مرکز داخلی
        نیز با کارشناسی های صورت گرفت انتخاب شده است تا همسو با عملیات ارتباط و
        تماس ها و دستیابی آسان به آنها باشد. وی گفت: این مراکز از سامانه
        الکترونیکی برخوردار هستند که در آن فهرست داده های یکپارچه ای وجود دارد
        که در اختیار سایر مراکز نیز قرار می گیرد و از طریق آنها اطلاعات فرد گم
        شده به سایر مراکز نیز فرستاده می شود. یادآور می شود؛ در صورتیکه فرد گم
        شده به یکی از دفاتر مراجعه کرده باشد مشخصات او در سیستم ثبت شده است و
        بلافاصله به خانواده و بستگان او اطلاع داده می شود که فرزند و یا همراه آن
        ها به کدام یکی از دفاتر مراجعه کرده است. در صورتیکه مشخصات فرد گم شده در
        دفاتر ثبت نشده باشد معلوم می شود که فرد گمشده هنوز به هیچ یک از دفاتر
        پیداشدگان مراجعه نکرده است.
      </p>
      <Comment
        header={
          "آدرس ایمیل و شماره تماس شما منتشر نخواهد شد. فیلدهای مورد نیاز علامت گذاری شده است"
        }
      />
    </main>
  );
}

export default News;
