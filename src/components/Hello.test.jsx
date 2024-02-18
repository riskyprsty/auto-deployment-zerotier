import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hello from './Hello'

describe('App', () => {
  it('Hello World to be in document', () => {
    render(<Hello />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})