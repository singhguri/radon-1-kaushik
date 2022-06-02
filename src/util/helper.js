const {batch} = require('../routes/logger');

const getMonthName = (month) => {
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        
    }
}

const printDate = () => console.log(new Date().getDate());

const printMonth = () => console.log(getMonthName(new Date().getMonth()));

const getBatchInfo = () => console.log(batch + ', W3D' + new Date().getDate() + ', the topic for today is Nodejs module system.');

module.exports = {printDate, printMonth, getBatchInfo};