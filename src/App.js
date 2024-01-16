

const App = () => {
  const getMessages = async () => {
    const options = {
      method: "POST",
      body : JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {
      console.log("1")
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log("5")
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

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
            <div id="submit" onClick={getMessages}>^</div>
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
