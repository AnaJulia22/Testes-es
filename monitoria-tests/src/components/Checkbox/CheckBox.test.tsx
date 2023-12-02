import { render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import CheckBox from "./CheckBox";

describe("CheckBox", () => {

    it("should render a checkbox", () => {
        render(<CheckBox  />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
      });

    it("should be unchecked by default", () => {
        render(<CheckBox  />);
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
    });

    it("should be checked state when clicked", async () => {
        const onClick = vi.fn();
        render(<CheckBox  onClick={onClick}/>);
        const user = userEvent.setup();
        await user.click(screen.getByRole("CheckBox"));
        expect(onClick).toBeChecked();
    });
    
    it("should uncheck the checkbox when clicked and already checked", () => {
        render(<CheckBox disabled={false} />);
      
        const checkbox = screen.getByRole("checkbox");

        expect(checkbox).toBeChecked();
        userEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
      });  

})