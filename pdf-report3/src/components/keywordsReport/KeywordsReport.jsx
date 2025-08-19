
import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";
import chatIcon from "../../assets/chat.png";
import style from "./keywordsStyles";

const data = [
  { user: "google docs",url:"google.com", datetime:"08/12/2025-07:26PM" },
  { user: "google docs",url:"google.com", datetime:"08/12/2025-07:26PM" },
  { user: "google docs",url:"google.com", datetime:"08/12/2025-07:19PM" },
  { user: "google docs",url:"google.com", datetime:"08/12/2025-07:18PM" },
  { user: "google docs",url:"google.com", datetime:"08/12/2025-07:18PM" },
  { user: "google docs",url:"google.com", datetime:"08/12/2025-07:15PM" },
  
];

const KeywordsReport= () => (
  <Document>
    <Page  size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
       Keywords Searched by Time (Users)
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

      <Image style={style.userIcon} src="https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=search&page=1&position=0&uuid=b1bfe8de-97d3-4818-8db5-60ace0ef1e82&query=user+logo" /> 
      <Text style={{paddingLeft:10,marginTop:5,fontWeight:"bold",fontSize:"16"}}>premier</Text>
      </View>
      
    <Text style={{paddingLeft:45,}}> Group: Users</Text>
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
  <Text style={[style.tableCell, style.col0, style.headerCell]}>  </Text>
  <Text style={[style.tableCell, style.col1, style.headerCell]}>Keywords</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Search Engines</Text>
  <Text style={[style.tableCell, style.col3, style.headerCell]}>Search Date/Time</Text>
</View>



      {/* Rows */}
     {data.map((item, i) => (
  <View key={i} style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}>
    <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>
    <Text style={[style.tableCell, style.col1]}>{item.user}</Text>
    <Link src={`https://${item.url}`} style={[style.tableCell, style.col2]}>
  {item.url}
</Link>

    <Text style={[style.tableCell, style.col3]}>{item.datetime}</Text>
  </View>
))}


     
     
       <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:520,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
      
    </Page>
  </Document>
);

export default KeywordsReport;
