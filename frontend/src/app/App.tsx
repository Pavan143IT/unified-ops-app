import { useEffect } from "react";
import { api } from "../api";
import { useState } from "react";
import { WelcomePage } from "./components/WelcomePage";
import { WelcomeBusinessHub } from "./components/WelcomeBusinessHub";
import { OnboardingWizard } from "./components/OnboardingWizard";
import { DashboardNew } from "./components/DashboardNew";
import { Inbox } from "./components/Inbox";
import { BookingPage } from "./components/BookingPage";
import { Forms } from "./components/Forms";
import { Button } from "./components/ui/button";
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  FileText,
  Menu,
  X,
  LogOut,
  Settings
} from "lucide-react";

type View = "dashboard" | "inbox" | "bookings" | "forms" | "booking-page";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showBusinessHub, setShowBusinessHub] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [currentView, setCurrentView] = useState<View>("dashboard");
  const [workspaceName, setWorkspaceName] = useState("My Business");
  const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
    api.get("/")
      .then(res => console.log("Backend connected:", res.data))
      .catch(err => console.log("Backend error:", err));
  }, []);


  const handleGetStarted = () => {
    setShowWelcome(false);
    setShowBusinessHub(true);
  };

  const handleContinueToOnboarding = () => {
    setShowBusinessHub(false);
  };

  const handleOnboardingComplete = () => {
    setIsOnboarded(true);
  };

  if (showWelcome) {
    return <WelcomePage onGetStarted={handleGetStarted} />;
  }

  if (showBusinessHub) {
    return <WelcomeBusinessHub onContinue={handleContinueToOnboarding} />;
  }

  if (!isOnboarded) {
    return <OnboardingWizard onComplete={handleOnboardingComplete} />;
  }

  const navigationItems = [
    { id: "dashboard" as View, label: "Dashboard", icon: LayoutDashboard },
    { id: "inbox" as View, label: "Inbox", icon: MessageSquare },
    { id: "bookings" as View, label: "Bookings", icon: Calendar },
    { id: "forms" as View, label: "Forms", icon: FileText }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border-r border-slate-700 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <LayoutDashboard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{workspaceName}</h2>
                  <p className="text-xs text-slate-400">Business Hub</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-slate-700"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`w-full justify-start transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                    onClick={() => {
                      setCurrentView(item.id);
                      setSidebarOpen(false);
                    }}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-xs font-semibold text-slate-400 mb-3 px-3">PUBLIC PAGES</p>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:bg-slate-700 hover:text-white"
                onClick={() => {
                  setCurrentView("booking-page");
                  setSidebarOpen(false);
                }}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Booking Page
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-xs font-semibold text-slate-400 mb-3 px-3">SETTINGS</p>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                <Settings className="w-5 h-5 mr-3" />
                Preferences
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:bg-slate-700 hover:text-white"
                onClick={() => setShowWelcome(true)}
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </Button>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-slate-700">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4">
              <p className="text-sm font-semibold mb-1">Upgrade to Pro</p>
              <p className="text-xs text-blue-100 mb-3">
                Get access to premium features
              </p>
              <Button size="sm" className="w-full bg-white text-blue-900 hover:bg-gray-100">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b p-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-lg">{workspaceName}</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          {currentView === "dashboard" && <DashboardNew workspaceName={workspaceName} />}
          {currentView === "inbox" && <Inbox />}
          {currentView === "bookings" && <DashboardNew workspaceName={workspaceName} />}
          {currentView === "forms" && <Forms />}
          {currentView === "booking-page" && <BookingPage />}
        </main>
      </div>
    </div>
  );
}
