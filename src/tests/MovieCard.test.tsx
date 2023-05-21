import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

//test if the movie title renders without errors
test('should render the movie title', () => {
  // Arrange
  const movie = {
    id: '1',
    imageURL: 'example.com/image.jpg',
    title: 'Test Movie',
    summary: 'Test summary',
    rating: 8,
  };
  const onAccept = jest.fn();
  const onReject = jest.fn();

  // Act
  render(<MovieCard movie={movie} onAccept={onAccept} onReject={onReject} />);
  const title = screen.getByText('Test Movie');

  // Assert
  expect(title).toBeInTheDocument();
});

//test if the movie summary renders without errors
test('should render the movie summary', () => {
  // Arrange
  const movie = {
    id: '1',
    imageURL: 'example.com/image.jpg',
    title: 'Test Movie',
    summary: 'Test summary',
    rating: 8,
  };
  const onAccept = jest.fn();
  const onReject = jest.fn();

  // Act
  render(<MovieCard movie={movie} onAccept={onAccept} onReject={onReject} />);
  const summary = screen.getByText('Test summary');

  // Assert
  expect(summary).toBeInTheDocument();
});
