import Associates from "../UI/Associates";
import CustomersStories from "../UI/CustomersStories";
import FrequentlyAskedQuestions from "../UI/FrequentlyAskedQuestions";
import Header from "../UI/Header";
import Main from "../UI/Main";
import Services from "../UI/Services";
import Statistics from "../UI/Statistics";

function Homepage() {
  return (
    <div className="px-40">
      <Header />
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
