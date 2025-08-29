import { Document, Page, Text, View,Image, Link } from "@react-pdf/renderer";

import style from "./SpecifiApplicationUsageStyles.jsx";

const data = [
  { application:"applicationframehost.exe(applicationframehost.exe)",date:"08/27/2025",computer:"ZAIGUM",activetime:"05s" },
  
  
];
const SpecificApplicationUsage= () => (
  <Document>
    <Page  size="A4" style={style.page}>
      <View style={style.navbar}>
      <Text style={style.leftcont}>
      Specific Application Usage
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
      

      
      <Text style={style.name}>al rahman laptop</Text>
     
      
    <Text style={{paddingLeft:30,marginTopa:7,fontSize:14}}> Group: Users</Text>
    </View>
     

    {/* Right side: date */}
    <Text style={style.date}>Date: 08/27/2025</Text>
  </View>

  {/* Bottom section */}

</View>
<View style={style.tableRow}>
  <Text style={[style.tableCell, style.col0, style.headerCell]}>  </Text>
  <Text style={[style.tableCell, style.col1, style.headerCell]}>Applications</Text>
  <Text style={[style.tableCell, style.col2, style.headerCell]}>Date</Text>
  <Text style={[style.tableCell, style.col3, style.headerCell]}>Computer</Text>
  <Text style={[style.tableCell, style.col4, style.headerCell]}>Active Time</Text>
</View>



      {/* Rows */}
     {data.map((item, i) => (
  <View key={i} style={[style.tableRow, i % 2 === 0 ? style.evenRow : style.oddRow]}>
    <Text style={[style.tableCell, style.col0]}>{i + 1}</Text>
    <Text style={[style.tableCell, style.col1]}>{item.application}</Text>
    <Text style={[style.tableCell, style.col2]}>{item.date}</Text>
    <Text style={[style.tableCell, style.col3]}>{item.computer}</Text>
    <Text style={[style.tableCell, style.col4]}>{item.activetime}</Text>
  </View>
))}
<View style={{display:"flex",flexDirection:"row", marginTop: 10, fontWeight: "bold" }}>
             <Text style={{marginLeft:300}}>Total:</Text>
             <Text style={{marginLeft:200}}>05s</Text>
             
            </View>
             <View style={{display:"flex",
               justifyContent:"center",
               alignItems:"center",
               marginTop:540,
               color:"#9CAFAA",
               fontSize:"12"}}>
                           <Text>
                               Copyright © Etor-Networks BrowseReporter
                           </Text>
       
       
                       </View>
                      
      
    </Page>
  </Document>
);

export default SpecificApplicationUsage;



