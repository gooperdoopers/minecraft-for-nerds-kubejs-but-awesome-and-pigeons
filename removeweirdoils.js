ServerEvents.recipes(event => {

    event.remove({ output: 'createloveandwar:steel_ingot'})
    event.remove({ output: 'minecraft:gunpowder', input: 'minecraft:bone_meal' })
    event.remove({ output: 'createloveandwar:thermostat'})
    event.remove({ output: Fluid.of('createloveandwar:diesel')})
    event.remove({ output: Fluid.of('createloveandwar:bitumen_fluid')})
    event.remove({ output: Fluid.of('createloveandwar:crude_oil')})
    event.remove({ output: Fluid.of('createloveandwar:kerosene')})
    event.remove({ output: Fluid.of('createloveandwar:ethylene')})
    event.remove({ output: Fluid.of('createloveandwar:polymer')})
    event.remove({ output: Fluid.of('createloveandwar:polymer')})
    event.recipes.create.mixing([Fluid.of('createloveandwar:polymer',250),'createloveandwar:catalyst'], ['createloveandwar:catalyst',Fluid.of('minecraft:water',500), Fluid.of('tfmg:ethylene',500),])

    event.replaceInput({input: 'tfmg:sulfur_dust'}, 'tfmg:sulfur_dust', 'createloveandwar:sulphur')
    event.replaceInput({input: 'createloveandwar:steel_ingot'}, 'createloveandwar:steel_ingot', 'tfmg:steel_ingot')
})