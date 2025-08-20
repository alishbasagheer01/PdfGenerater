import { StyleSheet } from "@react-pdf/renderer";

export const MAX_VALUE = 50;
export const MAX_HEIGHT = 200;

const style = StyleSheet.create({
  page: { padding: 20, fontSize: 12 },
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
    display:"flex",
    justifyContent:"space-between",
    alignContent:"center",
    flexDirection: "column",
    height: 70,
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
    
  },
  date: {
    fontSize: 12,
    color: "#000",
    paddingRight:"7"
  },
  bottom: {
    // marginTop: 10,
    paddingLeft: 10,
  },
    

  header: { marginBottom: 20 },

  chartWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 30,
    paddingLeft:20
  },
  yAxis: {
    marginRight: 10,
    justifyContent: "space-between",
    height: MAX_HEIGHT,
  },
  yAxisLabel: {
  writingMode: "vertical-rl",   // vertical text
  transform: "rotate(180deg)",  // flip so it's readable
  textAlign: "center",
  fontSize: 10,
  marginRight: 5,     
            // spacing from axis numbers
},

  yLabel: { fontSize: 8 },

  chartArea: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderLeft: "1pt solid black",
    borderBottom: "1pt solid black",
    height: MAX_HEIGHT,
    flex: 1,
  },
  barWrapper: {
    alignItems: "center",
    marginHorizontal: 2,
    borderRight: "0.5pt solid #ccc",

  },
  bar: {
    width: 15,
    // border:"1px solid red",
    
    backgroundColor: "green",
  },
  xLabel: { fontSize: 8, marginTop: 4 },
});

export default style;
