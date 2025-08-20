// PremierReport.jsx
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import style, { MAX_VALUE, MAX_HEIGHT } from "./WeeklyActiveBrowsingTimeStyles";
import chatIcon from "../../assets/chat.png";

const data = [
    { hour: "     "},
    { hour: "Wednesday" },
    { hour: "    " },
    { hour: "    " },
    { hour: "Thursday" },
    { hour: "    " },
    { hour: "    " },
    { hour: "    " },
    { hour: "Friday"},
    { hour: "    " },
    { hour: "    " },
    { hour: "    " },
    { hour: "Saturday"},
    { hour: "    " },
    { hour: "    " },
    { hour: "    " },
    { hour: "Sunday" },
    { hour: "    " },
    { hour: "    " },
    { hour: "    " },
    { hour: "Monday", value: 0.5 },
    { hour: "    "},
    { hour: "   "},
    { hour: "   "},
    { hour: "Tuesday", value: 6 },
];

const WeeklyActiveBrowsingTime = () => (
    <Document>
        <Page size="A4" style={style.page}>
            {/* Header */}
            <View style={style.navbar}>
                <Text style={style.leftcont}>
                    Weekly Active Browsing Time(Users)
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
                    <View>
                    <Text style={style.date}>Date: 08/12/2025 to 08/12/2025</Text>
                    <Text style={{textAlign:"left",fontSize: 12,paddingLeft:100,
    color: "#000",
    }}>7 Days</Text>
                    </View>
                </View>
            </View>

            {/* Chart */}
            <View style={style.chartWrapper}>
                <View style={{ flexDirection: "row" }}>
  {/* Rotated Y-axis label */}
  <Text style={style.yAxisLabel}>Active Time (Hour)</Text>
  </View>
                {/* Y Axis */}
                <View style={style.yAxis}>
                    {[6,5,4,3,2,1,0].map((val) => (
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

export default WeeklyActiveBrowsingTime;
