import React from "react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@porsche-design-system/components-react", () => {
    return require("@porsche-design-system/components-react/mocks")
});
