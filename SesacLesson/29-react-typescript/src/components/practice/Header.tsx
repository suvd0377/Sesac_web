const MHeader = styled.header`
background-color: beige
width: 100%
    height: 80px
    display: flex
    justify-content: space-between
`;

const Div = styled.div`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function Header() {
  return (
    <MHeader>
      <Div>강동구</Div>
      <Div>마포구</Div>
      <Div>도봉구</Div>
    </MHeader>
  );
}
