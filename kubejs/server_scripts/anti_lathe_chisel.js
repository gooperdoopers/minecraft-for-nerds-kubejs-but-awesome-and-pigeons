ServerEvents.recipes(event => {

    //remove recipes
    event.remove({ output: 'crusty_chunks:small_hollow_point_bullet'})
    event.remove({ output: 'crusty_chunks:lathe'})

    // hollow point recipes
    event.recipes.create.deploying(['crusty_chunks:small_hollow_point_bullet'], ['crusty_chunks:smallbullet', 'crusty_chunks:chisel']).keepHeldItem()

    //projectiles
    event.recipes.create.deploying(['crusty_chunks:hollowed_large_projectile'], ['crusty_chunks:large_projectile', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:hollowed_extra_large_projectile'], ['crusty_chunks:extra_large_projectile', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:hollowed_huge_projectile'], ['crusty_chunks:huge_projectile', 'crusty_chunks:chisel']).keepHeldItem()

    //barrels
    event.recipes.create.deploying(['crusty_chunks:small_bored_barrel'], ['crusty_chunks:small_unbored_barrel', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:medium_bored_barrel'], ['crusty_chunks:medium_unbored_barrel', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:large_bored_barrel'], ['crusty_chunks:large_unbored_barrel', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:huge_bored_barrel'], ['crusty_chunks:huge_unbored_barrel', 'crusty_chunks:chisel']).keepHeldItem()

    //components, tube etc
    event.recipes.create.deploying(['crusty_chunks:steel_tube'], ['crusty_chunks:steel_cylinder', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:bored_component'], ['crusty_chunks:cast_component', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:brass_fitting'], ['create:brass_ingot', 'crusty_chunks:chisel']).keepHeldItem()

    //cannon barrels
    event.recipes.create.deploying(['crusty_chunks:battle_cannon_barrel'], ['crusty_chunks:large_unbored_cannon_barrel', 'crusty_chunks:chisel']).keepHeldItem()
    event.recipes.create.deploying(['crusty_chunks:artillery_barrel'], ['crusty_chunks:huge_unbored_cannon_barrel', 'crusty_chunks:chisel']).keepHeldItem()

    })