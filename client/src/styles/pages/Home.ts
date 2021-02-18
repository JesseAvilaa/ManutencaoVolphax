import styled from 'styled-components'

export const Wrapper = styled.section`
  padding-top: 120px;
  @media (max-width: 480px) {
    padding-top: 64px;
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  svg {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 500px;
    width: 100%;
    margin: -10px auto;
  }

  @media (max-width: 1168px) {
    padding: 0 24px;
  }
`
export const PageTitle = styled.h1`
  font-size: 64px;
  line-height: 1;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  font-weight: 700;
  width: 100%;
  max-width: 615px;
  margin: 0 auto;
  b {
    color: ${props => props.theme.colors.primary};
  }
  br {
    display: none;
  }
  @media (max-width: 720px) {
    font-size: 48px;
  }
  @media (max-width: 480px) {
    font-size: 35px;
    line-height: 40px;
    max-width: 275px;
    br {
      display: block;
    }
  }
`
export const CallToAction = styled.div`
  padding: 48px 0 120px 0;
  width: 100%;
  max-width: 665px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${props => props.theme.colors.text};
    text-align: right;
    width: 100%;
    max-width: 320px;
    font-size: 18px;
    line-height: 156%;
  }
  a {
    width: 100%;
    max-width: 298px;
    height: 64px;
  }

  .button-join a {
    border: none;
    outline: none;
    color: #fff;
    background: ${props => props.theme.colors.primary};
    width: 100%;
    border-radius: 5px;
    padding: 12px 32px;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
    [disabled],
    [aria-disabled='true'] {
      cursor: auto;
      opacity: 0.5;
    }
    :not([disabled]),
    :not([aria-disabled='true']) {
      :hover,
      :focus {
        background-color: ${props => props.theme.colors.primaryhover};
      }
      :active,
      [data-active='true'] {
        background-color: ${props => props.theme.colors.primaryhover};
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 16px 0 48px 0;
    p {
      text-align: center;
      margin-bottom: 40px;
      max-width: 100%;
    }
  }
  @media (max-width: 480px) {
    a {
      max-width: 280px;
      font-size: 15px;
      height: 56px;
    }
    p {
      font-size: 15px;
      max-width: 260px;
    }
  }
`
