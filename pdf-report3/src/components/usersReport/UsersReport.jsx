
import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";
import chatIcon from "../../assets/chat.png";
import style from "./usersStyles";

const data = [
  { user: "premier", activeTime: "05h 53m 03s", totalTime: "05h 55m 23s" },
  
];

const UsersReport= () => (
  <Document>
    <Page  size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
        Total Browsing Time (Users)
      </Text>
       <View style={style.rightcont}>
        <Text style={style.rightcont1}>Browse</Text>
        <Text style={style.rightcont2}>Reporter</Text>
       </View>
        
      
      </View>
     <View style={style.titlebar}>
  <View style={style.titlemain}>
    {/* Left side: user image + premier */}
    <View style={style.leftSection}>
      
    <Text style={{paddingLeft:30,fontWeight:"bold",fontSize:14}}> Group: Users</Text>
    </View>
     

    {/* Right side: date */}
    <Text style={style.date}>Date: 08/12/2025</Text>
  </View>

  {/* Bottom section */}

</View>


      {/* Header */}
  <View style={style.tableRow}>
  <Text style={[style.tableCell, style.col0, style.headerCell]}>  </Text>
  <Text style={[style.tableCell, style.col1, style.headerCell]}>User Name</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Active Time</Text>
  <Text style={[style.tableCell, style.col3, style.headerCell]}>Total Time</Text>
</View>



      {/* Rows */}
     {data.map((item, i) => (
  <View key={i} style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}>
    <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>
    <Text style={[style.tableCell, style.col1]}>{item.user}</Text>
    <Text style={[style.tableCell, style.col2]}>{item.activeTime}</Text>
    <Text style={[style.tableCell, style.col3]}>{item.totalTime}</Text>
  </View>
))}


      {/* Total */}
      <View style={{display:"flex",flexDirection:"row", marginTop: 10, fontWeight: "bold" }}>
       <Text style={{marginLeft:250}}>Total:</Text>
       <Text style={{marginLeft:75}}>05h 53m 03s</Text>
        <Text style={{marginLeft:75}}>05h 55m 23s</Text>
      </View>
       <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:590,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
      
    </Page>
  </Document>
);

export default UsersReport;
