import React from 'react';
import { capitalizeEveryWord, capitalizeOnlyFirstLetter, formatPriceSpace } from '../../utils/stringFormat';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const getSpecificCarac = (bien, caracName) => {
    const carac = bien?.caracteristics?.find(carac => carac.name === caracName);
    return carac?.pivot?.value || "Inconnu";
}
const getSuperficie = (bien) => {
    const carac = getSpecificCarac(bien, "superficie");
    if(carac === "Inconnu") return "Superficie inconnue";
    return carac + " m²";
}

const getAdresse = (bien) => {
    const carac = getSpecificCarac(bien, "adresse");
    if(carac === "Inconnu") return "Adresse inconnue";
    return capitalizeEveryWord(carac);
}

const getRoomsProps = (bien) => {
    const roomsProps = {
        "chambres": getSpecificCarac(bien, "nombre de chambres"),
        "salons": getSpecificCarac(bien, "nombre de salon"),
        "cuisines": getSpecificCarac(bien, "nombre de cuisine"),
        "douches": getSpecificCarac(bien, "nombre de douche"),
    }

    return roomsProps;
}

const getRoomsDetails = (bien) => {
    const roomsProps = getRoomsProps(bien);
    const roomsPropsToKeep = Object.keys(roomsProps).filter(key => roomsProps[key] !== "Inconnu");

    return `${roomsPropsToKeep.map(key => roomsProps[key] + " " + key).join(", ")
                    .replace("1 chambres", "1 chambre")
                    .replace("1 salons", "1 salon")
                    .replace("1 cuisines", "1 cuisine")
                    .replace("1 douches", "1 douche")}`;
}

const getNbRooms = (bien) => {
    const roomsProps = getRoomsProps(bien);
    const roomsPropsToKeep = Object.keys(roomsProps).filter(key => roomsProps[key] !== "Inconnu");

    return roomsPropsToKeep.reduce((acc, key) => acc + parseInt(roomsProps[key]), 0);
}

export default function BienDetails ({bien, marketPart, key}) {

  const percentage = marketPart;
  const typeContrat = bien.vente === 0 ? "À Louer" : "À Vendre";

  return (
        <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">{capitalizeEveryWord(bien.name)}</h3>
                <h6 className="avg__price">
                 {formatPriceSpace(bien.price)} <span> F CFA</span>
                </h6>

                <h5 className="market__price"><b>{typeContrat}</b></h5>
                <span className="arrow__key">
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>

              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      textSize: "15px",
                    })}
                  />
                </div>
                <h4>Part de marché</h4>
              </div>

              <div className="box__03">
                <span className="model__spend-icon">
                  <i className="ri-map-pin-2-line"></i>
                </span>
                <h6 className="spend__amount">{bien.zone.name}</h6>
                <p className="spend__title">{getAdresse(bien)}</p>
              </div>

              <div className="box__04">
                <span className="model__spend-icon">
                  <i className="ri-hotel-line"></i>
                </span>
                <h6 className="spend__amount">{getSuperficie(bien)}</h6>
                <p className="spend__title">{capitalizeOnlyFirstLetter(bien.description)}</p>
              </div>

              <div className="box__05">
                <span className="model__spend-icon">
                  <i className="ri-hotel-line"></i>
                </span>
                <h6 className="spend__amount">{getNbRooms(bien)} pièces</h6>
                <p className="spend__title">{getRoomsDetails(bien)}</p>
              </div>
        </div>
  );
}
