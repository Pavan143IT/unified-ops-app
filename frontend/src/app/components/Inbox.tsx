import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Mail,
  Clock,
  FileText
} from "lucide-react";
import { MessageSquare } from "lucide-react";

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  status: "unread" | "pending" | "form";
}

interface Message {
  id: number;
  contactId: number;
  sender: "user" | "contact";
  text: string;
  time: string;
}

export function Inbox() {
  const [selectedContact, setSelectedContact] = useState<number | null>(1);
  const [filter, setFilter] = useState<"all" | "unread" | "pending" | "forms">("all");
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Emma Wilson",
      lastMessage: "Thank you for the confirmation!",
      time: "2m ago",
      unread: 2,
      status: "unread"
    },
    {
      id: 2,
      name: "Michael Chen",
      lastMessage: "Can I reschedule my appointment?",
      time: "15m ago",
      unread: 1,
      status: "pending"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      lastMessage: "Submitted intake form",
      time: "1h ago",
      unread: 0,
      status: "form"
    },
    {
      id: 4,
      name: "David Brown",
      lastMessage: "Looking forward to our session",
      time: "2h ago",
      unread: 0,
      status: "unread"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      lastMessage: "Quick question about pricing",
      time: "3h ago",
      unread: 3,
      status: "pending"
    },
    {
      id: 6,
      name: "James Martinez",
      lastMessage: "Completed feedback form",
      time: "5h ago",
      unread: 0,
      status: "form"
    },
    {
      id: 7,
      name: "Olivia Taylor",
      lastMessage: "Thanks for your help!",
      time: "1d ago",
      unread: 0,
      status: "unread"
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      contactId: 1,
      sender: "contact",
      text: "Hi! I'd like to book an appointment for next week.",
      time: "10:30 AM"
    },
    {
      id: 2,
      contactId: 1,
      sender: "user",
      text: "Hello Emma! I'd be happy to help you with that. What day works best for you?",
      time: "10:32 AM"
    },
    {
      id: 3,
      contactId: 1,
      sender: "contact",
      text: "Tuesday afternoon would be perfect if available.",
      time: "10:35 AM"
    },
    {
      id: 4,
      contactId: 1,
      sender: "user",
      text: "Great! I have a slot available at 2:00 PM on Tuesday. I'll send you a confirmation.",
      time: "10:36 AM"
    },
    {
      id: 5,
      contactId: 1,
      sender: "contact",
      text: "Thank you for the confirmation!",
      time: "10:38 AM"
    }
  ];

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filter === "all") return true;
    if (filter === "unread") return contact.unread > 0;
    if (filter === "pending") return contact.status === "pending";
    if (filter === "forms") return contact.status === "form";
    return true;
  });

  const selectedContactData = contacts.find((c) => c.id === selectedContact);
  const contactMessages = messages.filter((m) => m.contactId === selectedContact);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message
      setMessageText("");
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Inbox</h1>
              <p className="text-blue-100">Manage all your conversations in one place</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <Card className="overflow-hidden border-0 shadow-2xl bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 h-[calc(100vh-200px)]">
            {/* Left Panel - Contacts */}
            <div className="border-r border-gray-200 flex flex-col">
              {/* Search and Filter */}
              <div className="p-4 border-b space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search contacts..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Tabs value={filter} onValueChange={(v) => setFilter(v as any)}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all" className="text-xs">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="text-xs">
                      <Mail className="w-3 h-3 mr-1" />
                      Unread
                    </TabsTrigger>
                    <TabsTrigger value="pending" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      Pending
                    </TabsTrigger>
                    <TabsTrigger value="forms" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      Forms
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Contact List */}
              <ScrollArea className="flex-1">
                <div className="divide-y">
                  {filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedContact === contact.id ? "bg-blue-50" : ""
                      }`}
                      onClick={() => setSelectedContact(contact.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-600 text-white">
                            {getInitials(contact.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium truncate">{contact.name}</p>
                            {contact.unread > 0 && (
                              <Badge className="bg-blue-600 text-white ml-2">
                                {contact.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-gray-500">{contact.time}</p>
                            {contact.status === "pending" && (
                              <Badge variant="outline" className="text-xs">
                                Pending
                              </Badge>
                            )}
                            {contact.status === "form" && (
                              <Badge variant="outline" className="text-xs">
                                <FileText className="w-3 h-3 mr-1" />
                                Form
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {/* Right Panel - Messages */}
            <div className="col-span-2 flex flex-col">
              {selectedContactData ? (
                <>
                  {/* Contact Header */}
                  <div className="p-4 border-b bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-600 text-white">
                          {getInitials(selectedContactData.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{selectedContactData.name}</p>
                        <p className="text-sm text-gray-600">Active now</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {contactMessages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-900"
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p
                              className={`text-xs mt-1 ${
                                message.sender === "user" ? "text-blue-100" : "text-gray-500"
                              }`}
                            >
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="p-4 border-t bg-white">
                    <div className="flex items-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="w-4 h-4" />
                      </Button>
                      <Input
                        placeholder="Type a message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSendMessage();
                          }
                        }}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} disabled={!messageText.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <div className="text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Select a contact to view messages</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}