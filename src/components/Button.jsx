const Button = () => {
  // eslint-disable-next-line no-console
  const clickHandler = () => console.log('clicked');

  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={clickHandler}>Click me</button>
  );
};

export default Button;
