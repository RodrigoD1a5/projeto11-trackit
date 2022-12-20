import styled from "styled-components"

export default function Topo(){
    return( 
        <EstiloTopo>
            <p>TrackIt</p>
            <img src="https://yt3.ggpht.com/ytc/AMLnZu9tYPIG3bxki2LZz-NRrvHtLHRL0-wW95Cjgcr2=s900-c-k-c0x00ffffff-no-rj"/>
        </EstiloTopo>
    )
}

const EstiloTopo=styled.div`
    position: fixed;
    top: 0;
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    p{
        font-family: 'Playball';
        font-weight: 400;
        font-size: 38.982px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
    }
`