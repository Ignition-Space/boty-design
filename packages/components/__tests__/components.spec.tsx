import { describe, test } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../src/index';

describe('components test', () => {
  test('button test', () => {
    render(<Button />);
  });
});
