import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import axios from "axios";
import { Loader } from "./Loader";
import Navbar from "./Navbar";

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);
  const [anime, setAnime] = useState([]);
  const [character, setCharacter] = useState([]);
  const temp_quote = [];
  const temp_anime = [];
  const temp_character = [];

  const copyText = (i) => {
    navigator.clipboard.writeText(quote[i.index]);
    alert("Quote copied to clipboard 😊");
  };

  useEffect(
    () => {
      axios
        .get("https://animechan.vercel.app/api/quotes")
        .then((res) => {
          setLoading(true);
          handleData(res.data);
        })
        .catch((err) => {
          console.log("Error= " + err);
        });
    },
    // eslint-disable-next-line
    []
  );

  const handleNewQuote = (e) => {
    e.preventDefault();
    axios
      .get("https://animechan.vercel.app/api/quotes")
      .then((res) => {
        setLoading(true);
        handleData(res.data);
      })
      .catch((err) => {
        console.log("Error= " + err);
      });
  };

  const handleData = (res) => {
    for (let i = 0; i < 10; i++) {
      temp_quote.push(res[i].quote);
      temp_anime.push(res[i].anime);
      temp_character.push(res[i].character);
    }
    setQuote(temp_quote);
    setAnime(temp_anime);
    setCharacter(temp_character);
  };

  return (
    <>
      {loading ? (
        <div>
          <div className="hero">
            <Navbar />
            <div className="search-box">
              <h1>finding quotes made easier</h1>
              <p>enjoy the quotes of your favorite characters</p>
              <button
                type="button"
                className="new-quote-button"
                onClick={(e) => handleNewQuote(e)}
              >
                get new quotes
              </button>
            </div>
          </div>
          <div>
            {/* ten quotes */}
            <div className="tenquotes">
              <div className="quote-container">
                {quote.map((data, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div key={index} className="quote-card-left">
                        <div className="quote-card">
                          <button
                            style={{ cursor: "pointer" }}
                            className="copy-quotes"
                            onClick={() => copyText({ index })}
                          >
                            <i className="far fa-copy fa-2x"></i>
                          </button>
                          <h2>{quote[index]}</h2>
                          <p>anime: {anime[index]}</p>
                          <p>character: {character[index]}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className="quote-card-right">
                        <div className="quote-card">
                          <button
                            style={{ cursor: "pointer" }}
                            className="copy-quotes"
                            onClick={() => copyText({ index })}
                          >
                            <i className="far fa-copy fa-2x"></i>
                          </button>
                          <h2>{quote[index]}</h2>
                          <p>anime: {anime[index]}</p>
                          <p>character: {character[index]}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
