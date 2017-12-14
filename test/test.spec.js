describe('karma test with Chai', function() {
    it('should expose the Chai assert method', function() {
        assert.ok('everything', 'everything is ok');
    })

    it('should work with ES6 arrow function', () => {
        (1).should.not.equal(2);
    })
})