# tercerEntregable

#rutas de usuario
Obtener a un usuario por su id (GET): 
'localhost:8000/api/v1/users/:id'

Obtener a un usuario junto con los cursos donde esta suscrito (GET):
'localhost:8000/api/v1/users/:id/courses'

Crear un usuario (POST):
'localhost:8000/api/v1/users'

Agregar un curso a un usuario (POST):
'localhost:8000/api/v1/users/:courseId'
!Requiere Body: { "userId": X);

Actualizar un usuario(PUT):
'localhost:8000/api/v1/users/:id'

#rutas de cursos
Obtener todos los cursos(GET):
'localhost:8000/api/v1/courses'

Obtener todos los cursos junto sus videos(GET):
'localhost:8000/api/v1/courses/videos'

Obtener todos los cursos junto a sus categorías(GET):
'localhost:8000/api/v1/courses/categories'

Crear un nuevo curso(POST):
'localhost:8000/api/v1/courses'

Editar un curso
localhost:8000/api/v1/courses/:id'

#rutas videos
Crear video(POST):
'localhost:8000/api/v1/videos'

Eliminar video(DELETE):
'localhost:8000/api/v1/videos/:id'

#rutas Categorias
Crear categoria(POST):
'localhost:8000/api/v1/categories'

Eliminar categoria(DELETE):
'localhost:8000/api/v1/categories/:id'
