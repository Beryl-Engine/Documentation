> [!WIP]
> This page is actively being worked on. If you have a question you'd think would fit here, [Open an Issue](https://github.com/Orama-Engine/Documentation/issues)!

# Frequently Asked Questions (FAQ)

## Do I have to pay to use Orama?
Short Answer—No. Long Answer:
Orama is **F**ree and **O**pen-**S**ource **S**oftware (**FOSS**) under the [MIT](https://github.com/Orama-Engine/Orama/blob/main/LICENSE) License. You can use, modify, redistribute, or build upon it however you like without worrying about any fees.

## Why not Unity, Unreal, Godot, etc?
Orama was made to fill a specific niche that existing engines could only partially provide.

- **C# Scripting in a C# Engine.** Orama is both written in C# and uses C# as its primary public-facing scripting language. This has a great number of benefits: full* access to engine internals, C#-first conventions, compatiblity with modern C# 14 and .NET 10 features, no messy interop layer, and no outdated embedded .NET runtime.

- **Free and Open-Source Forever.** Users own everything they create with absolutely no cost. Plus, you can look through Orama's source code, report bugs, suggest features, or submit changes through the engine's [GitHub](https://github.com/Orama-Engine/Orama).

- **Plug and Play Modules.** Orama builds its subsystems around **Modules**, isolated systems like `Orama.Physics` or `Orama.Rendering` that hook into the engine's lifecycle. Modules are entirely optional and can be arbitrarily turned on or off. Does your project not need physics? Disable the `Orama.Physics` module to avoid any unnecessary overhead.

- **WYSIWYG Asset Pipeline.** In many engines, there's a project build step that turns raw assets like `.png` and `.obj` into unreadable, hard to parse, hard to create, binary equivalents. Orama drops this in favour for a KISS approach of simply storing raw assets in the game files and using <xref:Orama.Common.Resources.DefaultProvider.ResourceLoader%601> classes to define how to load them into memory. This allows for advanced asset use-cases, such as <xref:Orama.Common.Resources.DefaultProvider.ResourceLoader%601> implementations that load assets from a third-party game. *Don't like that approach? You can easily write your own asset pipeline by inheriting from <xref:Orama.Common.Resources.IResourceProvider>.*

- **Code Only.** Whilst the Orama editor is actively being worked on, Orama aims to keep any future engine-editor divide clear so you never have to depend on an editor to make full games. The editor will be a tool, not a necessity.

- **First-Class Virtual Reality Support.** One of the perks of being a modern engine is having the ability to integrate support for new technologies from the start, Orama took advantage of this with Virtual Reality support. VR has been made to feel like a core part of the engine rather than a hacked-together plugin.