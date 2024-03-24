// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerFeedback from './pages/Feedback/CustomerComplaint';
import ComplaintPage from './pages/Feedback/ComplaintPage';
import ServiceComplaintFormPage from './pages/Feedback/Service/ServiceTypeComplaint';
import WebpageComplaintFormPage from './pages/Feedback/Webpage/WebpageTypeComplaint';
import ViewComplaintPage from './pages/Feedback/Service/ViewComplaint';
import ComplaintStatusPage from './pages/Feedback/Service/ComplaintStatus';
import SuccessPage from './pages/Feedback/Service/SuccessPage';
import WebSuccessPage from './pages/Feedback/Webpage/WebSuccessPage';
import WebComplaintStatusPage from './pages/Feedback/Webpage/WebComplaintStatus';
import Dashboard from './pages/Feedback/Dashboard/Dashboard';
import ViewService from './pages/Feedback/Dashboard/ViewServiceTypeComplaint';
import ViewWeb from './pages/Feedback/Dashboard/ViewWebTypeComplaint';
import WebViewComplaintPage from './pages/Feedback/Webpage/WebViewComplaint';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerFeedback />} />
        <Route path="/complaints" element={<ComplaintPage />} />
     
        <Route path="/service-complaint" element={<ServiceComplaintFormPage />} />
        <Route path="/webpage-complaint" element={<WebpageComplaintFormPage/>} />
        <Route path="/viewcomplaint/:_id" element={<ViewComplaintPage/>} />
        {/* <Route path={`/view-complaint/:id`} component={ViewComplaintPage} /> */}

        <Route path="/web-view-complaint/:_id" element={<WebViewComplaintPage/>} />
        <Route path="/service-complaintstatus" element={<ComplaintStatusPage/>} />
        <Route path="/web-complaintstatus" element={<WebComplaintStatusPage/>} />
        <Route path="/service-success" element={<SuccessPage/>} />
        <Route path="/web-success" element={<WebSuccessPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/viewservicetypecomplaint" element={<ViewService/>} />
        <Route path="/viewwebtypecomplaint" element={<ViewWeb/>} />
      </Routes>
    </Router>
  );
};

export default App;
