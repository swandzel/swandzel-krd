// @ts-nocheck
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<App />);
});

test("search bar input should be rendered", () => {
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

test("search bar button should be rendered", () => {
  const buttonElement = screen.getByText(/szukaj/i);
  expect(buttonElement).toBeInTheDocument();
});

test("input should be empty at beggining", () => {
  const inputElement = screen.getByRole("textbox");
  expect(inputElement.value).toBe("");
});

test("filters should be rendered", () => {
  const dluznikElement = screen.getByText("DŁUŻNIK");
  const nipElement = screen.getByText("NIP");
  const kwotaZadluzeniaElement = screen.getByText("KWOTA ZADŁUŻENIA");
  const dataPowstaniaZadluzeniaElement = screen.getByText(
    "DATA POWSTANIA ZADŁUŻENIA"
  );

  expect(dluznikElement).toBeInTheDocument();
  expect(nipElement).toBeInTheDocument();
  expect(kwotaZadluzeniaElement).toBeInTheDocument();
  expect(dataPowstaniaZadluzeniaElement).toBeInTheDocument();
});

test("query for Renata and get Renata Urbańska (Test)", async () => {
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByText(/szukaj/i);
  userEvent.type(inputElement, "Renata");
  userEvent.click(buttonElement);
  const resultElement = await screen.findByText("Renata Urbańska (Test)");
  expect(resultElement).toBeInTheDocument();
});

test("query for renataX and get error", async () => {
  const inputElement = screen.getByRole("textbox");
  const buttonElement = screen.getByText(/szukaj/i);
  userEvent.type(inputElement, "renataX");
  userEvent.click(buttonElement);
  await waitFor(
    () => expect(screen.getByText("Brak wyników")).toBeInTheDocument(),
    {
      timeout: 5000,
    }
  );
});
