import MinorProjects from "../../components/MinorProjects";
import MajorProject from "../../components/Major Project";
import style from "../../styles/Invisable.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const work = () => {
  return (
    <div
      data-aos={"zoom-in"}
      id="Work"
      className={style.height}
      style={{ textAlign: "center", background: "rgba(5,8,22,255)" }}
    >
      <h1
        style={{
          color: "skyblue",
          padding: "2%",
          fontFamily: "monospace",
          fontSize: "50px",
          fontWeight: "bolder",
        }}
      >
        Projects I worked on
      </h1>
      <div data-aos={"flip-left"} style={{ marginTop: "-20%" }}>
        <MajorProject></MajorProject>
      </div>
      <div style={{ marginTop: "-10%" }}>
        <MinorProjects></MinorProjects>
      </div>
    </div>
  );
};

export default work;
