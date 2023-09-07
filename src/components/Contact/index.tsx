import React, { useEffect, useState } from "react";
import style from '../../styles/Invisable.module.css'
import socilMedia from "../../jsonFiles/socialmedia.json";
import  Tilt from "react-parallax-tilt";

const Contact = () => {
  return (
    <div className={style.slideIn}>
    <div
    className={style.height}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "80vw",
        flexDirection:"column",
        textAlign:'center',
        marginTop:'-10%',
        
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          color: "skyblue",
          fontFamily: "monospace",
        }}
      >
        Contact
      </h1>
      <div
      className={style.experience}
        style={{
          display: "flex",
          alignItems:"center",
          justifyContent: "center",
          width: "80vw",
          gap:'10%',
          marginTop:"3%"
          
        }}
      >
        
        {
          socilMedia.map((i,index)=>(
            <a href={i.link} target="_blank">
            <Tilt
            
            glareEnable={true}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={2000}
            glareColor={"rgb(255,0,0)"}
            className={style.borderRadious}
            key={index}
            style={{
              width: "200px",
              alignItems: "center",
              height: "250px",
              display: "flex",
              margin: "2%",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgb(49 46 129)",
              
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
              <img style={{ width: "80%" }} src={i.image} alt="icon"></img>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
                fontSize: "16px",
                color: "white",
                flexDirection:'column'
              }}
            >
              {i.name}
              <h4>Click to visit</h4>
            </div>
          </Tilt>
          </a>
          ))
        }
      </div>
    </div>
    </div>
  );
};

export default Contact;
