# Entities & Components
Orama structures gameplay logic around two main base classes: <xref:Orama.Scenes.Entities.Entity> and <xref:Orama.Scenes.Components.Component>, each playing a unique role in building logic.

## Components
**Components** are isolated building blocks for logic. Ideally, a component handles a single-responsiblity, such as rendering a mesh, playing an audio clip, or detecting collision. Components operate independently and don't know about other components.

```csharp
// Basic component that will log 'Hello, World!' when the scene starts.
public class MyComponent : Component
{
	/// <inheritdoc/>
	public override void Start()
	{
		base.Start();

		OramaConsole.Log("Hello, World!");
	}
}
```

## Entities
When you need logic that uses multiple components, **Entities** come into play. The job of an Entity is to orchestrate multiple components and tell them how to work together. A `Box` entity would contain a <xref:Orama.Rendering.Components.MeshRenderer> that draws a box primitive, a <xref:Orama.Physics.Components.RigidBody> that provides Physics, and a <xref:Orama.Physics.Components.Colliders.BoxCollider> that provides collision.

```csharp
// Basic Entity that acts as a static box with collision.
public class Box : Entity
{
	[ImplicitComponent]
	public MeshRenderer Renderer { get; }

	[ImplicitComponent]
	public RigidBody RigidBody { get; }

	[ImplicitComponent]	
	public BoxCollider Collider { get; }

	/// <inheritdoc/>
	public override void Start()
	{
		base.Start();

		// Setup Box Physics
		RigidBody.IsStatic = true;

		// Setup Box Mesh
		Mesh? mesh = Application.ResourceProvider.GetResource<Mesh>("Assets/Box.fbx");
		Renderer.Mesh = mesh;
	}
}
```