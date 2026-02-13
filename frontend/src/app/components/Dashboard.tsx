import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Users,
  Calendar,
  FileText,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  XCircle
} from "lucide-react";

interface DashboardProps {
  workspaceName: string;
}

export function Dashboard({ workspaceName }: DashboardProps) {
  const metrics = [
    {
      title: "Total Bookings",
      value: "127",
      change: "+12%",
      icon: Calendar,
      trend: "up"
    },
    {
      title: "Active Forms",
      value: "8",
      change: "+2",
      icon: FileText,
      trend: "up"
    },
    {
      title: "Team Members",
      value: "12",
      change: "+3",
      icon: Users,
      trend: "up"
    },
    {
      title: "Response Rate",
      value: "94%",
      change: "+5%",
      icon: TrendingUp,
      trend: "up"
    }
  ];

  const alerts = [
    {
      id: 1,
      type: "critical",
      title: "Booking Conflict",
      message: "Double booking detected for Sarah Johnson on Feb 12, 2PM",
      time: "5 mins ago"
    },
    {
      id: 2,
      type: "warning",
      title: "Form Submission Pending",
      message: "3 form submissions awaiting review",
      time: "1 hour ago"
    },
    {
      id: 3,
      type: "critical",
      title: "Staff Availability",
      message: "No staff scheduled for Friday afternoon",
      time: "2 hours ago"
    },
    {
      id: 4,
      type: "warning",
      title: "Email Delivery Issue",
      message: "2 confirmation emails failed to send",
      time: "3 hours ago"
    }
  ];

  const upcomingBookings = [
    {
      id: 1,
      client: "Emma Wilson",
      service: "Consultation",
      time: "Today, 2:00 PM",
      status: "confirmed"
    },
    {
      id: 2,
      client: "Michael Chen",
      service: "Follow-up",
      time: "Today, 4:30 PM",
      status: "confirmed"
    },
    {
      id: 3,
      client: "Sarah Johnson",
      service: "Initial Assessment",
      time: "Tomorrow, 10:00 AM",
      status: "pending"
    },
    {
      id: 4,
      client: "David Brown",
      service: "Consultation",
      time: "Tomorrow, 2:00 PM",
      status: "confirmed"
    }
  ];

  const recentForms = [
    {
      id: 1,
      name: "Contact Form",
      submissions: 45,
      completion: 89,
      status: "active"
    },
    {
      id: 2,
      name: "Feedback Survey",
      submissions: 23,
      completion: 76,
      status: "active"
    },
    {
      id: 3,
      name: "Intake Form",
      submissions: 67,
      completion: 94,
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl">{workspaceName}</h1>
          <p className="text-sm text-gray-600">Dashboard Overview</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{metric.title}</p>
                      <p className="text-3xl mt-2">{metric.value}</p>
                      <p className="text-sm text-green-600 mt-1">{metric.change} from last month</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Alerts Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Alerts & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    alert.type === "critical"
                      ? "bg-red-50 border-red-500"
                      : "bg-yellow-50 border-yellow-500"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{alert.title}</h4>
                        <Badge variant={alert.type === "critical" ? "destructive" : "default"}>
                          {alert.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.time}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Resolve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bookings and Forms Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Bookings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Bookings
                </span>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-start justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium">{booking.client}</p>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <p className="text-sm text-gray-500 mt-1">{booking.time}</p>
                    </div>
                    <div>
                      {booking.status === "confirmed" ? (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Confirmed
                        </Badge>
                      ) : (
                        <Badge variant="outline">
                          <Clock className="w-3 h-3 mr-1" />
                          Pending
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Forms Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Forms Overview
                </span>
                <Button variant="outline" size="sm">
                  Manage Forms
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentForms.map((form) => (
                  <div key={form.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{form.name}</p>
                        <p className="text-sm text-gray-600">
                          {form.submissions} submissions
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {form.status}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Completion Rate</span>
                        <span>{form.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${form.completion}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
