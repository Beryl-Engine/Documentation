# Key Concepts
The job of a game engine is to provide systems to build and run games. Whilst engine architecture differs, most modern engines organize gameplay logic around a **Scene system**.

Orama uses a **Layers of Orchestration** model to drive it's scenes. A `Scene` orchestrates `Entity` objects, and each `Entity` orchestrates it's attached `Component` objects. This layering hierarchy drives how logic is written and functions.

## Scenes
Scenes are the highest level logic container in your game. The job of a scene is to manage a hierarchy of **Entities**, allowing them to work together to form a single playable level.

## Entities
Entities are individual objects that live in a scene, such as a `Player`, `Prop`, `Light`, or `Trigger`. An Entity coordinates one or more **Component** objects to implement its behaviour. 