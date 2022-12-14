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
      <main>
        <Hero />
        <Container>
          <div className="background">
            <FemaleIcons title="для каждой девушки важно" />
            <Helpfulness title="чем полезен марафон" />
          </div>
          <Groups title="группы" children />
        </Container>
        <AboutAuthor title="автор и спикер" />
        <Container>
          <ReviewList title="отзывы наших учениц" items={reviews} />
        </Container>
        <Qa title="вопросы" />
        <Container>
          <Video title="посмотрите короткий фрагмент одного из уроков" />
          <SectionForm title="записаться на марафон" />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
