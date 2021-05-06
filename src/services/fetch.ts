import axios, { AxiosResponse } from 'axios';

const fetch = async (url: string): Promise<AxiosResponse<[]> | void> => axios.get(url);

export default fetch;
