// style.js
import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
  },

  // 🔹 Navbar
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  leftcont: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rightcont: {
    flexDirection: "row",
  },
  rightcont2: {
    color: "green",
  },

  // 🔹 Title Bar
  titlebar: {
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center",
    flexDirection: "column",
    height: 50,
    backgroundColor: "#A6AEBF",
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  titlemain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "column",
    alignItems: "center",
  },
  leftSection1:{
    display:"flex",
    flexDirection:"row",
    fontWeight:"bold"
  },
  userIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
    paddingTop:7
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop:10
  },
  date: {
    fontSize: 12,
    color: "#000",
    paddingRight:"7"
  },
  bottom: {
    marginTop: 10,
    paddingLeft: 10,
  },

  // 🔹 Table
  table: {
    width: "100%",
    borderWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  tableCell: {
    padding: 4,
    fontSize: 10,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  headerCell: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },

  // 🔹 Column widths
  col0: { width: "5%" },
  col1: { width: "40%" },
  col2: { width: "40%", textAlign: "left" },
  col3: { width: "40%", textAlign: "left" },

  // 🔹 Misc
  link: {
    color: "blue",
    textDecoration: "underline",
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
    color: "grey",
  },
});

export default style;
