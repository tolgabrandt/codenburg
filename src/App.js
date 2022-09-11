import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/home/Home";
import Offers from "./pages/home/Offers";
import Career from "./pages/career/Career";
import Application from "./pages/career/Application";
import JobList from "./pages/career/JobList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="career" element={<Career />}>
          <Route index element={<JobList />}></Route>
          <Route path="application" element={<Application />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
