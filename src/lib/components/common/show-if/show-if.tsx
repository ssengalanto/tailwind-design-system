import React from 'react';

export interface ShowIfProps {
  condition: boolean;
  fallback?: JSX.Element;
}

export const ShowIf: React.FC<ShowIfProps> = ({ condition, children, fallback }) => (
  <>{condition ? children : fallback ?? null}</>
);

export default React.memo(ShowIf);
