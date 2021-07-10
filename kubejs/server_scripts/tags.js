//priority: 1000
onEvent(`item.tags`, e => {
  [`aluminum`, `copper`, `lead`, `nickel`, `osmium`, `platinum`, `silver`, `tin`, `uranium`, `zinc`].forEach(item => {
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
})