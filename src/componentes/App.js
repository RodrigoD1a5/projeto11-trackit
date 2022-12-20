import styled from "styled-components";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import Login from "./Login";

export default function App() {
  return (
    <EstiloApp>
      <Habitos/>
    </EstiloApp>
  );
}


const EstiloApp = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  max-width: 375px;
  height: 667px;
  margin: 0 auto;
`