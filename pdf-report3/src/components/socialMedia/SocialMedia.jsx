// ReportDocument.jsx
import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import style from "./socialmediaStyles";

const data = [
  { url: "youtube.com/watch?v=Hq9xfR4NTZg&feature=youtu.be", startDate: "08/12/2025 - 05:24 PM", activeTime: "08s", totalTime: "08s" },
  { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:24 PM", activeTime: "20s", totalTime: "20s" },
  { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:24 PM", activeTime: "02m 05s", totalTime: "02m 05s" },
  { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:27 PM", activeTime: "06m 19s", totalTime: "06m 19s" },
  { url: "youtube.com", startDate: "08/12/2025 - 08:33 PM", activeTime: "25s", totalTime: "25s" },
  { url: "youtube.com", startDate: "08/12/2025 - 08:50 PM", activeTime: "02s", totalTime: "02s" },
  { url: "youtube.com", startDate: "08/12/2025 - 08:50 PM", activeTime: "16s", totalTime: "16s" },
  { url: "youtube.com", startDate: "08/12/2025 - 08:52 PM", activeTime: "02s", totalTime: "02s" },
];

const SocialMedia = () => (
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
      <view style={style.titlebar}>
        <View style={style.titlemain}>
          <Text style={style.name}>premier</Text>
          <Text style={style.date}>Date: 08/12/2025</Text>

        </View>
        <View style={style.bottom}>
          <Text>Computer: DESKTOP-K3KVLFU Group: Users</Text>
        </View>

      </view>

      {/* Header */}
      <View style={style.tableRow}>
        
        <Text style={[style.tableCell, style.col1, style.headerCell]}># URL</Text>
        <Text style={[style.tableCell, style.col2, style.headerCell]}>Start Date</Text>
        <Text style={[style.tableCell, style.col3, style.headerCell]}>Active Time</Text>
        <Text style={[style.tableCell, style.col4, style.headerCell]}>Total Time</Text> 
      </View>

      {/* Rows */}
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
            <Link src={`https://${item.url}`} style={style.link}>
              {item.url}
            </Link>
          </View>
          <Text style={[style.tableCell, style.col2]}>{item.startDate}</Text>
          <Text style={[style.tableCell, style.col3]}>{item.activeTime}</Text>
          <Text style={[style.tableCell, style.col4]}>{item.totalTime}</Text>
        </View>
      ))}

      {/* Total */}
      <View style={{display:"flex",flexDirection:"row", marginTop: 10, fontWeight: "bold" }}>
             <Text style={{marginLeft:150}}>Total:</Text>
             <Text style={{marginLeft:250}}>09m 37s</Text>
              <Text style={{marginLeft:80}}>09m 37s</Text>
            </View>
             <View style={{display:"flex",
                     justifyContent:"center",
                     alignItems:"center",
                     marginTop:450,
                     color:"#9CAFAA",
                     fontSize:"12"}}>
                                 <Text>
                                     Copyright © Etor-Networks BrowseReporter
                                 </Text>
             
             
                             </View>
                            
    </Page>
  </Document>
);

export default SocialMedia;
