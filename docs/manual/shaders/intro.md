# Intro to Shaders
Shaders are special programs that define how an object is drawn on the screen. Unlike typical code, shaders run directly on the GPU and are therfore written using unique languages optimized for parallel graphics processing.

A typical shader runs on each vertex and each pixel during rendering. It takes information in, such as a `Brightness` parameter, and uses that information to send data out, such as the final color of a pixel on the screen.

## Orama Shaders
Orama's shaders are written in the **[Slang](https://shader-slang.org/)** language alongside the Orama Standard Shader Library. Slang is similar to High-Level Shader Language (HLSL) but with many added features to optimize the shader writing experience.

Orama shaders are made up of functions marked as stages using the **Shader** attribute.

```slang
// This is a fragment shader. Fragment shaders run once per pixel.
[Shader("fragment")]
float4 Fragment(VertexOutput i) : SV_Target
{
    return float4(1, 1, 1, 1); // This will color the pixel as white
}
```

Slang supports the following passes by default:
- `vertex`
- `fragment`
- `compute`
- `geometry`
- `hull`
- `domain`
- `raygeneration`