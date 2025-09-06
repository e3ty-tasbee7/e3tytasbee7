import logo from "../assets/logo.png";
import { Icons } from "../components/icons";

export const Footer = () => {
  return (
    <footer className="text-light d-flex flex-column pt-4 align-items-center">
      <img src={logo} alt="logo" style={{ maxWidth: "10%", height: "auto" }} />
      <p dir="rtl" className="text-center mt-2">
        "مَجَّانًا أَخَذْتُمْ، مَجَّانًا أَعْطُوا." (متى 10: 8) <br />         <a
          href="https://wa.me/201150459351"
          target="_blank"
          className="text-light"
        >
          <i class="bi bi-whatsapp"></i></a> تقدروا  
        تتواصول معانا على واتساب وتطلبوا خدمة الفريق
      </p>
      <ul className="list-unstyled d-flex gap-2">
        <li>
          <a href="#contact">تواصل معنا</a>
        </li>
        <li>
          <a href="#songs">الترانيم</a>
        </li>
        <li>
          <a href="#about">من نحن</a>
        </li>
        <li>
          <a href="#hero">الرئيسية</a>
        </li>
      </ul>
      <Icons />
      <div className="bottom-footer">
        &copy; 2025 فريق أعطي تسبيحًا. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};
