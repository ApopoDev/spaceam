"use client";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

// PNG per le texture personalizzate
const flavorTextures = {
  lemonLime: "/labels/lemon-lime.png",
  grape: "/labels/grape.png",
  blackCherry: "/labels/cherry.png",
  strawberryLemonade: "/labels/strawberry.png",
  watermelon: "/labels/watermelon.png",
  barbiz: "/object3d/barbizBlender.png",
};

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "barbiz",
  scale = 0.5,
  ...props
}: SodaCanProps) {
  // Carica il modello barrel_1.gltf
  const { nodes, materials } = useGLTF("/object3d/barrel_1.gltf");

  // Aggiungi la texture dinamica
  const label = useTexture(flavorTextures[flavor]);
  label.flipY = false; // Assicura che la texture venga applicata correttamente

  // Verifica se il nodo è un oggetto Mesh
  const barrelMesh = nodes.barrel_1 as THREE.Mesh;

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, 0, Math.PI]}>
      <mesh
        castShadow
        receiveShadow
        geometry={barrelMesh.geometry} // Usa la geometria del nodo Mesh
        material={materials.barrel_1}
      >
        {/* Applica la texture al materiale */}
        <meshStandardMaterial
          roughness={0.3} // Stessa roughness dal file GLTF
          metalness={0.7} // Stessa metalness dal file GLTF
          map={label} // La texture dinamica
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/object3d/barrel_1.gltf");
