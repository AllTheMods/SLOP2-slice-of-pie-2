//priority: 100
onEvent(`jei.hide.items`, e => {
  function hideWood(list) {
    list.forEach(type => {
      if (!Ingredient.of(`/biomesoplenty:.*${type}/`).isEmpty()) e.hide(`/biomesoplenty:.*${type}/`)
      if (!Ingredient.of(`/byg:.*${type}/`).isEmpty()) e.hide(`/byg:.*${type}/`)
    })
  }
  function hideStone(list) {
    list.forEach(type => {
      if (!Ingredient.of(`/envirocore:.*${type}/`).isEmpty()) e.hide(`/envirocore:.*${type}/`)
      if (!Ingredient.of(`/enviromats:.*_${type}/`).isEmpty()) e.hide(`/enviromats:.*_${type}/`)
    })
  }

  const typeFirst = ['mekanism', 'immersiveengineering']
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      const id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).isEmpty()) e.hide(id)
    })
  }
  function hideStuff(mod, type, names) {
    names.forEach(name => {
      const id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).isEmpty()) e.hide(id)
    })
  }

  e.hide([
    `createaddition:diamond_grit`,
    /alltheores:ore_other.*/,
    /enviromats:alabaster.*/,
    /biomesoplenty:white.*/,
    /biomesoplenty:orange.*/,
    /biomesoplenty:black.*/,
    `biomesoplenty:mud`,
    `biomesoplenty:mud_bricks`,
    `biomesoplenty:mud_brick_stairs`,
    `biomesoplenty:mud_brick_slab`,
    `biomesoplenty:mud_brick_wall`,
    /tconstruct:tinker_station/,
    /tconstruct:part_builder/,
    /tconstruct:crafting_station/,
    /tconstruct:.*_anvil/,
    /tconstruct:pickaxe/,
    /tconstruct:sledge_hammer/,
    /tconstruct:vein_hammer/,
    /tconstruct:mattock/,
    /tconstruct:excavator/,
    /tconstruct:hand_axe/,
    /tconstruct:broad_axe/,
    /tconstruct:kama/,
    /tconstruct:scythe/,
    /tconstruct:sword/,
    /tconstruct:cleaver/,
    `tconstruct:copper_ingot`,
    'tconstruct:molten_aluminum_bucket',
    'tconstruct:molten_copper_bucket',
    'tconstruct:molten_lead_bucket',
    'tconstruct:molten_nickel_bucket',
    'tconstruct:molten_osmium_bucket',
    'tconstruct:molten_platinum_bucket',
    'tconstruct:molten_silver_bucket',
    'tconstruct:molten_tin_bucket',
    'tconstruct:molten_uranium_bucket',
    'tconstruct:molten_zinc_bucket',
    `tmechworks:copper_ingot`,
    `tmechworks:aluminum_ingot`,
    `@curios`,
    `quark:ancient_tome`,
    `appliedenergistics2:flour`,
    /appliedenergistics2:facade/,
    /appliedenergistics2:.*_cable/,
    /theoneprobe.*/,
    /titanium:.*/,
    `bloodmagic:saltpeter`,
    `bloodmagic:sulfur`,
    `bloodmagic:coalsand`,
    `bloodmagic:ironsand`,
    `bloodmagic:goldsand`,
    `mekanism:copper_ore`,
    `mekanism:tin_ore`,
    `mekanism:osmium_ore`,
    `mekanism:uranium_ore`,
    `mekanism:lead_ore`,
    `mekanism:sawdust`,
    `mekanism:block_charcoal`,
    /mekanism:creative_chemical_tank/,
    /mekanism:creative_fluid_tank/,
    /immersiveengineering:.+coke/,
    `immersiveengineering:coke`,
    `immersiveengineering:slag`,
    'immersivepetroleum:bitumen',
    /biggerreactors:yello.+/,
    /engineerstools:.+_grit/,
    `xreliquary:alkahestry_tome`,
    'mysticalagradditions:nitro_crystal_crux',
    /resourcefulbees:.+_bee_spawn_egg/,
    'create:honey_bucket',
    'thermal:creosote_bucket',
    'thermal:crude_oil_bucket',
    'immersivepetroleum:oil_bucket',
    'thermal:rf_coil_creative_augment',
    'thermal:fluid_tank_creative_augment',
    'thermal:machine_catalyst_creative_augment'
  ])

  hideWood([`leaves`, `planks`, `slab`, `stairs`, `log`, `wood`, `bookshelf`, `crafting_table`, `fence`, `fence_gate`, `door`, `trapdoor`, `pressure_plate`, `button`, `boat`, `sapling`])
  hideStone([`bricks`, `bricks_slab`, `bricks_stairs`, `pillar`, `slab`, `stairs`, `bricks_vertical_slab`, `vertical_slab`, `bricks_wall`, `wall`, `cobble`, `polished`, `brick`, `brick_small`, `tile`, `tile_small`])

  //Hides items based name, format: `mod`, `metal`, [`type1`, `type2`, `etc`]
  hideMetal(`immersiveengineering`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `aluminum`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `uranium`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `steel`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `electrum`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`immersiveengineering`, `constantan`, [`ingot`, `dust`, `nugget`, `storage`, `slab_storage`])
  hideMetal(`mekanism`, `copper`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `tin`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `uranium`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `lead`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `osmium`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`mekanism`, `bronze`, [`ingot`, `dust`, `nugget`, `block`])
  hideMetal(`create`, `copper`, [`ingot`, `ore`, `nugget`, `block`])
  hideMetal(`create`, `zinc`, [`ingot`, `ore`, `nugget`, `block`])
  hideMetal(`thermal`, `copper`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `tin`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `lead`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `silver`, [`ingot`, `ore`, `dust`, `nugget`, `block`])
  hideMetal(`thermal`, `nickel`, [`ingot`, `ore`, `dust`, `nugget`, `block`])

  //Hides items based on type, format: `mod`, `type`, [`name1`, `name2`, `etc`]
  hideStuff(`thermal`, `dust`, [`iron`, `gold`])
  hideStuff(`immersiveengineering`, `dust`, [`iron`, `gold`, `sulfur`, `wood`])
  hideStuff(`immersiveengineering`, `plate`, [`iron`, `gold`, `copper`, `aluminum`, `lead`, `silver`, `nickel`, `constantan`, `electrum`])
  hideStuff(`mekanism`, `dust`, [`lapis_lazuli`, `emerald`, `diamond`, `quartz`, `iron`, `gold`])
  hideStuff(`mekanism`, `crystal`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `shard`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `dirty_dust`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`mekanism`, `clump`, [`osmium`, `copper`, `tin`, `lead`, `uranium`])
  hideStuff(`appliedenergistics2`, `dust`, [`nether_quartz`, `ender`, `iron`, `gold`])
  hideStuff(`create`, `sheet`, [`iron`, `golden`, `copper`])
  hideStuff(`tmechworks`, `ore`, [`aluminum`, `copper`])
  hideStuff(`quark`, `crate`, [`apple`, `carrot`, `beetroot`, `potato`])
  hideStuff(`quark`, `block`, [`bamboo`, `charcoal`, `sugar_cane`])
  hideStuff(`mysticalagriculture`, `seeds`, [
    `basalz`,
    `blazing_crystal`,
    `blitz`,
    `blizz`,
    `brass`,
    `bronze`,
    `compressed_iron`,
    `constantan`,
    `crimson_steel`,
    `chrome`,
    `electrum`,
    `elementium`,
    `enderium`,
    `ender_biotite`,
    `energized_steel`,
    `fluix`,
    `graphite`,
    `hop_graphite`,
    `invar`,
    `iridium`,
    `lumium`,
    `manasteel`,
    `niotic_crystal`,
    `nitro_crystal`,
    `oratchalcum`,
    `quartz_enriched_iron`,
    `refined_glowstone`,
    `refined_obsidian`,
    `rock_crystal`,
    `rubber`,
    `signalum`,
    `silicon`,
    `sky_stone`,
    `spirited_crystal`,
    `starmetal`,
    `steel`,
    `sulfur`,
    `terrasteel`,
    `titanium`,
    `tungsten`,
    `mithril`
  ])
  hideStuff(`mysticalagriculture`, `essence`, [
    `basalz`,
    `blazing_crystal`,
    `blitz`,
    `blizz`,
    `brass`,
    `bronze`,
    `compressed_iron`,
    `constantan`,
    `crimson_steel`,
    `chrome`,
    `electrum`,
    `elementium`,
    `enderium`,
    `ender_biotite`,
    `energized_steel`,
    `fluix`,
    `graphite`,
    `hop_graphite`,
    `invar`,
    `iridium`,
    `lumium`,
    `manasteel`,
    `niotic_crystal`,
    `nitro_crystal`,
    `oratchalcum`,
    `quartz_enriched_iron`,
    `refined_glowstone`,
    `refined_obsidian`,
    `rock_crystal`,
    `rubber`,
    `signalum`,
    `silicon`,
    `sky_stone`,
    `spirited_crystal`,
    `starmetal`,
    `steel`,
    `sulfur`,
    `terrasteel`,
    `titanium`,
    `tungsten`,
    `mithril`
  ])
})

onEvent('jei.hide.fluids', e => {
  function hideFluids(fluids) {
    fluids.forEach(fluid => {
      e.hide(fluid)
    })
  }

  hideFluids([
    // honey
    'cofh_core:honey',
    'create:flowing_honey',
    'create:honey',

    // tinker fluids overriden by ATO
    'tconstruct:molten_aluminum',
    'tconstruct:molten_copper',
    'tconstruct:molten_lead',
    'tconstruct:molten_nickel',
    'tconstruct:molten_osmium',
    'tconstruct:molten_platinum',
    'tconstruct:molten_silver',
    'tconstruct:molten_tin',
    'tconstruct:molten_uranium',
    'tconstruct:molten_zinc',

    // oil
    'thermal:creosote',
    'thermal:crude_oil',
    'immersivepetroleum:oil'
  ])
})