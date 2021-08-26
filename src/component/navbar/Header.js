import UlnavBar from "./UlnavBar";
import styled from "styled-components";
const Header = styled.div`
  width: 100vw;
  height: 100px;
  background-color: beige;
  margin: 0px;
  padding: 0px;
`;
const header = () => {
  return (
    <Header>
      <UlnavBar />
    </Header>
  );
};
export default header;
