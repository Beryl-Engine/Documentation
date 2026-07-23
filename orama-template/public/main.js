export default {
  start: () => {
    // Very hacky way to append <hr>s underneath h1s. Someone who knows what they're doing should make this better!
    const h1s = document.querySelectorAll('article h1');
    
    h1s.forEach(h1 => {
      const hr = document.createElement('hr');
      h1.parentNode.insertBefore(hr, h1.nextSibling);
    });
  },

  configureHljs: (hljs) => {
    const slangGrammar = (hljs) => {
      const GENERIC_TYPES =
        'void bool int int2 int3 int4 uint uint2 uint3 uint4 ' +
        'float float2 float3 float4 float2x2 float3x3 float4x4 float3x4 float4x3 ' +
        'half half2 half3 half4 half2x2 half3x3 half4x4 ' +
        'double double2 double3 double4 ' +
        'matrix vector string char';

      const RESOURCE_TYPES =
        'Texture1D Texture1DArray Texture2D Texture2DArray Texture2DMS Texture2DMSArray ' +
        'Texture3D TextureCube TextureCubeArray ' +
        'RWTexture1D RWTexture1DArray RWTexture2D RWTexture2DArray RWTexture3D ' +
        'Buffer StructuredBuffer RWStructuredBuffer AppendStructuredBuffer ConsumeStructuredBuffer ' +
        'ByteAddressBuffer RWByteAddressBuffer ConstantBuffer ' +
        'SamplerState SamplerComparisonState RaytracingAccelerationStructure ' +
        'cbuffer tbuffer';

      const BUILTIN_FUNCS =
        'mul dot cross normalize length distance reflect refract transpose determinant inverse ' +
        'lerp saturate clamp step smoothstep sign frac floor ceil round trunc fmod ' +
        'sin cos tan asin acos atan atan2 sinh cosh tanh ' +
        'pow exp exp2 log log2 log10 sqrt rsqrt abs min max ' +
        'ddx ddy ddx_coarse ddy_coarse ddx_fine ddy_fine fwidth ' +
        'asfloat asint asuint asdouble ' +
        'static_cast reinterpret_cast ' +
        'AllMemoryBarrier AllMemoryBarrierWithGroupSync ' +
        'GroupMemoryBarrier GroupMemoryBarrierWithGroupSync ' +
        'InterlockedAdd InterlockedAnd InterlockedOr InterlockedXor ' +
        'InterlockedMin InterlockedMax InterlockedExchange InterlockedCompareExchange ' +
        'WaveGetLaneIndex WaveGetLaneCount WaveIsFirstLane ' +
        'WaveActiveSum WaveActiveMin WaveActiveMax WaveActiveAllEqual WaveActiveBallot ' +
        'printf assert';

      const KEYWORDS = {
        keyword:
          'struct class interface extension enum namespace module implementing ' +
          'import public private internal export ' +
          'layout attribute group register binding space set ' +
          'in out inout ref this base ' +
          'static const uniform varying groupshared precise inline extern __exported ' +
          'if else for while do switch case default break continue return discard ' +
          'try catch throws where associatedtype typedef typealias ' +
          'is as new operator ' +
          'true false null this',
        type: GENERIC_TYPES + ' ' + RESOURCE_TYPES,
        literal: 'true false null',
        built_in: BUILTIN_FUNCS
      };

      return {
        name: 'slang',
        aliases: ['slang'],
        keywords: KEYWORDS,
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: /#\s*[a-z]+/,
            end: /$/,
            keywords: {
              'meta-keyword':
                'define undef include if ifdef ifndef else elif endif pragma line error'
            },
            contains: [
              {
                begin: /\\\n/,
                relevance: 0
              }
            ]
          },
          {
            className: 'meta',
            begin: /\[\[/,
            end: /\]\]/
          },
          {
            className: 'meta',
            begin: /\[/,
            end: /\]/
          },
          {
            className: 'title.class',
            begin: /\b(struct|class|interface|extension)\s+/,
            end: /\s|{|:/,
            excludeBegin: true,
            excludeEnd: true,
            returnEnd: true
          },
          {
            className: 'title.function',
            begin: /\b[A-Za-z_]\w*(?=\s*\()/,
            relevance: 0
          },
          {
            className: 'symbol',
            begin: /:\s*[A-Za-z_]\w*/,
            relevance: 0
          }
        ]
      };
    };

    hljs.registerLanguage('slang', slangGrammar);
  }
};
