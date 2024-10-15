export function validateInputs({ title, description, price, stock, image }) {
    const isValidString = (str) => /^[a-zA-Z0-9\s]+$/.test(str);
    const isValidFloat = (num) => !isNaN(num) && parseFloat(num) == num;
    const isValidInt = (num) => !isNaN(num) && parseInt(num) == num;

    if (title === '' || description === '' || price === '' || stock === '' || image === '') {
        alert('All fields must be filled out.');
        return false;
    }

    if (!isValidString(title) || !isValidString(description) || !isValidString(image)) {
        alert('Title, description, and image must be valid strings without special characters.');
        return false;
    }

    if (!isValidFloat(price)) {
        alert('Price must be a valid float.');
        return false;
    }

    if (!isValidInt(stock)) {
        alert('Stock must be a valid integer.');
        return false;
    }

    return true;
}
