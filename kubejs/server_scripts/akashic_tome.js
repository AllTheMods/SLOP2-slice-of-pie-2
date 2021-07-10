onEvent('recipes', e => {
  e.remove({ id: 'akashictome:tome' })

  e.shapeless(
    Item.of('akashictome:tome').nbt({
      'akashictome:is_morphing': 1,
      'akashictome:data': {
        industrialforegoing: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'industrialforegoing:industrial_foregoing',
            'akashictome:displayName': {
              text: "IndustrialForegoing'sManual"
            }
          }
        },
        tconstruct: {
          id: 'tconstruct:materials_and_you',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'MaterialsAndYou'
            }
          }
        },
        resourcefulbees: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'FiftyShadesofBees'
            },
            'patchouli:book': 'resourcefulbees:fifty_shades_of_bees',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FiftyShadesofBees"}]}'
            }
          }
        },
        theoneprobe: {
          id: 'theoneprobe:probenote',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'ProbeSettings'
            },
            'akashictome:is_morphing': 1
          }
        },
        immersiveengineering: {
          id: 'immersiveengineering:manual',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: "Engineer'sManual"
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'sManual"}]}'
            }
          }
        },
        silentgear: {
          id: 'silentgear:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'SilentGearGuide'
            }
          }
        },
        botania: {
          id: 'botania:lexicon',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'LexicaBotania'
            },
            'botania:elven_unlock': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"LexicaBotania"}]}'
            },
            'akashictome:is_morphing': 1
          }
        },
        thermal: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'thermal:guidebook',
            'akashictome:displayName': {
              text: 'Thermalpedia'
            }
          }
        },
        engineersdecor: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'engineersdecor:engineersdecor_manual',
            'akashictome:displayName': {
              text: "Engineer'sDecor"
            }
          }
        },
        mahoutsukai: {
          id: 'mahoutsukai:guidebook',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'MahouTsukaiKnowledgeCompendium'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MahouTsukaiKnowledgeCompendium"}]}'
            }
          }
        },
        solcarrot: {
          id: 'solcarrot:food_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'FoodBook'
            },
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"FoodBook"}]}'
            }
          }
        },
        ars_nouveau: {
          id: 'ars_nouveau:worn_notebook',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'WornNotebook'
            }
          }
        },
        bloodmagic: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'SanguineScientiem'
            },
            'patchouli:book': 'bloodmagic:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"SanguineScientiem"}]}'
            }
          }
        },
        twilightforest: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'patchouli:book': 'twilightforest:guide',
            'akashictome:displayName': {
              text: "Traveller'sLogbook"
            }
          }
        },
        mysticalagriculture: {
          id: 'patchouli:guide_book',
          Count: 1,
          tag: {
            'akashictome:displayName': {
              text: 'MysticalAgriculture'
            },
            'patchouli:book': 'mysticalagriculture:guide',
            'akashictome:is_morphing': 1,
            display: {
              Name: '{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"MysticalAgriculture"}]}'
            }
          }
        }
      }
    }),
    'minecraft:stick'
  ).id(`kubejs:akashik_tome`)
})
