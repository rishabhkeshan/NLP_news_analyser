import {checkForValidity} from "../client/js/UrlValid.js";
test('Valid URL', () => {
    expect(checkForValidity("https://www.theguardian.com/commentisfree/2018/feb/17/steven-pinker-media-negative-news")).toBe(true);
});

test('Invalid URL', () => {
    expect(checkForValidity("Evaluate me")).toBe(false);
});