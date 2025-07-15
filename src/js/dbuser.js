// import { Axios } from "axios";
// import { events,assignments  } from "../main";

// export function loaderDbUser() {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//         window.location.href = '/login';
//         return;
//     }

// }

// export async function showEvente() {
//  const eventList = document.getElementById("event-list")
//  eventList.innerHTML = ""

//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   console.log("Current User:", currentUser);

//   const isAdmin = currentUser && currentUser.role === "admin";
//   console.log("Is Admin:", isAdmin);
  
  
//   if (isAdmin) {
//     eventList.innerHTML += `
//     <div class="admin-actions">
//       <button class="btn btn-success" onclick="createProduct()">
//         + Create New product
//       </button>
//     </div>
//     `;
//   }

//  events.forEach((product) => {
//     const colum = document.createElement("div");
//     colum.className = "col-md-4 mb-4";

//     const adminButton = isAdmin ? `
//       <button class="btn btn-warning" onclick="editProduct(${product.id})">
//         Edit
//       </button>
//       <button class="btn btn-danger" onclick="deleteProduct(${product.id})">
//         Delete
//       </button>
//     ` : `
//       <button class="btn btn-primary" onclick="addToCart(${product.id})">
//         Add to Cart
//       </button>
//     `;

//     colum.innerHTML = `
//       <div class="card">
//         <img src="${product.image}" class="card-img-top" alt="${product.name}">
//         <div class="card-body">
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text">$${product.price.toFixed(2)}</p>
//           <p class="card-text">Size: ${product.size}</p>
//           <p class="card-text">Stock: ${product.stock}</p>
//           <div class="d-flex justify-content-between">
//             ${adminButton}  
//             </div>
//         </div>
//       </div>
//     `;
//     eventList.appendChild(colum);
//  });

 
// }