describe('split', function(){
    it('splits an array ', ()=>{
        const splitArr=split([1, 2, 3, 4, 5]);
        expect(splitArr).toEqual([[1, 2],[3,4,5]])
    })
})
describe('joinSorted', function(){
    it('joins two sorted arrays and the result is sorted', ()=>{
        const joined=joinSorted([1, 2], [1.5, 3]);
        expect(joined).toEqual([1, 1.5, 2, 3])
    })
})
describe('mergeSort', function(){
    it('sorts an array', ()=>{
        const sorted=mergeSort([1, 3, 6, 2, 4 , 5])
        expect(sorted).toEqual([1,2,3,4,5,6])
    })
})