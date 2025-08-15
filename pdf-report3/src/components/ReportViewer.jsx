// src/components/ReportViewer.jsx - Fixed version
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { getReportById } from '../reports';

const ReportViewer = ({ reportId, data }) => {
  const report = getReportById(reportId);
  
  if (!report) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>Report not found</h2>
        <p>The requested report "{reportId}" does not exist.</p>
        <button 
          onClick={() => window.close()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer'
          }}
        >
          Close Tab
        </button>
      </div>
    );
  }

  const ReportComponent = report.component;

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PDFViewer 
        style={{ width: '100%', height: '100%' }}
        showToolbar={true}
      >
        <ReportComponent data={data} />
      </PDFViewer>
    </div>
  );
};

export default ReportViewer;