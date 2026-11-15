import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  User, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Droplet, 
  Heart, 
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HealthLibraryPageProps {
  onBackToHome: () => void;
  onOpenAppointmentModal: (specialtyId?: string, doctorId?: string) => void;
}

interface Article {
  id: string;
  category: 'urology' | 'nephrology' | 'andrology' | 'surgery' | 'wellness';
  title: string;
  summary: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  tags: string[];
  keyTakeaways: string[];
}

const ARTICLES: Article[] = [
  {
    id: 'kidney-stones-prevention',
    category: 'urology',
    title: 'Top 7 Science-Backed Ways to Prevent Recurrent Kidney Stones',
    summary: 'Kidney stones have a 50% recurrence rate within 5 years. Learn dietary adjustments, hydration targets, and how modern laser RIRS eliminates stones with zero skin incisions.',
    readTime: '4 min read',
    author: 'Dr. Rajesh Sharma',
    authorRole: 'Chief Urologist & Laser Stone Specialist',
    date: 'Nov 2026',
    tags: ['Kidney Stones', 'Urology', 'Laser RIRS', 'Prevention'],
    keyTakeaways: [
      'Drink 2.5 to 3 liters of fluids daily to maintain clear urine.',
      'Reduce sodium/salt intake to under 2,000 mg/day to lower urinary calcium excretion.',
      'Do not eliminate dietary calcium; pairing calcium with meals binds oxalates safely.',
      'Modern 100W Holmium Laser RIRS enables daycare stone dust clearance with minimal recovery.'
    ]
  },
  {
    id: 'dialysis-nutrition-guide',
    category: 'nephrology',
    title: 'Nutrition & Dietary Rules for Hemodialysis Patients: What to Eat & What to Avoid',
    summary: 'A comprehensive nephrologist-curated guide on managing potassium, phosphorus, sodium, and protein balance between dialysis sessions.',
    readTime: '6 min read',
    author: 'Dr. P. Venkat Reddy',
    authorRole: 'Senior Consultant Nephrologist',
    date: 'Oct 2026',
    tags: ['Dialysis', 'Nephrology', 'CKD Diet', 'Renal Care'],
    keyTakeaways: [
      'Consume high-biological value protein (eggs, paneer, fish, chicken) to counter dialysis amino acid loss.',
      'Limit potassium-rich fruits like bananas, oranges, and coconut water.',
      'Avoid high-phosphorus processed foods and sodas to protect bone and vascular health.',
      'Kanha Hospitals offers 24/7 ultra-pure RO hemodialysis for superior solute clearance.'
    ]
  },
  {
    id: 'prostate-holep-vs-turp',
    category: 'urology',
    title: 'Enlarged Prostate (BPH): Why Laser HoLEP is Replacing Traditional TURP Surgery',
    summary: 'Discover how Holmium Laser Enucleation of the Prostate (HoLEP) allows bloodless, complete adenoma removal with virtually zero recurrence, even for very large prostates.',
    readTime: '5 min read',
    author: 'Dr. Rajesh Sharma',
    authorRole: 'Chief Urologist',
    date: 'Nov 2026',
    tags: ['Prostate', 'BPH', 'Laser HoLEP', 'Men\'s Health'],
    keyTakeaways: [
      'HoLEP removes the entire obstructive adenoma, leading to lasting urinary relief.',
      'Significantly lower bleeding risk compared to conventional monopolar TURP.',
      'Safe for patients on blood-thinning medications.',
      'Faster catheter removal (often within 24-48 hours) and rapid return to normal routine.'
    ]
  },
  {
    id: 'male-fertility-varicocele',
    category: 'andrology',
    title: 'Understanding Varicocele & Male Infertility: When is Microsurgery Necessary?',
    summary: 'Varicoceles are the leading treatable cause of male infertility. Learn how sub-inguinal microsurgery preserves testicular function and improves sperm count and motility.',
    readTime: '5 min read',
    author: 'Dr. M. S. Rao',
    authorRole: 'Senior Andrologist & Microsurgeon',
    date: 'Oct 2026',
    tags: ['Male Infertility', 'Andrology', 'Varicocelectomy', 'Microsurgery'],
    keyTakeaways: [
      'Varicocele raises scrotal temperature, causing oxidative stress and sperm DNA fragmentation.',
      'High-resolution microsurgery under 15x magnification yields the highest success and lowest recurrence.',
      'Daycare procedure with return to office work within 3 to 4 days.'
    ]
  },
  {
    id: 'laparoscopic-daycare-surgery',
    category: 'surgery',
    title: 'Gallbladder, Hernia & Appendix: The Advantages of 3D Laparoscopic Keyhole Surgery',
    summary: 'How 3D high-definition laparoscopic towers allow pinhole incisions, negligible blood loss, minimal post-op pain, and same-day or 24-hour discharge.',
    readTime: '4 min read',
    author: 'Dr. Srinivasulu',
    authorRole: 'Senior Laparoscopic & GI Surgeon',
    date: 'Nov 2026',
    tags: ['Laparoscopy', 'Gallbladder', 'Hernia', 'Keyhole Surgery'],
    keyTakeaways: [
      'Three to four 5mm to 10mm incisions instead of large open incisions.',
      '3D depth perception enables millimeter-level surgical precision.',
      'Rapid ambulation within 6 hours of surgery with minimal wound infection risk.'
    ]
  },
  {
    id: 'silent-kidney-disease',
    category: 'wellness',
    title: 'The Silent Killer: 5 Early Signs of Kidney Damage You Shouldn\'t Ignore',
    summary: 'Kidney disease often progresses with zero symptoms until 60-70% of renal function is lost. Learn the key blood and urine indicators to check annually.',
    readTime: '3 min read',
    author: 'Dr. P. Venkat Reddy',
    authorRole: 'Senior Consultant Nephrologist',
    date: 'Nov 2026',
    tags: ['Kidney Health', 'Creatinine', 'Blood Pressure', 'Annual Checkup'],
    keyTakeaways: [
      'Morning swelling around the eyes and ankles can indicate early protein leakage (proteinuria).',
      'Uncontrolled hypertension is both a primary cause and consequence of renal compromise.',
      'Simple Serum Creatinine, eGFR, and Urine Albumin-to-Creatinine Ratio (UACR) tests save lives.'
    ]
  }
];

export const HealthLibraryPage: React.FC<HealthLibraryPageProps> = ({ 
  onBackToHome, 
  onOpenAppointmentModal 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = ARTICLES.filter(art => {
    const matchesCategory = activeTab === 'all' || art.category === activeTab;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = !query ||
      art.title.toLowerCase().includes(query) ||
      art.summary.toLowerCase().includes(query) ||
      art.tags.some(t => t.toLowerCase().includes(query)) ||
      art.author.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-slate-500">
          <button 
            onClick={onBackToHome}
            className="hover:text-[#00246a] transition-colors flex items-center gap-1 cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-semibold">Health Library & Clinical Education Hub</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#001744] via-[#00246a] to-[#00388c] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-200 text-xs sm:text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Evidence-Based Patient Knowledge Hub</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3 text-white">
              Medical Knowledge, Care Guides & Recovery Insights
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
              Written directly by Kanha Hospitals senior urologists, nephrologists, and surgical faculty to empower patients and families with verified medical clarity.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search topics (e.g. kidney stone diet, creatinine, HoLEP, varicocele)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 shadow-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Articles' },
            { id: 'urology', label: 'Urology & Stones' },
            { id: 'nephrology', label: 'Dialysis & Renal' },
            { id: 'andrology', label: 'Men\'s Health' },
            { id: 'surgery', label: 'Laparoscopic Surgery' },
            { id: 'wellness', label: 'Preventive Wellness' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#00246a] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Articles List & Reader Modal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((art) => (
            <div 
              key={art.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#00246a] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                    {art.tags[0]}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00246a] transition-colors leading-snug mb-2">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {art.summary}
                </p>

                {/* Key Takeaways Box */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 mb-4">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Doctor's Clinical Points:</div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {art.keyTakeaways.slice(0, 2).map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Author & Read Full Guide */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">{art.author}</div>
                  <div className="text-[11px] text-slate-400">{art.authorRole}</div>
                </div>

                <button
                  onClick={() => setSelectedArticle(art)}
                  className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#00246a] hover:text-white text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <span className="text-xs font-bold text-[#00246a] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {selectedArticle.tags.join(' • ')}
              </span>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-[#00246a] font-bold flex items-center justify-center">
                {selectedArticle.author[4] || 'D'}
              </div>
              <div>
                <div className="font-bold text-slate-800">{selectedArticle.author}</div>
                <div>{selectedArticle.authorRole} • Kanha Hospitals</div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {selectedArticle.summary}
            </p>

            <div className="bg-blue-50/60 rounded-2xl p-5 border border-blue-100 mb-6">
              <h4 className="font-bold text-[#00246a] text-sm mb-3">Key Medical Summary & Recommendations:</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                {selectedArticle.keyTakeaways.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-slate-800">Experiencing related symptoms?</div>
                <div className="text-[11px] text-slate-500">Book an OPD consult with {selectedArticle.author}</div>
              </div>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  onOpenAppointmentModal(selectedArticle.category);
                }}
                className="px-5 py-2.5 rounded-full bg-[#00246a] text-white text-xs font-bold hover:bg-[#001744] transition-all cursor-pointer"
              >
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

