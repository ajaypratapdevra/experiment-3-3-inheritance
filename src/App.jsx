// src/App.jsx
import { Person, Student, Teacher } from './classes/PersonClasses';
import PersonCard from './PersonCard';
import './App.css';

function App() {
  // Creating instances (Objects) of our classes
  const people = [
    new Person("Ajay Devra", 45, "ajay@example.com"),
    new Student("Rahul Kumar", 20, "rahul@uni.edu", "S12345", "Computer Science"),
    new Teacher("Dr. Smith", 50, "smith@uni.edu", "Mathematics", 75000)
  ];

  return (
    <div className="app-container">
      <h1>Class Hierarchy Experiment</h1>
      <p>Demonstrating Inheritance & Polymorphism</p>
      
      <div className="card-grid">
        {people.map((person, index) => (
          <PersonCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default App;