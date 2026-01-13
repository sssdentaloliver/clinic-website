'use client';

import { useState, useEffect } from 'react';

export default function InsuranceModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeen = localStorage.getItem('hasSeenInsuranceModal');
      if (!hasSeen) {
        setIsOpen(true);
      }
      // Expose global function
      window.openInsuranceModal = () => setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasSeenInsuranceModal', 'true');
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="max-w-[500px] w-full max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="pt-16 pb-8 px-6">
          <p className="text-center text-red-700 text-xl font-bold mb-6">
            For payments we accept all kinds of Debit and Credit cards and Cash as well. <br />
            We also accept all kinds of insurance along with CDCP.
          </p>
          <img src="/cdcp.png" alt="Insurance info" className="w-full h-auto max-w-[450px] mx-auto rounded-xl shadow-sm" />
          
        </div>
      </div>
    </div>
  );
}
