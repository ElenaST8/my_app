import NavigationItem from "../navigationItem/NavigationItem";
import "./header.css";

const Header = () => {
  const navElements = [
    {
      text: "First",
      isUppercasetext: true,
      description: "first description",
    },
    {
      text: "Second",
      isUppercasetext: true,
      description: "second description",
    },
    {
      text: "Third",
      isUppercasetext: true,
      description: "third description",
    },
    {
      text: "Fourth",
      isUppercasetext: true,
      description: "fourth description",
    },
  ];

  return (
    <header>
      <div className="header">
        {navElements.map((element) => {
          return (
            <NavigationItem
              key={element.text}
              text={element.text}
              isUppercasetext={element.isUppercasetext}
              description={element.description}
            />
          );
        })}
      </div>
      <NavigationItem text="HEADER" isUppercasetext={false} />
    </header>
  );
};

export default Header;
