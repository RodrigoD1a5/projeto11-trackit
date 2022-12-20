import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar"
import styled from "styled-components"

export default function Footer() {
    return (
        <EstiloMenu>
            <p>Hábitos</p>
            <EstiloButao>
                <CircularProgressbar
                    value={66}
                    text={"Hoje"}
                    styles={buildStyles({
                        pathTransitionDuration: 0.5,
                        pathColor: "#FFFFFF",
                        textColor: "#FFFFFF",
                        trailColor: "#52B6FF",
                    })}
                />
            </EstiloButao>
            <p>Histórico</p>
        </EstiloMenu>
    )
}

const EstiloMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    position: fixed;
    top: 667px;
    width: 375px;
    height: 70px;
    background: #FFFFFF;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 17.976px;
    color: #52B6FF;
`

const EstiloButao=styled.button`
    margin-bottom: 35px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: none;
    background: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    
`