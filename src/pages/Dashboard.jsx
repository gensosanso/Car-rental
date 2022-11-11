import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Nombre de biens",
  totalNumber: 750,
  icon: "ri-building-4-line",
};

const tripObj = {
  title: "Deals réalisés par mois",
  totalNumber: 1697,
  icon: "ri-check-double-line",
};

const clientObj = {
  title: "Clients annuels",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Gestionnaires de patrimoine",
  totalNumber: 2167,
  icon: "ri-user-2-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statistics</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
