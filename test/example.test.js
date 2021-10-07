// IMPORT MODULES under test here:
import { didUserWin } from "../utils.js";

const test = QUnit.test;

test('user: rock, computer: scissors', (expect) => {
    const expected = 'wins';
    const actual = didUserWin('rock', 'scissors');
    expect.equal(actual, expected);
});

test('user: rock, computer: paper', (expect) => {
    const expected = 'losses';
    const actual = didUserWin('rock', 'paper');
    expect.equal(actual, expected);
});

test('user: paper, computer: rock', (expect) => {
    const expected = 'wins';
    const actual = didUserWin('paper', 'rock');
    expect.equal(actual, expected);
});

test('user: paper, computer: scissors', (expect) => {
    const expected = 'losses';
    const actual = didUserWin('paper', 'scissors');
    expect.equal(actual, expected);
});
