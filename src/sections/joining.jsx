import { useState } from "react";
import img from "../assets/10.jpg";

export const Joining = () => {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <section id="joining" className="pt-3 pb-3 p-3">
      <div className="conditions pt-3 pb-3 ">
        <h2>انضم إلينا</h2>
        <h5>
          دلوقتي تقدر/ي تنضم/ي لعيلتنا علشان تسبح وتخدم ربنا <br /> شروط التقديم
        </h5>
        <p>
          ١- سحب استمارة للأشتراك بالفريق قيمتها (50 جنيهاً) <br /> ٢- الأشتراك
          من مرحلة ثانوي وجامعة فقط <br /> ٣- بروفات الفرق يوم الأحد والثلاثاء
          من الساعة 6 الى 9 م <br /> ٤- عدد الغيابات المسموح به خلال الشهر مرتين
          فقط <br /> ٥- ممنوع الغياب نهائي دون استئذان <br /> ٦- الغيابات
          المتكررة تؤدي الى الحرمان من حضور الخدمات <br />
          ٧- الخدمات مواعيدها خلال اوقات الأمتحانات غالباً مسموح بغياب مرتين فقط
          في الخدمات <br /> ٨- تكرار الغياب في الخدمات 3 مرات متتالية يؤدي
          لخروجك من الفريق <br /> ٩- قيمة اشتراك الفريق 100 جنيه للمساهمة في دعم
          الخدمة <br /> ١٠- بروفات التصوير لا تقل اهمية عن بروفات التحفيظ <br />{" "}
          ١١- غير مسموح بالأشتراك في فرق او كورالات اخرى نهائياً <br /> ١٢-
          الألتزام بالزي الخاص للفريق <br />
        </p>

        {isChecked ? (
          <button className="btn">
            <a href="https://forms.gle/pFm8c3w6oQtTvUYL8" target="_blank">
              سجل بياناتك
            </a>
          </button>
        ) : (
          <button className="btn" disabled>
            سجل بياناتك
          </button>
        )}
        <p className="text-secondary">
          قرأت كل الشروط{" "}
          <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
        </p>
      </div>
      <img src={img} alt="image" />
    </section>
  );
};
