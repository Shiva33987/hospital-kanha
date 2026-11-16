export interface ClinicalCondition {
  id: string;
  name: string;
  letter: string;
  departmentId: string;
  specialtyName: string;
  specialistTitle: string;
  overview: string;
  symptoms: string[];
  treatment: string[];
  urgency?: 'routine' | 'priority' | 'emergency';
}

export const CLINICAL_CONDITIONS: ClinicalCondition[] = [
  // --- A ---
  {
    id: 'acute-kidney-injury',
    name: 'Acute Kidney Injury (AKI)',
    letter: 'A',
    departmentId: 'nephrology',
    specialtyName: 'Nephrology & Renal Care',
    specialistTitle: 'Senior Consultant Nephrologist',
    overview: 'A sudden decline in renal filtration capacity leading to electrolyte imbalance and nitrogenous waste retention, requiring rapid hemodynamic and nephrological stabilization.',
    symptoms: ['Drastic decrease in urine output', 'Fluid retention & lower limb swelling', 'Shortness of breath & fatigue', 'Nausea, confusion & chest pressure'],
    treatment: ['Continuous Renal Replacement Therapy (CRRT)', 'Strict fluid balance & hemodynamic monitoring', 'Correction of hyperkalemia & acid-base status', 'Treating underlying sepsis or nephrotoxin exposure'],
    urgency: 'emergency'
  },
  {
    id: 'appendicitis',
    name: 'Appendicitis (Acute)',
    letter: 'A',
    departmentId: 'surgery',
    specialtyName: 'General & Laparoscopic Surgery',
    specialistTitle: 'Senior Laparoscopic & GI Surgeon',
    overview: 'Acute inflammation of the vermiform appendix, requiring rapid diagnosis to avoid rupture, peritonitis, or abscess formation.',
    symptoms: ['Sudden sharp pain around navel shifting to right lower abdomen', 'Low-grade fever with chills', 'Nausea and vomiting', 'Abdominal bloating and rebound tenderness'],
    treatment: ['Emergency 3D Laparoscopic Appendectomy', 'Intravenous broad-spectrum antibiotic prophylaxis', 'Pre-op ultrasound and contrast CT imaging', 'Same-day or next-day hospital discharge'],
    urgency: 'emergency'
  },
  {
    id: 'angina-pectoris',
    name: 'Angina Pectoris',
    letter: 'A',
    departmentId: 'cardiology',
    specialtyName: 'Cardiology & Cardiac Care',
    specialistTitle: 'Consultant Interventional Cardiologist',
    overview: 'Transient myocardial ischemia caused by restricted coronary blood flow, frequently triggered by physical exertion or emotional stress.',
    symptoms: ['Squeezing retrosternal chest tightness', 'Pain radiating to jaw, left shoulder, or back', 'Exertional dyspnea and clammy diaphoresis', 'Rapid relief with rest or sublingual nitrates'],
    treatment: ['Emergency 2D Echocardiography & ECG monitoring', 'Coronary Angiography assessment', 'Dual antiplatelet and statin optimization', 'Guidance on lifestyle & preventive revascularization'],
    urgency: 'priority'
  },
  {
    id: 'asthma-bronchial',
    name: 'Asthma (Bronchial)',
    letter: 'A',
    departmentId: 'pulmonology',
    specialtyName: 'Pulmonology & Respiratory Care',
    specialistTitle: 'Senior Consultant Pulmonologist',
    overview: 'Chronic inflammatory disorder of the airways characterized by hyperresponsiveness, reversible airflow obstruction, and bronchospasm.',
    symptoms: ['Recurrent wheezing and whistling breath sounds', 'Nocturnal cough and breathlessness', 'Chest tightness during weather changes or allergen exposure', 'Exercise-induced dyspnea'],
    treatment: ['Inhaled corticosteroid & LABA controller therapy', 'Spirometry / Pulmonary Function Test (PFT)', 'Allergen avoidance and bronchodilator nebulization', 'Acute flare management with oral corticosteroids'],
    urgency: 'routine'
  },
  {
    id: 'arrhythmia',
    name: 'Arrhythmia (Cardiac Rhythm Disorders)',
    letter: 'A',
    departmentId: 'cardiology',
    specialtyName: 'Cardiology & Cardiac Care',
    specialistTitle: 'Consultant Cardiologist & Electrophysiologist',
    overview: 'Irregularities in the electrical conduction system of the heart resulting in bradycardia, tachycardia, or fibrillation.',
    symptoms: ['Sudden fluttering heart palpitations', 'Lightheadedness, dizziness, or near-syncope', 'Unexplained fatigue and exercise intolerance', 'Chest discomfort or brief breathlessness'],
    treatment: ['24-hour Holter ECG telemetry monitoring', 'Anti-arrhythmic pharmacological therapy', 'Pacemaker or AICD evaluation', 'Radiofrequency catheter ablation referral'],
    urgency: 'priority'
  },

  // --- B ---
  {
    id: 'benign-prostatic-hyperplasia',
    name: 'Benign Prostatic Hyperplasia (BPH)',
    letter: 'B',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Chief Urologist & Laser Prostate Surgeon',
    overview: 'Age-related non-malignant enlargement of the prostate gland that compresses the urethral canal, causing progressive lower urinary tract symptoms (LUTS).',
    symptoms: ['Hesitancy and weak urinary stream', 'Nocturia (waking up 3+ times to urinate)', 'Sense of incomplete bladder emptying', 'Urgent need to void or sudden urinary retention'],
    treatment: ['100W Holmium Laser Enucleation of Prostate (HoLEP)', 'Bipolar TURP (Transurethral Resection)', 'Uroflowmetry and prostate volume ultrasound', 'Alpha-blocker medical therapy'],
    urgency: 'priority'
  },
  {
    id: 'bladder-stones',
    name: 'Bladder Calculi (Bladder Stones)',
    letter: 'B',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Senior Urological Surgeon',
    overview: 'Mineral crystallization within the urinary bladder typically caused by urinary stasis, neurogenic bladder, or urethral outflow obstruction.',
    symptoms: ['Intermittent interruption of urinary stream', 'Lower abdominal discomfort & dysuria', 'Gross or microscopic hematuria', 'Recurrent urinary tract infections'],
    treatment: ['Laser Cystolithotripsy (Holmium laser pulverization)', 'Endoscopic stone extraction with zero skin incisions', 'Correction of underlying prostate or bladder pathology', 'Daycare procedure with quick recovery'],
    urgency: 'routine'
  },
  {
    id: 'brain-stroke',
    name: 'Brain Stroke (Ischemic & Hemorrhagic)',
    letter: 'B',
    departmentId: 'neurology',
    specialtyName: 'Neurology & Neuro Care',
    specialistTitle: 'Consultant Neurologist & Neurophysician',
    overview: 'Acute interruption of cerebral vascular perfusion or rupture of intracranial vessels causing neurological deficit.',
    symptoms: ['Facial droop on one side', 'Sudden arm or leg weakness/numbness', 'Slurred speech or difficulty understanding words', 'Sudden balance loss or severe thunderclap headache'],
    treatment: ['Golden-Hour emergency CT scan imaging', 'Intravenous thrombolysis (tPA) for eligible ischemic strokes', 'Intensive Neuro-ICU monitoring and neuroprotection', 'Early physical and occupational neuro-rehabilitation'],
    urgency: 'emergency'
  },
  {
    id: 'bronchitis-chronic',
    name: 'Bronchitis (Chronic / Acute)',
    letter: 'B',
    departmentId: 'pulmonology',
    specialtyName: 'Pulmonology & Respiratory Care',
    specialistTitle: 'Senior Consultant Pulmonologist',
    overview: 'Inflammation of the bronchial mucous membranes leading to persistent productive cough and progressive airway narrowing.',
    symptoms: ['Persistent daily cough producing discolored sputum', 'Exertional dyspnea and audible chest rattling', 'Low-grade fever and chest soreness', 'Frequent respiratory infections in winter'],
    treatment: ['Nebulized bronchodilators & mucolytic agents', 'Chest X-ray and sputum microbiology culture', 'Targeted antimicrobial therapy when indicated', 'Smoking cessation and respiratory physiotherapy'],
    urgency: 'routine'
  },

  // --- C ---
  {
    id: 'cancer-general',
    name: 'Cancer (General Oncology Evaluation)',
    letter: 'C',
    departmentId: 'oncology',
    specialtyName: 'Surgical & Medical Oncology',
    specialistTitle: 'Senior Surgical & Medical Oncologist',
    overview: 'Comprehensive oncological screening, biopsy staging, multidisciplinary tumor board review, and precision surgical management.',
    symptoms: ['Unexplained weight loss > 10% in 3 months', 'Persistent painless lump in breast, neck, or groin', 'Abnormal bleeding from body orifices', 'Chronic non-healing ulcers or changing moles'],
    treatment: ['High-resolution CT & Ultrasound staging', 'Image-guided FNAC & core needle biopsy', 'Radical organ-preserving oncological resections', 'Daycare chemotherapy and immunotherapy protocols'],
    urgency: 'priority'
  },
  {
    id: 'cardiac-arrest',
    name: 'Cardiac Arrest',
    letter: 'C',
    departmentId: 'critical_care',
    specialtyName: 'Emergency & Critical Care ICU',
    specialistTitle: 'Chief Critical Care & Resuscitation Faculty',
    overview: 'Abrupt cessation of pump function requiring instant Advanced Cardiac Life Support (ACLS), defibrillation, and post-resuscitation ICU care.',
    symptoms: ['Sudden loss of consciousness and unresponsiveness', 'Absence of carotid pulse', 'No breathing or agonal gasping', 'Dilated pupils and pale cyanotic skin'],
    treatment: ['Instant ACLS high-quality CPR & defibrillation', 'Endotracheal intubation & mechanical ventilation', 'Emergency bedside echocardiography & blood gas analysis', 'Post-cardiac arrest targeted temperature management in ICU'],
    urgency: 'emergency'
  },
  {
    id: 'cardiac-tamponade',
    name: 'Cardiac Tamponade',
    letter: 'C',
    departmentId: 'cardiology',
    specialtyName: 'Cardiology & Critical Care',
    specialistTitle: 'Senior Interventional Cardiologist',
    overview: 'Pathological accumulation of fluid within the pericardial sac creating high intrapericardial pressure that compresses the cardiac chambers and impedes venous return.',
    symptoms: ['Beck triad: hypotension, elevated JVP, and muffled heart sounds', 'Pulsus paradoxus (marked drop in systolic BP during inspiration)', 'Acute severe breathlessness and tachypnea', 'Restlessness, cold clammy extremities, and syncope'],
    treatment: ['Urgent bedside 2D Echocardiography confirmation', 'Emergency ultrasound-guided Pericardiocentesis', 'Hemodynamic fluid resuscitation and arterial line monitoring', 'Surgical pericardial window creation for recurrent effusions'],
    urgency: 'emergency'
  },
  {
    id: 'cardiomyopathy',
    name: 'Cardiomyopathy (Dilated / Hypertrophic)',
    letter: 'C',
    departmentId: 'cardiology',
    specialtyName: 'Cardiology & Cardiac Care',
    specialistTitle: 'Senior Consultant Cardiologist',
    overview: 'Diseases of the myocardium characterized by mechanical or electrical dysfunction, leading to ventricular dilation or abnormal hypertrophy.',
    symptoms: ['Progressive exertional breathlessness and orthopnea', 'Peripheral edema in ankles and lower legs', 'Syncope during moderate physical exertion', 'Fatigue, paroxysmal nocturnal dyspnea, and palpitations'],
    treatment: ['Complete Echocardiographic strain and Doppler imaging', 'Guideline-directed medical therapy (GDMT: ACEi/ARNI, Beta-blockers, SGLT2i)', 'Cardiac MRI correlation for tissue characterization', 'Implantable Cardioverter-Defibrillator (ICD) evaluation'],
    urgency: 'priority'
  },
  {
    id: 'carpal-tunnel-syndrome',
    name: 'Carpal Tunnel Syndrome',
    letter: 'C',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Joint Care',
    specialistTitle: 'Senior Orthopedic & Hand Surgeon',
    overview: 'Compression neuropathy of the median nerve as it travels through the fibro-osseous carpal tunnel at the wrist joint.',
    symptoms: ['Tingling, burning, and numbness in thumb, index, and middle fingers', 'Nighttime hand pain waking the patient', 'Weakness of pinch grip and dropping objects', 'Thenar muscle atrophy in chronic cases'],
    treatment: ['Nerve Conduction Velocity (NCV) diagnostic study', 'Wrist immobilization splinting and anti-inflammatory therapy', 'Ultrasound-guided local corticosteroid injection', 'Minimally invasive Daycare Carpal Tunnel Release surgery'],
    urgency: 'routine'
  },
  {
    id: 'cataracts',
    name: 'Cataracts (Lens Opacification)',
    letter: 'C',
    departmentId: 'general_medicine',
    specialtyName: 'General OPD & Senior Faculty',
    specialistTitle: 'Consultant Physician & Surgical Liaison',
    overview: 'Progressive clouding of the natural crystalline lens of the eye that degrades visual acuity and impairs daily functioning.',
    symptoms: ['Blurry, cloudy, or dim vision', 'Glare and halos around oncoming headlights at night', 'Frequent changes in eyeglass prescription', 'Fading or yellowing of perceived colors'],
    treatment: ['Slit-lamp biomicroscopy and optical biometry', 'Micro-incision Phacoemulsification Daycare Surgery', 'Foldable Monofocal, Toric, or Multifocal IOL implantation', 'Rapid visual recovery with zero eye patches'],
    urgency: 'routine'
  },
  {
    id: 'celiac-disease',
    name: 'Celiac Disease',
    letter: 'C',
    departmentId: 'general_medicine',
    specialtyName: 'General Medicine & Gastroenterology',
    specialistTitle: 'Consultant Gastroenterologist & Physician',
    overview: 'Immune-mediated enteropathy triggered by dietary gluten ingestion in genetically susceptible individuals, causing villous atrophy.',
    symptoms: ['Chronic diarrhea, bloating, and excessive gas', 'Unexplained iron-deficiency anemia refractory to oral iron', 'Unintentional weight loss and nutritional deficiencies', 'Chronic fatigue and dermatological manifestations (dermatitis herpetiformis)'],
    treatment: ['Serological screening (Serum Anti-tTG IgA antibody)', 'Upper GI Endoscopy with duodenal biopsy confirmation', 'Lifelong strict 100% gluten-free diet counseling', 'Nutritional replenishment of iron, folate, and fat-soluble vitamins'],
    urgency: 'routine'
  },
  {
    id: 'cerebral-palsy',
    name: 'Cerebral Palsy (Pediatric / Adolescent)',
    letter: 'C',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Neuro-Rehab',
    specialistTitle: 'Senior Orthopedic Surgeon & Neuro-Rehabilitationist',
    overview: 'Non-progressive motor disorders of movement and posture resulting from developmental insults to the immature brain.',
    symptoms: ['Spasticity, muscle stiffness, and scissor gait', 'Delayed motor milestones (sitting, standing, walking)', 'Difficulty with fine motor tasks and joint contractures', 'Balance instability and involuntary movements'],
    treatment: ['Multidisciplinary clinical gait analysis', 'Targeted botulinum toxin injections for focal spasticity', 'Comprehensive Matrix Rhythm and Neuro-developmental Physiotherapy', 'Orthopedic tendon lengthening and contracture release surgeries'],
    urgency: 'routine'
  },
  {
    id: 'cervical-cancer',
    name: 'Cervical Cancer Screening & Staging',
    letter: 'C',
    departmentId: 'gynecology',
    specialtyName: 'Obstetrics & Gynaecology',
    specialistTitle: 'Senior Consultant Gynaecologist & Laparoscopic Surgeon',
    overview: 'Malignancy arising from the cervical epithelium, strongly linked to persistent oncogenic Human Papillomavirus (HPV) infection.',
    symptoms: ['Irregular intermenstrual or post-coital vaginal bleeding', 'Foul-smelling persistent watery vaginal discharge', 'Pelvic pain or discomfort during intercourse', 'Lower back pain in locally advanced stages'],
    treatment: ['Liquid-Based Cytology (LBC Pap Smear) & High-Risk HPV DNA testing', 'Colposcopy-directed cervical biopsy', 'Laparoscopic Radical Hysterectomy & Pelvic Lymphadenectomy', 'Multidisciplinary chemoradiation planning for advanced cases'],
    urgency: 'priority'
  },
  {
    id: 'cervical-spondylosis',
    name: 'Cervical Spondylosis (Neck Degeneration)',
    letter: 'C',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Spine Care',
    specialistTitle: 'Senior Spine & Orthopedic Consultant',
    overview: 'Age-related degenerative osteoarthritis of the cervical vertebrae and intervertebral discs that may cause radiculopathy or myelopathy.',
    symptoms: ['Chronic neck stiffness and occipital headache', 'Pain radiating down shoulder, arm, or fingers', 'Numbness or weakness in hands (radiculopathy)', 'Gait unsteadiness or clumsy hands (cervical myelopathy)'],
    treatment: ['Cervical spine Digital X-ray and high-resolution MRI', 'Ergonomic optimization, cervical collar, and physiotherapy', 'Targeted transforaminal epidural steroid injection', 'Microscopic anterior cervical discectomy and fusion (ACDF) when indicated'],
    urgency: 'routine'
  },
  {
    id: 'cholecystitis',
    name: 'Cholecystitis (Gallbladder Inflammation & Stones)',
    letter: 'C',
    departmentId: 'surgery',
    specialtyName: 'General & Laparoscopic Surgery',
    specialistTitle: 'Senior Laparoscopic GI Surgeon',
    overview: 'Acute or chronic inflammation of the gallbladder, almost always secondary to cystic duct obstruction by gallstones (cholelithiasis).',
    symptoms: ['Severe steady pain in right upper abdomen radiating to right shoulder', 'Murphy sign (arrest of inspiration upon right upper quadrant palpation)', 'Nausea, vomiting, and intolerance to fatty foods', 'Fever, chills, and mild jaundice in complicated cases'],
    treatment: ['Emergency abdominal ultrasound verifying gallstones & wall thickening', 'Intravenous fluids and antibiotic therapy', 'Gold-standard 3D Laparoscopic Cholecystectomy (Keyhole removal)', 'Daycare or 24-hour discharge with rapid recovery'],
    urgency: 'priority'
  },
  {
    id: 'chronic-fatigue-syndrome',
    name: 'Chronic Fatigue Syndrome (ME/CFS)',
    letter: 'C',
    departmentId: 'general_medicine',
    specialtyName: 'General Medicine & Faculty OPD',
    specialistTitle: 'Senior Consultant Physician',
    overview: 'Complex disabling illness characterized by extreme post-exertional malaise, unrefreshing sleep, cognitive difficulties, and orthostatic intolerance.',
    symptoms: ['Debilitating fatigue lasting > 6 months not relieved by bed rest', 'Post-exertional malaise (crash after physical or mental effort)', 'Cognitive dysfunction ("brain fog", memory lapses)', 'Unrefreshing sleep, diffuse muscle aches, and tender lymph nodes'],
    treatment: ['Systematic exclusion of thyroid, autoimmune, and metabolic disorders', 'Pacing and energy management strategy', 'Treatment of sleep architecture disorders and orthostatic intolerance', 'Cognitive behavioral support and gradual graded activity'],
    urgency: 'routine'
  },
  {
    id: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease (CKD Stages 1-5)',
    letter: 'C',
    departmentId: 'nephrology',
    specialtyName: 'Nephrology & Renal Care',
    specialistTitle: 'Head of Nephrology & Dialysis',
    overview: 'Gradual, irreversible loss of kidney function over months to years, leading to fluid overload, uremia, electrolyte imbalance, and metabolic acidosis.',
    symptoms: ['Persistent swelling of ankles, legs, and peri-orbital area', 'Unexplained fatigue, weakness, and severe anemia', 'Loss of appetite, metallic taste in mouth, and morning nausea', 'Resistant hypertension and decreased/foamy urine'],
    treatment: ['Accurate eGFR, serum creatinine, and urine albumin tracking', 'Renoprotective medical therapy (SGLT2 inhibitors, ACEi/ARBs)', 'Dialysis initiation (24/7 Ultra-Pure RO Hemodialysis)', 'Arteriovenous (AV) Fistula surgical creation & Renal Transplant planning'],
    urgency: 'priority'
  },
  {
    id: 'chronic-obstructive-pulmonary',
    name: 'Chronic Obstructive Pulmonary Disease (COPD)',
    letter: 'C',
    departmentId: 'pulmonology',
    specialtyName: 'Pulmonology & Respiratory Care',
    specialistTitle: 'Senior Consultant Pulmonologist',
    overview: 'Common, preventable, and treatable chronic lung disease characterized by persistent respiratory symptoms and airflow limitation.',
    symptoms: ['Chronic progressive shortness of breath, worse with exertion', 'Persistent cough producing copious morning phlegm', 'Chest tightness and wheezing', 'Frequent acute exacerbations requiring emergency nebulization'],
    treatment: ['Diagnostic Spirometry confirming post-bronchodilator obstruction', 'Dual bronchodilator inhalers (LAMA + LABA ± ICS)', 'Pulmonary rehabilitation and breathing retraining', 'Long-term oxygen therapy & non-invasive ventilation (BiPAP) when indicated'],
    urgency: 'routine'
  },
  {
    id: 'cirrhosis-liver',
    name: 'Cirrhosis of the Liver',
    letter: 'C',
    departmentId: 'general_medicine',
    specialtyName: 'General Medicine & Gastroenterology',
    specialistTitle: 'Senior Gastroenterologist & Hepatologist',
    overview: 'Late-stage hepatic fibrosis with distortion of the hepatic architecture, resulting from chronic viral hepatitis, alcohol use, or metabolic fatty liver disease.',
    symptoms: ['Abdominal distension due to ascites (fluid accumulation)', 'Jaundice (yellowing of skin and sclera)', 'Spider angiomas, palmar erythema, and muscle wasting', 'Upper GI bleeding from esophageal varices and mental confusion (encephalopathy)'],
    treatment: ['Abdominal ultrasound Doppler and FibroScan stiffness evaluation', 'Management of portal hypertension (Non-selective beta-blockers)', 'Endoscopic Variceal Ligation (EVL banding) for varices', 'Ascites paracentesis and strict sodium restriction'],
    urgency: 'priority'
  },
  {
    id: 'colorectal-cancer',
    name: 'Colorectal Cancer',
    letter: 'C',
    departmentId: 'oncology',
    specialtyName: 'Surgical Oncology & GI Surgery',
    specialistTitle: 'Chief Surgical Oncologist',
    overview: 'Malignancy arising from the inner lining of the colon or rectum, typically developing from adenomatous polyps over several years.',
    symptoms: ['Persistent change in bowel habits (alternating diarrhea and constipation)', 'Blood in stool (bright red or dark tarry stools)', 'Unexplained iron-deficiency anemia and persistent fatigue', 'Feeling that bowel does not empty completely & cramping pain'],
    treatment: ['Diagnostic Colonoscopy with multiple mucosal biopsies', 'Contrast-enhanced CT scan abdomen & pelvis staging', 'Laparoscopic or Robotic-assisted colectomy / anterior resection', 'Adjuvant systemic chemotherapy & targeted therapy protocols'],
    urgency: 'priority'
  },
  {
    id: 'coronary-artery-disease',
    name: 'Coronary Artery Disease (CAD)',
    letter: 'C',
    departmentId: 'cardiology',
    specialtyName: 'Cardiology & Cardiac Care',
    specialistTitle: 'Director of Interventional Cardiology',
    overview: 'Plaque buildup inside the coronary arteries (atherosclerosis) causing arterial stenosis, reduced myocardial oxygen delivery, and heart attack risk.',
    symptoms: ['Angina: chest pressure, burning, or tightness with activity', 'Shortness of breath on walking or stair climbing', 'Radiating pain to arms, jaw, neck, or back', 'Cold sweat, nausea, or dizziness during exertional episodes'],
    treatment: ['Treadmill Stress Test (TMT), 2D Echo, and Cardiac CT Angiography', 'High-definition Coronary Angiography (Radial route)', 'Primary and Elective Drug-Eluting Stent Angioplasty (PTCA)', 'Comprehensive medical management and cardiac lifestyle rehabilitation'],
    urgency: 'priority'
  },

  // --- D ---
  {
    id: 'diabetic-nephropathy',
    name: 'Diabetic Nephropathy (Diabetic Kidney Disease)',
    letter: 'D',
    departmentId: 'nephrology',
    specialtyName: 'Nephrology & Renal Care',
    specialistTitle: 'Consultant Nephrologist & Diabetologist',
    overview: 'Microvascular complication of chronic diabetes characterized by persistent proteinuria, progressive decline in glomerular filtration rate, and elevated cardiovascular mortality.',
    symptoms: ['Microalbuminuria (protein in urine)', 'Worsening blood pressure control', 'Edema in feet, ankles, and hands', 'Increased frequency of nighttime urination (nocturia)'],
    treatment: ['Tight glycemic control (HbA1c optimization)', 'Blood pressure control with SGLT2 inhibitors and ARBs', 'Annual urine albumin-to-creatinine ratio (UACR) monitoring', 'Dietary protein moderation and renal protective protocols'],
    urgency: 'priority'
  },
  {
    id: 'deep-vein-thrombosis',
    name: 'Deep Vein Thrombosis (DVT)',
    letter: 'D',
    departmentId: 'general_medicine',
    specialtyName: 'Vascular Medicine & Critical Care',
    specialistTitle: 'Senior Vascular Physician & Intensivist',
    overview: 'Blood clot formation within deep veins, usually of the lower extremities, presenting high risk of lethal pulmonary embolism if dislodged.',
    symptoms: ['Unilateral leg swelling and calf tenderness', 'Warmth and erythema over affected leg', 'Pain that worsens when pulling toes upward (Homan sign)', 'Prominent superficial veins along calf'],
    treatment: ['Urgent Color Doppler venous duplex ultrasound', 'Direct Oral Anticoagulant (DOAC) or Heparin therapy', 'Graduated compression stockings', 'Catheter-directed thrombolysis in extensive iliofemoral clots'],
    urgency: 'emergency'
  },
  {
    id: 'diverticulitis',
    name: 'Diverticulitis (Colonic)',
    letter: 'D',
    departmentId: 'surgery',
    specialtyName: 'General & Colorectal Surgery',
    specialistTitle: 'Senior GI & Colorectal Surgeon',
    overview: 'Inflammation or microperforation of diverticula (small pouches in the wall of the colon), predominantly affecting the sigmoid colon.',
    symptoms: ['Constant severe pain in left lower abdomen', 'Fever, chills, and nausea', 'Marked abdominal tenderness with guarding', 'Constipation or loose frequent stools'],
    treatment: ['Abdominal Contrast CT scan diagnosis', 'Intravenous antibiotics and bowel rest', 'Percutaneous drainage for localized abscesses', 'Laparoscopic sigmoid resection for recurrent or perforated disease'],
    urgency: 'priority'
  },

  // --- E ---
  {
    id: 'erectile-dysfunction',
    name: 'Erectile Dysfunction (ED)',
    letter: 'E',
    departmentId: 'andrology',
    specialtyName: 'Andrology & Men\'s Health',
    specialistTitle: 'Senior Andrologist & Microsurgeon',
    overview: 'Inability to achieve or maintain an erection firm enough for satisfactory sexual performance, often a harbinger of systemic cardiovascular disease.',
    symptoms: ['Consistent trouble getting an erection', 'Trouble maintaining an erection until completion', 'Reduced sexual desire (low libido)', 'Premature ejaculation or performance anxiety'],
    treatment: ['Penile Doppler ultrasound & hormonal panel (Testosterone, Prolactin)', 'Oral PDE5 inhibitors and lifestyle optimization', 'Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)', 'Penile prosthesis implant surgery for refractory cases'],
    urgency: 'routine'
  },
  {
    id: 'endometriosis',
    name: 'Endometriosis',
    letter: 'E',
    departmentId: 'gynecology',
    specialtyName: 'Obstetrics & Gynaecology',
    specialistTitle: 'Senior Laparoscopic Gynaecologist',
    overview: 'Disorder in which tissue similar to the lining of the uterus grows outside the uterine cavity, causing chronic pelvic pain and subfertility.',
    symptoms: ['Severe dysmenorrhea (debilitating menstrual cramps)', 'Chronic pelvic and lower back pain', 'Dyspareunia (pain during or after sexual intercourse)', 'Infertility or difficulty conceiving'],
    treatment: ['High-resolution transvaginal ultrasound and pelvic MRI', 'Hormonal suppression therapy (progestins, GnRH analogues)', '3D Laparoscopic excision of endometriotic implants & cystectomy', 'Fertility-preserving surgical protocols'],
    urgency: 'routine'
  },

  // --- F ---
  {
    id: 'fatty-liver-disease',
    name: 'Fatty Liver Disease (NAFLD / MASLD)',
    letter: 'F',
    departmentId: 'general_medicine',
    specialtyName: 'Gastroenterology & Hepatology',
    specialistTitle: 'Senior Hepatologist & Gastroenterologist',
    overview: 'Excess triglyceride accumulation within hepatocytes not caused by alcohol, strongly linked to metabolic syndrome, insulin resistance, and cardiovascular risk.',
    symptoms: ['Often asymptomatic in early stages ("silent")', 'Dull right upper abdominal fullness', 'Persistent fatigue and sluggishness', 'Elevated ALT/AST enzymes on routine checkup'],
    treatment: ['FibroScan transient elastography & ultrasound', 'Metabolic and insulin resistance management', 'Targeted weight reduction (7-10%) and dietary protocol', 'Hepatoprotective and antifibrotic pharmacotherapy'],
    urgency: 'routine'
  },
  {
    id: 'fistula-in-ano',
    name: 'Fistula-in-Ano (Anal Fistula)',
    letter: 'F',
    departmentId: 'surgery',
    specialtyName: 'General & Colorectal Surgery',
    specialistTitle: 'Senior Colorectal & Laser Surgeon',
    overview: 'Abnormal epithelized tract connecting the anal canal to the perianal skin, usually following an anorectal cryptoglandular abscess.',
    symptoms: ['Persistent foul-smelling perianal discharge (pus or blood)', 'Throbbing anal pain exacerbated by sitting or defecation', 'Recurrent perianal boils or swelling', 'Skin excoriation and severe itching around anus'],
    treatment: ['Pelvic MRI Fistulogram for precise tract anatomy', 'Painless Diode Laser Fistula Closure (FiLaC)', 'Sphincter-preserving LIFT procedure', 'Zero incontinence risk with daycare recovery'],
    urgency: 'routine'
  },

  // --- G ---
  {
    id: 'gallstones',
    name: 'Gallstones (Cholelithiasis)',
    letter: 'G',
    departmentId: 'surgery',
    specialtyName: 'General & Laparoscopic Surgery',
    specialistTitle: 'Chief Laparoscopic Surgeon',
    overview: 'Crystalline concretions formed within the gallbladder from bile constituents (cholesterol or bilirubin pigments).',
    symptoms: ['Episodic biliary colic after fatty meals', 'Nausea, bloating, and indigestion', 'Right upper quadrant tenderness', 'Risk of acute cholecystitis, pancreatitis, or cholangitis'],
    treatment: ['High-resolution abdominal ultrasound', 'Gold-standard 3D Laparoscopic Cholecystectomy', 'Intraoperative cholangiography if CBD stones suspected', 'Rapid daycare or 24-hour discharge'],
    urgency: 'routine'
  },
  {
    id: 'gout-arthritis',
    name: 'Gout & Hyperuricemia',
    letter: 'G',
    departmentId: 'general_medicine',
    specialtyName: 'Rheumatology & General Medicine',
    specialistTitle: 'Consultant Rheumatologist & Physician',
    overview: 'Crystal deposition disease caused by monosodium urate monohydrate crystals forming in joints due to chronic elevated serum uric acid.',
    symptoms: ['Excruciating sudden pain in first metatarsophalangeal joint (big toe)', 'Joint erythema, intense warmth, and swelling', 'Extreme tenderness (even a bedsheet causes severe pain)', 'Tophi formation in ear cartilage or tendons in chronic cases'],
    treatment: ['Polarized light microscopy of synovial fluid (urate crystals)', 'Colchicine and NSAID rapid anti-inflammatory flare therapy', 'Urate-lowering therapy (Febuxostat / Allopurinol) for long-term target < 6 mg/dL', 'Dietary purine restriction (organ meats, seafood, alcohol, HFCS)'],
    urgency: 'routine'
  },

  // --- H ---
  {
    id: 'hematuria',
    name: 'Hematuria (Blood in Urine)',
    letter: 'H',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Chief Urologist & Laser Surgeon',
    overview: 'Visible (gross) or microscopic red blood cells in the urine, necessitating urgent urological workup to exclude malignancy or calculi.',
    symptoms: ['Pink, red, or cola-colored urine', 'Passing visible blood clots during urination', 'Flank pain or burning urination (if stone or UTI present)', 'Painless gross hematuria (concerning for urothelial cancer)'],
    treatment: ['Diagnostic flexible cystoscopy under local anesthesia', 'High-resolution non-contrast CT KUB scan', 'Urine cytology and microbiology culture', 'Targeted intervention (Laser stone clearance or TURBT for bladder tumor)'],
    urgency: 'priority'
  },
  {
    id: 'hernia-inguinal',
    name: 'Hernia (Inguinal, Umbilical & Incisional)',
    letter: 'H',
    departmentId: 'surgery',
    specialtyName: 'General & Laparoscopic Surgery',
    specialistTitle: 'Senior Laparoscopic Hernia Surgeon',
    overview: 'Protrusion of abdominal viscera or omentum through an abnormal opening in the abdominal wall or groin musculature.',
    symptoms: ['Noticeable bulge in groin or abdomen that enlarges with coughing or standing', 'Aching sensation or dragging discomfort at the bulge', 'Pain that worsens with lifting heavy objects', 'Severe pain and vomiting if strangulated or incarcerated'],
    treatment: ['Physical clinical examination and high-frequency ultrasound', '3D Laparoscopic Hernia Repair (TEP / TAPP) with tension-free mesh', 'Negligible recurrence rate and fast return to normal activities', 'Immediate emergency surgery if strangulated'],
    urgency: 'routine'
  },

  // --- K ---
  {
    id: 'kidney-stones',
    name: 'Kidney Stones (Nephrolithiasis)',
    letter: 'K',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Chief Urologist & Laser Stone Specialist',
    overview: 'Hard mineral deposits that form inside the kidneys from concentrated urine salts, capable of migrating into the ureter and causing agonizing colic.',
    symptoms: ['Sudden, excruciating flank and lower back pain radiating to groin', 'Blood in urine (hematuria)', 'Nausea, severe vomiting, and restless pacing', 'Persistent urge to urinate and burning sensation'],
    treatment: ['Non-contrast helical CT KUB (Gold standard imaging)', 'Retrograde Intrarenal Surgery (RIRS) with 100W Holmium Laser Dusting', 'Mini-PCNL for large staghorn stones with minimal puncture', 'Daycare discharge within 24 hours with zero skin incisions'],
    urgency: 'priority'
  },
  {
    id: 'knee-osteoarthritis',
    name: 'Knee Osteoarthritis',
    letter: 'K',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Joint Replacement',
    specialistTitle: 'Senior Joint Replacement Surgeon',
    overview: 'Degenerative joint disease caused by wear and tear of the articular cartilage of the knee, leading to joint space narrowing and bone spurs.',
    symptoms: ['Knee pain that worsens after walking, stairs, or standing', 'Morning stiffness lasting under 30 minutes', 'Grating or cracking sensation (crepitus) on bending knee', 'Swelling, joint deformity, and bow-legged appearance'],
    treatment: ['Weight-bearing Digital X-rays of both knees', 'Physiotherapy, quad strengthening, and lifestyle weight loss', 'Intra-articular Hyaluronic Acid or PRP injections', 'Computer-navigated Total Knee Replacement (TKR) with rapid ambulation'],
    urgency: 'routine'
  },

  // --- M ---
  {
    id: 'migraine',
    name: 'Migraine & Chronic Headache Disorders',
    letter: 'M',
    departmentId: 'neurology',
    specialtyName: 'Neurology & Neuro Care',
    specialistTitle: 'Senior Consultant Neurologist',
    overview: 'Neurovascular disorder characterized by recurrent attacks of severe unilateral, throbbing headache associated with autonomic symptoms and sensory sensitivity.',
    symptoms: ['Moderate to severe throbbing pain on one side of head', 'Photophobia (light sensitivity) and phonophobia (sound sensitivity)', 'Visual aura (flashing lights, zigzag lines) before headache', 'Nausea, vomiting, and cognitive fatigue'],
    treatment: ['Neuroimaging (MRI Brain) to exclude secondary intracranial causes', 'Acute triptan and CGRP-antagonist abortive therapy', 'Prophylactic beta-blockers, topiramate, or anti-CGRP monoclonal antibodies', 'Lifestyle trigger identification and headache diary monitoring'],
    urgency: 'routine'
  },

  // --- P ---
  {
    id: 'prostate-cancer',
    name: 'Prostate Cancer',
    letter: 'P',
    departmentId: 'urology',
    specialtyName: 'Urology & Uro-Oncology',
    specialistTitle: 'Chief Urologist & Uro-Oncologist',
    overview: 'Malignancy arising from the glandular tissue of the prostate, one of the most common cancers in aging men, treatable when detected early.',
    symptoms: ['Elevated Serum PSA (> 4 ng/mL)', 'Difficulty urinating, slow stream, or nocturia', 'Blood in semen or urine', 'Bone pain in spine or pelvis if advanced'],
    treatment: ['Multiparametric MRI (mpMRI) of the prostate', 'Transrectal or Transperineal ultrasound-guided fusion biopsy', 'Laparoscopic Radical Prostatectomy for localized disease', 'Androgen Deprivation Therapy (ADT) and radiation oncology referral'],
    urgency: 'priority'
  },
  {
    id: 'pneumonia',
    name: 'Pneumonia (Community-Acquired / Viral)',
    letter: 'P',
    departmentId: 'pulmonology',
    specialtyName: 'Pulmonology & Respiratory Care',
    specialistTitle: 'Senior Consultant Pulmonologist & Intensivist',
    overview: 'Infection that inflames air sacs in one or both lungs, which may fill with fluid or purulent material (consolidation).',
    symptoms: ['High-grade fever with shaking chills and sweating', 'Productive cough with greenish or rust-colored phlegm', 'Sharp pleuritic chest pain on deep inspiration or coughing', 'Rapid breathing, low oxygen saturation (SpO2), and extreme fatigue'],
    treatment: ['Digital Chest X-ray and high-resolution CT thorax', 'Targeted intravenous or oral antimicrobial therapy', 'Oxygen therapy and bronchodilator nebulization', 'ICU monitoring for severe cases with respiratory compromise'],
    urgency: 'priority'
  },

  // --- S --- (Extensive coverage for letter S)
  {
    id: 'sciatica-lumbar-radiculopathy',
    name: 'Sciatica (Lumbar Radiculopathy)',
    letter: 'S',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Spine Care',
    specialistTitle: 'Senior Spine Surgeon & Orthopedic Consultant',
    overview: 'Pain that radiates along the path of the sciatic nerve, branching from the lower back through the hips, buttock, and down each leg, typically caused by a herniated disc or bone spur.',
    symptoms: ['Sharp shooting electric pain radiating from lower back down back of leg', 'Numbness, burning, or tingling in calf or foot', 'Muscle weakness in leg or foot (foot drop in severe cases)', 'Pain exacerbated by sitting, coughing, or sneezing'],
    treatment: ['High-resolution MRI of the Lumbar Spine (L4-L5, L5-S1)', 'Targeted nerve root block or transforaminal epidural injection', 'Focused spinal decompression physiotherapy and core stabilization', 'Microscopic Endoscopic Discectomy for progressive neurological deficit'],
    urgency: 'priority'
  },
  {
    id: 'sepsis-septic-shock',
    name: 'Sepsis & Septic Shock',
    letter: 'S',
    departmentId: 'critical_care',
    specialtyName: 'Emergency & Critical Care ICU',
    specialistTitle: 'Director of Intensive Care & Resuscitation',
    overview: 'Life-threatening organ dysfunction caused by a dysregulated host response to infection, rapidly escalating to septic shock with profound hypotension and cellular metabolic abnormalities.',
    symptoms: ['Fever > 38.3°C or hypothermia < 36°C with rigors', 'Tachycardia (heart rate > 90 bpm) and tachypnea (respiratory rate > 20 bpm)', 'Altered mental state, confusion, or extreme somnolence', 'Systolic BP < 90 mmHg unresponsive to initial fluid bolus'],
    treatment: ['Surviving Sepsis Hour-1 Bundle protocol in ICU', 'Immediate blood cultures and broad-spectrum IV antimicrobials', 'Aggressive crystalloid fluid resuscitation (30 mL/kg) and norepinephrine vasopressors', 'Continuous arterial line, central venous pressure, and serial lactate clearance tracking'],
    urgency: 'emergency'
  },
  {
    id: 'sinusitis-chronic',
    name: 'Sinusitis (Chronic Rhinosinusitis)',
    letter: 'S',
    departmentId: 'general_medicine',
    specialtyName: 'ENT & Head-Neck Surgery',
    specialistTitle: 'Consultant ENT Surgeon & Physician',
    overview: 'Persistent inflammation of the paranasal sinus mucosa lasting more than 12 weeks despite treatment, frequently associated with nasal polyposis or deviated septum.',
    symptoms: ['Facial pain, pressure, and fullness around eyes, cheeks, or forehead', 'Purulent discolored nasal discharge and chronic post-nasal drip', 'Nasal obstruction and difficulty breathing through nose', 'Decreased sense of smell (hyposmia) and chronic morning headache'],
    treatment: ['High-resolution Non-Contrast CT scan of Paranasal Sinuses (PNS)', 'High-volume saline nasal irrigations and topical corticosteroid sprays', 'Targeted antimicrobial and antiallergy pharmacotherapy', 'Functional Endoscopic Sinus Surgery (FESS) with microdebrider for refractory cases'],
    urgency: 'routine'
  },
  {
    id: 'stroke-ischemic-hemorrhagic',
    name: 'Stroke (Acute Ischemic / Hemorrhagic)',
    letter: 'S',
    departmentId: 'neurology',
    specialtyName: 'Neurology & Stroke Unit',
    specialistTitle: 'Chief Neurologist & Stroke Specialist',
    overview: 'Acute focal neurological injury of sudden onset resulting from vascular occlusion (ischemia 85%) or spontaneous parenchymal bleeding (hemorrhage 15%).',
    symptoms: ['FAST criteria: Facial asymmetry or droop on one side', 'Arm or leg drift / sudden unilateral weakness', 'Speech difficulty: slurring, aphasia, or inability to comprehend', 'Time: sudden onset loss of balance, vision loss, or vertigo'],
    treatment: ['Immediate Code Stroke activation with emergency CT/MRI Brain within 15 minutes', 'Intravenous recombinant tissue plasminogen activator (IV-rtPA) within 4.5 hours window', 'Mechanical thrombectomy pathway for large vessel occlusions', 'Dedicated Neuro-ICU hemodynamic control and swallow-safety evaluation'],
    urgency: 'emergency'
  },
  {
    id: 'spinal-disc-herniation',
    name: 'Spinal Disc Herniation (Slipped Disc)',
    letter: 'S',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Spine Care',
    specialistTitle: 'Senior Spine Surgeon',
    overview: 'Displacement of disc material beyond the intervertebral space, producing mechanical compression and chemical irritation of adjacent traversing nerve roots.',
    symptoms: ['Sudden onset severe low back pain after lifting or bending', 'Radiating dermatomal pain into buttock, thigh, or foot', 'Paresthesia (pins and needles) in specific nerve distribution', 'Loss of deep tendon reflexes and motor power'],
    treatment: ['3T MRI Lumbar or Cervical spine evaluation', 'Initial conservative management: NSAIDs, short-course steroids, bed rest avoidance', 'Structured mechanical physiotherapy and epidural steroid injections', 'Minimally invasive tubular microdiscectomy (daycare / 24-hr stay)'],
    urgency: 'priority'
  },
  {
    id: 'stricture-urethra-s',
    name: 'Stricture Urethra (Urethral Stenosis)',
    letter: 'S',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Chief Reconstructive Urologist',
    overview: 'Cicatricial narrowing of the anterior or posterior urethral lumen impeding normal laminar flow of urine from the bladder.',
    symptoms: ['Progressive attenuation and spraying of urinary stream', 'Prolonged voiding time and feeling of incomplete emptying', 'Terminal dribbling and dysuria', 'Recurrent acute urinary retention and urinary tract infections'],
    treatment: ['Retrograde Urethrography (RUG) determining length and location of stricture', 'Uroflowmetry demonstrating low plateau flow pattern', 'Laser Optical Internal Urethrotomy (OIU) for short single bulbar strictures', 'Buccal Mucosal Graft (BMG) Urethroplasty for long-term permanent cure'],
    urgency: 'priority'
  },
  {
    id: 'sleep-apnea-osa',
    name: 'Sleep Apnea (Obstructive Sleep Apnea - OSA)',
    letter: 'S',
    departmentId: 'pulmonology',
    specialtyName: 'Pulmonology & Sleep Medicine',
    specialistTitle: 'Consultant Pulmonologist & Sleep Specialist',
    overview: 'Recurrent episodes of partial (hypopnea) or complete (apnea) upper airway collapse during sleep, resulting in oxygen desaturation and sleep fragmentation.',
    symptoms: ['Habitual loud snoring interrupted by choking or gasping sounds', 'Observed breathing pauses during sleep by bed partner', 'Severe daytime sleepiness, morning headaches, and cognitive fatigue', 'Refractory hypertension and nocturnal awakenings with nocturia'],
    treatment: ['Gold-standard Overnight Polysomnography (Sleep Study)', 'Auto-titrating Continuous Positive Airway Pressure (CPAP / BiPAP) therapy', 'Targeted weight loss and upper airway anatomical evaluation', 'Custom oral mandibular advancement devices or ENT airway surgery'],
    urgency: 'routine'
  },
  {
    id: 'staghorn-calculi',
    name: 'Staghorn Renal Calculi (Complex Kidney Stones)',
    letter: 'S',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Chief Endourologist & PCNL Specialist',
    overview: 'Branched stones that occupy a large portion of the renal pelvis and calyces, frequently associated with urea-splitting bacterial infections (struvite stones).',
    symptoms: ['Dull constant flank heaviness without severe acute colic', 'Recurrent intractable urinary tract infections and fever', 'Microscopic or gross hematuria', 'Progressive renal functional decline if left untreated'],
    treatment: ['Dual-energy non-contrast CT KUB with 3D renal reconstruction', 'Percutaneous Nephrolithotomy (PCNL / Mini-PCNL) via single 5mm puncture', 'High-power Holmium or Thulium laser stone pulverization', 'Complete stone clearance verifying sterile urine to prevent recurrence'],
    urgency: 'priority'
  },
  {
    id: 'shoulder-impingement-rotator',
    name: 'Shoulder Impingement & Rotator Cuff Tear',
    letter: 'S',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Sports Medicine',
    specialistTitle: 'Consultant Arthroscopic Shoulder Surgeon',
    overview: 'Mechanical compression of rotator cuff tendons under the coracoacromial arch during arm elevation, leading to tendon wear, bursitis, and tears.',
    symptoms: ['Pain when raising arm above shoulder height or reaching behind back', 'Painful arc between 60° and 120° of abduction', 'Night pain disturbing sleep when lying on the affected side', 'Weakness when attempting overhead tasks or lifting heavy objects'],
    treatment: ['High-frequency Musculoskeletal Ultrasound and Shoulder MRI', 'Subacromial bursa corticosteroid / PRP injection under ultrasound guidance', 'Rotator cuff rehabilitation and periscapular muscle balancing', 'Keyhole Arthroscopic Subacromial Decompression & Rotator Cuff Repair'],
    urgency: 'routine'
  },
  {
    id: 'spondylolisthesis',
    name: 'Spondylolisthesis (Lumbar Spine Slip)',
    letter: 'S',
    departmentId: 'orthopedics',
    specialtyName: 'Orthopedics & Spine Surgery',
    specialistTitle: 'Senior Spine Surgeon',
    overview: 'Anterior displacement of one vertebral body relative to the one beneath it, most commonly seen at L4-L5 or L5-S1 levels due to degeneration or pars defect.',
    symptoms: ['Chronic localized lower back pain aggravated by standing and walking', 'Neurogenic claudication: cramping and numbness in legs on walking relieved by sitting forward', 'Hamstring tightness and restricted forward flexion', 'Loss of lumbar lordosis and palpable step-off in advanced grades'],
    treatment: ['Dynamic Flexion-Extension X-rays assessing spinal instability', 'MRI Lumbar spine assessing degree of central and foraminal stenosis', 'Structured physical therapy, core strengthening, and lumbar bracing', 'Minimally Invasive Transforaminal Lumbar Interbody Fusion (MIS-TLIF)'],
    urgency: 'priority'
  },
  {
    id: 'stress-urinary-incontinence',
    name: 'Stress Urinary Incontinence (SUI)',
    letter: 'S',
    departmentId: 'urology',
    specialtyName: 'Urology & Urogynaecology',
    specialistTitle: 'Consultant Urologist & Urogynaecologist',
    overview: 'Involuntary leakage of urine on effort or physical exertion (e.g., coughing, laughing, sneezing, exercising) due to pelvic floor muscle weakness or intrinsic sphincter deficiency.',
    symptoms: ['Involuntary loss of small amounts of urine when coughing or laughing', 'Urine leakage while exercising, jumping, or lifting heavy weights', 'Need to wear protective pads during daily physical activities', 'Absence of leakage when resting or asleep in bed'],
    treatment: ['Clinical urodynamic evaluation and pad testing', 'Supervised Pelvic Floor Muscle Training (Kegel exercises)', 'Minimally invasive Mid-Urethral Sling (TVT / TOT) daycare surgery', 'Over 90% permanent cure rate with immediate return to normal life'],
    urgency: 'routine'
  },

  // --- T ---
  {
    id: 'testicular-torsion',
    name: 'Testicular Torsion',
    letter: 'T',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Emergency Urological Surgeon',
    overview: 'Twisting of the spermatic cord cutting off testicular arterial blood supply, representing a critical surgical emergency with a 6-hour salvage window.',
    symptoms: ['Sudden, severe, unilateral scrotal pain and swelling', 'Nausea, severe vomiting, and lower abdominal pain', 'Elevated and horizontally oriented testis on the affected side', 'Loss of the ipsilateral cremasteric reflex'],
    treatment: ['Immediate Emergency Scrotal Color Doppler Ultrasound', 'Urgent surgical scrotal exploration within 6 hours of onset', 'Detorsion and bilateral orchiopexy (fixation to prevent recurrence)', '24/7 Emergency OT team ready on arrival'],
    urgency: 'emergency'
  },
  {
    id: 'thyroid-disorders',
    name: 'Thyroid Disorders (Hypothyroidism & Nodules)',
    letter: 'T',
    departmentId: 'general_medicine',
    specialtyName: 'Endocrinology & General Medicine',
    specialistTitle: 'Consultant Endocrinologist & Physician',
    overview: 'Functional and structural abnormalities of the thyroid gland, ranging from autoimmune thyroiditis (Hashimoto) to solitary nodules requiring malignancy workup.',
    symptoms: ['Unexplained weight gain or rapid weight loss', 'Cold intolerance or heat intolerance with heart palpitations', 'Chronic lethargy, dry skin, and hair fall', 'Visible fullness in anterior neck (goiter) or difficulty swallowing'],
    treatment: ['Comprehensive Thyroid Profile (Free T3, Free T4, Ultra-sensitive TSH)', 'High-resolution Thyroid Ultrasound assessing TIRADS criteria', 'Fine Needle Aspiration Cytology (FNAC) for suspicious nodules', 'Physiological Levothyroxine replacement or minimally invasive thyroidectomy'],
    urgency: 'routine'
  },

  // --- U ---
  {
    id: 'urinary-tract-infection',
    name: 'Urinary Tract Infection (UTI & Pyelonephritis)',
    letter: 'U',
    departmentId: 'urology',
    specialtyName: 'Urology & Nephrology',
    specialistTitle: 'Consultant Urologist',
    overview: 'Bacterial infection affecting any part of the urinary tract (urethra, bladder, ureters, or kidneys), common in women and diabetic patients.',
    symptoms: ['Burning sensation during urination (dysuria)', 'Frequent and intense urge to urinate with small volume passed', 'Cloudy, strong-smelling, or dark reddish urine', 'High fever, shaking chills, and back/flank pain if kidney involved (pyelonephritis)'],
    treatment: ['Urine routine and Automated Culture & Sensitivity test', 'Culture-directed antibiotic therapy (avoiding resistance)', 'Adequate hydration and urinary alkalinizers', 'Urological evaluation for underlying structural or functional causes'],
    urgency: 'routine'
  },
  {
    id: 'urethral-stricture',
    name: 'Urethral Stricture Disease',
    letter: 'U',
    departmentId: 'urology',
    specialtyName: 'Urology & Andrology',
    specialistTitle: 'Chief Reconstructive Urologist',
    overview: 'Narrowing of the lumen of the urethra caused by scarring from infection, catheterization trauma, or straddle injury.',
    symptoms: ['Progressive thinning of urinary stream and spraying', 'Straining to void with prolonged micturition time', 'Recurrent UTIs and painful urination', 'Incomplete bladder emptying and post-void dribbling'],
    treatment: ['Retrograde Urethrogram (RUG) and Micturating Cystourethrogram (MCU)', 'Optical Internal Urethrotomy (OIU) with Holmium laser', 'Buccal Mucosa Graft (BMG) Urethroplasty (Gold standard reconstruction)', 'Long-term patency with specialized microsurgical techniques'],
    urgency: 'priority'
  },

  // --- V ---
  {
    id: 'varicocele',
    name: 'Varicocele (Scrotal Varicose Veins)',
    letter: 'V',
    departmentId: 'andrology',
    specialtyName: 'Andrology & Men\'s Health',
    specialistTitle: 'Senior Andrologist & Microsurgeon',
    overview: 'Abnormal enlargement of the pampiniform venous plexus within the scrotum, causing testicular hyperthermia, pain, and impaired spermatogenesis.',
    symptoms: ['Dull aching dragging pain in the scrotum, worse at end of day', 'Visible or palpable "bag of worms" above testicle (Grade 3)', 'Shrinkage or atrophy of the affected testicle', 'Abnormal semen analysis (low sperm count, motility, or morphology)'],
    treatment: ['High-resolution Scrotal Color Doppler ultrasound', 'Microsurgical Subinguinal Varicocelectomy under operating microscope', 'Preservation of testicular artery and lymphatic channels', 'Outpatient daycare procedure with rapid recovery within 48 hours'],
    urgency: 'routine'
  },
  {
    id: 'varicose-veins',
    name: 'Varicose Veins & Venous Insufficiency',
    letter: 'V',
    departmentId: 'surgery',
    specialtyName: 'Vascular & Endovascular Surgery',
    specialistTitle: 'Senior Vascular Surgeon',
    overview: 'Incompetence of superficial venous valves of the lower extremities leading to venous hypertension, tortuosity, and skin changes.',
    symptoms: ['Tortuous, bulging, rope-like blue veins along legs', 'Aching, heavy, or throbbing feeling in legs after standing', 'Swelling of ankles and feet', 'Hyperpigmentation (stasis dermatitis) and non-healing venous ulcers'],
    treatment: ['Standing Venous Color Doppler Duplex Mapping', 'Endovenous Laser Ablation (EVLA) / Radiofrequency Ablation (RFA)', 'Ultrasound-guided foam sclerotherapy for spider veins', 'Daycare walking procedure with no bed rest needed'],
    urgency: 'routine'
  }
];

export const ALPHABET_LIST = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
