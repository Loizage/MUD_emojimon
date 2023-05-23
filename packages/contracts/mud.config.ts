import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    // TODO
  },
  tables: {
    Player: "bool",
    Movable: "bool",
    Position: {
      dataStruct: false,
      schema: {
        x: "uint32",
        y: "uint32",
      },
    },
    },
});
