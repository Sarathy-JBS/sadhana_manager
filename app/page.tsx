"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Sadhana } from "../types/Sadhana";

export default function Home() {
  const [formData, setFormData] = useState<Sadhana>({
    date: new Date().toISOString().split("T")[0],
    wakeUpTime: "",
    sleepTime: "",
    chantingRounds: 0,
    bookReadingDuration: 0,
    lectureDuration: 0,
    chantingCompletionTime: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "chantingRounds" ||
        name === "bookReadingDuration" ||
        name === "lectureDuration"
          ? parseInt(value)
          : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sadhana", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Data submitted successfully!");
        setFormData({
          date: new Date().toISOString().split("T")[0],
          wakeUpTime: "",
          sleepTime: "",
          chantingRounds: 0,
          bookReadingDuration: 0,
          lectureDuration: 0,
          chantingCompletionTime: "",
        });
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <h2>We can add more styles later, this is just sample skeleton</h2>
      <h3>Getting imput we can make more interactive in a comfortable way</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Waking Time:
          <input
            type="time"
            name="wakeUpTime"
            value={formData.wakeUpTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Sleeping Time:
          <input
            type="time"
            name="sleepTime"
            value={formData.sleepTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Chanting Rounds:
          <input
            type="number"
            name="chantingRounds"
            value={formData.chantingRounds}
            onChange={handleChange}
          />
        </label>
        <label>
          Book Reading Duration (minutes):
          <input
            type="number"
            name="bookReadingDuration"
            value={formData.bookReadingDuration}
            onChange={handleChange}
          />
        </label>
        <label>
          Lecture Duration (minutes):
          <input
            type="number"
            name="lectureDuration"
            value={formData.lectureDuration}
            onChange={handleChange}
          />
        </label>
        <label>
          Chanting Completed Time:
          <input
            type="time"
            name="chantingCompletionTime"
            value={formData.chantingCompletionTime}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
