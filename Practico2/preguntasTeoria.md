# TEORÍA - Trabajo práctico 2

1. **Explique el ciclo Rojo → Verde → Refactor y por qué es importante el tamaño de los pasos**  
Primero, redactar un test que falle (rojo); después, aplicar la lógica mínima para que pase (verde); y finalmente, refactorizar y limpiar el código conservando los tests en verde. Los pasos pequeños ayudan a disminuir errores, simplifican la detección de fallos y permiten una retroalimentación más rápida.

2. **Diferencie tests unitarios, de integración y E2E en APIs.**  
Las pruebas unitarias verifican funciones individuales, las de integración comprueban la interacción entre módulos (por ejemplo, servicios + DB stub) y las E2E prueban el sistema entero (DB real + HTTP). Cada individuo tiene un papel diferente en términos de confianza y rapidez.

3. **¿Qué es un doble de prueba? Defina mock, stub y spy y cuándo conviene cada uno.**  
- *Stub*: sustituye una dependencia para proporcionar datos controlados.  
- *Mock*: objeto que, además de verificarlo, garantiza que se produjeron ciertas interacciones.  
- *Spy*: documenta llamadas a funciones auténticas. Emplear stubs para regular los datos, mocks para comprobar las interacciones y spies para observar sin sustituir.

4. **¿Por qué es útil separar app de server? Muestre (en 8–10 líneas) un ejemplo mínimo con makeApp() y un test de integración con Supertest**  
Al separar `makeApp()` (que configura las rutas y el middleware) de `listen`, es posible crear instancias de la aplicación en pruebas sin necesidad de abrir un puerto. Muestra mínima en el repositorio (src/server.ts y src/app.ts).

5. **Zod: diferencia entre parse y safeParse. ¿Dónde usaría cada uno en una ruta Express y por qué?**  
Si la validación no tiene éxito, `parse` lanza una excepción; en cambio, `safeParse` devuelve `{ success: boolean, data?, error? }`. En rutas Express, es mejor usar `safeParse` para manejar errores y reaccionar con códigos HTTP en lugar de permitir que una excepción dañe el servidor.

6. **Dé dos ejemplos de reglas de dominio que deben probarse con tests unitarios (no sólo validación de entrada)**  
- Cálculo del precio (size + toppings).  
- Validar que no se pueda cancelar si el status =  delivered.

7. **¿Qué malos olores suele haber en suites de tests? Dé 3 ejemplos (naming, duplicación, asserts débiles, mocks frágiles, etc.).**  
Nombres confusos en las pruebas, repetición de la configuración, aserciones débiles (no se comprueban los valores fundamentales).

8. **¿Cómo trazará criterios de aceptación ↔ tests? Incluya un mini ejemplo de tabla con 2 filas**

| ID | Caso / Descripcion| Test asociado|
|-----|----------------------------------------|---------------|
| CA1 | Crear pedido con items validos| tests/integration/orders.int.test.ts::genera y recupera un pedido |
| CA2 | Cancelar pedido entregado => error 409 | tests/unit/orderService.test.ts::impide la anulación de pedidos entregados |

9. **¿Por qué no perseguir 100% de cobertura a toda costa? Mencione riesgos/limitaciones**  
Una alta cobertura no garantiza pruebas efectivas; puede dar lugar a pruebas costosas y frágiles que replican la implementación en lugar de validar conductas.

10. **Defina y dé un ejemplo de helper/builder para tests.**  
Un builder genera objetos de prueba con valores predeterminados y posibilita la sobrescritura de campos. Por ejemplo, `OrderBuilder().withSize('M').withToppings(['cheese']).build()`.