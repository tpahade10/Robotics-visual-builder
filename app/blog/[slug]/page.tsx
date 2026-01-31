'use client';

import React from "react"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowLeft, 
  ArrowRight,
  Cpu,
  Clock,
  BookOpen,
  Share2,
  ThumbsUp
} from 'lucide-react';
import { useState } from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  difficulty: string;
  readTime: string;
  image: string;
  author: string;
  date: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  'getting-started': {
    title: 'Getting Started with RobotStudio',
    excerpt: 'Your first step into the world of visual robot programming.',
    category: 'Tutorial',
    difficulty: 'Beginner',
    readTime: '5 min',
    image: '🚀',
    author: 'RobotStudio Team',
    date: 'Jan 15, 2024',
    content: (
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Welcome to RobotStudio</h2>
          <p className="text-lg text-muted-foreground mb-4">
            RobotStudio is a visual programming platform designed to make robotics accessible to everyone. Whether you're a beginner exploring robotics for the first time or an experienced engineer, this guide will help you get up and running.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">What You'll Learn</h3>
          <ul className="space-y-3 list-disc list-inside text-muted-foreground">
            <li>How to navigate the RobotStudio workspace</li>
            <li>Understanding the four main sections of the interface</li>
            <li>Configuring your first robot</li>
            <li>Running your first simulation</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">The Four Sections of RobotStudio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Card className="p-4 border-cyan-500/30 bg-cyan-500/5">
              <h4 className="font-bold mb-2">📋 Robot Configuration</h4>
              <p className="text-sm text-muted-foreground">Set up your robot's physical properties, sensors, and motors. This is where you define what your robot looks like and how it operates.</p>
            </Card>
            <Card className="p-4 border-blue-500/30 bg-blue-500/5">
              <h4 className="font-bold mb-2">🧩 Block Code Editor</h4>
              <p className="text-sm text-muted-foreground">Write programs using drag-and-drop blocks. No complex syntax—just visual blocks that represent robot actions and logic.</p>
            </Card>
            <Card className="p-4 border-purple-500/30 bg-purple-500/5">
              <h4 className="font-bold mb-2">🎮 3D Simulator</h4>
              <p className="text-sm text-muted-foreground">Watch your robot come to life in real-time 3D. See exactly how your code makes the robot behave in a virtual world.</p>
            </Card>
            <Card className="p-4 border-green-500/30 bg-green-500/5">
              <h4 className="font-bold mb-2">📊 Execution Console</h4>
              <p className="text-sm text-muted-foreground">Monitor sensor readings, debug output, and program status in real-time as your robot executes.</p>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 1: Choose a Robot Template</h3>
          <p className="text-muted-foreground mb-3">
            When you launch the workspace, you'll see preset robot templates. For your first experience, we recommend starting with a "Wheeled Robot" - it's simple, intuitive, and teaches fundamental concepts.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-mono text-sm">Available Templates:</p>
            <ul className="font-mono text-sm text-muted-foreground mt-2 space-y-1">
              <li>🤖 Wheeled Robot (Best for beginners)</li>
              <li>🦾 Robotic Arm</li>
              <li>🚁 Drone</li>
              <li>🤖 Humanoid Robot</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 2: Explore the Configuration Panel</h3>
          <p className="text-muted-foreground mb-3">
            The configuration panel lets you see and modify your robot's properties. For a wheeled robot, you can adjust:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li><strong>Dimensions:</strong> Width, length, and height of your robot</li>
            <li><strong>Weight:</strong> Mass (affects acceleration and physics)</li>
            <li><strong>Motors:</strong> Number and type of wheels/motors</li>
            <li><strong>Sensors:</strong> Distance sensors, gyroscopes, or cameras</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 3: Add Your First Block</h3>
          <p className="text-muted-foreground mb-3">
            In the block editor, you'll see different categories of blocks. For your first program:
          </p>
          <ol className="space-y-3 text-muted-foreground">
            <li>Click the <strong>Motion</strong> category</li>
            <li>Drag the "Move Forward" block into your workspace</li>
            <li>Set the distance to 50 units</li>
            <li>Click the "Run" button in the console</li>
          </ol>
          <p className="mt-4 text-sm bg-primary/10 p-3 rounded border border-primary/30">
            💡 <strong>Tip:</strong> Watch the 3D simulator on the right. Your robot should move forward!
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Next Steps</h3>
          <p className="text-muted-foreground mb-3">
            Now that you understand the basics, try:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li>Add a "Turn Right" block and make your robot move in a square</li>
            <li>Add a loop to repeat the square movement</li>
            <li>Read the next tutorial: "Building Your First Wheeled Robot"</li>
          </ul>
        </section>
      </div>
    )
  },
  'first-wheeled-robot': {
    title: 'Building Your First Wheeled Robot',
    excerpt: 'Step-by-step guide to configure and program a mobile robot.',
    category: 'Tutorial',
    difficulty: 'Beginner',
    readTime: '8 min',
    image: '🤖',
    author: 'RobotStudio Team',
    date: 'Jan 16, 2024',
    content: (
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Building Your First Wheeled Robot</h2>
          <p className="text-lg text-muted-foreground mb-4">
            In this tutorial, you'll create a fully functional wheeled robot from scratch and program it to navigate an obstacle course.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">What You'll Create</h3>
          <p className="text-muted-foreground mb-3">
            A small mobile robot that can:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li>Move forward and backward</li>
            <li>Turn left and right</li>
            <li>Detect obstacles using a distance sensor</li>
            <li>Avoid obstacles and navigate around them</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Part 1: Configure Your Robot</h3>
          <div className="bg-muted/50 p-6 rounded-lg border border-border space-y-4">
            <div>
              <h4 className="font-bold mb-2">Basic Properties:</h4>
              <div className="space-y-2 text-sm font-mono">
                <div><span className="text-muted-foreground">Width:</span> 15 cm</div>
                <div><span className="text-muted-foreground">Length:</span> 20 cm</div>
                <div><span className="text-muted-foreground">Height:</span> 10 cm</div>
                <div><span className="text-muted-foreground">Weight:</span> 500 grams</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Motor Configuration:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Left Wheel: DC Motor (max speed: 1.0 m/s)</li>
                <li>✓ Right Wheel: DC Motor (max speed: 1.0 m/s)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Sensors to Add:</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Distance Sensor (Front, max range: 2 meters)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Part 2: Write the Basic Movement Code</h3>
          <p className="text-muted-foreground mb-3">
            Let's start with simple movements. In the block editor:
          </p>
          <div className="bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-2 mb-4">
            <div><span className="text-green-400">START</span></div>
            <div className="ml-4"><span className="text-cyan-400">Move Forward</span> (distance: 100)</div>
            <div className="ml-4"><span className="text-cyan-400">Turn Right</span> (angle: 90)</div>
            <div className="ml-4"><span className="text-cyan-400">Move Forward</span> (distance: 100)</div>
            <div><span className="text-green-400">END</span></div>
          </div>
          <p className="text-sm bg-primary/10 p-3 rounded border border-primary/30">
            This makes your robot move in an "L" shape. Try running it and watch the simulator!
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Part 3: Add Obstacle Detection</h3>
          <p className="text-muted-foreground mb-3">
            Now let's make your robot smart. We'll use the distance sensor to detect obstacles:
          </p>
          <div className="bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-2 mb-4">
            <div><span className="text-green-400">START LOOP</span></div>
            <div className="ml-4"><span className="text-cyan-400">IF</span> distance {'>'} 0.5 meters THEN</div>
            <div className="ml-8"><span className="text-cyan-400">Move Forward</span> (speed: 0.5 m/s)</div>
            <div className="ml-4">ELSE</div>
            <div className="ml-8"><span className="text-cyan-400">Stop</span></div>
            <div className="ml-8"><span className="text-cyan-400">Turn Right</span> (angle: 45)</div>
            <div><span className="text-green-400">END LOOP</span></div>
          </div>
          <p className="text-sm text-muted-foreground">
            This creates a simple obstacle avoidance behavior. The robot moves forward unless an obstacle is detected within 0.5 meters.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Part 4: Test and Refine</h3>
          <p className="text-muted-foreground mb-3">
            Click "Run" and observe your robot:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li><strong>Does it move smoothly?</strong> Check motor speeds in configuration</li>
            <li><strong>Does it detect obstacles?</strong> Verify sensor range is sufficient</li>
            <li><strong>Does it avoid them?</strong> Adjust turn angle if needed</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Challenge: Make It Smarter</h3>
          <p className="text-muted-foreground mb-3">
            Try these enhancements:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li>Add a second distance sensor to the right side for better obstacle detection</li>
            <li>Use a loop counter to make the robot return to start after 10 turns</li>
            <li>Add variable speed control based on distance</li>
          </ul>
        </section>
      </div>
    )
  },
  'block-programming-intro': {
    title: 'Introduction to Block Programming',
    excerpt: 'Master the block-based visual programming language.',
    category: 'Tutorial',
    difficulty: 'Beginner',
    readTime: '10 min',
    image: '🧩',
    author: 'RobotStudio Team',
    date: 'Jan 17, 2024',
    content: (
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Introduction to Block Programming</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Block programming is a visual way to write code without worrying about syntax. Each block represents a command or action that your robot understands.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Block Categories</h3>
          <div className="space-y-3">
            <Card className="p-4 border-cyan-500/30 bg-cyan-500/5">
              <h4 className="font-bold mb-2">🏃 Motion Blocks</h4>
              <p className="text-sm text-muted-foreground">Control your robot's movement: Move Forward, Move Backward, Turn Left, Turn Right, Set Speed, Stop.</p>
            </Card>
            <Card className="p-4 border-blue-500/30 bg-blue-500/5">
              <h4 className="font-bold mb-2">🔄 Control Blocks</h4>
              <p className="text-sm text-muted-foreground">Control program flow: If/Else, Repeat Loop, Wait, Event Handlers, Break/Continue.</p>
            </Card>
            <Card className="p-4 border-green-500/30 bg-green-500/5">
              <h4 className="font-bold mb-2">👁️ Sensor Blocks</h4>
              <p className="text-sm text-muted-foreground">Read sensor data: Get Distance, Get Angle, Get Temperature, Check Button, Read Camera.</p>
            </Card>
            <Card className="p-4 border-purple-500/30 bg-purple-500/5">
              <h4 className="font-bold mb-2">🧠 Advanced Blocks</h4>
              <p className="text-sm text-muted-foreground">Use variables, math operations, AI models, and data structures for complex behavior.</p>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">How to Use Blocks</h3>
          <ol className="space-y-4 text-muted-foreground">
            <li>
              <strong>1. Drag from the category:</strong> Click a category and drag a block into your workspace
            </li>
            <li>
              <strong>2. Edit the parameters:</strong> Click on values in the block to change them (distance, speed, angle, etc.)
            </li>
            <li>
              <strong>3. Connect blocks:</strong> Blocks snap together to form sequences
            </li>
            <li>
              <strong>4. Run your program:</strong> Click "Run" and watch your robot execute the blocks in order
            </li>
          </ol>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Example: Square Pattern</h3>
          <p className="text-muted-foreground mb-3">
            Let's create a program that makes your robot move in a square:
          </p>
          <div className="bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-2 mb-4">
            <div><span className="text-green-400">REPEAT 4 times</span></div>
            <div className="ml-4"><span className="text-cyan-400">Move Forward</span> (100 units)</div>
            <div className="ml-4"><span className="text-cyan-400">Turn Right</span> (90 degrees)</div>
            <div><span className="text-green-400">END REPEAT</span></div>
          </div>
          <p className="text-sm text-muted-foreground">
            This uses a Repeat loop to run the same 2 blocks 4 times, creating a square pattern.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Understanding Flow</h3>
          <p className="text-muted-foreground mb-3">
            Blocks execute from top to bottom, one after another. Understanding this flow is key:
          </p>
          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <p className="font-bold mb-3">Basic Flow:</p>
            <div className="space-y-2 text-sm font-mono">
              <div className="text-cyan-500">Block 1 executes</div>
              <div className="ml-4">↓</div>
              <div className="text-cyan-500">Block 2 executes</div>
              <div className="ml-4">↓</div>
              <div className="text-cyan-500">Block 3 executes</div>
              <div className="ml-4">↓</div>
              <div className="text-green-500">Program ends</div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Common Mistakes to Avoid</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span>❌</span>
              <div>
                <strong>Forgetting to add a Stop block:</strong> Your robot might keep moving after the program ends. Always include a Stop block when needed.
              </div>
            </li>
            <li className="flex gap-3">
              <span>❌</span>
              <div>
                <strong>Infinite loops without conditions:</strong> If your loop never ends, your robot runs forever. Use sensor conditions to break out.
              </div>
            </li>
            <li className="flex gap-3">
              <span>❌</span>
              <div>
                <strong>Wrong units:</strong> Check if distances are in cm, meters, or units. Inconsistent units cause unexpected behavior.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Practice Challenges</h3>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside ml-2">
            <li>Make your robot move in a triangle (3 sides, 120° angles)</li>
            <li>Make your robot move forward, pause for 2 seconds, then backward</li>
            <li>Create a loop that moves forward 5 times with increasing speed each time</li>
          </ol>
        </section>
      </div>
    )
  },
  'robot-kinematics': {
    title: 'Understanding Robot Kinematics',
    excerpt: 'Learn forward and inverse kinematics fundamentals.',
    category: 'Concept',
    difficulty: 'Intermediate',
    readTime: '12 min',
    image: '📐',
    author: 'RobotStudio Team',
    date: 'Jan 18, 2024',
    content: (
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Understanding Robot Kinematics</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Kinematics is the study of motion without considering forces. For robots, it means understanding how joint angles translate into end-effector position.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Forward Kinematics</h3>
          <p className="text-muted-foreground mb-3">
            Forward kinematics answers: "Given the joint angles, where is the end effector?"
          </p>
          <p className="text-sm bg-primary/10 p-3 rounded border border-primary/30 mb-3">
            💡 <strong>Example:</strong> If my arm's shoulder is at 45°, elbow at 30°, and wrist at 60°, where is my hand?
          </p>
          <p className="text-muted-foreground">
            For a simple 2-link arm, we use trigonometry:
          </p>
          <div className="bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-3">
            <div>x = L₁ × cos(θ₁) + L₂ × cos(θ₁ + θ₂)</div>
            <div>y = L₁ × sin(θ₁) + L₂ × sin(θ₁ + θ₂)</div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Where L₁ and L₂ are link lengths, and θ₁ and θ₂ are joint angles.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Inverse Kinematics</h3>
          <p className="text-muted-foreground mb-3">
            Inverse kinematics answers: "To reach a specific position, what angles do I need?"
          </p>
          <p className="text-sm bg-primary/10 p-3 rounded border border-primary/30 mb-3">
            💡 <strong>Example:</strong> To grab an object at position (50, 30), what angles should my shoulder, elbow, and wrist have?
          </p>
          <p className="text-muted-foreground">
            This is harder than forward kinematics because multiple joint combinations might reach the same point (redundancy).
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Why This Matters for Your Robot</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span>🎯</span>
              <div>
                <strong>Precise positioning:</strong> When programming a robotic arm to grab something, you specify the target position, not the angles.
              </div>
            </li>
            <li className="flex gap-3">
              <span>🚀</span>
              <div>
                <strong>Path planning:</strong> Determining how to move from point A to B requires understanding kinematics.
              </div>
            </li>
            <li className="flex gap-3">
              <span>🤖</span>
              <div>
                <strong>Workspace limits:</strong> Understanding where your robot can and cannot reach.
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Try It in RobotStudio</h3>
          <p className="text-muted-foreground mb-3">
            In the workspace, when you configure a robotic arm:
          </p>
          <ol className="space-y-2 text-muted-foreground list-decimal list-inside ml-2">
            <li>Set up a 3-link arm with specific link lengths</li>
            <li>In the simulator, you can see real-time forward kinematics as you adjust angles</li>
            <li>Use the position target blocks to practice inverse kinematics</li>
            <li>Observe how the arm reaches the target position</li>
          </ol>
        </section>
      </div>
    )
  },
  'debugging-guide': {
    title: 'Debugging Your Robot Programs',
    excerpt: 'Best practices for troubleshooting robot behavior.',
    category: 'Guide',
    difficulty: 'Beginner',
    readTime: '7 min',
    image: '🔍',
    author: 'RobotStudio Team',
    date: 'Jan 19, 2024',
    content: (
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-bold mb-4">Debugging Your Robot Programs</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Even experienced programmers write code with bugs. Let's learn systematic ways to find and fix problems in your robot programs.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 1: Observe the Behavior</h3>
          <p className="text-muted-foreground mb-3">
            Run your program and watch carefully:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li>Does the robot move at all?</li>
            <li>Does it move differently than expected?</li>
            <li>Does it stop unexpectedly?</li>
            <li>Are the sensor readings what you expect?</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 2: Check the Console Output</h3>
          <p className="text-muted-foreground mb-3">
            The execution console shows:
          </p>
          <div className="bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-1 mb-3">
            <div><span className="text-cyan-400">[INFO]</span> Program started</div>
            <div><span className="text-cyan-400">[INFO]</span> Moving forward: 100 units</div>
            <div><span className="text-yellow-400">[WARN]</span> Distance sensor reading: 0.5m</div>
            <div><span className="text-red-400">[ERROR]</span> Obstacle detected! Stopping</div>
          </div>
          <p className="text-sm text-muted-foreground">
            Look for warnings (yellow) and errors (red). These often tell you exactly what went wrong.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 3: Add Debug Blocks</h3>
          <p className="text-muted-foreground mb-3">
            Use "Print" blocks to output sensor values and program state:
          </p>
          <div className="bg-slate-950 text-slate-100 p-4 rounded-lg font-mono text-sm overflow-x-auto space-y-2 mb-3">
            <div><span className="text-green-400">START</span></div>
            <div className="ml-4"><span className="text-cyan-400">Print</span> "Distance: " + distance_sensor_value</div>
            <div className="ml-4"><span className="text-cyan-400">IF</span> distance {'>'} 1.0 THEN</div>
            <div className="ml-8"><span className="text-cyan-400">Print</span> "Path clear, moving forward"</div>
            <div className="ml-8"><span className="text-cyan-400">Move Forward</span></div>
            <div className="ml-4">ELSE</div>
            <div className="ml-8"><span className="text-cyan-400">Print</span> "Obstacle! Stopping"</div>
            <div className="ml-8"><span className="text-cyan-400">Stop</span></div>
          </div>
          <p className="text-sm text-muted-foreground">
            The console will now show exactly what your robot is "thinking" at each step.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Common Issues & Solutions</h3>
          <div className="space-y-4">
            <Card className="p-4 border-red-500/30">
              <h4 className="font-bold mb-2">❌ Robot doesn't move</h4>
              <p className="text-sm text-muted-foreground">Check: Motor configuration, speed settings, if Stop block is active, sensor conditions blocking movement</p>
            </Card>
            <Card className="p-4 border-yellow-500/30">
              <h4 className="font-bold mb-2">⚠️ Robot moves wrong direction</h4>
              <p className="text-sm text-muted-foreground">Check: Motor polarity, coordinate system, if you mixed forward/backward in code</p>
            </Card>
            <Card className="p-4 border-blue-500/30">
              <h4 className="font-bold mb-2">❓ Sensor returns zero</h4>
              <p className="text-sm text-muted-foreground">Check: Sensor is configured, sensor range is sufficient, sensor is pointing the right direction</p>
            </Card>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3">Step 4: Isolate the Problem</h3>
          <p className="text-muted-foreground mb-3">
            Create a minimal test program:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside ml-2">
            <li>Test only one block at a time</li>
            <li>Test only one sensor</li>
            <li>Remove conditional logic temporarily</li>
            <li>Gradually add complexity back</li>
          </ul>
        </section>
      </div>
    )
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [likes, setLikes] = useState(0);
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-border dark:border-slate-800 sticky top-0 z-50 bg-background/95 dark:bg-slate-950/95 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">RobotStudio</span>
          </Link>
          <Link href="/blog">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex gap-3 items-center mb-4">
            <span className="text-4xl">{post.image}</span>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-3 py-1 rounded-full font-medium bg-cyan-500/20 text-cyan-700 dark:text-cyan-400">
                {post.category}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                post.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-700 dark:text-green-400' :
                post.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400' :
                'bg-red-500/20 text-red-700 dark:text-red-400'
              }`}>
                {post.difficulty}
              </span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
          <div className="flex gap-4 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <div>{post.date}</div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          {post.content}
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8 flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLikes(likes + 1)}
              className="gap-2"
            >
              <ThumbsUp className="w-4 h-4" />
              Like {likes > 0 && `(${likes})`}
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
          <Link href="/blog">
            <Button variant="outline" size="sm">
              <BookOpen className="w-4 h-4 mr-1" />
              More Articles
            </Button>
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['getting-started', 'first-wheeled-robot', 'block-programming-intro'].map((slug) => {
            if (slug === params.slug) return null;
            const relatedPost = blogPosts[slug];
            return (
              <Link key={slug} href={`/blog/${slug}`}>
                <Card className="h-full hover:shadow-lg transition cursor-pointer border-border/50 hover:border-primary/30 p-4">
                  <div className="text-3xl mb-3">{relatedPost.image}</div>
                  <h3 className="font-bold line-clamp-2 mb-2">{relatedPost.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
