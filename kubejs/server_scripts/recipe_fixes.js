//priority: 5
onEvent('recipes', e => {
  //#region FUNCTIONS
  //#endregion FUNCTIONS

  //#region REMOVALS
  e.remove({
    output: [
      'resourcefulbees:bee_jar',
      'create:andesite_alloy',
      'minecraft:repeater',
      'minecraft:beacon',
      'minecraft:stonecutter',
      
      'mekanism:advanced_bin',
      'mekanism:elite_bin',
      'mekanism:ultimate_bin',
      'mekanism:basic_tier_installer',
      'mekanism:advanced_tier_installer',
      'mekanism:elite_tier_installer',
      'mekanism:ultimate_tier_installer'
    ]
  })
  e.remove({ id: 'minecraft:comparator' })
  e.remove({ id: 'minecraft:daylight_detector' })
  e.remove({ id: 'quark:building/crafting/chests/chest_revert' })
  //#endregion

  //#region ADDITIONS

  //#region CREATE
  e.shaped('8x create:andesite_alloy', [
    'NA',
    'AN'
  ], {
    A: 'minecraft:andesite',
    N: ['#forge:nuggets/iron', '#forge:nuggets/zinc']
  })
  e.recipes.create.mixing('8x create:andesite_alloy', [
    'minecraft:andesite',
    ['#forge:nuggets/iron', '#forge:nuggets/zinc']
  ])
  e.custom({
    'type': 'create:sequenced_assembly',
    'ingredient': {
      'item': 'metalbarrels:obsidian_barrel'
    },
    'transitionalItem': {
      'item': 'metalbarrels:obsidian_barrel'
    },
    'sequence': [
      {
        'type': 'create:deploying',
        'ingredients': [
          {
            'item': 'metalbarrels:obsidian_barrel'
          },
          {
            'item': 'minecraft:netherite_ingot'
          }
        ],
        'results': [
          {
            'item': 'metalbarrels:netherite_barrel'
          }
        ]
      }
    ],
    'results': [
      {
        'item': 'metalbarrels:netherite_barrel',
        'chance': 100.0
      }
    ],
    'loops': 1
  })
  //#endregion CREATE
  //#region RESOURCEFUL BEES
  e.shaped('16x resourcefulbees:bee_jar', [
    ' G ',
    'G G',
    'GGG'
  ], {
    G: '#forge:glass'
  })
  //#endregion RESOURCEFUL BEES
  //#region STORAGE DRAWERS
  e.shaped('storagedrawers:compacting_drawers_3', [
    'SSS',
    'PDP',
    'SIS'
  ], {
    S: '#forge:stone',
    P: 'minecraft:piston',
    D: '#storagedrawers:drawers',
    I: '#forge:ingots/iron'
  })
  e.shaped('storagedrawers:controller', [
    'SSS',
    'CDC',
    'SIS'
  ], {
    S: '#forge:stone',
    C: 'minecraft:comparator',
    D: '#storagedrawers:drawers',
    I: '#forge:gems/diamond'
  })
  e.shaped('storagedrawers:controller_slave', [
    'SSS',
    'CDC',
    'SIS'
  ], {
    S: '#forge:stone',
    C: 'minecraft:comparator',
    D: '#storagedrawers:drawers',
    I: '#forge:ingots/gold'
  })
  //#endregion STORAGE DRAWERS
  //#region VANILLA MINECRAFT
  e.shaped('minecraft:repeater', [
    'TRT',
    'SSS'
  ], {
    T: 'minecraft:redstone_torch',
    R: '#forge:dusts/redstone',
    S: '#forge:stone'
  })
  e.shaped('minecraft:repeater', [
    'R R',
    'TRT',
    'SSS'
  ], {
    T: '#forge:rods/wooden',
    R: '#forge:dusts/redstone',
    S: '#forge:stone'
  })
  e.shaped('minecraft:beacon', [
    'GGG',
    'GSG',
    'OOO'
  ], {
    G: '#forge:glass',
    S: 'minecraft:nether_star',
    O: '#forge:obsidian'
  })
  e.shaped('minecraft:stonecutter', [
    ' I ',
    'SSS'
  ], {
    S: '#forge:stone',
    I: '#forge:ingots/iron'
  })
  //#endregion VANILLA MINECRAFT
  //#region MEKANISM
  e.shaped('mekanism:advanced_bin',[
    ' C ',
    'ABA',
    ' U '
  ], {
    C: 'mekanism:advanced_control_circuit',
    A: 'mekanism:alloy_infused',
    B: 'mekanism:basic_bin',
    U: 'storagedrawers:gold_storage_upgrade'
  })
  e.shaped('mekanism:elite_bin',[
    ' C ',
    'ABA',
    ' U '
  ], {
    C: 'mekanism:elite_control_circuit',
    A: 'mekanism:alloy_reinforced',
    B: 'mekanism:advanced_bin',
    U: 'storagedrawers:diamond_storage_upgrade'
  })
  e.shaped('mekanism:ultimate_bin',[
    ' C ',
    'ABA',
    ' U '
  ], {
    C: 'mekanism:ultimate_control_circuit',
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:elite_bin',
    U: 'storagedrawers:emerald_storage_upgrade'
  })
  e.shaped('mekanism:basic_tier_installer',[
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'minecraft:redstone',
    C: 'mekanism:basic_control_circuit',
    M: 'mekanism:ingot_steel',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:advanced_tier_installer',[
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    M: 'minecraft:gold_ingot',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:elite_tier_installer',[
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
    M: 'minecraft:diamond',
    P: '#minecraft:planks'
  })
  e.shaped('mekanism:ultimate_tier_installer',[
    'RCR',
    'MPM',
    'RCR'
  ], {
    R: 'mekanism:alloy_atomic',
    C: 'mekanism:ultimate_control_circuit',
    M: 'mekanism:ingot_refined_obsidian',
    P: '#minecraft:planks'
  })
  //#endregion MEKANISM

  //#endregion ADDITIONS
})