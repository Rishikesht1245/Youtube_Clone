import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Feed, VideoDetails, SearchResult } from "./components";
import { AppContext } from "./context/contextApi";
const App = () => {
  return (
    <AppContext>
      <Router>
        {/* passed as props.children */}
        <div className="flex flex-col h-full">
          {/* Header will be common and will be available in all routes */}
          <Header />
          <Routes>
            {/* exact will make the onload page as feed */}
            <Route path="/" exact element={<Feed />} />
            {/* For Search query */}
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            {/* For Videos Individual Page */}
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
};
export default App;
