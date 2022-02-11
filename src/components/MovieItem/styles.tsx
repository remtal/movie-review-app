import styled from "styled-components";

export const MovieItemWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 20px 0.1fr;
  grid-template-columns: 190px auto;

  font-family: "Lato", sans-serif;
  width: 700px;
  height: fit-content;
  background-color: white;
  border-radius: 5px;
  grid-area: main;
  padding: 20px;
  gap: 8px;

  > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 24px;
  font-weight: 800;
  margin-top: 0px;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
Name.displayName = "Name";

export const Genre = styled.span`
  color: #c4ca18;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
Genre.displayName = "Genre";

export const Description = styled.span`
  margin-bottom: 15px;
  grid-row: 3;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
Description.displayName = "Description";

export const Date = styled.span`
  color: #c4ca18;
  grid-column: 2;
  grid-row: 4;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
Date.displayName = "Date";

export const Score = styled.span`
  color: white;
  background-color: #c4ca18;
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  height: 23px;

  @media (max-width: 768px) {
    transform: scale(0.8);
  }
`;
Score.displayName = "Score";

export const Thumbnail = styled.img`
  height: 250px;
  width: 172px;
  grid-row: 1/5;
  @media (max-width: 768px) {
    height: 220px;
  }
`;
