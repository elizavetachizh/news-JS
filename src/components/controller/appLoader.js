import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b693fea9f5fe4225bcb60d362b247ace', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
