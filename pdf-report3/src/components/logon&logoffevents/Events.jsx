// ReportDocument.jsx
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
// import userIcon from "../assets/user.png"; 
import style from "./eventStyles";
import chatIcon from "../../assets/chat.png";

// Sample data
const data = [
  {
    user: "al rehman laptop",
    date: "Aug 27",
    total: "04h 31m 00s",
    activeTime: "04h 28m 44s",
    activePct: "99.16%",
    idleTime: "02m 16s",
    idlePct: "0.84%",
    computer: "",
    login: "",
    logoff: "",
  },
  {
    user: "al rehman laptop",
    date: "Aug 27",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "ZAIGUM",
    login: "8/27/2025 12:25:44 PM",
    logoff: "8/27/2025 3:05:32 PM",
  },
  {
    user: "al rehman laptop",
    date: "Aug 27",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "ZAIGUM",
    login: "8/27/2025 3:24:06 PM",
    logoff: "8/27/2025 4:28:21 PM(Last Connected)",
  },
  
];


const Events = () => (
  <Document>
    <Page size="A4" style={style.page}>
        <View style={style.navbar}>
                    
                    <View style={style.rightcont}>
                        <Text style={style.rightcont1}>Browse</Text>
                        <Text style={style.rightcont2}>Reporter</Text>
                    </View>
                </View>
      {/* Header */}
      <View style={style.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image src={chatIcon} style={{ width: 20, height: 20, marginRight: 6 }} />
          <Text style={style.title}>
            Active & Idle time with Logon & Logoff events
          </Text>
        </View>
        <Text style={style.date}>Date: 08/27/2025</Text>
      </View>

      {/* Table */}
      <View style={style.table}>
        {/* Header Row */}
        <View style={style.tableRow}>
          <Text style={[style.tableCol, style.colUser, style.headerCell]}>User</Text>
          <Text style={[style.tableCol, style.colDate, style.headerCell]}>Date</Text>
          <Text style={[style.tableCol, style.colTotal, style.headerCell]}>Total Time</Text>
          <Text style={[style.tableCol, style.colActive, style.headerCell]}>Active Time</Text>
          <Text style={[style.tableCol, style.colActivePct, style.headerCell]}>Active %</Text>
          <Text style={[style.tableCol, style.colIdle, style.headerCell]}>Idle Time</Text>
          <Text style={[style.tableCol, style.colIdlePct, style.headerCell]}>Idle %</Text>
          <Text style={[style.tableCol, style.colComputer, style.headerCell]}>Computer</Text>
          <Text style={[style.tableCol, style.colLogin, style.headerCell]}>Login Time</Text>
          <Text style={[style.tableCol, style.colLogoff, style.headerCell]}>
            Logoff Time/ Last connected
          </Text>
        </View>

        {/* Data Rows */}
        {data.map((row, i) => (
          <View style={style.tableRow} key={i}>
            <Text style={[style.tableCol, style.colUser]}>{row.user}</Text>
            <Text style={[style.tableCol, style.colDate]}>{row.date}</Text>
            <Text style={[style.tableCol, style.colTotal]}>{row.total}</Text>
            <Text style={[style.tableCol, style.colActive]}>{row.activeTime}</Text>
            <Text style={[style.tableCol, style.colActivePct]}>{row.activePct}</Text>
            <Text style={[style.tableCol, style.colIdle]}>{row.idleTime}</Text>
            <Text style={[style.tableCol, style.colIdlePct]}>{row.idlePct}</Text>
            <Text style={[style.tableCol, style.colComputer]}>{row.computer}</Text>
            <Text style={[style.tableCol, style.colLogin]}>{row.login}</Text>
            <Text style={[style.tableCol, style.colLogoff]}>{row.logoff}</Text>
          </View>
        ))}
      </View>
       <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:530,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
    </Page>
  </Document>
);

export default Events;
