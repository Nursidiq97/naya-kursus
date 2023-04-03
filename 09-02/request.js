const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.get("products/").then((res) =>
  res.data.products.forEach((prods) => {
    $("tbody").append(`
    <tr>
      <th scope="row">${prods.id}</th>
      <td>${prods.title}</td>
      <td${prods.title}</td> 
      <td${prods.price}</td> 
      <td${prods.images[0]}</td> 
    </tr>
  `);
  })
);
