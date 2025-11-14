// memoizationWithUseMemo.jsx
import { useState, useMemo } from "react";

// naive recursive fibonacci (slow without memoization)
const slowFib = (n) => {
  console.log("Computing slowFib(", n, ")");
  if (n <= 1) return n;
  return slowFib(n - 1) + slowFib(n - 2);
};

export default function MemoSimple() {
  const [n, setN] = useState(10);
  const [tick, setTick] = useState(0); // used to force re-renders without changing `n`

  // useMemo caches the result until `n` changes
  const result = useMemo(() => slowFib(n), [n]);

  const recompute = () => {
    // this forces a re-render but useMemo prevents re-running slowFib if `n` hasn't changed
    setTick((t) => t + 1);
  };

  return (
    <>
      <div>
        <label> 
          n:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            min="0"
            style={{ width: 80, marginLeft: 8 }}
          />
        </label>
        <button onClick={recompute} style={{ marginLeft: 8 }}>
          Compute Fibonacci (re-render)
        </button>
        <p>
          fib({n}) = {result}
        </p>
        <p style={{ fontSize: 12, color: "#666" }}>
          Note: open the console — "Computing slowFib(...)" appears only when n changes.
        </p>
      </div>
    </>
  );
}
