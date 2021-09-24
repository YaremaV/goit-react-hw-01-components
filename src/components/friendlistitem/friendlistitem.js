import React from "react";
import PropTypes from "prop-types";
import './friendlistitem.css'


export default function FriendListItem({avatar, name, isOnline,id}) {
    return <li className="FriendItem" >
  <span className="status">{isOnline}</span>
  <img className="FriendAvatar" src={avatar} alt={avatar} width="75" />
  <p className="name">{name}</p>
</li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number
}

