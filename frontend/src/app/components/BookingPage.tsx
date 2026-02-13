import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Badge } from "./ui/badge";
import { CheckCircle2, Clock, MapPin, DollarSign } from "lucide-react";

interface Service {
  id: number;
  name: string;
  duration: string;
  price: string;
  description: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export function BookingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"service" | "datetime" | "details" | "confirmation">("service");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const services: Service[] = [
    {
      id: 1,
      name: "Initial Consultation",
      duration: "60 minutes",
      price: "$150",
      description: "Comprehensive first-time consultation and assessment"
    },
    {
      id: 2,
      name: "Follow-up Session",
      duration: "30 minutes",
      price: "$75",
      description: "Follow-up appointment for existing clients"
    },
    {
      id: 3,
      name: "Extended Session",
      duration: "90 minutes",
      price: "$200",
      description: "Extended session for in-depth work"
    },
    {
      id: 4,
      name: "Group Workshop",
      duration: "120 minutes",
      price: "$50",
      description: "Group workshop session (max 10 participants)"
    }
  ];

  const timeSlots: TimeSlot[] = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: false },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: false },
    { time: "5:00 PM", available: true }
  ];

  const handleServiceSelect = (serviceId: number) => {
    setSelectedService(serviceId);
    setStep("datetime");
  };

  const handleDateTimeConfirm = () => {
    if (selectedDate && selectedTime) {
      setStep("details");
    }
  };

  const handleBookingSubmit = () => {
    // In a real app, this would submit to a backend
    setStep("confirmation");
  };

  const selectedServiceData = services.find((s) => s.id === selectedService);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-12 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 backdrop-blur-lg rounded-full mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-4 tracking-tight">
            Book Your Appointment
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Schedule a session that works for you - easy, fast, and convenient
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div
              className={`flex items-center transition-all duration-300 ${
                step === "service" ? "scale-110" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium shadow-lg transition-all duration-300 ${
                  step !== "service" 
                    ? "bg-gradient-to-br from-green-400 to-green-600 text-white ring-4 ring-green-300 ring-opacity-50" 
                    : "bg-gradient-to-br from-blue-400 to-blue-600 text-white ring-4 ring-blue-300 ring-opacity-50"
                }`}
              >
                {step !== "service" ? <CheckCircle2 className="w-6 h-6" /> : "1"}
              </div>
              <span className="ml-3 text-white font-medium hidden sm:inline">Service</span>
            </div>
            <div className="flex-1 h-1 bg-white bg-opacity-30 mx-4 rounded-full">
              <div 
                className={`h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-500 ${
                  step === "service" ? "w-0" : step === "datetime" ? "w-1/2" : "w-full"
                }`}
              />
            </div>
            <div
              className={`flex items-center transition-all duration-300 ${
                step === "datetime" ? "scale-110" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium shadow-lg transition-all duration-300 ${
                  step === "details" || step === "confirmation"
                    ? "bg-gradient-to-br from-green-400 to-green-600 text-white ring-4 ring-green-300 ring-opacity-50"
                    : step === "datetime"
                    ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white ring-4 ring-blue-300 ring-opacity-50"
                    : "bg-white bg-opacity-30 text-white backdrop-blur-sm"
                }`}
              >
                {step === "details" || step === "confirmation" ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  "2"
                )}
              </div>
              <span className={`ml-3 font-medium hidden sm:inline ${
                step === "service" ? "text-blue-100" : "text-white"
              }`}>Date & Time</span>
            </div>
            <div className="flex-1 h-1 bg-white bg-opacity-30 mx-4 rounded-full">
              <div 
                className={`h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-500 ${
                  step === "service" || step === "datetime" ? "w-0" : step === "details" ? "w-1/2" : "w-full"
                }`}
              />
            </div>
            <div
              className={`flex items-center transition-all duration-300 ${
                step === "details" || step === "confirmation" ? "scale-110" : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium shadow-lg transition-all duration-300 ${
                  step === "confirmation"
                    ? "bg-gradient-to-br from-green-400 to-green-600 text-white ring-4 ring-green-300 ring-opacity-50"
                    : step === "details"
                    ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white ring-4 ring-blue-300 ring-opacity-50"
                    : "bg-white bg-opacity-30 text-white backdrop-blur-sm"
                }`}
              >
                {step === "confirmation" ? <CheckCircle2 className="w-6 h-6" /> : "3"}
              </div>
              <span className={`ml-3 font-medium hidden sm:inline ${
                step === "service" || step === "datetime" ? "text-blue-100" : "text-white"
              }`}>Details</span>
            </div>
          </div>
        </div>

        {/* Step 1: Service Selection */}
        {step === "service" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-white overflow-hidden"
                onClick={() => handleServiceSelect(service.id)}
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-3">
                      <Clock className="w-5 h-5 mr-3 text-blue-600" />
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-3">
                      <DollarSign className="w-5 h-5 mr-3 text-green-600" />
                      <span className="font-medium">{service.price}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                    Select Service →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {step === "datetime" && selectedServiceData && (
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 pb-6">
              <CardTitle className="text-2xl">Select Date & Time</CardTitle>
              <CardDescription className="text-base">
                Booking: <span className="font-medium text-blue-600">{selectedServiceData.name}</span> ({selectedServiceData.duration})
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Label className="mb-3 block text-base font-medium">Choose a Date</Label>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>
                <div>
                  <Label className="mb-3 block text-base font-medium">Available Times</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        disabled={!slot.available}
                        onClick={() => setSelectedTime(slot.time)}
                        className={`w-full h-12 text-base transition-all duration-200 ${
                          selectedTime === slot.time 
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg scale-105" 
                            : "hover:scale-105 hover:border-blue-400"
                        } ${
                          !slot.available ? "opacity-40" : ""
                        }`}
                      >
                        {slot.time}
                        {!slot.available && (
                          <Badge variant="destructive" className="ml-2 text-xs">
                            Booked
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-8 pt-6 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => setStep("service")}
                  className="px-8"
                >
                  ← Back
                </Button>
                <Button
                  onClick={handleDateTimeConfirm}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg h-12"
                >
                  Continue to Details →
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Contact Details */}
        {step === "details" && (
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 pb-6">
              <CardTitle className="text-2xl">Your Details</CardTitle>
              <CardDescription className="text-base">Please provide your contact information</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-base">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="h-12 mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-base">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="h-12 mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="h-12 mt-2 text-base"
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-base">Additional Notes (Optional)</Label>
                  <Input
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special requirements or questions"
                    className="h-12 mt-2 text-base"
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8 pt-6 border-t">
                <Button 
                  variant="outline" 
                  onClick={() => setStep("datetime")}
                  className="px-8"
                >
                  ← Back
                </Button>
                <Button
                  onClick={handleBookingSubmit}
                  disabled={!formData.name || !formData.email || !formData.phone}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg h-12"
                >
                  Confirm Booking →
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmation */}
        {step === "confirmation" && selectedServiceData && (
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
            <CardHeader className="pb-6">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-green-900 text-3xl mb-2">Booking Confirmed!</CardTitle>
                <CardDescription className="text-green-800 text-lg">
                  Your appointment has been successfully scheduled
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-xl p-8 shadow-inner space-y-5">
                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600 mb-1">Service</p>
                  <p className="text-xl font-medium text-gray-900">{selectedServiceData.name}</p>
                </div>
                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                  <p className="text-xl font-medium text-gray-900">
                    {selectedDate?.toLocaleDateString()} at {selectedTime}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <p className="text-lg font-medium text-gray-900">{selectedServiceData.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Price</p>
                    <p className="text-lg font-medium text-green-600">{selectedServiceData.price}</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-900 mb-2 font-medium flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Confirmation sent to {formData.email}
                  </p>
                  <p className="text-sm text-blue-800">
                    You will receive a reminder 24 hours before your appointment.
                  </p>
                </div>
              </div>
              <Button
                className="w-full mt-6 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-base"
                onClick={() => {
                  setStep("service");
                  setSelectedService(null);
                  setSelectedDate(new Date());
                  setSelectedTime(null);
                  setFormData({ name: "", email: "", phone: "", notes: "" });
                }}
              >
                Book Another Appointment
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}