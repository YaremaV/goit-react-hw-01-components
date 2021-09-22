import React from "react";
import Profile from "./components/profile"
import Statics from "./components/statistics"
import user from "./user.json"
import statisticalData  from "./statistical-data.json"

export default function App() {
  return (
    <div >
      <Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
      />
      
      <Statics stats={statisticalData} />
      
    </div>
    
  );
}


