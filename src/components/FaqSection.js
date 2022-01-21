import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='question'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              similique. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Ullam assumenda similique dolorum?
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='question'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              similique.
            </p>
          </div>
        </Toggle>
        <Toggle title='Different Payment Methods'>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              similique. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Odit modi mollitia ullam.
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products Do You Offer?'>
          <div className='question'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
              similique. Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 3rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
