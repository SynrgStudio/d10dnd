# Sistema D10 - Implementación de Dots para Stats de Monstruos

## Descripción

Este sistema permite mostrar las puntuaciones de habilidad de los monstruos en formato "dots" (puntos/círculos) en lugar de números, siguiendo la conversión al sistema D10 descrita en `d10_conversion_reference.md`.

## Archivos Modificados/Creados

### 1. `d10-converter.js`
- **Función añadida**: `generateDotsHtml(dotCount, maxDots = 5)`
- **Propósito**: Genera el HTML necesario para mostrar dots (círculos rellenos/vacíos)
- **Exportación actualizada**: Ahora incluye `generateDotsHtml`

### 2. `d10-styles.css` (NUEVO)
- **Estilos para dots**: `.ability-dots`, `.ability-dot--filled`, `.ability-dot--empty`
- **Colores diferenciados**: Rojo para habilidades físicas, azul para mentales
- **Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Animaciones**: Efectos sutiles de aparición

### 3. `d10-system.js`
- **Sistema de configuración**: `D10Config` para habilitar/deshabilitar el modo
- **Toggle UI**: Funciones para crear controles de usuario
- **Gestión de estado**: LocalStorage para persistir preferencias

### 4. `render.js`
- **Función modificada**: `_renderD10Dots(dotCount)`
- **Implementación mejorada**: Usa HTML con CSS en lugar de caracteres simples
- **Compatibilidad**: Funciona con ambos estilos (classic y one)

### 5. `bestiary.js`
- **Modificación en**: `_renderStatblock()`
- **Funcionalidad**: Aplica automáticamente `addD10Properties()` a todos los monstruos
- **Import actualizado**: Referencia correcta al `d10-converter.js`

### 6. `bestiary.html`
- **CSS añadido**: Referencia a `d10-styles.css`
- **Carga automática**: Los estilos se aplican automáticamente

### 7. `test-dots.html` (NUEVO)
- **Página de prueba**: Muestra ejemplos de diferentes puntuaciones
- **Verificación visual**: Permite comprobar que los dots se muestran correctamente
- **Ejemplos incluidos**: Goblin (stats bajos) y Dragón (stats altos)

## Cómo Funciona la Conversión

### Tabla de Conversión
| Puntuación D&D 5e | Dots | Visualización |
|-------------------|------|---------------|
| 8-9               | 0    | ○○○○○         |
| 10-11             | 1    | ●○○○○         |
| 12-13             | 2    | ●●○○○         |
| 14-15             | 3    | ●●●○○         |
| 16-17             | 4    | ●●●●○         |
| 18+               | 5+   | ●●●●● +X      |

### Proceso de Renderizado

1. **Aplicación de propiedades**: `addD10Properties(monster)` añade propiedades `_dots` a cada habilidad
2. **Renderizado**: `_renderD10Dots(dotCount)` genera el HTML con CSS
3. **Visualización**: Los dots se muestran con colores diferenciados según el tipo de habilidad

## Características Implementadas

### Visual
- ✅ Círculos rellenos (●) para dots activos
- ✅ Círculos vacíos (○) para dots inactivos  
- ✅ Colores diferenciados (rojo físico, azul mental)
- ✅ Indicador numérico para dots > 5
- ✅ Animaciones sutiles
- ✅ Diseño responsivo

### Funcional
- ✅ Conversión automática de puntuaciones a dots
- ✅ Integración con sistema de renderizado existente
- ✅ Compatibilidad con estilos classic y one
- ✅ Sistema de configuración para habilitar/deshabilitar

### Técnico
- ✅ Código modular y reutilizable
- ✅ CSS organizado con clases semánticas
- ✅ Exportaciones ES6 apropiadas
- ✅ Integración con la arquitectura existente

## Uso

### Para Desarrolladores
```javascript
import { convertScoreToDots, generateDotsHtml } from './d10-converter.js';

// Convertir puntuación a dots
const dots = convertScoreToDots(14); // Retorna 3

// Generar HTML para mostrar
const html = generateDotsHtml(3); // Retorna HTML con 3 dots rellenos
```

### Para Usuarios
1. Abrir `bestiary.html` en el directorio `backup-d10-system`
2. Los dots se mostrarán automáticamente en los stat blocks
3. Los colores indican el tipo: rojo=físico, azul=mental

## Testing

Abrir `test-dots.html` para ver:
- Ejemplos visuales de diferentes puntuaciones
- Verificación de colores y estilos
- Pruebas de responsividad

## Próximos Pasos Sugeridos

1. **Integración con Toggle**: Añadir controles para habilitar/deshabilitar en la interfaz
2. **Más Estilos**: Considerar otros tipos de visualización (barras, estrellas, etc.)
3. **Accesibilidad**: Añadir atributos ARIA para lectores de pantalla
4. **Performance**: Optimizar para listas largas de monstruos

---

**Autor**: Sistema implementado según especificaciones del documento D10 conversion reference
**Fecha**: Implementación completa del sistema de dots visuales 