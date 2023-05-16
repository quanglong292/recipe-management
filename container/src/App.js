import React, { Suspense } from "react";
const FormApp = React.lazy(() => import("../../form/src/App"));
const LandingApp = React.lazy(() => import("../../landing/src/App"));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          backgroundColor: "greenyellow",
        }}
      >
        <h1>Container</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <FormApp />
      </Suspense>
      <Suspense fallback={"loading..."}>
        <LandingApp />
      </Suspense>
    </div>
  );
};

export default App;
