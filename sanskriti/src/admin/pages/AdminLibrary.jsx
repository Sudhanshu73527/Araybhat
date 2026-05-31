import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const BASE_URL =
  "https://araybhat-lrjj.onrender.com";

const AdminLibrary = () => {

  const [formData, setFormData] =
    useState({
      heading: "",
      subHeading: "",
      description: "",
      quote: "",
    });

  const [image1, setImage1] =
    useState(null);

  const [image2, setImage2] =
    useState(null);


  // ======================
  // FETCH LIBRARY
  // ======================

  const fetchLibrary = async () => {

    try {

      const res =
        await axios.get(
          `${BASE_URL}/api/library`
        );

      if (res.data) {

        setFormData({
          heading:
            res.data.heading,
          subHeading:
            res.data.subHeading,
          description:
            res.data.description,
          quote:
            res.data.quote,
        });
      }

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchLibrary();
  }, []);


  // ======================
  // HANDLE CHANGE
  // ======================

  const handleChange = (e) => {

    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };


  // ======================
  // SUBMIT
  // ======================

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      const data =
        new FormData();

      data.append(
        "heading",
        formData.heading
      );

      data.append(
        "subHeading",
        formData.subHeading
      );

      data.append(
        "description",
        formData.description
      );

      data.append(
        "quote",
        formData.quote
      );

      if (image1) {
        data.append(
          "image1",
          image1
        );
      }

      if (image2) {
        data.append(
          "image2",
          image2
        );
      }

      const res =
        await axios.put(
          `${BASE_URL}/api/library/update`,
          data,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

      alert(res.data.message);

      fetchLibrary();

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );
    }
  };


  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-8">
        Update Library
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5"
      >

        <input
          type="text"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          placeholder="Heading"
          className="border p-3 rounded-lg"
        />

        <textarea
          name="subHeading"
          value={formData.subHeading}
          onChange={handleChange}
          placeholder="Sub Heading"
          className="border p-3 rounded-lg"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-3 rounded-lg"
        />

        <input
          type="text"
          name="quote"
          value={formData.quote}
          onChange={handleChange}
          placeholder="Quote"
          className="border p-3 rounded-lg"
        />

        {/* IMAGE 1 */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage1(
              e.target.files[0]
            )
          }
        />

        {/* IMAGE 2 */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage2(
              e.target.files[0]
            )
          }
        />

        <button className="bg-black text-white py-3 rounded-xl cursor-pointer">
          Update Library
        </button>

      </form>

    </div>
  );
};

export default AdminLibrary;