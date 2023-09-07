import React from "react";
import inotebood from "../../assets/Inotebook.jpg";
import Image from "next/image";
import todo from "../../assets/Screenshot_2023-09-06_22_34_24.png";
import style from "../../styles/Invisable.module.css";
import domProjects from "../../jsonFiles/dommanupulationProjects.json";
import Tilt from "react-parallax-tilt";

const MinorProjects = () => {
  return (
    <div style={{ height: "230vh" }}>
      <h1 style={{ color: "white" }}>Minor Projects</h1>
      <h1
        style={{
          fontSize: "50px",
          fontFamily: "monospace",
          color: "skyblue",
          width: "100vw",
        }}
      >
        Mern Stack Projects
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20%",
          margin: "5%",
        }}
        className={style.experience}
      >
        <div className="card bg-dark" style={{ width: "18rem" }}>
          <Image
            className="card-img-top"
            src={inotebood}
            alt="Card image cap"
            style={{ width: "100%", height: "80%" }}
          />
          <div className="card-body">
            <h2 className="card-title text-light">I-Notebook</h2>
            <p className="card-text text-light">
              This is a MERN stack web application. Have User Login, User Signup
              features. User can store there notes in this website safe and
              secure. Uses JWT authentication and Bcrypt JS for security.
              TECHKNOLOGY USEED FOR FRONTEND React js 2) Bootstrap 3) Html 4)
              Css 5) Javascript TECHKNOLOGY USEED FOR BACKEND: 1) Node JS 2)
              Express JS 3) MongoDB 4) Bcrypt JS
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://i-notebook-frontend-sand.vercel.app/Login"
                className="btn btn-primary"
                target="_blank"
              >
                Visit Application
              </a>
              <a
                href="https://github.com/Arpan840/INotebook-Backend"
                className="btn btn-primary"
                target="_blank"
              >
                Github Repo
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-dark" style={{ width: "18rem" }}>
          <Image
            className="card-img-top"
            src={todo}
            alt="Card image cap"
            style={{ width: "100%", height: "60%" }}
          />
          <div className="card-body">
            <h2 className="card-title text-light">Todo List</h2>
            <p className="card-text text-light">
              The TODO List MERN stack project is a web application that allows
              users to manage and organize their tasks and to-do items in a
              convenient and efficient manner. It leverages the power of the
              MERN stack, which consists of MongoDB, Express.js, React, and
              Node.js, to provide a robust and full-stack solution for task
              management.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Arpan840/TodoBackend"
                className="btn btn-primary"
              >
                Github Backend Repo
              </a>
              <a
                href=" https://github.com/Arpan840/TodoFrontend"
                className="btn btn-primary"
              >
                Github FrontEnd Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "monospace",
            color: "skyblue",
            width: "100vw",
          }}
        >
          DOM Manipulation Projects
        </h1>
        <div
        className={style.experience}
          style={{
            display: "flex",
            width: "80vw",
            margin: "auto",

            gap: "3%",
          }}
        >
          {domProjects.map((i) => (
            <div className="card bg-dark" style={{ width: "18rem", margin:'10px' }}>
              <img
                className="card-img-top"
                src={i.image}
                alt="Card image cap"
              />
              <div className="card-body ">
                <h2 className="card-title text-light">{i.title}</h2>
                <p className="card-text text-light">{i.description}</p>
                <a href={i.webapp} className="btn btn-primary" target="_blank">
                  Visit Application
                </a>
              </div>
            </div>
          ))}
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={2000}
            glareColor={"rgb(255,0,0)"}
            className={style.borderRadious}
            style={{
              width: "200px",
              alignItems: "center",
              height: "250px",
              display: "flex",
              margin: "auto",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgb(49 46 129)",
              marginTop:'2%'
            }}
          >
            <div
           
              style={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "80%" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                alt="icon"
              ></img>
            </div>
            <a href="https://github.com/Arpan840?tab=repositories" target="_blank">
            <p style={{color:'white'}}>Visit my github for more .....</p></a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
                fontSize: "16px",
                color: "white",
              }}
            ></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default MinorProjects;
