import React from "react";
import "../styles/new-bien.css";
import { Stepper } from 'react-form-stepper';

const NewBien = () => {
  return (
    <div className="new-bien">
      <div className="new-bien__wrapper">
        <h2 className="new-bien__title">Enregistrer un nouveau bien</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default NewBien;
