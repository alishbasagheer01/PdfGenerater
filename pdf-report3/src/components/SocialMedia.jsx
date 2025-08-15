// ReportDocument.jsx
import React from "react";
import { Document, Page, Text, View, Link } from "@react-pdf/renderer";
import style from "./style";

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
      <Text style={{ fontSize: 14, marginBottom: 10 }}>
        Social Media Activities (Users)
      </Text>

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
      <Text style={{ marginTop: 10, fontWeight: "bold" , display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
        Total: 09m 37s
      </Text>
    </Page>
  </Document>
);

export default SocialMedia;
