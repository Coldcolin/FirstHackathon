import React from 'react'
import styled from 'styled-components'
// import Rooms from './colin/Rooms'
import AdminPage from './colin/AdminPage'
// import HostHotel from './colin/HostHotel'

function App() {
  return (
    <Container>
      <Wrapper>
        {/* <Rooms/> */}
        <AdminPage />
        {/* <HostHotel /> */}
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div``
const Wrapper = styled.div``