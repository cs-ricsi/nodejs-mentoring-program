import request from 'supertest';
import { PUBLIC_HOLIDAYS_API_URL } from '../config';
import { PublicHoliday } from '../types';

const year = 2024;
const country = 'GB';

const publicHolidays: PublicHoliday[] = [
    {
        date: "2024-01-01",
        localName: "New Year's Day",
        name: "New Year's Day",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-NIR"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-01-01",
        localName: "New Year's Day",
        name: "New Year's Day",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-ENG",
            "GB-WLS"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-01-01",
        localName: "New Year's Day",
        name: "New Year's Day",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-SCT"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-01-02",
        localName: "2 January",
        name: "2 January",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-SCT"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-03-17",
        localName: "Saint Patrick's Day",
        name: "Saint Patrick's Day",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-NIR"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-03-29",
        localName: "Good Friday",
        name: "Good Friday",
        countryCode: "GB",
        fixed: false,
        global: true,
        counties: null,
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-04-01",
        localName: "Easter Monday",
        name: "Easter Monday",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-ENG",
            "GB-WLS",
            "GB-NIR"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-05-06",
        localName: "Early May Bank Holiday",
        name: "Early May Bank Holiday",
        countryCode: "GB",
        fixed: false,
        global: true,
        counties: null,
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-05-27",
        localName: "Spring Bank Holiday",
        name: "Spring Bank Holiday",
        countryCode: "GB",
        fixed: false,
        global: true,
        counties: null,
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-07-12",
        localName: "Battle of the Boyne",
        name: "Battle of the Boyne",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-NIR"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-08-05",
        localName: "Summer Bank Holiday",
        name: "Summer Bank Holiday",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-SCT"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-08-26",
        localName: "Summer Bank Holiday",
        name: "Summer Bank Holiday",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-ENG",
            "GB-WLS",
            "GB-NIR"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-11-30",
        localName: "Saint Andrew's Day",
        name: "Saint Andrew's Day",
        countryCode: "GB",
        fixed: false,
        global: false,
        counties: [
            "GB-SCT"
        ],
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-12-25",
        localName: "Christmas Day",
        name: "Christmas Day",
        countryCode: "GB",
        fixed: false,
        global: true,
        counties: null,
        launchYear: null,
        types: [
            "Public"
        ]
    },
    {
        date: "2024-12-26",
        localName: "Boxing Day",
        name: "St. Stephen's Day",
        countryCode: "GB",
        fixed: false,
        global: true,
        counties: null,
        launchYear: null,
        types: [
            "Public"
        ]
    }
]

describe('PUBLIC HOLIDAYS API', () => {
    test('should return 200 and random cat fact', async () => {
        const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(`/PublicHolidays/${year}/${country}`);
        expect(status).toEqual(200);
        expect(body).toEqual(publicHolidays);
    });

    test('should return 200', async () => {
        const { status, body } = await request(PUBLIC_HOLIDAYS_API_URL).get(`/IsTodayPublicHoliday/${country}`);
        expect(status).toEqual(204);
    });
});