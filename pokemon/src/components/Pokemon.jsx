import React from 'react';

const Pokemon = ({ pokemon }) => {
    return (
        <div className="pokemon">
            {pokemon.map(p => (
                <div>
                    <h4 style={{ marginLeft: "10px", display: "flex" }}>{p.name}</h4>
                </div>
            ))}
        </div>
    )
}

export default Pokemon;