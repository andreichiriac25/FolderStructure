import "./App.css";

import { memo, useEffect, useState } from "react";

import Folder from "./components/Folder/Folder";
import api from "./utils/api";

const MemoizedFolder = memo(Folder);

function App() {
  const [folders, setFolders] = useState({
    children: [],
  });
  const [other, setOther] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get();
      setFolders(res);
    };

    getData();
  }, []);

  const toggleOther = () => {
    setOther((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div>
        {folders.children.length ? (
          folders.children.map((folder, index) => (
            <MemoizedFolder folder={folder} key={index} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <button onClick={toggleOther}>Toggle Other</button>
      {other && <div>Other stuff</div>}
    </div>
  );
}

export default App;
