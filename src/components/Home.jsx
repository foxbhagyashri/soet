import { useState, useEffect } from "react";
// Put sunlogo.png in /public/ (imported as "/sunlogo.png")
import universityLogo from "/sunlogo.png";

/* ------------------------------------------------------------------
   SETUP
   1. Put all images in /public/ (same filenames as used below).
   2. All styling is inline CSS. Add once to global CSS:
         body { margin: 0; }
         html { scroll-behavior: smooth; }
   3. In handleSubmit(), send the lead to your CRM and fire your
      Google Ads conversion event (gtag_report_conversion).
------------------------------------------------------------------- */

const RECRUITERS = [
  { name: "Rêve Pharma", src: "/10001 (2).png" },
  { name: "Yugandhar", src: "/10011.png" },
  { name: "Nova Beauty", src: "/10010 (1).png" },
  { name: "Pantaloons", src: "/10008 (2).png" },
  { name: "Forest Essentials", src: "/10007 (2).png" },
  { name: "The Souled Store", src: "/10005 (2).png" },
  { name: "The Souled Store", src: "/10002 (2).png" },
];

const CAMPUS = [
  { src: "/labimg.jpg", title: "Advanced Labs", text: "State-of-the-art laboratories for hands-on experiments and innovation." },
  { src: "/studentActivities.jpg", title: "Student Activities", text: "Cultural festivals, sports, clubs, and various student-led initiatives." },
  { src: "/securityimg.webp", title: "24×7 Security", text: "Round-the-clock surveillance with advanced monitoring systems." },
  { src: "/gym.webp", title: "Gymnasium", text: "Modern fitness center with advanced workout machines." },
  { src: "/campus-1.jpg", title: "Vibrant Campus Atmosphere", text: "Experience an energetic campus filled with learning, culture and fun." },
  { src: "/classroom-1.jpg", title: "Modern Classrooms", text: "Well-equipped digital classrooms designed for interactive learning." },
  { src: "/library.jpg", title: "Library & Research Center", text: "A huge digital + physical library supporting academic and research needs." },
  { src: "/hostel.jpg", title: "Hostel & Accommodation", text: "Comfortable, secure hostel facilities that feel like a second home." },
];

const IMG = {
  hero: "/6A5A9662.jpg",
  campus: "/042__1_.jpg",
  mscMaths: "/MSc_Maths.jpg",
  mscPhysics: "/MSc_Physics.jpg",
  phdPhysics: "/Ph.D_Physics.jpg",
  phdZoology: "/Ph.D_Zoology.jpg",
};

/* Short blurbs used by the enquiry-form programme list */
const BTECH_BLURB = "Four-year undergraduate engineering degree with industry-focused training.";
const MTECH_BLURB = "Two-year postgraduate engineering degree with an advanced, research-oriented curriculum.";

const CONTENT = {
  brand: "Sandip University",
  phone: "+91-8956374111",
  phoneHref: "tel:+918956374111",
  heroTag: "Admissions Open 2027-28",
  heroTitle: "Engineering Minds. Shaping the Future.",
  heroSub: "NAAC Accredited ‘A’ Grade with 3.11 CGPA (1st Cycle)",
  para: "4th Top Ranking Private University in India | Approved by UGC | AIU",

  heroPoints: [
    "Experiential engineering education",
    "Expert faculty & industry mentors",
    "Industry-driven curriculum",
    "Advanced technology & innovation labs",
  ],
  datNotice: {
    titlee: "1st Phase Examination",
    title: "",
    lastDateLabel: "Last Date to Apply",
    lastDate: "4th Feb 2027",
    examLabel: "SU-DAT Exam",
    examDate: "6th Feb 2027",
  },

  stats: [
    { value: "20+", label: "Years of Excellence" },
    { value: "150+", label: "Industry Partners" },
    { value: "20+", label: "Design Labs & Studios" },
    { value: "100%", label: "Placement Support" },
  ],
  aboutTitle: "About the School of Engineering and Technology ",
  aboutText: [
    "Sandip University’s School of Engineering and Technology (SOET) is one of the best engineering colleges in Maharashtra and a powerhouse of industry-led engineering degree programs for engineers of tomorrow. Each program is designed bearing in mind current and future industry expectations to train students as per industry standards.",
    "Industry experts are consulted when designing the curriculum to balance knowledge-building and skill-development activities. Sandip University’s 250+ acre high-tech campus is the perfect backdrop for an innovative and futuristic academic experience for engineering students.",
  ],
  // Used by the "Select programme" dropdown in the enquiry form
  programs: [
    { name: "B.Tech in Aerospace Engineering", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "B.Tech in Civil Engineering", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "B.Tech in Electrical Engineering", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "B.Tech in Mechanical Engineering", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "B.Tech Electronics and Telecommunication", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "B.Tech Aeronautical Engineering", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "B.Tech Bio Technology", duration: "4 Years", blurb: BTECH_BLURB },
    { name: "Bachelor of Planning", duration: "4 Years", blurb: "Undergraduate planning degree focused on urban and regional development." },
    { name: "M.Tech in Structural Engineering", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech in Electrical Power Systems", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech in Environmental Engineering", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech in Mechanical Engineering", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech in Construction Management", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech in Transportation Engineering and Planning", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech in Design Engineering", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech Valuation Land Building", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "M.Tech Electric Vehicle", duration: "2 Years", blurb: MTECH_BLURB },
    { name: "Master of Planning Town and Country Planning", duration: "2 Years", blurb: "Postgraduate planning degree focused on town, country and environmental planning." },
  ],
  highlights: [
    {
      title: "Hands-On Scientific Learning",
      text: "Develop practical knowledge through experiments, laboratory work and experiential learning.",
    },
    {
      title: "Expert Faculty",
      text: "Learn from experienced faculty and research professionals who foster curiosity, critical thinking and scientific inquiry.",
    },
    {
      title: "Research & Innovation",
      text: "Engage in research projects and innovative approaches to explore real-world scientific challenges.",
    },
    {
      title: "Advanced Laboratories",
      text: "Access modern laboratories and scientific infrastructure designed for practical learning and experimentation.",
    },
    {
      title: "Industry & Research Exposure",
      text: "Gain valuable exposure through internships, workshops, expert interactions, research projects and field-based learning.",
    },
    {
      title: "Future-Ready Skills",
      text: "Build analytical, problem-solving, technical and research skills for higher education and diverse scientific careers.",
    },
  ],
  careers: [
    "Research Scientist",
    "Data Scientist & Analyst",
    "Biotechnologist",
    "Chemist",
    "Environmental Scientist",
    "Microbiologist",
    "Scientific Researcher",
    "Science Educator",
  ],
  steps: [
    { title: "Enquire", text: "Fill the form or call our admission desk." },
    { title: "Counselling", text: "Talk to our team about programmes and eligibility." },
    { title: "Apply", text: "Submit your application and documents." },
    { title: "Enrol", text: "Confirm your seat and start your design journey." },
  ],
  faqs: [
    { q: "What is the eligibility criteria for B.Tech. admission at Sandip University’s School of Engineering & Technology?", a: "Passed 10+2 examination with Physics/ Mathematics / Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/ Biotechnology/ Technical Vocational subject/ Agriculture/ Engineering Graphics/ Business Studies/ Entrepreneurship as per table 8.4 Agriculture stream (for Agriculture Engineering) Obtained at least 45% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together OR Passed min. 3 years Diploma examination with at least 45% marks (40% marks in case of candidates belonging to reserved category) subject to vacancies in the First Year, in case the vacancies at lateral entry are exhausted. (The Universities will offer suitable bridge courses such as Mathematics, Physics, Engineering drawing, etc., for the students coming from diverse backgrounds to prepare Level playing field and desired learning outcomes of the programme)." },
    { q: "What is the eligibility criteria for M.Tech. admission at Sandip University’s School of Engineering & Technology?", a: "Passed Bachelor’s Degree or equivalent in the relevant field. OR Obtained at least 50% marks (45% marks in case of candidates belonging to reserved category) in the qualifying Examination." },
    { q: "What are the eligibility criteria for UG and PG courses at Sandip University?", a: "Eligibility for most UG programs is 10+2 from a reputed educational institution with minimum 50% aggregate marks in the qualifying exam, and the eligibility for most PG programs is an undergraduate degree in the relevant field from a UGC-recognised university with minimum 50% aggregate marks in the qualifying exam. For more information, choose the specific program you prefer to check the eligibility." },
    { q: "Are internships included in the curriculum at Sandip University’s School of Engineering & Technology?", a: "Yes, the curriculum includes an internship component during the semester." },
    { q: "What is the course duration of the M. Tech. program at Sandip University?", a: "The M.Tech program is a 2-years course." },
    { q: "What is the course duration of the B.Tech. program at Sandip University?", a: "The B.Tech program is a 4-years course." },
    { q: "What is the average salary package for design graduates from Sandip University?", a: "Industries offer average salary packages ranging from ₹4 LPA to ₹12 LPA, depending on skills and portfolio." },
    { q: "Is hostel accommodation available on the Sandip University campus?", a: "Yes, Sandip University provides hostel facilities within the campus." },
  ],
  footerAddress: "Sandip University, Nashik, Maharashtra, India",
};

/* ------------------------------------------------------------------
   DEGREES (single declaration — B.Tech and M.Tech)
------------------------------------------------------------------- */

const BTECH_ELIGIBILITY = [
  "Passed 3-year Diploma with at least 45% marks (40% for reserved category).",
  "Passed 10+2 with Minimum Marks 45% aggregate (40% for reserved category).",
];

const MTECH_ELIGIBILITY = [
  "B.Tech/B.E. in relevant engineering branch with Minimum Marks 50% (45% for reserved category)",
];

const DEGREES = [
  {
    id: "btech",
    title: "Bachelor of Technology (B.Tech)",
    duration: "4 Years",
    mode: "Full-Time",
    eligibility: BTECH_ELIGIBILITY,
    specializations: [
      {
        key: "Aerospace Engineering",
        summary:
          "The Department of Aerospace Engineering at Sandip University is equipped with the latest lab tech, research facilities, training amenities, and high-tech computer labs to develop each student's technical skills. Students are mentored by expert faculty members with dynamic experience in this field of aerospace engineering.",
        careers: ["Design Engineer", "Flight Test Engineer", "Research Scientist", "Project Manager"],
      },
      {
        key: "Civil Engineering",
        // TODO: placeholder summary - replace with the real text
        summary:
          "B.Tech in Civil Engineering at Sandip University, Nashik, prepares students to plan, design and build the infrastructure around us. The program covers structural design, construction practice, surveying, environmental engineering and project management, with hands-on lab and site exposure.",
        careers: ["Civil Engineer", "Structural Engineer", "Site / Project Engineer", "Construction Manager", "Environmental Engineer"],
      },
      {
        key: "Electrical Engineering",
        summary:
          "Sandip University's Department of Electrical Engineering has all the hallmarks of futuristic learning and training in the field of electrical engineering. As one of the top electrical engineering colleges in Maharashtra, Sandip University understands the current and future requirements of the industry.",
        careers: ["Electrical Engineer", "Power Systems Engineer", "Design/Project Engineer", "Maintenance/Field Engineer"],
      },
      {
        key: "Mechanical Engineering",
        summary:
          "B.Tech in Mechanical Engineering at Sandip University is a flagship undergraduate program that equips students with a deep understanding of mechanics, thermodynamics, manufacturing, robotics, and material science.",
        careers: ["Mechanical Engineer", "Design & Simulation Engineer", "Maintenance Engineer", "Quality Control Engineer"],
      },
      {
        key: "Electronics & Telecommunications Engineering",
        summary:
          "The B.Tech in Electronics and Telecommunication program is designed in tandem with industry experts who make recommendations that contribute towards an industry-relevant curriculum. Students achieve a highly globalised academic experience through a strategic training program.",
        careers: ["Telecom Engineer", "Technical Director", "Electronic Design Engineer", "Network Planning Engineer"],
      },
      {
        key: "Aeronautical Engineering",
        summary:
          "As one of the best aeronautical engineering colleges in Nashik, students at Sandip University are trained in a high-tech aeronautical engineering lab fully equipped with all the latest tech in the industry. Students are coached for a bright career through employment enhancement programs and entrepreneurship development programs.",
        careers: ["Aeronautical Engineer", "Avionics Engineer", "Aircraft Maintenance Engineer", "Propulsion Engineer"],
      },
      {
        key: "Biotechnology Engineering",
        summary:
          "The Department of Biotechnology at Sandip University is dedicated to merging technology and biology to create a better quality of life for humankind. This field of study integrates different branches of biology such as microbiology, life sciences and molecular biology with engineering principles.",
        careers: ["Clinical Researcher", "Lab Technician", "Pharmacist", "Production Manager"],
      },
    ],
  },
  {
    id: "mtech",
    title: "Master of Technology (M.Tech)",
    duration: "2 Years",
    mode: "Full-Time",
    eligibility: MTECH_ELIGIBILITY,
    specializations: [
      {
        key: "Construction Management",
        summary:
          "Construction management is a branch of civil engineering where engineers are trained to become skilled project managers who can oversee a construction project. These professionals are expected to have excellent managerial skills besides having thorough knowledge about concepts of construction, civil engineering, laws related to contracts, safety of workers and much more.",
        careers: ["Construction Manager", "Construction Engineer", "Civil Engineer", "Engineering Analyst"],
      },
      {
        key: "Environmental Engineering",
        summary:
          "M.Tech. in Environmental Engineering in India is a postgraduate degree program spanning across two years and four semesters. The program is designed to help students understand the complex issues related to the protection of the environment, and the role they can play as professional engineers in this sphere.",
        careers: ["Water Treatment Plant Operator", "Land Surveyor", "Environmental Compliance Specialist", "Transportation Planner"],
      },
      {
        key: "Structural Engineering",
        summary:
          "M.Tech. in Structural Engineering is a competitive postgraduate program under the umbrella of civil engineering. The duration of the program is two years, which are further divided into four semesters. Each semester is designed to help students understand the foundations of structural engineering, design codes, corrosive properties of materials, techniques to follow for structural analysis, and much more.",
        careers: ["Design Services Manager", "Structural Engineer", "Engineering Project Manager", "Transportation Planner"],
      },
      {
        key: "Design Engineering",
        summary:
          "M.Tech. in Design Engineering is a dynamic postgraduate program offered at Sandip University. This is a multidisciplinary research-oriented program that helps students conduct independent study to better understand the fundamentals of design engineering.",
        careers: ["Design Engineer", "Structural Design Engineer", "Mechanical Design Engineer", "Electronic Hardware Design Engineer"],
      },
      {
        key: "Transportation Engineering & Planning",
        summary:
          "The M.Tech. in Transportation Engineering and Planning at Sandip University is a postgraduate program in civil engineering. This program spans across two years and four semesters. The curriculum of this program is designed to help students understand the engineering and managerial aspects of different types of transportation systems.",
        careers: ["Transportation Technician", "Transportation Modeller", "Transportation Executive", "Transport Manager"],
      },
      {
        key: "Electrical Power Systems",
        summary:
          "M.Tech. in Electrical Power System is a cutting-edge postgraduate program offered at Sandip University. The duration of the program is two years and four semesters. The goal of this program is to teach students about the fundamentals, functioning, and dynamics of different kinds of electrical power systems.",
        careers: ["Power Electronics Engineer", "Regulatory Officer", "Application Engineer", "Assistant Chemist"],
      },
      {
        key: "Mechanical Engineering",
        summary:
          "Sandip University's M.Tech in Mechanical Engineering program is a futuristic postgraduate degree program spanning across two years and four semesters. The program provides students with an advanced understanding of concepts and principles associated with mechanical engineering.",
        careers: ["Mechanical Engineer", "Defence Mechanical Engineer", "Production Engineer", "Mechanical Analyst"],
      },
      {
        key: "Valuation (Land-Building)",
        summary:
          "M.Tech in Valuation (Land & Building) at Sandip University, Nashik is a graduate program with great potential. As the title suggests, this course deals with land or building valuations conducted by valuation professionals.",
        careers: ["Valuation Manager - Land & Building", "Valuation Advisory - Real Estate", "Data Analyst", "Data Science"],
      },
      {
        key: "Town and Country Planning",
        summary:
          "Sandip University's Master of Planning (Town and Country Planning) programme assures that competent students are able to make decisions and put them into action to address important environmental and climate change challenges, as well as questions of where and how people should live, travel, and anticipate future changes.",
        careers: ["GIS Technician", "Building Inspector", "Urban Landscaper", "Housing Officer"],
      },
      {
        key: "Electric Vehicles",
        summary:
          "Sandip University's M.Tech in Electric Vehicles is a postgraduate program designed to provide students with a thorough understanding of high-tech electric vehicles. The program is dedicated towards training students with regards to designing and developing futuristic electric vehicles.",
        careers: ["Electric Vehicle Engineer", "Product Planning Manager", "Functional Safety Specialist", "Testing & Validation Engineer"],
      },
    ],
  },
];

const TABS = [
  {
    id: "btech",
    label: "B.Tech",
    title: "Bachelor of Technology",
    hash: "#btech-courses",
    desc: "Undergraduate engineering programmes in aerospace, civil, electrical, mechanical, electronics, aeronautical and biotechnology.",
  },
  {
    id: "mtech",
    label: "M.Tech",
    title: "Master of Technology",
    hash: "#mtech-courses",
    desc: "Advanced postgraduate programmes in construction, structural, environmental, transportation, power systems, EV and more.",
  },
];

/* ----------------------------- theme ----------------------------- */

const C = {
  blue950: "#172554",
  blue900: "#1e3a8a",
  blue800: "#1e40af",
  blue700: "#1d4ed8",
  blue200: "#bfdbfe",
  blue100: "#dbeafe",
  orange700: "#c2410c",
  orange600: "#ea580c",
  orange500: "#f97316",
  orange400: "#fb923c",
  orange200: "#fed7aa",
  orange100: "#ffedd5",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate500: "#64748b",
  slate400: "#94a3b8",
  slate300: "#cbd5e1",
  slate200: "#e2e8f0",
  slate50: "#f8fafc",
  white: "#ffffff",
};

const FONT =
  "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

/* ----------------------------- helpers ----------------------------- */

function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

function useBp() {
  const w = useWidth();
  return { sm: w >= 640, md: w >= 768, lg: w >= 1024 };
}

const goToForm = () =>
  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });

const NAV = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Recruiters", id: "recruiters" },
  { label: "Campus Life", id: "campus-life" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Contact Us", id: "enquire" },
];

const goTo = (id) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Container({ children, style }) {
  const { sm } = useBp();
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: 1152,
        margin: "0 auto",
        padding: sm ? "0 24px" : "0 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, center = true, light = false }) {
  const { sm } = useBp();
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {eyebrow && (
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: light ? C.orange400 : C.orange600,
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          margin: "8px 0 0",
          fontSize: sm ? 36 : 30,
          fontWeight: 700,
          lineHeight: 1.2,
          color: light ? C.white : C.slate900,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Btn({ href, onClick, style, hoverStyle, children, type }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : type || "button"}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        textDecoration: "none",
        border: "none",
        fontFamily: "inherit",
        transition: "background-color .2s, transform .2s",
        ...style,
        ...(hover ? hoverStyle : {}),
      }}
    >
      {children}
    </Tag>
  );
}

function HoverCard({ style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "transform .2s, box-shadow .2s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 10px 25px rgba(15,23,42,.12)" : "0 1px 2px rgba(15,23,42,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Field({ as = "input", style, ...props }) {
  const [focus, setFocus] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        padding: "11px 12px",
        fontSize: 14,
        fontFamily: "inherit",
        color: C.slate900,
        background: C.white,
        borderRadius: 8,
        outline: "none",
        border: `1px solid ${focus ? C.orange600 : C.slate300}`,
        boxShadow: focus ? `0 0 0 3px ${C.orange200}` : "none",
        ...style,
      }}
    />
  );
}

/* ----------------------------- lead form ----------------------------- */

function LeadForm() {
  const { sm } = useBp();
  const [data, setData] = useState({ name: "", phone: "", email: "", program: "", city: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST `data` to your CRM / backend
    // TODO: fire Google Ads conversion, e.g. gtag_report_conversion();
    console.log("Lead:", data);
    setSent(true);
  };

  const card = {
    boxSizing: "border-box",
    background: C.white,
    borderRadius: 16,
    padding: sm ? 32 : 24,
    boxShadow: "0 25px 50px rgba(0,0,0,.3)",
  };

  if (sent) {
    return (
      <div style={{ ...card, textAlign: "center", padding: 32 }}>
        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "#dcfce7",
            color: "#16a34a",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✓
        </div>
        <h3 style={{ margin: 0, fontSize: 20, color: C.slate900 }}>Thank you!</h3>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: C.slate600 }}>
          Our admission counsellor will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>
        Apply / Get a Free Callback
      </h3>
      <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate500 }}>Takes less than a minute.</p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Field name="name" placeholder="Full name" required value={data.name} onChange={onChange} />
        <Field name="phone" type="tel" placeholder="Mobile number" required pattern="[0-9+\- ]{10,15}" value={data.phone} onChange={onChange} />
        <Field name="email" type="email" placeholder="Email address" required value={data.email} onChange={onChange} />
        <Field name="city" placeholder="City" value={data.city} onChange={onChange} />
        <Field as="select" name="program" required value={data.program} onChange={onChange}>
          <option value="">Select programme</option>
          {CONTENT.programs.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </Field>
      </div>
      <Btn
        type="submit"
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px 16px",
          borderRadius: 8,
          background: "rgb(216 10 18)",
          color: C.white,
          fontSize: 16,
          fontWeight: 600,
        }}
        hoverStyle={{ background: C.orange700 }}
      >
        Submit Enquiry
      </Btn>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 12, color: C.slate400 }}>
        By submitting, you agree to be contacted by Sandip University.
      </p>
    </form>
  );
}

/* ----------------------------- sections ----------------------------- */

function Header() {
  const { sm, lg } = useBp();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.slate200}`,
      }}
    >
      <Container style={{ display: "flex", height: 64, alignItems: "center", justifyContent: "space-between", gap: 16, maxWidth: 1180 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <img
            src={universityLogo}
            alt={CONTENT.brand}
            style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
          />
        </div>

        {lg && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV.map((n) => (
              <Btn
                key={n.id}
                onClick={() => go(n.id)}
                style={{ padding: "8px 10px", background: "none", color: C.slate700, fontSize: 14, fontWeight: 600, borderRadius: 6 }}
                hoverStyle={{ color: C.orange600 }}
              >
                {n.label}
              </Btn>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          {sm && (
            <Btn
              onClick={goToForm}
              style={{ padding: "8px 20px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
              hoverStyle={{ background: "#000" }}
            >
              Apply Now
            </Btn>
          )}
          {!lg && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ background: "none", border: `1px solid ${C.slate300}`, borderRadius: 8, width: 40, height: 40, fontSize: 20, cursor: "pointer", color: C.slate700 }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </Container>

      {!lg && menuOpen && (
        <nav style={{ background: C.white, borderTop: `1px solid ${C.slate200}`, padding: "8px 16px 16px", display: "flex", flexDirection: "column" }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              style={{ textAlign: "left", padding: "12px 4px", background: "none", border: "none", borderBottom: `1px solid ${C.slate200}`, fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: C.slate700, cursor: "pointer" }}
            >
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { sm, lg } = useBp();
  return (
    <section id="home" style={{ position: "relative", overflow: "hidden", background: C.blue950 }}>
      <img
        src={IMG.hero}
        alt="Students working in the science laboratory"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to right, ${C.blue950}, rgba(23,37,84,.8), transparent)`,
        }}
      />
      <Container
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: lg ? "1fr 1fr" : "1fr",
          alignItems: "center",
          gap: 40,
          paddingTop: lg ? 80 : 56,
          paddingBottom: lg ? 80 : 56,
        }}
      >
        <div style={{ color: C.white }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 999,
              background: "rgb(216 10 18)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {CONTENT.heroTag}
          </span>
          <h1 style={{ margin: "20px 0 0", fontSize: sm ? 48 : 36, fontWeight: 700, lineHeight: 1.15 }}>
            {CONTENT.heroTitle}
          </h1>
          <h5 style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 18, lineHeight: 1.6, color: "#fff" }}>
            {CONTENT.heroSub}
          </h5>
          <p style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 15, lineHeight: 1.6, color: C.blue100 }}>
            {CONTENT.para}
          </p>

          {/* SU-DAT exam notice (hidden for now). To show it again, remove the comment markers.
          <div
            style={{
              marginTop: 24,
              maxWidth: 576,
              padding: "16px 20px",
              borderRadius: 12,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.25)",
              borderLeft: "4px solid rgb(216 10 18)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div style={{ fontSize: sm ? 20 : 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 5 }}>
              {CONTENT.datNotice.titlee}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>
              {CONTENT.datNotice.title}
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                flexDirection: sm ? "row" : "column",
                alignItems: sm ? "center" : "flex-start",
                gap: sm ? 20 : 10,
              }}
            >
              <div>
                <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "red", fontWeight: 700, marginBottom: 4 }}>
                  {CONTENT.datNotice.lastDateLabel}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{CONTENT.datNotice.lastDate}</div>
              </div>

              <div
                aria-hidden="true"
                style={{
                  width: sm ? 1 : "100%",
                  height: sm ? 36 : 1,
                  background: "rgba(255,255,255,.35)",
                }}
              />

              <div>
                <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "red", fontWeight: 700, marginBottom: 4 }}>
                  {CONTENT.datNotice.examLabel}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{CONTENT.datNotice.examDate}</div>
              </div>
            </div>
          </div>
          */}

          <ul
            style={{
              listStyle: "none",
              margin: "24px 0 0",
              padding: 0,
              display: "grid",
              gridTemplateColumns: sm ? "1fr 1fr" : "1fr",
              gap: 8,
            }}
          >
            {CONTENT.heroPoints.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgb(216 10 18)",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div id="enquire" style={{ scrollMarginTop: 96 }}>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const { md } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)" }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
          gap: 24,
          padding: "32px 24px",
          textAlign: "center",
          color: C.white,
        }}
      >
        {CONTENT.stats.map((s) => (
          <div key={s.label}>
            <p style={{ margin: 0, fontSize: 30, fontWeight: 800 }}>{s.value}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: C.orange100 }}>{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function About() {
  const { sm, lg } = useBp();
  return (
    <section id="about" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container style={{ display: "grid", gridTemplateColumns: lg ? "1fr 1fr" : "1fr", alignItems: "center", gap: 40 }}>
        <div>
          <SectionTitle eyebrow="Who we are" title={CONTENT.aboutTitle} center={false} />
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, color: C.slate600, lineHeight: 1.7 }}>
            {CONTENT.aboutText.map((t) => (
              <p key={t} style={{ margin: 0 }}>{t}</p>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Talk to a Counsellor
          </Btn>
        </div>
        <img
          src={IMG.campus}
          alt="Sandip University campus"
          loading="lazy"
          style={{
            width: "100%",
            height: lg ? 380 : 240,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 20px 40px rgba(15,23,42,.2)",
          }}
        />
      </Container>
    </section>
  );
}

/* ----------------------------- programmes ----------------------------- */

function DegreePanel({ degree }) {
  const { sm, md } = useBp();
  const [tab, setTab] = useState(0);
  const spec = degree.specializations[tab];

  return (
    <div
      style={{
        boxSizing: "border-box",
        background: C.white,
        border: `1px solid ${C.slate200}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(15,23,42,.08)",
      }}
    >
      <div style={{ background: "rgb(216 10 18)", color: C.white, padding: sm ? "28px 32px" : "24px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "#000", fontSize: 12, fontWeight: 600 }}>
            {degree.duration}
          </span>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,.15)", fontSize: 12, fontWeight: 600 }}>
            {degree.mode}
          </span>
        </div>
        <h3 style={{ margin: "12px 0 0", fontSize: sm ? 30 : 24, fontWeight: 800 }}>{degree.title}</h3>
        <p style={{ margin: "16px 0 8px", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
          Choose Specialization
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {degree.specializations.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setTab(i)}
              aria-pressed={tab === i}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${tab === i ? C.orange600 : "rgba(255,255,255,.4)"}`,
                background: tab === i ? "#000" : "transparent",
                color: C.white,
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color .2s, border-color .2s",
              }}
            >
              {s.key}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: md ? "1.2fr 1fr" : "1fr",
          gap: md ? 40 : 28,
          padding: sm ? "32px" : "24px 20px",
        }}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{spec.key} — Summary</h4>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: C.slate600 }}>{spec.summary}</p>

          <h4 style={{ margin: "28px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>Eligibility</h4>
          <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {(spec.eligibility ?? degree.eligibility).map((e) => (
              <li key={e} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, color: C.slate700 }}>
                <span style={{ color: C.orange600, fontWeight: 700 }}>✓</span>
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ boxSizing: "border-box", background: C.slate50, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24, alignSelf: "start" }}>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>Career Opportunities</h4>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {spec.careers.map((c) => (
              <span
                key={c}
                style={{ padding: "8px 14px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
              >
                {c}
              </span>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Enquire for {spec.key} →
          </Btn>
        </div>
      </div>
    </div>
  );
}

function Programs() {
  const { sm } = useBp();
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const degree = DEGREES.find((d) => d.id === tab.id);

  // Hash links (#btech-courses, #mtech-courses) switch the tab
  useEffect(() => {
    const syncFromHash = () => {
      const i = TABS.findIndex((t) => t.hash === window.location.hash);
      if (i !== -1) setActive(i);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="courses" style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      {/* anchors so links to these ids still scroll here */}
      <span id="btech-courses" style={{ display: "block", scrollMarginTop: 64 }} />
      <span id="mtech-courses" style={{ display: "block", scrollMarginTop: 64 }} />

      <Container>
        <SectionTitle eyebrow="Programmes" title={tab.title} />
        {tab.desc && (
          <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
            {tab.desc}
          </p>
        )}

        {/* Filter tabs: flat, one row, underline on active */}
        <div
          role="tablist"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            marginTop: 40,
            marginBottom: 24,
            borderBottom: `2px solid ${C.slate200}`,
          }}
        >
          {TABS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  padding: sm ? "16px 12px" : "12px 6px",
                  background: "transparent",
                  border: "none",
                  borderBottom: `3px solid ${isActive ? C.orange600 : "transparent"}`,
                  marginBottom: -2,
                  color: isActive ? "rgb(216 10 18)" : C.slate600,
                  fontFamily: "inherit",
                  fontSize: sm ? 17 : 15,
                  fontWeight: isActive ? 800 : 600,
                  cursor: "pointer",
                  transition: "color .2s, border-color .2s",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* key resets the specialization tab when the degree changes */}
        <DegreePanel key={degree.id} degree={degree} />
      </Container>
    </section>
  );
}

function Highlights() {
  const { sm, lg } = useBp();
  return (
    <section id="why-us" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow="Why choose us" title="What Makes Our School Different" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(3, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.highlights.map((h, i) => (
            <div key={h.title} style={{ boxSizing: "border-box", border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{h.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{h.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- campus life ----------------------------- */

function CarouselArrow({ dir, onClick, top }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        top,
        [dir]: 4,
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        lineHeight: 1,
        color: hover ? C.white : C.slate900,
        background: hover ? C.orange600 : "rgba(255,255,255,.92)",
        boxShadow: "0 4px 12px rgba(15,23,42,.25)",
        transition: "background-color .2s, color .2s",
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}

function CampusCard({ item, imgH }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxSizing: "border-box",
        height: "100%",
        overflow: "hidden",
        background: C.white,
        borderRadius: 20,
        boxShadow: hover ? "0 14px 30px rgba(15,23,42,.18)" : "0 4px 14px rgba(15,23,42,.10)",
        transition: "box-shadow .3s",
      }}
    >
      <div style={{ overflow: "hidden", height: imgH, background: `linear-gradient(135deg, ${C.blue900}, ${C.orange600})` }}>
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .5s",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>{item.title}</h3>
        <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: C.slate600 }}>{item.text}</p>
      </div>
    </div>
  );
}

function CampusLife() {
  const { sm, md } = useBp();
  const perView = md ? 2 : 1;
  const pages = Math.ceil(CAMPUS.length / perView);
  const imgH = md ? 300 : sm ? 260 : 210;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const page = Math.min(index, pages - 1);

  const next = () => setIndex((page + 1) % pages);
  const prev = () => setIndex((page - 1 + pages) % pages);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (Math.min(i, pages - 1) + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [paused, pages]);

  return (
    <section
      id="campus-life"
      style={{
        padding: sm ? "80px 0" : "64px 0",
        scrollMarginTop: 64,
        background: `linear-gradient(to bottom, ${C.orange100}, ${C.white} 35%, ${C.slate50})`,
      }}
    >
      <Container>
        <SectionTitle eyebrow="Life at Sandip" title="Campus Life" />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          Learning, creativity, fitness and community — everything you need for a complete university experience.
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: "relative", marginTop: 40 }}
        >
          <CarouselArrow dir="left" onClick={prev} top={imgH / 2 + 8} />
          <CarouselArrow dir="right" onClick={next} top={imgH / 2 + 8} />

          <div style={{ overflow: "hidden", margin: "0 -12px", padding: "8px 0 24px" }}>
            <div
              style={{
                display: "flex",
                transform: `translateX(-${page * 100}%)`,
                transition: "transform .6s ease",
              }}
            >
              {CAMPUS.map((item) => (
                <div
                  key={item.title}
                  style={{ boxSizing: "border-box", flex: `0 0 ${100 / perView}%`, padding: "0 12px" }}
                >
                  <CampusCard item={item} imgH={imgH} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === page ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === page ? C.orange600 : C.slate300,
                transition: "width .3s, background-color .3s",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const { sm, lg } = useBp();
  const items = [
    { src: IMG.mscMaths, alt: "Students examining circuit experiment boards in the lab", title: "Hands-on Experiments", text: "Students learn by building and testing circuits and experiments." },
    { src: IMG.mscPhysics, alt: "Students operating measuring instruments in the physics lab", title: "Instrumentation Lab", text: "Practical sessions with precision measuring instruments." },
    { src: IMG.phdPhysics, alt: "Researchers working with lab equipment at a workbench", title: "Advanced Research Lab", text: "Well-equipped benches for experiments and research projects." },
    { src: IMG.phdZoology, alt: "Students working in the computer lab", title: "Computer & Data Lab", text: "Modern computing facilities for data analysis and simulation." },
  ];
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Inside our labs" title="Learning in Action" />
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr", gap: 24 }}>
          {items.map((it) => (
            <article
              key={it.title}
              style={{ overflow: "hidden", background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 16, boxShadow: "0 1px 2px rgba(15,23,42,.06)" }}
            >
              <img src={it.src} alt={it.alt} loading="lazy" style={{ display: "block", width: "100%", height: 288, objectFit: "cover" }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{it.title}</h3>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  const { sm } = useBp();
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Careers" title="Where a Design Degree Can Take You" />
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {CONTENT.careers.map((c) => (
            <span
              key={c}
              style={{ padding: "8px 20px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Admission process" title="4 Simple Steps to Get Started" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.steps.map((s, i) => (
            <div key={s.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{s.title}</h3>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate600 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Recruiters() {
  const { sm, md } = useBp();
  return (
    <section
      id="recruiters"
      style={{ background: C.blue950, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}
    >
      <Container>
        <SectionTitle eyebrow="Placements" title="Our Recruiters" light />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.blue200, lineHeight: 1.6 }}>
          Leading fashion, lifestyle, beauty and design brands hire and mentor our students.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
            gap: sm ? 20 : 12,
          }}
        >
          {RECRUITERS.map((r) => (
            <HoverCard
              key={r.name}
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: sm ? 140 : 110,
                padding: 16,
                background: C.white,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <img
                src={r.src}
                alt={r.name}
                loading="lazy"
                style={{ display: "block", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </HoverCard>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Start Your Journey
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const { sm } = useBp();
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container style={{ maxWidth: 768 }}>
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          {CONTENT.faqs.map((f, i) => (
            <div key={f.q} style={{ background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 12 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.slate900,
                }}
              >
                {f.q}
                <span style={{ marginLeft: 16, fontSize: 20, color: C.orange600 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p style={{ margin: 0, padding: "0 20px 16px", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  const { sm } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)", padding: "64px 0", textAlign: "center", color: C.white }}>
      <Container>
        <h2 style={{ margin: 0, fontSize: sm ? 36 : 30, fontWeight: 700 }}>Ready to Start Your Engineering and Technology  Journey?</h2>
        <p style={{ margin: "12px auto 0", maxWidth: 576, color: C.blue100 }}>
          Limited seats. Talk to our admission team today.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: sm ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: "#000", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Apply Now
          </Btn>
          <Btn
            href={CONTENT.phoneHref}
            style={{ padding: "12px 32px", borderRadius: 999, border: "1px solid rgba(255,255,255,.7)", background: "transparent", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: "rgba(255,255,255,.1)" }}
          >
            📞 Call {CONTENT.phone}
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { md } = useBp();
  return (
    <footer style={{ padding: md ? "15px 0" : "32px 0 96px", textAlign: "center", fontSize: 14, color: C.slate700 }}>
      <Container>
        <img
          src={universityLogo}
          alt={CONTENT.brand}
          style={{ height: 48, width: "auto", objectFit: "contain", display: "block", margin: "0 auto" }}
        />
        <p style={{ margin: "12px 0 0" }}>{CONTENT.footerAddress}</p>
        <p style={{ margin: "12px 0 0", fontSize: 12 }}>
          © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function StickyMobileBar() {
  const { md } = useBp();
  if (md) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        background: C.white,
        borderTop: `1px solid ${C.slate200}`,
      }}
    >
      <a
        href={CONTENT.phoneHref}
        style={{ flex: 1, padding: "12px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.blue900, textDecoration: "none" }}
      >
        📞 Call Now
      </a>
      <button
        onClick={goToForm}
        style={{ flex: 1, padding: "12px 0", border: "none", background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}
      >
        Apply Now
      </button>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function SchoolOfDesignLanding() {
  return (
    <div style={{ fontFamily: FONT, color: C.slate700, WebkitFontSmoothing: "antialiased" }}>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Careers />
      <Highlights />
      <CampusLife />
      {/* <Showcase /> */}
      <Process />
      <Recruiters />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}