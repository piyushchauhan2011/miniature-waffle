'use strict';

const pkg2 = require('..');

describe('pkg-2', () => {
    it('works', () => {
        const message = pkg2();
        expect(message).toEqual('package 2');
    });
});
