// style.js
import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
  },
  navbar:{
     display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:30
  },
  leftcont: {
        fontSize: "14",
        fontWeight: "bold"
    },
    rightcont:{
        display:"flex",
        flexDirection:"row"
    },
    rightcont2: {
        color: "green"
    },
    titlebar:{
      display:"flex",
      flexDirection:"column",
      height:70,
      backgroundColor:"#A6AEBF"
    },
    titlemain:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-between"
    },
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
    paddingLeft:10
  },
  date: {
    fontSize: 12,
    color: "#000",
  },
  bottom: {
    marginTop: 10,
    paddingLeft: 10,
  },

  table: {
    width: "100%",
    borderWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    // width:"100%"
  },
  col1: { width: "40%" }, // URL
  col2: { width: "28%",paddingLeft:10,display:"flex",textAlign:"center" }, // Start Date
  col3: { width: "20%",paddingLeft:40,display:"flex",textAlign:"left"}, // Active Time
  col4: { width: "20%" ,paddingLeft:40,display:"flex",textAlign:"left"}, // Total Time

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
  footer:{
    
  }
});

export default style;
