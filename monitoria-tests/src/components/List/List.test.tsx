import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import List from "./List";

describe("List", () => {
  it ("should render a list", () => {
    render(<List items={[
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ]} />);

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent("One");
    expect(list).toHaveTextContent("Two");
    expect(list).toHaveTextContent("Three");
  })

  it("should render each item with its correct content", () => {
    render(<List items={[
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ]} />);
    
    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
    expect(screen.getByText("Three")).toBeInTheDocument();
  });

  it("should assign a unique key to each list item", () => {
    render(<List items={[
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ]} />);
    
    const listItems = screen.getAllByRole("listitem");
    
    listItems.forEach((item) => {
      const keyAttribute = item.getAttribute("key"); 

      expect(keyAttribute).toBeDefined();
    })

  });  

  it('should render item with checkbox.', () => {
    render(<List items={[
      { id: "1", value: "One" },
      { id: "2", value: "Two" },
      { id: "3", value: "Three" },
    ]} />);
    expect(screen.getByTestId('checkbox-1')).toBeInTheDocument();
    expect(screen.queryByText('One')).toBeInTheDocument();
  });
  
})