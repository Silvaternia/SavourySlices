export default async function fetchJsonData() {
    try {
        const response = await fetch("../src/json/products.json");
        if (!response.ok) { throw new Error(`Network response was not : ${response.status}`); }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There is a fetch problem:', error);
    }
}
