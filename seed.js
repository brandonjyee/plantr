const { db, Gardener, Plot, Vegetable } = require('./model');

db.sync({force: true})
    .then(() => {
        console.log("DATABASE SYNCED");
        // Insert some vegetables
        return insertVegetables();      // return statement waits until it computes
    })
    .catch(() => {
        console.log("DISASTER! SOMETHING WENT WRONG");
    })
    .finally(() => db.close());          // <=== NASTY stuff trying to sync up nested async operations

function insertVegetables() {
    console.log('In insertVegetables()');
    let vegetable = new Vegetable({
        name: 'Squash',
        color: 'Green',
        planted_on: new Date().toLocaleString(),
    });

    return vegetable.save()
    .then(() => {
        console.log('Saved a vegetable!');
    })
    .catch(error => {
        console.error(error);

    })

}
