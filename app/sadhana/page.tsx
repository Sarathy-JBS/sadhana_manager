"use client";

import { useEffect, useState } from "react";
import { Sadhana } from "../../types/Sadhana";

export default function SadhanaTable() {
  const [sadhanas, setSadhanas] = useState<Sadhana[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/sadhana");
        const data = await response.json();
        if (data.success) {
          setSadhanas(data.data);
        } else {
          console.error("Failed to fetch data:", data.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Sadhana Records</h1>
      <h4>
        Here we can add charts, or essentials elements, when we are done with
        the basic thing
      </h4>

      <table border={1}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Waking Time</th>
            <th>Sleeping Time</th>
            <th>Chanting Rounds</th>
            <th>Book Reading (mins)</th>
            <th>Lecture (mins)</th>
            <th>Chanting Completed Time</th>
          </tr>
        </thead>
        <tbody>
          {sadhanas.map((sadhana) => (
            <tr key={sadhana.date + sadhana.wakeUpTime}>
              <td>{sadhana.date}</td>
              <td>{sadhana.wakeUpTime}</td>
              <td>{sadhana.sleepTime}</td>
              <td>{sadhana.chantingRounds}</td>
              <td>{sadhana.bookReadingDuration}</td>
              <td>{sadhana.lectureDuration}</td>
              <td>{sadhana.chantingCompletionTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
