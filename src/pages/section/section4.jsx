import { useState } from 'react';
import styled from 'styled-components';

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 20px;
  width: 100%;
  padding: 10px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`;

const StyledCheckbox = styled.input`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
`;

const Question = styled.div`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  margin-top: 20px;
  width: 100px;
  height: 40px;
  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Section4 = ({ onNext, onChange }) => {
  const [selectedFields, setSelectedFields] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const updatedFields =
      selectedFields.includes(value) ?
        selectedFields.filter((field) => field !== value)
      : [...selectedFields, value];

    setSelectedFields(updatedFields);
    onChange(updatedFields); // 변경된 값을 onChange에 전달
  };

  const handleNext = () => {
    console.log('Selected fields:', selectedFields);
    onNext(selectedFields);
  };

  return (
    <Container>
      <Question>4. 지원분야를 선택해주세요.</Question>
      <StyledCheckboxGroup>
        <StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name="field"
            value="기획"
            onChange={handleCheckboxChange}
          />
          기획
        </StyledLabel>
        <StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name="field"
            value="디자인"
            onChange={handleCheckboxChange}
          />
          디자인
        </StyledLabel>
        <StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name="field"
            value="게임"
            onChange={handleCheckboxChange}
          />
          게임
        </StyledLabel>
        <StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name="field"
            value="백엔드"
            onChange={handleCheckboxChange}
          />
          백엔드
        </StyledLabel>
        <StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name="field"
            value="프론트엔드"
            onChange={handleCheckboxChange}
          />
          프론트엔드
        </StyledLabel>
        <StyledLabel>
          <StyledCheckbox
            type="checkbox"
            name="field"
            value="앱"
            onChange={handleCheckboxChange}
          />
          앱
        </StyledLabel>
      </StyledCheckboxGroup>
      <Button onClick={handleNext}>다음</Button>
    </Container>
  );
};

export default Section4;
