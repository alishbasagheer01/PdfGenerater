import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import ReportsList from './components/ReportsList';
import ReportViewer from './components/ReportViewer';

// Report Route Component
const ReportRoute = () => {
  const { reportId } = useParams();
  
  // Mock data for different reports
  const mockData = {
    'chats': [
      { user: 'premier', activeTime: '39m 06s', hits: 81 },
      { user: 'admin', activeTime: '25m 30s', hits: 45 },
      { user: 'john_doe', activeTime: '15m 20s', hits: 28 }
    ],
    'social-media': [
      { url: "youtube.com/watch?v=Hq9xfR4NTZg", startDate: "08/12/2025 - 05:24 PM", activeTime: "08s", totalTime: "08s" },
      { url: "facebook.com", startDate: "08/12/2025 - 06:00 PM", activeTime: "2m 30s", totalTime: "2m 30s" }
    ]
  };

  return <ReportViewer reportId={reportId} data={mockData[reportId] || []} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReportsList />} />
        <Route path="/reports/:reportId" element={<ReportRoute />} />
      </Routes>
    </Router>
  );
}

export default App;