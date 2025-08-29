import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import styles, { MAX_VALUE, CHART_HEIGHT, BAR_WIDTH, GAP } 
  from "./Top10DomainsbyActiveBrowsingTimeStyles";


// Sample data
const data = [
  { domain: "desktop-99v4u6g", value: 100, label: "01h 40m", color: "#FF4D4D" },
  { domain: "chatgpt.com", value: 65, label: "01h 05m", color: "#7BC8A4" },
  { domain: "localhost:5173", value: 62, label: "01h 02m", color: "#3DB2FF" },
  { domain: "new-era-networking-site.netlify.app", value: 30, label: "30m", color: "#9B59B6" },
  { domain: "chat.deepseek.com", value: 29, label: "29m", color: "#00BFFF" },
  { domain: "web.whatsapp.com", value: 23, label: "23m", color: "#3498DB" },
  { domain: "chrome", value: 17, label: "17m", color: "#27AE60" },
  { domain: "youtube.com", value: 9, label: "09m", color: "#F39C12" },
  { domain: "drive.google.com", value: 8, label: "08m", color: "#E67E22" },
  { domain: "docs.google.com", value: 6, label: "04m", color: "#E74C3C" },
];

const Top10DomainsbyActiveBrowsingTime = () => {
  // Y ticks for gridlines
  const yTicks = [0, 20, 40, 60, 80, 100];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Top 10 Domains by Active Browsing Time</Text>
          <View style={styles.rightHeader}>
            <Text style={styles.greenText}>Browse</Text>
            <Text> Reporter</Text>
            
          </View>
        </View>
        <View style={{height:70,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"grey"}}>
        {/* Section Title */}
        <Text style={styles.sectionTitle}>Computers</Text>
        <Text style={styles.date}>Date:08/12/2025</Text>
        </View>

        {/* Chart */}
        <View style={styles.chartArea}>
          {/* Gridlines & Y-axis ticks */}
          {yTicks.map((tick, i) => {
            const top = CHART_HEIGHT - (tick / MAX_VALUE) * CHART_HEIGHT;
            return (
              <React.Fragment key={i}>
                <View style={[styles.gridLine, { top }]} />
                <Text style={[styles.yTick, { top: top - 4 }]}>{tick}</Text>
              </React.Fragment>
            );
          })}

          {/* Bars */}
          <View style={styles.barsRow}>
            {data.map((item, i) => {
              const barHeight = (item.value / MAX_VALUE) * CHART_HEIGHT;
              return (
                <View
                  key={i}
                  style={{ alignItems: "center" }}
                >
                  {/* Value above bar */}
                  <Text style={styles.barValue}>{item.label}</Text>

                  {/* Bar */}
                  <View
                    style={{
                      width: BAR_WIDTH,
                      height: barHeight,
                      backgroundColor: item.color,
                      marginBottom:-13
                    }}
                  />

                  {/* Rotated label */}
                  <Text style={styles.domainLabel}>{item.domain}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Copyright © CurrentWare BrowseReporter
        </Text>
      </Page>
    </Document>
  );
};

export default Top10DomainsbyActiveBrowsingTime;
