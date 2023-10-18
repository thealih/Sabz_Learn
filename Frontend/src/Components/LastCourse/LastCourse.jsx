import CourseBox from "../CourseBox/CourseBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./LastCourse.css";
const LastCourses = () => {
  return (
    <div className="courses">
      <div className="container">
        <SectionHeader
          title="جدیدترین دوره ها"
          desc="سکوی پرتاب به سوی موفقیت ها"
          btnTitle={"تمامی دوره ها"}
        />
        <div className="courses-content">
          <div className="container">
            <div className="row">
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
              <CourseBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastCourses;
