import "./App.css";
import { Container, Typography } from "@mui/material";
import Order from "./components/Order";

function App() {
  return (
    <Container maxWidth="md">
      <Typography varient="h2" align="center">
        Restaurant App New
      </Typography>
      <Order />
    </Container>
  );
}

export default App;
