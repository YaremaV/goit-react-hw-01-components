import React from "react";
import PropTypes from "prop-types";

export default function Statics({id, label, percentage}) {
    return <section class="statistics">
  <h2 class="title">Upload stats</h2>

        <ul class="stat-list" key={id}>         
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  </ul>
</section>
}

Statics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};