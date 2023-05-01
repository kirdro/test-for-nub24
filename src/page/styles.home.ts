import styled from "styled-components";

export const DivHomeSC = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 100%;
    width: 100%;
    height: 100%;
  background-color: #282c34;
`

export const DivSidebarSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr);
`

export const DivContentSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
`