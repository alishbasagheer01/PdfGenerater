import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import ChatStyle from "./groupStyles";
import chatIcon from "../../assets/chat.png";


const GroupReport = () => {
    const data = [
        { user: 'Users', activeTime: '6h 02m 46s', totaltime: '6h 02m 46s' }
    ];

    return (
        <Document>
            <Page size="A4" style={ChatStyle.page}>
                <View style={ChatStyle.navbar}>
                    <Text style={ChatStyle.leftcont}>Top 10 Categories by Browsing Time9User0</Text>
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

                            <Text style={ChatStyle.title}>Group Summary</Text>
                        </View>
                        <Text style={ChatStyle.date}>Date: 08/12/2025</Text>
                    </View>

                </View>


                {/* Table */}
                <View style={ChatStyle.table}>
                    <View style={ChatStyle.tableHeader}>
                        <Text style={[ChatStyle.cell, { flex: 2 }]}>Groups</Text>
                        <Text style={ChatStyle.cell}>Active Time</Text>
                        <Text style={ChatStyle.cell}>Total Time</Text>
                    </View>
                    {data.map((row, i) => (
                        <View style={ChatStyle.tableRow} key={i}>
                            <Text style={[ChatStyle.cell, { flex: 2, textDecoration: 'underline' }]}>{row.user}</Text>
                            <Text style={ChatStyle.cell}>{row.activeTime}</Text>
                            <Text style={ChatStyle.cell}>{row.totaltime}</Text>
                        </View>
                    ))}
                </View>
                 <View style={{display:"flex",flexDirection:"row", marginTop: 10,fontSize:10,fontWeight:"bold"}}>
                       <Text style={{marginLeft:230}}>Total:</Text>
                       <Text style={{marginLeft:80}}>06h 02m 46s</Text>
                        <Text style={{marginLeft:80}}>06h 02m 46s</Text>
                      </View>
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 600,
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

export default GroupReport;

