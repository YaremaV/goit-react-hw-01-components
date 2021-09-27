import React from "react";
import PropTypes from "prop-types";
import './statistics.css'


export default function Statistics({stats, title}){
    return <section className="statistics">
        {title && <h2 className={title}>{title}</h2>}
   <ul className="stat-list">
 {stats.map(stat => (
   <li key={stat.id} className="item"
   style={{backgroundColor: stat.color}}>
        <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}