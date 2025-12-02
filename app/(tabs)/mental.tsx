import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { saveEntry, loadAllEntries, loadLatestEntry } from "../utils/storage";

export default function Mental() {
  const [mood, setMood] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const latest = loadLatestEntry("mental");
    if (latest) setMood(latest.mood);
    setHistory(loadAllEntries("mental"));
  }, []);

  const handleSave = () => {
    saveEntry("mental", { mood });
    setHistory(loadAllEntries("mental"));
  };

  return (
    <div className="container">
      <h1>Mental Health Tracker</h1>

      <div className="card">
        <h2>Mood</h2>
        <textarea
          placeholder="How do you feel today?"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
        <button className="button" onClick={handleSave}>Save Mood</button>
      </div>

      <div className="card">
        <h2>History</h2>
        {history.length === 0 && <p>No history yet.</p>}
        {history.map((entry, idx) => (
          <p key={idx}>{entry.date}: {entry.mood}</p>
        ))}
      </div>
    </div>
  );
}
