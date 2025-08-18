
import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";
import chatIcon from "../../assets/chat.png";
import style from "./premierStyles";

const data = [
  { Categories: "Unknown", activeTime: "03h 09m 24s", totalTime: "03h 09m 24s" },
  { Categories: "AI", activeTime: "01h 20m 16s", totalTime: "01h 20m 16s" },
  { Categories: "Chats", activeTime: "39m 11s", totalTime: "39m 11s" },
  { Categories: "Web hosting", activeTime: "15m 04s", totalTime: "15m 04s" },
  { Categories: "Tracker", activeTime: "15m 04s", totalTime: "15m 04s" },
  { Categories: "File hosting", activeTime: "09m 47s", totalTime: "09m 47s" },
  { Categories: "Software(others)", activeTime: "04m 23s", totalTime: "04m 23s" },
  { Categories: "Social Networks", activeTime: "03m 13s", totalTime: "03m 13s" },
  { Categories: "Image and Video Hosting", activeTime: "03m 12s", totalTime: "03m 12s" },
  { Categories: "Online Audio and Video", activeTime: "03m 12s", totalTime: "03m 12s" },
];

const PremierReport= () => (
  <Document>
    <Page  size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
        Top 10 Categories by Browsing Time (Users)
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
      <View style={style.leftSection1}>

      <Image style={style.userIcon} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" /> 
      <Text style={style.name}>premier</Text>
      </View>
      
    <Text style={{paddingLeft:30}}> Group: Users</Text>
    </View>
      <View style={style.bottom}>
  </View>

    {/* Right side: date */}
    <Text style={style.date}>Date: 08/12/2025</Text>
  </View>

  {/* Bottom section */}

</View>


      {/* Header */}
  <View style={style.tableRow}>
  <Text style={[style.tableCell, style.col0, style.headerCell]}>#</Text>
  <Text style={[style.tableCell, style.col1, style.headerCell]}>Categories</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Active Time</Text>
  <Text style={[style.tableCell, style.col3, style.headerCell]}>Total Time</Text>
</View>



      {/* Rows */}
     {data.map((item, i) => (
  <View key={i} style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}>
    <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>
    <Text style={[style.tableCell, style.col1]}>{item.Categories}</Text>
    <Text style={[style.tableCell, style.col2]}>{item.activeTime}</Text>
    <Text style={[style.tableCell, style.col3]}>{item.totalTime}</Text>
  </View>
))}


      {/* Total */}
      <View style={{display:"flex",flexDirection:"row", marginTop: 10, fontWeight: "bold" }}>
       <Text style={{marginLeft:250}}>Total:</Text>
       <Text style={{marginLeft:75}}>06h 02m 46s</Text>
        <Text style={{marginLeft:75}}>06h 02m 46s</Text>
      </View>
       <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:400,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
      
    </Page>
  </Document>
);

export default PremierReport;
