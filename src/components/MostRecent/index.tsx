import React from 'react'
import majorProjects from "../../jsonFiles/majorProjects.json"
import Link from 'next/link'

const MostRecent = () => {
  return (
    <div className='my-5 w-100'>
        <div style={{
          display:"flex",
          flexWrap:'wrap',
          gap:'40px'
        }}>
          {
            majorProjects.map((i:any,index:number) => (
              <>
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
                    <Link href={i.deployment_Link} className="btn btn-primary" target="_blank">
                      Visit
                    </Link>
                  </div>
                </div>
              </>

            ))
          }
        </div>
    </div>
  )
}

export default MostRecent