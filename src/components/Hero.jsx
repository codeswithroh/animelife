import React, { useEffect, useState } from "react";
import "../styles/Hero.css";
import "../styles/SearchQuotes.css";
import axios from "axios";
import { Loader } from "./Loader";
import Navbar from "./Navbar";
import Select from "react-select";
import { Helmet } from "react-helmet";

export default function Hero() {
  const [animes, setanimes] = useState([]);
  const [search, setsearch] = useState("");
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

      axios
        .get("https://animechan.vercel.app/api/available/anime")
        .then((res) => {
          setanimes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // eslint-disable-next-line
    []
  );

  const handleNewQuote = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
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

  const handleSearch = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    axios
      .get(`https://animechan.vercel.app/api/quotes/anime?title=${search}`)
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          temp_quote.push(res.data[i].quote);
          temp_anime.push(res.data[i].anime);
          temp_character.push(res.data[i].character);
        }
        setQuote(temp_quote);
        setAnime(temp_anime);
        setCharacter(temp_character);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const options = [];
  animes.map((anime) => {
    let data = { value: anime, label: anime };
    return options.push(data);
  });

  return (
    <>
      {loading ? (
        <div>
          <Helmet>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3657933510724518"
              crossorigin="anonymous"
            ></script>
          </Helmet>
          <div className="hero">
            <Navbar />
            <div className="search-box">
              <div className="search-content">
                <Select
                  className="anime-options"
                  options={options}
                  onChange={(e) => setsearch(e.value)}
                />
                <div onClick={(e) => handleSearch(e)} className="search-icon">
                  <i style={{ color: "white" }} className="fas fa-search"></i>
                </div>
              </div>
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
