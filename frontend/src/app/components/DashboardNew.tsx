import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Users,
  Calendar,
  FileText,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Activity,
  Mail,
  Phone
} from "lucide-react";

interface DashboardNewProps {
  workspaceName: string;
}

export function DashboardNew({ workspaceName }: DashboardNewProps) {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$24,780",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "blue"
    },
    {
      title: "Total Bookings",
      value: "127",
      change: "+8.2%",
      trend: "up",
      icon: Calendar,
      color: "purple"
    },
    {
      title: "Active Clients",
      value: "89",
      change: "+15.3%",
      trend: "up",
      icon: Users,
      color: "green"
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+2.1%",
      trend: "up",
      icon: Activity,
      color: "orange"
    }
  ];

  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Booking Conflict Detected",
      message: "Double booking for Sarah Johnson on Feb 12 at 2:00 PM",
      time: "5 mins ago",
      action: "Resolve Now"
    },
    {
      id: 2,
      type: "warning",
      title: "Form Submissions Pending",
      message: "3 intake forms require your review",
      time: "1 hour ago",
      action: "Review"
    },
    {
      id: 3,
      type: "critical",
      title: "Staff Availability Gap",
      message: "No staff scheduled for Friday afternoon (2-5 PM)",
      time: "2 hours ago",
      action: "Schedule"
    }
  ];

  const upcomingBookings = [
    {
      id: 1,
      client: "Emma Wilson",
      avatar: "EW",
      service: "Initial Consultation",
      time: "Today, 2:00 PM",
      duration: "60 min",
      status: "confirmed",
      type: "video"
    },
    {
      id: 2,
      client: "Michael Chen",
      avatar: "MC",
      service: "Follow-up Session",
      time: "Today, 4:30 PM",
      duration: "30 min",
      status: "confirmed",
      type: "in-person"
    },
    {
      id: 3,
      client: "Sarah Johnson",
      avatar: "SJ",
      service: "Extended Session",
      time: "Tomorrow, 10:00 AM",
      duration: "90 min",
      status: "pending",
      type: "video"
    },
    {
      id: 4,
      client: "David Brown",
      avatar: "DB",
      service: "Group Workshop",
      time: "Tomorrow, 2:00 PM",
      duration: "120 min",
      status: "confirmed",
      type: "in-person"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "booking",
      message: "New booking from Emma Wilson",
      time: "10 mins ago",
      icon: Calendar
    },
    {
      id: 2,
      type: "form",
      message: "Intake form completed by Michael Chen",
      time: "25 mins ago",
      icon: FileText
    },
    {
      id: 3,
      type: "message",
      message: "New message from Sarah Johnson",
      time: "1 hour ago",
      icon: Mail
    },
    {
      id: 4,
      type: "booking",
      message: "Booking rescheduled by David Brown",
      time: "2 hours ago",
      icon: Calendar
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; icon: string; text: string }> = {
      blue: { bg: "bg-blue-500", icon: "text-blue-600", text: "text-blue-700" },
      purple: { bg: "bg-purple-500", icon: "text-purple-600", text: "text-purple-700" },
      green: { bg: "bg-green-500", icon: "text-green-600", text: "text-green-700" },
      orange: { bg: "bg-orange-500", icon: "text-orange-600", text: "text-orange-700" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl mb-1">Welcome back! 👋</h1>
              <p className="text-gray-600">Here's what's happening with your business today</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2">
                <Users className="w-4 h-4" />
                Add Client
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const colors = getColorClasses(metric.color);
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-${metric.color}-400 to-${metric.color}-600`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      {metric.trend === "up" ? (
                        <ArrowUpRight className="w-4 h-4 text-green-600" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-600" />
                      )}
                      <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-xs text-gray-500 mt-2">vs last month</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alerts */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Priority Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-5 rounded-xl border-l-4 transition-all hover:shadow-md ${
                        alert.type === "critical"
                          ? "bg-red-50 border-red-500"
                          : "bg-yellow-50 border-yellow-500"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                            <Badge 
                              variant={alert.type === "critical" ? "destructive" : "default"}
                              className="text-xs"
                            >
                              {alert.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">{alert.message}</p>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {alert.time}
                            </p>
                            <Button size="sm" variant="outline" className="h-8">
                              {alert.action}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 mb-1">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Bookings */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Upcoming Bookings
              </CardTitle>
              <Button variant="outline" size="sm">
                View Calendar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-5 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-all hover:border-blue-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500">
                        <AvatarFallback className="text-white font-semibold">
                          {booking.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{booking.client}</p>
                        <p className="text-sm text-gray-600">{booking.service}</p>
                      </div>
                    </div>
                    {booking.status === "confirmed" ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Confirmed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-yellow-400 text-yellow-700">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time} • {booking.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {booking.type === "video" ? (
                        <>
                          <Phone className="w-4 h-4" />
                          <span>Video Call</span>
                        </>
                      ) : (
                        <>
                          <Users className="w-4 h-4" />
                          <span>In Person</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t">
                    <Button size="sm" variant="outline" className="flex-1">
                      Reschedule
                    </Button>
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
