import { StreamerItemTypes } from "../definitions/ItemTypes";

samp.registerEvent("OnDynamicObjectMoved", "i");
export const OnDynamicObjectMoved = (
  fn: (objectid: number) => number
): void => {
  samp.on("OnDynamicObjectMoved", fn);
};

samp.registerEvent("OnPlayerEditDynamicObject", "iiiiiiiii");
export const OnPlayerEditDynamicObject = (
  fn: (
    playerid: number,
    objectid: number,
    response: number,
    x: number,
    y: number,
    z: number,
    rx: number,
    ry: number,
    rz: number
  ) => number
): void => {
  samp.on("OnPlayerEditDynamicObject", fn);
};

samp.registerEvent("OnPlayerSelectDynamicObject", "iiiiii");
export const OnPlayerSelectDynamicObject = (
  fn: (
    playerid: number,
    objectid: number,
    modelid: number,
    x: number,
    y: number,
    z: number
  ) => number
): void => {
  samp.on("OnPlayerSelectDynamicObject", fn);
};

samp.registerEvent("OnPlayerShootDynamicObject", "iiiiii");
export const OnPlayerShootDynamicObject = (
  fn: (
    playerid: number,
    weaponid: number,
    objectid: number,
    x: number,
    y: number,
    z: number
  ) => number
): void => {
  samp.on("OnPlayerShootDynamicObject", fn);
};

samp.registerEvent("OnPlayerPickUpDynamicPickup", "ii");
export const OnPlayerPickUpDynamicPickup = (
  fn: (playerid: number, pickupid: number) => number
): void => {
  samp.on("OnPlayerPickUpDynamicPickup", fn);
};

samp.registerEvent("OnPlayerEnterDynamicCP", "ii");
export const OnPlayerEnterDynamicCP = (
  fn: (playerid: number, checkpointid: number) => number
): void => {
  samp.on("OnPlayerEnterDynamicCP", fn);
};

samp.registerEvent("OnPlayerLeaveDynamicCP", "ii");
export const OnPlayerLeaveDynamicCP = (
  fn: (playerid: number, checkpointid: number) => number
): void => {
  samp.on("OnPlayerLeaveDynamicCP", fn);
};

samp.registerEvent("OnPlayerEnterDynamicRaceCP", "ii");
export const OnPlayerEnterDynamicRaceCP = (
  fn: (playerid: number, checkpointid: number) => number
): void => {
  samp.on("OnPlayerEnterDynamicRaceCP", fn);
};

samp.registerEvent("OnPlayerLeaveDynamicRaceCP", "ii");
export const OnPlayerLeaveDynamicRaceCP = (
  fn: (playerid: number, checkpointid: number) => number
): void => {
  samp.on("OnPlayerLeaveDynamicRaceCP", fn);
};

samp.registerEvent("OnPlayerEnterDynamicArea", "ii");
export const OnPlayerEnterDynamicArea = (
  fn: (playerid: number, areaid: number) => number
): void => {
  samp.on("OnPlayerEnterDynamicArea", fn);
};

samp.registerEvent("OnPlayerLeaveDynamicArea", "ii");
export const OnPlayerLeaveDynamicArea = (
  fn: (playerid: number, areaid: number) => number
): void => {
  samp.on("OnPlayerLeaveDynamicArea", fn);
};

samp.registerEvent("OnPlayerGiveDamageDynamicActor", "iiiii");
export const OnPlayerGiveDamageDynamicActor = (
  fn: (
    playerid: number,
    actorid: number,
    amount: number,
    weaponid: number,
    bodypart: number
  ) => number
): void => {
  samp.on("OnPlayerGiveDamageDynamicActor", fn);
};

samp.registerEvent("OnDynamicActorStreamIn", "ii");
export const OnDynamicActorStreamIn = (
  fn: (actorid: number, forplayerid: number) => number
): void => {
  samp.on("OnDynamicActorStreamIn", fn);
};

samp.registerEvent("OnDynamicActorStreamOut", "ii");
export const OnDynamicActorStreamOut = (
  fn: (actorid: number, forplayerid: number) => number
): void => {
  samp.on("OnDynamicActorStreamOut", fn);
};

samp.registerEvent("Streamer_OnItemStreamIn", "iii");
export const Streamer_OnItemStreamIn = (
  fn: (type: StreamerItemTypes, id: number, forplayerid: number) => number
): void => {
  samp.on("Streamer_OnItemStreamIn", fn);
};

samp.registerEvent("Streamer_OnItemStreamOut", "iii");
export const Streamer_OnItemStreamOut = (
  fn: (type: StreamerItemTypes, id: number, forplayerid: number) => number
): void => {
  samp.on("Streamer_OnItemStreamOut", fn);
};

samp.registerEvent("Streamer_OnPluginError", "s");
export const Streamer_OnPluginError = (fn: (error: string) => number): void => {
  samp.on("Streamer_OnPluginError", fn);
};
