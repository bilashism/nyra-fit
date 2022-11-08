import React, { useState } from "react";
import { useEffect } from "react";
import Testimonial from "../../components/Testimonial";
const APP_SERVER = import.meta.env.VITE_APP_SERVER;

const TestimonialsSection = ({ serviceId }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${APP_SERVER}/testimonials?serviceId=${serviceId}`)
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-8">
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
