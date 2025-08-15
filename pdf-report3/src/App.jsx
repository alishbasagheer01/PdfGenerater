// src/App.jsx

import { PDFDownloadLink } from "@react-pdf/renderer";

import ChatsReport from "./components/ChatsReport";
import HostingReport from "./components/HostingReport";
import OnlineActivity from "./components/OnlineActivity";
import SocialNetworks from "./components/SocialNetworks";
import SocialMedia from "./components/SocialMedia";

export default function App() {
  return (
    <div>
    <div >
      <h1>Download Chats Report</h1>
      <PDFDownloadLink
        document={<ChatsReport/>}
        fileName="daily_report.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50", 
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
    <div >
      <h1>Download Media Hosting Report</h1>
      <PDFDownloadLink
        document={<HostingReport/>}
        fileName="daily_report.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50", 
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
    <div >
      <h1>Download Online Media Report</h1>
      <PDFDownloadLink
        document={<OnlineActivity/>}
        fileName="daily_report.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50", 
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
    <div >
      <h1 style={{fontSize:"10"}}>Download Social Networks Report</h1>
      <PDFDownloadLink
        document={<SocialNetworks/>}
        fileName="daily_report.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50", 
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
    
    <div >
      <h1>Download Social Media Report</h1>
      <PDFDownloadLink
        document={<SocialMedia/>}
        fileName="daily_report.pdf"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50", 
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
    </div>

    </div>
  );
}
