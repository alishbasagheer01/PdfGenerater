import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";

import style from "./productivityStyles";


const data=[
{user:"premier",productive:"43s",neutral:"7h 56m 48s",unproductive:"9m 37s",activetime:"8h 7m 8s",productivity:"49%"},
];
const ProductivityReport = () => (
  <Document>
    <Page size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
        Employee Productivity(Users)
      </Text>
       <View style={style.rightcont}>
        <Text style={style.rightcont1}>Browse</Text>
        <Text style={style.rightcont2}>Reporter</Text>
       </View>
        
      
      </View>
      <View style={style.titlebar}>
        <View style={style.titlemain}>
          {/* Left side: user image + premier */}
          <View style={style.leftSection}>
            
            
          <Text style={{paddingLeft:30,paddingTop:30,fontSize:14,fontWeight:"bold"}}> Group: Users</Text>
          </View>
            <View style={style.bottom}>
        </View>
      
          {/* Right side: date */}
          <Text style={style.date}>Date: 08/12/2025</Text>
        </View>
      
        {/* Bottom section */}
      
      </View>
      
      <View style={style.tableRow}>
        
        <Text style={[style.tableCell, style.col1, style.headerCell]}>User</Text>
        <Text style={[style.tableCell, style.col2, style.headerCell]}>Productive</Text>
        <Text style={[style.tableCell, style.col3, style.headerCell]}>Neutral</Text>
        <Text style={[style.tableCell, style.col4, style.headerCell]}>Unproductive</Text> 
        <Text style={[style.tableCell, style.col5, style.headerCell]}>Total Active Time</Text> 
        <Text style={[style.tableCell, style.col6, style.headerCell]}>Productivity</Text> 
      </View>
      {data.map((item, i) => (
        <View
          key={i}
          style={[
            style.tableRow,
            i % 2 === 0 ? style.evenRow : style.oddRow
          ]}
        >
          
          <Text style={[style.tableCell, style.col1]}>{item.user}</Text>
          <Text style={[style.tableCell, style.col2]}>{item.productive}</Text>
          <Text style={[style.tableCell, style.col3]}>{item.neutral}</Text>
          <Text style={[style.tableCell, style.col4]}>{item.unproductive}</Text>
          <Text style={[style.tableCell, style.col5]}>{item.activetime}</Text>
          <Text style={[style.tableCell, style.col6]}>{item.productivity}</Text>
        </View>
      ))}
      <View style={{display:"flex",flexDirection:"row",fontWeight:"bold",marginTop:7}}>
        <Text style={{paddingHorizontal:60}}>Total:</Text>
        <Text style={{paddingHorizontal:20}}>43s</Text>
        <Text style={{paddingHorizontal:35}}>07h 56m 48s</Text>
        <Text style={{paddingHorizontal:40}} >09m 37s</Text>
        <Text style={{paddingHorizontal:40}}>08h 07m 08s</Text>
        <Text style={{marginLeft:40}}>49%</Text>
      </View>
      <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:580,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
       </Page>
        </Document>
      );
      
      export default ProductivityReport;
      

