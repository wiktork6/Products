import { Test } from "@nestjs/testing"
import {RequestValidator} from "../src/products/utils/RequestValidator";


describe('RequestValidator', () => {
    describe('when isValid is called', () => {

        let requestValidator = new RequestValidator();



        test('isValid_whenNameIsTooLong_shouldReturnFalse', () => {
            const testRequest = {
                name: "123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
                price: 32.1
            }

            expect(requestValidator.isValid(testRequest)).toEqual(false);
        })

        test('isValid_whenNameIsTooShort_shouldReturnFalse', () => {
            const testRequest = {
                name: "A",
                price: 32.1
            }

            expect(requestValidator.isValid(testRequest)).toEqual(false);
        })

        test('isValid_whenRequestIsValid_shouldReturnTrue', () => {
            const testRequest = {
                name: "Bread",
                price: 32.1
            }
            expect(requestValidator.isValid(testRequest)).toEqual(true);
        })


    })
})