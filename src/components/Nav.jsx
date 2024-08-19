const Nav = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
        <li>{props.first}</li>
        <li>{props.second}</li>
        <li>{props.third}</li>
        <li>{props.fourth}</li>
      </ul>
    </nav>
  );
};

export default Nav;
