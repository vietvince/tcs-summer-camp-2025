---
title: Intro
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

Welcome to **VR Game Design with Unity and Meta Quest**! Put on your headset and get ready for an immersive VR adventure.

In this tutorial, you’ll build a complete VR game from scratch. You’ll learn how to grab and throw basketballs through a hoop, fire bullets at target boards, and navigate a simple maze—all in one cohesive experience. By following each step, you’ll gain hands-on practice with Unity’s XR Interaction Toolkit, physics, scoring systems, and VR hand animations.

## How This Tutorial Is Structured 🎮

Below are the 14 sections you’ll work through in order. Every student follows the same steps to arrive at a fully playable VR scene:

1. **Create a New Unity Project**  
   - Open Unity Hub and start a new 3D (URP) project named “VR Playground”  
   - Ensure you have a clean workspace before adding VR-specific tools.

2. **Install “Input System” & “XR Interaction Toolkit” Packages**  
   - Use Package Manager to install the Input System for VR controller input.  
   - Install XR Interaction Toolkit to enable grabbing, teleportation, and ray interactions.  
   - Import default input actions when prompted.

3. **Enable OpenXR**  
   - In Project Settings, activate XR Plug-in Management.  
   - Check OpenXR under Standalone (and Android if targeting Quest).  
   - Enable relevant controller profiles (Oculus Touch, Vive, Index) for your headset.

4. **Set Up the VR “Player Rig”**  
   - Delete the default Main Camera and add an “XR Origin (Action-based).”  
   - Confirm the Main Camera has a Tracked Pose Driver.  
   - Verify each controller has an XR Controller (Action-based) and XR Ray Interactor.

5. **Build the Floor & Maze Walls**  
   - Create a Plane scaled to 10×10 as the floor.  
   - Place four Cubes (Wall_1 through Wall_4) to form a simple U-shaped maze.  
   - Apply materials and check that each wall has a Box Collider.

6. **Construct the Basketball Hoop**  
   - Create a Cube for the Backboard and position it above the floor.  
   - Add a Cylinder as the visible rim, parented to the Backboard.  
   - Add an invisible Box Collider (Is Trigger) under the rim to detect baskets.

7. **Create Three Basketball Prefabs & Tag Them**  
   - Make three Sphere GameObjects, scale them to 0.25 m diameter, and add Rigidbody + XR Grab Interactable.  
   - Freeze X/Z rotations so they roll naturally.  
   - Tag each prefab “Basketball1,” “Basketball2,” and “Basketball3,” then store them in Assets/Prefabs.

8. **Handle Out-of-Bounds Respawns (`RespawnItems.cs`)**  
   - Create a DeathZone collider under the floor (Box Collider at y = –2).  
   - Place empty Transforms (BBStart1/BBStart2/BBStart3, PistolStart) at each item’s start position.  
   - Write and attach `RespawnItems.cs` so falling items teleport back and reset velocity.

9. **Add Basketball Scoring (`BBScore.cs`)**  
   - Create a floating TextMeshPro UI labeled “Score: 0” for basketball points.  
   - Write `BBScore.cs` to detect when any “Basketball#” enters the HoopTrigger.  
   - Attach the script to the trigger and assign the UI text reference.

10. **Create the Pistol & Bullet Firing (`FireBulletOnActivate.cs`)**  
    - Build a simple Cube pistol, add Rigidbody, XR Grab Interactable, and tag it “Pistol.”  
    - Create a small Sphere bullet prefab with Rigidbody and tag “bullet.”  
    - Add a child “SpawnPoint” at the muzzle and write `FireBulletOnActivate.cs` to spawn and launch bullets.

11. **Create Three Target Boards & Shooting Score UI**  
    - Place three Cube boards with different colors (red, blue, green) and assign positions in the maze.  
    - Create a second floating TextMeshPro UI for shooting points.  
    - Write `ShootingPoint1.cs`, `ShootingPoint5.cs`, and `ShootingPoint10.cs` to update score and destroy bullets.

12. **Add Maze-Exit Teleporter (`MazeTeleporter.cs`)**  
    - Create a Box Collider trigger at the end of the maze.  
    - Tag the Main Camera as “Player.”  
    - Write `MazeTeleporter.cs` so touching the trigger reloads the scene, resetting scores and items.

13. **Animate VR Hands (`AnimateHandOnInput.cs`)**  
    - Import or use built-in hand models with Animator components that have “Trigger” and “Grip” floats.  
    - Write `AnimateHandOnInput.cs` to read controller pinch/grip values and set Animator parameters each frame.  
    - Assign input actions (LeftHand/RightHand pinch and grip) and Animator reference for both hands.

14. **Final Checklist & Play-Testing**  
    - Verify each GameObject, component, tag, and script is configured as described.  
    - Press Play, put on your VR headset, and test:  
      - Teleportation around the floor.  
      - Hand animations when you squeeze trigger/grip.  
      - Grabbing and throwing basketballs, scoring with hoops.  
      - Picking up the pistol, shooting targets, and updating shooting score.  
      - Falling items respawn correctly.  
      - Reaching the maze exit reloads the scene.

See each section’s detailed instructions to complete your VR Basketball & Shooting Maze game. Have fun building and playing!  
