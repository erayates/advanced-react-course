import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { styled } from "styled-components";
import "./App.css";
import Nav from "./components/common/nav";

import Books from "./components/books/books-list";

import ProtectedRoute from "./components/common/protected-route";
import { useState } from "react";
import Admin from "./components/admin/admin";

const AppContainer = styled.div`
  margin: 60px auto;
  width: 400px;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 28px;
`;

function App() {
  const [authenticated] = useState(false);
  return (
    <AppContainer>
      <Router>
        <Content>
          <Nav />
          <Routes>
            <Route path="/*" element={<Books />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute
                  to={"/"}
                  element={<Admin />}
                  authenticated={authenticated}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Content>
      </Router>
    </AppContainer>
  );
}

export default App;
