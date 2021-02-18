import styled from 'styled-components'

export const Wrapper = styled.section`
  margin: 0px;
  padding: 0px;
  outline: 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(18, 18, 20);
`

export const Tableone = styled.section`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 32px;
`

export const Tabletwo = styled.section`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 28px 0px 50px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  background: rgb(32, 32, 36);
  border-radius: 10px;
  padding: 64px;

  .textMain h1 {
    color: rgb(225, 225, 230);
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 64px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-block-end: 1em;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.greenBlack};
    margin: 8px 0px 24px;
    opacity: 0.8;
    -webkit-transition: opacity 0.2s ease 0s;
    transition: opacity 0.2s ease 0s;
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }

  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: rgb(18, 18, 20);
    border-color: rgb(18, 18, 20);
    color: rgb(255, 255, 255);
    padding: 0px 1em 0px 2.65em;
    border-radius: 5px;
    margin: 0 auto 21px;
  }
  input:focus-within input:not(:read-only) {
    border-color: ${props => props.theme.colors.green};
  }
  input:focus,
  textarea:focus {
    border-color: ${props => props.theme.colors.green};
  }

  .textarea {
    outline: 0px;
    background: rgb(18, 18, 20);
    border: 2px solid rgb(40, 39, 44);
    border-radius: 5px;
    height: 50px;
    padding: 15px 21px;
    color: rgb(255, 255, 255);
    font-family: Roboto, sans-serif;
    font-size: 17px;
    width: 100%;
    transition: border 0.2s ease 0s;
  }

  button {
    background: ${props => props.theme.colors.primary};
    border-radius: 5px;
    border: 0px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    height: 50px;
    transition: background 0.2s ease 0s, color 0.2s ease 0s;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
  button :hover {
    background-color: ${props => props.theme.colors.primaryhover};
  }
`
