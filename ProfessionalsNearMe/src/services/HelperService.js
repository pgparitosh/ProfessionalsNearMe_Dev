import AsyncStorage from 'react-native';

const HelperService = {

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    },

    async storeAsyncData(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.log(e);
        }
    },

    async getAsyncData(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (e) {
            console.log(e);
        }
    }
};

export default HelperService;