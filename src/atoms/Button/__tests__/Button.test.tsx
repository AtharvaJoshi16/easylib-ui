import { render, screen } from "@testing-library/react";
import Button from "../Button";

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
    expect(screen.getByTestId("custom-loader")).toBeInTheDocument();
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
});
