import CustomersStories from "../UI/CustomersStories";
import FrequentlyAskedQuestions from "../UI/FrequentlyAskedQuestions";
import Header from "../UI/Header";
import Main from "../UI/Main";
import Services from "../UI/Services";
import Statistics from "../UI/Statistics";

function Homepage() {
  return (
    <div>
      <Header />
      <Main />
      <Statistics />
      <Services />
      <FrequentlyAskedQuestions />
      <CustomersStories />
    </div>
  );
}

export default Homepage;
