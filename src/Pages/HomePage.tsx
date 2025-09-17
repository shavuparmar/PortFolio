import { useState, useEffect } from "react";
import heroImage from "../assets/Monster.gif"; // Replace with your image path
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiCoffee } from "react-icons/bi";
import { BsSnapchat } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { Link } from "react-router-dom";
import GoogleCloud from "../assets/Certificate/Scalinggoogle.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Certificate type
interface Certificate {
  id: number;
  src: string;
  title: string;
}

const titles = ["Web Developer", "Graphics Designer", "UI/UX Designer"];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  const [certificates] = useState<Certificate[]>([
    { id: 1, src: GoogleCloud, title: "Scaling with Google Cloud Opeations" },
    
  ]);

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (typingForward) {
      if (typingIndex < titles[titleIndex].length) {
        timeout = setTimeout(() => setTypingIndex(typingIndex + 1), 150);
      } else {
        timeout = setTimeout(() => setTypingForward(false), 1500);
      }
    } else {
      if (typingIndex > 0) {
        timeout = setTimeout(() => setTypingIndex(typingIndex - 1), 100);
      } else {
        setTypingForward(true);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }
    setCurrentTitle(titles[titleIndex].slice(0, typingIndex));
    return () => clearTimeout(timeout);
  }, [typingIndex, typingForward, titleIndex]);

  return (
    <div className=" text-gray-200 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed w-full bg-gray-900 bg-opacity-95 backdrop-blur-md z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <div className="text-3xl font-bold cursor-pointer select-none">
            Shavu Parmar
          </div>

          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {["Home", "About", "Projects","certificate", "Skills", "Contact",].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-gray-200 mb-1 transition-transform ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-200 mb-1 transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-200 transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></div>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-md shadow-inner">
            <ul className="flex flex-col space-y-4 p-6 text-xl font-semibold">
              {["Home", "About", "Projects","certificate", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-blue-500 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-full mb-50 flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-16"
      >
        <div
          className="md:w-1/2 text-center  md:text-left space-y-6"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-blue-500">Shavu Parmar</span>
          </h1>
          <h2 className="text-3xl font-semibold text-blue-400 h-12">
            {currentTitle}
            <span className="blinking-cursor">|</span>
          </h2>
          <p className="text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
            Passionate about crafting beautiful and performant digital
            experiences by blending design and development. Continuously
            learning and exploring the latest technologies.
          </p>
          <div
            className="
  flex flex-wrap justify-center 
  md:justify-start 
  gap-4 md:gap-6 
  mt-6 
  text-2xl 
  sm:text-3xl 
  md:text-2xl 
  lg:text-3xl
"
          >
            <a
              href="mailto:parmarshavu009@gmail.com"
              aria-label="Email"
              className="hover:text-blue-500 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/shavuparmar"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shavuparmar"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/parmarshavu"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="hover:text-blue-500 transition"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://buymeacoffee.com/shavuparmar"
              target="_blank"
              rel="noreferrer"
              aria-label="Buy Me A Coffee"
              className="hover:text-blue-500 transition"
            >
              <BiCoffee />
            </a>
            <a
              href="https://snapchat.com/add/imshavuparmar"
              target="_blank"
              rel="noreferrer"
              aria-label="Snapchat"
              className="hover:text-blue-500 transition"
            >
              <BsSnapchat />
            </a>
            <a
              href="https://figma.com/@shavuparmar"
              target="_blank"
              rel="noreferrer"
              aria-label="Figma"
              className="hover:text-blue-500 transition"
            >
              <FiFigma />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src={heroImage}
            alt="Shavu Parmar"
            className="
        w-full
        max-w-xs
        sm:max-w-sm
        md:max-w-md
        lg:max-w-lg
        xl:max-w-xl
        2xl:max-w-2xl
        h-auto
        rounded-xl
        transition-transform duration-300 ease-in-out
        hover:scale-110
        mx-auto
        
  "
          />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl  mx-auto px-6 py-20 -mt-80 text-center md:text-left"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300 space-y-4">
          <span className="block mb-4">
            A <strong className="text-blue-400">full-stack developer</strong>,{" "}
            <strong className="text-blue-400">UI/UX designer</strong>, and{" "}
            <strong className="text-blue-400">creative technologist</strong>{" "}
            based in 🇮🇳 India.
          </span>

          <span className="block mb-4">
            I specialize in building responsive, accessible, and beautiful web
            applications that blend intuitive design with clean, scalable code.
            With a strong foundation in{" "}
            <strong className="text-blue-400">React</strong>,{" "}
            <strong className="text-blue-400">Node.js</strong>,{" "}
            <strong className="text-blue-400">Tailwind CSS</strong>, and tools
            like <strong className="text-blue-400">Figma</strong> and{" "}
            <strong className="text-blue-400">Photoshop</strong>, I bridge the
            gap between functionality and user experience.
          </span>

          <span className="block mb-2 font-semibold text-blue-300">
            🧠 What Drives Me
          </span>
          <span className="block mb-4">
            I'm passionate about solving real-world problems through code and
            design. I believe that technology should feel natural, empowering,
            and inclusive — and I love crafting digital experiences that achieve
            just that.
          </span>
          <span className="block mb-4">
            From brainstorming innovative UI/UX concepts to deploying fully
            functional web platforms, I'm hands-on at every step. Whether it's a
            personal passion project or a team collaboration, I bring energy,
            curiosity, and a design-first mindset to the table.
          </span>
          <span className="block mb-4">
            <a
              href="/about"
              className="cursor-pointer text-white hover:text-slate-500"
            >
              More About Me
            </a>
          </span>

          <span className="block mb-2 font-semibold text-blue-300">
            🛠️ What I Work With
          </span>
          <span className="block mb-2">
            <strong className="text-blue-400">Languages & Frameworks:</strong>{" "}
            JavaScript, TypeScript, React, Node.js, Express, Next.js
          </span>
          <span className="block mb-2">
            <strong className="text-blue-400">Styling & UI:</strong> Tailwind
            CSS, Sass, CSS3, HTML5, Framer Motion
          </span>
          <span className="block mb-2">
            <strong className="text-blue-400">Design Tools:</strong> Figma,
            Adobe XD, Photoshop, Illustrator
          </span>
          <span className="block mb-2">
            <strong className="text-blue-400">Dev Tools:</strong> Git, GitHub,
            Netlify, Vercel, Firebase
          </span>
          <span className="block mb-4">
            <strong className="text-blue-400">Others:</strong> REST APIs,
            MongoDB, UI Prototyping, Responsive Design
          </span>

          <span className="block mb-2 font-semibold text-blue-300">
            🌱 Currently Learning
          </span>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Advanced animations with GSAP & Framer Motion</li>
            <li>Type-safe backend with TypeScript & tRPC</li>
            <li>Building fast, scalable apps with Next.js 14</li>
            <li>Improving accessibility and inclusive design</li>
          </ul>

          <span className="block mt-6 mb-2 font-semibold text-blue-300">
            🚀 My Mission
          </span>
          <span className="block">
            To grow as a creative developer who not only writes functional code
            but also crafts delightful user experiences. I aim to build tools
            and platforms that make a positive impact — whether it's through
            design, development, or open-source collaboration.
          </span>
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto -mt-30 px-6 py-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          Projects
        </h2>
        <div className="grid gap-10 md:grid-cols-3  ">
          {[
            {
              title: "Dev-Hubs",
              description:
                "A React + TailwindCSS community platform for developers to connect and share.",
              Tools: "React + Tailwindcss",
              link: "https://github.com/shavuparmar/dev-hubs",
            },
          ].map(({ title, description, link, Tools }, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:shadow-gray-500 transition-shadow duration-300 transition-transform duration-300 border hover:border-blue-500"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                {title}
              </h3>
              <p className="text-gray-400 mb-5">{description}</p>
              <p className="bg-gray-800 w-full rounded-xl py-2 px-4 cursor-default shadow-md hover:shadow-gray-500 transition-shadow duration-300 text-lg font-semibold text-blue-300 select-none">
                {Tools}
              </p>

              {/* Redirect Button */}
              <button
                onClick={() => (window.location.href = link)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2  cursor-pointer px-6 rounded transition-colors rounded-xl duration-300"
              >
                Visit
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Certificate Section */}
      <section id="certificate">
  <div className="text-white py-10 relative -mt-20 mb-10 ">
    <h2 className="text-3xl font-bold text-center text-blue-300 mb-8">
      My Certificates
    </h2>

    {/* Slider */}
    <div className="px-4 sm:px-6 md:px-10 lg:px-16">
      <Slider
        {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 640,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 1280,
              settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
          ],
        }}
      >
        {certificates.map((cert) => (
          <div key={cert.id} className="px-2 sm:px-3">
            <div
              className="rounded-xl shadow-md p-3 sm:p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
              />
              <p className="text-center text-gray-300 mt-2 text-sm sm:text-base">
                {cert.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Modal for full certificate */}
    {selectedCert && (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4"
        onClick={() => setSelectedCert(null)}
      >
        <div
          className="relative bg-gray-900 p-4 rounded-xl max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-lg"
            onClick={() => setSelectedCert(null)}
          >
            ✕
          </button>

          {/* Full certificate image */}
          <img
            src={selectedCert.src}
            alt={selectedCert.title}
            className="w-full max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    )}
  </div>
</section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto -mt-30 px-6 py-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "React",
            "Tailwind CSS",
            "Node.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Figma",
            "Photoshop",
            "Git",
            "Github",
            "Netlify",
            "Vercel",
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl py-3 px-4 cursor-default shadow-md hover:shadow-blue-500 transition-shadow duration-300 text-lg font-semibold text-blue-300 select-none"
              data-aos="flip-left"
              data-aos-delay={i * 100}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Snapchat Camera Lens Section*/}
      <section
        id="Lens"
        className="max-w-7xl mx-auto -mt-30 px-6 py-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center  text-blue-400">
          {" "}
          Snapchat Filter's
        </h2>

        <div className="grid gap-10 md:grid-cols-3  ">
          {[
            {
              title: "BeardBoss Vibes",
              description: "A Filter for Snapchat that show a beard in face ",
              Tools: "Create with Snapchat Lens Studio",
              link: "https://snapchat.com/add/imshavuparmar",
            },
            {
              title: "SmoothAura",
              description:
                "A Filter for Snapchat that clean face & Show a UserName in top of left side ",
              Tools: "Create with Snapchat Lens Studio",
              link: "https://snapchat.com/add/imshavuparmar",
            },
            {
              title: "CleanFace",
              description:
                "A Filter for Snapchat that clean face & just a simple filter ",
              Tools: "Create with Snapchat Lens Studio",
              link: "https://snapchat.com/add/imshavuparmar",
            },
          ].map(({ title, description, link, Tools }, i) => (
            <div
              key={i}
              className="bg-yellow-300 rounded-2xl p-6 shadow-lg transform hover:scale-105 hover:shadow-gray-500 transition-shadow duration-300 transition-transform duration-300 border hover:border-yellow-900"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-semibold mb-3 text-black">
                {title}
              </h3>
              <p className="text-gray-900 mb-5">{description}</p>
              <p className="bg-gray-800 w-full rounded-xl py-2 px-4 cursor-default shadow-md hover:shadow-gray-500 transition-shadow duration-300 text-lg font-semibold text-blue-300 select-none">
                {Tools}
              </p>

              {/* Redirect Button */}
              <button
                onClick={() => (window.location.href = link)}
                className="mt-4 bg-blue-900 hover:bg-blue-600 text-white font-medium py-2  cursor-pointer px-6 rounded transition-colors rounded-xl duration-300"
              >
                Create a snap with filter
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto -mt-30 px-6 py-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-400">
          Contact Me
        </h2>
        <div className="text-center">
          <Link
            to={"/forum"}
            className="bg-gray-800 rounded-xl py-3 px-4 cursor-default shadow-md hover:shadow-slate-500 transition-shadow duration-300 text-lg font-semibold text-blue-300 cursor-pointer"
          >
            {" "}
            Contact Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-6 text-center text-gray-500 text-sm select-none">
        © 2025 Shavu Parmar. All rights reserved.
      </footer>

      {/* Blinking cursor style */}
      <style>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
