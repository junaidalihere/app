import { useEffect, useState } from "react";
import { Header } from "./componets/Header";
import Music from "./componets/Music";
import { Sidebar } from "./componets/Sidebar";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sinput, Setinput] = useState("");
  const [song, Setsongs] = useState([]);

  const [show, Setshow] = useState(false);
  function cellme() {
    Setshow(!show);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  async function songCell() {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
      sinput
    )}&media=music&limit=14`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      Setsongs(data.results);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  }

  useEffect(() => {
    songCell();
  });

  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        Setinput={Setinput}
        sinput={sinput}
        songCell={songCell}
        show={show}
        Setshow={Setshow}
        cellme={cellme}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className={`heading ${show ? "head" : ""}`}>
        {song.map((e) => (
          <Music
            key={e.trackId}
            name={e.trackName}
            artist={e.artistName}
            album={e.collectionName}
            previewUrl={e.previewUrl}
            artworkUrl={e.artworkUrl100}
          />
        ))}
      </div>
    </>
  );
}

export default App;
