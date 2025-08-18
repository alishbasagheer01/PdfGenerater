import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";

import style from "./categoriesStyles";


const data=[
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:18 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:17 PM",activetime:"19s",totaltime:"19s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:17 PM",activetime:"05s",totaltime:"05s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:17 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:17 PM",activetime:"03s",totaltime:"03s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:13 PM",activetime:"33s",totaltime:"33s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:13 PM",activetime:"08s",totaltime:"08s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:13 PM",activetime:"17s",totaltime:"17s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:12 PM",activetime:"33s",totaltime:"33s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:12 PM",activetime:"03s",totaltime:"03s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:12 PM",activetime:"03s",totaltime:"03s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:11 PM",activetime:"27s",totaltime:"27s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:11 PM",activetime:"02s",totaltime:"02s"},
{url:"web.whatsapp.com",category:"Chats",status:"Allowed",startdate:"08/12/2025 - 09:11 PM",activetime:"08s",totaltime:"08s"},
{url:"web.whatsapp.com",category:"Chats",status:"Allowed",startdate:"08/12/2025 - 09:10 PM",activetime:"11s",totaltime:"11s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:10 PM",activetime:"13s",totaltime:"13s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:10 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:10 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:10 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:09 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:09 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:09 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:09 PM",activetime:"12s",totaltime:"12s"},
{url:"desktop-k3kvlfu:8998",category:"Unknown",status:"Allowed",startdate:"08/12/2025 - 09:08 PM",activetime:"12s",totaltime:"12s"}
];
const URLCategories = () => (
  <Document>
    <Page size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
        Social Media Activities (Users)
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
      
      <View style={style.tableRow}>
        
        <Text style={[style.tableCell, style.col1, style.headerCell]}>#Domain URL</Text>
        <Text style={[style.tableCell, style.col2, style.headerCell]}>Category</Text>
        <Text style={[style.tableCell, style.col3, style.headerCell]}>Status</Text>
        <Text style={[style.tableCell, style.col4, style.headerCell]}>Start Date</Text> 
        <Text style={[style.tableCell, style.col5, style.headerCell]}>Active Time</Text> 
        <Text style={[style.tableCell, style.col6, style.headerCell]}>Total Time</Text> 
      </View>
      {data.map((item, i) => (
        <View
          key={i}
          style={[
            style.tableRow,
            i % 2 === 0 ? style.evenRow : style.oddRow
          ]}
        >
          <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>
          <View style={[style.tableCell, style.col1]}>
            <Link src={`${item.url}`} style={style.link}>
              {item.url}
            </Link>
          </View>
          <Text style={[style.tableCell, style.col2]}>{item.category}</Text>
          <Text style={[style.tableCell, style.col3]}>{item.status}</Text>
          <Text style={[style.tableCell, style.col4]}>{item.startdate}</Text>
          <Text style={[style.tableCell, style.col5]}>{item.activetime}</Text>
          <Text style={[style.tableCell, style.col6]}>{item.totaltime}</Text>
        </View>
      ))}
       </Page>
        </Document>
      );
      
      export default URLCategories;
      

