import { StyleSheet } from "@react-pdf/renderer";

export const stylePage1 = StyleSheet.create({
    page:
        { padding: 20, fontFamily: 'Helvetica' },
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    leftcont: {
        fontSize: "14",
        fontWeight: "bold"
    },
    rightcont: {
        display: "flex",
        flexDirection: "row",
        fontSize:"12"
    },
    rightcont2: {
        color: "green"
    },
    head: {
        backgroundColor: "#E9E3DF",
        marginTop: "10",
        height:70,

    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: "10"
    },
    headerLeft: {
        flexDirection: 'row',
        paddingTop:15,
        paddingLeft:10,
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 6
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 12,
        color: 'grey',
        paddingRight: "10",
        paddingTop:15,
        
    },
    statsRow: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: "25"
    },
    stat: {
        marginRight: 20,
        fontSize: 12
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#EAEFEF',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        fontWeight:"bold"
    },
    tableRow: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#000",
    },
    cell: {
        flex: 1,
        padding: 5,
       

        fontSize: 10,
        borderRightWidth: 1,
        borderColor: "#000",
    },
    second: {
        marginTop: "80"
    },
    third: {
        marginTop: "80"
    },
    forth: {
        marginTop: "80"
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 630,
        color: "#9CAFAA",
        fontSize: "12"

    }
});
export const stylePage2 = StyleSheet.create({
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
  col0: { width: "5%",textAlign:"left" ,paddingTop:15,paddingLeft:6},
  col1: { width: "70%" ,textAlign:"left",paddingTop:15,paddingLeft:6},
  col2: { width: "20%" ,textAlign:"right",paddingTop:15,paddingRight:6 },
  col3: { width: "20%"  ,textAlign:"right",paddingTop:15,paddingRight:6},


});
