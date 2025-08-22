/**
 * Sistema d10 - Funciones de conversi�n para 5etools
 * Convierte mec�nicas D&D 5e a sistema d10 h�brido
 */

/**
 * Convierte puntuaci�n de habilidad D&D 5e a dots (sistema d10)
 * @param {number} score - Puntuaci�n de habilidad (3-20)
 * @returns {number} - Dots (0-5+)
 */
function scoreToDots(score) {
    if (score <= 3) return 0;
    if (score <= 5) return 1;
    if (score <= 8) return 2;
    if (score <= 11) return 3;
    if (score <= 14) return 4;
    if (score <= 17) return 5;
    return 6; // 18-20 = 5 dots + 1 extra die
}

/**
 * Genera representaci�n visual de dots
 * @param {number} dots - N�mero de dots
 * @param {string} abbrev - Abreviatura de la habilidad (STR, DEX, etc.)
 * @returns {string} - HTML con dots visuales
 */
function getDotsDisplay(dots, abbrev) {
    const dotSymbol = "";
    const dotsDisplay = dotSymbol.repeat(Math.min(dots, 5)) + (dots > 5 ? "+" : "");
    return `<span class="d10-dots" title="${abbrev}: ${dots} dots">${dotsDisplay} (${dots} dots)</span>`;
}

/**
 * Convierte dots a pool de dados para tiradas
 * @param {number} dots - N�mero de dots
 * @returns {string} - Descripci�n del pool de dados
 */
function dotsToDicePool(dots) {
    if (dots <= 5) return `${dots}d10`;
    const baseDice = 5;
    const extraDice = dots - 5;
    return `${baseDice}d10 + ${extraDice}d10`;
}

/**
 * Calcula el n�mero de dados para una tirada basada en dots
 * @param {number} dots - N�mero de dots
 * @returns {number} - N�mero de dados a tirar
 */
function dotsToDiceCount(dots) {
    return dots <= 5 ? dots : 5 + (dots - 5);
}

/**
 * Simula una tirada de dados d10 y cuenta �xitos (6+)
 * @param {number} diceCount - N�mero de dados a tirar
 * @returns {object} - Resultados de la tirada
 */
function rollDicePool(diceCount) {
    let successes = 0;
    const rolls = [];
    
    for (let i = 0; i < diceCount; i++) {
        const roll = Math.floor(Math.random() * 10) + 1;
        rolls.push(roll);
        if (roll >= 6) successes++;
    }
    
    return {
        successes,
        rolls,
        totalDice: diceCount
    };
}

/**
 * Convierte Challenge Rating a nivel de amenaza para d10
 * @param {number|string} cr - Challenge Rating
 * @returns {string} - Nivel de amenaza
 */
function crToThreatLevel(cr) {
    const crValue = typeof cr === "string" ? parseFloat(cr) : cr;
    
    if (crValue <= 1) return "Minion";
    if (crValue <= 4) return "Grunt";
    if (crValue <= 8) return "Elite";
    if (crValue <= 12) return "Boss";
    return "Legendary";
}

/**
 * Convierte modificador de habilidad a representaci�n d10
 * @param {number} modifier - Modificador D&D 5e
 * @returns {string} - Representaci�n d10
 */
function modifierToD10(modifier) {
    const dots = Math.max(0, Math.min(5, modifier + 3)); // Aproximaci�n simple
    return getDotsDisplay(dots, "");
}

// Sistema de configuración D10
const D10Config = {
	// Determina si el sistema D10 está habilitado
	isEnabled: () => {
		return localStorage.getItem('d10-mode-enabled') === 'true' || false;
	},
	
	// Habilita o deshabilita el modo D10
	setEnabled: (enabled) => {
		localStorage.setItem('d10-mode-enabled', enabled.toString());
	},
	
	// Determina si se deben mostrar dots en lugar de números
	shouldShowDots: () => {
		return D10Config.isEnabled() && (localStorage.getItem('d10-show-dots') !== 'false');
	},
	
	// Configura si mostrar dots
	setShowDots: (showDots) => {
		localStorage.setItem('d10-show-dots', showDots.toString());
	}
};

// Función para crear un toggle button para habilitar/deshabilitar el modo D10
function createD10Toggle() {
	const toggleHtml = `
		<div class="d10-toggle-container">
			<label class="d10-toggle-label">
				<input type="checkbox" id="d10-mode-toggle" ${D10Config.isEnabled() ? 'checked' : ''}>
				Modo D10 (Sistema de Dots)
			</label>
			<label class="d10-dots-label" style="${D10Config.isEnabled() ? '' : 'display:none;'}">
				<input type="checkbox" id="d10-dots-toggle" ${D10Config.shouldShowDots() ? 'checked' : ''}>
				Mostrar como Dots
			</label>
		</div>
	`;
	
	return toggleHtml;
}

// Función para inicializar los event listeners del toggle
function initD10Toggle() {
	const modeToggle = document.getElementById('d10-mode-toggle');
	const dotsToggle = document.getElementById('d10-dots-toggle');
	const dotsLabel = document.querySelector('.d10-dots-label');
	
	if (modeToggle) {
		modeToggle.addEventListener('change', (e) => {
			D10Config.setEnabled(e.target.checked);
			if (dotsLabel) {
				dotsLabel.style.display = e.target.checked ? '' : 'none';
			}
			// Recargar la página para aplicar los cambios
			location.reload();
		});
	}
	
	if (dotsToggle) {
		dotsToggle.addEventListener('change', (e) => {
			D10Config.setShowDots(e.target.checked);
			// Recargar la página para aplicar los cambios
			location.reload();
		});
	}
}

// Función para obtener la representación D10 de una habilidad
function getD10AbilityDisplay(monster, ability) {
	import('./d10-converter.js').then(module => {
		const { convertScoreToDots, generateDotsHtml } = module;
		
		const score = monster[ability];
		if (typeof score !== 'number') return '—';
		
		if (D10Config.shouldShowDots()) {
			const dots = convertScoreToDots(score);
			return generateDotsHtml(dots);
		} else {
			const dots = convertScoreToDots(score);
			return `${dots} dots (${score})`;
		}
	});
}

// Exportar las funciones para su uso en otros módulos
export { D10Config, createD10Toggle, initD10Toggle, getD10AbilityDisplay };
