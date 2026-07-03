import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LeadTypePopup.css';

const LeadTypePopup = ({ onClose, scannedData }) => {
  const navigate = useNavigate();

  const handleSelect = (leadType) => {
    let path = '/';
    switch (leadType) {
      case 'New Bakery':
        path = '/new-bakery';
        break;
      case 'Existing Bakery':
        path = '/existing-bakery';
        break;
      case 'Reference Customer':
        path = '/reference-customer';
        break;
      default:
        break;
    }
    navigate(path, { state: { scannedData } });
  };

  return (
    <div className="lead-type-popup">
      <div className="lead-type-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Select Lead Type</h2>
        <div className="lead-type-buttons">
          <button onClick={() => handleSelect('New Bakery')}>New Bakery</button>
          <button onClick={() => handleSelect('Existing Bakery')}>Existing Bakery</button>
          <button onClick={() => handleSelect('Reference Customer')}>Reference Customer</button>
        </div>
      </div>
    </div>
  );
};

export default LeadTypePopup;
