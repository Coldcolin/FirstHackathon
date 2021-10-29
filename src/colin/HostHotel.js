import React, {useState} from 'react'
import styled from 'styled-components'
import img1 from './Images/pexels-photo-2747901.jpeg'

const HostHotel = () => {
    const [showImage, setShowImage]= useState(img1)
    const loadImage = (e) =>{
        const file = e.target.files[0];
        const res = URL.createObjectURL(file);
        setShowImage(res);
    }
    return(
        <Container>
            <Wrapper>
                <Card>
                    <LeftPart>
                        <img src={showImage} alt=""/>
                    </LeftPart>
                    <RightPart>
                        <BigWord>Register Rooms and Facilities </BigWord>
                        <input placeholder="Email Address" type = "file" onChange={loadImage}
                        />
                        <input placeholder="Hotel Name"/>
                        <input placeholder="Password"/>
                        <input placeholder="Location"/>
                        <Button>Sign Up</Button>
                    </RightPart>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default HostHotel

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/Images/pexels-pixabay-163864.jpg");
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 475px) and (min-width: 320px){
        
    }
`
const Card = styled.div`
    width:60%;
    height: 70%;
    display: flex;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    

    @media screen and (max-width: 475px) and (min-width: 320px){
        height: auto;
        width: 80%;
        flex-wrap: wrap;
    }
`
const LeftPart = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    background-blend-mode: overlay;
    border-radius: 10px 0 0 10px;


    img{
        width: 70%;
        height: 70%;
    }

    @media screen and (max-width: 475px) and (min-width: 320px){
        margin: 10px;
        width: 90%;
    }
`
const RightPart = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    input{
        width: 80%;
        height: 30px;
        border-radius: 3px;
        margin-top: 30px;
        margin-left: 40px;
        border: none;
        padding: 10px;

        @media screen and (max-width: 475px) and (min-width: 320px){
            width: 90%;
            margin-left: 0;
        }
    }
    @media screen and (max-width: 475px) and (min-width: 320px){
        width: 100%;
        align-items: center;
    }
`
const BigWord = styled.div`
    font-size: 26px;
    font-family: poppins;
    font-weight: 500;
    text-align: center;
    color: white;

    @media screen and (max-width: 475px) and (min-width: 320px){
        display: none;
    }
`
const SmallWordS = styled.div`
    font-size: 15px;
    font-family: poppins;
    text-align: center;
    color: white;
    width: 80%;
    margin-left: 30px;

    @media screen and (max-width: 475px) and (min-width: 320px){
        display: none;
    }
`
const Button = styled.div`
    width: 150px;
    height: 50px;
    background-color: #004080;
    color: white;
    margin-left: 130px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1.0);

    :hover{
        cursor: pointer;
        transform: scale(1.1)

    }

    @media screen and (max-width: 475px) and (min-width: 320px){
        margin-left: 0;
        margin-top: 20px;
    }
`