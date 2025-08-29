// Report.jsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

// ====== Styles ======

// ====== Data ======
const data = [
  { app: "Chrome", value: 80 },
  { app: "Slack", value: 65 },
  { app: "Teams", value: 50 },
  { app: "Word", value: 35 },
  { app: "Excel", value: 20 },
];

// Color sequence (last = red)
const colorSequence = ["#0074D9", "#2ECC40", "#FF851B", "#7FDBFF", "#FF4136"];

// Y-axis scale (max = 100 for demo)
const yAxisValues = [100, 80, 60, 40, 20, 0];

// ====== Report Component ======
const ApplicationUsagebyHour = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title */}
      <Text style={styles.title}>Top 10 Applications by Active Time</Text>

      {/* Chart + Legend */}
      <View style={styles.chartContainer}>
        {/* Y Axis */}
        <View style={styles.yAxis}>
          {yAxisValues.map((val) => (
            <Text key={val} style={styles.yAxisLabel}>{val}</Text>
          ))}
        </View>

        {/* Chart */}
        <View style={styles.chart}>
          {data.map((d, i) => (
            <View
              key={d.app}
              style={[
                styles.bar,
                {
                  height: d.value,
                  backgroundColor: colorSequence[i % colorSequence.length],
                },
              ]}
            />
          ))}
        </View>

        {/* Legend */}
        <View style={styles.legend}>
          {data.map((d, i) => (
            <View key={d.app} style={styles.legendItem}>
              <View
                style={[
                  styles.legendColor,
                  { backgroundColor: colorSequence[i % colorSequence.length] },
                ]}
              />
              <Text>{d.app}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Table */}
      <View style={styles.table}>
        {/* Header */}
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Application</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Active Time (min)</Text>
          </View>
        </View>

        {/* Rows */}
        {data.map((d) => (
          <View style={styles.tableRow} key={d.app}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{d.app}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{d.value}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ApplicationUsagebyHour;
