const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/MEAN-practice',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))