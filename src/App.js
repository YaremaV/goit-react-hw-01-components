import React from "react";
import Profile from "./components/profile"
import Statistics from "./components/statistics";
import FriendList from "./components/friendlist";
import TransactionHistory from "./components/transactionhistory"
import user from "./user.json"
import statisticalData from "./statistical-data.json"
import friends from "./friends.json"
import transactions  from "./transaction.json"

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
     
    <Statistics   title="Upload stats" stats={statisticalData}/>
      
    <FriendList friends={friends} />
      
    <TransactionHistory items={transactions} />
      
    </div>
  );
}


