import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#d5a557] text-white py-8 ">
      <div className="max-w-full sm:max-w-3xl md:max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Informazioni di contatto */}
        <div className="flex flex-col md:flex-row items-start gap-6 text-center">
          <a
            href="tel:348 1619769"
            className="text-lg text-gray-600 hover:underline"
          >
            📱 348 1619769
          </a>
          <a
            href="mailto:macooosa@gmail.com"
            className="text-lg text-gray-600 hover:underline"
          >
            ✉️ macooosa@gmail.com
          </a>
          <p className="text-lg text-gray-600 ">
            🏠 Via Toscana 86, Parma, Italia
          </p>
        </div>

        {/* Social media */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:underline"
          >
            <FaInstagram size={24} /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 text-gray-600 hover:underline"
          >
            <FaTiktok size={24} /> TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
