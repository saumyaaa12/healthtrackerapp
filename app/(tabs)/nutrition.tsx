import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { loadAllEntries, loadLatestEntry, saveEntry } from "../utils/storage";

export default function Nutrition() {
  const [meals, setMeals] = useState(0);
  const [calories, setCalories] = useState(0);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const latest = loadLatestEntry("nutrition");
    if (latest) {
      setMeals(latest.meals);
      setCalories(latest.calories);
    }
    setHistory(loadAllEntries("nutrition"));
  }, []);

  const handleSave = () => {
    saveEntry("nutrition", { meals, calories });
    setHistory(loadAllEntries("nutrition"));
  };

  return (
    <div className="container">
      <h1>Nutrition Tracker</h1>

      <div className="card">
        <h2>Meals</h2>
        <p>{meals} / 3 meals</p>
        <button className="button" onClick={() => setMeals(meals + 1)}>Add a meal</button>
      </div>

      <div className="card">
        <h2>Calories</h2>
        <p>{calories} / 2000 kcal</p>
        <button className="button" onClick={() => setCalories(calories + 200)}>Add 200 kcal</button>
      </div>

      <button className="button" onClick={handleSave}>Save Entry</button>

      <div className="card">
        <h2>History</h2>
        {history.length === 0 && <p>No history yet — start tracking today.</p>}
        {history.map((entry, idx) => (
          <p key={idx}>{entry.date}: Meals {entry.meals}, Calories {entry.calories}</p>
        ))}
      </div>
    </div>
  );
}
