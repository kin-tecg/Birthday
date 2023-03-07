import React from "react";

const List = ({ people, deleteIndividual }) => {
    return (
        <React.Fragment>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className="person">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years old</p>
                            <button className="deleteButton" onClick={() => deleteIndividual(id)}>
                                Delete
                            </button>
                        </div>
                    </article>
                );
            })}
        </React.Fragment>
    );
};

export default List;
