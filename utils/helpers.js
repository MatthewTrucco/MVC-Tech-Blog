module.exports = {
    formatDate: (date, format) => {
        return moment(date).format(format);
    },
    truncate: (text, length) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    },
};
