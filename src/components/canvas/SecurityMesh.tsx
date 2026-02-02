"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { useTheme } from "@/components/providers/ThemeProvider";
import * as THREE from "three";

function ParticleNetwork(props: any) {
    const ref = useRef<THREE.Points>(null!);

    // Generate random points on a sphere
    const particles = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = 4 + Math.random() * 2; // Radius between 4 and 6
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#0861F2"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

function CyberShield() {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state, delta) => {
        meshRef.current.rotation.y += delta / 10;
        meshRef.current.rotation.z += delta / 15;
    })

    return (
        <mesh ref={meshRef} scale={[3.5, 3.5, 3.5]}>
            <icosahedronGeometry args={[1, 2]} />
            <meshBasicMaterial
                color="#ffffff"
                wireframe
                transparent
                opacity={0.1}
            />
        </mesh>
    )
}

export default function SecurityMesh() {
    const { theme } = useTheme();
    const fogColor = theme === "light" ? "#FFFFFF" : "#020617";

    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Handle high-DPI screens
            >
                <fog attach="fog" args={[fogColor, 5, 20]} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <ParticleNetwork />
                    <CyberShield />
                </Float>
            </Canvas>
        </div>
    );
}
