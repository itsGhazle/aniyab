import styled from "styled-components";
import Comment from "../UI/Comment";

const Header = styled.h1`
  text-decoration: center;
`;
function ContactUs() {
  return (
    <div>
      <Header>تماس با ما</Header>
      <p>پیشنهادات ، انتقادات و نظرات خود را با ما درمیان بگذارید.</p>
      <Comment />
    </div>
  );
}

export default ContactUs;
