import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashBar from "../components/DashBar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
function Dashboard() {
  const location = useLocation();
  const [tab,setTab] = useState("");
  useEffect(() => {
  const url = new URLSearchParams(location.search);
  const tab = url.get("tab");
   if(tab){
     setTab(tab);
   }
  }, [location.search]);
  return (
  <div className="min-h-screen flex flex-col sm:flex-row">
    <DashBar tab={tab} />
    {tab==="profile" && <DashProfile />}
    {tab==="posts" && <DashPosts/>}
  </div>
  )
}

export default Dashboard;
