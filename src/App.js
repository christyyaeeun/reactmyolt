// import { BrowserRouter as Router } from "react-router-dom";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Header } from "./containers/Header";
import * as React from "react";
import { Navigation, UserProfile, Journal, Homepage } from "./components";
import { Footer } from "./containers/Footer";
import { SignInHeader } from "./containers/SignInHeader";
import { SignInFooter } from "./containers/SignInFooter";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

Amplify.configure(awsExports);

const Home = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <>
      <Navigation />
      <div className="container-login">
        <h2>Welcome, {user.username}!</h2>
        <button className="signOutBtn" onClick={signOut}>
          Sign Out
        </button>
        <SignInFooter />
        <Footer />
      </div>
    </>
  );
};

const Login = () => <Authenticator />;

function App() {
  const { route } = useAuthenticator((context) => [context.route]);
  if (route === "authenticated" ? <Home /> : <Login />) {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/userprofile" element={<UserProfile />}></Route>
            <Route path="/journal" element={<Journal />}></Route>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default function AppWithProvider() {
  return (
    <>
      <Authenticator.Provider>
        <div className="heading">
          <Container className="heading-container">
            <Header />
            <SignInHeader />
          </Container>
          <App></App>

          <Footer />
        </div>

        <SignInFooter />
      </Authenticator.Provider>
    </>
  );
}
