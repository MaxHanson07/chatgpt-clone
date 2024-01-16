

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ Chat</button>
        <ul className="history"></ul>
        <nav>
          <p>Made by Max</p>
        </nav>
      </section>
      <section className="main">
        <h1>MaxGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">^</div>
          </div>
          <p className="info">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
