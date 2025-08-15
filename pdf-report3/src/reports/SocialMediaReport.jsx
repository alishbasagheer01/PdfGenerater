// src/reports/SocialMediaReport.jsx
import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import { reportStyles } from "./styles";

const SocialMediaReport = ({ data = [] }) => {
  const defaultData = data.length > 0 ? data : [
    { url: "youtube.com/watch?v=Hq9xfR4NTZg&feature=youtu.be", startDate: "08/12/2025 - 05:24 PM", activeTime: "08s", totalTime: "08s" },
    { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:24 PM", activeTime: "20s", totalTime: "20s" },
    { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:24 PM", activeTime: "02m 05s", totalTime: "02m 05s" },
    { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:27 PM", activeTime: "06m 19s", totalTime: "06m 19s" },
    { url: "youtube.com", startDate: "08/12/2025 - 08:33 PM", activeTime: "25s", totalTime: "25s" },
    { url: "youtube.com", startDate: "08/12/2025 - 08:50 PM", activeTime: "02s", totalTime: "02s" },
    { url: "youtube.com", startDate: "08/12/2025 - 08:50 PM", activeTime: "16s", totalTime: "16s" },
    { url: "youtube.com", startDate: "08/12/2025 - 08:52 PM", activeTime: "02s", totalTime: "02s" },
  ];

  return (
    <Document>
      <Page size="A4" style={reportStyles.page}>
        <View style={reportStyles.navbar}>
          <Text style={reportStyles.leftcont}>Social Media Activities Report</Text>
          <View style={reportStyles.rightcont}>
            <Text style={reportStyles.rightcont1}>Browse</Text>
            <Text style={reportStyles.rightcont2}>Reporter</Text>
          </View>
        </View>

        <Text style={reportStyles.title}>Social Media Activities (Users)</Text>

        {/* Table Header */}
        <View style={[reportStyles.tableRow, reportStyles.tableHeader]}>
          <Text style={[reportStyles.tableCell, reportStyles.col1, reportStyles.headerCell]}># URL</Text>
          <Text style={[reportStyles.tableCell, reportStyles.col2, reportStyles.headerCell]}>Start Date</Text>
          <Text style={[reportStyles.tableCell, reportStyles.col3, reportStyles.headerCell]}>Active Time</Text>
          <Text style={[reportStyles.tableCell, reportStyles.col4, reportStyles.headerCell]}>Total Time</Text> 
        </View>

        {/* Table Rows */}
        {defaultData.map((item, i) => (
          <View
            key={i}
            style={[
              reportStyles.tableRow,
              i % 2 === 0 ? reportStyles.evenRow : reportStyles.oddRow
            ]}
          >
            <View style={[reportStyles.tableCell, reportStyles.col1]}>
              <Link src={`https://${item.url}`} style={reportStyles.link}>
                {item.url}
              </Link>
            </View>
            <Text style={[reportStyles.tableCell, reportStyles.col2]}>{item.startDate}</Text>
            <Text style={[reportStyles.tableCell, reportStyles.col3]}>{item.activeTime}</Text>
            <Text style={[reportStyles.tableCell, reportStyles.col4]}>{item.totalTime}</Text>
          </View>
        ))}

        <Text style={reportStyles.totalText}>Total: 09m 37s</Text>
        
        <View style={reportStyles.footer}>
          <Text>Copyright © Etor-Networks BrowseReporter</Text>
        </View>
      </Page>
    </Document>
  );
};

export default SocialMediaReport;