//priority: 1000
onEvent(`item.tags`, e => {
  const metals = [`aluminum`, `copper`, `lead`, `nickel`, `osmium`, `platinum`, `silver`, `tin`, `uranium`, `zinc`]
  metals.forEach(item => {
    //Mek Clumps
    e.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
    e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
    //Mek Dirty Dusts
    e.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
    e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
    //Mek Shards
    e.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
    e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
    //Mek Crystals
    e.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
    e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
  })

  e.add('forge:silicon', 'appliedenergistics2:silicon')
  
  //mystical agriculture
  
  e.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
  e.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
  e.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
  e.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
  e.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
  e.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
  
  //mek biofuel
  e.add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
  e.add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'byg:skyris_vine', 'byg:embur_gel_vines'])
  e.add('misctags:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
  e.add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
  e.add('misctags:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
})