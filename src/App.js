import "./App.css";

import { useEffect, useState } from "react";

import Folder from "./components/Folder/Folder";
import api from "./utils/api";

function App() {
  const [folders, setFolders] = useState({
    children: [],
  });

  useEffect(() => {
    const getData = async () => {
      const res = await api.get();
      setFolders(res);
    };

    getData();
  }, []);

  return (
    <div className="App">
      {folders.children.length ? (
        folders.children.map((folder, index) => (
          <Folder folder={folder} key={index} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
