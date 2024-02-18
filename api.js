
/*
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = `Product: ${product.title}, Price: $${product.price}`;
      productList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  */