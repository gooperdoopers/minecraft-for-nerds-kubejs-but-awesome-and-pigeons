ServerEvents.recipes(event => {

// minecrat map

event.remove({ output: 'minecraft:map'})

event.shapeless(
Item.of('minecraft:map'),
  [
    '9x minecraft:paper'
  ]
)

event.shaped(
  Item.of('minecraft:map'),
  [
    'AAA',
    'ABA',
    'AAA'
  ],
  {
    A: 'minecraft:paper',
    B: 'minecraft:filled_map',
  }
)

// end

event.recipes.create.mixing(

  ['minecraft:chorus_fruit'], 
  ['minecraft:nautilus_shell','minecraft:ender_pearl'])

event.recipes.create.mixing(

  ['minecraft:dragon_breath'], 
  ['minecraft:glass_bottle','minecraft:chorus_fruit','create:powdered_obsidian','minecraft:amethyst_shard'])

  event.recipes.create.mixing(

  ['minecraft:ghast_tear'], 
  [Fluid.of('minecraft:water',500),'9x minecraft:quartz','minecraft:fire_charge'])

// nether

event.recipes.create.milling('minecraft:soul_sand', 'minecraft:obsidian')

event.shaped(
  Item.of('create:blaze_burner'),
  [
    ' D ',
    'CBC',
    'AAA'
  ],
  {
    A: 'minecraft:blaze_rod',
    B: 'create:empty_blaze_burner',
    C: 'minecraft:coal_block',
    D: 'minecraft:flint_and_steel'
  }
)

event.recipes.create.haunting('minecraft:netherrack', 'minecraft:cobblestone')
event.recipes.create.haunting('minecraft:nether_wart_block', 'minecraft:moss_block')
event.recipes.create.haunting('minecraft:glowstone_dust', 'minecraft:redstone')
event.recipes.create.haunting('minecraft:wither_skeleton_skull', 'minecraft:skeleton_skull')

event.recipes.create.sequenced_assembly(
		[Item.of('minecraft:blaze_rod').withChance(130.0)], 'minecraft:stick', [
		event.recipes.createDeploying('minecraft:stick', ['minecraft:stick', 'minecraft:gold_ingot']),
		event.recipes.createFilling('minecraft:stick', ['minecraft:stick', Fluid.lava(500)])
	]).transitionalItem('minecraft:stick').loops(1)

  //clockwork
  event.remove({ output: 'createpropulsion:physics_assembler'})
  event.remove({ output: 'createpropulsion:assembly_gauge'}) 

  event.remove({ output: 'create_radar:guided_fuze'}) 

event.shaped(
  Item.of('4x vs_clockwork:ballast'),
  [
    'ABA',
    'BCB',
    'ABA'
  ],
  {
    A: 'create:brass_nugget',
    B: '#minecraft:planks',
    C: 'minecraft:cobblestone'
  }
)

event.shaped(
  Item.of('drivebywire:wire'),
  [
    'ABA'
  ],
  {
    A: 'computercraft:cable',
    B: 'tfmg:copper_cable'
  }
)

event.shaped(
  Item.of('drivebywire:backup_block'),
  [
    'BBB',
    'BAB',
    'BBB'
  ],
  {
    A: 'drivebywire:wire',
    B: 'tfmg:copper_cable'
  }
)

event.shaped(
  Item.of('drivebywire:controller_hub'),
  [
    'CC',
    'AB'
  ],
  {
    A: 'create:brass_casing',
    B: 'create:electron_tube',
    C: 'computercraft:cable',
  }
)

event.shaped(
  Item.of('drivebywire:tweaked_controller_hub'),
  [
    'CC',
    'AB'
  ],
  {
    A: 'create:brass_casing',
    B: 'create:precision_mechanism',
    C: 'computercraft:cable',
  }
)

event.shaped(
  Item.of('drivebywire:wire_cutter'),
  [
    ' B ',
    'A A'
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'create:iron_sheet'
  }
)

})