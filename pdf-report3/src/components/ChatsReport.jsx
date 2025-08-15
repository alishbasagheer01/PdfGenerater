import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import style from "./style"
import chatIcon from "../assets/chat.png";
// unstage
// stage
// commit
const ChatsReport = () => {
    const data = [
        { user: 'premier', activeTime: '39m 06s', hits: 81 }
    ];

    return (
        <Document>
            <Page size="A4" style={style.page}>
                <View style={style.navbar}>
                    <Text style={style.leftcont}>Detailed URL Categories Visited</Text>
                    <View style={style.rightcont}>
                        <Text style={style.rightcont1}>Browse</Text>
                        <Text style={style.rightcont2}>Reporter</Text>
                    </View>
                </View>

                {/* Header */}
                <View style={style.head}>
                <View style={style.headerRow}>
                    <View style={style.headerLeft}>


                        <Image style={style.icon} src={chatIcon} />

                        <Text style={style.title}>Chats</Text>
                    </View>
                    <Text style={style.date}>Date: 08/12/2025</Text>
                </View>

                {/* Stats */}
                <View style={style.statsRow}>
                    <Text style={style.stat}>Total Hits: 81</Text>
                    <Text style={style.stat}>Total Time: 39m 06s</Text>
                </View>
                </View>

                {/* Table */}
                <View style={style.table}>
                    <View style={style.tableHeader}>
                        <Text style={[style.cell, { flex: 2 }]}>User</Text>
                        <Text style={style.cell}>Active Time</Text>
                        <Text style={style.cell}>Hits</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={style.tableRow} key={i}>
                            <Text style={[style.cell, { flex: 2, color: 'blue', textDecoration: 'underline' }]}>{row.user}</Text>
                            <Text style={style.cell}>{row.activeTime}</Text>
                            <Text style={style.cell}>{row.hits}</Text>
                        </View>
                    ))}
                </View>
                <View style={style.second}>
                <View style={style.head}>
                <View style={style.headerRow}>
                    <View style={style.headerLeft}>


                        <Image style={style.icon} src={chatIcon} />

                        <Text style={style.title}>Image and Video Hosting</Text>
                    </View>
                    <Text style={style.date}>Date: 08/12/2025</Text>
                </View>

                {/* Stats */}
                <View style={style.statsRow}>
                    <Text style={style.stat}>Total Hits: 8</Text>
                    <Text style={style.stat}>Total Time: 03m 13s</Text>
                </View>
                </View>

                {/* Table */}
                <View style={style.table}>
                    <View style={style.tableHeader}>
                        <Text style={[style.cell, { flex: 2 }]}>User</Text>
                        <Text style={style.cell}>Active Time</Text>
                        <Text style={style.cell}>Hits</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={style.tableRow} key={i}>
                            <Text style={[style.cell, { flex: 2, color: 'blue', textDecoration: 'underline' }]}>{row.user}</Text>
                            <Text style={style.cell}>{row.activeTime}</Text>
                            <Text style={style.cell}>{row.hits}</Text>
                        </View>
                    ))}
                </View>
                </View>
                <View style={style.third}>
                <View style={style.head}>
                <View style={style.headerRow}>
                    <View style={style.headerLeft}>


                        <Image style={style.icon} src={chatIcon} />

                        <Text style={style.title}>Online video and audio</Text>
                    </View>
                    <Text style={style.date}>Date: 08/12/2025</Text>
                </View>

                {/* Stats */}
                <View style={style.statsRow}>
                    <Text style={style.stat}>Total Hits: 6</Text>
                    <Text style={style.stat}>Total Time: 03m 08s</Text>
                </View>
                </View>

                {/* Table */}
                <View style={style.table}>
                    <View style={style.tableHeader}>
                        <Text style={[style.cell, { flex: 2 }]}>User</Text>
                        <Text style={style.cell}>Active Time</Text>
                        <Text style={style.cell}>Hits</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={style.tableRow} key={i}>
                            <Text style={[style.cell, { flex: 2, color: 'blue', textDecoration: 'underline' }]}>{row.user}</Text>
                            <Text style={style.cell}>{row.activeTime}</Text>
                            <Text style={style.cell}>{row.hits}</Text>
                        </View>
                    ))}
                </View>
                </View>
                <View style={style.forth}>
                <View style={style.head}>
                <View style={style.headerRow}>
                    <View style={style.headerLeft}>


                        <Image style={style.icon} src={chatIcon} />

                        <Text style={style.title}>Social Networks</Text>
                    </View>
                    <Text style={style.date}>Date: 08/12/2025</Text>
                </View>

                {/* Stats */}
                <View style={style.statsRow}>
                    <Text style={style.stat}>Total Hits: 8</Text>
                    <Text style={style.stat}>Total Time: 03m 16s</Text>
                </View>
                </View>

                {/* Table */}
                <View style={style.table}>
                    <View style={style.tableHeader}>
                        <Text style={[style.cell, { flex: 2 }]}>User</Text>
                        <Text style={style.cell}>Active Time</Text>
                        <Text style={style.cell}>Hits</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={style.tableRow} key={i}>
                            <Text style={[style.cell, { flex: 2, color: 'blue', textDecoration: 'underline' }]}>{row.user}</Text>
                            <Text style={style.cell}>{row.activeTime}</Text>
                            <Text style={style.cell}>{row.hits}</Text>
                        </View>
                    ))}
                </View>
                </View>
                <View style={style.footer}>
                    <Text>
                        Copyright © Etor-Networks BrowseReporter
                    </Text>


                </View>

            </Page>
        </Document>
    );
};

export default ChatsReport;

