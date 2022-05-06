# Sahumá

Tienda de Sahumos utilizando react-app.

Utilicé 3 rutas para renderizar respectivamente la galería de productos completa(nav-brand), la galería filtrada según las categorías navegables en el navbar y el detalle de cada producto.

Comencé trayendo a los componentes el array de productos desde un archivo externo con una promesa pero al encontrarme con algunos problemas decidí tener dicho array cargado directamente en los componentes inteligentes de cada ruta (itemBox e itemDetailContainer).

En ambos componentes inteligentes cargué los datos de los productos a través de una promesa con setTimeOut al renderizarlo y con los parámetros necesarios para filtrar cada categoría y producto(category/Id).

Utilicé además de las dependencias propias de la app, react-router-dom, bootstrap para utilizar clases y también react-bootstrap para traer componentes(card).