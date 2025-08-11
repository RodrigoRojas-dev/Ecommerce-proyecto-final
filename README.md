# Atenas Collection

## 📝 Objetivo General

El objetivo de este proyecto es crear una tienda online funcional que implementa una serie de funcionalidades técnicas y de presentación para ofrecer una experiencia de usuario completa y dinámica.

---

## 🚀 Funcionalidades Implementadas

### 🔐 Gestión de Usuarios y Autenticación

* **Registro de usuario:** Se implementó un formulario de registro que interactúa directamente con el endpoint de usuarios de la **FakeStoreAPI** para crear nuevos perfiles.
* **Simulación de sesión:** Tras un registro exitoso, se simula el inicio de sesión a través de un estado global.

---

## 🏛️ Arquitectura del Proyecto

A diferencia de la plantilla base, este proyecto se ha desarrollado desde cero utilizando una arquitectura de contextos para una gestión de estado más eficiente:

* **`AuthContext`:** Se encarga de la lógica de autenticación de usuarios, gestionando estados como `user` y `LoginUser`.
* **`ProductsContext`:** Este contexto se creó para centralizar toda la lógica relacionada con los productos. Incluye las siguientes funciones **CRUD** que interactúan con la **FakeStoreAPI**:
    * `getProducts()`: Obtiene todos los productos de la API.
    * `createProduct(product)`: Envía una solicitud para crear un nuevo producto.
    * `updateProduct(id, title, price, description, category, image)`: Permite actualizar un producto existente.
    * `delProduct(id)`: Elimina un producto de la base de datos.