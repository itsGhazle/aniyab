import styled from "styled-components";
import Associates from "../UI/Associates";
import CustomersStories from "../UI/CustomersStories";
import FrequentlyAskedQuestions from "../UI/FrequentlyAskedQuestions";
import Header from "../UI/Header";
import LostSection from "../UI/LostSection";
import Main from "../UI/Main";
import Services from "../UI/Services";
import Statistics from "../UI/Statistics";

const Div = styled.div`
  padding: 0 10rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
function Homepage() {
  return (
    <Div>
      <Header />
      <LostSection />
      <Services />
      <Statistics />
      <Main />
      <CustomersStories />
      <FrequentlyAskedQuestions />
      <Associates />
    </Div>
  );
}

export default Homepage;
