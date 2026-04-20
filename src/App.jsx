import "./App.css";

function App() {
  const cover =
    "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/24/23/de/2423de3e-60a7-b615-c685-21c09588f6fb/199479466261-copy-7fdad258.png/1200x630bf-60.jpg";

  return (
    <div className="container">
      <div className="phone">

        <div className="barra-status"></div>

        <div className="player">

          <div className="top">
            <span>ESCUTANDO AGORA</span>
          </div>

          <img className="foto-album" src={cover} alt="capa" />

          <div className="info">
            <h2>BIG MONEY</h2>
            <p>Alee</p>
          </div>

          <div className="progresso">
            <span>1:12</span>
            <input type="range" defaultValue="30" />
            <span>2:02</span>
          </div>

          <div className="controles">
            <button>⏮</button>
            <button className="play">⏸</button>
            <button>⏭</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;