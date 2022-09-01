import React from "react";
import vs from "../assets/js.jpeg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      {/* <h1>Updates</h1> */}
      <div className="gal">
        <img className="cover" src={vs} alt="" />
        <div className="dec">
          <h1>Defi Pay</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius,
            veritatis dolor neque consequatur libero officia fugiat ea ipsum
            perspiciatis explicabo voluptatibus eligendi reiciendis, iure
            recusandae, necessitatibus aut aspernatur sapiente!
          </p>
        </div>
      </div>
      <div className="gal">
        <img className="cover" src={vs} alt="" />
        <div className="dec">
          <h1>Defi Pay</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius,
            veritatis dolor neque consequatur libero officia fugiat ea ipsum
            perspiciatis explicabo voluptatibus eligendi reiciendis, iure
            recusandae, necessitatibus aut aspernatur sapiente!
          </p>
        </div>
      </div>
      <div className="gal">
        <img className="cover" src={vs} alt="" />
        <div className="dec">
          <h1>Defi Pay</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius,
            veritatis dolor neque consequatur libero officia fugiat ea ipsum
            perspiciatis explicabo voluptatibus eligendi reiciendis, iure
            recusandae, necessitatibus aut aspernatur sapiente!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
