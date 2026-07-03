import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import '../styles/QRScannerModal.css';

const QRScannerModal = ({ onClose, onScanSuccess }) => {
  const [error, setError] = useState(null);
  const [scanned, setScanned] = useState(false);

  const parseCustomerData = (text) => {
    let name = '';
    let mobile = '';

    if (text.includes('BEGIN:VCARD')) {
      const nameMatch = text.match(/^FN:(.*)$/im) || text.match(/^N:(.*)$/im);
      if (nameMatch) {
        name = nameMatch[1].replace(/;/g, ' ').trim();
      }
      const telMatch = text.match(/^TEL[^:]*:(.*)$/im);
      if (telMatch) {
        mobile = telMatch[1].trim();
      }
    } else {
      const lines = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
      const mobileLine = lines.find(line => /(?:\+?91[-\s]?)?[6-9]\d{9}/.test(line));
      const nameLine = lines.find(line => line !== mobileLine);

      name = nameLine || '';
      mobile = mobileLine || '';
    }

    const mobileMatch = mobile.match(/(?:\+?91[-\s]?)?[6-9]\d{9}/);

    return {
      name,
      mobile: mobileMatch ? mobileMatch[0].replace(/\D/g, '').slice(-10) : mobile
    };
  };

  const handleScan = (results) => {
    const text = results?.[0]?.rawValue;

    if (text && !scanned) {
      try {
        setScanned(true);
        onScanSuccess(parseCustomerData(text));
      } catch (e) {
        setError('Failed to parse QR code data.');
        console.error(e);
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error while accessing camera. Please grant permission and try again.');
  };

  return (
    <div className="qr-scanner-modal">
      <div className="qr-scanner-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Scan QR Code</h2>
        <div className="scanner-container">
          <Scanner
            onScan={handleScan}
            onError={handleError}
            constraints={{ facingMode: 'environment' }}
            styles={{ container: { width: '100%' } }}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <p>Point the camera at the QR code to automatically scan it.</p>
      </div>
    </div>
  );
};

export default QRScannerModal;
