import styled from "styled-components"
import Footer from "./Footer"
import Topo from "./Topo"

export default function Habitos(){
    return(
        <EstiloHabitos>
            <Topo/>
            <h1>
                <p>Meus Habitos</p>
                <div>+</div>
            </h1>

            <h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>
            <Footer/>
        </EstiloHabitos>
    )
}

const EstiloHabitos=styled.div`
    width: 100%;
    height: 100%;
    background: #E5E5E5;
    padding: 98px 0;
    font-family: 'Lexend Deca';
    font-weight: 400;
    h1{
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        font-size: 22.976px;
        color: #126BA5;
    }
   
    h1 div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-size: 26.976px;
        color: #FFFFFF;
    }
    h2{ 
        margin-top: 28px;
        font-size: 17.976px;
        color: #666666;
        padding: 0 15px;
    }
`