import React from 'react'
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';
function HeaderContent() {
    return (
       <HeaderContentStyled>
           <div className="left-content">
            <div className="left-text-container">
            <h1>Tu banco en una app</h1>
            <p className="white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Velit molestiae minus dicta ipsum atque est qui vel illo magni voluptates esse, e
            x commodi corporis quos odio libero temporibus, eveniet nisi.
            </p>
               <SecondaryButton name={'Registrarse ahora'}/>
             </div>
              
           </div>
           <div className="right-content">
               <img src={phone}></img>
               <img src={ring1} className="ring1"></img>
               <img src={message1} alt="" className="message1" />
                <img src={message2} alt="" className="message2" />
           </div>
       </HeaderContentStyled>
    )
}

const HeaderContentStyled =styled.div`
 display:grid;
 grid-template-columns: repeat(2,1fr);
 padding-top: 2 rem;

 .left-content{
     display:flex;
     align-items:center;
     padding-right: 3rem;
     
     h1{
         font-size: 40px;
         font-weight: 600;

     }

     .white{
         padding:1.4 rem 0;
         line-heiht:1.8 rem;
         color: white;
     }


 }

 .right-content{
    position: relative;
    display: flex; 
    justify-content: center;

    .phone{
        width: 80%;

    }

    .ring1{
        position:absolute;
        bottom:0;
        right:0;
        left:auto;
    }
    .message1{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .message2{
            position: absolute;
            bottom: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
        }
 }
`; 

export default HeaderContent
