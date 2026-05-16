import React, {
  useState
} from "react";

import {
  Link
} from "react-scroll";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  HiMenuAlt3,
  HiX
} from "react-icons/hi";

import navItems from "../../jsonFiles/navItems.json";

import styles from "../../styles/Navbar.module.css";


const Navbar = () => {

  const [
    active,
    setActive
  ] = useState("Home");


  const [
    open,
    setOpen
  ] = useState(false);



  const handleClick =
    (name:string) => {

      setActive(name);

      setOpen(false);
    };



  return (

    <nav
      className={
        styles.navbar
      }
    >

      {/* logo */}

      <div
        className={
          styles.logoBox
        }
      >

        <div
          className={
            styles.logoOrb
          }
        >

          <motion.div

            animate={{
              rotate: 360
            }}

            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear"
            }}

            className={
              styles.logoRing
            }
          />

          <span
            className={
              styles.logoText
            }
          >
            AD
          </span>

        </div>


        <div>

          <h2
            className={
              styles.name
            }
          >
            Arpan Das
          </h2>

          <p
            className={
              styles.role
            }
          >
            Systems Engineer
          </p>

        </div>

      </div>



      {/* desktop nav */}

      <div
        className={
          styles.links
        }
      >

        {
          navItems.map(
            (
              item,
              index
            ) => (

              <Link
                key={index}

                to={
                  item.name
                }

                smooth

                offset={-70}

                duration={600}
              >

                <button

                  onClick={() =>
                    setActive(
                      item.name
                    )
                  }

                  className={`
                    ${styles.link}

                    ${
                      active ===
                      item.name
                        ? styles.active
                        : ""
                    }
                  `}
                >

                  {
                    item.name
                  }

                </button>

              </Link>
            )
          )
        }

      </div>



      {/* burger */}

      <button

        onClick={() =>
          setOpen(
            !open
          )
        }

        className={
          styles.burger
        }
      >

        {
          open
            ? <HiX/>
            : <HiMenuAlt3/>
        }

      </button>



      {/* mobile drawer */}

      <AnimatePresence>

        {
          open && (

            <>

              {/* overlay */}

              <motion.div

                initial={{
                  opacity: 0
                }}

                animate={{
                  opacity: 1
                }}

                exit={{
                  opacity: 0
                }}

                onClick={() =>
                  setOpen(
                    false
                  )
                }

                className={
                  styles.overlay
                }
              />



              {/* drawer */}

              <motion.div

                initial={{
                  x: "100%"
                }}

                animate={{
                  x: 0
                }}

                exit={{
                  x: "100%"
                }}

                transition={{
                  duration: .45
                }}

                className={
                  styles.mobileMenu
                }
              >

                {/* energy core */}

                <div
                  className={
                    styles.energyOrb
                  }
                />



                {/* thunder */}

                <div
                  className={
                    styles.lightning
                  }
                />

                <div
                  className={
                    styles.lightning2
                  }
                />



                {/* shooting stars */}

                {
                  Array.from(
                    {
                      length: 6
                    }
                  ).map(
                    (
                      _,
                      i
                    ) => (

                      <div

                        key={i}

                        className={
                          styles.star
                        }

                        style={{

                          top:
                            `${i * 15}%`,

                          animationDelay:
                            `${i * 1.2}s`
                        }}
                      />
                    )
                  )
                }



                {/* nav links */}

                {
                  navItems.map(
                    (
                      item,
                      index
                    ) => (

                      <Link
                        key={index}

                        to={
                          item.name
                        }

                        smooth

                        offset={-70}

                        duration={600}
                      >

                        <motion.button

                          initial={{
                            opacity: 0,
                            x: 40
                          }}

                          animate={{
                            opacity: 1,
                            x: 0
                          }}

                          transition={{
                            delay:
                              index * .08
                          }}

                          onClick={() =>
                            handleClick(
                              item.name
                            )
                          }

                          className={
                            styles.mobileLink
                          }
                        >

                          {
                            item.name
                          }

                        </motion.button>

                      </Link>
                    )
                  )
                }

              </motion.div>

            </>
          )
        }

      </AnimatePresence>

    </nav>
  );
};

export default Navbar;