import React, { useState } from "react";
// import mesBiens from "../assets/images/mes-biens.png";
import "../styles/mes-biens.css";
import TrackingChart from "../charts/TrackingChart";
import { capitalizeEveryWord } from "../utils/stringFormat";
import BienDetails from "../components/UI/BienDetails";

const getMarketPart = (bien, biens) => {
  const bienPrice = parseInt(bien.price);
  const totalBiensPrice = biens.reduce((acc, b) => acc + parseInt(b.price), 0);
  return Math.round(bienPrice * 100 / totalBiensPrice);
}

const MesBiens = (props) => {

  const { biens } = props;
  const typesDeBiens = [...new Set(biens.map(b => b["typeofgood"]["name"] || "Autre"))];

  const [biensToDisplay, setBiensToDisplay] = useState(biens.sort((a, b) => getMarketPart(b, biens) - getMarketPart(a, biens)));
  const [typeDeBiensToPrint, setTypeDeBiensToPrint] = useState("");

  const handleTypeFilterChange = (e) => {
    const typeDeBien = e.target.value;
    const filteredBiens = biens.filter(b => b["typeofgood"]["name"] === typeDeBien);
    setBiensToDisplay(filteredBiens);
  }

  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Mes biens</h2>
        {/* <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>2022 Mercedes Benz</h2>
            <img src={mesBiens} alt="" />
          </div>

          <div className="tracking__history">
            <h3>Tracking History</h3>
            <TrackingChart />
          </div>
        </div> */}

        <div className="offer__wrapper">
          <div className="offer__top">
            <div className="filter__widget-01">
              <select onChange={handleTypeFilterChange}>
                {
                  typesDeBiens.map(type => <option value={type}>{capitalizeEveryWord(type)}</option>)
                }
                <option value="autre">Autres</option>
              </select>
            </div>
          </div>

          <div className="offer__list">
            {
              biensToDisplay.map(bien => (
                <BienDetails bien={bien} key={bien.id} marketPart={getMarketPart(bien, biensToDisplay)} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesBiens;
