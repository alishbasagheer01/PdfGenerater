// src/components/ReportsList.jsx - Fixed version with proper download
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { getAllReports, getReportById } from '../reports';

const ReportsList = () => {
  const reports = getAllReports();

  const openReportInNewTab = (reportId, reportName) => {
    // Create URL for the report viewer
    const reportUrl = `/reports/${reportId}`;
    
    // Open in new tab
    const newWindow = window.open(reportUrl, '_blank');
    
    // Optional: Set window title
    if (newWindow) {
      newWindow.document.title = reportName;
    }
  };

  // Mock data for reports
  const getMockData = (reportId) => {
    const mockData = {
      'chats': [
        { user: 'premier', activeTime: '39m 06s', hits: 81 },
        { user: 'admin', activeTime: '25m 30s', hits: 45 }
      ],
      'social-media': [
        { url: "youtube.com/watch?v=example", startDate: "08/12/2025 - 05:24 PM", activeTime: "08s", totalTime: "08s" }
      ]
    };
    return mockData[reportId] || [];
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Reports Dashboard</h1>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {reports.map((report) => {
          const ReportComponent = report.component;
          
          return (
            <div
              key={report.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: 8,
                padding: 20,
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
                {report.name}
              </h3>
              <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: 14 }}>
                {report.description}
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  onClick={() => openReportInNewTab(report.id, report.name)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 14
                  }}
                >
                  View Report
                </button>
                
                <PDFDownloadLink
                  document={<ReportComponent data={getMockData(report.id)} />}
                  fileName={`${report.id}_${new Date().toISOString().slice(0, 10)}.pdf`}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: 4,
                    fontSize: 14,
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                >
                  {({ loading }) => (loading ? 'Preparing...' : 'Download')}
                </PDFDownloadLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReportsList;