import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../../data/hospitalData';

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportsModal: React.FC<ReportsModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [uhid, setUhid] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const sampleReports = [
    {
      id: 'rep-1',
      title: 'Renal Function Profile (KFT & Serum Creatinine)',
      date: '12 Nov 2026',
      status: 'Ready',
      lab: 'Kanha Automated Biochemistry Lab',
      badge: 'Verified by Pathologist',
    },
    {
      id: 'rep-2',
      title: 'High-Resolution CT Scan (Abdomen & Pelvis)',
      date: '10 Nov 2026',
      status: 'Ready',
      lab: 'Kanha Advanced Imaging Center',
      badge: 'Reported by Radiologist',
    },
    {
      id: 'rep-3',
      title: 'Complete Blood Picture (CBC with Platelets & ESR)',
      date: '10 Nov 2026',
      status: 'Ready',
      lab: 'Kanha Automated Hematology Lab',
      badge: 'Verified',
    },
  ];

  const handleDownload = (repTitle: string) => {
    setDownloadSuccess(repTitle);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-hospital-navy to-hospital-navyLight p-6 text-white rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>
          
          <div className="flex items-center space-x-2 text-hospital-sky text-xs font-bold uppercase tracking-wider mb-1">
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Patient Portal</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black">
            Download Diagnostic & Lab Reports
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Access secure digitized test results from Kanha Diagnostics & Imaging Center.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {downloadSuccess && (
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-xs text-emerald-800 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>{downloadSuccess}</strong> PDF successfully downloaded!</span>
            </div>
          )}

          {!hasSearched ? (
            <form onSubmit={handleLookup} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Registered Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Enter 10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  UHID or Bill / Invoice Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. KH-89421 or Bill Number"
                  value={uhid}
                  onChange={(e) => setUhid(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-hospital-sky"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-hospital-navy hover:bg-hospital-blue text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Verified Reports</span>
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-600">
                  Reports for {phone || 'Registered Number'}
                </span>
                <button
                  onClick={() => setHasSearched(false)}
                  className="text-xs text-hospital-blue hover:underline"
                >
                  Change Number
                </button>
              </div>

              <div className="space-y-3">
                {sampleReports.map((rep) => (
                  <div
                    key={rep.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-hospital-sky transition-all flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-hospital-navy">
                          {rep.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">{rep.lab} • {rep.date}</p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        {rep.status}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">{rep.badge}</span>
                      <button
                        onClick={() => handleDownload(rep.title)}
                        className="bg-hospital-navy hover:bg-hospital-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center space-x-1.5 cursor-pointer shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-sky-50 text-slate-600 p-3 rounded-xl text-[11px] space-y-1">
            <span className="font-bold text-hospital-navy block uppercase text-[10px]">
              Need Help with Reports?
            </span>
            <p>Reports are also directly messaged to your WhatsApp upon pathologist clearance. For inquiries, call the diagnostic desk at <strong>{HOSPITAL_INFO.phoneFormatted}</strong>.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

