### To run the project
Run npm install and then npm start.
Run npm test to run the tests.

http://localhost:3000/

# My notes

### Pre coding
Why am I using react for this coding exercise?
I chose react because I started learning it for the first time.
I bought a 71.5-hour react course on Udemy and went through only 8 hours of video.
I chose to use react for this project, to show my ability to learn and develop my skills,
and to show how much progress I am making in such a short time, starting from scratch and
building my knowledge up.
I am sure this project will not have the best results, the most efficient code, or the best
solutions. But I hope choosing react for this will show the potential I have.

### During coding
I found an issue with the testing library.
`userEvent.type(input, 'value');` is not working and not updating the value.
`fireEvent.change(input, {target: {value: 'example'}});` also didn't work.
I have tried to upgrade testing-library/user-event to V14.6.1 with no success.
I have tried playing with several testing library versions with no success.
This caused me to rethink my approach and change it.
However, due to the requirement to give a pair of absolute scores to update the score,
I have to keep the input fields and cannot change to a button that will increment the score.
Thus, the test for updating the score will be commented out. I will however put a comment in the code,
to hard code input values in order to run this test. This is not a good practice, but with the testing issues, there is not much else I can do.

### Post coding
This exercise was fun to work on. I learned new things and approaches to using React and
see I definately have a lot more to learn.
It was fun to challenge myself with a completely new tech and see how much I learned.
I am not sure I worked through OO design and SOLID principles, but I did my best with the knowledge
I currently have.
I am however 100% sure more practice is needed and I have to learn how to use those principles
correctly with Reach.
As for testing, I came through some issues and a lot of changes during the project, yet I tried to
update the test file before writing the new code.
When starting the project I was 100% react-focused and did not think of styling, which caused template
and structure changes that forced me to update the tests as well. I believe this will not be an issue
while working on a real project, an UI design is provided and being considered beforehand.

# Instructions:

Please provide the implementation of the Live Football World Cup Score Board as a simple
library:
1. Please read and familiarize yourself with the guidelines below.
2. Please follow the guidelines to implement the task as per requirements described further
down in this document.

# Guidelines:

- Keep it simple. Follow the requirements and try to implement the simplest solution you can think of
that works. Do not forget about edge cases!
- Use an in-memory store solution (for example just use collections to store the information you might
require).
- We don’t expect the solution to be a REST API, command line application, a Web Service,
or Microservice. Just a simple library implementation.
- Focus on Quality. Use Test-Driven Development (TDD), pay attention to OO design, Clean Code
wand adherence to SOLID principles.
- Approach. Code the solution according to your standards. Please share your solution with a link
to a source control repository (e.g. GitHub, GitLab, BitBucket) as we would like you to see your
progress (your commit history is important)
- Add a README.md file where beside the project documentation you can make notes of any
assumption or things you would like to mention to us about your solution.

# Task requirements:

You are working in a sports data company, and we would like you to develop a new Live Football
World Cup Scoreboard library that shows all the ongoing matches and their scores.
The scoreboard supports the following operations:
1. Start, assuming initial score 0 – 0 and adding it the scoreboard.
This should capture following parameters:
a. Home team
b. Away team
2. Update score. This should receive a pair of absolute scores: home team score and away
team score.
3. Finish match currently in progress. This removes a match from the scoreboard.
4. Get a summary of matches in progress ordered by their total score. The matches with the
same total score will be returned ordered by the most recently started match in the
scoreboard.

For example, if following matches are started in the specified order and their scores
respectively updated:
a. Mexico 0 - Canada 5
b. Spain 10 - Brazil 2
c. Germany 2 - France 2
d. Uruguay 6 - Italy 6
e. Argentina 3 - Australia 1

The summary should be as follows:
1. Uruguay 6 - Italy 6
2. Spain 10 - Brazil 2
3. Mexico 0 - Canada 5
4. Argentina 3 - Australia 1
5. Germany 2 - France 2
