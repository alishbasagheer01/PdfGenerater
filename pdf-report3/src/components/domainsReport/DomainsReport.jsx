import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";
import chatIcon from "../../assets/chat.png";
import style from "./domainStyles";
const data = [
  { url: "desktop-k3kvlfu:8998", hits:"170" },
  { url: "localhost:5173", hits:"161" },
  { url: "chatgpt.com", hits:"91" },
  { url: "web.whatsapp.com", hits:"47" },
  { url: "new-etor-networking-site.netlify.app", hits:"35" },
  { url: "chat.deepseek.com", hits:"33" },
  { url: "chrome:", hits:"25" },
  { url: "new.tab", hits:"22" },
  { url: "drive.google.com", hits:"20" },
  { url: "docs.google.com", hits:"17" },
  
];
const DomainsReport= () => (
  <Document>
    <Page  size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
        Top 10 Domains by Hits (Users)
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
      <Text style={style.name}>premier</Text>
      </View>
      
    <Text style={{paddingLeft:30,marginTop:5}}> Group: Users</Text>
    </View>
      <View style={style.bottom}>
  </View>

    {/* Right side: date */}
    <Text style={style.date}>Date: 08/12/2025</Text>
  </View>

  {/* Bottom section */}

</View>
<View style={style.tableRow}>
  <Text style={[style.tableCell, style.col0, style.headerCell]}>  </Text>
  <Text style={[style.tableCell, style.col1, style.headerCell]}>Domain</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Hits</Text>
  </View>
   {data.map((item, i) => (
  <View
    key={i}
    style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}
  >
    <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>

    {/* Make URL clickable */}
    <Link
      src={
        item.url.startsWith("http")
          ? item.url
          : `https://${item.url}`   // fallback to https if no protocol
      }
      style={[style.tableCell, style.col1, { color: "blue" }]}
    >
      {item.url}
    </Link>

    <Text style={[style.tableCell, style.col2]}>{item.hits}</Text>
  </View>
))}

    <View style={{display:"flex",flexDirection:"row", marginTop: 10, fontWeight: "bold" }}>
       <Text style={{marginLeft:360}}>Total:</Text>
       <Text style={{marginLeft:150}}>621</Text>
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

export default DomainsReport;

