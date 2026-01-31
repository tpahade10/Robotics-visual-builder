'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { 
  Zap, 
  Cpu, 
  Gamepad2, 
  Microscope, 
  Share2, 
  ArrowRight,
  Code,
  Waves,
  BookOpen
} from 'lucide-react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'Wheeled Robot Navigation',
      type: 'Mobile Robot',
      progress: 65,
      image: '🤖',
      lastModified: 'Today'
    },
    {
      id: 2,
      name: 'Robotic Arm Kinematics',
      type: 'Articulated Arm',
      progress: 45,
      image: '🦾',
      lastModified: 'Yesterday'
    },
    {
      id: 3,
      name: 'Drone Vision Control',
      type: 'UAV/Drone',
      progress: 80,
      image: '🚁',
      lastModified: '2 days ago'
    },
    {
      id: 4,
      name: 'Humanoid Walk Simulation',
      type: 'Humanoid',
      progress: 30,
      image: '🤖',
      lastModified: '1 week ago'
    }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Visual Block Programming',
      description: 'Scratch-style drag-and-drop interface for intuitive robot control'
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: '3D Robot Simulation',
      description: 'Real-time WebGL simulations for wheeled robots, arms, drones & humanoids'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'AI/ML Integration',
      description: 'Train neural networks for robot vision and autonomous decision-making'
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: 'Physics & Dynamics',
      description: 'Learn kinematics, inverse kinematics, and robot physics concepts'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Project Sharing',
      description: 'Share projects with community and learn from others'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Real-time Execution',
      description: 'Run simulations instantly and see robot behavior in real-time'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Navigation */}
        <nav className="border-b border-border dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground dark:text-white">RobotStudio</span>
            </Link>
            <div className="flex gap-6 items-center">
              <Link href="/blog" className="text-sm hover:text-primary transition">Blog</Link>
              <Button 
                onClick={() => setIsLoggedIn(true)}
                className="bg-primary hover:bg-primary/90"
              >
                Sign In
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-6 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground dark:text-white text-balance">
              Build Robots with <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Visual Blocks</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-slate-400 max-w-2xl mx-auto text-balance">
              Professional-grade robotics platform combining block-based programming, 3D simulations, AI/ML integration, and physics education for professionals and hobbyists
            </p>
          </div>

          <div className="flex gap-4 justify-center mb-16">
            <Link href="/workspace">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
              >
                Launch Workspace <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button 
              variant="outline"
              size="lg"
            >
              View Documentation
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className="bg-card dark:bg-slate-900/50 border-border dark:border-slate-800 p-6 text-left hover:border-accent hover:shadow-lg transition-all"
              >
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-foreground dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-slate-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border dark:border-slate-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-muted-foreground dark:text-slate-400">
            RobotStudio - Professional Robotics Programming Platform
          </div>
        </footer>
      </div>
    );
  }

  if (showDashboard) {
    return (
      <div className="min-h-screen bg-background dark:bg-slate-950">
        {/* Header */}
        <header className="border-b border-border dark:border-slate-800 sticky top-0 z-50 bg-background/95 dark:bg-slate-950/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-foreground dark:text-white">RobotStudio</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                onClick={() => {
                  setIsLoggedIn(false);
                  setShowDashboard(false);
                }}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground dark:text-white mb-2">Projects</h2>
            <p className="text-muted-foreground dark:text-slate-400">Your robotics projects and simulations</p>
          </div>

          {/* Create New Project */}
          <div className="mb-8">
            <Button 
              onClick={() => {}}
              className="bg-primary hover:bg-primary/90 gap-2"
            >
              <Zap className="w-4 h-4" />
              Create New Project
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="bg-card dark:bg-slate-900 border-border dark:border-slate-800 overflow-hidden hover:shadow-lg hover:border-accent transition-all cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-600/20 dark:from-cyan-400/10 dark:to-blue-600/10 p-6 text-3xl flex items-center justify-center h-32 group-hover:from-cyan-400/30 group-hover:to-blue-600/30 transition-colors">
                  {project.image}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground dark:text-white mb-1">{project.name}</h3>
                  <p className="text-xs text-muted-foreground dark:text-slate-400 mb-3">{project.type}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-muted-foreground dark:text-slate-400">Progress</span>
                      <span className="font-medium text-foreground dark:text-white">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-input dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground dark:text-slate-500">Modified {project.lastModified}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Quick Access Section */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-card dark:bg-slate-900 border-border dark:border-slate-800 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white mb-1">Block Editor</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">Visual programming interface</p>
                </div>
                <Code className="w-5 h-5 text-accent" />
              </div>
            </Card>

            <Card className="bg-card dark:bg-slate-900 border-border dark:border-slate-800 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white mb-1">Simulation Engine</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">3D WebGL simulator</p>
                </div>
                <Waves className="w-5 h-5 text-accent" />
              </div>
            </Card>

            <Card className="bg-card dark:bg-slate-900 border-border dark:border-slate-800 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground dark:text-white mb-1">Learning Hub</h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">Robotics concepts & tutorials</p>
                </div>
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
