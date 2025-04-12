import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import required modules
import { FaComment } from "react-icons/fa";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import multiple images from the assets folder
import img1 from "../assets/img 1.jpg";
import img2 from "../assets/img 2.jpg";
import img3 from "../assets/img 3.jpeg";
import img4 from "../assets/img 4.jpeg";
import img5 from "../assets/img 5.jpeg";

const images = [img1, img2, img3, img4, img5]; // Array of images

const articles = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Creative Article ${i + 1}`,
  image: images[i % images.length], // Cycle through the images
  date: `2025-04-${i + 1 < 10 ? `0${i + 1}` : i + 1}`,
  comments: Math.floor(Math.random() * 20),
}));

const LatestArticle = () => {
  return (
    <div className="bg-white text-black">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Latest Articles</h2>
      </div>

      {/* Swiper Slider */}
      <div className="px-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }} // Enable autoplay
          pagination={{ clickable: true }} // Enable pagination
          modules={[Autoplay, Pagination]} // Add modules
        >
          {articles.map((article) => (
            <SwiperSlide key={article.id}>
              <div className="shadow-lg rounded-lg overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                  <div className="text-sm text-gray-600 flex justify-between mt-2">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <FaComment /> {article.comments}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>

      <footer className="bg-black text-white mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8 py-16 text-gray-400">
          {/* Column 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Office</h3>
            <p>Germany —<br />785 15h Street, Office 478<br />Berlin, De 81566</p>
            <p className="mt-2">info@email.com</p>
            <p className="mt-1">+1 840 841 25 69</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Our Team</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Instagram</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full px-3 py-2 rounded mb-3 text-black"
            />
            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
              Subscribe
            </button>
            <div className="mt-3 flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <label>I agree to the Privacy Policy</label>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
          AxiomThemes © 2025. All Rights Reserved.
        </div>
      </footer>
    </div>
    
  );
};

export default LatestArticle;