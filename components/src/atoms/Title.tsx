// ============================================================
// Import packages
import styled from 'styled-components';

// ============================================================
// Component
function Title({ children }: Props) {
  return <H1>{children}</H1>;
}

Title.defaultProps = {
  children: undefined,
};

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

type Props = {
  children: string,
};

// ============================================================
// Exports
export default Title;
