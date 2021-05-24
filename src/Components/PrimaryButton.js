import React, { Component } from 'react';
import styled from 'styled-components';
import jsPDF from 'jspdf';
import avatar from '../img/avatar.jpg';

export class PrimaryButton extends Component {
  pdfGenerate = () => {
    let doc = new jsPDF('landscape', 'px', 'a4', 'false');
    doc.addImage(avatar, 'PNG', 65, 20, 500, 400);
    doc.addPage();
    doc.save('a.pdf');
  };
  render() {
    return (
      <PrimaryButtonStyled onClick={this.pdfGenerate}>
        Download Cv
      </PrimaryButtonStyled>
    );
  }
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    left: 0;
    bottom: 0;
    opacity: 0.7;
    transition: all 0.4s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;
export default PrimaryButton;
