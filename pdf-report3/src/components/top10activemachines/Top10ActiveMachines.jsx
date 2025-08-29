
import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";
import chatIcon from "../../assets/chat.png";
import style from "./Top10ActiveMachinesStyles.jsx";

const data = [
  { user: "ZAIGUM", allowed: "3", denied: "0" },
  
];

const Top10ActiveMachines= () => (
  <Document>
    <Page  size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
        Top 10 Active Machines
      </Text>
       <View style={style.rightcont}>
        <Text style={style.rightcont1}>Access</Text>
        <Text style={style.rightcont2}>Petrol</Text>
       </View>
        
      
      </View>
     <View style={style.titlebar}>
  <View style={style.titlemain}>
    {/* Left side: user image + premier */}
    <View style={style.leftSection}>
      
    <Text style={{paddingLeft:20,fontWeight:"bold",fontSize:14}}> Top 10 Computers</Text>
    </View>
     

    {/* Right side: date */}
    <Text style={style.date}>Date: 08/22/2025</Text>
  </View>

  {/* Bottom section */}

</View>


      {/* Header */}
  <View style={style.tableRow}>
  <Text style={[style.tableCell, style.col0, style.headerCell]}>  </Text>
  <Text style={[style.tableCell, style.col1, style.headerCell]}>Computer Name</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Allowed Devices Accessed</Text>
  <Text style={[style.tableCell, style.col3, style.headerCell]}>Denied Devices Accessed</Text>
</View>



      {/* Rows */}
     {data.map((item, i) => (
  <View key={i} style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}>
    <Text style={[style.tableCell, style.col0]}>{i+1}</Text>
    <Text style={[style.tableCell, style.col1]}>{item.user}</Text>
    <Text style={[style.tableCell, style.col2,{textAlign:"center"}]}>{item.allowed}</Text>
    <Text style={[style.tableCell, style.col3,{textAlign:"center"}]}>{item.denied}</Text>
  </View>
))}


     
       <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:630,
               color:"#9CAFAA",
               fontSize:"12",
               borderTop:"1px solid black",
               paddingTop:7
               }}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
      
    </Page>
  </Document>
);

export default Top10ActiveMachines;
