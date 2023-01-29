import React, { useState } from "react";

function App() {
	const [count, setCount] = useState(0)
	return (
		<div className="App">
			<button onClick={() => setCount(count + 1)}>Add</button>
			<h2>{count} - {count * count}</h2>
		</div>
	);
}

export default App;
