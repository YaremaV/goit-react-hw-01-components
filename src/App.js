import React from "react";
import Profile from "./components/profile/profile"
import Statistics from "./components/statistics/statistics";
import FriendList from "./components/friendlist/friendlist";
import TransactionHistory from "./components/transactionhistory/transactionhistory"
import user from "./user.json"
import statisticalData from "./statistical-data.json"
import friends from "./friends.json"
import transactions from "./transaction.json"
import Layout from './components/Layout/Layout';

export default function App() {
  return (
     <Layout>
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
      
     </Layout>
  );
}


