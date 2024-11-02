/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledRadioGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-size: 1.5rem;
    color: white;
  }

  input[type='radio'] {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
`;

const Question = styled.div`
  font-size: 1.5rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  margin-top: 20px;
  width: 60px;
  height: 35px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section3 = ({ onNext, onChange }) => (
  <Container>
    <Question>3. 지원기수를 선택해주세요.</Question>
    <StyledRadioGroup onChange={(e) => onChange(e.target.value)}>
      <label>
        <input type="radio" name="generation" value="6기" />
        6기
      </label>
      <label>
        <input type="radio" name="generation" value="깍두기" />
        깍두기
      </label>
    </StyledRadioGroup>
    <Button onClick={onNext}>다음</Button>
  </Container>
);

export default Section3;
