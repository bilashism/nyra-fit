import React, { useContext, useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Testimonial from "../../components/Testimonial";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import AddReview from "./AddReview";
const APP_SERVER = import.meta.env.VITE_APP_SERVER;
export const TestimonialsContext = createContext();

const TestimonialsSection = ({ serviceId }) => {
  const [testimonials, setTestimonials] = useState([]);
  const { user, authLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="pb-8">
        {authLoading ? (
          <LoadingCircle />
        ) : user?.uid ? (
          <TestimonialsContext.Provider value={{ serviceId, setTestimonials }}>
            <AddReview />
          </TestimonialsContext.Provider>
        ) : (
          <h2 className="pb-4 text-center">
            Please{" "}
            <button
              type="button"
              className="text-purple-600 font-bold hover:underline"
              onClick={() =>
                navigate("/login", {
                  state: { from: location },
                  replace: true
                })
              }>
              Login
            </button>{" "}
            to add a review!{" "}
          </h2>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8">
        {testimonials.map(testimonial => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
