import { styled } from 'styled-components'

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
export const PokeBox = styled.div`
  &:hover {
    scale: 1.1;
  }
  margin: 0;
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 8px;
  width: 135px;
  padding: 3px;
  background: rgb(245, 90, 90);
  background: radial-gradient(
    circle,
    rgba(245, 90, 90, 1) 0%,
    rgba(124, 31, 31, 1) 100%
  );
  -webkit-box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 8px 8px 10px 0px rgba(0, 0, 0, 0.75);

  h2 {
    font-size: 20px;
    color: white;
  }

  @media (max-width: 350px) {
    h2 {
      font-size: 16px;
    }
  }
`
