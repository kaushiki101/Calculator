import React, { useState } from "react";
import "./Calculator.css";

export default function Calcultor() {
  const [value, setValue] = useState("");

  const handleSumbit = (e) => {
    setValue(value + e.target.value);
  };

  return (
    <>
      <div className="Container">
        <div className="Calculator">
          <form action="">
            <div className="text">
              <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="AC" onClick={(e) => setValue("")} />
              <input
                type="button"
                value="DC"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input type="button" value="." onClick={handleSumbit} />
              <input type="button" value="/" onClick={handleSumbit} />
            </div>
            <div>
              <input type="button" value="7" onClick={handleSumbit} />
              <input type="button" value="8" onClick={handleSumbit} />
              <input type="button" value="9" onClick={handleSumbit} />
              <input type="button" value="*" onClick={handleSumbit} />
            </div>
            <div>
              <input type="button" value="4" onClick={handleSumbit} />
              <input type="button" value="5" onClick={handleSumbit} />
              <input type="button" value="6" onClick={handleSumbit} />
              <input type="button" value="+" onClick={handleSumbit} />
            </div>
            <div>
              <input type="button" value="1" onClick={handleSumbit} />
              <input type="button" value="2" onClick={handleSumbit} />
              <input type="button" value="3" onClick={handleSumbit} />
              <input type="button" value="-" onClick={handleSumbit} />
            </div>
            <div>
              <input type="button" value="00" onClick={handleSumbit} />
              <input type="button" value="0" onClick={handleSumbit} />
              <input
                type="button"
                value="="
                onClick={(e) => setValue(eval(value))}
              />
              <input type="button" value="+" onClick={handleSumbit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
