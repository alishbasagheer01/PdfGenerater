// src/reports/ChatsReport.jsx - Fixed version
import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { reportStyles } from "./styles";

const ChatsReport = ({ data = [] }) => {
  const defaultData = data.length > 0 ? data : [
    { user: 'premier', activeTime: '39m 06s', hits: 81 }
  ];

  const totalHits = defaultData.reduce((sum, item) => sum + item.hits, 0);
  const totalTime = defaultData.length > 0 ? defaultData[0].activeTime : '0s';

  return (
    <Document>
      <Page size="A4" style={reportStyles.page}>
        {/* Header */}
        <View style={reportStyles.navbar}>
          <Text style={reportStyles.leftcont}>Chats Report</Text>
          <View style={reportStyles.rightcont}>
            <Text style={reportStyles.rightcont1}>Browse</Text>
            <Text style={reportStyles.rightcont2}>Reporter</Text>
          </View>
        </View>

        {/* Title Section */}
        <View style={reportStyles.head}>
          <View style={reportStyles.headerRow}>
            <View style={reportStyles.headerLeft}>
              {/* Removed Image component - causing issues */}
              <Text style={reportStyles.title}>💬 Chats</Text>
            </View>
            <Text style={reportStyles.date}>Date: {new Date().toLocaleDateString()}</Text>
          </View>

          <View style={reportStyles.statsRow}>
            <Text style={reportStyles.stat}>Total Hits: {totalHits}</Text>
            <Text style={reportStyles.stat}>Total Time: {totalTime}</Text>
          </View>
        </View>

        {/* Table */}
        <View style={reportStyles.table}>
          <View style={reportStyles.tableHeader}>
            <Text style={[reportStyles.cell, { flex: 2 }]}>User</Text>
            <Text style={reportStyles.cell}>Active Time</Text>
            <Text style={reportStyles.cell}>Hits</Text>
          </View>
          {defaultData.map((row, i) => (
            <View style={reportStyles.tableRow} key={i}>
              <Text style={[reportStyles.cell, { flex: 2, color: 'blue', textDecoration: 'underline' }]}>
                {row.user}
              </Text>
              <Text style={reportStyles.cell}>{row.activeTime}</Text>
              <Text style={reportStyles.cell}>{row.hits}</Text>
            </View>
          ))}
        </View>
        
        <View style={reportStyles.footer}>
          <Text>Copyright © Etor-Networks BrowseReporter</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ChatsReport;