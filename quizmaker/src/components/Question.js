function Question({ data, onAnswer }) {
  return (
    <div>
      <h3>{data.question}</h3>

      {data.options.map((opt, index) => (
        <button key={index} onClick={() => onAnswer(index)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Question;
