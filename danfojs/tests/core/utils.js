import { assert } from "chai";
import { Utils } from '../../src/core/utils';
const utils = new Utils


describe("Utils Functions", function () {
    it("removes an element from an array", function () {
        let arr = [1, 2, 3, 4]
        assert.deepEqual(utils.remove(arr, 2), [1, 2, 4])
    })
    it("Checks if variable is a string", function () {
        let arr = ["1", "2"]
        assert.isTrue(utils.__is_string(arr[0]))
    })
    it("Checks if variable is a number", function () {
        let arr = [1, 2, 3, 4]
        assert.isTrue(utils.__is_number(arr[0]))
    })
    it("Checks if value is null", function () {
        let val = null
        let val2 = 1
        assert.isTrue(utils.__is_null(val))
        assert.isFalse(utils.__is_null(val2))
    })

    it("Checks if value is undefined", function () {
        let arr;
        assert.isTrue(utils.__is_undefined(arr))
    })
    it("random sample n elements from array", function () {
        let data = [[1, 2, 3], [4, 5, 6], [20, 30, 40], [39, 89, 78], [100, 200, 300]]
        assert.isFalse(utils.__sample_from_iter(data, 2) == utils.__sample_from_iter(data, 2))
        assert.isFalse(utils.__sample_from_iter(data, 3) === utils.__sample_from_iter(data, 3))

    })
    it("Generate number betwee two set of values", function () {

        let start = 0;
        let end = 5;
        let data = [0, 1, 2, 3, 4, 5]
        assert.deepEqual(utils.__range(start, end), data);
    })

    describe("__get_col_values", function () {
        it("converts an array of rows to array of columns", function () {
            let data = [[1, 2, 3], [4, 5, 6], [20, 30, 40]]
            let result = [[1, 4, 20], [2, 5, 30], [3, 6, 40]]
            assert.deepEqual(utils.__get_col_values(data), result)
        })
    })

    describe("__get_t", function () {
        it("Returns string type present in an 1D array", function () {
            let data = ['Alice', 'Boy', 'Girl', "39"]
            let result = ['string']
            assert.deepEqual(utils.__get_t(data), result)
        })
        it("Returns float type present in an 1D array", function () {
            let data = [1.1, 2.1, 3.2, 4.4]
            let result = ['float32']
            assert.deepEqual(utils.__get_t(data), result)
        })
        it("Returns int type present in an 1D array", function () {
            let data = [1, 2, 3, 45]
            let result = ['int32']
            assert.deepEqual(utils.__get_t(data), result)
        })
        it("Returns float when there's a mixture of int and float in a 1D array", function () {
            let data = [1, 2.1, 3, 45]
            let result = ['float32']
            assert.deepEqual(utils.__get_t(data), result)
        })

        it("Returns the data type present in an 2D array", function () {
            let data = [['Alice', 'Boy', 'Girl', "39"], [2, 5, 30, 89], [3.1, 6.1, 40.1, 78.2]]
            let result = ['string', 'int32', 'float32']
            assert.deepEqual(utils.__get_t(data), result)
        })
        it("Returns the string dtype when there's a mixture of dtyoes in a 2D array", function () {
            let data = [['Alice', 'Boy', 'Girl', 21], [2, 5, 30, "hey"], [3, 6, 40.1, 78.2]]
            let result = ['string', 'string', 'float32']
            assert.deepEqual(utils.__get_t(data), result)
        })
    })


    describe("__median", function () {
        it("Gets the median value of an even array", function () {
            let data = [100, 2, 3, 20, 30, 40]
            assert.deepEqual(utils.__median(data), 25)
        })
        it("Gets the median value of an odd array", function () {
            let data = [1, 30, 20, 50, 40]
            assert.deepEqual(utils.__median(data), 30)
        })
    })

    describe("__mode", function () {
        it("Gets the modal value(s) of an array", function () {
            let data = [100, 2, 3, 20, 20, 40]
            assert.deepEqual(utils.__mode(data), [20])
        })
        it("Returns the multi-modal values of an array", function () {
            let data = [100, 2, 3, 20, 20, 40, 4, 4, 4, 20]
            assert.deepEqual(utils.__mode(data), [4, 20])
        })
    })

    describe("__round", function () {
        it("round elements in array to 1 dp", function () {
            let data = [10.01, 2.2, 3.11, 20.505, 20.22, 40.0909]
            assert.deepEqual(utils.__round(data, 1), [10.0, 2.2, 3.1, 20.5, 20.2, 40.1])
        })
        it("round elements in array to 2 dp", function () {
            let data = [10.019, 2.2099, 3.1145, 20.506, 20.22, 40.0909]
            assert.deepEqual(utils.__round(data, 2), [10.02, 2.21, 3.11, 20.51, 20.22, 40.09])
        })
    })



})