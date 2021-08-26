import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./pages/Signup/Signup";
import DeveloperSignUp from "./pages/Developer-Signup/Developer-Signup";
import EmployerSignUp from "./pages/Employer-Signup/Employer-Signup";
import Login from "./pages/Login/Login";
import DeveloperProfile from "./pages/Developer-profile/Developer-profile";
import EmployerProfile from "./pages/Employer-profile/Employer-profile";
import DeveloperLists from "./pages/Developer-Lists/Developer-Lists";
import JobLists from "./pages/Job-Lists/Job-Lists";

import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App bg-gray-100">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/profile/developer"
              component={DeveloperProfile}
            />
            <Route exact path="/profile/employer" component={EmployerProfile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signup/developer" component={DeveloperSignUp} />
            <Route exact path="/signup/employer" component={EmployerSignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/view/developers" component={DeveloperLists} />
            <Route exact path="/view/jobs" component={JobLists} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
