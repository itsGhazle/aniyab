import Associates from "../UI/Associates";
import CustomersStories from "../UI/CustomersStories";
import FrequentlyAskedQuestions from "../UI/FrequentlyAskedQuestions";
import Header from "../UI/Header";
import LostSection from "../UI/LostSection";
import Main from "../UI/Main";
import Services from "../UI/Services";
import Statistics from "../UI/Statistics";

function Homepage() {
  return (
    <div>
      <Header />
      <LostSection />
      <Main />
      <Services />
      <Statistics />
      <CustomersStories />
      <FrequentlyAskedQuestions />
      <Associates />
    </div>
  );
}

export default Homepage;
