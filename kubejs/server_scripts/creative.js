onEvent('recipes', e => {
  const atm_star = 'kubejs:atm_star'

  //Woot
  e.shaped('woot:creative_conatus', [
    'UCU',
    'CSC',
    'UCU'
  ], {
    S: atm_star,
    U: 'mysticalagradditions:insanium_ingot_block',
    C: 'woot:cell_4'
  })

  //Botania
  e.shaped('botania:creative_pool', [
    'RMR',
    'MSM',
    'RMR'
  ], {
    S: atm_star,
    M: 'botania:mana_pool',
    R: '#botania:runes'
  })
  e.shapeless(item.of('botania:mana_tablet', {
    mana: 500000,
    creative: 1
  }), ['botania:creative_pool'])

  //Ars Nouveau
  e.shaped(Item.of('ars_nouveau:creative_spell_book', {
    mode: 0,
    spells: ",intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust"
  }), [
    'BSG',
    'GGE',
    'EER'
  ], {
    B: 'ars_nouveau:archmage_spell_book',
    S: atm_star,
    G: 'mysticalagradditions:insanium_gemstone',
    E: 'minecraft:ender_eye',
    R: 'tombstone:soul_receptacle'
  })
  e.shaped('ars_nouveau:creative_mana_jar', [
    'GMG',
    'GSG',
    'GGG'
  ], {
    G: '#forge:glass',
    S: atm_star,
    M: 'ars_nouveau:mana_gem_block'
  })

  //Immersive Engineering
  e.shaped('immersiveengineering:capacitor_creative', [
    'RNR',
    'MSM',
    'RNR'
  ], {
    S: atm_star,
    M: 'immersiveengineering:capacitor_mv',
    R: 'immersiveengineering:capacitor_lv',
    N: 'immersiveengineering:capacitor_hv'
  })

  //Applied Energistics 2
  e.shaped('appliedenergistics2:creative_energy_cell', [
    'RNR',
    'MSM',
    'RNR'
  ], {
    S: atm_star,
    M: 'appliedenergistics2:quantum_link',
    R: Item.of('appliedenergistics2:dense_energy_cell', { internalCurrentPower: 1600000 }),
    N: 'appliedenergistics2:quantum_link'
  })

  //Mekanism
  e.shaped('mekanism:creative_energy_cube', [
    'ATA',
    'VCV',
    'ATA'
  ], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    V: 'silentgear:tyrian_steel_block',
    C: 'mekanism:ultimate_energy_cube'
  })

  e.shaped(Item.of('mekanism:creative_energy_cube', {
    mekData: {
      EnergyContainers: [{
        Container: 0,
        stored: "18446744073709551615.9999"
      }]
    }
  }), [
    ' L ',
    'UCU',
    ' S '
  ], {
    S: atm_star,
    U: Item.of('mekanism:ultimate_energy_cube', {mekData:{EnergyContainers:[{Container:0,stored:"4096000000"}]}}),
    C: 'mekanism:creative_energy_cube',
    L: 'thermal:lightning_charge'
  })

  //Create
  e.recipes.create.mechanical_crafting('create:creative_motor', [
    'CLC',
    'HSH',
    'LGL'
  ], {
    C: 'create:cogwheel',
    L: 'create:large_cogwheel',
    H: 'create:shaft',
    S: atm_star,
    G: 'create:gearbox'
  })

  //Storage Drawers
  e.shaped('16x storagedrawers:creative_storage_upgrade', [
    'EEE',
    'ASA',
    'EEE'
  ], {
    E: 'storagedrawers:emerald_storage_upgrade',
    S: atm_star,
    A: 'mysticalagriculture:supremium_ingot_block'
  })

  //Thermal
  e.shaped('thermal:machine_efficiency_creative_augment', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'thermal:upgrade_augment_3',
    B: `appliedenergistics2:singularity`,
    C: `thermal:energy_cell`,
    D: atm_star,
    E: `thermal:lightning_charge`
  })
})
