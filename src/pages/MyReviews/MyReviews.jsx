import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyReviewItem from "./MyReviewItem";
export const MyReviewsContext = createContext();

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const [myServicesLoading, setMyServicesLoading] = useState(true);
  const { user, userLogOut } = useContext(AuthContext);
  const APP_SERVER = import.meta.env.VITE_APP_SERVER;

  useEffect(() => {
    if (!user.email) return;
    fetch(`${APP_SERVER}/myReviews?userEmail=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(`nyraFitToken`)}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          return userLogOut();
        }
        return res.json();
      })
      .then(data => {
        setMyReviews(data);
        setMyServicesLoading(false);
      })
      .catch(err => console.error(err));
  }, [user?.email, userLogOut]);

  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-medium title-font py-4 my-5 text-gray-900 text-center">
        {myReviews?.length ? `My Reviews` : `No reviews are added yet!`}
      </h2>
      {myServicesLoading ? (
        <LoadingCircle />
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {myReviews.map(myReview => (
            <MyReviewsContext.Provider
              key={myReview._id}
              value={{ myReviews, setMyReviews }}>
              <MyReviewItem myReview={myReview} />
            </MyReviewsContext.Provider>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;
