// A simple component that accepts props: name (string) and age (number)
function Greeting({ name, age }) {
  return (
    <p>
      Hello, {name}! You are {age} years old.
    </p>
  );
}

export default Greeting;
