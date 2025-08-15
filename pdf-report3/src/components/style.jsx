// style.js
import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
  },
  table: {
    width: "100%",
    borderWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  col1: { width: "40%" }, // URL
  col2: { width: "20%" }, // Start Date
  col3: { width: "20%",paddingLeft:10 }, // Active Time
  col4: { width: "20%" }, // Total Time

  tableCell: {
    padding: 4,
    fontSize: 10,
    
  },
  headerCell: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
});

export default style;
