import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('page had a header text', () => {
  render(<App />); // change to Header component
  const linkElement = screen.getByText(/World Cup/i);
  expect(linkElement).toBeInTheDocument();
});

// for the following test I will create a demo match with Team 1 and Team 2 to run tests on.
// if 'start a match' test is failing, the other tests will fail for sure as well.

test('start a match', () => {
  render(<App />); // change component
  const inputHomeTeam = screen.getByLabelText('Home Team');
  const inputGuestTeam = screen.getByLabelText('Guest Team');
  const createButton = screen.getByText('Create new match');
  userEvent.type(inputHomeTeam, "Team 1")
  userEvent.type(inputGuestTeam, "Team 2")
  userEvent.click(createButton);
  expect('Team 1: 0').toBeInTheDocument();
});

test('update match score', () => {
  render(<App />); // change component
  const inputHomeTeam = screen.getByLabelText('Home Team');
  const inputGuestTeam = screen.getByLabelText('Guest Team');
  const createButton = screen.getByText('Create new match');
  userEvent.type(inputHomeTeam, "Team 1")
  userEvent.type(inputGuestTeam, "Team 2")
  userEvent.click(createButton);
  const inputTeam1 = screen.getByLabelText('Team1');
  const inputTeam2 = screen.getByLabelText('Team2');
  userEvent.type(inputTeam1, "3")
  userEvent.type(inputTeam2, "1")
  expect('Team 1: 3').toBeInTheDocument();
});

test('finish a game', () => {
  render(<App />); // change component
  const inputHomeTeam = screen.getByLabelText('Home Team');
  const inputGuestTeam = screen.getByLabelText('Guest Team');
  const createButton = screen.getByText('Create new match');
  userEvent.type(inputHomeTeam, "Team 1")
  userEvent.type(inputGuestTeam, "Team 2")
  userEvent.click(createButton);
  const finishButton = screen.getByLabelText('Finish Match');
  userEvent.click(finishButton);
  expect('Team 1').not.toBeInTheDocument();
});

test('sort matches by score', () => {
  render(<App />); // change component
  const inputHomeTeam = screen.getByLabelText('Home Team');
  const inputGuestTeam = screen.getByLabelText('Guest Team');
  const createButton = screen.getByText('Create new match');
  userEvent.type(inputHomeTeam, "Team 1")
  userEvent.type(inputGuestTeam, "Team 2")
  userEvent.click(createButton);
  userEvent.type(inputHomeTeam, "Team 3")
  userEvent.type(inputGuestTeam, "Team 4")
  userEvent.click(createButton);
  const inputTeam1 = screen.getByLabelText('Team1');
  const inputTeam2 = screen.getByLabelText('Team2');
  userEvent.type(inputTeam1, "3")
  userEvent.type(inputTeam2, "1")
  expect('Team 1'.compareDocumentPosition('Team 3')).toBe(2);
});

test('sort matches by time', () => {
  render(<App />); // change component
  const inputHomeTeam = screen.getByLabelText('Home Team');
  const inputGuestTeam = screen.getByLabelText('Guest Team');
  const createButton = screen.getByText('Create new match');
  userEvent.type(inputHomeTeam, "Team 1")
  userEvent.type(inputGuestTeam, "Team 2")
  userEvent.click(createButton);
  userEvent.type(inputHomeTeam, "Team 3")
  userEvent.type(inputGuestTeam, "Team 4")
  userEvent.click(createButton);
  expect('Team 1'.compareDocumentPosition('Team 3')).toBe(2);
});