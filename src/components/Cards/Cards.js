import React from 'react'
import styles from './Cards.module.scss'
import { Link } from 'react-router-dom'
const Cards = ({ results, page }) => {

  //to create  a box which should be able to see all images, names of the characters
  let display;

  if (results) {
    //starting from x so that would map from the start from results function
    display = results.map(x => {
      let { id, name, image, location, status } = x
      return (
        <Link
        style = {{textDecoration: "none"}}
        to = {`${page}${id}`}
        key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark">
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt="" className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="text-center fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>

          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-danger`} >{status}
                </div>
              )
            }
            else if (status === "Alive") {
              return (
                <div className={`${styles.badge} position-absolute badge bg-success`} >{status}
                </div>
              )
            }
            else {
              return (
                <div className={`${styles.badge} position-absolute badge bg-secondary`} >{status}
                </div>
              )
            }
          })()}

        </Link>
      )
    });
  }
  else {
    display = "Who is this strange character no such characters is present :/"
  }


  return (
    <>{display}</>
  )
}

export default Cards