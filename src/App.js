import DecorativeHeader from "./components/decorativeHeader";
import DecorativeFooter from "./components/decorativeFooter";
import MainContent from "./components/mainContent";
function App() {
  return (
    <div className="App">
      <DecorativeHeader ></DecorativeHeader>
        <MainContent></MainContent>
        <DecorativeFooter></DecorativeFooter>
    </div>
  );
}

export default App;
