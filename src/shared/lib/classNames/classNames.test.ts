import { classNames } from './classNames'

describe('classNames', () => {
  test('only one argument', () => {
    expect(classNames('some-class')).toBe('some-class')
  })

  test('with mode and additional classes', () => {
    const expected = 'some-class text-block test-class hovered'
    expect(classNames('some-class', { hovered: true, selected: false }, ['text-block test-class'])).toBe(expected)
  })

  test('with mode undefined', () => {
    const expected = 'some-class text-block test-class hovered'
    expect(classNames('some-class', { hovered: true, selected: undefined }, ['text-block test-class'])).toBe(expected)
  })

  test('with additional class', () => {
    const expected = 'some-class foo bar'
    expect(classNames('some-class', {}, ['foo', 'bar'])).toBe(expected)
  })
})