import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*~`";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numAllowed, charAllowed]);

  
  useEffect(()=> {
    passGenerator()
  }, [length, numAllowed, charAllowed, passGenerator])

  const passRef = useRef(null)

  const copyPassToClipboard = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass);           // imp ***
  }, [pass])

  return (
    <>
      <div>
        <h1 className="text-white font-extrabold text-center h-[10vh] flex items-center justify-center">
          {" "}
          💻 Password Maker 🔐
        </h1>

        <div className="w-full h-[90vh] bg-amber-300 m-auto p-20 flex items-center justify-center">
          
          
          <div className="m-8 p-10 bg-amber-700 rounded-lg absolute w-[80vw]">
            <span className="flex flex-row p-5 m-5">
              <input
                type="text"
                value={pass}
                className="outline-black w-full py-1 px-1 bg-amber-500"
                placeholder="Password"
                readOnly
                ref={passRef}
              />
              <button 
              onClick={copyPassToClipboard}
              className="outline-black bg-blue-700 text-white p-2 m-2 shrink-0">
                copy
              </button>
            </span>
            <span className="flex flex-row items-center gap-6 p-5 m-5">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                id="length"
                onChange={(e) => {setLength(Number(e.target.value))}}
              />
              <label htmlFor="length">Length: {length}</label>
              <div
              className="flex items-center gap-3"
              >
                <input 
                type="checkbox"
                defaultChecked = {numAllowed}
                id="numberInput"
                onChange={ () => {
                  setNumAllowed(prev => !prev);
                }
                }
                />
                <label htmlFor="numberInput">Numbers</label>
                
                <input 
                type="checkbox"
                checked = {charAllowed}
                id="charInput"
                onChange={ () => {
                  setCharAllowed(prev => !prev);
                }
                }
                />
                <label htmlFor="charInput">Character</label>
              </div>
            </span>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
