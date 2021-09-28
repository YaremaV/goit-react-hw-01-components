import React from "react";
import PropTypes from "prop-types";
import s from './statistics.module.css'


export default function Statistics({stats, title}){
    return <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
   <ul className={s.list}>
 {stats.map(stat => (
   <li key={stat.id} className={s.item}
   style={{backgroundColor: stat.color}}>
        <span className={s.label}>{stat.label}</span>
      <span className={s.percentage}>{stat.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}