// style.js
import { StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    width:"100vh"
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

  name: {
    // fontSize: 16,
    fontWeight: "bold",
    paddingTop:10,
    

  },
  date: {
    fontSize: 12,
    color: "#000",
    paddingTop:30
  },


  table: {
    width: "100%",
    borderWidth: 0,
    
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth:1,
    borderColor:"#000",
    width:"100%"
  },
    tableCell: {
    padding: 4,
    fontSize: 10,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor:"#000",
    // width:"100%"
    
  },
    headerCell: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:"#000"
  },

  col1: { width: "45%" }, // URL
  col2: { width: "30%",display:"flex",textAlign:"right" }, // Start Date
  col3: { width: "40%",display:"flex",textAlign:"right"}, // Active Time
  col4: { width: "40%" ,display:"flex",textAlign:"right"}, 
  col5: { width: "50%" ,display:"flex",textAlign:"right"}, 
  col6: { width: "35%" ,display:"flex",textAlign:"right"}, 



  oddRow: {
    backgroundColor: "#ffffff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
    paddingLeft:5
  },
  footer:{
    
  }
});

export default style;
