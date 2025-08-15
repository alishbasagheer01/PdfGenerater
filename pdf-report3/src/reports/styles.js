import { StyleSheet } from "@react-pdf/renderer";

export const reportStyles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
  
  // Header styles
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottom: 1,
    paddingBottom: 10
  },
  leftcont: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  rightcont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightcont1: {
    fontSize: 12,
    marginRight: 5
  },
  rightcont2: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  
  // Title section
  head: {
    marginBottom: 20
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  date: {
    fontSize: 10
  },
  statsRow: {
    flexDirection: 'row',
    gap: 20
  },
  stat: {
    fontSize: 10,
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 3
  },
  
  // Table styles
  table: {
    width: "100%",
    borderWidth: 0,
    marginBottom: 20
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: '#000'
  },
  cell: {
    padding: 8,
    fontSize: 10,
    flex: 1,
    textAlign: 'center'
  },
  
  // Column widths
  col1: { width: "40%" },
  col2: { width: "20%" },
  col3: { width: "20%", paddingLeft: 10 },
  col4: { width: "20%" },
  
  tableCell: {
    padding: 4,
    fontSize: 10,
  },
  headerCell: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
  
  totalText: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: 'right',
    fontSize: 12
  },
  
  // Footer
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontSize: 8,
    borderTop: 1,
    paddingTop: 10
  }
});