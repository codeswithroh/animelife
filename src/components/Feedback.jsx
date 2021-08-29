import React, { useState, useEffect } from "react";
import "../styles/Feedback.css";
import axios from "axios";
import Navbar from "./Navbar";
import { Loader1 } from "./Loader";

export default function Feedback() {
  const [name, setname] = useState("");
  const [feedback, setfeedback] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  const submitFeedback = (e) => {
    e.preventDefault();
    axios
      .post("https://animelife-backend.herokuapp.com/animelife/feedback/add", {
        name: name,
        feedback: feedback,
      })
      .then((res) => {
        setname("");
        setfeedback("");
        alert("Thanks a lot for the feedback");
      })
      .catch((err) => {
        alert("We are facing some difficulty, please come back later");
      });
  };
  return (
    <>
      {loader ? (
        <Loader1 />
      ) : (
        <div className="feedback-container">
          <Navbar />
          <form
            onSubmit={(e) => submitFeedback(e)}
            className="feedback-content"
          >
            <h2>Your feedback will make us better</h2>
            <div className="feedback-area">
              <input
                type="text"
                placeholder="Enter your name here"
                className="name"
                minLength="5"
                maxLength="40"
                required={true}
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
              <textarea
                className="feedback"
                placeholder="Enter your feedback here"
                // cols="35"
                // rows="7"
                minLength="4"
                maxLength="300"
                required={true}
                value={feedback}
                onChange={(e) => setfeedback(e.target.value)}
              ></textarea>
              <button
                onSubmit={(e) => submitFeedback(e)}
                type="submit"
                className="send-feedback"
              >
                Send Feedback
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
