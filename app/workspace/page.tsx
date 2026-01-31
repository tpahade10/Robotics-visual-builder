'use client'

import { useState, useEffect, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { BlockEditor, CodeBlock } from '@/components/workspace/block-editor'
import { RobotConfigPanel, RobotConfig } from '@/components/workspace/robot-config'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const RobotSimulator = dynamic(() => import('@/components/workspace/robot-simulator').then((mod) => ({ default: mod.RobotSimulator })), {
  ssr: false,
})

export default function WorkspacePage() {
  const [codeBlocks, setCodeBlocks] = useState<CodeBlock[]>([])
  const [robotConfig, setRobotConfig] = useState<RobotConfig>({
    robotType: 'wheeled',
    wheelDiameter: 0.1,
    wheelBase: 0.3,
    maxSpeed: 1.5,
    mass: 2.5,
    armLength: 0.8,
    jointCount: 6,
    maxAltitude: 10,
    batteryCapacity: 5000,
    sensors: ['Distance', 'Gyroscope', 'Camera'],
  })

  const [simulationState, setSimulationState] = useState({
    executing: false,
    wheelSpeed: 0,
    armRotation: 0,
    droneHeight: 0,
    sensorReadings: {} as Record<string, number>,
  })

  const [executionLog, setExecutionLog] = useState<string[]>([])

  // Execute blocks with real-time simulation updates
  const executeBlocks = useCallback((blocks: CodeBlock[]) => {
    setSimulationState((prev) => ({ ...prev, executing: true }))
    setExecutionLog([])

    let currentWheelSpeed = 0
    let currentArmRotation = 0
    let currentDroneHeight = 0

    const executeBlock = async (block: CodeBlock, index: number) => {
      const newLog = `[${index + 1}] Executing: ${block.label}`
      setExecutionLog((prev) => [...prev, newLog])

      // Simulate block execution based on type
      switch (block.type) {
        case 'set_wheel_speed':
          currentWheelSpeed = (block.value as number) || 0
          setSimulationState((prev) => ({
            ...prev,
            wheelSpeed: currentWheelSpeed,
          }))
          break

        case 'set_arm_angle':
          currentArmRotation = (block.value as number) || 0
          setSimulationState((prev) => ({
            ...prev,
            armRotation: currentArmRotation,
          }))
          break

        case 'set_drone_height':
          currentDroneHeight = (block.value as number) || 0
          setSimulationState((prev) => ({
            ...prev,
            droneHeight: currentDroneHeight,
          }))
          break

        case 'move_forward':
          for (let i = 0; i < 20; i++) {
            await new Promise((resolve) => setTimeout(resolve, 50))
            setSimulationState((prev) => ({
              ...prev,
              wheelSpeed: prev.wheelSpeed * 0.95,
            }))
          }
          setSimulationState((prev) => ({
            ...prev,
            wheelSpeed: 0,
          }))
          break

        case 'wait':
          const waitTime = ((block.value as number) || 1) * 1000
          await new Promise((resolve) => setTimeout(resolve, waitTime))
          break

        case 'read_distance':
          const distance = Math.random() * 100 + 10
          setExecutionLog((prev) => [...prev, `  → Distance: ${distance.toFixed(2)} cm`])
          setSimulationState((prev) => ({
            ...prev,
            sensorReadings: { ...prev.sensorReadings, distance },
          }))
          break

        case 'read_gyro':
          const rotation = Math.random() * 360
          setExecutionLog((prev) => [...prev, `  → Rotation: ${rotation.toFixed(2)}°`])
          break

        case 'read_camera':
          setExecutionLog((prev) => [...prev, `  → Camera active`])
          break

        case 'repeat': {
          const repeatCount = (block.value as number) || 1
          setExecutionLog((prev) => [...prev, `  → Repeating ${repeatCount} times`])
          break
        }

        case 'if_sensor':
          setExecutionLog((prev) => [...prev, `  → Condition evaluated`])
          break

        case 'ai_predict':
          setExecutionLog((prev) => [...prev, `  → AI model prediction: 0.92`])
          break

        case 'path_plan':
          setExecutionLog((prev) => [...prev, `  → Path planned with ${(block.value as number) || 100} waypoints`])
          break

        default:
          break
      }

      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    const runExecution = async () => {
      for (let i = 0; i < blocks.length; i++) {
        if (!simulationState.executing) break
        await executeBlock(blocks[i], i)
      }

      setSimulationState((prev) => ({
        ...prev,
        executing: false,
        wheelSpeed: 0,
        armRotation: 0,
        droneHeight: 0,
      }))
      setExecutionLog((prev) => [...prev, 'Execution completed'])
    }

    runExecution()
  }, [simulationState.executing])

  const handleAddBlock = (block: CodeBlock) => {
    setCodeBlocks((prev) => [...prev, block])
  }

  const handleRemoveBlock = (id: string) => {
    setCodeBlocks((prev) => prev.filter((block) => block.id !== id))
  }

  const handleUpdateBlock = (id: string, value: number | string) => {
    setCodeBlocks((prev) => prev.map((block) => (block.id === id ? { ...block, value } : block)))
  }

  const handleStop = () => {
    setSimulationState((prev) => ({
      ...prev,
      executing: false,
      wheelSpeed: 0,
      armRotation: 0,
      droneHeight: 0,
    }))
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-950">
      {/* Header */}
      <div className="border-b border-slate-700 bg-slate-900 px-6 py-4">
        <h1 className="text-2xl font-bold text-white">RobotStudio Workspace</h1>
        <p className="text-slate-400 text-sm">Configure • Code • Simulate</p>
      </div>

      {/* Main workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel: Configuration + Code Editor */}
        <div className="w-96 flex flex-col border-r border-slate-700 overflow-hidden bg-slate-900">
          <Tabs defaultValue="config" className="flex-1 flex flex-col">
            <TabsList className="grid w-full grid-cols-2 bg-slate-800 rounded-none border-b border-slate-700">
              <TabsTrigger value="config" className="rounded-none">
                Config
              </TabsTrigger>
              <TabsTrigger value="code" className="rounded-none">
                Code
              </TabsTrigger>
            </TabsList>

            <TabsContent value="config" className="flex-1 overflow-hidden">
              <RobotConfigPanel config={robotConfig} onUpdateConfig={(updates) => setRobotConfig((prev) => ({ ...prev, ...updates }))} />
            </TabsContent>

            <TabsContent value="code" className="flex-1 overflow-hidden">
              <BlockEditor
                blocks={codeBlocks}
                onAddBlock={handleAddBlock}
                onRemoveBlock={handleRemoveBlock}
                onUpdateBlock={handleUpdateBlock}
                onExecute={executeBlocks}
                executing={simulationState.executing}
                onStop={handleStop}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Panel: Simulator + Console */}
        <div className="flex-1 flex flex-col">
          {/* 3D Simulator */}
          <div className="flex-1 bg-gradient-to-b from-slate-900 to-slate-950 relative">
            <RobotSimulator
              robotType={robotConfig.robotType}
              wheelSpeed={simulationState.wheelSpeed}
              armRotation={simulationState.armRotation}
              droneHeight={simulationState.droneHeight}
              executing={simulationState.executing}
            />

            {/* Overlay: Robot Stats */}
            <div className="absolute top-4 right-4 bg-slate-900 bg-opacity-90 border border-slate-700 rounded-lg p-3 text-xs text-slate-300 space-y-1 pointer-events-none">
              <div>
                <span className="text-slate-400">Type:</span> <span className="text-cyan-400 font-mono">{robotConfig.robotType}</span>
              </div>
              {robotConfig.robotType === 'wheeled' && (
                <div>
                  <span className="text-slate-400">Speed:</span> <span className="text-cyan-400 font-mono">{simulationState.wheelSpeed.toFixed(2)} m/s</span>
                </div>
              )}
              {robotConfig.robotType === 'arm' && (
                <div>
                  <span className="text-slate-400">Angle:</span> <span className="text-cyan-400 font-mono">{simulationState.armRotation.toFixed(1)}°</span>
                </div>
              )}
              {robotConfig.robotType === 'drone' && (
                <div>
                  <span className="text-slate-400">Height:</span> <span className="text-cyan-400 font-mono">{simulationState.droneHeight.toFixed(2)} m</span>
                </div>
              )}
              <div>
                <span className="text-slate-400">Status:</span> <span className={simulationState.executing ? 'text-green-400 font-mono' : 'text-slate-400'}>{simulationState.executing ? 'RUNNING' : 'IDLE'}</span>
              </div>
            </div>
          </div>

          {/* Console / Execution Log */}
          <div className="border-t border-slate-700 bg-slate-900 h-32 flex flex-col">
            <div className="border-b border-slate-700 px-4 py-2">
              <p className="text-sm font-semibold text-white">Execution Console</p>
            </div>
            <div className="flex-1 overflow-auto bg-slate-950 font-mono text-xs text-slate-300 p-3 space-y-1">
              {executionLog.length === 0 ? (
                <p className="text-slate-500">Ready. Click "Run Program" to start.</p>
              ) : (
                executionLog.map((log, i) => (
                  <div key={i} className={log.startsWith('[') ? 'text-cyan-400' : 'text-slate-400'}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
