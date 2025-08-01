import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Users,
    BookOpen,
    Calendar,
    BarChart3,
    Shield,
    Clock,
    CheckCircle,
    Play,
    ArrowRight,
    Star,

    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram
} from 'lucide-react';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: "Dr. Sarah Johnson",
            role: "Academic Director",
            institution: "Springfield University",
            content: "Markit has revolutionized how we track attendance. The automated reports save us hours every week.",
            rating: 5
        },
        {
            name: "Prof. Michael Chen",
            role: "Computer Science Lecturer",
            institution: "Tech Institute",
            content: "The role-based access and intuitive interface make attendance management effortless for our faculty.",
            rating: 5
        },
        {
            name: "Emma Rodriguez",
            role: "Administrative Coordinator",
            institution: "City College",
            content: "Real-time analytics and comprehensive reporting have improved our attendance tracking by 300%.",
            rating: 5
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const Header = () => (
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Markit
        </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
    <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Features</a>
        <a href="#roles" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Access Levels</a>
    <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Testimonials</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
        Get Started
    </button>
    </nav>

    <button
    onClick={() => setIsMenuOpen(!isMenuOpen)}
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
        </div>

    {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
        <div className="px-4 py-4 space-y-4">
        <a href="#features" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Features</a>
        <a href="#roles" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Access Levels</a>
    <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Testimonials</a>
        <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
        Get Started
    </button>
    </div>
    </div>
    )}
    </header>
);

    const Footer = () => (
        <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
        <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Markit</span>
        </div>
        <p className="text-gray-400 leading-relaxed">
        Revolutionizing student attendance management with intelligent automation and comprehensive analytics.
    </p>
    <div className="flex space-x-4">
    <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
    <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
    <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
    <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
    </div>
    </div>

    <div>
    <h3 className="text-lg font-semibold mb-4">Product</h3>
        <ul className="space-y-2 text-gray-400">
    <li><a href="#" className="hover:text-white transition-colors duration-200">Features</a></li>
    <li><a href="#" className="hover:text-white transition-colors duration-200">Pricing</a></li>
    <li><a href="#" className="hover:text-white transition-colors duration-200">API</a></li>
    <li><a href="#" className="hover:text-white transition-colors duration-200">Integrations</a></li>
    </ul>
    </div>

    <div>
    <h3 className="text-lg font-semibold mb-4">Support</h3>
        <ul className="space-y-2 text-gray-400">
    <li><a href="#" className="hover:text-white transition-colors duration-200">Documentation</a></li>
    <li><a href="#" className="hover:text-white transition-colors duration-200">Help Center</a></li>
    <li><a href="#" className="hover:text-white transition-colors duration-200">Community</a></li>
    <li><a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a></li>
    </ul>
    </div>

    <div>
    <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
    <div className="space-y-3 text-gray-400">
    <div className="flex items-center space-x-3">
    <Mail className="w-4 h-4" />
        <span>contact@markit.edu</span>
    </div>
    <div className="flex items-center space-x-3">
    <Phone className="w-4 h-4" />
        <span>+1 (555) 123-4567</span>
    </div>
    <div className="flex items-center space-x-3">
    <MapPin className="w-4 h-4" />
        <span>123 Education St, Tech City</span>
    </div>
    </div>
    </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Markit. All rights reserved. | Privacy Policy | Terms of Service</p>
    </div>
    </div>
    </footer>
);

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-8">
    <div className="space-y-4">
    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  🎯 Next-Gen Attendance Management
    </div>
    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Transform Your
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Attendance </span>
    Management
    </h1>
    <p className="text-xl text-gray-600 leading-relaxed">
        Streamline student attendance tracking with intelligent automation, comprehensive reporting, and role-based access control. Built for modern educational institutions.
    </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4">
    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 group">
    <span className="font-semibold">Start Free Trial</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group">
    <Play className="w-5 h-5" />
    <span className="font-semibold">Watch Demo</span>
    </button>
    </div>

    <div className="flex items-center space-x-8 text-sm text-gray-600">
    <div className="flex items-center space-x-2">
    <CheckCircle className="w-5 h-5 text-green-500" />
        <span>Free 30-day trial</span>
    </div>
    <div className="flex items-center space-x-2">
    <CheckCircle className="w-5 h-5 text-green-500" />
        <span>No credit card required</span>
    </div>
    </div>
    </div>

    <div className="relative">
    <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
    <div className="flex items-center space-x-2">
    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        </div>
        </div>
        <div className="p-8 space-y-6">
    <div className="flex items-center justify-between">
    <h3 className="text-lg font-semibold text-gray-900">Today's Classes</h3>
    <span className="text-sm text-gray-500">March 15, 2025</span>
    </div>

    <div className="space-y-4">
        {[
                { course: "CS101", time: "09:00 AM", attendance: "24/25", status: "active" },
    { course: "MATH201", time: "11:00 AM", attendance: "18/20", status: "completed" },
    { course: "ENG105", time: "02:00 PM", attendance: "0/22", status: "upcoming" }
].map((class_, i) => (
        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
    <div className="flex items-center space-x-3">
    <div className={`w-3 h-3 rounded-full ${
        class_.status === 'active' ? 'bg-green-500 animate-pulse' :
            class_.status === 'completed' ? 'bg-blue-500' : 'bg-gray-400'
    }`}></div>
    <div>
    <p className="font-medium text-gray-900">{class_.course}</p>
        <p className="text-sm text-gray-500">{class_.time}</p>
        </div>
        </div>
        <span className="text-sm font-medium text-gray-700">{class_.attendance}</span>
        </div>
))}
    </div>
    </div>
    </div>

    {/* Floating elements */}
    <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
        </div>
        </div>
        </div>
        </section>

    {/* Features Section */}
    <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
    <h2 className="text-4xl font-bold text-gray-900">Powerful Features</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Everything you need to manage student attendance efficiently and effectively
    </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
                {
                    icon: <Users className="w-8 h-8" />,
                    title: "Student Management",
                    description: "Comprehensive student profiles with registration details, course enrollment, and contact information management.",
                    color: "bg-blue-500"
                },
    {
        icon: <BookOpen className="w-8 h-8" />,
            title: "Course & Subject Management",
        description: "Organize courses, subjects, and curriculum with flexible categorization and assignment capabilities.",
        color: "bg-green-500"
    },
    {
        icon: <Calendar className="w-8 h-8" />,
            title: "Smart Scheduling",
        description: "Intelligent class scheduling with conflict detection and automated notifications for all stakeholders.",
        color: "bg-purple-500"
    },
    {
        icon: <CheckCircle className="w-8 h-8" />,
            title: "Quick Attendance Marking",
        description: "Fast and intuitive attendance marking with bulk operations and real-time synchronization.",
        color: "bg-orange-500"
    },
    {
        icon: <BarChart3 className="w-8 h-8" />,
            title: "Advanced Analytics",
        description: "Comprehensive reports with attendance trends, patterns analysis, and predictive insights.",
        color: "bg-red-500"
    },
    {
        icon: <Clock className="w-8 h-8" />,
            title: "Real-time Tracking",
        description: "Live attendance monitoring with instant notifications and automated alert systems.",
        color: "bg-teal-500"
    }
].map((feature, i) => (
        <div key={i} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
    {feature.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
))}
    </div>
    </div>
    </section>

    {/* Role-based Access Section */}
    <section id="roles" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
    <h2 className="text-4xl font-bold text-gray-900">Role-Based Access Control</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Secure, customizable access levels designed for educational institutions
    </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="space-y-8">
        {[
                {
                    role: "Administrator",
                    icon: <Shield className="w-6 h-6" />,
                    permissions: ["Full system access", "User management", "System configuration", "Advanced reporting"],
                    color: "bg-red-500"
                },
    {
        role: "Lecturer",
            icon: <BookOpen className="w-6 h-6" />,
        permissions: ["Mark attendance", "View assigned classes", "Generate class reports", "Student interaction"],
        color: "bg-blue-500"
    },
    {
        role: "Academic Staff",
            icon: <Users className="w-6 h-6" />,
        permissions: ["View attendance reports", "Student management", "Course oversight", "Analytics access"],
        color: "bg-green-500"
    }
].map((role, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center space-x-4 mb-4">
    <div className={`w-12 h-12 ${role.color} rounded-xl flex items-center justify-center text-white`}>
    {role.icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{role.role}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
        {role.permissions.map((permission, j) => (
                <div key={j} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">{permission}</span>
                </div>
))}
    </div>
    </div>
))}
    </div>

    <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
    <h3 className="text-2xl font-bold mb-2">Access Dashboard</h3>
    <p className="opacity-90">Personalized experience for every user role</p>
    </div>
    <div className="p-8">
    <div className="space-y-4">
    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
    <span className="font-medium text-gray-900">Dashboard Access</span>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
    <span className="font-medium text-gray-900">Attendance Marking</span>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
    <span className="font-medium text-gray-900">Advanced Reports</span>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
    <span className="font-medium text-gray-900">System Configuration</span>
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>

    {/* Testimonials Section */}
    <section id="testimonials" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
    <h2 className="text-4xl font-bold text-gray-900">What Educators Say</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Trusted by educational institutions worldwide
    </p>
    </div>

    <div className="relative max-w-4xl mx-auto">
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
    <div className="text-center space-y-6">
    <div className="flex justify-center space-x-1">
        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
))}
    </div>
    <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed">
        "{testimonials[currentTestimonial].content}"
        </blockquote>
        <div className="space-y-2">
    <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
        <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
        <p className="text-sm text-gray-500">{testimonials[currentTestimonial].institution}</p>
        </div>
        </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, i) => (
                <button
                    key={i}
            onClick={() => setCurrentTestimonial(i)}
    className={`w-3 h-3 rounded-full transition-all duration-200 ${
        i === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
    }`}
    />
))}
    </div>
    </div>
    </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="space-y-8">
    <h2 className="text-4xl md:text-5xl font-bold text-white">
        Ready to Transform Your Institution?
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educational institutions already using Markit to streamline their attendance management.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl font-semibold">
        Start Free Trial
    </button>
    <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
        Schedule Demo
    </button>
    </div>
    </div>
    </div>
    </section>

    <Footer />
    </div>
);
};

export default Home;