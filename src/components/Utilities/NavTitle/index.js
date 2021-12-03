import styled from "styled-components";

// Styles
const List = styled.li`
  margin: 0 1em;
  font-size: 1.25rem;
`;

const NavTitle = ({ title }) => {
  return (
    <List>
      <a href="#d">{title}</a>
    </List>
  );
};

export default NavTitle;
