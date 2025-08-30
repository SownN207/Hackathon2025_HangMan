// src/pages/test-button.tsx
import React from "react";
import Button from "./Button";

const TestButtonPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Test Button</h1>
      <Button onClick={() => alert("Button clicked!")} />
    </div>
  );
};

export default TestButtonPage;
