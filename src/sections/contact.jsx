import { useState } from "react";
import { Icons } from "../components/icons";

export const ContactUs = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim() || !message.trim()) {
      setError("من فضلك أدخل الاسم والرسالة قبل الإرسال.");
      return;
    }

    setError(""); // clear error

    const phoneNumber = "201150459351";

    // Encode text (important for Arabic & special chars)
    const text = encodeURIComponent(`الاسم: ${name}\nالرسالة: ${message}`);

    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="container">
      <h3>تواصل معنا</h3>
      <div className="contact-form pt-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="الأسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
            lang="ar"
            dir="rtl"
          />
          <textarea
            rows={10}
            cols={30}
            placeholder="أكتب رسالتك..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            lang="ar"
            dir="rtl"
          ></textarea>

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="btn">
            إرسال الرسالة
          </button>
        </form>

        <div className="contacts">
          <h5>يمكنك متابعتنا على</h5>
          <Icons />
        </div>
      </div>
    </section>
  );
};
