events.listen('recipes', function(e) {
    var mekCrush = e.recipes.mekanism.crushing
    var mekEnrich = e.recipes.mekanism.enriching
    var mekSaw = e.recipes.mekanism.sawing
	
function kjsShaped(result, pattern, ingredients, count) {
        e.shaped(item.of(result, count != null ? count : 1), pattern, ingredients)
    }

    function kjsShapeless(result, ingredients, count) {
        e.shapeless(item.of(result, count != null ? count : 1), ingredients)
    }
 
    e.shaped(item.of('enviromats:alabaster_magenta', 8), [
        'AAA',
        'AMA',
        'AAA'
    ], {
        A: '#forge:alabaster',
        M: '#forge:dyes/magenta'
    })
	    kjsShaped('minecraft:chest', [
        'PPP',
        'P P',
        'PPP'
    ], {
        P: '#minecraft:planks'
    })
	//create smelting
	e.smelting(item.of('alltheores:platinum_ingot'), 'create:crushed_platinum_ore').xp(1)
	e.smelting(item.of('alltheores:aluminum_ingot'), 'create:crushed_aluminum_ore').xp(1)

	// create splashing
	e.recipes.create.splashing([Item.of('alltheores:aluminum_nugget', 10), Item.of('alltheores:aluminum_nugget', 5).withChance(0.5)] , 'create:crushed_aluminum_ore')
	e.recipes.create.splashing([Item.of('alltheores:platinum_nugget', 10), Item.of('alltheores:platinum_nugget', 5).withChance(0.5)] , 'create:crushed_platinum_ore')

	//thermal processing
	e.recipes.thermal.pulverizer([Item.of('ars_nouveau:mana_gem', 2), Item.of('minecraft:gravel', 1).withChance(0.2)] , 'ars_nouveau:arcane_ore')
	e.recipes.thermal.pulverizer([Item.of('appliedenergistics2:certus_quartz_crystal', 3), Item.of('appliedenergistics2:certus_quartz_dust', 1), Item.of('minecraft:gravel', 1).withChance(0.2)] , 'appliedenergistics2:quartz_ore')
	e.recipes.thermal.pulverizer([Item.of('appliedenergistics2:charged_certus_quartz_crystal', 3), Item.of('appliedenergistics2:certus_quartz_dust', 1), Item.of('minecraft:gravel', 1).withChance(0.2)] , 'appliedenergistics2:charged_quartz_ore')
	
	//mekanism processing
	mekCrush(item.of('minecraft:brick', 4), 'minecraft:bricks')
    mekCrush(item.of('minecraft:rotten_flesh', 9), 'biomesoplenty:flesh')
    mekCrush(item.of('minecraft:magma_cream', 4), 'minecraft:magma_block')
    mekCrush(item.of('minecraft:blaze_powder', 4), '#forge:rods/blaze')
    mekCrush(item.of('minecraft:quartz', 4), '#forge:storage_blocks/quartz')
	mekCrush(item.of('thermal:apatite_dust'), 'thermal:apatite')
	mekCrush(item.of('thermal:cinnabar_dust'), 'thermal:cinnabar')
	mekCrush(item.of('thermal:niter_dust'), 'thermal:niter')
	mekCrush(item.of('thermal:sulfur_dust'), 'thermal:sulfur')
    mekEnrich(item.of('minecraft:blaze_rod'), [item.of('minecraft:blaze_powder', 4)])
	mekEnrich(item.of('mysticalagriculture:prosperity_shard', 4), [item.of('mysticalagriculture:prosperity_ore')])
	mekEnrich(item.of('mysticalagriculture:inferium_essence', 6), [item.of('mysticalagriculture:inferium_ore')])
	mekEnrich(item.of('thermal:apatite', 12), [item.of('thermal:apatite_ore')])
	mekEnrich(item.of('thermal:ruby', 2), [item.of('thermal:ruby_ore')])
	mekEnrich(item.of('thermal:sapphire', 2), [item.of('thermal:sapphire_ore')])
	mekEnrich(item.of('ars_nouveau:mana_gem', 2), [item.of('ars_nouveau:arcane_ore')])
	mekEnrich(item.of('thermal:cinnabar', 2), [item.of('thermal:cinnabar_ore')])
	mekEnrich(item.of('thermal:niter', 6), [item.of('thermal:niter_ore')])
	mekEnrich(item.of('thermal:sulfur', 6), [item.of('thermal:sulfur_ore')])
	mekSaw(item.of('byg:aspen_planks', 6), 'byg:aspen_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:aspen_planks', 6), 'byg:stripped_aspen_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:baobab_planks', 6), 'byg:baobab_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:baobab_planks', 6), 'byg:stripped_baobab_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:blue_enchanted_planks', 6), 'byg:blue_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:blue_enchanted_planks', 6), 'byg:stripped_blue_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cherry_planks', 6), 'byg:cherry_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cherry_planks', 6), 'byg:stripped_cherry_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cika_planks', 6), 'byg:cika_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cika_planks', 6), 'byg:stripped_cika_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cypress_planks', 6), 'byg:cypress_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:cypress_planks', 6), 'byg:stripped_cypress_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ebony_planks', 6), 'byg:ebony_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ebony_planks', 6), 'byg:stripped_ebony_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ether_planks', 6), 'byg:ether_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:ether_planks', 6), 'byg:stripped_ether_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:fir_planks', 6), 'byg:fir_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:fir_planks', 6), 'byg:stripped_fir_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:green_enchanted_planks', 6), 'byg:green_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:green_enchanted_planks', 6), 'byg:stripped_green_enchanted_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:holly_planks', 6), 'byg:holly_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:holly_planks', 6), 'byg:stripped_holly_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:jacaranda_planks', 6), 'byg:jacaranda_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:jacaranda_planks', 6), 'byg:stripped_jacaranda_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:lament_planks', 6), 'byg:lament_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:lament_planks', 6), 'byg:stripped_lament_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mahogany_planks', 6), 'byg:mahogany_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mahogany_planks', 6), 'byg:stripped_mahogany_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mangrove_planks', 6), 'byg:mangrove_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:mangrove_planks', 6), 'byg:stripped_mangrove_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:maple_planks', 6), 'byg:maple_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:maple_planks', 6), 'byg:stripped_maple_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:nightshade_planks', 6), 'byg:nightshade_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:nightshade_planks', 6), 'byg:stripped_nightshade_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:palm_planks', 6), 'byg:palm_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:palm_planks', 6), 'byg:stripped_palm_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('minecraft:birch_planks', 6), 'byg:palo_verde_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('minecraft:birch_planks', 6), 'byg:stripped_palo_verde_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:pine_planks', 6), 'byg:pine_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:pine_planks', 6), 'byg:stripped_pine_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:rainbow_eucalyptus_planks', 6), 'byg:rainbow_eucalyptus_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:rainbow_eucalyptus_planks', 6), 'byg:stripped_rainbow_eucalyptus_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:redwood_planks', 6), 'byg:redwood_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:redwood_planks', 6), 'byg:stripped_redwood_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:skyris_planks', 6), 'byg:skyris_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:skyris_planks', 6), 'byg:stripped_skyris_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:willow_planks', 6), 'byg:willow_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:willow_planks', 6), 'byg:stripped_willow_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:witch_hazel_planks', 6), 'byg:witch_hazel_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:witch_hazel_planks', 6), 'byg:stripped_witch_hazel_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:zelkova_planks', 6), 'byg:zelkova_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('byg:zelkova_planks', 6), 'byg:stripped_zelkova_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('minecraft:oak_planks', 6), 'byg:withering_oak_log', Item.of('mekanism:sawdust').withChance(0.25))
    mekSaw(item.of('mekanism:sawdust', 8), 'byg:imbued_nightshade_log')
})