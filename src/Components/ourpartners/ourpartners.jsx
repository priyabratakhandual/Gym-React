import React from 'react'
import "./ourpartners.css"
import Flickity from "react-flickity-component";

const flickityOptions = {
    initialIndex: 2,
  };
  
const Ourpartners = () => {
  return (
    <div>
         <div className="card">
            <center className="head"><span className="heading">Our partners</span></center>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <img
              className="myprotin"
              src="https://upload.wikimedia.org/wikipedia/en/archive/0/05/20221129000319%21Myprotein_logo.png "
              alt=" "
              width="300 "
              height="200 "
            />
            <img
              className="myfitness"
              src="https://upload.wikimedia.org/wikipedia/en/6/63/MyFitnessPal_Logo.png "
              alt=" "
              width="300 "
              height="215 "
            />
            <img
              className="protinX"
              src="https://static.theprint.in/wp-content/uploads/2021/07/the-protein-week-protinex-strengthens-its-commitments-to-nutrition-by-establishing-the-role-of-protein-in-improving-quality-of-life.jpg?compress=true"
              alt=" "
              width="300 "
              height="205 "
            />
            <img
              className="Muscleblaze"
              src="https://choice.wetestyoutrust.com/sites/default/files/styles/medium/public/2022-03/7888b841-13ae-11eb-9dfd-06f7a2c059a3.png?itok=TlEOXcoE "
              alt=" "
              width="300 "
              height="205 "
            />
            <img
              className="GNC"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShq-1Mxcsu9hL7O2TbCFFxfNWleYjdjmY_nDvJrgQfGw&s "
              alt=" "
              width="300 "
              height="205 "
            />
            <img
              className="MuscleTech"
              src="https://yt3.ggpht.com/ytc/AMLnZu8kh_G1u8N4vmRs0VZQfcjDvQ_juCoj9f-DuZwteQ=s900-c-k-c0x00ffffff-no-rj "
              alt=" "
              width="300 "
              height="205 "
            />
          </Flickity>
        </div>
    </div>
  )
}

export default Ourpartners
