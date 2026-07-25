# For Unity Developers
> [!WIP]
> This page is currently a **stub** and is missing important information, contributions can be made through the `Edit this page` button.

> [!WARNING]
> All benchmarks and comparisons are ran in-editor on `Unity 6000.0.62f1`.

If you're a developer experienced with [Unity](https://unity.com/) looking to try out Orama, there's a few concepts that you'll already understand and others that translate easily.

## Code-Only
In Unity you manage your project's assets, scenes, and code through the Unity Editor. Orama currently doesn't have a direct equivalent and users instead typically use their IDE of choice to edit a project. The transition from editor to code-only can be intimidating, but it's often simpler than it first appears.

## C# Implementation
Unlike Orama, Unity is written in C++ and exposes C# for front-end game logic. This design choice creates a ripple effect that changes how scripts are written and how they are managed. An example of this is Orama's heavy leveraging of modern C# 14 features, whereas Unity's API is restricted to C# 9. If your C# experience primarily comes from Unity, you may find it beneficial to explore these newer language concepts.

## MonoBehaviours & GameObjects
In Unity, game logic is contained in [MonoBehaviour](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html) scripts attached to [GameObjects](https://docs.unity3d.com/6000.5/Documentation/Manual/GameObjects.html). Orama has a very similar model using <xref:Orama.Scenes.Components.Component>s and <xref:Orama.Scenes.Entities.Entity>s; however, unlike Unity, an Entity does a lot more than simply act as a container for Components. Entities are responsible for **orchestrating logic** performed by attached Components.