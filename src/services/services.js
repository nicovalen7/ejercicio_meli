import GlobalConstants from '../constants/constants';

const params = {
    method: 'GET',
     headers:{
        'Content-Type': 'application/json'
    }
}

export const searchItems = (query) => {
    return fetch(`${GlobalConstants.serverUrl}/api/items?q=${query}`, params);
}