import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:0 auto;
    width:100%;
    margin:2%;
    div{
        border: 2px solid teal;
        width:40%;
        margin: 2%;
        background-color: tan;
    }
`

export default Container