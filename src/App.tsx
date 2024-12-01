import './App.css'
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const tarotCards = [
  { name: "The Fool", meaning: "Today marks a new beginning. Embrace the unknown and infinite possibilities ahead." },
  { name: "The Magician", meaning: "You have the power to manifest your dreams. Focus and channel your energy into your goals." },
  { name: "The High Priestess", meaning: "Trust your intuition. Your inner wisdom will guide you to success." },
  { name: "The Empress", meaning: "Creativity and abundance surround you. Enjoy the beauty of life today." },
  { name: "The Emperor", meaning: "Today is a great day for planning and pursuing your goals with confidence." },
  { name: "The Hierophant", meaning: "Seek knowledge and wisdom from traditions or mentors. An important insight is coming your way." },
  { name: "The Lovers", meaning: "Relationships flourish with harmony today. Love and support are all around you." },
  { name: "The Chariot", meaning: "Charge ahead with determination. Victory is within your reach!" },
  { name: "Strength", meaning: "You possess incredible inner strength. Stay confident and overcome any challenges." },
  { name: "The Hermit", meaning: "Take some time for introspection. You’ll find new inspiration and clarity." },
  { name: "Wheel of Fortune", meaning: "Luck is turning in your favor. Expect positive changes to unfold." },
  { name: "Justice", meaning: "Fairness and integrity are your allies. Stand by your principles, and you’ll be rewarded." },
  { name: "The Hanged Man", meaning: "A new perspective brings new opportunities. Embrace change." },
  { name: "Death", meaning: "The end of an old cycle leads to a fresh start. Transformation brings growth." },
  { name: "Temperance", meaning: "Harmony and balance define your day. Embrace peace and stability." },
  { name: "The Devil", meaning: "Break free from any limitations. You have the strength to overcome fears and doubts." },
  { name: "The Tower", meaning: "Change brings growth. Today is the start of something transformative." },
  { name: "The Star", meaning: "A day full of hope and inspiration. Follow your dreams with renewed energy." },
  { name: "The Moon", meaning: "Your creativity and imagination will guide you to new possibilities." },
  { name: "The Sun", meaning: "A joyful and successful day is ahead. Bask in the positive energy around you." },
  { name: "Judgement", meaning: "It’s time for awakening and renewal. Embrace the challenges of the future." },
  { name: "The World", meaning: "A day of fulfillment and achievement. You are moving towards a brighter future." },
];


const App = () => {
  const [todayTarot, setTodayTarot] = useState(null);
  const [canCheckIn, setCanCheckIn] = useState(true);

  useEffect(() => {
    const lastCheckIn = localStorage.getItem("lastCheckIn");
    const today = dayjs().format("YYYY-MM-DD");

    if (lastCheckIn === today) {
      setCanCheckIn(false);
    }
  }, []);

  const handleCheckIn = () => {
    if (!canCheckIn) return;

    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const chosenCard = tarotCards[randomIndex];

    setTodayTarot(chosenCard);
    localStorage.setItem("lastCheckIn", dayjs().format("YYYY-MM-DD"));
    setCanCheckIn(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Daily tarot fortune</h1>
      {todayTarot ? (
        <div>
          <h2>{todayTarot.name}</h2>
          <p>{todayTarot.meaning}</p>
        </div>
      ) : (
        <p>{canCheckIn ? "Click to sign in to get today’s fortune" : "You have already signed in today!"}</p>
      )}
      <button
        onClick={handleCheckIn}
        disabled={!canCheckIn}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: canCheckIn ? "pointer" : "not-allowed",
        }}
      >
        {canCheckIn ? "Sign in" : "Signed in"}
      </button>
    </div>
  );
};

export default App
