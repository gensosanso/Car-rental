import React, { useState } from "react";
import "../styles/mes-biens.css";
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
  const [typeDeBiensToDisplay, setTypeDeBiensToDisplay] = useState("tous");
  const [typeContratToDisplay, setTypeContratToDisplay] = useState("tous");

  const displayBiens = (typeDeBien, typeDeContrat) => {
    let btd = biens;
    if(typeDeBien !== "tous") btd = btd.filter(b => b["typeofgood"]["name"] === typeDeBien);
    if(typeDeContrat !== "tous") btd = btd.filter(b => b.vente === (typeDeContrat === "vente" ? 1 : 0));
    setBiensToDisplay(btd);
  }

  const handleTypeFilterChange = (e) => {
    const typeDeBien = e.target.value;
    setTypeDeBiensToDisplay(typeDeBien);
    displayBiens(typeDeBien, typeContratToDisplay);
  }

  const handleTypeContratChange = (e) => {
    const typeContrat = e.target.value;
    setTypeContratToDisplay(typeContrat);
    displayBiens(typeDeBiensToDisplay, typeContrat);
  }

  return (
    <div className="mes-biens">
      <div className="mes-biens-wrapper">
        <div className="mes-biens-header">
          <div className="mes-biens-title"> Mes biens </div> 
          <div className="badge-results">{ biensToDisplay.length }</div>
        </div>
      </div>
        <div className="offer__wrapper">
          <div className="offer__top">
            <div className="filter__widget-01">
              <select onChange={handleTypeFilterChange}>
                <option value="tous">Tout type</option>
                {
                  typesDeBiens.map(type => <option value={type}>{capitalizeEveryWord(type)}</option>)
                }
              </select>
            </div>
            <div className="filter__widget-01">
              <select onChange={handleTypeContratChange}>
                <option value="tous">Tous</option>
                <option value="location">À louer</option>
                <option value="vente">À vendre</option>
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
  );
};

export default MesBiens;
