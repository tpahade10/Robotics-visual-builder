'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, Trash2, Play, Square } from 'lucide-react'

export interface CodeBlock {
  id: string
  type: string
  label: string
  value?: number | string
  category: string
  color: string
}

interface BlockEditorProps {
  blocks: CodeBlock[]
  onAddBlock: (block: CodeBlock) => void
  onRemoveBlock: (id: string) => void
  onUpdateBlock: (id: string, value: number | string) => void
  onExecute: (blocks: CodeBlock[]) => void
  executing: boolean
  onStop: () => void
}

const BLOCK_TEMPLATES = {
  motion: [
    { type: 'set_wheel_speed', label: 'Set Wheel Speed', value: 0, color: 'bg-orange-500' },
    { type: 'set_arm_angle', label: 'Set Arm Angle', value: 0, color: 'bg-orange-500' },
    { type: 'set_drone_height', label: 'Set Drone Height', value: 0, color: 'bg-orange-500' },
    { type: 'move_forward', label: 'Move Forward', value: 1, color: 'bg-orange-500' },
  ],
  control: [
    { type: 'wait', label: 'Wait (seconds)', value: 1, color: 'bg-yellow-500' },
    { type: 'repeat', label: 'Repeat', value: 3, color: 'bg-yellow-500' },
    { type: 'if_sensor', label: 'If Sensor', value: 50, color: 'bg-yellow-500' },
  ],
  sensor: [
    { type: 'read_distance', label: 'Read Distance Sensor', color: 'bg-cyan-500' },
    { type: 'read_gyro', label: 'Read Gyroscope', color: 'bg-cyan-500' },
    { type: 'read_camera', label: 'Read Camera', color: 'bg-cyan-500' },
  ],
  advanced: [
    { type: 'ai_predict', label: 'AI Model Prediction', color: 'bg-purple-500' },
    { type: 'path_plan', label: 'Path Planning', value: 100, color: 'bg-purple-500' },
    { type: 'custom_script', label: 'Custom Python', color: 'bg-purple-500' },
  ],
}

export function BlockEditor({ blocks, onAddBlock, onRemoveBlock, onUpdateBlock, onExecute, executing, onStop }: BlockEditorProps) {
  const [selectedCategory, setSelectedCategory] = useState('motion')

  const handleAddBlock = (template: (typeof BLOCK_TEMPLATES)[keyof typeof BLOCK_TEMPLATES][0]) => {
    const newBlock: CodeBlock = {
      id: `block_${Date.now()}`,
      type: template.type,
      label: template.label,
      value: template.value,
      category: selectedCategory,
      color: template.color,
    }
    onAddBlock(newBlock)
  }

  return (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-700">
      {/* Header */}
      <div className="border-b border-slate-700 p-4">
        <h2 className="text-lg font-bold text-white mb-4">Code Blocks</h2>

        {/* Tabs for block categories */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800">
            <TabsTrigger value="motion" className="text-xs">
              Motion
            </TabsTrigger>
            <TabsTrigger value="control" className="text-xs">
              Control
            </TabsTrigger>
            <TabsTrigger value="sensor" className="text-xs">
              Sensor
            </TabsTrigger>
            <TabsTrigger value="advanced" className="text-xs">
              Advanced
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Block palette */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-2">
          {BLOCK_TEMPLATES[selectedCategory as keyof typeof BLOCK_TEMPLATES].map((template) => (
            <Button
              key={template.type}
              onClick={() => handleAddBlock(template)}
              variant="outline"
              className={`w-full justify-start ${template.color} text-white border-0 hover:opacity-90`}
              size="sm"
            >
              <Plus className="mr-2 h-4 w-4" />
              {template.label}
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Active blocks section */}
      <div className="border-t border-slate-700 p-4">
        <h3 className="text-sm font-semibold text-white mb-3">Sequence ({blocks.length})</h3>
        <ScrollArea className="h-48 border border-slate-700 rounded bg-slate-800 p-2">
          {blocks.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-8">Drag blocks here or add from palette</p>
          ) : (
            <div className="space-y-2">
              {blocks.map((block, index) => (
                <Card key={block.id} className={`${block.color} p-3 cursor-move border-0`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{index + 1}. {block.label}</p>
                      {block.value !== undefined && (
                        <div className="mt-1">
                          <input
                            type="number"
                            value={block.value}
                            onChange={(e) => onUpdateBlock(block.id, parseFloat(e.target.value) || 0)}
                            className="w-full bg-black bg-opacity-30 text-white text-xs px-2 py-1 rounded border border-white border-opacity-20"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      )}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => onRemoveBlock(block.id)}
                      className="h-8 w-8 p-0 text-white hover:bg-black hover:bg-opacity-30"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Execute button */}
      <div className="border-t border-slate-700 p-4 space-y-2">
        {executing ? (
          <Button onClick={onStop} variant="destructive" className="w-full">
            <Square className="mr-2 h-4 w-4" />
            Stop Execution
          </Button>
        ) : (
          <Button onClick={() => onExecute(blocks)} disabled={blocks.length === 0} className="w-full bg-green-600 hover:bg-green-700">
            <Play className="mr-2 h-4 w-4" />
            Run Program
          </Button>
        )}
      </div>
    </div>
  )
}
