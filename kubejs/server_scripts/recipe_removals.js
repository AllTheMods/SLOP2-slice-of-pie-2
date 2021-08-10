//priority: 10
onEvent('recipes', e => {
  const idRemove = [
    //spam removal
    'thermal:compat/mysticalagriculture/insolator_mysticalag_zombie_pigman_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_husk_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_panda_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_vindicator_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_phantom_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_shulker_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_ravager_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_villager_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_guardian_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_wolf_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_polar_bear_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_mooshroom_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_llama_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_horse_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_silverfish_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_stray_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_fox_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_endermite_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_vex_seeds',
    'thermal:machine/smelter/smelter_gold_dust',
    'thermal:machine/smelter/smelter_iron_dust',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_witch_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_pillager_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_evoker_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_parrot_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_magma_cube_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_drowned_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_dolphin_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_cat_seeds',
    'thermal:compat/mysticalagriculture/insolator_mysticalag_bat_seeds'
  ]
  idRemove.forEach(recipe_id => { e.remove({ id: recipe_id }) })

  e.remove({
    output: [
      'quark:oak_chest',
      'quark:dark_oak_chest',
      'quark:acacia_chest',
      'quark:spruce_chest',
      'quark:birch_chest',
      'quark:jungle_chest',
      'quark:warped_chest',
      'quark:crimson_chest',
      'quark:bamboo_block',

      'mekanism:digital_miner',
      'mekanism:atomic_disassembler',
      'mekanismgenerators:wind_generator',

      'pamhc2foodcore:fruitpunchitem',
      'pamhc2foodcore:applejuiceitem',
      'pamhc2foodcore:melonjuiceitem',
      'pamhc2foodcore:sweetberryjuiceitem',
      'pamhc2foodcore:p8juiceitem',

      'bambooeverything:bamboo_bundle',

      'storagedrawers:compacting_drawers_3',
      'storagedrawers:controller',
      'storagedrawers:controller_slave',
    ]
  })

  e.remove({
    output: 'minecraft:bamboo',
    type: 'minecraft:crafting_shapeless'
  });
})