// Función para convertir una puntuación numérica a dots (TABLA OFICIAL CORREGIDA)
function convertScoreToDots(score) {
	if (score <= 9) return 0;
	if (score <= 11) return 0;  // ¡CORREGIDO! 10-11 = 0 dots
	if (score <= 13) return 1;
	if (score <= 15) return 2;
	if (score <= 17) return 3;
	if (score <= 19) return 5;  // ¡SALTO! 18-19 = 5 dots
	if (score <= 21) return 6;
	if (score <= 23) return 7;
	if (score <= 25) return 8;
	if (score <= 27) return 9;
	return Math.floor((score - 18) / 2) + 5;
}

// Función para generar la visualización HTML de dots
function generateDotsHtml(dotCount, maxDots = 5) {
	const dots = [];
	for (let i = 0; i < maxDots; i++) {
		if (i < dotCount) {
			dots.push('<span class="ability-dot ability-dot--filled">●</span>');
		} else {
			dots.push('<span class="ability-dot ability-dot--empty">○</span>');
		}
	}
	
	// Si hay más de 5 dots, mostrar el número adicional
	if (dotCount > maxDots) {
		dots.push(`<span class="ability-dot-extra"> +${dotCount - maxDots}</span>`);
	}
	
	return `<span class="ability-dots">${dots.join('')}</span>`;
}

// Función principal que extiende un monstruo con las propiedades en formato d10
function addD10Properties(monster) {
	// Atributos
	const attributes = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
	attributes.forEach(attr => {
		if (typeof monster[attr] === 'number') {
			monster[`${attr}_dots`] = convertScoreToDots(monster[attr]);
		}
	});

	// CR -> Threat Level
	if (monster.cr?.cr !== undefined) {
		const crValue = parseFloat(monster.cr.cr);
		let threatLevel = 1;
		if (crValue >= 1/8 && crValue < 1/2) threatLevel = 2;
		else if (crValue >= 1/2 && crValue < 1) threatLevel = 3;
		else if (crValue >= 1 && crValue < 2) threatLevel = 4;
		else if (crValue >= 2 && crValue < 4) threatLevel = 5;
		else if (crValue >= 4 && crValue < 6) threatLevel = 6;
		else if (crValue >= 6 && crValue < 9) threatLevel = 7;
		else if (crValue >= 9 && crValue < 13) threatLevel = 8;
		else if (crValue >= 13 && crValue < 17) threatLevel = 9;
		else if (crValue >= 17) threatLevel = 10;

		monster.threatLevel = threatLevel;
	}

	// AC -> Defense (solo si hay un valor único)
	if (monster.ac && monster.ac.length > 0) {
		const acEntry = monster.ac[0];
		if (typeof acEntry.ac === 'number') {
			// Asumimos que Armor Bonus = AC - 10 - Dexterity Modifier
			// Pero como no tenemos el mod de DEX, haremos una aproximación básica:
			// Defense ≈ 10 + Armor Bonus (ignorando DEX por ahora)
			const approxDefense = acEntry.ac; // Placeholder simple
			monster.defense = approxDefense;
		}
	}

	return monster;
}

// Exportar las funciones para su uso en otros módulos
export { convertScoreToDots, addD10Properties, generateDotsHtml };