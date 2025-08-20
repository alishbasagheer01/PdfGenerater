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
import AppUsageReport from "./components/appusageReport/AppUsageReport";
import UsersReport from "./components/usersReport/UsersReport";
import DomainsReport from "./components/domainsReport/DomainsReport";
import SitesReport from "./components/sitesReport/SitesReport";
import KeywordsReport from "./components/keywordsReport/KeywordsReport";
import Keywords2Report from "./components/keywords2Report/Keywords2Report";
import ProductivityReport from "./components/productivityReport/ProductivityReport";
import HourlyReport from "./components/hourlyReport/HourlyReport";
import WeeklyActiveBrowsingTime from "./components/weeklyactivebrowsingtime/WeeklyActiveBrowsingTime";


export default function App() {
  return (
    <div>
    <div>
      <PDFDownloadLink 
        document={<ChatsReport />} 
        fileName="group_report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
    <div>
      <PDFDownloadLink 
        document={<HostingReport />} 
        fileName="group_report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
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
    <div>
      <div style={{height:"100vh"}}>
        <h2>Group Report</h2>

      <PDFDownloadLink 
        document={<GroupReport />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
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
     <div>
      <div style={{height:"100vh"}}>
        <h2>App Usage Report</h2>

      <PDFDownloadLink 
        document={<AppUsageReport />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div>
      <div style={{height:"100vh"}}>
        <h2>Users Report</h2>

      <PDFDownloadLink 
        document={<UsersReport />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div>
      <div style={{height:"100vh"}}>
        <h2>Domains Report</h2>

      <PDFDownloadLink 
        document={<DomainsReport />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div>
      <div style={{height:"100vh"}}>
        <h2>Sites Report</h2>

      <PDFDownloadLink 
        document={<SitesReport />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div>
      <div style={{height:"100vh"}}>
        <h2>Keywords Report</h2>

      <PDFDownloadLink 
        document={<KeywordsReport />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
<div>
  <div style={{height:"100vh"}}>
  <h2>Keywords Report2</h2>
      <PDFDownloadLink 
        document={<Keywords2Report />} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
<div>
  <div style={{height:"100vh"}}>
  <h2>Productivity Report</h2>
      <PDFDownloadLink 
        document={<ProductivityReport/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div>
  <div style={{height:"100vh"}}>
  <h2>Hourly Browsing Report</h2>
      <PDFDownloadLink 
        document={<HourlyReport/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Weekly Active Browsing Time Report</h1>
       <PDFViewer width="100%" height="90%">
        <WeeklyActiveBrowsingTime />
      </PDFViewer>
      </div>
      
    </div>



    </div>
  );
}
