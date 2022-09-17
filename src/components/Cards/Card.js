import React from "react";
import Basket from "./Basket";
import Star from "./Star";
import "./Styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={`../images/${props.image}`}></img>
      <div className="card--basket">
        <Basket />
      </div>
      <div className="card--additional-info">
        <p>Доп инфо</p>
      </div>
      <p className="card--description">{props.description}</p>
      <div>
        <p className="card--price-range">
          {props.priceLow}₸ - {props.priceHigh}₸
        </p>
        <Star />
        <p className="card--raiting">{props.rating}</p>
        <div>
          <span className="card--minimum-order">{props.number} </span>
          Штука (Минимальный. Заказ)
        </div>
      </div>
    </div>
  );
}

export default Card;
