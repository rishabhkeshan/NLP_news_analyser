import { handleSubmit } from "../client/js/formHandler.js";
    test('handleSubmit() should be defined so as to get data from API', () => {
        expect(handleSubmit).toBeDefined();
    })