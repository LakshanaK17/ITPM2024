import React from 'react';
import { Link } from 'react-router-dom';
import laptop from '../../assets/laptop.jpg';
import office from '../../assets/office.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-200 min-h-screen p-8 rounded-lg shadow-md flex items-center justify-center" style={{ backgroundImage: `url(${office})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-center" style={{ backgroundColor: '#a69b87', padding: '16px', borderRadius: '64px', overflow: 'hidden', width: '150%', margin: '0 -25%' }}>
          <h1 className="text-xl font-bold mb-4 text-black text-center" style={{ fontSize: '70px' }}>Customer Complaints and Feedback</h1>
        </div>

        <div className="flex mt-4">
          <div className="w-1/2 flex justify-end pr-3">
            <img
              src={laptop}
              alt="Person working on a laptop"
              className="w-full rounded-lg"
              style={{ width: 'calc(90% + 70px)', marginRight: '150px' }} // Increase width and adjust margin
            />
          </div>
          <div className="w-1/2 pl-1" style={{ marginLeft: '-150px', marginRight: '5px' }}> {/* Adjusted left margin here */}
            <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-md" style={{ height: '80%', width: '180%' }}>
              <p className="text-gray-700 mb-4" style={{ fontSize: '30px', minWidth: '100%', minHeight: '400px' }}>
                Your satisfaction fuels our passion for excellence. At ISURU Spectro, we're dedicated to providing you with exceptional service and quality furniture pieces that enhance your living spaces. We value your feedback, whether it's a suggestion, a concern, or a compliment. Your input helps us continually improve and tailor our offerings to meet your needs. Reach out to us today to share your thoughts and experiences. Together, let's create the perfect home environment for you!
              </p>
              <Link to="/complaints" className="no-underline">
              <button className="bg-blue-300 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full text-center" style={{ fontSize: '36px', display: 'inline-block' }}>
  Click here to make the complaint
  <ArrowForwardIcon className="ml-2"  />
</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
