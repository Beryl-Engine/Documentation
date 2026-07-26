# Key Concepts
The job of a game engine is to provide systems to build and run games. Whilst engine architecture differs, most modern engines organize gameplay logic around a **Scene system**.

Beryl uses a **Layers of Orchestration** model to drive it's scenes. A `Scene` orchestrates `Entity` objects, and each `Entity` orchestrates it's attached `Component` objects. This layering hierarchy drives how logic is written.

## Scenes
Scenes are the highest level logic container in your game. The job of a scene is to manage a hierarchy of **Entities**, allowing them to work together to form a single playable level.

## Entities
Entities are individual objects that live in a scene, such as a `Player`, `Prop`, `Light`, or `Trigger`. Whilst an Entity can provide logic by itself, they typically orchestrate up to several **Components** to provide their final functionality.

## Components
Components are reusable, isolated building blocks of logic. They don't do much on their own, but entities can use them to drive more advanced logic.