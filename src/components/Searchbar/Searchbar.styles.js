import styled from 'styled-components';

export const MenuSearchForm = styled.form`
  display: flex;
  height: 40px;
  padding: 2px;
  background: #1e232b;
  min-width: 45% !important;
  border-radius: 2px;
  border: 1px solid rgba(155, 155, 155, 0.2);

  @media only screen and (max-width: 1000px) {
    margin-top: 20px;
  }
`;

export const MenuSearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  color: #fff;
  font-size: 17px;
  border: none;
  font-weight: 500;
  background: none;
`;

export const MenuSearchBtn = styled.button`
  padding: 0 15px;
  color: #000;
  font-size: 17px;
  background: lightgray;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;
