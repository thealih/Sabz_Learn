import "./PopularCourses.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const PopularCourses = () => {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title="محبوب ترین دوره ها"
          desc="دوره های محبوب بر اساس امتیاز دانشجو ها"
        />
      </div>
    </div>
  );
};

export default PopularCourses;
