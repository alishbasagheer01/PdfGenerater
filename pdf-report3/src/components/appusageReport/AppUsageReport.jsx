import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import style from "./appStyles";
import chatIcon from "../../assets/chat.png";

const colWidths = ["25%", "55%", "20%"];

const AppUsageReport = ({ chartBase64 }) => (
  <Document>
    <Page size="A4" style={style.page}>
      {/* Header */}
      <View style={style.headerRow}>
        <View style={style.headerLeft}>
          <Image src={chatIcon} style={{ width: 20, height: 20, marginRight: 6 }} /> 
          <View>
            <Text style={style.headerTitle}>DESKTOP-K3KVLFU</Text>
            <Text>Group: Computers</Text>
          </View>
        </View>
        <Text>Date: 08/12/2025</Text>
      </View>

      {/* Chart Section */}
      <View style={style.chartSection}>
        <Text>Daily Application Usage by Hour (Computers)</Text>
      </View>

      {/* Table */}
      <View style={style.table}>
        {/* Table Header */}
        <View style={style.row}>
          {["Time", "Applications", "Active Time"].map((h, i) => (
            <View
              key={i}
              style={[style.col, style.headerCell, { width: colWidths[i] }]}
            >
              <Text>{h}</Text>
            </View>
          ))}
        </View>

        {/* Example Data Rows */}
        {[
          {
            time: "9:00 AM (28m 31s)",
            apps: [
              "Google Chrome (13m 30s)",
              "Visual Studio Code (12m 09s)",
              "Explorer (2m 35s)",
              "LockApp (17s)",
            ],
          },
          {
            time: "10:00 AM (44m 42s)",
            apps: [
              "Visual Studio Code (27m 20s)",
              "Google Chrome (16m 32s)",
              "Explorer (48s)",
              "Search (2s)",
            ],
          },
        ].map((row, i) => (
          <View key={i}>
            {row.apps.map((app, j) => (
              <View style={style.row} key={j}>
                {/* Time column → only show for first app row */}
                <View style={[style.col, { width: colWidths[0] }]}>
                  {j === 0 && <Text>{row.time}</Text>}
                </View>

                {/* Applications column */}
                <View style={[style.col, { width: colWidths[1] }]}>
                  <Text>{j + 1}. {app}</Text>
                </View>

                {/* Active time column → only show once per block */}
                <View style={[style.col, { width: colWidths[2] }]}>
                  {j === 0 && (
                    <Text>{row.apps.length} apps</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default AppUsageReport;
