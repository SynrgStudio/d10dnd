// d10-dice.js - Funciones para el sistema de dados d10

// Función auxiliar para lanzar dados d10 basados en dots
function _rollD10Pool(numDice) {
	const rolls = [];
	let successes = 0;
	let total = 0;
	
	for (let i = 0; i < numDice; i++) {
		const roll = Math.floor(Math.random() * 10) + 1;
		rolls.push(roll);
		if (roll >= 6) successes++; // Contar éxitos (6 o más)
		total += roll; // Suma total de todos los dados
	}
	
	return {
		rolls,
		successes,
		total
	};
}

// Inicializar el sistema d10 cuando la página esté lista
document.addEventListener('DOMContentLoaded', function() {
	// Verificar que Renderer.dice está disponible
	if (typeof Renderer === 'undefined' || !Renderer.dice) {
		console.error('Renderer.dice no está disponible. El sistema d10 no se puede inicializar.');
		return;
	}
	
	// Extender Renderer.dice con las funciones d10
	Renderer.dice._rollD10Pool = _rollD10Pool;
	
	// Guardar la función original pRollEntry
	const originalPRollEntry = Renderer.dice.pRollEntry.bind(Renderer.dice);
	
	// Reemplazar pRollEntry con nuestra versión modificada
	Renderer.dice.pRollEntry = async function(entry, rolledBy, opts) {
		opts = opts || {};

		// Verificar si es una tirada de habilidad o salvación para usar el sistema d10
		if (entry.d20mod != null && (entry.context != null || entry.data != null)) {
			// Extraer el número de dots del contexto si está disponible
			let dots = 0;
			let abilityName = "Unknown";
			
			// Manejar el contexto si es un string JSON
			const context = entry.context || entry.data;
			if (typeof context === "string") {
				try {
					const parsedContext = JSON.parse(context);
					dots = parsedContext.dots !== undefined ? parseInt(parsedContext.dots) : 0;
					abilityName = parsedContext.ability || parsedContext.skill || abilityName;
				} catch (e) {
					// Si no se puede parsear, usar los valores por defecto
				}
			} else if (typeof context === "object") {
				dots = context.dots !== undefined ? parseInt(context.dots) : 0;
				abilityName = context.ability || context.skill || abilityName;
			}
			
			// Usar el sistema d10
			const result = _rollD10Pool(dots + 2); // +2 por el dado base y el mod
			
			// Mostrar el resultado en el formato d10
			const rollDisplay = result.rolls.join(" + ");
			const totalDisplay = `${result.total} [${rollDisplay}]`;
			
			if (!opts.isHidden) {
				Renderer.dice._showBox();
				Renderer.dice._checkHandleName(rolledBy.name);
				const $out = Renderer.dice._$lastRolledBy;
				
				const lbl = rolledBy.label && (!rolledBy.name || rolledBy.label.trim().toLowerCase() !== rolledBy.name.trim().toLowerCase()) ? rolledBy.label : null;
				
				$out.append(`
					<div class="out-roll-item" title="${abilityName}">
						<div>
							${lbl ? `<span class="roll-label">${lbl}: </span>` : ""}
							<span class="roll">${totalDisplay}</span>
							<span class="all-rolls ve-muted">(${result.successes} successes)</span>
						</div>
						<div class="out-roll-item-button-wrp">
							<button title="Copy to input" class="ve-btn ve-btn-default ve-btn-xs ve-btn-copy-roll" onclick="Renderer.dice._$iptRoll.val('${result.rolls.join("d10 + ")}d10'); Renderer.dice._$iptRoll.focus()"><span class="glyphicon glyphicon-pencil"></span></button>
						</div>
					</div>`);
				
				Renderer.dice._scrollBottom();
			}
			
			return result.total;
		}

		// Para todas las demás tiradas, usar la función original
		return originalPRollEntry(entry, rolledBy, opts);
	};
});