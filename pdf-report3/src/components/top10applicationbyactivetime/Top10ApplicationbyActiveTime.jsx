import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { stylePage1, stylePage2 } from "./Top10ApplicationbyActiveTimeStyles";



const Top10ApplicationbyActiveTime = () => {
    const data = [
        { group: "Users", activeTime: '04h 24m 59s', perct: '' },
        { group: "Google Chrome (chrome.exe)", activeTime: '03h 09m 57s', perct: '72%' },
        { group: "Windows Explorer (explorer.exe)", activeTime: '26m 32s', perct: '10%' },
        { group: "SQL Server Management Studio 21 (ssms.exe) ", activeTime: '17m 49s', perct: '7%' },
        { group: "Visual Studio Code (electron.exe)", activeTime: '11m 49s', perct: '4%' },
        { group: "Microsoft Visual Studio 2022 (devenv.exe)", activeTime: '06m 36s', perct: '3%' },
        { group: "LockApp.exe (lockapp.exe)", activeTime: '03m 32s', perct: '1%' },
        { group: "whatsapp.exe (whatsapp.exe) ", activeTime: '02m 55s', perct: '1%' },
        { group: "ms-teams.exe (ms-teams.exe)", activeTime: '01m 55s', perct: '1%' },
        { group: "GitHub Desktop (github desktop)", activeTime: '01m 44s', perct: '1%' },
        { group: "photos.exe (photos.exe)", activeTime: '54s', perct: '<1%' },
    ];

    const appsdata = [
        { app: "Google Chrome (chrome.exe)", activeTime: '03h 09m 57s', perct: '72%' },
        { app: "Windows Explorer (explorer.exe)", activeTime: '26m 32s', perct: '10%' },
        { app: "SQL Server Management Studio 21 (ssms.exe) ", activeTime: '17m 49s', perct: '7%' },
        { app: "Visual Studio Code (electron.exe)", activeTime: '11m 49s', perct: '4%' },
        { app: "Microsoft Visual Studio 2022 (devenv.exe)", activeTime: '06m 36s', perct: '3%' },
        { app: "LockApp.exe (lockapp.exe)", activeTime: '03m 32s', perct: '1%' },
        { app: "whatsapp.exe (whatsapp.exe) ", activeTime: '02m 55s', perct: '1%' },
        { app: "ms-teams.exe (ms-teams.exe)", activeTime: '01m 55s', perct: '1%' },
        { app: "GitHub Desktop (github desktop)", activeTime: '01m 44s', perct: '1%' },
        { app: "photos.exe (photos.exe)", activeTime: '54s', perct: '<1%' },






    ];

    return (
        <Document>
            <Page size="A4" style={stylePage1.page}>
                <View style={stylePage1.navbar}>
                    <Text style={stylePage1.leftcont}>Top 10 Applications by Active Time</Text>
                    <View style={stylePage1.rightcont}>
                        <Text style={stylePage1.rightcont1}>Browse</Text>
                        <Text style={stylePage1.rightcont2}>Reporter</Text>
                    </View>
                </View>
                <View style={stylePage1.head}>
                    <View style={stylePage1.headerRow}>
                        <View style={stylePage1.headerLeft}>




                            <Text style={stylePage1.title}>Group Summary</Text>
                        </View>
                        <Text style={stylePage1.date}>Date: 08/27/2025</Text>
                    </View>

                </View>
                <View style={stylePage1.table}>
                    <View style={stylePage1.tableHeader}>
                        <Text style={[stylePage1.cell, { flex: 2,width:"80%" }]}>Group</Text>
                        <Text style={[stylePage1.cell,{width:"10%",textAlign:"right"}]}>Total Active Time</Text>
                        <Text style={[stylePage1.cell,{width:"10%",textAlign:"right"}]}>Percentage</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={stylePage1.tableRow} key={i}>
                            <Text style={[stylePage1.cell, { flex: 2,width:"80%" }]}>{row.group}</Text>
                            <Text style={[stylePage1.cell,{width:"10%",textAlign:"right"}]}>{row.activeTime}</Text>
                            <Text style={[stylePage1.cell,{textAlign:"right",width:"10%"}]}>{row.perct}</Text>
                        </View>
                    ))}
                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 400,
                    color: "#9CAFAA",
                    fontSize: "12"
                }}>
                    <Text>
                        Copyright © Etor-Networks BrowseReporter
                    </Text>


                </View>


            </Page>
            <Page size="A4" style={stylePage2.page}>
                <View style={stylePage2.navbar}>
                    <Text style={stylePage2.leftcont}>
                        Top 10 Application by Active Time
                    </Text>
                    <View style={stylePage2.rightcont}>
                        <Text style={stylePage2.rightcont1}>Browse</Text>
                        <Text style={stylePage2.rightcont2}>Reporter</Text>
                    </View>


                </View>
                <View style={stylePage2.titlebar}>
                    <View style={stylePage2.titlemain}>
                        {/* Left side: user image + premier */}
                        <View style={stylePage2.leftSection}>



                            <Text style={stylePage2.name}>al rahman laptop</Text>


                            <Text style={{ paddingLeft: 30, marginTopa: 7, fontSize: 14 }}> Group: Users</Text>
                        </View>


                        {/* Right side: date */}
                        <Text style={stylePage2.date}>Date: 08/27/2025</Text>
                    </View>
                </View>
                <View style={stylePage2.tableRow}>
                    <Text style={[stylePage2.tableCell, stylePage2.col0, stylePage2.headerCell]}>  </Text>
                    <Text style={[stylePage2.tableCell, stylePage2.col1, stylePage2.headerCell]}>Applications</Text>
                    <Text style={[stylePage2.tableCell, stylePage2.col2, stylePage2.headerCell]}>Active Time</Text>
                    <Text style={[stylePage2.tableCell, stylePage2.col3, stylePage2.headerCell]}>Percentage</Text>

                </View>
                {appsdata.map((item, a) => (
                    <View key={a} style={[stylePage2.tableRow, a % 2 === 0 ? stylePage2.evenRow : stylePage2.oddRow]}>
                        <Text style={[stylePage2.tableCell, stylePage2.col0]}>{a + 1}</Text>
                        <Text style={[stylePage2.tableCell, stylePage2.col1]}>{item.app}</Text>
                        <Text style={[stylePage2.tableCell, stylePage2.col2]}>{item.activeTime}</Text>
                        <Text style={[stylePage2.tableCell, stylePage2.col3]}>{item.perct}</Text>

                    </View>
                ))}
                <View style={{ display: "flex", flexDirection: "row", marginTop: 10, fontWeight: "bold" }}>
                    <Text style={{ marginLeft: 300 }}>Total:</Text>
                    <Text style={{ marginLeft: 80 }}>04h 23m 43s</Text>

                </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 150,
                    color: "#9CAFAA",
                    fontSize: "12"
                }}>
                    <Text>
                        Copyright © Etor-Networks BrowseReporter
                    </Text>


                </View>


            </Page>
        </Document>
    );
};

export default Top10ApplicationbyActiveTime;




