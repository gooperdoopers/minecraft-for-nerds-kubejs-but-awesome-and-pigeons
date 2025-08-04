ServerEvents.recipes(event => {
event.recipes.create.mixing(Item.of('crusty_chunks:propellent', 4), ['crusty_chunks:lead_dust', 'minecraft:gunpowder'])
event.remove({ not: { type: 'create:mixing' }, output: 'crusty_chunks:propellent' })
})