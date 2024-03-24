import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../../assets/image1.jpg';
import serviceIcon from '../../../assets/service-icon.png';
import webpageIcon from '../../../assets/webpage-icon.png'; // Import the webpage icon

const Dashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen rounded-lg shadow-md flex items-center justify-center" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-center" style={{ backgroundColor: '#a69b87', padding: '16px', borderRadius: '64px', overflow: 'hidden', width: '150%', margin: '0 -25%' }}>
          <h1 className="text-xl font-bold mb-4 text-black text-center" style={{ fontSize: '60px', marginTop: '0' }}>Admin Dashboard</h1>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <Link to="/viewservicetypecomplaint" className="no-underline">
            <button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-8 px-16 rounded-xl flex items-center justify-center" style={{ fontSize: '2rem', borderRadius: '40px', width: '100%' }}>
              <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <img src={serviceIcon} alt="Service Icon" className="mr-4 h-8 w-8" />
               View Service Type Complaint
              </div>
            </button>
          </Link>
          <Link to="/viewwebtypecomplaint" className="no-underline">
            <button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-8 px-16 rounded-xl flex items-center justify-center" style={{ fontSize: '2rem', borderRadius: '40px', width: '100%' }}>
              <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <img src={webpageIcon} alt="Webpage Icon" className="mr-4 h-8 w-8" />
               View Webpage Type Complaint
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
