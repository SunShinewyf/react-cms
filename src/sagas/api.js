const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const normalAxios = axios.create();
const mockAxios = axios.create();


let mock = new MockAdapter(mockAxios);

mock.onPut('/login').reply(res => {
    return new Promise((resolve, reject) => {
        let data = JSON.parse(res.data).user;
        if (data.name === 'admin' && data.password === '123456') {
            resolve([200, require('./data/user')]);
        } else {
            resolve([500, { message: '用户名或密码错误' }]);
        }
    })

});

mock.onGet('/logout').reply(200, {});


export default mockAxios;
