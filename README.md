# SEMILLA — Drop 01

Landing page de **SEMILLA**, una marca de streetwear minimalista de Bogotá, Colombia.

El sitio existe para vender un único lanzamiento: el **Drop 01**, una edición limitada de
40 camisetas con bordado de alta densidad. No es una tienda en línea — no hay carrito,
ni pasarela de pagos, ni cuentas de usuario. Toda la venta se cierra por WhatsApp.

La estética es oscura, mínima y elevada: fondo casi negro, un único color de acento
(`#f5f0e8`), tipografía Geist y animaciones contenidas.

## Qué hace la página

Es una sola página que acompaña al visitante desde el primer impacto visual hasta el
mensaje de WhatsApp, en este orden:

| Sección | Componente | Qué hace |
| --- | --- | --- |
| Hero | `Hero.tsx` | Nombre de la marca, propuesta de valor y el mockup del producto |
| Especificaciones | `Cards.tsx` | Tres cartas: bordado premium, gramaje 220-260 g/m², corte boxy |
| Personajes | `MeetTheDrop.tsx` | Presenta a Semilla Spidi y Semilla Ing, los dos bordados del Drop 01 |
| Guía de tallas | `SizeGuide.tsx` | Tabla de medidas en centímetros de la S a la XL |
| Stock | `StockCounter.tsx` | Contador de unidades disponibles sobre el total de 40 |
| Cómo comprar | `HowToBuy.tsx` | Los tres pasos: elegir talla, escribir por WhatsApp, recibir en Bogotá |
| Cierre | `CTA.tsx` | Llamado final con los distintivos de envío gratis y pago contra entrega |

Todos los botones de compra abren el mismo chat de WhatsApp con un mensaje ya redactado.
El número y el texto viven en un único archivo, [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).

### Los personajes que se asoman

`PeekingCharacters.tsx` coloca seis personajes de la marca en los bordes de la pantalla:
cuatro en las esquinas y dos en el centro de los costados. Se asoman, flotan despacio y
se desplazan con el scroll.

Merece una nota porque no es tan simple como parece. Los PNG de origen son casi
cuadrados, pero **cada personaje ocupa una proporción distinta de su lienzo** — entre el
58% y el 71% del ancho. Ponerlos todos en una caja del mismo tamaño hace que se vean de
tamaños diferentes.

Por eso cada caja se escala por `1 / √(anchoRelativo × altoRelativo)` sobre una medida
base. El resultado es que el dibujo renderizado queda en el mismo tamaño percibido para
los seis, aunque sus cajas midan distinto. Los valores medidos están documentados en un
comentario dentro del componente — si reemplazas una imagen, hay que volver a medirla.

## Stack

- **Next.js 16** con App Router y Turbopack
- **React 19**
- **TypeScript** en modo estricto
- **Tailwind CSS v4** — la configuración del tema vive en `src/app/globals.css`, no en un
  archivo `tailwind.config`
- **Framer Motion** para todas las animaciones
- **lucide-react** para los íconos

## Cómo levantarlo

Requiere Node.js 20.9 o superior.

```bash
npm install
npm run dev
```

La página queda en <http://localhost:3000>.

Otros comandos:

```bash
npm run build    # build de producción
npm start        # sirve el build de producción
npm run lint     # eslint
npx tsc --noEmit # revisa los tipos sin generar archivos
```

## Estructura

```
src/
  app/
    layout.tsx      metadata, fuentes, favicon y MotionConfig
    page.tsx        arma la página completa en orden
    globals.css     tema de Tailwind v4 y estilos base
  components/       una sección por archivo
  lib/
    motion.ts       variantes de animación compartidas
    whatsapp.ts     número de contacto y mensaje precargado
    cn.ts           helper para combinar clases
public/
  characters/       los seis personajes de la marca
  logo/             logo completo y símbolo de la semilla
  mockups/          foto del producto
```

## Notas para editar

- **Cambiar el stock**: `STOCK_CONFIG` en [`src/components/StockCounter.tsx`](src/components/StockCounter.tsx).
  Se actualiza a mano, tal como advierte la nota al pie de esa sección.
- **Cambiar el número de WhatsApp o el mensaje**: [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).
- **Cambiar las medidas de las tallas**: el arreglo `ROWS` en [`src/components/SizeGuide.tsx`](src/components/SizeGuide.tsx).
- **Agregar o cambiar un personaje que se asoma**: exporta el PNG a un máximo de 512px,
  mide qué proporción del lienzo ocupa el dibujo y ajusta su tamaño en el mapa `SIZE`
  siguiendo la fórmula documentada en el componente.
- **Accesibilidad**: la app está envuelta en `MotionConfig reducedMotion="user"`, así que
  las animaciones se desactivan solas si el sistema operativo lo pide. Conviene mantenerlo.

## Estado

El contenido es real y está listo, salvo dos cosas que se actualizan a mano y conviene
revisar antes de publicar: el contador de unidades disponibles y el año del pie de página.
