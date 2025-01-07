import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../components/App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn(() =>
      Promise.resolve([
        {
          title: 'Project 1',
          blurb: 'This is a test project.',
          by: 'User 1',
          location: 'City 1',
          country: 'Country 1',
          'percentage.funded': 50,
          'amt.pledged': 1000,
          currency: 'USD',
          url: '/project1',
        },
        {
          title: 'Project 2',
          blurb: 'Another test project.',
          by: 'User 2',
          location: 'City 2',
          country: 'Country 2',
          'percentage.funded': 75,
          'amt.pledged': 1500,
          currency: 'EUR',
          url: '/project2',
        },
        // Additional mock projects...
      ])
    ),
  })
) as jest.Mock;

test("Renders Person component correctly", async () => {
  const { getByText } = render(<App />);

  expect(document.getElementsByTagName('h1').length).toBe(1); // we can access the document object
  
  const htmlElement = getByText('Projects')
  
  // expect(htmlElement).toBeInTheDocument() not working
  expect(htmlElement).not.toBeFalsy();
  expect(screen.getByText('1 of 2')).toBeInTheDocument();
});
