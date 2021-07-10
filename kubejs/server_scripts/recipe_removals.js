onEvent('recipes', e => {
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

      'industrialforegoing:infinity_drill',

      'bambooeverything:bamboo_bundle',
    ]
  })
  
  e.remove({
    output: 'minecraft:bamboo',
    type: 'minecraft:crafting_shapeless'
  });
})