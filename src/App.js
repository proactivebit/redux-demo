import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import "./App.css";
import { StarWarsCharacters } from "./components/StarWarsCharacters";
import { store } from "./redux-toolkit/store";

function App() {
  return (
    <Provider store={store}>
      <div
        className="App"
        style={{ width: "40rem", margin: "auto", padding: "40px 0" }}
      >
        <StarWarsCharacters />
        {/* <Row>
          <Col>
            <CreateHuman />
            <HumanList />
          </Col>
          <Col>
            <CreateTask />
            <TaskList />
          </Col>
        </Row> */}
        {/* <hr />
        <NewItemFormContainer></NewItemFormContainer>
        <hr />
        <MenuItemsContainer></MenuItemsContainer>
        <hr />
        <SummaryContainers /> */}
      </div>
    </Provider>
  );
}

export default App;
