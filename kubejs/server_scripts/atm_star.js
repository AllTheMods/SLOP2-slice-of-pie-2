onEvent('recipes', e => {
  //Dragon Soul
  e.shaped('kubejs:dragon_soul', [
    'CDA',
    'SNS',
    'BIB'
  ], {
    A: 'tombstone:soul_receptacle',
    C: 'minecraft:dragon_breath',
    D: 'minecraft:dragon_egg',
    N: 'minecraft:nether_star',
    B: 'mysticalagradditions:dragon_egg_crux',
    S: 'botania:dragonstone_block',
    I: 'quark:dragon_scale'
  })

  //Dimensional Seed
  e.shaped('kubejs:dimensional_seed', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'compressium:stone_6',
    B: 'compressium:endstone_4',
    C: 'compressium:netherrack_4',
    D: 'compressium:clay_3',
    E: 'compressium:emerald_5',
    F: 'compressium:soulsand_4',
    G: 'compressium:redsand_4',
    H: 'compressium:snow_4',
    I: 'compressium:obsidian_3'
  })

  //Withers Compass
  e.shaped('kubejs:withers_compass', [
    'DCD',
    'ABA',
    'DAD'
  ], {
    A: 'resourcefulbees:wither_honeycomb_block',
    B: 'ars_nouveau:glyph_wither',
    C: Item.of('xreliquary:mob_charm', {
      Damage: 0,
      entity: "minecraft:wither_skeleton"
    }),
    D: Item.of('apotheosis:potion_charm', {
      Damage: 0,
      Potion: "apotheosis:strong_wither"
    })
  })

  e.shapeless('kubejs:saltpeter_block', ['9x kubejs:saltpeter_ingot'])
  e.shapeless('9x kubejs:saltpeter_ingot', ['kubejs:saltpeter_block'])
  e.shapeless('kubejs:saltpeter_ingot', ['9x immersiveengineering:dust_saltpeter'])

  e.shapeless('9x kubejs:potassium_nitrate_ingot', ['kubejs:potassium_nitrate_block'])
  e.shapeless('kubejs:potassium_nitrate_block', ['9x kubejs:potassium_nitrate_ingot'])
  e.shapeless('kubejs:potassium_nitrate_ingot', ['9x kubejs:potassium_nitrate_dust'])

  e.shapeless('9x kubejs:potassium_ingot', ['kubejs:potassium_block'])
  e.shapeless('kubejs:potassium_block', ['9x kubejs:potassium_ingot'])
  e.shapeless('kubejs:potassium_ingot', ['9x kubejs:potassium_dust'])


  function multipleCrush(output, input) {
    e.recipes.mekanism.crushing(output, input)
    e.recipes.create.crushing(output, input)
    e.recipes.immersiveengineering.crusher(output, input)
    e.recipes.thermal.pulverizer(output, input)
  }

  multipleCrush('9x immersiveengineering:dust_saltpeter', 'kubejs:saltpeter_ingot')
  multipleCrush('9x kubejs:potassium_dust', 'kubejs:potassium_ingot')
  multipleCrush('9x kubejs:potassium_nitrate_dust', 'kubejs:potassium_nitrate_ingot')

  //philosophers Fuel
  e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_dust', 'kubejs:potassium_dust', '#forge:dusts/saltpeter')
  e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_ingot', 'kubejs:potassium_ingot', 'kubejs:saltpeter_ingot')
  e.recipes.mekanism.combining('2x kubejs:potassium_nitrate_block', 'kubejs:potassium_block', 'kubejs:saltpeter_block')
  e.recipes.create.mixing('2x kubejs:potassium_nitrate_dust', ['kubejs:potassium_dust', '#forge:dusts/saltpeter'])
  e.recipes.create.mixing('2x kubejs:potassium_nitrate_ingot', ['kubejs:potassium_ingot', 'kubejs:saltpeter_ingot'])
  e.recipes.create.mixing('2x kubejs:potassium_nitrate_block', ['kubejs:potassium_block', 'kubejs:saltpeter_block'])

  e.recipes.bloodmagic.alchemytable('kubejs:philosophers_fuel', [
    'kubejs:potassium_nitrate_block',
    'mekanism:sulfuric_acid_bucket',
    'xreliquary:infernal_claws',
    'thermal:coal_coke_block',
    'immersivepetroleum:napalm_bucket',
    'thermal:heavy_oil_bucket'
  ]).syphon(50000)

  //Improbable Probaility Device
  e.shaped('kubejs:improbable_probability_device', [
    'AAB',
    'CDE',
    'FFF'
  ], {
    A: 'appliedenergistics2:singularity',
    B: 'mekanism:module_solar_recharging_unit',
    C: 'ae2extras:16m_cell_component',
    D: 'appliedenergistics2:128_cubed_spatial_cell_component',
    E: Item.of('apotheosis:potion_charm', {
      Damage: 0,
      Potion: "apotheosis:strong_knowledge"
    }),
    F: 'thermal:enderium_block'
  })

  //Nexium Emitter
  e.shaped('kubejs:nexium_emitter', [
    'A C',
    ' BF',
    'CED'
  ], {
    A: 'enviroenergy:xerothium_lightning_ccu',
    B: 'appliedenergistics2:wireless_terminal',
    C: 'alltheores:platinum_block',
    D: 'compressium:netherite_3',
    E: 'quark:ender_watcher',
    F: 'xreliquary:wraith_node'
  })

  //Pulsating Black Hole
  e.shaped('kubejs:pulsating_black_hole', [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'botania:mana_void',
    B: 'bloodmagic:voidsigil',
    C: 'ars_nouveau:void_jar',
    D: 'storagedrawers:void_upgrade',
    E: 'botania:black_hole_talisman',
    F: 'thermal:device_nullifier',
    G: 'mekanism:creative_energy_cube',
    H: 'envirotech:xerothium_void_miner_ccu',
    I: 'industrialforegoing:supreme_black_hole_tank'
  })

  //Oblivion Shard
  e.shaped('kubejs:oblivion_shard', [
    ' AB',
    'ACA',
    'BA '
  ], {
    A: 'mysticalagradditions:insanium_ingot_block',
    C: 'botania:star_sword',
    B: 'mysticalagradditions:nether_star_crux'
  })

  //Creative Essence
  e.shaped('mysticalagradditions:creative_essence', [
    'CAC',
    'ABA',
    'CAC'
  ], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  })

  //Patrick Star
  e.recipes.create.mechanical_crafting('kubejs:patrick_star', [
    '    B    ',
    '   BCA   ',
    'BBBGCABBB',
    'ACGCGGGCA',
    ' AAGGGBA ',
    '  EDDDE  ',
    ' EFEDEFE ',
    'BEDD DDEB',
    'AAA   AAA'
  ], {
    A: 'minecraft:magenta_concrete',
    B: 'minecraft:pink_concrete',
    C: 'minecraft:pink_concrete_powder',
    D: 'minecraft:green_concrete',
    E: 'minecraft:green_concrete_powder',
    F: 'minecraft:lime_concrete',
    G: 'minecraft:magenta_concrete_powder'
  })

  //ATM Star
  e.recipes.create.mechanical_crafting('kubejs:atm_star', [
    '    A    ',
    '   AJA   ',
    'AAAJFJAAA',
    'AJJCDEJJA',
    ' ANBIHMA ',
    '  AKGLA  ',
    ' AJJAJJA ',
    'AJJA AJJA',
    'AAA   AAA'
  ], {
    A: 'thermal:enderium_block',
    B: 'kubejs:nexium_emitter',
    C: 'kubejs:dragon_soul',
    D: 'kubejs:withers_compass',
    E: 'kubejs:pulsating_black_hole',
    F: 'kubejs:oblivion_shard',
    G: 'kubejs:improbable_probability_device',
    H: 'kubejs:dimensional_seed',
    I: 'kubejs:patrick_star',
    J: 'kubejs:nether_star_block',
    K: 'kubejs:philosophers_fuel',
    L: 'mysticalagradditions:creative_essence',
    M: 'kubejs:rune_of_sins',
    N: 'kubejs:mass_of_wills'
  })
})
