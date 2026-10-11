function Instructions() {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-xs">
      <h2 className="text-lg font-bold mb-2">How to Use</h2>
      <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
        <li>Click the number buttons to type a number.</li>
        <li>Click an operator (+, −, ×, ÷).</li>
        <li>Type the next number.</li>
        <li>Click = to see the answer.</li>
        <li>Click C to clear everything, or ⌫ to delete the last digit.</li>
      </ol>

      <h2 className="text-lg font-bold mt-4 mb-2">Supported Operations</h2>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        <li>Addition (+)</li>
        <li>Subtraction (−)</li>
        <li>Multiplication (×)</li>
        <li>Division (÷)</li>
      </ul>
    </div>
  );
}

export default Instructions;
