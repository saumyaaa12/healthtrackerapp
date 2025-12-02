import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { saveEntry, loadAllEntries, loadLatestEntry } from "../utils/storage";

export default function Index() {
  const [water, setWater] = useState(0);
  const [steps, setSteps] = useState(0);
  const [workout, setWorkout] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const latest = loadLatestEntry("daily");
    if (latest) {
      setWater(latest.water);
      setSteps(latest.steps);
      setWorkout(latest.workout);
    }
    setHistory(loadAllEntries("daily"));
  }, []);

  const handleSave = () => {
    const entry = { water, steps, workout };
    saveEntry("daily", entry);
    setHistory(loadAllEntries("daily"));
  };

  return (
    <div className="container">
      <h1>Daily Health Tracker</h1>

      <div className="card">
        <h2>Water</h2>
        <p>{water} / 8 glasses</p>
        <button className="button" onClick={() => setWater(water + 1)}>Drink a glass</button>
      </div>

      <div className="card">
        <h2>Steps</h2>
        <p>{steps} / 8000 steps</p>
        <button className="button" onClick={() => setSteps(steps + 500)}>Add 500 steps</button>
      </div>

      <div className="card">
        <h2>Workout</h2>
        <p>{workout} / 30 mins</p>
        <button className="button" onClick={() => setWorkout(workout + 5)}>Add 5 mins</button>
      </div>

      <button className="button" onClick={handleSave}>Save Entry</button>

      <div className="card">
        <h2>History</h2>
        {history.length === 0 && <p>No history yet — start tracking today.</p>}
        {history.map((entry, idx) => (
          <p key={idx}>
            {entry.date}: Water {entry.water}, Steps {entry.steps}, Workout {entry.workout} mins
          </p>
        ))}
      </div>
    </div>
  );
}
