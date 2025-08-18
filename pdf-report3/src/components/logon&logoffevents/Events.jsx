// ReportDocument.jsx
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
// import userIcon from "../assets/user.png"; 
import style from "./eventStyles";
import chatIcon from "../../assets/chat.png";

// Sample data
const data = [
  {
    user: "premier",
    date: "Aug 12",
    total: "08h 26m 48s",
    activeTime: "08h 13m 47s",
    activePct: "97.43%",
    idleTime: "13m 01s",
    idlePct: "2.57%",
    computer: "",
    login: "",
    logoff: "",
  },
  {
    user: "premier",
    date: "Aug 12",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "DESKTOP-K3KVLFU",
    login: "8/12/2025 9:29:18 AM",
    logoff: "8/12/2025 9:40:04 AM",
  },
  {
    user: "premier",
    date: "Aug 12",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "DESKTOP-K3KVLFU",
    login: "8/12/2025 9:42:51 AM",
    logoff: "8/12/2025 10:45:12 AM",
  },
  {
    user: "premier",
    date: "Aug 12",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "DESKTOP-K3KVLFU",
    login: "8/12/2025 1:33:32 PM",
    logoff: "8/12/2025 6:18:18 PM",
  },
  {
    user: "premier",
    date: "Aug 12",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "DESKTOP-K3KVLFU",
    login: "8/12/2025 6:22:57 PM",
    logoff: "8/12/2025 6:36:46 PM",
  },
  {
    user: "premier",
    date: "Aug 12",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "DESKTOP-K3KVLFU",
    login: "8/12/2025 6:38:58 PM",
    logoff: "8/12/2025 8:08:36 PM ",
  },
  {
    user: "premier",
    date: "Aug 12",
    total: "",
    activeTime: "",
    activePct: "",
    idleTime: "",
    idlePct: "",
    computer: "DESKTOP-K3KVLFU",
    login: "8/12/2025 8:11:10 PM",
    logoff: "8/12/2025 9:10:14 PM (Last Connected)",
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
        <Text style={style.date}>Date: 08/12/2025</Text>
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
    </Page>
  </Document>
);

export default Events;
