import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom'

declare const global: any;

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve([
      {
        "s.no": 0,
        "amt.pledged": 15823,
        "blurb": "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
        "by": "Museum of Science Fiction",
        "country": "US",
        "currency": "usd",
        "end.time": "2016-11-01T23:59:00-04:00",
        "location": "Washington, DC",
        "percentage.funded": 186,
        "num.backers": "219382",
        "state": "DC",
        "title": "Catalysts, Explorers & Secret Keepers: Women of SF",
        "type": "Town",
        "url": "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery"
      },
      {
        "s.no": 1,
        "amt.pledged": 10000,
        "blurb": "A short description for project 2",
        "by": "Company 2",
        "country": "US",
        "currency": "usd",
        "end.time": "2017-12-01T23:59:00-04:00",
        "location": "New York, NY",
        "percentage.funded": 50,
        "num.backers": "15000",
        "state": "NY",
        "title": "Project 2",
        "type": "Town",
        "url": "/projects/1608905146/project2"
      }
    ])
  } as Response)
);

describe('App Component', () => {
  // Test 1
  it('should render the list of projects', async () => {
    render(<App />);
    
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    expect(screen.getByText('Catalysts, Explorers & Secret Keepers: Women of SF')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
  });

  // Test 2
  it('should paginate the projects correctly', async () => {
    render(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const pageButtons = screen.getAllByRole('button', { name: /go to page/i });
    expect(pageButtons.length).toBeGreaterThan(0); // Check if pagination buttons are rendered
  });

  // Test 3
  it('should fetch data and handle the pagination correctly with multiple pages', async () => {
    render(<App />);

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const projectItems = screen.getAllByRole('listitem');
    expect(projectItems.length).toBeLessThanOrEqual(5);
  });
});
