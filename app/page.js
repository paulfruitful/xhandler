"use client"
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [twitterHandle, setTwitterHandle] = useState("");
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState("");

  const fetchTweets = async () => {
    if (!twitterHandle) {
      setError("Please enter a Twitter handle.");
      return;
    }
    setError("");
    try {
      const response = await fetch(`/api/getTweets?handle=${twitterHandle}`);
      if (!response.ok) {
        throw new Error("Failed to fetch tweets. Please try again.");
      }
      const data = await response.json();
      setTweets(data.tweets || []);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col text-white items-center justify-center w-full h-[50vh] bg-black p-8">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6">Twitter Handle to Tweets</h1>
      <div className="flex flex-col lg:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter Twitter Handle"
          value={twitterHandle}
          onChange={(e) => setTwitterHandle(e.target.value)}
          className="border w-[50vh] h-[8vh] lg:text-start text-center bg-gray-800 rounded-xl px-3 py-0"
        />
        <button
          onClick={fetchTweets}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Fetch Tweets
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="tweets-container flex flex-col gap-4">
        {tweets.map((tweet, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <p>{tweet.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
