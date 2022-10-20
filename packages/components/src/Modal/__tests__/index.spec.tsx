import Modal from '..';
import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

describe('modal test', () => {
  test('renders modal component', () => {
    render(<Modal>内容</Modal>);
    screen.debug();
  });
});
