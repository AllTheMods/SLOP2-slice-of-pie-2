onEvent('jei.add.items', e => {
  e.add([
    Item.of('tconstruct:tinker_station'),
    Item.of('tconstruct:crafting_station'),
    Item.of('tconstruct:part_builder'),
    Item.of('tconstruct:tinkers_anvil'),
    Item.of('tconstruct:scorched_anvil'),

    Item.of(`minecraft:dragon_egg`),
    Item.of(`resourcefulbees:dragonic_bee_spawn_egg`),
    Item.of(`resourcefulbees:netherite_bee_spawn_egg`),
    Item.of(`appliedenergistics2:fluix_glass_cable`),
    Item.of(`appliedenergistics2:fluix_covered_cable`),
    Item.of(`appliedenergistics2:fluix_smart_cable`),
    Item.of(`appliedenergistics2:fluix_covered_dense_cable`),
    Item.of(`appliedenergistics2:fluix_smart_dense_cable`)
  ])
})