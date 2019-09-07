import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  background: #fff;
  padding: 20px;
  box-shadow: #979797;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  p {
    font-family: "Helvetica";
    height: 32px;

    strong {
      color: #4a4a4a;
      font-size: 2rem;
    }

    small {
      color: #9a9a9a;
      font-size: 1.2rem;
    }
  }

  img {
    height: 3.2rem;
    width: 3.2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  color: #3e3e3e;
  font-size: 1.4rem;
  line-height: 2.2rem;
  padding: 2rem 0rem;
`;

export const Divider = styled.div`
  background: #eeeeee;
  height: 0.1rem;
  margin: 1rem 0rem;
`;
