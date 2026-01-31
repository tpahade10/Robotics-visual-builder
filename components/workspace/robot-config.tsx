'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ChevronDown } from 'lucide-react'

export interface RobotConfig {
  robotType: string
  wheelDiameter: number
  wheelBase: number
  maxSpeed: number
  mass: number
  // Arm specific
  armLength: number
  jointCount: number
  // Drone specific
  maxAltitude: number
  batteryCapacity: number
  // Sensor config
  sensors: string[]
}

interface RobotConfigProps {
  config: RobotConfig
  onUpdateConfig: (config: Partial<RobotConfig>) => void
}

export function RobotConfigPanel({ config, onUpdateConfig }: RobotConfigProps) {
  const [expandedSections, setExpandedSections] = useState({
    physical: true,
    dynamics: false,
    sensors: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const robotPresets = {
    wheeled: { wheelDiameter: 0.1, wheelBase: 0.3, maxSpeed: 1.5, mass: 2.5 },
    arm: { armLength: 0.8, jointCount: 6, maxSpeed: 1.0, mass: 5.0 },
    drone: { maxAltitude: 10, batteryCapacity: 5000, maxSpeed: 15, mass: 1.2 },
    humanoid: { wheelDiameter: 0.08, wheelBase: 0.4, maxSpeed: 0.8, mass: 10 },
  }

  const applyPreset = () => {
    const preset = robotPresets[config.robotType as keyof typeof robotPresets]
    onUpdateConfig(preset)
  }

  return (
    <div className="w-full bg-slate-900 border-b border-slate-700 p-4">
      {/* Robot Type Selector */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-white mb-2">Robot Type</label>
        <div className="grid grid-cols-4 gap-2">
          {['wheeled', 'arm', 'drone', 'humanoid'].map((type) => (
            <Button
              key={type}
              onClick={() => onUpdateConfig({ robotType: type })}
              variant={config.robotType === type ? 'default' : 'outline'}
              className="text-xs capitalize"
            >
              {type}
            </Button>
          ))}
        </div>
        <Button onClick={applyPreset} variant="secondary" size="sm" className="mt-2 w-full text-xs">
          Load Preset
        </Button>
      </div>

      {/* Configuration Sections */}
      <ScrollArea className="h-80">
        <div className="space-y-2 pr-4">
          {/* Physical Properties */}
          <Card className="bg-slate-800 border-slate-700">
            <button onClick={() => toggleSection('physical')} className="w-full flex items-center justify-between p-3 hover:bg-slate-700 transition">
              <h3 className="text-sm font-semibold text-white">Physical Properties</h3>
              <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${expandedSections.physical ? 'rotate-180' : ''}`} />
            </button>

            {expandedSections.physical && (
              <div className="p-3 space-y-3 border-t border-slate-700">
                {config.robotType === 'wheeled' && (
                  <>
                    <div>
                      <label className="text-xs text-slate-300">Wheel Diameter (m)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={config.wheelDiameter}
                        onChange={(e) => onUpdateConfig({ wheelDiameter: parseFloat(e.target.value) })}
                        className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300">Wheel Base (m)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={config.wheelBase}
                        onChange={(e) => onUpdateConfig({ wheelBase: parseFloat(e.target.value) })}
                        className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                  </>
                )}

                {config.robotType === 'arm' && (
                  <>
                    <div>
                      <label className="text-xs text-slate-300">Arm Length (m)</label>
                      <input
                        type="number"
                        step="0.1"
                        value={config.armLength}
                        onChange={(e) => onUpdateConfig({ armLength: parseFloat(e.target.value) })}
                        className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300">Joints</label>
                      <input
                        type="number"
                        step="1"
                        value={config.jointCount}
                        onChange={(e) => onUpdateConfig({ jointCount: parseInt(e.target.value) })}
                        className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                  </>
                )}

                {config.robotType === 'drone' && (
                  <>
                    <div>
                      <label className="text-xs text-slate-300">Max Altitude (m)</label>
                      <input
                        type="number"
                        step="1"
                        value={config.maxAltitude}
                        onChange={(e) => onUpdateConfig({ maxAltitude: parseFloat(e.target.value) })}
                        className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-300">Battery (mAh)</label>
                      <input
                        type="number"
                        step="100"
                        value={config.batteryCapacity}
                        onChange={(e) => onUpdateConfig({ batteryCapacity: parseFloat(e.target.value) })}
                        className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="text-xs text-slate-300">Mass (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={config.mass}
                    onChange={(e) => onUpdateConfig({ mass: parseFloat(e.target.value) })}
                    className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                  />
                </div>
              </div>
            )}
          </Card>

          {/* Dynamics */}
          <Card className="bg-slate-800 border-slate-700">
            <button onClick={() => toggleSection('dynamics')} className="w-full flex items-center justify-between p-3 hover:bg-slate-700 transition">
              <h3 className="text-sm font-semibold text-white">Dynamics</h3>
              <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${expandedSections.dynamics ? 'rotate-180' : ''}`} />
            </button>

            {expandedSections.dynamics && (
              <div className="p-3 space-y-3 border-t border-slate-700">
                <div>
                  <label className="text-xs text-slate-300">Max Speed (m/s)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={config.maxSpeed}
                    onChange={(e) => onUpdateConfig({ maxSpeed: parseFloat(e.target.value) })}
                    className="w-full bg-slate-900 border border-slate-600 rounded px-2 py-1 text-white text-xs"
                  />
                </div>
                <div className="text-xs text-slate-400">
                  <p>Friction: 0.3</p>
                  <p>Gravity: 9.81 m/s²</p>
                </div>
              </div>
            )}
          </Card>

          {/* Sensors */}
          <Card className="bg-slate-800 border-slate-700">
            <button onClick={() => toggleSection('sensors')} className="w-full flex items-center justify-between p-3 hover:bg-slate-700 transition">
              <h3 className="text-sm font-semibold text-white">Sensors</h3>
              <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${expandedSections.sensors ? 'rotate-180' : ''}`} />
            </button>

            {expandedSections.sensors && (
              <div className="p-3 space-y-2 border-t border-slate-700">
                {['Distance', 'Gyroscope', 'Accelerometer', 'Camera', 'GPS', 'Touch'].map((sensor) => (
                  <label key={sensor} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config.sensors.includes(sensor)}
                      onChange={(e) => {
                        const newSensors = e.target.checked ? [...config.sensors, sensor] : config.sensors.filter((s) => s !== sensor)
                        onUpdateConfig({ sensors: newSensors })
                      }}
                      className="rounded border-slate-600"
                    />
                    <span className="text-xs text-slate-300">{sensor}</span>
                  </label>
                ))}
              </div>
            )}
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}
