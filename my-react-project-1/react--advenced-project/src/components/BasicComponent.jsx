import { useEffect, useRef } from "react";
export function BasicComponent() {
  const headingRef = useRef(null);

  useEffect(() => {
    console.log(headingRef.current);
    // sideEffect // connecting to an api, window api
    window.addEventListener("scroll", (e)=>{
        console.log(window.scrollY);
    })
}, []);

  console.log(headingRef.current);

  return (
    <>
      <h1 ref={headingRef}>Hello useEffect</h1>
    </>
  );
}
