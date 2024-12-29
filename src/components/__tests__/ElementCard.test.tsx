import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { ElementCard } from '../ElementCard';

const mockElement = {
  atomicNumber: 1,
  symbol: 'H',
  name: 'Hydrogen',
  atomicMass: 1.008,
  category: 'nonmetal',
  block: 's',
  electronConfiguration: '1s¹',
  group: 1,
  period: 1,
  phase: 'Gas',
  density: 0.00008988,
  meltingPoint: 13.99,
  boilingPoint: 20.271,
  discoveredBy: 'Henry Cavendish',
  yearDiscovered: 1766
};

describe('ElementCard', () => {
  it('renders element information correctly', () => {
    const { getByText } = render(
      <ElementCard
        element={mockElement}
        onClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
    );

    expect(getByText('H')).toBeDefined();
    expect(getByText('Hydrogen')).toBeDefined();
    expect(getByText('1')).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    const { container } = render(
      <ElementCard
        element={mockElement}
        onClick={onClick}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
    );

    fireEvent.click(container.firstChild as HTMLElement);
    expect(onClick).toHaveBeenCalledWith(mockElement);
  });

  it('calls onMouseEnter and onMouseLeave', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const { container } = render(
      <ElementCard
        element={mockElement}
        onClick={() => {}}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );

    fireEvent.mouseEnter(container.firstChild as HTMLElement);
    expect(onMouseEnter).toHaveBeenCalledWith(mockElement);

    fireEvent.mouseLeave(container.firstChild as HTMLElement);
    expect(onMouseLeave).toHaveBeenCalled();
  });
});