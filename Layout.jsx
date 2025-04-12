import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


// Import images from the assets folder
import img1 from "../assets/img 1.jpg";
 import img2 from "../assets/img 2.jpg";

import img3 from "../assets/img 3.jpeg"
import img4 from "../assets//img 4.jpeg";
import img5 from "../assets/img 5.jpeg";
import img6 from "../assets/img 6.jpeg";
import img7 from "../assets/img 7.jpeg";
import img8 from "../assets/img 8.jpeg";
import img9 from "../assets/img 9.jpeg";
import img10 from "../assets/img 10.jpeg";

const LayoutPage = () => {
  // Use the imported images in the array
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="min-h-screen px-8 py-16 bg-white">
      {/* Top Two-Column Section */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column (optional content or leave empty) */}
        <div className="md:w-1/2 w-full bg-gray-100 rounded-lg h-[300px] flex items-center justify-center">
          {/* You can add an image or leave empty */}
          <p className="text-gray-400 text-xl">Left Column (optional)</p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 w-full space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Creative Solutions</h1>
            <p className="text-xl text-gray-600 mt-2">
              We make unique & memorable brands
            </p>
          </div>

          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque lorem in voluptate
              velit iusto odio dignissimos duci esse.
              <br /><br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="mt-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          loop
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-lg w-full h-68 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LayoutPage;