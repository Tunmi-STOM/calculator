function History({ history }) {
  return (
    <div className="history">
      <h3>History</h3>
      {history.map((h, i) => (
        <p key={i}>{h.exp} = {h.res}</p>
      ))}
    </div>
  );
}
export default History;
