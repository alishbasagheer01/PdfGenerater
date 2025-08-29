import { Document, Page, Text, View, Image, Link } from "@react-pdf/renderer";

import style from "./AllAccessedDevicesStyles";
const data = [
    { group: "Wireless Devices", devices: "WiFi", description: "Intel(R) Wireless-AC 9560 160MHz", date: "08/22/2025 - 11:31 AM" },

    { group: "Human Interface Devices", devices: "Keyboard/Mouse", description: "2.4G Mouse[1EA7_0066]", date: "08/22/2025 - 11:31 AM" },
    { group: "All Devices", devices: "Imaging Devices-Others", description: "Integrated Webcam", date: "08/22/2025 - 11:31 AM" },

];
const AllAccessedDevices = () => (
    <Document>
        <Page size="A4" style={style.page}>
            <View style={style.navbar}>
                <Text style={style.leftcont}>
                    All Devices Access(Computers)
                </Text>
                <View style={style.rightcont}>
                    <Text style={style.rightcont1}>Access</Text>
                    <Text style={style.rightcont2}>Petrol</Text>
                </View>


            </View>
            <View style={style.titlebar}>
                <View style={style.titlemain}>
                    {/* Left side: user image + premier */}
                    <View style={style.leftSection}>
                        <View style={style.leftSection1}>


                            <Text style={{ display: "flex", textAlign: "left", color: "black", marginTop: 5, fontWeight: "bold", fontSize: "16" }}>ZAIGUM</Text>
                        </View>

                        <Text style={{ paddingLeft: 20, }}> User:al rahman laptop  Group:Computers</Text>
                    </View>
                    <View style={style.bottom}>
                    </View>

                    {/* Right side: date */}
                    <Text style={style.date}>Date: 08/22/2025</Text>
                </View>

                {/* Bottom section */}

            </View>
            <View style={style.tableRow}>
                <Text style={[style.tableCell, style.col0, style.headerCell]}> </Text>
                <Text style={[style.tableCell, style.col1, style.headerCell]}>Device Group</Text>
                <Text style={[style.tableCell, style.col2, style.headerCell]}>Device</Text>
                <Text style={[style.tableCell, style.col3, style.headerCell]}>Description</Text>
                <Text style={[style.tableCell, style.col4, style.headerCell]}>Date</Text>
            </View>

            {data.map((item, i) => (
                <View key={i} style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}>
                    <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>   {/* non-breaking space */}
                    <Text style={[style.tableCell, style.col1]}>{item.group}</Text>
                    <Text style={[style.tableCell, style.col2]}>{item.devices}</Text>
                    <Text style={[style.tableCell, style.col3]}>{item.description}</Text>
                    <Text style={[style.tableCell, style.col4]}>{item.date}</Text>
                </View>
            ))}

            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 550,
                color: "#9CAFAA",
                fontSize: "12",
                borderTop: "1px solid black",
                paddingTop: 7
            }}>
                <Text>
                    Copyright © Etor-Networks BrowseReporter
                </Text>


            </View>


        </Page>
    </Document>
);

export default AllAccessedDevices;




