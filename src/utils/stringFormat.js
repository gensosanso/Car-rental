const capitalizeEveryWord = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

const capitalizeOnlyFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatPriceSpace = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export { capitalizeEveryWord, capitalizeOnlyFirstLetter, formatPriceSpace };