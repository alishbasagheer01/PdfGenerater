import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import ChatStyle from "./ChatStyle"
import chatIcon from "../assets/chat.png";
const HostingReport = () => {
    const data = [
        { user: 'premier', activeTime: '03m 13s', hits: 81 }
    ];

    return (
        <Document>
            <Page size="A4" style={ChatStyle.page}>
                <View style={ChatStyle.navbar}>
                    <Text style={ChatStyle.leftcont}>Detailed URL Categories Visited</Text>
                    <View style={ChatStyle.rightcont}>
                        <Text style={ChatStyle.rightcont1}>Browse</Text>
                        <Text style={ChatStyle.rightcont2}>Reporter</Text>
                    </View>
                </View>

                {/* Header */}
                <View style={ChatStyle.head}>
                <View style={ChatStyle.headerRow}>
                    <View style={ChatStyle.headerLeft}>


                        <Image style={ChatStyle.icon} src={chatIcon} />

                        <Text style={ChatStyle.title}>Image and Video Hosting</Text>
                    </View>
                    <Text style={ChatStyle.date}>Date: 08/12/2025</Text>
                </View>

                {/* Stats */}
                <View style={ChatStyle.statsRow}>
                    <Text style={ChatStyle.stat}>Total Hits: 8</Text>
                    <Text style={ChatStyle.stat}>Total Time: 03m 13s</Text>
                </View>
                </View>

                {/* Table */}
                <View style={ChatStyle.table}>
                    <View style={ChatStyle.tableHeader}>
                        <Text style={[ChatStyle.cell, { flex: 2 }]}>User</Text>
                        <Text style={ChatStyle.cell}>Active Time</Text>
                        <Text style={ChatStyle.cell}>Hits</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={ChatStyle.tableRow} key={i}>
                            <Text style={[ChatStyle.cell, { flex: 2, color: 'blue', textDecoration: 'underline' }]}>{row.user}</Text>
                            <Text style={ChatStyle.cell}>{row.activeTime}</Text>
                            <Text style={ChatStyle.cell}>{row.hits}</Text>
                        </View>
                    ))}
                </View>
                <View style={ChatStyle.footer}>
                    <Text>
                        Copyright © Etor-Networks BrowseReporter
                    </Text>


                </View>
                </Page>
                        </Document>
                    );
                };
                
                export default HostingReport;