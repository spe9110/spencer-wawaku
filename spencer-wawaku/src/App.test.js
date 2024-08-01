import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import Switch from './component/Header/DarkMode';
import { useTheme } from './component/Header/DarkMode';
import { IoSunny, FaMoon } from "react-icons/io5";

jest.mock('./component/Header/DarkMode', () => ({
  useTheme: jest.fn(),
}));

describe('Switch component', () => {
  let toggleTheme;

  beforeEach(() => {
    useTheme.mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn(),
    });
  });

  it('renders with light theme and FaMoon icon', () => {
    render(<Switch />);

    expect(screen.getByRole('button')).toHaveTextContent('light'); // Assuming no text content
    expect(screen.getByRole('button')).toContainElement(<FaMoon />);
  });

  it('toggles theme to dark and changes icon on click', () => {
    render(<Switch />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(toggleTheme).toHaveBeenCalledWith('dark');
    expect(button).toContainElement(<IoSunny />);
  });

  it('toggles theme back to light and changes icon on second click', () => {
    render(<Switch />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    userEvent.click(button);

    expect(screen.getByRole('button')).toHaveTextContent('light');
    expect(button).toContainElement(<FaMoon />);
  });
});