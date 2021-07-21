onEvent('block.registry', e => {
	e.create('magical_soil').displayName('§bMagical Soil').material('organic').hardness(0.6)
	e.create('nether_star_block').displayName('§eNether Star Block').material('iron').hardness(2).lightLevel(1)
	e.create('saltpeter_block').displayName('Nitrate Block').material('iron')
	e.create('potassium_block').displayName('Potassium Block').material('iron')
	e.create('potassium_nitrate_block').displayName('Potassium Nitrate Block').material('iron')
	e.create('atm_star_block').displayName('§eATM Star Block').material('iron').hardness(5).lightLevel(1)
})