function Home({ goToCalc }) {
  return (
    <div className="home">
      <h1>Calculator</h1>
      <p>Fast • Offline • Keyboard Enabled</p>
      <button onClick={goToCalc}>Open Calculator</button>
    </div>
  );
}

export default Home;
