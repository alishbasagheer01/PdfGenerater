// src/reports/index.js - Reports Registry
import ChatsReport from './ChatsReport';
import SocialMediaReport from './SocialMediaReport';
// import URLCategoriesReport from './URLCategoriesReport';
// import WebsiteVisitsReport from './WebsiteVisitsReport';

export const REPORTS = {
  CHATS: {
    id: 'chats',
    name: 'Chats Report',
    component: ChatsReport,
    description: 'User chat activities and statistics'
  },
  SOCIAL_MEDIA: {
    id: 'social-media',
    name: 'Social Media Report', 
    component: SocialMediaReport,
    description: 'Social media usage and time tracking'
  },
//   URL_CATEGORIES: {
//     id: 'url-categories',
//     name: 'URL Categories Report',
//     component: URLCategoriesReport,
//     description: 'Detailed URL categories visited'
//   },
//   WEBSITE_VISITS: {
//     id: 'website-visits',
//     name: 'Website Visits Report',
//     component: WebsiteVisitsReport,
//     description: 'Website visits and duration tracking'
//   }
};

// Get all reports as array
export const getAllReports = () => Object.values(REPORTS);

// Get report by ID
export const getReportById = (id) => {
  return Object.values(REPORTS).find(report => report.id === id);
};