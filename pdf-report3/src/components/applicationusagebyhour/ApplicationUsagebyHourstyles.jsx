import { StyleSheet } from "@react-pdf/renderer";

export const CHART_HEIGHT = 250;
export const BAR_WIDTH = 18;
export const GAP = 18;
export const MAX_VALUE = 60; // y-axis goes 0–60 min

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  chartContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  yAxis: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginRight: 5,
    height: 120,
  },
  yAxisLabel: {
    fontSize: 8,
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    height: 120,
    borderLeft: 1,
    borderBottom: 1,
    borderColor: "#444",
    flex: 3,
    paddingBottom: 5,
  },
  bar: {
    width: 12,
  },
  legend: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-start",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  legendColor: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#444",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "#444",
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
    padding: 4,
  },
  tableCol: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "#444",
    borderWidth: 1,
    padding: 4,
  },
  tableCellHeader: {
    fontSize: 9,
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 8,
  },
});

export default styles;
