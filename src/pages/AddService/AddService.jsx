import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const APP_SERVER = import.meta.env.VITE_APP_SERVER;

  const handleNewService = ev => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.serviceName.value;
    const description = form.serviceDescription.value;
    const img = form.serviceThumbnail.value;
    const imgFull = form.imgFullUrl.value;
    const price = form.servicePrice.valueAsNumber;

    if (!name || !description || !img || !imgFull || !price) return;

    const newService = {
      name,
      description,
      img,
      imgFull,
      price
    };

    fetch(`${APP_SERVER}/service`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem(`nyraFitToken`)}`
      },
      body: JSON.stringify(newService)
    })
      .then(res => res.json())
      .then(data => {
        toast.success(`Service added successfully! 🥳`);
      })
      .catch(err => console.error(err))
      .finally(() => {
        form.reset();
      });
  };
  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 py-4 text-center text-gray-900">
        Add a service
      </h2>
      <div className="">
        <form onSubmit={handleNewService} className="grid gap-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="serviceName"
                id="serviceName"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="serviceName"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Service name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="servicePrice"
                id="servicePrice"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="servicePrice"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="url"
                name="imgFullUrl"
                id="imgFullUrl"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="imgFullUrl"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                HD image URL
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="url"
                name="serviceThumbnail"
                id="serviceThumbnail"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="serviceThumbnail"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Service thumbnail
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <label
              htmlFor="serviceDescription"
              className="block mb-2 text-sm sr-only text-gray-500">
              Service description
            </label>
            <textarea
              id="serviceDescription"
              name="serviceDescription"
              rows="8"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your service description..."
              required></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
