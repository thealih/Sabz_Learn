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

        <div class="articles__content">
          <div class="row"></div>
        </div>
      </div>
    </section>
  );
};

export default LastArticle;
