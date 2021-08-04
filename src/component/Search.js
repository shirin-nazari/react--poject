import styled from "styled-components";
const Div = styled.input`
  box-shadow: 20px;
  border-radius: 20px;
  width: 350px;
  height: 40px;
`;
const Button = styled.button`
  width: 60px;
  height: 35px;
  border-radius: 5px;
  color: white;
  background-color: #393e46;
`;
const search = () => {
  return (
    <form className="d-flex">
      <Div
        className="form-control m-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <Button className="btn btn-outline-success" type="submit">
        Search
      </Button>
    </form>
  );
};
export default search;
