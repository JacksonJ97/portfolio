import styled from "styled-components";

// Styles
const List = styled.li`
  margin: 0 1em;
  font-size: 1.125rem;

  a:hover {
    color: #ffd369;
  }
`;

const NavTitle = ({ title, target }) => {
  return (
    <List>
      <a href={`#${target}`}>{title}</a>
    </List>
  );
};

export default NavTitle;
