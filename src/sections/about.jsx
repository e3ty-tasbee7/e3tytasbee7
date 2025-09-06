import person from "../assets/person.png";
import song from "../assets/song.png";
import service from "../assets/service.png";

export const About = () => {
  return (
    <section id="about" className="container">
      <div>
        <h3>عن الفريق</h3>
        <p>
          فريق اعطي تسبيح هو فريق خدمي تماماً ، تأسس الفريق 13 اغسطس 2022 ، بدأ
          ب 10 مُرنمين فقط و استمر حتي بلغ عددة حاليًا اكثر من 60 مُرنم /
          مُرنمة، بدأت خدمتنا بمحبة ورغبة صادقة في تمجيد اسم الرب يسوع المسيح من
          خلال التسبيح والترنيم. اجتمعنا كأفراد مختلفي الأصوات والمواهب لكن بروح
          واحدة تجمعنا، وهي أن نرفع القلوب إلى السماء ونشارك الآخرين بفرح
          العبادة والتسبيح. نؤمن أن التسبيح هو لغة السماء التي تمنح السلام
          والرجاء، وأنه رسالة وخدمة أكثر من كونه مجرد موسيقى. رؤيتنا أن نكون
          أداة حية تقود الناس لحياة عبادة أعمق، وأن نستخدم ما أعطانا الله من
          مواهب لنعلن مجده في الكنيسة والمجتمع وكل مكان.
        </p>
      </div>
      <div className="about-info">
        <div style={{ backgroundImage: `url(${service})` }}>
          <h5>
            اكثر من <br /> 100 خدمة
          </h5>
        </div>
        <div style={{ backgroundImage: `url(${song})` }}>
          <h5>
            اكثر من <br /> 5 ترانيم
          </h5>
        </div>
        <div style={{ backgroundImage: `url(${person})` }}>
          <h5>
            اكثر من 60 <br /> مُرنم/ مُرنمة
          </h5>
        </div>
      </div>
      <div className="d-flex gap-2 align-items-center" dir="rtl">
        <div className="whatsapp">
          <a
            href="https://wa.me/201150459351"
            target="_blank"
            className="text-light"
          >
            <i class="bi bi-whatsapp"></i>
          </a>
        </div>
        <p className="text-secondary mt-3">
          "مَجَّانًا أَخَذْتُمْ، مَجَّانًا أَعْطُوا." تقدروا تتواصول معانا على
          واتساب وتطلبوا خدمة الفريق
        </p>
      </div>
    </section>
  );
};
