# Intro to Shaders
Shaders are special programs that define how an object is drawn on the screen. Unlike typical code, shaders run directly on the GPU and are therfore written using unique languages optimized for parallel graphics processing.

A typical shader runs on each vertex and or each pixel during rendering. It takes information in, such as a `Brightness` parameter, and uses that information to send data out, such as the final color of a pixel on the screen.

## Beryl Shaders
Beryl's shaders are written in the **[Slang](https://shader-slang.org/)** language alongside the Beryl Standard Shader Library. Slang is similar to High-Level Shader Language (HLSL) but with many added features to optimize the shader writing experience.

Beryl shaders are made up of functions marked as stages using Slang's **Shader** attribute.

```slang
// This is a fragment shader. Fragment shaders run once per pixel.
[Shader("fragment")]
float4 Fragment(VertexOutput i) : SV_Target
{
    return float4(1, 1, 1, 1); // This will color the pixel as white
}
```

Beryl supports the following function stages:
- `vertex` runs once per <xref:Beryl.Rendering.Resources.Mesh> vertex.
- `fragment` runs once per rendered pixel.
- `compute`

## Shader Attributes
Aswell as defining stage functions, Shaders can define asset-level metadata using attributes placed inside a `SHADER_ATTRIBUTES()` macro block. This metadata is used to determine when and how to render objects that use the Shader.

> [!NOTE]
> To use Shader Attributes, your shader **must** include `#include "Beryl/Preprocessor.slang"`.

```slang
#include "Beryl/Preprocessor.slang"

SHADER_ATTRIBUTES(
    [ShaderPass("Opaque")]
    [CullMode("None")]
    [DepthTest("None")]
)
```

This defines a shader that renders during the 'Opaque' pass, without [Backface Culling](https://en.wikipedia.org/wiki/Back-face_culling), and without testing against the Depth Buffer.

## Shader Parameters
Shaders can also define parameters that can be set from a <xref:Beryl.Rendering.Resources.Material> by writing fields inside a `SHADER_PARAMETERS()` macro block.

> [!NOTE]
> To use Shader Parameters, your shader **must** include `#include "Beryl/Preprocessor.slang"`.

```slang
#include "Beryl/Preprocessor.slang"

SHADER_PARAMETERS(
    [DefaultFloat3(1, 0.1, 0.1)]
    float3 Color;
)
```

This defines a `Color` parameter that can be read from with `Parameters.Color`. It defaults to the value defined in the `[DefaultFloat3]` attribute or can be set to a new value with `Material.SetProperty("Color", new Vector3(0.5, 0.5, 1))`.