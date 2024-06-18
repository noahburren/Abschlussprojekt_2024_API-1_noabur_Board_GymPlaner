import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Exercises = () => {
  const { category } = useParams();
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const userId = 1; // Example user ID. Replace with actual user ID from your auth system.

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/exercises/${category}`
        );
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [category]);

  const handleSelectExercise = (exercise) => {
    setSelectedExercises((prev) =>
      prev.includes(exercise)
        ? prev.filter((e) => e !== exercise)
        : [...prev, exercise]
    );
  };

  const handleSaveExercises = async () => {
    try {
      await axios.post("http://localhost:8081/user-exercises", {
        userId,
        category,
        exercises: selectedExercises,
      });
      alert("Exercises saved successfully!");
    } catch (error) {
      console.error("Error saving exercises:", error);
      alert("Error saving exercises.");
    }
  };

  return (
    <div>
      <h1>Übungen für {category}</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.ID}>
            <label>
              <input
                type="checkbox"
                checked={selectedExercises.includes(exercise)}
                onChange={() => handleSelectExercise(exercise)}
              />
              {exercise.NAME}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSaveExercises}>Save Exercises</button>
    </div>
  );
};

export default Exercises;
