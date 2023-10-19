import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastArticle.css";
const LastArticle = () => {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />
      </div>
    </section>
  );
};

export default LastArticle;
