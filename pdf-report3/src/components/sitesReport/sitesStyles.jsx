// style.js
import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 10,
  },

  // 🔹 Navbar
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  leftcont: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft:10,
    marginTop:20
  },
  rightcont: {
    flexDirection: "row",
    paddingRight:20,
    marginTop:20
  },
  rightcont2: {
    color: "green",
  },

  // 🔹 Title Bar
  titlebar: {
    flexDirection: "column",
    height: 70,
    backgroundColor: "#A6AEBF",
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    paddingTop:10,
    paddingRight:100
  },
  date: {
    fontSize: 12,
    color: "#000",
  },
  bottom: {
    marginTop: 13,
    paddingLeft: 20,
  },

  // 🔹 Table
  table: {
    width: "100%",
    borderWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    // alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  tableCell: {
    // height:10,
     paddingVertical: 8,   
  paddingHorizontal: 2,
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
  col0: { width: "7%",alignItems:"center",textAlign:"center" },
  col1: { width: "100%" ,},
  col2: { width: "35%", textAlign: "left",alignItems:"center" },
  col3: { width: "25%", textAlign: "right" },
  col4: { width: "25%", textAlign: "right" },

  // 🔹 Misc
  link: {
    color: "blue",
    
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
    color: "grey",
  },
});

export default style;
