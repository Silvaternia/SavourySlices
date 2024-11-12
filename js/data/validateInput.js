export default function validateInputs({
    title,
    description,
    price,
    stock,
    image,
}) {
    // Using regex to validate ( regex for the win )
    const regexFormat = /^[a-zA-Z0-9\s.\-_:@/?&=+%$#*]+$/i;

    const isValidString = (str) => regexFormat.test(str);
    const isValidFloat = (num) => !Number.isNaN(num) && parseFloat(num) == num;
    const isValidInt = (num) => !Number.isNaN(num) && parseInt(num) == num;

    if (title === '' || description === '' || price === '' || stock === '' || image === '') {
        alert('All fields must be filled out.');
        return false;
    }

    if (!isValidString(title) || !isValidString(description) || !isValidString(image)) {
        alert('Title, description, and image must be valid strings.');
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
