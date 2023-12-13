import dynamic from "next/dynamic";
import Link from "next/link";
import Style from "../../styles/Invisable.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import majorProjects from "../../jsonFiles/majorProjects.json"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const MajorProject = () => {
  return (
    <>
    <div
    
      style={{
        width: "100vw",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop:"-35vh",
        height: "200vh",
      }}
    >
      
      <div
        className={Style.experience}
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:"2.5%"
        }}
      >
        
        <div
          data-aos={"flip-left"}
          className="card bg-dark"
          style={{ width: "18rem" }}
        >
          <ReactPlayer
            width={285}
            height={200}
            url="https://www.youtube.com/watch?v=gvm1TZBVdPQ"
            playing={true}
          />
          <div className="card-body">
            <h2 className="card-title text-light">
              Product Synchronizer Application
            </h2>
            <p className="card-text text-light">
              Product Synchronizer is a comprehensive web-based solution
              tailored to simplify the complex task of managing product
              information across multiple platforms, such as e-commerce
              websites, marketplaces, and digital marketing channels. It offers
              a centralized hub for businesses to effortlessly synchronize
              product data, ensuring consistency and accuracy across all sales
              channels. This application is still in building stage.
            </p>
            <Link href="/productSync" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
        <div
          data-aos={"flip-left"}
          className="card bg-dark"
          style={{ width: "18rem" }}
        >
          <img
            className="card-img-top"
            src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_03073e9fa619088246033de8869220ba/payever.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h3 className="card-title text-light">Payever</h3>
            <p className="card-text text-light">
              I was a backend developer at Payever, where I played a key role in
              a Nest.js web application project. My responsibilities included
              updating Node modules, addressing errors, making minor code
              changes, conducting testing, and ensuring code quality through
              reviews and deployments.
            </p>
            <a
              href="https://getpayever.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Learn more...
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MajorProject;
