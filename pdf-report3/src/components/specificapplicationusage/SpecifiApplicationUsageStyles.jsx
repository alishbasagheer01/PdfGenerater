import { StyleSheet } from "@react-pdf/renderer";
const style = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  navbar:{
    display:"flex",
    textAlign:"left"
  },
  leftcont:{
    fontWeight:"bold",
    fontSize:14
  },
   rightcont:{
        display:"flex",
        flexDirection:"row",
        fontWeight:"bold",
        textAlign:"right",
        alignItems:"flex-end",
        justifyContent:"flex-end",
        marginBottom:"10"
    },
    rightcont2: {
        color: "green"
    },
  titlebar: {
    height:70,
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
   backgroundColor: "#f2f2f2",
    
  },
  titlemain:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft:30
   
  },
  date: {
    fontSize: 10,
   paddingLeft:300,
   paddingTop:15
  },
    table: {
    width: "100%",
    borderWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
    height:45
  },
  tableCell: {
    padding: 4,
    fontSize: 10,
    borderRightWidth: 1,
    borderColor: "#000",
    height:45
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
  col0: { width: "5%",textAlign:"left" ,paddingTop:10,paddingLeft:6},
  col1: { width: "40%" ,textAlign:"left",paddingTop:10,paddingLeft:6},
  col2: { width: "20%" ,textAlign:"left",paddingTop:10,paddingLeft:6 },
  col3: { width: "20%"  ,textAlign:"left",paddingTop:10,paddingLeft:6},
  col4:{width:"15%" ,textAlign:"right",paddingTop:10,paddingRight:6},

});
export default style;