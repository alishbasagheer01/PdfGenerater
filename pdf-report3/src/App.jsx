// src/App.jsx

import { PDFDownloadLink } from "@react-pdf/renderer";
import SocialMedia from "./components/SocialMedia";
import ChatsReport from "./components/ChatsReport";

export default function App() {
  return (
    <div>
    <div style={{ padding: 20 }}>
      <h1>Download Report</h1>
      <PDFDownloadLink
        document={<SocialMedia />}
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
    <div style={{ padding: 20 }}>
      <h1>Download Report</h1>
      <PDFDownloadLink
        document={<ChatsReport />}
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
