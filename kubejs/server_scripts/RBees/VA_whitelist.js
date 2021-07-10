events.listen('item.tags', e => {
  e.add('resourcefulbees:valid_apiary', whitelistVA)
})

events.listen('block.tags', e => {
  e.add('resourcefulbees:valid_apiary', whitelistVA)
  e.add('resourcefulbees:valid_apiary', [
    'minecraft:lava',
    'minecraft:water',
    'allthemodium:molten_bluelava_block',
  ])
})