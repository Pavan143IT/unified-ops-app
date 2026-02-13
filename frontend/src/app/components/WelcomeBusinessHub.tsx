import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Sparkles,
  Rocket,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  Shield,
  Clock,
  Star,
  Heart,
  Award,
  BarChart
} from "lucide-react";

interface WelcomeBusinessHubProps {
  onContinue: () => void;
}

export function WelcomeBusinessHub({ onContinue }: WelcomeBusinessHubProps) {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [hoveredGoal, setHoveredGoal] = useState<string | null>(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    // Trigger stats animation on mount
    setTimeout(() => setStatsAnimated(true), 500);
  }, []);

  const businessGoals = [
    {
      id: "grow",
      icon: TrendingUp,
      title: "Grow My Business",
      description: "Scale operations and increase revenue",
      color: "from-green-500 to-emerald-600",
      particles: ["💰", "📈", "🚀"]
    },
    {
      id: "organize",
      icon: Target,
      title: "Get Organized",
      description: "Streamline workflows and processes",
      color: "from-blue-500 to-cyan-600",
      particles: ["📋", "✨", "⚡"]
    },
    {
      id: "automate",
      icon: Zap,
      title: "Automate Tasks",
      description: "Save time with automation",
      color: "from-purple-500 to-pink-600",
      particles: ["🤖", "⚙️", "💡"]
    },
    {
      id: "team",
      icon: Users,
      title: "Manage My Team",
      description: "Coordinate and empower your staff",
      color: "from-orange-500 to-red-600",
      particles: ["👥", "🎯", "🏆"]
    }
  ];

  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      items: ["Automated bookings", "Calendar sync", "Reminders & notifications"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Client Communication",
      items: ["Unified inbox", "SMS & Email", "Real-time messaging"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Forms & Documents",
      items: ["Custom forms", "E-signatures", "Auto-send & track"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Security & Reliability",
      items: ["Bank-level encryption", "Daily backups", "99.9% uptime"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { 
      value: "50K+", 
      label: "Happy Users", 
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      gradientColors: { start: "#3b82f6", end: "#06b6d4" },
      percentage: 85
    },
    { 
      value: "1M+", 
      label: "Bookings Made", 
      icon: Calendar,
      color: "from-purple-500 to-pink-500",
      gradientColors: { start: "#a855f7", end: "#ec4899" },
      percentage: 95
    },
    { 
      value: "99.9%", 
      label: "Uptime", 
      icon: Clock,
      color: "from-green-500 to-emerald-500",
      gradientColors: { start: "#22c55e", end: "#10b981" },
      percentage: 99
    },
    { 
      value: "4.9★", 
      label: "User Rating", 
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      gradientColors: { start: "#eab308", end: "#f97316" },
      percentage: 98
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blurs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.3
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-30 blur-2xl rounded-full animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-white to-yellow-100 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
                  <Sparkles className="w-12 h-12 text-purple-600 animate-spin-slow" />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-slide-up">
              Welcome to Your
              <br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent animate-gradient">
                Business Hub
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-purple-100 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-delay">
              Your all-in-one platform to manage, grow, and succeed
            </p>

            <Badge className="bg-white bg-opacity-20 backdrop-blur-lg text-white border-white border-opacity-30 px-6 py-3 text-lg animate-pulse-slow">
              <Rocket className="w-5 h-5 mr-2 inline animate-bounce" />
              Let's build something amazing together
            </Badge>
          </div>

          {/* Business Goals Selection */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
                What's Your Primary Goal?
              </h2>
              <p className="text-xl text-purple-100 mb-6 animate-fade-in-delay">
                We'll customize your experience based on your needs
              </p>
              
              {/* Animated instruction */}
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-full px-6 py-3 animate-bounce-slow">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-sm">Click a goal to continue</span>
                <ArrowRight className="w-4 h-4 animate-pulse" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessGoals.map((goal, index) => {
                const Icon = goal.icon;
                const isSelected = selectedGoal === goal.id;
                const isHovered = hoveredGoal === goal.id;
                return (
                  <Card
                    key={goal.id}
                    className={`cursor-pointer transition-all duration-500 border-2 relative overflow-hidden ${
                      isSelected
                        ? "border-white bg-white text-gray-900 scale-110 shadow-2xl z-10"
                        : "border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-lg hover:bg-opacity-20 hover:scale-105 hover:shadow-xl"
                    }`}
                    onClick={() => setSelectedGoal(goal.id)}
                    onMouseEnter={() => setHoveredGoal(goal.id)}
                    onMouseLeave={() => setHoveredGoal(null)}
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Animated particles on hover */}
                    {isHovered && !isSelected && (
                      <div className="absolute inset-0 pointer-events-none">
                        {goal.particles.map((particle, i) => (
                          <div
                            key={i}
                            className="absolute text-2xl animate-float-particle"
                            style={{
                              top: `${20 + i * 30}%`,
                              left: `${20 + i * 20}%`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          >
                            {particle}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Glow effect on selection */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
                    )}
                    
                    <CardContent className="p-6 text-center relative z-10">
                      <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center transform transition-all duration-500 ${
                        isSelected ? "scale-110 rotate-6 shadow-2xl" : isHovered ? "scale-110" : ""
                      }`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isSelected ? "text-gray-900" : "text-white"}`}>
                        {goal.title}
                      </h3>
                      <p className={`text-sm ${isSelected ? "text-gray-600" : "text-purple-100"}`}>
                        {goal.description}
                      </p>
                      {isSelected && (
                        <div className="mt-4 animate-bounce">
                          <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto" />
                        </div>
                      )}
                      
                      {/* Selection indicator */}
                      {isSelected && (
                        <div className="absolute -top-2 -right-2">
                          <div className="relative">
                            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                            <div className="relative w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Features Preview */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You Need, All in One Place
              </h2>
              <p className="text-xl text-purple-100">
                Powerful tools at your fingertips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                      <ul className="space-y-2">
                        {feature.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-purple-100">
                            <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-green-300" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Enhanced Stats Section with Animated Circles */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2">Trusted by Thousands</h2>
              <p className="text-xl text-purple-100">Join a thriving community of businesses</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const circumference = 2 * Math.PI * 54; // radius = 54
                const offset = circumference - (statsAnimated ? (stat.percentage / 100) * circumference : circumference);
                
                return (
                  <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Animated Circle */}
                    <div className="relative w-40 h-40 mx-auto mb-4">
                      {/* Background circle */}
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="54"
                          stroke="white"
                          strokeWidth="8"
                          fill="none"
                          className="opacity-20"
                        />
                        {/* Progress circle */}
                        <circle
                          cx="80"
                          cy="80"
                          r="54"
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          className="transition-all duration-2000 ease-out"
                        />
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={stat.gradientColors.start} />
                            <stop offset="100%" stopColor={stat.gradientColors.end} />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Center content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full`}></div>
                    </div>
                    
                    {/* Stats text */}
                    <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-purple-100 text-sm font-medium">{stat.label}</div>
                    
                    {/* Achievement badge */}
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Badge className="bg-white bg-opacity-20 backdrop-blur-lg text-white border-white border-opacity-30 text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Top {stat.percentage}%
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-2xl border-2 border-white border-opacity-30 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 animate-gradient-shift"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
                  <BarChart className="w-6 h-6 text-blue-300 animate-bounce" />
                  <Star className="w-6 h-6 text-yellow-300 animate-spin-slow" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  Let's set up your workspace in just a few simple steps
                </p>
                
                <Button
                  size="lg"
                  onClick={onContinue}
                  disabled={!selectedGoal}
                  className={`text-lg px-12 py-7 rounded-full shadow-2xl transition-all duration-300 group relative overflow-hidden ${
                    selectedGoal
                      ? "bg-white text-purple-900 hover:bg-gray-100 hover:scale-110 animate-pulse-button"
                      : "bg-gray-400 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {/* Button glow effect */}
                  {selectedGoal && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-xl group-hover:opacity-50 transition-opacity"></div>
                  )}
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {selectedGoal ? (
                      <>
                        <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                        Continue to Setup
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </>
                    ) : (
                      <>
                        <Target className="w-6 h-6" />
                        Select a Goal to Continue
                      </>
                    )}
                  </span>
                </Button>

                {selectedGoal && (
                  <div className="mt-6 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-green-500 bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3 border border-green-400 border-opacity-30">
                      <CheckCircle2 className="w-5 h-5 text-green-300 animate-bounce" />
                      <span className="text-sm text-green-100">
                        Perfect! We'll personalize for: <strong>{businessGoals.find(g => g.id === selectedGoal)?.title}</strong>
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-purple-100 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>No credit card needed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-300" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) scale(1); opacity: 0; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-shift {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-button {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle 2s ease-out forwards;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-button {
          animation: pulse-button 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: slide-up 0.8s ease-out 0.3s backwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .duration-2000 {
          transition-duration: 2s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}