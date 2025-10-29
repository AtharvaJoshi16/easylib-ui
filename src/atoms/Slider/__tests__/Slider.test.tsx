// generate test cases for Slider component and maintain 100% code coverage, don't include props from CoreSliderProps extended in SliderProps, cover all custom props from SliderProps.tsx
import { render, screen } from "@testing-library/react";
import { Slider } from "../Slider";
import { SliderTypes } from "../SliderProps";

(global as any).ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Slider Component", () => {
  test("renders the label when provided", () => {
    render(
      <Slider
        type={SliderTypes.Single}
        id="test-slider"
        label={{ label: "Test Slider" }}
      />
    );
    const labelElement = screen.getByText("Test Slider");
    expect(labelElement).toBeInTheDocument();
  });

  test("renders the description when provided and isError is false", () => {
    render(
      <Slider
        type={SliderTypes.Single}
        id="test-slider"
        description="This is a description"
      />
    );
    const descriptionElement = screen.getByText("This is a description");
    expect(descriptionElement).toBeInTheDocument();
  });
});
