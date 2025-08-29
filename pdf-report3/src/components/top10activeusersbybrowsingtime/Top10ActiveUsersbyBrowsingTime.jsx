import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import styles, { MAX_VALUE, MAX_WIDTH } from "./Top10ActiveUsersbyBrowsingTimeStyles";
import chatIcon from "../../assets/chat.png";

const Top10ActiveUsersbyBrowsingTime = () => {
  // Example single user
  const users = [{ name: "premier", value: 357, label: "05h 57m 31s" }];

  const ticks = [0, 100, 200, 300, 400];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.navbar}>
          <Text style={styles.leftcont}>Top 10 Users by Active Browsing Time</Text>
          <View style={styles.rightcont}>
            <Text style={styles.rightcont1}>Browse</Text>
            <Text style={styles.rightcont2}>Reporter</Text>
          </View>
        </View>

        {/* Title Section */}
        <View style={styles.titlebar}>
          <View style={styles.titlemain}>
            <View style={styles.leftSection1}>
              <Image style={styles.userIcon} src={chatIcon} />
              <Text style={styles.name}>Top 10 Users</Text>
            </View>
            <Text style={styles.date}>Date: 08/12/2025</Text>
          </View>
        </View>

        {/* Chart */}
        <View style={styles.chartArea}>
          {/* Left Y-axis */}
          <View style={styles.leftBorder} />

          {/* Bottom X-axis */}
          <View style={styles.bottomBorder} />

          {/* Axis Ticks */}
          {ticks.map((tick, i) => {
            const left = (tick / MAX_VALUE) * MAX_WIDTH;
            return (
              <Text key={i} style={[styles.axisTick, { left: left }]}>
                {tick}
              </Text>
            );
          })}

          {/* Bars */}
          {users.map((user, i) => {
            const barWidth = (user.value / MAX_VALUE) * MAX_WIDTH;
            return (
              <View key={i} style={[styles.barWrapper, { top: 10 + i * 70 }]}>
                {/* Username */}
                <Text style={styles.userLabel}>{user.name}</Text>

                {/* Bar */}
                <View style={styles.barContainer}>
                  <View style={[styles.hBar, { width: barWidth }]} />
                </View>

                {/* Value */}
                <Text style={styles.valueLabel}>{user.label}</Text>
              </View>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Copyright © CurrentWare BrowseReporter</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Top10ActiveUsersbyBrowsingTime;
