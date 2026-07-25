> [!WIP]
> This page is actively being worked on. If you have a question you'd think would fit here, [Open an Issue](https://github.com/Orama-Engine/Documentation/issues)!

# Frequently Asked Questions (FAQ)

## Do I have to pay to use Orama?
Short Answer—No. Long Answer:
Orama is **F**ree and **O**pen-**S**ource **S**oftware (**FOSS**) under the [MIT](https://github.com/Orama-Engine/Orama/blob/main/LICENSE) License. You can use, modify, redistribute, or build upon it however you like without worrying about any fees.

## Why was Orama made?
Orama was made to fill a specific niche that existing engines could only partially provide.

- **C# Scripting in a C# Engine.** Orama is both written in C# and uses C# as its primary public-facing scripting language. This has a great number of benefits: full* access to engine internals, C#-first conventions, compatiblity with modern C# 14 and .NET 10 features, no messy interop layer, and no outdated embedded .NET runtime.

- **Free and Open-Source Forever.** Users own everything they create with absolutely no cost. Plus, you can look through Orama's source code, report bugs, suggest features, or submit changes through the engine's [GitHub](https://github.com/Orama-Engine/Orama).

- **Plug and Play Modules.** Orama builds its subsystems around **Modules**, isolated systems like `Orama.Physics` or `Orama.Rendering` that hook into the engine's lifecycle. Modules are entirely optional and can be arbitrarily turned on or off. Does your project not need physics? Disable the `Orama.Physics` module to avoid 100% of any unnecessary overhead.

- **Code Only.** Whilst the Orama editor is actively being worked on, Orama aims to keep any future engine-editor divide clear so you never have to depend on an editor to make full games. The editor will be a tool, not a necessity.

## Why not C++?
C++ has been the dominant language in engine creation for decades, so why is Orama using C#? This is a complicated topic as there's many factors that influenced Orama to go with C# but it can generally be summed up into 4 main points.

1. **Language Features.** C# 14 has many amazing features that Orama utilizes heavily. We use [**Extension Members**](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods) to trivially decouple code, [**Attributes and Reflection**](https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/reflection-and-attributes/) to minimize boilerplate, and [**Roslyn**](https://github.com/dotnet/roslyn) to allow scripted compilation, analyzers, and iteration speeds a fully compiled language like C++ couldn't reach.

2. **Discarding the Engine/Scripting Divide.** Because C++ isn't ideal for game scripting, C++ engines typically expose a friendlier language for users to write gameplay logic with. C# is perfect for this, but integrating it from C++ introduces a whole new beast to manage: **Interop**. Interop layers easily become tangled and struggle to find a balance between the native language and the 'front-end' language. It's easy for a bad interop layer to trap developers into writing C++-styled C# whilst also hiding powerful lower-level engine capabilities that never made it across the boundary. Orama solves all this by simply writing the engine in the same language used for gameplay logic.

3. **Ecosystem.** Using C# comes with the perks of the amazing .NET ecosystem. Not only can the engine easily depend on [NuGet](https://www.nuget.org/) packages, games can too, opening up projects to every compatible library.

4. **Safety.** TODO.