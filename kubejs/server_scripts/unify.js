//priority: 997
onEvent('recipes', e => {
  function unifyMetalWithOres(name, mod) {
    //#region variables
    let ingotItem = mod.equals('mekanism') ? `${mod}:ingot_${name}` : `${mod}:${name}_ingot`
    let dustItem = mod.equals('mekanism') ? `${mod}:dust_${name}` : (mod.equals('minecraft') ? `alltheores:${name}_dust` : `${mod}:${name}_dust`)
    let blockItem = mod.equals('mekanism') ? `${mod}:block_${name}` : `${mod}:${name}_block`
    let nuggetItem = mod.equals('mekanism') ? `${mod}:nugget_${name}` : `${mod}:${name}_nugget`
    let blacklist = ['iron', 'gold', 'azure_silver', 'crimson_iron']
    //#endregion
    //#region removals
    // e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    // e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    // e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    // e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
    e.remove({
      input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
      output: `#forge:ingots/${name}`,
      type: 'minecraft:smelting'
    })
    e.remove({
      input: [`#forge:ores/${name}`, `#forge:dusts/${name}`],
      output: `#forge:ingots/${name}`,
      type: 'minecraft:blasting'
    })
    e.remove({
      input: [`#forge:ingots/${name}`, `#forge:ores/${name}`],
      type: 'immersiveengineering:crusher'
    })
    e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ingot` })
    e.remove({ id: `appliedenergistics2:grinder/${name}_dust_ore` })
    if (!blacklist.includes(name)) {
      e.remove({
        input: `#forge:ores/${name}`,
        output: `mekanism:dust_${name}`,
        type: 'mekanism:enriching'
      })
      e.remove({
        input: `mekanism:dirty_dust_${name}`,
        output: `mekanism:dust_${name}`,
        type: 'mekanism:enriching'
      })
      e.remove({
        input: `#mekanism:clumps/${name}`,
        output: `mekanism:dirty_dust_${name}`,
        type: 'mekanism:crushing'
      })
      e.remove({
        input: `#forge:ores/${name}`,
        output: `mekanism:clump_${name}`,
        type: 'mekanism:purifying'
      })
      e.remove({
        input: `mekanism:shard_${name}`,
        output: `mekanism:clump_${name}`,
        type: 'mekanism:purifying'
      })
      e.remove({
        input: `#forge:ores/${name}`,
        output: `mekanism:shard_${name}`,
        type: 'mekanism:injecting'
      })
      e.remove({
        input: `#mekanism:crystals/${name}`,
        output: `mekanism:shard_${name}`,
        type: 'mekanism:injecting'
      })
    }
    //#endregion
    //#region additions
    e.recipes.minecraft.smelting(ingotItem, `#forge:dusts/${name}`).xp(0.5).id(`kubejs:minecraft/smelting/dusts/${name}`)
    e.recipes.minecraft.smelting(ingotItem, `#forge:ores/${name}`).xp(1).id(`kubejs:minecraft/smelting/ores/${name}`)
    e.recipes.minecraft.blasting(ingotItem, `#forge:dusts/${name}`).xp(0.5).id(`kubejs:minecraft/blasting/dusts/${name}`)
    e.recipes.minecraft.blasting(ingotItem, `#forge:ores/${name}`).xp(1).id(`kubejs:minecraft/blasting/ores/${name}`)
    e.recipes.mekanism.enriching(item.of(dustItem, 2), `#forge:ores/${name}`).id(`kubejs:mekanism/enriching/ores/${name}`)
    e.recipes.appliedenergistics2.grinder({
      input: { tag: `forge:ingots/${name}` },
      result: {
        primary: {
          item: dustItem,
          count: 1
        }
      },
      turns: 8
    }).id(`kubejs:appliedenergistics2/grinder/ingot/${name}`)
    e.recipes.appliedenergistics2.grinder({
      input: { tag: `forge:ores/${name}` },
      result: {
        primary: {
          item: dustItem,
          count: 2
        }
      },
      turns: 8
    }).id(`kubejs:appliedenergistics2/grinder/ores/${name}`)
    //#endregion
  }

  function unifyMetalWithoutOres(name, mod) {
    let ingotItem = mod.equals('mekanism') ? `${mod}:ingot_${name}` : `${mod}:${name}_ingot`
    let dustItem = mod.equals('mekanism') ? `${mod}:dust_${name}` : `${mod}:${name}_dust`
    let blockItem = mod.equals('mekanism') ? `${mod}:block_${name}` : `${mod}:${name}_block`
    let nuggetItem = mod.equals('mekanism') ? `${mod}:nugget_${name}` : `${mod}:${name}_nugget`

    e.replaceInput(nuggetItem, (`#forge:nuggets/${name}`))
    e.replaceInput(dustItem, (`#forge:dusts/${name}`))
    e.replaceInput(ingotItem, (`#forge:ingots/${name}`))
    e.replaceInput(blockItem, (`#forge:storage_blocks/${name}`))

    e.replaceOutput(`#forge:ingots/${name}`, ingotItem)
    e.replaceOutput(`#forge:dusts/${name}`, dustItem)
    e.replaceOutput(`#forge:nuggets/${name}`, nuggetItem)
    e.replaceOutput(`#forge:storage_blocks/${name}`, blockItem)
  }

  function bulkUnifyMetal(mod, withOre, metals) {
    metals.forEach(metal => withOre ? unifyMetalWithOres(metal, mod) : unifyMetalWithoutOres(metal, mod))
  }

  //args: 1-mod name, 2-does it have an ore, 3-list of metal names
  bulkUnifyMetal('minecraft', true, ['gold', 'iron'])
  bulkUnifyMetal('alltheores', true, ['aluminum', 'copper', 'lead', 'nickel', 'platinum', 'silver', 'tin', 'uranium', 'zinc', 'osmium'])
  bulkUnifyMetal('silentgear', true, ['azure_silver', 'crimson_iron'])
  bulkUnifyMetal('thermal', false, ['constantan', 'electrum', 'bronze'])
  bulkUnifyMetal('mekanism', false, ['steel'])
})