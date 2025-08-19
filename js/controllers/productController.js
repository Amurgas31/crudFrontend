//--- 1. Importamos servicios para comunicación con la API ---
import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../services/productService.js";

import { getCategories } from "../services/categoryService.js";

import { uploadImageToFolder } from "../services/imageService.js";

//--- 2. Variables globales para la paginación ---
let currentPage = 0;
let currentSize = 10;

//Todo el contenido irá aquí
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos del DOM
    const tableBody = document.querySelector("#itemsTable tbody");
    const form = document.getElementById("productForm");
    const modal = new bootstrap.Modal(document.getElementById("itemModal"));
    const modalLabel = document.getElementById("itemModalLabel");
    const btnAdd = document.getElementById("btnAdd");
    const select = document.getElementById("productCategory");

    //Campos para manejo de imágenes
    // Input type="file"
    const imageFileInput = document.getElementById("productImageFile");

    // Campo hidden
    const imageUrlHidden = document.getElementById("productImageUrl");

    // Preview <img>  
    const imagePreview = document.getElementById("productImagePreview");

    // --- 4.
});