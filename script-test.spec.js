describe('Jasmine test for a bubble sort implementation', function() {

    it('should sort a simple integer list', function() {
        var items = [17, 43, 216, 3, 9, 27],
            sorted = bubbleSort(items);

        expect(sorted[0]).toEqual(3);
        expect(sorted[1]).toEqual(9);
        expect(sorted[2]).toEqual(17);
        expect(sorted[3]).toEqual(27);
        expect(sorted[4]).toEqual(43);
        expect(sorted[5]).toEqual(216);
        expect(sorted.length).toEqual(6);
    })
});