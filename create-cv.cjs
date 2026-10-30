const fs = require('fs');

const streamContent = `BT
/F1 20 Tf
50 730 Td
(MD ASADUL ISLAM) Tj
/F2 11 Tf
0 -22 Td
(Full-Stack AI Developer & Software Engineer | Dhaka, Bangladesh) Tj
0 -16 Td
(Email: asadut486@gmail.com | LinkedIn: linkedin.com/in/a-j-asad-408839270) Tj
0 -16 Td
(GitHub: github.com/Asadul09 | Live Portfolio: portfolio-react-lac-eta.vercel.app) Tj
/F1 13 Tf
0 -30 Td
(EDUCATION) Tj
/F2 10 Tf
0 -16 Td
(BSc in Computer Science and Engineering - Ahsanullah University of Science and Technology [AUST]) Tj
0 -14 Td
(Period: Dec 2021 - Dec 2025 | SSC & HSC: GPA 5.00 / 5.00 | IELTS: 6.5) Tj
/F1 13 Tf
0 -26 Td
(RESEARCH & PUBLICATIONS) Tj
/F2 10 Tf
0 -16 Td
(First Author: LC Cancer Classification Using Lightweight ShuffleNetV2 & TDO-Optimized GNB With XAI) Tj
0 -14 Td
(Venue: IEEE Conference Publication | Deep Learning, PyTorch, Explainable AI) Tj
0 -14 Td
(Research: Intent Detection on Low-Resource Bangla via Contrastive Learning [XLM-RoBERTa, mBERT]) Tj
/F1 13 Tf
0 -26 Td
(TECHNICAL SKILLS) Tj
/F2 10 Tf
0 -16 Td
(AI & ML: LLMs, GPT-4o mini, OpenRouter, PyTorch, ShuffleNetV2, XAI, Transformers, Python) Tj
0 -14 Td
(Full-Stack: React 19, Node.js, Express.js, MongoDB Atlas, JavaScript, TypeScript, Tailwind CSS) Tj
0 -14 Td
(Tools & Analytics: Power BI, Advanced Excel, Git, GitHub, Postman, SQL, Firebase, REST APIs) Tj
/F1 13 Tf
0 -26 Td
(EXPERIENCE & FLAGSHIP PROJECTS) Tj
/F2 10 Tf
0 -16 Td
(Data Analyst - Sunset Kuakata Hotel & Resort Ltd. [August 2024 - Present]) Tj
0 -14 Td
(VivaBot.AI - AI Interview Prep Platform [React, Node, Express, MongoDB, OpenRouter, GPT-4o mini]) Tj
0 -14 Td
(Smart IoT Healthcare - Wireless ECG Arrhythmia Telemetry & Monitoring System [ESP32, C++, Node.js]) Tj
ET`;

const streamLength = Buffer.byteLength(streamContent, 'utf8');

const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${streamContent}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000001550 00000 n 
0000001627 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
1699
%%EOF`;

fs.writeFileSync('frontend/public/MD_Asadul_Islam_CV.pdf', content);
fs.writeFileSync('frontend/public/cv.pdf', content);
console.log('PDF generated successfully!');
