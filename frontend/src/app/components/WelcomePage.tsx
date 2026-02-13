import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  Calendar,
  MessageSquare,
  FileText,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle2,
  Star
} from "lucide-react";

interface WelcomePageProps {
  onGetStarted: () => void;
}

export function WelcomePage({ onGetStarted }: WelcomePageProps) {
  const features = [
    {
      icon: Calendar,
      title: "Smart Booking",
      description: "Automated scheduling with real-time availability and instant confirmations"
    },
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Manage all client communications in one centralized platform"
    },
    {
      icon: FileText,
      title: "Dynamic Forms",
      description: "Create, send, and track custom forms with automated workflows"
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Coordinate your team with role-based access and scheduling"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time insights and metrics to grow your business"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "1M+", label: "Bookings Made" },
    { value: "99.9%", label: "Uptime" },
    { value: "4.9/5", label: "Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                BusinessHub
              </span>
            </div>
            <Button
              onClick={onGetStarted}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Sign In
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-blue-500 bg-opacity-20 text-blue-300 border-blue-400 px-6 py-2 text-sm">
            <Star className="w-4 h-4 mr-2 inline" />
            The All-in-One Business Management Platform
          </Badge>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Business Operations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Streamline bookings, manage communications, and grow your business with our 
            powerful suite of tools designed for modern entrepreneurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-400">
              Powerful features to help you manage and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-400">
              Simple setup process to get your business up and running
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Create Your Workspace",
                  description: "Set up your business profile with our guided onboarding wizard",
                  icon: Users
                },
                {
                  step: "02",
                  title: "Configure Your Services",
                  description: "Add services, set availability, and customize booking pages",
                  icon: Calendar
                },
                {
                  step: "03",
                  title: "Start Managing",
                  description: "Begin accepting bookings, managing clients, and growing your business",
                  icon: TrendingUp
                }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-6 items-start bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10 p-8 rounded-2xl hover:bg-opacity-10 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6 text-blue-400" />
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 bg-grid"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using BusinessHub to streamline 
                their operations and delight their clients.
              </p>
              <Button
                size="lg"
                onClick={onGetStarted}
                className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-2xl group"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="mt-6 flex items-center justify-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-white border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">BusinessHub</span>
            </div>
            <div className="text-sm">
              © 2026 BusinessHub. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
