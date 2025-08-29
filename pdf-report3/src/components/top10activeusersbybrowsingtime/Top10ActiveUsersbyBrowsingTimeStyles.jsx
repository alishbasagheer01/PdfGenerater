import { StyleSheet } from "@react-pdf/renderer";

export const MAX_VALUE = 400;
export const MAX_WIDTH = 380;

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    fontFamily: "Helvetica",
  },

  // Header
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftcont: { fontSize: 14, fontWeight: "bold" },
  rightcont: { flexDirection: "row" },
  rightcont1: { color: "green", fontWeight: "bold" },
  rightcont2: { color: "gray", marginLeft: 2 },

  // Title
  titlebar: { marginBottom: 20 ,paddingTop:20,backgroundColor:"grey",height:70},
  titlemain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection1: { flexDirection: "row", alignItems: "center" },
  userIcon: { width: 16, height: 16, marginRight: 6 },
  name: { fontSize: 13, fontWeight: "bold" },
  date: { fontSize: 12,paddingRight:10, color: "black" },

  // Chart Area
  chartArea: {
    marginTop: 30,
    marginLeft: 60,
    marginRight: 80,
    position: "relative",
    height: 200,
  },

  // Borders
  leftBorder: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 40, // end at axis
    width: 1,
    backgroundColor: "#000",
  },
  bottomBorder: {
    position: "absolute",
    left: 0,
    bottom: 40,
    width: MAX_WIDTH,
    height: 1,
    backgroundColor: "#000",
  },

  // X-axis ticks (below border)
  axisTick: {
    position: "absolute",
    bottom: 25, // places ticks below axis line
    fontSize: 10,
    color: "gray",
    // textAlign: "center",
  },

  // Bars
  barWrapper: {
    position: "absolute",
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
  },
  userLabel: {
    position: "absolute",
    left: -60,
    width: 55,
    fontSize: 12,
    textAlign: "right",
    marginTop:50
  },
  barContainer: {
    width: MAX_WIDTH,
    height: 90, // thicker bar
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#ccc",
    // paddingTop:50
    // justifyContent: "center",
    marginTop:60
  },
  hBar: {
    height: 90, // match container height
    backgroundColor: "#00BFFF", // light blue as in screenshot
  },
  valueLabel: {
    position: "absolute",
    right: -80,
    width: 75,
    fontSize: 12,
    textAlign: "left",
  },

  // Footer
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 400,
    color: "#9CAFAA",
    fontSize: 12,
  },
});

export default styles;
