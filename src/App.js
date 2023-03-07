import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
    const [people, setPeople] = useState(data);

    const clearAll = () => {
        setPeople([]);
    };

    const deleteIndividual = (id) => {
        console.log(id);
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <main>
            <section className="container">
                <h3> {people.length} birthdays today</h3>
                <List people={people} deleteIndividual={deleteIndividual} />
                <button onClick={() => clearAll()} className="clearButton">
                    Clear all
                </button>
            </section>
        </main>
    );
}

export default App;
