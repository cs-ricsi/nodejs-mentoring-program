import axios from 'axios';
import { getListOfPublicHolidays, checkIfTodayIsPublicHoliday, getNextPublicHolidays } from '../services/public-holidays.service';

const HOLIDAY = {
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

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getListOfPublicHolidays', () => {
    test('function should return with valid api data', async () => {
        mockedAxios.get.mockResolvedValue({ data: [HOLIDAY] });

        const holidayResponse = await getListOfPublicHolidays(2024, 'GB');
        expect(holidayResponse).toEqual([{ localName: HOLIDAY.localName, name: HOLIDAY.name, date: HOLIDAY.date }]);
    });

    test('should return with an empty array', async () => {
        mockedAxios.get.mockResolvedValue(new Error('failed'));

        const holidayResponse = await getListOfPublicHolidays(2024, 'GB');
        expect(holidayResponse).toEqual([]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

describe('checkIfTodayIsPublicHoliday', () => {
    test('should return true when api call return with status 200', async () => {
        mockedAxios.get.mockResolvedValue({ status: 200 });

        const todayIsPublicHoliday = await checkIfTodayIsPublicHoliday('GB');
        expect(todayIsPublicHoliday).toBe(true);
    });

    test('should return false when api call is return with error', async () => {
        mockedAxios.get.mockResolvedValue(new Error('failed'));

        const todayIsPublicHoliday = await checkIfTodayIsPublicHoliday('GB');
        expect(todayIsPublicHoliday).toBe(false);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

describe('getNextPublicHolidays', () => {
    test('function should return with valid api data', async () => {
        mockedAxios.get.mockResolvedValue({ data: [HOLIDAY] });

        const holidayResponse = await getNextPublicHolidays('GB');
        expect(holidayResponse).toEqual([{ localName: HOLIDAY.localName, name: HOLIDAY.name, date: HOLIDAY.date }]);
    });

    test('should return with an empty array when api call fails', async () => {
        mockedAxios.get.mockResolvedValue(new Error('failed'));

        const holidayResponse = await getNextPublicHolidays('GB');
        expect(holidayResponse).toEqual([]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});