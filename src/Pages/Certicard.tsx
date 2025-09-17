// src/pages/CertificatePage.tsx
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your certificates
import Googlecloud from "../assets/Certificate/Scalinggoogle.jpg"

interface Certificate {
  id: number;
  src: string;
  title: string;
}

export default function Certicard() {
  const [certificates] = useState<Certificate[]>([
    { id: 1, src: Googlecloud, title: "Scaling with Google Cloud Operations" },
   
  ]);

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="min-h-screen text-white py-10 relative ">
      <h2 className="text-3xl font-bold text-center text-blue-300 mb-8">
        My Certificates
      </h2>

      {/* Slider */}
      <div className="px-6">
        <Slider {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="px-3">
              <div
                className="bg-gray-800 rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="text-center text-gray-300 mt-2">{cert.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for full certificate */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-gray-900 p-4 rounded-xl max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded"
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
  );
}
