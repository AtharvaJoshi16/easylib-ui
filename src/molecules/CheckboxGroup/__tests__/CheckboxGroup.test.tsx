// generate test cases for CheckboxGroup component and maintain 100% code coverage, cover nested options and onChange functionality, import options data from mockData.ts
import { fireEvent, render, screen } from "@testing-library/react";
import { CheckboxGroup } from "../CheckboxGroup";

import { options as mockOptions } from "../mockData";

describe("CheckboxGroup Component", () => {
  test("renders the label when provided", () => {
    render(
      <CheckboxGroup
        options={mockOptions}
        label={{ label: "Test Checkbox Group" }}
      />
    );
    const labelElement = screen.getByText("Test Checkbox Group");
    expect(labelElement).toBeInTheDocument();
  });

  test("renders nested options correctly", () => {
    render(<CheckboxGroup options={mockOptions} />);
    const parentOption = screen.getByText("Fruits");
    const childOption = screen.getByText("Tropical Fruits");
    expect(parentOption).toBeInTheDocument();
    expect(childOption).toBeInTheDocument();
  });

  test("calls onChange with updated options when a checkbox is clicked", () => {
    const handleChange = jest.fn();
    render(<CheckboxGroup options={mockOptions} onChange={handleChange} />);

    const checkboxToClick = screen.getByLabelText("Mango");
    fireEvent.click(checkboxToClick);

    expect(handleChange).toHaveBeenCalled();
  });
});
