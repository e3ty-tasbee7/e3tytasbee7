import { FeedbackCard } from "../components/feedbackCard";
import { feedbacks } from "../data";

export const Feedbacks = () => {
  return (
    <section id="feedbacks" className="container" dir="rtl">
      <h3 className="pb-3">بعض من الآراء </h3>
      <div className="feedbacks">
        {feedbacks.map((comment) => (
          <FeedbackCard comment={comment} />
        ))}
      </div>
      <p style={{color: "#454545"}} className="pt-2">.وغيرهم كتير من التعليقات نستقبلها كل يوم بفرح، وانت أيضًا تستطيع ارسال رأيك لنا عن طريق واتساب وهذا يسعدنا جداً</p>
    </section>
  );
};
