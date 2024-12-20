require("jest-fetch-mock").enableMocks();

global.window.confirm = jest.fn(() => true);

global.alert = jest.fn();

delete window.location;
window.location = { href: "" };
