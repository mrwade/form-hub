import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import Dashboard from "./screens/Dashboard";

const URL = process.env.REACT_APP_GRAPHQL_HOST
  ? `https://${process.env.REACT_APP_GRAPHQL_HOST}.onrender.com/graphql`
  : "http://localhost:8000/graphql";

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
