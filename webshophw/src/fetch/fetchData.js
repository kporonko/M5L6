export const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
                    // .then(res=>res.json())
                    // .then(json=>console.log(json));
                    console.log(response);
    const body = await response.json();
    console.log(body);

    return body;
}