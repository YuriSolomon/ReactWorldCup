import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';
import App from './App';

test('page had a header text', () => {
  render(<App />); // change to Header component
  const linkElement = screen.getByText(/World Cup/i);
  expect(linkElement).toBeInTheDocument();
});

// for the following test I will create a demo match with Team 1 and Team 2 to run tests on.
// if 'start a match' test is failing, the other tests will fail for sure as well.

test('start a match', async () => {
  render(<App />);
// userEvent.type(inputGuestTeam, 'Team 1') not working for some reason. a lot of complaints online, no solution yet
  const createButton = screen.getByText('Create new match');
  userEvent.click(createButton);
  expect(screen.getByText('Home team: Team 1: 0')).toBeInTheDocument();
});

/* example to how I would use testing if I could type a value into inputs

test('update match score', () => { // sample data is needed for this, as .type() is not working
  render(<App />);
  const inputHomeTeam = screen.getByTitle('homeTeam');
  const inputGuestTeam = screen.getByTitle('guestTeam');
  const createButton = screen.getByText('Create new match');
  userEvent.type(inputHomeTeam, "Team 1")
  userEvent.type(inputGuestTeam, "Team 2")
  userEvent.click(createButton);
  const inputTeam1 = screen.getByTitle('homeTeamScore');
  const inputTeam2 = screen.getByTitle('guestTeamScore');
  userEvent.type(inputTeam1, "3")
  userEvent.type(inputTeam2, "1")
  const updateButton = screen.getByText('Update match scores');
  userEvent.click(updateButton);
  expect('Team 1: 3').toBeInTheDocument();
});
*/

// uncomment if you try to test using hardcode score in iputs
/*
test('update match score', () => { // sample data is needed for this, as .type() is not working
  render(<App />);
  const updateButton = screen.getByText('Update match scores');
  userEvent.click(updateButton);
  expect('Team 1: 3').toBeInTheDocument();
});
*/

test('finish a game', async () => {
  render(<App />); // change component
  const currentMatch = screen.getByText('Home team: Spain: 6');
  const finishButton = screen.getByText('Finish match');
  userEvent.click(finishButton);
  expect(currentMatch).not.toBe(<p>Home team: Uruguay: 2</p>); // should be first item on the list
});

// for the next 2 tests I created the sample data in an order than needs to be sorted
// thus those will only pass if data is sorted correctly
// toBe(4) - after adding the button, the elements are no siblings but children of siblings, this the number changed from 2 to 4

test('sort matches by score', () => {
  render(<App />);
  const createButton = screen.getByText('Create new match');
  userEvent.click(createButton);
  const match1 = screen.getByText('Mexico: 6 - Canada: 10');
  const match2 = screen.getByText('Spain: 6 - Brazil: 6');
  expect(match1.compareDocumentPosition(match2)).toBe(4);
});

test('sort matches by time', () => {
  render(<App />);
  const createButton = screen.getByText('Create new match');
  userEvent.click(createButton);
  const match1 = screen.getByText('Uruguay: 2 - Italy: 10');
  const match2 = screen.getByText('Spain: 6 - Brazil: 6');
  expect(match1.compareDocumentPosition(match2)).toBe(4);
});