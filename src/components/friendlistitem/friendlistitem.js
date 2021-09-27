import React from "react";
import PropTypes from "prop-types";
import s from './friendlistitem.module.css'


export default function FriendListItem({avatar, name, isOnline,id}) {
    return <li className={s.item} >
  <span className={isOnline === true ? s.statusOnline : s.statusOffline}></span>
  <img className={s.avatar} src={avatar} alt={avatar} width="75" />
  <p className={s.name}>{name}</p>
</li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number
}

