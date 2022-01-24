const pm2Type = 'metric';
const pm2 = {
    metric: (i) => i,
};
const name = 'test';

const metric = {
    value: 0,
    pm2:
        pm2Type === 'metric'
            ? pm2.metric({
                  name,
              })
            : pm2.counter({
                  name,
                  id: pm2Type,
              }),
};

/**
 * @param {import('./types').SomeType} [item] some item
 * @returns {Promise<{item:Object,metric:*}>} a result
 */
function doWork(item) {
    return new Promise((resolve) => {
        resolve({item, metric});
    });
}

doWork()
    .then(() => {
        console.log('hi');
    })
    .catch(console.error);

module.exports = {doWork};
