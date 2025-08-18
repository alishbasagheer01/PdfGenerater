// src/App.jsx

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

import ChatsReport from "./components/ChatsReport";
import HostingReport from "./components/HostingReport";
import OnlineActivity from "./components/OnlineActivity";
import SocialNetworks from "./components/SocialNetworks";
import SocialMedia from "./components/socialMedia/SocialMedia";
import GroupReport from "./components/groupReport/GroupReport";
import PremierReport from "./components/premierReport/PremierReport";
import URLCategories from "./components/URL-categories/URLCategories";
import Events from "./components/logon&logoffevents/Events";

export default function App() {
  return (
    <div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Chats Report</h1>
       <PDFViewer width="100%" height="90%">
        <ChatsReport />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Media Hosting Report</h1>
       <PDFViewer width="100%" height="90%">
        <HostingReport />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Online Media Report</h1>
       <PDFViewer width="100%" height="90%">
        <OnlineActivity />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Social Networks Report</h1>
       <PDFViewer width="100%" height="90%">
        <SocialNetworks />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Social Media Report</h1>
       <PDFViewer width="100%" height="90%">
        <SocialMedia />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Group Report</h1>
       <PDFViewer width="100%" height="90%">
        <GroupReport />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Premier Report</h1>
       <PDFViewer width="100%" height="90%">
        <PremierReport />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download URL Report</h1>
       <PDFViewer width="100%" height="90%">
        <URLCategories />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Download Event Report</h1>
       <PDFViewer width="100%" height="90%">
        <Events />
      </PDFViewer>
      </div>
      
    </div>


    </div>
  );
}
