import korderImg from "../assets/orderapp.png";
import deyzoraImg from "../assets/deyzora-design.png";
import studyStacksImg from "../assets/studenapp.png";

const projects = [
  {
    id: 1,
    title: "Keshav Krupa Order Management (Korder)",
    subtitle: "Wholesale Order & Invoice System",
    category: "Full Stack",
    description:
      "A software system built for managing wholesale business orders. It has separate logins for Admin, Staff, and Customers, handles order approvals, generates invoice PDFs, and keeps track of payments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shavuparmar/Korder",
    live: "https://ksorder.vercel.app",
    featured: true,
    image: korderImg,
  },
  {
    id: 2,
    title: "Deyzora Infotech",
    subtitle: "Agency Website & Service Portfolio",
    category: "Frontend & Design",
    description:
      "A creative agency website created to showcase web development, UI design, and branding services. Features clean layouts, service showcases, and contact workflows.",
    tech: ["React", "Tailwind CSS", "UI/UX Design", "Vercel"],
    github: "https://github.com/shavuparmar",
    live: "https://deyzora.vercel.app",
    featured: true,
    image: deyzoraImg,
  },
  {
    id: 3,
    title: "ChartMentors",
    subtitle: "Educational Learning Platform",
    category: "Full Stack",
    description:
      "An educational portal where students can browse courses, access study materials, and complete payments with Razorpay, while administrators manage course uploads and student records.",
    tech: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Razorpay"],
    github: "#",
    live: "https://chartmentors.in",
    featured: true,
  },
  {
    id: 4,
    title: "Patil Mobile Website",
    subtitle: "Mobile Repair Shop Website",
    category: "Frontend",
    description:
      "A responsive website for a mobile repair and accessories shop. Customers can check service estimates, view available accessories, and contact the shop directly on WhatsApp.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/shavuparmar/rajgormobile",
    live: "https://patilmobile.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Freshy — Internship Marketplace",
    subtitle: "Student Internship Discovery Platform",
    category: "Full Stack",
    description:
      "A platform built to connect students with internship opportunities. Includes student profiles, job listings, and application tracking.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shavuparmar",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Autoron — Vehicle Service System",
    subtitle: "Garage & Service Management Software",
    category: "Full Stack",
    description:
      "A vehicle service management system to help garages track repair job cards, vehicle statuses, customer details, and spare parts inventory.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/shavuparmar",
    live: "#",
    featured: false,
  },
  {
    id: 7,
    title: "A1T — All In One Tools",
    subtitle: "Productivity & Developer Utilities",
    category: "Frontend",
    description:
      "A clean collection of everyday web utilities including text formatters, unit converters, markdown preview, and calculation tools in one fast interface.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/shavuparmar",
    live: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Jingalala Browser",
    subtitle: "Lightweight Custom Web Browser",
    category: "Systems & Python",
    description:
      "A simple, lightweight desktop web browser built with Python for distraction-free navigation and low resource usage.",
    tech: ["Python", "PyQt / WebEngine", "JavaScript"],
    github: "https://github.com/shavuparmar",
    live: "#",
    featured: false,
  },
  {
    id: 9,
    title: "StudyStacks",
    subtitle: "Student Notes & College Resources",
    category: "Full Stack",
    description:
      "A student-focused platform where college students can upload, find, and download notes, previous exam papers, and syllabus materials.",
    tech: ["React", "Tailwind CSS", "MongoDB", "Express"],
    github: "https://github.com/shavuparmar/Collegedocs",
    live: "https://studystacks.vercel.app",
    featured: false,
    image: studyStacksImg,
  },
  {
    id: 10,
    title: "Suhani Fast Food",
    subtitle: "Restaurant Menu Website",
    category: "Frontend",
    description:
      "A modern restaurant website showcasing daily menu items, special combos, pricing, and takeaway order details.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    github: "https://github.com/shavuparmar/suhani-fast-food",
    live: "https://suhanifastfood.vercel.app",
    featured: false,
  },
  {
    id: 11,
    title: "Dev-Hubs",
    subtitle: "Developer Community Platform",
    category: "Full Stack",
    description:
      "A community platform for learners and developers to share helpful coding snippets, tutorials, and project ideas.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/shavuparmar/Dev-Hubs",
    live: "https://dev-hubs.vercel.app",
    featured: false,
  },
];

export default projects;
