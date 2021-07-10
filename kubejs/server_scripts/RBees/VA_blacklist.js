events.listen('item.tags', e => {
  e.remove('resourcefulbees:valid_apiary', blacklistVA)
  e.remove('resourcefulbees:valid_apiary', 'quark:biotite')
})

events.listen('block.tags', e => {
  e.remove('resourcefulbees:valid_apiary', blacklistVA)
})