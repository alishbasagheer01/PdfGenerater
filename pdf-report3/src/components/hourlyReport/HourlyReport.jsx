// PremierReport.jsx
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import style, { MAX_VALUE, MAX_HEIGHT } from "./HourlyStyles";
import chatIcon from "../../assets/chat.png";

const data = [
    { hour: "12 AM"},
    { hour: "    " },
    { hour: "    " },
    { hour: "    " },
    { hour: "4 AM" },
    { hour: "    " },
    { hour: "    " },
    { hour: "    " },
    { hour: "8 AM"},
    { hour: "    ", value: 12 },
    { hour: "    ", value: 15 },
    { hour: "    " },
    { hour: "12 PM"},
    { hour: "    ", value: 5 },
    { hour: "    ", value: 45 },
    { hour: "    ", value: 50 },
    { hour: "4 PM", value: 42 },
    { hour: "    ", value: 50 },
    { hour: "    ", value: 35 },
    { hour: "    ", value: 42 },
    { hour: "8 PM", value: 45 },
    { hour: "    ", value: 5 },
    { hour: "   ", value: 12 },
    { hour: "   ", value: 12 },
];

const HourlyReport = () => (
    <Document>
        <Page size="A4" style={style.page}>
            {/* Header */}
            <View style={style.navbar}>
                <Text style={style.leftcont}>
                    Hourly Active Browsing Time(Users)
                </Text>
                <View style={style.rightcont}>
                    <Text style={style.rightcont1}>Browse</Text>
                    <Text style={style.rightcont2}>Reporter</Text>
                </View>


            </View>

            {/* User Info */}
            <View style={style.titlebar}>
                <View style={style.titlemain}>
                    <View style={style.leftSection}>
                        <View style={style.leftSection1}>
                            <Image
                                style={style.userIcon}
                                src={chatIcon}
                            />
                            <Text style={style.name}>premier</Text>
                        </View>
                        <Text style={{ paddingLeft: 30 }}> Group: Users</Text>
                    </View>
                    <Text style={style.date}>Date: 08/12/2025</Text>
                </View>
            </View>

            {/* Chart */}
            <View style={style.chartWrapper}>
                <View style={{ flexDirection: "row" }}>
  {/* Rotated Y-axis label */}
  <Text style={style.yAxisLabel}>Active Time (Min)</Text>
  </View>
                {/* Y Axis */}
                <View style={style.yAxis}>
                    {[50, 40, 30, 20, 10, 0].map((val) => (
                        <Text key={val} style={style.yLabel}>
                            {val}
                        </Text>
                    ))}
                </View>

                {/* Bars */}
                <View style={style.chartArea}>
                    {data.map((item, index) => {
                        const height = Math.max(1, (item.value / MAX_VALUE) * MAX_HEIGHT);
                        return (
                            
                            <View key={index} style={style.barWrapper}>
                                <View style={[style.bar, { height }]} />
                                <Text style={style.xLabel}>{item.hour}</Text>
                            </View>
                            
                            
                           
                        );
                    })}
                    

                </View>
            </View>
            <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:400,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
        </Page>
    </Document>
);

export default HourlyReport;
