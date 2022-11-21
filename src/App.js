import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Hero from "./components/Hero";
// import Groups from "./components/Groups";
// import ReviewList from "./components/ReviewList";
// import reviews from "./reviews.json";

function App() {
  // const isOnline = true;
  return (
    <>
      <Header />
      <Hero />
      <Container></Container>
      {/* {isOnline && "Online"}
      {isOnline ? "Online" : "Offline"}
      <Groups title="Отзывы наших учениц">
        <ReviewList items={reviews} />
      </Groups> */}
    </>
  );
}

export default App;
