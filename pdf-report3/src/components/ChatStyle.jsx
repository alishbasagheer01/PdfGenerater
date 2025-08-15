import { StyleSheet } from "@react-pdf/renderer";

const ChatStyle = StyleSheet.create({
    page:
        { padding: 20, fontFamily: 'Helvetica' },
    navbar: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",

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
    head:{
       backgroundColor:"#E9E3DF",
       marginTop:"10"
    },

    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop:"10"
    },
    headerLeft: {
        flexDirection: 'row',

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
        paddingRight:"5"
    },
    statsRow: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft:"25"
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
        borderColor: '#ccc'
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    cell: {
        flex: 1,
        padding: 5,
        fontSize: 11
    },
    second:{
        marginTop:"80"
    },
    third:{
        marginTop:"80"
    },
    forth:{
        marginTop:"80"
    },
    footer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:630,
        color:"#9CAFAA",
        fontSize:"12"

    }
});
export default ChatStyle;