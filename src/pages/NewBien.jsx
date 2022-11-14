import React from "react";
import "../styles/new-bien.css";


const NewBien = () => {
  return (
    <div className="new-bien">
      <div className="booking__wrapper">
        <h2 className="booking__title">Enregistrer un nouveau bien</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>

        {/* <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NewBien;
