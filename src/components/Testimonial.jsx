import React from "react";

const Testimonial = ({ testimonial }) => {
  const {
    text,
    rating,
    reviewer: { name, email, img, title }
  } = testimonial;

  return (
    <div className="flex flex-wrap  text-gray-600">
      <div className="w-full">
        <div className="h-full bg-gray-100 p-8 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="block w-5 h-5 text-gray-400 mb-4"
            viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <blockquote className="leading-relaxed mb-6 first-letter:uppercase">
            {text}
          </blockquote>
          <a className="inline-flex items-center">
            <img
              alt={name}
              src={img}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              onError={ev =>
                (ev.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 500 500' style='enable-background:new 0 0 500 500;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);%7D .st1%7Bfill:%238A8B8A;%7D .st2%7Bfill:%23FFFFFF;%7D %3C/style%3E%3Cg%3E%3Cdefs%3E%3Ccircle id='SVGID_1_' cx='250' cy='249' r='243'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg id='Page-1' class='st0'%3E%3Cg id='avatar-unknown'%3E%3Crect id='Rectangle' x='-3' y='-1' class='st1' width='500' height='500'/%3E%3Ccircle id='Oval' class='st2' cx='252' cy='211' r='98'/%3E%3Ccircle id='Oval_1_' class='st2' cx='250' cy='502.9' r='185.2'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)
              }
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900 capitalize">
                {name}
              </span>
              <p className="text-gray-500 text-sm">
                {title ? (
                  <span className="capitalize">{title}</span>
                ) : (
                  <span className="">
                    {email.replace(/(\w{2})[\w.-]+@([\w.]+\w)/, "$1***@$2")}
                  </span>
                )}
              </p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
