import { StyleSheet } from "@react-pdf/renderer";

// Chart constants
export const MAX_VALUE = 100;
export const CHART_HEIGHT = 400;
export const BAR_WIDTH = 20;
export const GAP = 12;

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rightHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  greenText: {
    color: "green",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
    paddingLeft:"10"
  },
  date:{
    paddingRight:20
  },
  chartArea: {
    flexDirection: "column",
    marginTop: 30,
    marginLeft: 30,
    borderLeft: "1pt solid black",
    borderBottom: "1pt solid black",
    height: CHART_HEIGHT,
    position: "relative",
  },
  barsRow: {
  flexDirection: "row",
  alignItems: "flex-end", // bars grow upward from bottom
  position: "absolute",

  bottom: 0,              // ✅ sits exactly on the x-axis line
  left: 0,                // align with y-axis
},
  barValue: {
    fontSize: 6,
    marginBottom: 2,
  },
  domainLabel: {
    fontSize: 7,
    textAlign: "center",
    transform: "rotate(45deg)",
    marginTop: 5,
    maxWidth: 150,
  },
  gridLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "#ccc",
  },
  yTick: {
    fontSize: 6,
    position: "absolute",
    left: -20,
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 230,
    color: "gray",
  },
});

export default styles;
