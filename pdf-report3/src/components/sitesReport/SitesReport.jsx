import { Document, Page, Text, View, Image, Link } from "@react-pdf/renderer";

import style from "./sitesStyles";

const data = [
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter", startdate: "08/12/2025-08:56 PM", activeTime: "03s", totalTime: "03s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter/todays-insights", startdate: "08/12/2025-08:56 PM", activeTime: "05s", totalTime: "05s" },
    { url: "desktop-k3kvlfu:8998/currentware/accesspatrol", startdate: "08/12/2025-08:55 PM", activeTime: "35s", totalTime: "35s" },
    { url: "desktop-k3kvlfu:8998/currentware/accesspatrol/dashboard/overview", startdate: "08/12/2025-08:55 PM", activeTime: "07s", totalTime: "07s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter", startdate: "08/12/2025-08:55 PM", activeTime: "05s", totalTime: "05s" },
    { url: "new.tab", startdate: "08/12/2025-08:54 PM", activeTime: "04s", totalTime: "04s" },
    { url: "web.whatsapp.com", startdate: "08/12/2025-08:53 PM", activeTime: "36s", totalTime: "36s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter", startdate: "08/12/2025-08:52 PM", activeTime: "11s", totalTime: "11s" },
    { url: "desktop-k3kvlfu:8998/assets/reports/Xb9oc1Vthx6rPSspS_TYqLcYa17", startdate: "08/12/2025-08:52 PM", activeTime: "02s", totalTime: "02s" },
    { url: "desktop-k3kvlfu:8998/assets/reports/8vVFv0Yo613L6fLOOhc7Ufqqf17", startdate: "08/12/2025-08:52 PM", activeTime: "01s", totalTime: "01s" },
    { url: "youtube.com", startdate: "08/12/2025-08:52 PM", activeTime: "02s", totalTime: "02s" },
    { url: "chrome://profile-picker", startdate: "08/12/2025-08:52 PM", activeTime: "14s", totalTime: "14s" },
    { url: "desktop-k3kvlfu:8998/assets/reports/Xb9oc1Vthx6rPSspS_TYqLcYa17", startdate: "08/12/2025-08:52 PM", activeTime: "06s", totalTime: "06s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter", startdate: "08/12/2025-08:51 PM", activeTime: "01m 09s", totalTime: "01m 09s" },
    { url: "youtube.com", startdate: "08/12/2025-08:50 PM", activeTime: "16s", totalTime: "16s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter", startdate: "08/12/2025-08:50 PM", activeTime: "46s", totalTime: "46s" },
    { url: "youtube.com", startdate: "08/12/2025-08:50 PM", activeTime: "02s", totalTime: "02s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter", startdate: "08/12/2025-08:48 PM", activeTime: "01m 48s", totalTime: "01m 48s" },
    { url: "desktop-k3kvlfu:8998/currentware/browsereporter/todays-insights", startdate: "08/12/2025-08:48 PM", activeTime: "02s", totalTime: "02s" },
    { url: "desktop-k3kvlfu:8998/currentware/settings/email", startdate: "08/12/2025-08:45 PM", activeTime: "02m 50s", totalTime: "02m50s" },
   
    
];

const SitesReport = () => (
    <Document>
        <Page size="A4" style={style.page}>
            <View style={style.navbar}>
                <Text style={style.leftcont}>
                    Sites Visited (Users)
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
      
    <Text style={{paddingLeft:30}}> Computer: DESKTOP-K3KVLFU Group: Users</Text>
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
  <Text style={[style.tableCell, style.col1, style.headerCell]}>Websites</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Start Date</Text>
  <Text style={[style.tableCell, style.col3, style.headerCell]}>Active Time</Text>
  <Text style={[style.tableCell, style.col4, style.headerCell]}>Total Time</Text>
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
          : `https://${item.url}`   
      }
      style={[style.tableCell, style.col1, { color: "blue" }]}
    >
      {item.url}
    </Link>
    <Text style={[style.tableCell, style.col2]}>{item.startdate}</Text>
    <Text style={[style.tableCell, style.col3]}>{item.activeTime}</Text>
    <Text style={[style.tableCell, style.col4]}>{item.totalTime}</Text>
  </View>
))}
<View style={{display:"flex",flexDirection:"row", marginTop: 10,fontSize:10  }}>
       <Text style={{marginLeft:370}}>Total:</Text>
       <Text style={{marginLeft:50}}> 05h 48m 33s </Text>
        <Text style={{marginLeft:10}}>05h 50m 53s</Text>
      </View>
       <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:30,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
      
    </Page>
  </Document>
);

export default SitesReport;

