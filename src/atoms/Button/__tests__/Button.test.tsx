import { fireEvent, render, screen } from "@testing-library/react";
import { Colors } from "../../../interfaces";
import Button from "../Button";
import { ButtonSizes, ButtonVariants } from "../ButtonProps";

describe("Button", () => {
  it("renders custom loader when loading and loader prop is provided", () => {
    const CustomLoader = () => (
      <span data-testid="custom-loader">Loading...</span>
    );
    render(
      <Button loading loader={<CustomLoader />}>
        Click me
      </Button>
    );
    expect(screen.getByTestId("custom-loader")).toBeInTheDocument();
  });

  it("renders default loader when loading prop is provided", () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByTestId("default-loader")).toBeInTheDocument();
  });

  it("renders startIcon and endIcon when not loading", () => {
    const StartIcon = () => <span data-testid="start-icon">S</span>;
    const EndIcon = () => <span data-testid="end-icon">E</span>;
    render(
      <Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
        Click me
      </Button>
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies justify-between class when alignment is spaced and hasIcon is true", () => {
    const StartIcon = () => <span data-testid="start-icon">S</span>;
    const { container } = render(
      <Button alignment="spaced" startIcon={<StartIcon />}>
        Click me
      </Button>
    );
    expect(container.firstChild).toHaveClass("justify-between");
  });

  it("applies justify-center class when alignment is center and hasIcon is true", () => {
    const StartIcon = () => <span data-testid="start-icon">S</span>;
    const { container } = render(
      <Button alignment="center" startIcon={<StartIcon />}>
        Click me
      </Button>
    );
    expect(container.firstChild).toHaveClass("justify-center");
  });

  it("renders children", () => {
    render(<Button>Test Child</Button>);
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("passes variant, color, and size props", () => {
    render(
      <Button
        variant={ButtonVariants.Contained}
        color={Colors.Primary}
        size={ButtonSizes.Large}
      >
        Props Test
      </Button>
    );
    expect(screen.getByText("Props Test")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Button className="custom-class">Class Test</Button>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("disables button when loading", () => {
    render(<Button loading>Disabled Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick when not disabled or loading", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled Click
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when loading", () => {
    const handleClick = jest.fn();
    render(
      <Button loading onClick={handleClick}>
        Loading Click
      </Button>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
