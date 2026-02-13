import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import {
  FileText,
  Eye,
  Send,
  CheckCircle2,
  Clock,
  XCircle,
  TrendingUp,
  Users
} from "lucide-react";

interface Form {
  id: number;
  name: string;
  description: string;
  status: "active" | "draft" | "archived";
  totalSubmissions: number;
  pendingReviews: number;
  completionRate: number;
  lastSubmission: string;
  autoSend: boolean;
}

interface Submission {
  id: number;
  formId: number;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "reviewed" | "incomplete";
  responses: number;
}

export function Forms() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const forms: Form[] = [
    {
      id: 1,
      name: "Contact Form",
      description: "General inquiry and contact form",
      status: "active",
      totalSubmissions: 145,
      pendingReviews: 3,
      completionRate: 89,
      lastSubmission: "2 hours ago",
      autoSend: true
    },
    {
      id: 2,
      name: "Intake Form",
      description: "New client intake and assessment",
      status: "active",
      totalSubmissions: 67,
      pendingReviews: 5,
      completionRate: 94,
      lastSubmission: "30 minutes ago",
      autoSend: true
    },
    {
      id: 3,
      name: "Feedback Survey",
      description: "Post-session feedback collection",
      status: "active",
      totalSubmissions: 203,
      pendingReviews: 0,
      completionRate: 76,
      lastSubmission: "1 day ago",
      autoSend: true
    },
    {
      id: 4,
      name: "Registration Form",
      description: "Event and workshop registration",
      status: "active",
      totalSubmissions: 89,
      pendingReviews: 8,
      completionRate: 82,
      lastSubmission: "5 hours ago",
      autoSend: false
    },
    {
      id: 5,
      name: "Follow-up Questionnaire",
      description: "Follow-up assessment for existing clients",
      status: "draft",
      totalSubmissions: 12,
      pendingReviews: 2,
      completionRate: 67,
      lastSubmission: "3 days ago",
      autoSend: false
    }
  ];

  const submissions: Submission[] = [
    {
      id: 1,
      formId: 1,
      submittedBy: "Emma Wilson",
      submittedAt: "2 hours ago",
      status: "pending",
      responses: 8
    },
    {
      id: 2,
      formId: 2,
      submittedBy: "Michael Chen",
      submittedAt: "30 minutes ago",
      status: "pending",
      responses: 12
    },
    {
      id: 3,
      formId: 1,
      submittedBy: "Sarah Johnson",
      submittedAt: "1 day ago",
      status: "reviewed",
      responses: 8
    },
    {
      id: 4,
      formId: 4,
      submittedBy: "David Brown",
      submittedAt: "5 hours ago",
      status: "pending",
      responses: 6
    },
    {
      id: 5,
      formId: 2,
      submittedBy: "Lisa Anderson",
      submittedAt: "3 hours ago",
      status: "incomplete",
      responses: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSubmissionStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case "reviewed":
        return <CheckCircle2 className="w-4 h-4 text-green-600" />;
      case "incomplete":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Forms & Submissions</h1>
              <p className="text-purple-100">Create, manage, and track all your forms</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="overview">
              <FileText className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="submissions">
              <Users className="w-4 h-4 mr-2" />
              Submissions
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forms.map((form) => (
                <Card key={form.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{form.name}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{form.description}</p>
                      </div>
                      <Badge className={getStatusColor(form.status)}>{form.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Total Submissions</p>
                          <p className="text-2xl">{form.totalSubmissions}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Pending Reviews</p>
                          <p className="text-2xl">{form.pendingReviews}</p>
                        </div>
                      </div>

                      {/* Completion Rate */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Completion Rate</span>
                          <span className="text-sm font-medium">{form.completionRate}%</span>
                        </div>
                        <Progress value={form.completionRate} />
                      </div>

                      {/* Auto-send Status */}
                      <div className="flex items-center gap-2 text-sm">
                        {form.autoSend ? (
                          <>
                            <Send className="w-4 h-4 text-green-600" />
                            <span className="text-green-600">Auto-send enabled</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">Manual send</span>
                          </>
                        )}
                      </div>

                      {/* Last Submission */}
                      <p className="text-xs text-gray-500">
                        Last submission: {form.lastSubmission}
                      </p>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" className="flex-1" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button className="flex-1" size="sm">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add New Form Card */}
              <Card className="border-dashed border-2 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px]">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-2">Create New Form</h3>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Design a custom form to collect information
                  </p>
                  <Button>+ New Form</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Submissions Tab */}
          <TabsContent value="submissions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {submissions.map((submission) => {
                    const form = forms.find((f) => f.id === submission.formId);
                    return (
                      <div
                        key={submission.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-start gap-4 flex-1">
                          <div className="mt-1">
                            {getSubmissionStatusIcon(submission.status)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="font-medium">{submission.submittedBy}</p>
                              <Badge variant="outline" className="text-xs">
                                {form?.name}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600">
                              {submission.responses} responses • {submission.submittedAt}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              submission.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : submission.status === "reviewed"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {submission.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pending Review</p>
                      <p className="text-2xl">18</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Reviewed</p>
                      <p className="text-2xl">497</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">This Week</p>
                      <p className="text-2xl">34</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}