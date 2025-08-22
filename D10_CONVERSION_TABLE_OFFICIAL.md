# 🎲 TABLA DE CONVERSIÓN D10 OFICIAL 🎲

**⚠️ ATENCIÓN DESARROLLADORES/IA: USAR SIEMPRE ESTA TABLA ⚠️**

## Conversión de Puntuaciones D&D 5e a Dots D10

| Puntuación D&D 5e | Dots D10 | Exemplo |
|-------------------|----------|---------|
| 8-9               | 0        | STR 8 = 0 dots = FALLO AUTOMÁTICO |
| 10-11             | 0        | STR 10 = 0 dots = FALLO AUTOMÁTICO |
| 12-13             | 1        | STR 12 = 1 dot = 1d10 |
| 14-15             | 2        | DEX 14 = 2 dots = 2d10 |
| 16-17             | 3        | CON 16 = 3 dots = 3d10 |
| 18-19             | 5        | INT 18 = 5 dots = 5d10 |
| 20-21             | 6        | WIS 20 = 6 dots = 6d10 |
| 22-23             | 7        | CHA 22 = 7 dots = 7d10 |
| 24-25             | 8        | STR 24 = 8 dots = 8d10 |
| 26-27             | 9        | STR 26 = 9 dots = 9d10 |

## 📋 Función de Conversión Correcta

```javascript
function convertScoreToDots(score) {
    if (score <= 9) return 0;
    if (score <= 11) return 0;  // ¡IMPORTANTE! 10-11 = 0 dots
    if (score <= 13) return 1;
    if (score <= 15) return 2;
    if (score <= 17) return 3;
    if (score <= 19) return 5;  // ¡SALTO! 18-19 = 5 dots
    if (score <= 21) return 6;
    if (score <= 23) return 7;
    if (score <= 25) return 8;
    if (score <= 27) return 9;
    return Math.floor((score - 18) / 2) + 5; // Para scores muy altos
}

function getDiceForDots(dots) {
    if (dots === 0) return "FALLO AUTOMÁTICO"; // Sin tirada
    return `${dots}d10`; // Tirar Nd10
}
```

## 🎯 Sistema de Dados

- **0 dots**: FALLO AUTOMÁTICO - no hay tirada
- **≥1 dot**: Tirar Nd10 donde N = número de dots
- **Éxitos**: Dados que salen 6 o más
- **Formato de resultado**: `"Ability: [éxitos] [dado1+dado2+...]"`

### Ejemplos:
- **STR 8** (0 dots) → `"Strength: Fallo Automático [0 dots]"`
- **STR 12** (1 dot) → 1d10 → sale 8 → `"Strength: 1 [8]"` (1 éxito)
- **STR 12** (1 dot) → 1d10 → sale 4 → `"Strength: 0 [4]"` (0 éxitos)
- **DEX 14** (2 dots) → 2d10 → salen 7,3 → `"Dexterity: 1 [7+3]"` (1 éxito)

## ⚠️ ERRORES COMUNES A EVITAR:

1. ❌ **NO usar**: 10-11 = 1 dot
2. ❌ **NO usar**: 12-13 = 2 dots  
3. ❌ **NO confundir**: éxitos ≠ suma de dados
4. ❌ **NO tirar dados con 0 dots**: es fallo automático
5. ❌ **NO usar "mínimo 1d10"**: 0 dots = sin tirada

---

**NOTA**: Esta tabla debe ser la ÚNICA fuente de verdad para conversiones D10. 