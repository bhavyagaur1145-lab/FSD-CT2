import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AddMemberPage from "./pages/AddMemberPage";
import ViewMembersPage from "./pages/ViewMembersPage";
import MemberDetailsPage from "./pages/MemberDetailsPage";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-member" element={<AddMemberPage />} />
          <Route path="/members" element={<ViewMembersPage />} />
          <Route path="/members/:id" element={<MemberDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

