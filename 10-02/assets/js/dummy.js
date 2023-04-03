const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.get("products/").then((res) =>
  res.data.products.forEach((prods) => {
    $("tbody.product").append(`
    <tr id="datpus${prods.id}">
      <td scope="row">${prods.id}</td>
      <td>${prods.title}</td>
      <td> Jenis Product </td>
      <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Update
    </button></td>

    <td><button type="button" class="btn btn-primary" onclick="delpost(${prods.id})">
    Hapus
  </button></td>
    </tr>


    <!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

    
  `);
  })
);

function delpost(aug) {
  fetch(`https://dummyjson.com/products/${aug}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      $(`#datpus${data.id}`).css("display", "none");
      // console.log(data)
    });
}
