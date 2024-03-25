import { validateInput, shortenPublicHoliday } from '../helpers';

describe('validateInput', () => {
    test('should return with error for unsupported country', () => {
        const country = 'HU';
        const year = 1999;
        expect(() => validateInput({ year, country })).toThrow(`Country provided is not supported, received: ${country}`);
    });

    test('should return with error for unvalid year', () => {
        const country = 'GB';
        const year = 1999;
        expect(() => validateInput({ year, country })).toThrow(`Year provided not the current, received: ${year}`);
    });

    test('should return with true', () => {
        const country = 'GB';
        const year = 2024;
        expect(validateInput({ year, country })).toBeTruthy();
    });
});

describe('shortenPublicHoliday', () => {
    test('should return with true', () => {
        const holiday = {
            date: '01/01/2021',
            localName: 'localName',
            name: 'name',
            countryCode: 'HU',
            fixed: true,
            global: true,
            counties: null,
            launchYear: null,
            types: ['HU', 'GB']
        };

        expect(shortenPublicHoliday(holiday)).toStrictEqual({ localName: 'localName', name: 'name', date: '01/01/2021' });
    });
});