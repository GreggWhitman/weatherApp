import styled from "styled-components";

const WidgetWrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 2px solid ${e => e.theme.color.gray};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default WidgetWrapper;
