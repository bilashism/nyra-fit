import React, { useEffect, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { MyReviewsContext } from "./MyReviews";

const MyReviewItem = ({ myReview }) => {
  const { _id, text, serviceId } = myReview;
  const [serviceData, setServiceData] = useState();
  const { myReviews, setMyReviews } = useContext(MyReviewsContext);
  const { user } = useContext(AuthContext);
  const APP_SERVER = import.meta.env.VITE_APP_SERVER;

  useEffect(() => {
    if (!user.email) return;
    fetch(`${APP_SERVER}/service/${serviceId}`, {})
      .then(res => res.json())
      .then(data => {
        setServiceData(data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = id => {
    const confirm = window.confirm(`Are you sure to delete?`);
    if (confirm) {
      fetch(`${APP_SERVER}/testimonial/${id}`, {
        method: "delete",
        headers: {
          authorization: `Bearer ${localStorage.getItem(`nyraFitToken`)}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount >= 1) {
            toast.success("Deleted successfully!");
            const newReviews = myReviews.filter(
              myReview => myReview._id !== id
            );
            setMyReviews(newReviews);
          }
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="flex flex-col justify-between w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md relative isolate  p-4">
      <div className="flex justify-end absolute right-4 backdrop-blur-lg rounded">
        <div className="group relative flex ">
          <button
            type="button"
            title="Card menu"
            className=" w-10 h-10 rounded">
            <svg
              className="w-6 h-6 inline-flex fill-purple-800"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
            </svg>
          </button>
          <nav className="border bg-white invisible border-gray-800 w-40 absolute right-0 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Hide
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center flex-grow">
        {serviceData?.img ? (
          <img
            className="mb-3 h-40 rounded object-cover shadow-lg"
            src={serviceData.img}
            alt={serviceData?.name}
            width="470"
            height="314"
            decoding="async"
            fetchpriority="low"
            loading="lazy"
          />
        ) : (
          <LoadingCircle />
        )}

        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          {serviceData?.name ? serviceData?.name : <LoadingCircle />}
        </h5>
        <p className="text-sm text-gray-500 first-letter:uppercase flex-grow">
          {text}
        </p>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <button
            type="button"
            onClick={() => handleDelete(_id)}
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
            Delete
          </button>
          <button
            type="button"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewItem;
