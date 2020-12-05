import React from 'react';

export const mockComponentTestId = 'mock-component';

export const MockComponent: React.FC = () => (
  <div data-testid={mockComponentTestId}>this is a mock component</div>
);
