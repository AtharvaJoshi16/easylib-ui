// generate test case for Label component and maintain 100% code coverage, dont include props from CoreLabelPropsWithoutChildren extended in LabelProps, only use label prop from LabelProps
import { render, screen } from "@testing-library/react";
import { Label } from "../Label";

describe("Label Component", () => {
  test("renders the label text correctly", () => {
    render(<Label label="Test Label" />);
    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });

  test("renders with additional props", () => {
    render(<Label label="Another Test Label" htmlFor="test-input" />);
    const labelElement = screen.getByText("Another Test Label");
    expect(labelElement).toHaveAttribute("for", "test-input");
  });
});
