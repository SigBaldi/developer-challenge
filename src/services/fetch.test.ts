import axios, { AxiosResponse } from 'axios';
import fetch from './fetch';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedWorksResponse: AxiosResponse = {
    data: {
        works: [
            {
                id: 0,
                title: "I'm a Stub",
                tags: [],
                image: '//cdn.shopify.com/s/files/rando.png',
                url: 'https://shop.avantarte.com/products/rando-stub',
                price: 999.0,
            },
        ],
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
};

describe('fetch', () => {
    it('fetches successfully data from an API', async () => {
        mockedAxios.get.mockResolvedValue(mockedWorksResponse);
        expect(axios.get).not.toHaveBeenCalled();
        const actual: void | AxiosResponse = await fetch('works');
        expect(axios.get).toHaveBeenCalled();
        expect(actual).toBe(mockedWorksResponse);
    });
});
