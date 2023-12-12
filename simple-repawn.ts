// This code creates a component that will teleport a player to a spawn point when they enter a trigger

import * as hz from "@early_access_api/v1";

type Props = {
  spawnPoint: hz.SpawnPointGizmo;
};

class SimpleRespawn extends hz.Component<Props> {
  static propsDefinition: hz.PropsDefinition<hz.ComponentProps> = {
    // the spawn point to teleport the player to
    spawnPoint: { type: hz.PropTypes.Entity },
  };

  start() {
    // Connect the code block event to the function
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      this.onPlayerEnterTrigger.bind(this)
    );
  }

  onPlayerEnterTrigger(player: hz.Player) {
    // teleport the player to the spawn point
    this.props.spawnPoint.as(hz.SpawnPointGizmo).teleportPlayer(player);
  }
}

// Registers the SimpleRespawn component with the engine
hz.Component.register(SimpleRespawn);
