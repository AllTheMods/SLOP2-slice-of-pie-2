onEvent('recipes', e => {
  function tier(types, time, soil, rCount) {
    types.forEach(type => {
      e.recipes.immersiveengineering.cloche(Item.of(`mysticalagriculture:${type}_essence`, rCount), `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`).time(time)
    })
  }
  function inf(rCount, time, soil) {
    tier([`inferium`], time, soil, rCount)
  }
  function regular(results, seed, crop) {
    e.recipes.immersiveengineering.cloche(results, Item.of(seed), `minecraft:dirt`, crop).time(600)
  }

  //#region CROPS
  //Regular crops
  regular([{item: 'byg:blueberries',count: 2}], 'byg:blueberries', 'byg:blueberry_bush')
  regular([{item: 'silentgear:flax_fiber',count: 2}, {item: 'silentgear:flax_seeds'}], 'silentgear:flax_seeds', 'silentgear:flax_plant')

  //Inferium
  inf(1, 1000, 'minecraft:dirt')
  inf(2, 1750, 'mysticalagriculture:inferium_farmland')
  inf(3, 2500, 'mysticalagriculture:prudentium_farmland')
  inf(4, 3250, 'mysticalagriculture:tertium_farmland')
  inf(5, 4000, 'mysticalagriculture:imperium_farmland')
  inf(6, 4750, 'mysticalagriculture:supremium_farmland')
  inf(7, 5500, 'mysticalagradditions:insanium_farmland')

  //Tier 1 Crops
  tier(['air','earth','fire','water','dirt','wood','ice','stone'], 1000, `#misctags:farmland/tier1`, 2)

  //Tier 2 Crops
  tier(['aluminum','chicken','coal','copper','coral','cow','dye','fish','honey','iridium','mystical_flower','nature','nether','pig','rubber','saltpeter','sheep','silicon','slime','squid','sulfur','turtle','sky_stone'], 1750, `#misctags:farmland/tier2`, 2)

  //Tier 3 Crops
  tier(['azure_silver','brass','bronze','certus_quartz','creeper','crimson_iron','ender_biotite','glowstone','graphite','iron','lead','nether_quartz','obsidian','prismarine','quartz_enriched_iron','rabbit','redstone','silver','skeleton','spider','tin','zinc','zombie','lumium','fluorite'], 2500, `#misctags:farmland/tier3`, 2)

  //Tier 4 Crops
  tier(['azure_electrum','blaze','chrome','constantan','crimson_steel','electrum','end','enderman','experience','fluix','ghast','gold','invar','lapis_lazuli','mithril','nickel','osmium','refined_glowstone','refined_obsidian','steel','titanium','tungsten','enderium','compressed_iron','hop_graphite'], 3250, `#misctags:farmland/tier4`, 2)

  //Tier 5 Crops
  tier(['diamond','emerald','netherite','wither_skeleton','platinum','uranium'], 4000, `#misctags:farmland/tier5`, 2)

  //Tier 6 Crops
  tier(['dragon_egg','nether_star','nitro_crystal'], 4750, `#misctags:farmland/tier6`, 2)

  //Botanical Tier
  tier(['manasteel'], 2500, 'kubejs:magical_soil', 2)
  tier(['elementium'], 3250, 'kubejs:magical_soil', 2)
  tier(['terrasteel'], 4000, 'kubejs:magical_soil', 2)
  //#endregion
})