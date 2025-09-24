ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('cbcmoreshells:incendiary_he_shell', [
    '  A  ',
    ' ABA ',
    ' ACA ',
    '  D  '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'tfmg:thermite_powder',
    C: 'createbigcannons:packed_guncotton',
    D: '#minecraft:wooden_slabs'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:he_cannon_rocket', [
    '  A  ',
    ' ACA ',
    ' ACA ',
    '  B  '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'createloveandwar:fuel_pellet',
    C: 'createbigcannons:packed_guncotton'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:aphe_cannon_rocket', [
    '  D  ',
    ' ADA ',
    ' ACA ',
    '  B  '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'createloveandwar:fuel_pellet',
    C: 'createbigcannons:packed_guncotton',
    D: '#forge:ingots/cast_iron'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:apfsds_shot', [
    '  D  ',
    ' EDE ',
    ' ACA ',
    '  B  '
  ], {
    A: 'minecraft:iron_ingot',
    B: '#minecraft:wooden_slabs',
    C: 'createbigcannons:packed_guncotton',
    D: '#forge:ingots/steel',
    E: 'create:iron_sheet'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:aphe_rocket', [
    '  D  ',
    '  C  ',
    ' AAA ',
    '  B  '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'createloveandwar:fuel_pellet',
    C: 'createbigcannons:packed_guncotton',
    D: '#forge:ingots/cast_iron'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:he_rocket', [
    '  A  ',
    '  C  ',
    ' ACA ',
    '  B  '
  ], {
    A: 'minecraft:iron_ingot',
    B: 'createloveandwar:fuel_pellet',
    C: 'createbigcannons:packed_guncotton'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:he_bomb', [
    '  A  ',
    ' ACA ',
    ' CCC ',
    ' AAA '
  ], {
    A: 'minecraft:iron_ingot',
    C: 'createbigcannons:packed_guncotton'
  })

  event.recipes.create.mechanical_crafting('cbcmoreshells:aphe_bomb', [
    '  D  ',
    ' ACA ',
    ' CCC ',
    ' AAA '
  ], {
    A: 'minecraft:iron_ingot',
    C: 'createbigcannons:packed_guncotton',
    D: '#forge:ingots/cast_iron'
  })
})