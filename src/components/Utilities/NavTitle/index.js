import styled from "styled-components";

// Styles
const List = styled.li`
  margin: 0.75em 0;
  font-size: 1.125rem;

  a:hover {
    color: #ffd369;
  }

  @media (min-width: 550px) {
    margin: 0 1em;
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
