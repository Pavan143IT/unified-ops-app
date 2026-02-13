import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Sparkles } from "lucide-react";

interface OnboardingWizardProps {
  onComplete: () => void;
}

const steps = [
  { id: 1, name: "Workspace", description: "Set up your workspace" },
  { id: 2, name: "Email/SMS", description: "Configure communications" },
  { id: 3, name: "Forms", description: "Create your forms" },
  { id: 4, name: "Bookings", description: "Set up booking services" },
  { id: 5, name: "Staff", description: "Add team members" },
  { id: 6, name: "Activate", description: "Review and activate" }
];

export function OnboardingWizard({ onComplete }: OnboardingWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    workspaceName: "",
    email: "",
    phone: "",
    smsEnabled: false,
    emailEnabled: true,
    formName: "",
    serviceName: "",
    staffName: "",
    staffEmail: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.workspaceName.trim()) {
          newErrors.workspaceName = "Workspace name is required";
        }
        break;
      case 2:
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
        if (formData.smsEnabled && !formData.phone.trim()) {
          newErrors.phone = "Phone is required when SMS is enabled";
        }
        break;
      case 3:
        if (!formData.formName.trim()) {
          newErrors.formName = "Form name is required";
        }
        break;
      case 4:
        if (!formData.serviceName.trim()) {
          newErrors.serviceName = "Service name is required";
        }
        break;
      case 5:
        if (!formData.staffName.trim()) {
          newErrors.staffName = "Staff name is required";
        }
        if (!formData.staffEmail.trim()) {
          newErrors.staffEmail = "Staff email is required";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <Card className="w-full max-w-3xl relative z-10 border-0 shadow-2xl bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg pb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-lg rounded-full mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl mb-2">Setup Your Workspace</CardTitle>
            <CardDescription className="text-blue-100 text-lg">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].name}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                      step.id < currentStep
                        ? "bg-green-500 text-white"
                        : step.id === currentStep
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {step.id < currentStep ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <div className="text-xs mt-1 text-center hidden sm:block">{step.name}</div>
                </div>
              ))}
            </div>
            <Progress value={progressPercentage} className="mt-4" />
          </div>

          {/* Step Content */}
          <div className="mb-8">
            <h3 className="text-xl mb-1">{steps[currentStep - 1].name}</h3>
            <p className="text-sm text-gray-600 mb-6">{steps[currentStep - 1].description}</p>

            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="workspaceName">Workspace Name</Label>
                  <Input
                    id="workspaceName"
                    value={formData.workspaceName}
                    onChange={(e) => setFormData({ ...formData, workspaceName: e.target.value })}
                    placeholder="My Business"
                  />
                  {errors.workspaceName && (
                    <p className="text-sm text-red-500 mt-1">{errors.workspaceName}</p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hello@business.com"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="emailEnabled"
                    checked={formData.emailEnabled}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, emailEnabled: checked as boolean })
                    }
                  />
                  <Label htmlFor="emailEnabled">Enable Email Notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="smsEnabled"
                    checked={formData.smsEnabled}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, smsEnabled: checked as boolean })
                    }
                  />
                  <Label htmlFor="smsEnabled">Enable SMS Notifications</Label>
                </div>
                {formData.smsEnabled && (
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="formName">Form Name</Label>
                  <Input
                    id="formName"
                    value={formData.formName}
                    onChange={(e) => setFormData({ ...formData, formName: e.target.value })}
                    placeholder="Contact Form"
                  />
                  {errors.formName && <p className="text-sm text-red-500 mt-1">{errors.formName}</p>}
                </div>
                <p className="text-sm text-gray-500">
                  You can customize and add more forms after setup
                </p>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="serviceName">Service Name</Label>
                  <Input
                    id="serviceName"
                    value={formData.serviceName}
                    onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                    placeholder="Consultation"
                  />
                  {errors.serviceName && (
                    <p className="text-sm text-red-500 mt-1">{errors.serviceName}</p>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  You can add more services and configure availability later
                </p>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="staffName">Staff Member Name</Label>
                  <Input
                    id="staffName"
                    value={formData.staffName}
                    onChange={(e) => setFormData({ ...formData, staffName: e.target.value })}
                    placeholder="John Doe"
                  />
                  {errors.staffName && (
                    <p className="text-sm text-red-500 mt-1">{errors.staffName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="staffEmail">Staff Email</Label>
                  <Input
                    id="staffEmail"
                    type="email"
                    value={formData.staffEmail}
                    onChange={(e) => setFormData({ ...formData, staffEmail: e.target.value })}
                    placeholder="john@business.com"
                  />
                  {errors.staffEmail && (
                    <p className="text-sm text-red-500 mt-1">{errors.staffEmail}</p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-green-900">Setup Complete!</h4>
                  <p className="text-sm text-green-800 mb-4">
                    Review your configuration and click Activate to start using your workspace.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Workspace:</span>
                      <span>{formData.workspaceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span>{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Initial Form:</span>
                      <span>{formData.formName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Initial Service:</span>
                      <span>{formData.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Team Member:</span>
                      <span>{formData.staffName}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length ? (
                "Activate"
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}