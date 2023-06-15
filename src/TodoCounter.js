import React from "react";

function TodoCounter({ total, completed }) {
  return (
    <div>
      <h1>
        Has completado {completed} de {total} TODOs
      </h1>
    </div>
  );
}

export { TodoCounter };
