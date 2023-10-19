import AboutUs from "../../Components/AboutUs/AboutUs";
import Header from "../../Components/Header/Header";
import LastArticle from "../../Components/LastArticle/LastArticle";
import LastCourses from "../../Components/LastCourse/LastCourse";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PresellCourses from "../../Components/PresellCourses/PresellCourses";
import "./index.css";

const Index = () => {
  return (
    <>
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticle />
    </>
  );
};

export default Index;
