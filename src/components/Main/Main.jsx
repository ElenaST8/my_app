import { useState } from "react";

const Main = () => {
  // const [number, setNumber] = useState(0)
  // const onPlusNumberHandler = () => {
  //     setNumber(number + 1)
  // }

  // const onMinusNumberHandler = () => {
  //     setNumber(number - 1)
  // }

  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  const [result, setResult] = useState(0);

  const onChangeFirstInputHandler = (value) => {
    setFirstInput(value);
  };

  const onChangeSecondInputHandler = (value) => {
    setSecondInput(value);
  };

  const onPlusHandler = () => {
    setResult(firstInput + secondInput);
  };

  const onResetResult = () => {
    setResult(0);
  };

  const onMinusHandler = () => {
    setResult(firstInput - secondInput);
  };

  //   const name = "  John   ".trim();
  //   console.log(name.length);

  return (
    <div>
      <input
        type="number"
        onChange={(event) =>
          onChangeFirstInputHandler(Number(event.target.value))
        }
      />
      <button onClick={onPlusHandler} type="button">
        +
      </button>

      <button onClick={onResetResult} type="button">
        Reset Resurt
      </button>

      <button onClick={onMinusHandler} type="button">
        -
      </button>
      <input
        type="number"
        onChange={(event) =>
          onChangeSecondInputHandler(Number(event.target.value))
        }
      />

      <div>{result}</div>
    </div>
  );
};

export default Main;
