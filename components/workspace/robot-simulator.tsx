'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid, Environment } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface RobotSimulatorProps {
  robotType: string
  wheelSpeed: number
  armRotation: number
  droneHeight: number
  executing: boolean
}

function RobotScene({ robotType, wheelSpeed, armRotation, droneHeight, executing }: RobotSimulatorProps) {
  const robotRef = useRef<THREE.Group>(null)
  const leftWheelRef = useRef<THREE.Mesh>(null)
  const rightWheelRef = useRef<THREE.Mesh>(null)
  const armRef = useRef<THREE.Mesh>(null)
  const droneRef = useRef<THREE.Group>(null)

  useEffect(() => {
    // Animate wheels
    if (wheelSpeed !== 0 && robotRef.current && (robotType === 'wheeled' || robotType === 'humanoid')) {
      if (leftWheelRef.current) {
        leftWheelRef.current.rotation.x += wheelSpeed * 0.1
      }
      if (rightWheelRef.current) {
        rightWheelRef.current.rotation.x += wheelSpeed * 0.1
      }
    }

    // Animate arm
    if (armRef.current && robotType === 'arm') {
      armRef.current.rotation.z = (armRotation * Math.PI) / 180
    }

    // Animate drone
    if (droneRef.current && robotType === 'drone') {
      droneRef.current.position.y = droneHeight
    }

    // Move robot
    if (robotRef.current && robotType === 'wheeled') {
      robotRef.current.position.x += wheelSpeed * 0.005
    }
  })

  return (
    <>
      <Environment preset="warehouse" />
      <Grid args={[10, 10]} cellSize={0.5} cellColor="#6f7280" sectionSize={5} sectionColor="#ef4444" fadeDistance={50} fadeStrength={1} infiniteGrid />

      {/* Wheeled Robot */}
      {robotType === 'wheeled' && (
        <group ref={robotRef} position={[0, 0, 0]}>
          {/* Body */}
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.3, 0.2, 0.4]} />
            <meshStandardMaterial color={executing ? '#00d4ff' : '#1e1b4b'} emissive={executing ? '#0099cc' : '#000000'} />
          </mesh>

          {/* Left Wheel */}
          <mesh ref={leftWheelRef} position={[-0.2, 0.1, -0.15]}>
            <cylinderGeometry args={[0.1, 0.1, 0.08, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#2dd4bf" />
          </mesh>

          {/* Right Wheel */}
          <mesh ref={rightWheelRef} position={[0.2, 0.1, -0.15]}>
            <cylinderGeometry args={[0.1, 0.1, 0.08, 32]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#2dd4bf" />
          </mesh>

          {/* Front Caster */}
          <mesh position={[0, 0.05, 0.15]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#2dd4bf" />
          </mesh>
        </group>
      )}

      {/* Robotic Arm */}
      {robotType === 'arm' && (
        <group position={[0, 0, 0]}>
          {/* Base */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
            <meshStandardMaterial color={executing ? '#00d4ff' : '#1e1b4b'} emissive={executing ? '#0099cc' : '#000000'} />
          </mesh>

          {/* Arm Assembly */}
          <group ref={armRef} position={[0, 0.15, 0]}>
            {/* Link 1 */}
            <mesh position={[0.2, 0, 0]}>
              <boxGeometry args={[0.4, 0.08, 0.08]} />
              <meshStandardMaterial color="#2dd4bf" />
            </mesh>

            {/* Link 2 */}
            <mesh position={[0.4, 0.1, 0]}>
              <boxGeometry args={[0.3, 0.06, 0.06]} />
              <meshStandardMaterial color="#06b6d4" />
            </mesh>

            {/* End Effector */}
            <mesh position={[0.55, 0.15, 0]}>
              <sphereGeometry args={[0.06, 16, 16]} />
              <meshStandardMaterial color="#0891b2" emissive={executing ? '#00d4ff' : '#000000'} />
            </mesh>
          </group>
        </group>
      )}

      {/* Drone */}
      {robotType === 'drone' && (
        <group ref={droneRef} position={[0, 2, 0]}>
          {/* Body */}
          <mesh>
            <boxGeometry args={[0.2, 0.1, 0.2]} />
            <meshStandardMaterial color={executing ? '#00d4ff' : '#1e1b4b'} emissive={executing ? '#0099cc' : '#000000'} />
          </mesh>

          {/* Propellers */}
          {[[-0.15, 0.05, -0.15], [0.15, 0.05, -0.15], [-0.15, 0.05, 0.15], [0.15, 0.05, 0.15]].map((pos, i) => (
            <group key={i} position={pos as [number, number, number]}>
              <mesh rotation={[0, 0, droneHeight * 0.1 + i]} position={[0, 0, 0]}>
                <boxGeometry args={[0.15, 0.02, 0.02]} />
                <meshStandardMaterial color="#2dd4bf" />
              </mesh>
            </group>
          ))}

          {/* Camera */}
          <mesh position={[0, -0.08, 0]}>
            <boxGeometry args={[0.08, 0.04, 0.08]} />
            <meshStandardMaterial color="#ec4899" />
          </mesh>
        </group>
      )}

      {/* Humanoid */}
      {robotType === 'humanoid' && (
        <group ref={robotRef} position={[0, 0, 0]}>
          {/* Torso */}
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.2, 0.4, 0.15]} />
            <meshStandardMaterial color={executing ? '#00d4ff' : '#1e1b4b'} emissive={executing ? '#0099cc' : '#000000'} />
          </mesh>

          {/* Head */}
          <mesh position={[0, 0.7, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#2dd4bf" />
          </mesh>

          {/* Left Leg */}
          <mesh position={[-0.1, 0.15, 0]}>
            <boxGeometry args={[0.08, 0.3, 0.08]} />
            <meshStandardMaterial color="#06b6d4" />
          </mesh>

          {/* Right Leg */}
          <mesh position={[0.1, 0.15, 0]}>
            <boxGeometry args={[0.08, 0.3, 0.08]} />
            <meshStandardMaterial color="#06b6d4" />
          </mesh>

          {/* Left Arm */}
          <mesh position={[-0.15, 0.5, 0]}>
            <boxGeometry args={[0.06, 0.3, 0.06]} />
            <meshStandardMaterial color="#2dd4bf" />
          </mesh>

          {/* Right Arm */}
          <mesh position={[0.15, 0.5, 0]}>
            <boxGeometry args={[0.06, 0.3, 0.06]} />
            <meshStandardMaterial color="#2dd4bf" />
          </mesh>
        </group>
      )}
    </>
  )
}

export function RobotSimulator({ robotType, wheelSpeed, armRotation, droneHeight, executing }: RobotSimulatorProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950">
      <Canvas camera={{ position: [0, 1, 2.5], fov: 50 }}>
        <RobotScene robotType={robotType} wheelSpeed={wheelSpeed} armRotation={armRotation} droneHeight={droneHeight} executing={executing} />
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} castShadow />
      </Canvas>
    </div>
  )
}
