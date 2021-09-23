import React from "react";
import PropTypes from "prop-types";


export default function Statistics({stats}){
    return <section className="statistics">
        <h2 className="title">Upload stats</h2>
   <ul className="stat-list">
 {stats.map(stat => (
        <li key={stat.id} className="item">
        <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>
    ))}
  </ul>
</section>
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}