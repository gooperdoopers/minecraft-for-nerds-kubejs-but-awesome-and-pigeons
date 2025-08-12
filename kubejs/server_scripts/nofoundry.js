ServerEvents.recipes(event => {

    //remove recipes
    event.remove({ output: 'crusty_chunks:firebox'})
    event.remove({ output: 'crusty_chunks:foundry'})
    
    // projectile recipes
    event.recipes.create.compacting(['crusty_chunks:small_projectile'], ['3x crusty_chunks:lead_nugget','crusty_chunks:small_projectile_foundry_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:medium_projectile'], ['6x crusty_chunks:lead_nugget','crusty_chunks:medium_projectile_foundry_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:large_projectile'], ['crusty_chunks:lead_ingot','crusty_chunks:large_projectile_foundry_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:extra_large_projectile'], ['3x crusty_chunks:lead_ingot','crusty_chunks:extra_large_projectile_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:huge_projectile'], ['6x crusty_chunks:lead_ingot','crusty_chunks:huge_projectile_foundry_template']).heated()

    // barrel recipes
    event.recipes.create.compacting(['crusty_chunks:small_unbored_barrel'], ['tfmg:steel_ingot','crusty_chunks:small_barrel_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:medium_unbored_barrel'], ['3x tfmg:steel_ingot','crusty_chunks:medium_barrel_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:large_unbored_barrel'], ['4x tfmg:steel_ingot','crusty_chunks:large_barrel_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:huge_unbored_barrel'], ['6x tfmg:steel_ingot','crusty_chunks:huge_barrel_foundry_template']).heated()

    event.recipes.create.compacting(['crusty_chunks:small_unbored_cannon_barrel'], ['8x tfmg:steel_ingot','crusty_chunks:small_cannon_foundry_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:medium_unbored_cannon_barrel'], ['tfmg:steel_block','crusty_chunks:medium_cannon_foundry_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:large_unbored_cannon_barrel'], ['tfmg:steel_block','crusty_chunks:large_cannon_foundry_template']).heated()
    event.recipes.create.compacting(['crusty_chunks:huge_unbored_cannon_barrel'], ['2x tfmg:steel_block','crusty_chunks:huge_cannon_foundry_template']).heated()

    // component recipes
    event.recipes.create.compacting(['crusty_chunks:steel_cylinder'], ['tfmg:steel_ingot','crusty_chunks:cylinderw_foundry_template']).heated()
})
