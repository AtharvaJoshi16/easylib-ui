import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  const label = { label: "Accept Terms" };
  it("renders with label", () => {
    render(<Checkbox label={label} />);
    expect(screen.getByText("Accept Terms")).toBeInTheDocument();
  });

  it("renders as checked when checked prop is true", () => {
    render(<Checkbox label={label} checked={true} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("renders as unchecked when checked prop is false", () => {
    render(<Checkbox label={label} checked={false} />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("calls onChange when clicked", () => {
    const handleChange = jest.fn();
    render(<Checkbox label={label} onCheckedChange={handleChange} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Checkbox label={label} disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Checkbox label={label} classes={{ wrapper: "custom-checkbox" }} />
    );
    expect(container.lastChild).toHaveClass("custom-checkbox");
  });
});
