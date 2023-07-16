export function setup(context: Modding.ModContext) {
    context.onModsLoaded(() => {
        const adventureId = 'melvorF:Adventure';
        const adventure = game.gamemodes.getObjectByID(adventureId);

        adventure.hitpointMultiplier = 10;

        game.gamemodes.registeredObjects.set(adventureId, adventure);
    });
}
