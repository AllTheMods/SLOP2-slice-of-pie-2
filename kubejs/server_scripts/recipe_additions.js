onEvent('recipes', e => {
  function foodRecipe(result, edgeIngredient, middleIngredient) {
    e.shaped(result, ['FFF', 'FBF', 'FFF'], {
      F: edgeIngredient,
      B: middleIngredient
    })
  }

  function kjsShaped(result, pattern, ingredients, count) {
    e.shaped(`${!!count ? count : 1}x ${result}`, pattern, ingredients)
  }

  function mekCrush(output, input, count) {
    e.recipes.mekanism.crushing(`${!!count ? count : 1}x ${output}`, input)
  }
  function mekEnrich(output, outputCount, input, inputCount) {
    e.recipes.mekanism.enriching(`${outputCount}x ${output}`, [`${!!inputCount ? inputCount : 1}x ${input}`])
  }
  function mekSaw(output, outputCount, input, itemChance, chance) {
    if (!!itemChance) {
      e.recipes.mekanism.sawing(`${outputCount}x ${output}`, input, Item.of(itemChance).withChance(!!chance ? inputCount : 0.25))
    } else {
      e.recipes.mekanism.sawing(`${outputCount}x ${output}`, input)
    }
  }

  mekCrush('minecraft:brick', 'minecraft:bricks', 4)
  mekCrush('minecraft:rotten_flesh', 'biomesoplenty:flesh', 9)
  mekCrush('minecraft:magma_cream', 'minecraft:magma_block', 4)
  mekCrush('minecraft:blaze_powder', '#forge:rods/blaze', 4)
  mekCrush('minecraft:quartz', '#forge:storage_blocks/quartz', 4)
  mekCrush('thermal:apatite_dust', 'thermal:apatite')
  mekCrush('thermal:cinnabar_dust', 'thermal:cinnabar')
  mekCrush('thermal:niter_dust', 'thermal:niter')
  mekCrush('thermal:sulfur_dust', 'thermal:sulfur')

  mekEnrich('minecraft:blaze_rod', 1, 'minecraft:blaze_powder', 4)
  mekEnrich('mysticalagriculture:prosperity_shard', 4, 'mysticalagriculture:prosperity_ore')
  mekEnrich('mysticalagriculture:inferium_essence', 6, 'mysticalagriculture:inferium_ore')
  mekEnrich('thermal:apatite', 12, 'thermal:apatite_ore')
  mekEnrich('thermal:ruby', 2, 'thermal:ruby_ore')
  mekEnrich('thermal:sapphire', 2, 'thermal:sapphire_ore')
  mekEnrich('ars_nouveau:mana_gem', 2, 'ars_nouveau:arcane_ore')
  mekEnrich('thermal:cinnabar', 2, 'thermal:cinnabar_ore')
  mekEnrich('thermal:niter', 6, 'thermal:niter_ore')
  mekEnrich('thermal:sulfur', 6, 'thermal:sulfur_ore')

  mekSaw('byg:aspen_planks', 6, 'byg:aspen_log', 'mekanism:sawdust')
  mekSaw('byg:aspen_planks', 6, 'byg:stripped_aspen_log', 'mekanism:sawdust')
  mekSaw('byg:baobab_planks', 6, 'byg:baobab_log', 'mekanism:sawdust')
  mekSaw('byg:baobab_planks', 6, 'byg:stripped_baobab_log', 'mekanism:sawdust')
  mekSaw('byg:blue_enchanted_planks', 6, 'byg:blue_enchanted_log', 'mekanism:sawdust')
  mekSaw('byg:blue_enchanted_planks', 6, 'byg:stripped_blue_enchanted_log', 'mekanism:sawdust')
  mekSaw('byg:cherry_planks', 6, 'byg:cherry_log', 'mekanism:sawdust')
  mekSaw('byg:cherry_planks', 6, 'byg:stripped_cherry_log', 'mekanism:sawdust')
  mekSaw('byg:cika_planks', 6, 'byg:cika_log', 'mekanism:sawdust')
  mekSaw('byg:cika_planks', 6, 'byg:stripped_cika_log', 'mekanism:sawdust')
  mekSaw('byg:cypress_planks', 6, 'byg:cypress_log', 'mekanism:sawdust')
  mekSaw('byg:cypress_planks', 6, 'byg:stripped_cypress_log', 'mekanism:sawdust')
  mekSaw('byg:ebony_planks', 6, 'byg:ebony_log', 'mekanism:sawdust')
  mekSaw('byg:ebony_planks', 6, 'byg:stripped_ebony_log', 'mekanism:sawdust')
  mekSaw('byg:ether_planks', 6, 'byg:ether_log', 'mekanism:sawdust')
  mekSaw('byg:ether_planks', 6, 'byg:stripped_ether_log', 'mekanism:sawdust')
  mekSaw('byg:fir_planks', 6, 'byg:fir_log', 'mekanism:sawdust')
  mekSaw('byg:fir_planks', 6, 'byg:stripped_fir_log', 'mekanism:sawdust')
  mekSaw('byg:green_enchanted_planks', 6, 'byg:green_enchanted_log', 'mekanism:sawdust')
  mekSaw('byg:green_enchanted_planks', 6, 'byg:stripped_green_enchanted_log', 'mekanism:sawdust')
  mekSaw('byg:holly_planks', 6, 'byg:holly_log', 'mekanism:sawdust')
  mekSaw('byg:holly_planks', 6, 'byg:stripped_holly_log', 'mekanism:sawdust')
  mekSaw('byg:jacaranda_planks', 6, 'byg:jacaranda_log', 'mekanism:sawdust')
  mekSaw('byg:jacaranda_planks', 6, 'byg:stripped_jacaranda_log', 'mekanism:sawdust')
  mekSaw('byg:lament_planks', 6, 'byg:lament_log', 'mekanism:sawdust')
  mekSaw('byg:lament_planks', 6, 'byg:stripped_lament_log', 'mekanism:sawdust')
  mekSaw('byg:mahogany_planks', 6, 'byg:mahogany_log', 'mekanism:sawdust')
  mekSaw('byg:mahogany_planks', 6, 'byg:stripped_mahogany_log', 'mekanism:sawdust')
  mekSaw('byg:mangrove_planks', 6, 'byg:mangrove_log', 'mekanism:sawdust')
  mekSaw('byg:mangrove_planks', 6, 'byg:stripped_mangrove_log', 'mekanism:sawdust')
  mekSaw('byg:maple_planks', 6, 'byg:maple_log', 'mekanism:sawdust')
  mekSaw('byg:maple_planks', 6, 'byg:stripped_maple_log', 'mekanism:sawdust')
  mekSaw('byg:nightshade_planks', 6, 'byg:nightshade_log', 'mekanism:sawdust')
  mekSaw('byg:nightshade_planks', 6, 'byg:stripped_nightshade_log', 'mekanism:sawdust')
  mekSaw('byg:palm_planks', 6, 'byg:palm_log', 'mekanism:sawdust')
  mekSaw('byg:palm_planks', 6, 'byg:stripped_palm_log', 'mekanism:sawdust')
  mekSaw('minecraft:birch_planks', 6, 'byg:palo_verde_log', 'mekanism:sawdust')
  mekSaw('minecraft:birch_planks', 6, 'byg:stripped_palo_verde_log', 'mekanism:sawdust')
  mekSaw('byg:pine_planks', 6, 'byg:pine_log', 'mekanism:sawdust')
  mekSaw('byg:pine_planks', 6, 'byg:stripped_pine_log', 'mekanism:sawdust')
  mekSaw('byg:rainbow_eucalyptus_planks', 6, 'byg:rainbow_eucalyptus_log', 'mekanism:sawdust')
  mekSaw('byg:rainbow_eucalyptus_planks', 6, 'byg:stripped_rainbow_eucalyptus_log', 'mekanism:sawdust')
  mekSaw('byg:redwood_planks', 6, 'byg:redwood_log', 'mekanism:sawdust')
  mekSaw('byg:redwood_planks', 6, 'byg:stripped_redwood_log', 'mekanism:sawdust')
  mekSaw('byg:skyris_planks', 6, 'byg:skyris_log', 'mekanism:sawdust')
  mekSaw('byg:skyris_planks', 6, 'byg:stripped_skyris_log', 'mekanism:sawdust')
  mekSaw('byg:willow_planks', 6, 'byg:willow_log', 'mekanism:sawdust')
  mekSaw('byg:willow_planks', 6, 'byg:stripped_willow_log', 'mekanism:sawdust')
  mekSaw('byg:witch_hazel_planks', 6, 'byg:witch_hazel_log', 'mekanism:sawdust')
  mekSaw('byg:witch_hazel_planks', 6, 'byg:stripped_witch_hazel_log', 'mekanism:sawdust')
  mekSaw('byg:zelkova_planks', 6, 'byg:zelkova_log', 'mekanism:sawdust')
  mekSaw('byg:zelkova_planks', 6, 'byg:stripped_zelkova_log', 'mekanism:sawdust')
  mekSaw('minecraft:oak_planks', 6, 'byg:withering_oak_log', 'mekanism:sawdust')
  mekSaw('mekanism:sawdust', 8, 'byg:imbued_nightshade_log')

  //Create Splashing
  e.recipes.create.splashing([Item.of('alltheores:aluminum_nugget', 10), Item.of('alltheores:aluminum_nugget', 5).withChance(0.5)], 'create:crushed_aluminum_ore')
  e.recipes.create.splashing([Item.of('alltheores:platinum_nugget', 10), Item.of('alltheores:platinum_nugget', 5).withChance(0.5)], 'create:crushed_platinum_ore')

  //Create Smelting
  e.smelting(item.of('alltheores:platinum_ingot'), 'create:crushed_platinum_ore').xp(1)
  e.smelting(item.of('alltheores:aluminum_ingot'), 'create:crushed_aluminum_ore').xp(1)

  //Thermal Processing
  e.recipes.thermal.pulverizer([Item.of('ars_nouveau:mana_gem', 2), Item.of('minecraft:gravel', 1).withChance(0.2)], 'ars_nouveau:arcane_ore')
  e.recipes.thermal.pulverizer([Item.of('appliedenergistics2:certus_quartz_crystal', 3), Item.of('appliedenergistics2:certus_quartz_dust', 1), Item.of('minecraft:gravel', 1).withChance(0.2)], 'appliedenergistics2:quartz_ore')
  e.recipes.thermal.pulverizer([Item.of('appliedenergistics2:charged_certus_quartz_crystal', 3), Item.of('appliedenergistics2:certus_quartz_dust', 1), Item.of('minecraft:gravel', 1).withChance(0.2)], 'appliedenergistics2:charged_quartz_ore')

  //Mekanism
  e.shaped('mekanism:digital_miner', [
    'AUA',
    'LRL',
    'TST'
  ], {
    'L': 'mekanism:logistical_sorter',
    'R': 'mekanism:robit',
    'T': 'mekanism:teleportation_core',
    'A': '#mekanism:alloys/atomic',
    'S': 'mekanism:steel_casing',
    'U': 'minecraft:netherite_ingot'
  })
  e.shaped('mekanism:atomic_disassembler', [
    'RER',
    'RUR',
    ' V '
  ], {
    'E': 'mekanism:energy_tablet',
    'R': '#mekanism:alloys/reinforced',
    'U': '#forge:circuits/ultimate',
    'V': 'minecraft:netherite_ingot'
  })
  e.shaped('mekanismgenerators:wind_generator', [
    ' O ',
    'OCO',
    'EBE'
  ], {
    'E': 'mekanism:energy_tablet',
    'C': 'mekanismgenerators:electromagnetic_coil',
    'B': '#forge:circuits/basic',
    'O': '#forge:ingots/osmium'
  })

  foodRecipe(`pamhc2foodcore:fruitpunchitem`, `#forge:fruits`, `pamhc2foodcore:applejuiceitem`)
  foodRecipe(`pamhc2foodcore:applejuiceitem`, `minecraft:apple`, `minecraft:glass_bottle`)
  foodRecipe(`pamhc2foodcore:melonjuiceitem`, `minecraft:melon_slice`, `minecraft:glass_bottle`)
  foodRecipe(`pamhc2foodcore:sweetberryjuiceitem`, `minecraft:sweet_berries`, `minecraft:glass_bottle`)
  foodRecipe(`pamhc2foodcore:p8juiceitem`, `#forge:vegetables`, `minecraft:glass_bottle`)

  //Quark
  e.shapeless('minecraft:chest', '#forge:chests/wooden')
  e.shapeless('quark:oak_chest', ['minecraft:oak_planks', '#forge:chests/wooden'])
  e.shapeless('quark:dark_oak_chest', ['minecraft:dark_oak_planks', '#forge:chests/wooden'])
  e.shapeless('quark:acacia_chest', ['minecraft:acacia_planks', '#forge:chests/wooden'])
  e.shapeless('quark:spruce_chest', ['minecraft:spruce_planks', '#forge:chests/wooden'])
  e.shapeless('quark:birch_chest', ['minecraft:birch_planks', '#forge:chests/wooden'])
  e.shapeless('quark:jungle_chest', ['minecraft:jungle_planks', '#forge:chests/wooden'])
  e.shapeless('quark:warped_chest', ['minecraft:warped_planks', '#forge:chests/wooden'])
  e.shapeless('quark:crimson_chest', ['minecraft:crimson_planks', '#forge:chests/wooden'])

  //bamboo
  e.shapeless('bambooeverything:bamboo_bundle', 'thermal:bamboo_block')
  e.shapeless('quark:bamboo_block', 'bambooeverything:bamboo_bundle')
  e.shapeless(Item.of('minecraft:bamboo', 9), 'quark:bamboo_block')

  kjsShaped('minecraft:chest', [
    'PPP',
    'P P',
    'PPP'
  ], {
    P: '#minecraft:planks'
  })

  // e.shaped(item.of('enviromats:alabaster_magenta', 8), [
  //   'AAA',
  //   'AMA',
  //   'AAA'
  // ], {
  //   A: '#forge:alabaster',
  //   M: '#forge:dyes/magenta'
  // })
})