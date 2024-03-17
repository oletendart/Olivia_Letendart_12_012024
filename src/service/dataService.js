import mockData from '../data/usersDataMock.json';

const DataService = {
    getUsers: () => {
        return mockData;
    },

    getUserById: (userId) => {
        return mockData.find(user => user.data.id === userId);
    },

};

export default DataService;
