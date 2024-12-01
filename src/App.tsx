import './App.css'
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const tarotCards = [
  { name: "The Fool", meaning: "Today marks a new beginning. Embrace the unknown and infinite possibilities ahead.", image: "/image/tarot/愚者.jpg" },
  { name: "The Magician", meaning: "You have the power to manifest your dreams. Focus and channel your energy into your goals.", image: "/image/tarot/魔术师.jpg" },
  { name: "The High Priestess", meaning: "Trust your intuition. Your inner wisdom will guide you to success.", image: "/image/tarot/女祭司.jpg" },
  { name: "The Empress", meaning: "Creativity and abundance surround you. Enjoy the beauty of life today.", image: "/image/tarot/女皇.jpg" },
  { name: "The Emperor", meaning: "Today is a great day for planning and pursuing your goals with confidence.", image: "/image/tarot/皇帝.jpg" },
  { name: "The Hierophant", meaning: "Seek knowledge and wisdom from traditions or mentors. An important insight is coming your way.", image: "/image/tarot/教皇.jpg" },
  { name: "The Lovers", meaning: "Relationships flourish with harmony today. Love and support are all around you.", image: "/image/tarot/恋人.jpg" },
  { name: "The Chariot", meaning: "Charge ahead with determination. Victory is within your reach!", image: "/image/tarot/战车.jpg" },
  { name: "Strength", meaning: "You possess incredible inner strength. Stay confident and overcome any challenges.", image: "/image/tarot/力量.jpg" },
  { name: "The Hermit", meaning: "Take some time for introspection. You’ll find new inspiration and clarity.", image: "/image/tarot/隐士.jpg" },
  { name: "Wheel of Fortune", meaning: "Luck is turning in your favor. Expect positive changes to unfold.", image: "/image/tarot/命运之轮.jpg" },
  { name: "Justice", meaning: "Fairness and integrity are your allies. Stand by your principles, and you’ll be rewarded.", image: "/image/tarot/正义.jpg" },
  { name: "The Hanged Man", meaning: "A new perspective brings new opportunities. Embrace change.", image: "/image/tarot/倒吊人.jpg" },
  { name: "Death", meaning: "The end of an old cycle leads to a fresh start. Transformation brings growth.", image: "/image/tarot/死神.jpg" },
  { name: "Temperance", meaning: "Harmony and balance define your day. Embrace peace and stability.", image: "/image/tarot/节制.jpg" },
  { name: "The Devil", meaning: "Break free from any limitations. You have the strength to overcome fears and doubts.", image: "/image/tarot/恶魔.jpg" },
  { name: "The Tower", meaning: "Change brings growth. Today is the start of something transformative.", image: "/image/tarot/高塔.jpg" },
  { name: "The Star", meaning: "A day full of hope and inspiration. Follow your dreams with renewed energy.", image: "/image/tarot/星星.jpg" },
  { name: "The Moon", meaning: "Your creativity and imagination will guide you to new possibilities.", image: "/image/tarot/月亮.jpg" },
  { name: "The Sun", meaning: "A joyful and successful day is ahead. Bask in the positive energy around you.", image: "/image/tarot/太阳.jpg" },
  { name: "Judgement", meaning: "It’s time for awakening and renewal. Embrace the challenges of the future.", image: "/image/tarot/审判.jpg" },
  { name: "The World", meaning: "A day of fulfillment and achievement. You are moving towards a brighter future.", image: "/image/tarot/世界.jpg" },
];


const App = () => {
  const [todayTarot, setTodayTarot] = useState(null);
  const [canCheckIn, setCanCheckIn] = useState(true);

  useEffect(() => {
    const lastCheckIn = localStorage.getItem("lastCheckIn");
    const today = dayjs().format("YYYY-MM-DD");

    if (lastCheckIn === today) {
      const savedCard = JSON.parse(localStorage.getItem("signedInCard"));
      if (savedCard) {
        setTodayTarot(savedCard);
        setCanCheckIn(false);
      }
    }
  }, []);

  const handleCheckIn = () => {
    if (!canCheckIn) return;

    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const chosenCard = tarotCards[randomIndex];

    localStorage.setItem("lastCheckIn", dayjs().format("YYYY-MM-DD"));
    localStorage.setItem("signedInCard", JSON.stringify(chosenCard));
    setTodayTarot(chosenCard);
    setCanCheckIn(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Daily tarot fortune</h1>
      {todayTarot ? (
        <div>
          <h2>{todayTarot.name}</h2>
          <img src={todayTarot.image} alt={todayTarot.name} style={{width:"200px",borderRadius:"10px"}} />
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
