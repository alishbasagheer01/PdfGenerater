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
import Top10ActiveUsersbyBrowsingTime from "./components/top10activeusersbybrowsingtime/Top10ActiveUsersbyBrowsingTime";
import Top10DomainsbyActiveBrowsingTime from "./components/top10domainsbyactivebrowsingtime/Top10DomainsbyActiveBrowsingTime";
import BlockedDevicesAccessed from "./components/blockeddevicesaccessed/BlockedDevicesAccessed";
import AllowedvsDeniedAccess from "./components/allowedvsdeniedaccess/AllowedvsDeniedAccess";
import AllAccessedDevices from "./components/allaccesseddevices/AllAccessedDevices";
import Top10ActiveMachines from "./components/top10activemachines/Top10ActiveMachines";
import SpecificApplicationUsage from "./components/specificapplicationusage/SpecificApplicationUsage";
import Top10ApplicationbyActiveTime from "./components/top10applicationbyactivetime/Top10ApplicationbyActiveTime";
import ApplicationUsagebyHour from "./components/applicationusagebyhour/ApplicationUsagebyHour";

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
     <div>
  <div style={{height:"100vh"}}>
  <h2>WeeklyBrowsing Report</h2>
      <PDFDownloadLink 
        document={<WeeklyActiveBrowsingTime/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
      <div>
  <div style={{height:"100vh"}}>
  <h2>Active users Report</h2>
      <PDFDownloadLink 
        document={<Top10ActiveUsersbyBrowsingTime/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div>
  <div style={{height:"100vh"}}>
  <h2>Top Domains Report</h2>
      <PDFDownloadLink 
        document={<Top10DomainsbyActiveBrowsingTime/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
      <div>
  <div style={{height:"100vh"}}>
  <h2>Blocked Devices Accessed</h2>
      <PDFDownloadLink 
        document={<BlockedDevicesAccessed/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
     <div>
  <div style={{height:"100vh"}}>
  <h2>Allowed vs Denied Access</h2>
      <PDFDownloadLink 
        document={<AllowedvsDeniedAccess/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
      <div>
  <div style={{height:"100vh"}}>
  <h2>All Access Devices</h2>
      <PDFDownloadLink 
        document={<AllAccessedDevices/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
      <div>
  <div style={{height:"100vh"}}>
  <h2>Top 10 Active Machines</h2>
      <PDFDownloadLink 
        document={<Top10ActiveMachines/>} 
        fileName="report.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      </div>
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Specific Application Usage</h1>
       <PDFViewer width="100%" height="90%">
        <SpecificApplicationUsage />
      </PDFViewer>
      </div>
      
    </div>
<div >
      <div style={{height:"100vh"}}>

      <h1>Application by Active Time</h1>
       <PDFViewer width="100%" height="90%">
        <Top10ApplicationbyActiveTime />
      </PDFViewer>
      </div>
      
    </div>
    <div >
      <div style={{height:"100vh"}}>

      <h1>Application by hour</h1>
       <PDFViewer width="100%" height="90%">
        <ApplicationUsagebyHour />
      </PDFViewer>
      </div>
      
    </div>



    </div>
  );
}
