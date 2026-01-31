'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  ArrowRight, 
  Cpu, 
  BookOpen, 
  Zap,
  Code,
  Waves,
  Microscope,
  Clock,
  ChevronRight
} from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with RobotStudio',
      excerpt: 'Your first step into the world of visual robot programming. Learn how to navigate the workspace and understand the basic interface.',
      category: 'Tutorial',
      difficulty: 'Beginner',
      readTime: '5 min',
      image: '🚀',
      slug: 'getting-started',
      featured: true
    },
    {
      id: 2,
      title: 'Building Your First Wheeled Robot',
      excerpt: 'Step-by-step guide to configure and program a simple mobile robot. Make it move, turn, and respond to obstacles.',
      category: 'Tutorial',
      difficulty: 'Beginner',
      readTime: '8 min',
      image: '🤖',
      slug: 'first-wheeled-robot',
      featured: true
    },
    {
      id: 3,
      title: 'Understanding Robot Kinematics',
      excerpt: 'Learn the fundamentals of forward and inverse kinematics. Essential knowledge for programming robotic arms and complex movements.',
      category: 'Concept',
      difficulty: 'Intermediate',
      readTime: '12 min',
      image: '📐',
      slug: 'robot-kinematics',
      featured: false
    },
    {
      id: 4,
      title: 'Introduction to Block Programming',
      excerpt: 'Master the block-based visual programming language. Learn motion, control flow, and sensor blocks through practical examples.',
      category: 'Tutorial',
      difficulty: 'Beginner',
      readTime: '10 min',
      image: '🧩',
      slug: 'block-programming-intro',
      featured: true
    },
    {
      id: 5,
      title: 'How Robot Sensors Work',
      excerpt: 'Explore different sensor types: distance sensors, gyroscopes, cameras, and how to use them in your programs.',
      category: 'Concept',
      difficulty: 'Intermediate',
      readTime: '11 min',
      image: '👁️',
      slug: 'robot-sensors',
      featured: false
    },
    {
      id: 6,
      title: 'Programming a Robotic Arm',
      excerpt: 'Configure and control a multi-joint robotic arm. Learn about degrees of freedom, joint control, and pick-and-place operations.',
      category: 'Tutorial',
      difficulty: 'Intermediate',
      readTime: '14 min',
      image: '🦾',
      slug: 'robotic-arm-guide',
      featured: false
    },
    {
      id: 7,
      title: 'Drone Flight Control Basics',
      excerpt: 'Understand UAV dynamics and learn to program autonomous drone flights. Altitude control, navigation, and obstacle avoidance.',
      category: 'Tutorial',
      difficulty: 'Intermediate',
      readTime: '13 min',
      image: '🚁',
      slug: 'drone-flight-basics',
      featured: false
    },
    {
      id: 8,
      title: 'Debugging Your Robot Programs',
      excerpt: 'Best practices for troubleshooting robot behavior. Use the console, sensors, and visualization to identify issues.',
      category: 'Guide',
      difficulty: 'Beginner',
      readTime: '7 min',
      image: '🔍',
      slug: 'debugging-guide',
      featured: false
    },
    {
      id: 9,
      title: 'Introduction to AI in Robotics',
      excerpt: 'Get started with machine learning for robots. Train models for object detection, path planning, and intelligent decision-making.',
      category: 'Concept',
      difficulty: 'Advanced',
      readTime: '15 min',
      image: '🧠',
      slug: 'ai-robotics-intro',
      featured: false
    },
    {
      id: 10,
      title: 'Physics Simulation Deep Dive',
      excerpt: 'Understand forces, friction, gravity, and how they affect your robot simulations. Realistic physics for accurate testing.',
      category: 'Concept',
      difficulty: 'Advanced',
      readTime: '16 min',
      image: '⚙️',
      slug: 'physics-simulation',
      featured: false
    }
  ];

  const categories = ['Tutorial', 'Concept', 'Guide'];
  const difficulties = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-700 dark:text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-700 dark:text-red-400';
      default: return 'bg-slate-500/20 text-slate-700 dark:text-slate-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Tutorial': return 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10';
      case 'Concept': return 'text-blue-600 dark:text-blue-400 bg-blue-500/10';
      case 'Guide': return 'text-purple-600 dark:text-purple-400 bg-purple-500/10';
      default: return 'text-slate-600 dark:text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-border dark:border-slate-800 sticky top-0 z-50 bg-background/95 dark:bg-slate-950/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">RobotStudio</span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-sm hover:text-primary transition">Home</Link>
            <Link href="/blog" className="text-sm text-primary font-medium">Blog</Link>
            <Link href="/workspace">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Launch Workspace
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Learn Robotics with RobotStudio
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From beginner tutorials to advanced concepts, discover everything you need to become a robotics expert. Start your learning journey today.
          </p>
        </div>

        {/* Featured Posts Section */}
        {!selectedCategory && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured for Beginners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition cursor-pointer border-primary/20 hover:border-primary/50">
                    <div className="p-6 flex flex-col h-full">
                      <div className="text-4xl mb-4">{post.image}</div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                      <div className="flex gap-2 items-center justify-between pt-4 border-t border-border">
                        <div className="flex gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(post.category)}`}>
                            {post.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(post.difficulty)}`}>
                            {post.difficulty}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Articles
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition cursor-pointer border-border/50 hover:border-primary/30">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-3xl">{post.image}</div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(post.difficulty)}`}>
                        {post.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                    <div className="flex gap-3 items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-3 items-center text-sm text-muted-foreground">
                        <span className={`text-xs px-2 py-1 rounded font-medium ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 sm:p-12 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Code?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            Apply what you've learned in our interactive workspace. Start building robots with visual block programming.
          </p>
          <Link href="/workspace">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              Launch Workspace <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
