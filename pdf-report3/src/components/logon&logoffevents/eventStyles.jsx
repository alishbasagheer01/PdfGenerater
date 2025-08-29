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
  header: {
    height:70,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
   backgroundColor: "#f2f2f2",
    
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  date: {
    fontSize: 10,
    paddingRight:10
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 3,
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: "#f2f2f2",
  },
  // Column widths matching screenshot
  colUser: { width: "12%",justifyContent:"center",alignItems:"center",textAlign:"left",paddingTop:10 },
  colDate: { width: "10%",justifyContent:"center",alignItems:"center",textAlign:"left",paddingTop:10 },
  colTotal: { width: "15%" ,justifyContent:"center",alignItems:"center",textAlign:"center",paddingTop:10 },
  colActive: { width: "15%",justifyContent:"center",alignItems:"center",textAlign:"center",paddingTop:10  },
  colActivePct: { width: "13%",paddingTop:10  },
  colIdle: { width: "13%",paddingTop:10  },
  colIdlePct: { width: "10%",paddingTop:10  },
  colComputer: { width: "13%",paddingTop:10  ,justifyContent:"center",alignItems:"center",textAlign:"left"},
  colLogin: { width: "15%",paddingTop:10 ,justifyContent:"center",alignItems:"center",textAlign:"left" },
  colLogoff: { width: "23%",paddingTop:10 ,justifyContent:"center",alignItems:"center",textAlign:"left" },
});
export default style;