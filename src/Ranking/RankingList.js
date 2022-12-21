import styled from "styled-components"

export default function RankingList({item, i}){
    return (
        <>
            <Div>
                <p>{i+1} - {item.name} - {item.linksCount} links - {item.visitCount} visualizações </p>
            </Div>
        </>
    )
}

const Div = styled.div`
    display: flex;
    & p{
        font-size: 20px;
    }
`