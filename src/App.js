import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Hero from "./components/Hero";
import FemaleIcons from "./components/FemaleIcons";
import Helpfulness from "./components/Helpfulness";
import Groups from "./components/Groups";
import AboutAuthor from "./components/AboutAuthor";
import ReviewList from "./components/ReviewList";
import Qa from "./components/Q&A";
import Video from "./components/VideoFragment";
import SectionForm from "./components/SectionForm";
import Footer from "./components/Footer";
import reviews from "./reviews.json";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container>
        <FemaleIcons title="для каждой девушки важно" />
        <Helpfulness title="чем полезен марафон" />
        <Groups title="группы" />
        <AboutAuthor title="автор и спикер" />
        <ReviewList title="отзывы наших учениц" items={reviews} />
        <Qa title="вопросы" />
        <Video title="посмотрите короткий одного из уроков" />
        <SectionForm />
      </Container>
      <Footer />
    </>
  );
}

export default App;
