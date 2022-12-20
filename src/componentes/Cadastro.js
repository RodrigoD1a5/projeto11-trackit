import styled from "styled-components"
import logo from "../logo.svg"

export default function Cadastro (){
    return(
        <EstiloCadastro>
        <img src={logo} />
            <div>
                <input placeholder="  email" />
                <input placeholder="  senha" />
                <input placeholder="  nome" />
                <input placeholder="  foto" />
            </div>
        <button>Entrar</button>
        <a href="#">Já tem uma conta? Faça login!</a>
        </EstiloCadastro>    
    )
}

const EstiloCadastro = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    align-items: center;
    img{
        max-width:180px;
        max-height:180px;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    div input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19.976px;
        color: #DBDBDB;
    }
    button{
        width: 303px;
        height: 45px;


        background: #52B6FF;
        border-radius: 4.63636px;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20.976px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        margin-top: 6px;
    }
    a{  
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 13.976px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`