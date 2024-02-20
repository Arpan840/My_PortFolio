import React from 'react'
import majorProjects from "../../jsonFiles/majorProjects.json"
import Link from 'next/link'
import style from "../../styles/Invisable.module.css";

const MostRecent = () => {
  return (
    <div className={style.experience}>
        <div style={{
          display:"flex",
          flexWrap:'wrap',
          gap:'40px',
          alignItems:'center',
          justifyContent:'center',
          width:"100%",

          
        }}>
          {
            majorProjects.map((i:any,index:number) => (
              <Link key={index} href={i.deploymentLink} style={{textDecoration:'none'}} target='blank'>
                <div
                key={index}
                  data-aos={"flip-left"}
                  className="card bg-dark "
                  style={{ width: "18rem" }}
                >
                  <img
                    width={285}
                    height={200}
                    src={i.image}


                  />
                  <div className="card-body">
                    <h2 className="card-title text-light">
                      {i.title}
                    </h2>
                    <p className="card-text text-light">
                      {i.description}
                    </p>
                   
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
    </div>
  )
}

export default MostRecent