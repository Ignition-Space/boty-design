import invariant from 'invariant';
import React from 'react';
import useFormContext from '../hooks/useFormContext';
const Field: React.FC<{ name: string; render?: any }> = ({ name, render }) => {
  const ctx = useFormContext();

  console.log(ctx);
  // invariant()
  return (
    <div>
      <div className="error"></div>
    </div>
  );
};

export default Field;
