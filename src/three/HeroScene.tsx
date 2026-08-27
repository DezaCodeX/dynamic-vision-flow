import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DustField({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const { positions, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      sizes[i] = Math.random() * 0.045 + 0.008;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((state, delta) => {
    const pts = ref.current;
    if (!pts) return;
    const dt = Math.min(delta, 0.05);
    pts.rotation.y += dt * 0.028;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += Math.sin(t * 0.25 + i) * 0.0012 + dt * 0.06;
      if (arr[i * 3 + 1] > 7) arr[i * 3 + 1] = -7;
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        sizeAttenuation
        color="#d9bd7f"
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function StarRings() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    g.rotation.z += dt * 0.05;
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.18;
  });

  return (
    <group ref={group} position={[0, 0, -3]}>
      {[3.2, 4.4, 5.8].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2.4, 0, (i * Math.PI) / 5]}>
          <torusGeometry args={[r, 0.005, 8, 220]} />
          <meshBasicMaterial color="#b89b62" transparent opacity={0.28 - i * 0.06} />
        </mesh>
      ))}
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#b89b62" wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame((_, delta) => {
    const k = 1 - Math.exp(-2.2 * Math.min(delta, 0.05));
    camera.position.x += (pointer.x * 1.1 - camera.position.x) * k;
    camera.position.y += (pointer.y * 0.7 - camera.position.y) * k;
    camera.lookAt(0, 0, -3);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      className="pointer-events-none"
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 9], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <DustField />
      <StarRings />
      <CameraRig />
    </Canvas>
  );
}
