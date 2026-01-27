function Home({ goToCalc }) {
  return (
    <div className="home">
      <h1>Scientific Calculator</h1>
      <p>Fast • Keyboard Enabled</p>
      <button onClick={goToCalc}>Open Calculator</button>
    </div>
  );
}

export default Home;
