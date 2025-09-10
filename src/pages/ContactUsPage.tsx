import React, { useState } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Shield,
    Zap,
    TrendingUp,
    CheckCircle,
    Send,
    User,
    Building,
    DollarSign,
    Calendar,
    MessageSquare,
    Linkedin,
    Twitter,
    Globe as GlobeIcon,
    Award,
    Users,
    Star,
    Building2,
} from 'lucide-react';
import { Globe } from '../components/magicui/globe';
import { useNavigate } from 'react-router-dom';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    propertyInterest: string;
    budgetRange: string;
    timeline: string;
    preferredContact: string;
    message: string;
}

const initialFormData: ContactFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    propertyInterest: '',
    budgetRange: '',
    timeline: '',
    preferredContact: 'email',
    message: ''
};

export const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<ContactFormData>>({});

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const navigate = useNavigate();

    const resetForm = () => {
        setFormData(initialFormData);
        setIsSubmitted(false);
        setErrors({});
    };

    const globeConfig = {
        width: 800,
        height: 800,
        onRender: () => { },
        devicePixelRatio: 2,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 0.4,
        mapSamples: 16000,
        mapBrightness: 1.2,
        baseColor: [59 / 255, 130 / 255, 246 / 255] as [number, number, number],
        markerColor: [16 / 255, 185 / 255, 129 / 255] as [number, number, number],
        glowColor: [59 / 255, 130 / 255, 246 / 255] as [number, number, number],
        markers: [
            { location: [40.7128, -74.006] as [number, number], size: 0.1 },
            { location: [34.0522, -118.2437] as [number, number], size: 0.08 },
            { location: [25.7617, -80.1918] as [number, number], size: 0.07 },
            { location: [51.5074, -0.1278] as [number, number], size: 0.09 },
            { location: [35.6762, 139.6503] as [number, number], size: 0.08 },
            { location: [1.3521, 103.8198] as [number, number], size: 0.06 },
            { location: [55.7558, 37.6176] as [number, number], size: 0.07 },
            { location: [-33.8688, 151.2093] as [number, number], size: 0.06 },
        ],
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.04),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.04),transparent_50%)]"></div>
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-emerald-200/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Hero Section */}
            <section className="relative pt-24 pb-10 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-blue-200/30 rounded-full px-6 py-2 mb-6">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">Blockchain-Powered Real Estate</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                        Let's Find Your
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                            Dream Property
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-300 max-w-3xl mx-auto">
                        Connect with our expert team to discover premium properties and blockchain investment opportunities tailored to your goals.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 animate-fade-in delay-500">
                        <div className="flex items-center space-x-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>Expert Consultation</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>Blockchain Verified</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Globe Section */}
            <section className="relative  ">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="relative flex items-center justify-center">
                        <div className="relative w-full max-w-[600px] h-[600px] mx-auto">
                            <Globe className="w-full h-full" config={globeConfig} />

                            {/* Floating Elements around Globe */}
                            <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-float">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                        <Building2 className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">NYC Properties</p>
                                        <p className="text-sm text-gray-600">2,847 Available</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-20 right-10 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-float delay-1000">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Market Growth</p>
                                        <p className="text-sm text-emerald-600">+12.5% This Month</p>
                                    </div>
                                </div>
                            </div>

<div className="absolute bottom-20 left-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-float delay-500 hidden md:block">                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">NFT Properties</p>
                                        <p className="text-sm text-purple-600">342 Verified</p>
                                    </div>
                                </div>
                            </div>

<div className="absolute bottom-10 right-20 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20 animate-float delay-1500 hidden md:block">                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Happy Clients</p>
                                        <p className="text-sm text-orange-600">4,500+ Worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12">
                            {!isSubmitted ? (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                            Get in Touch
                                        </h2>
                                        <p className="text-gray-600 text-lg">
                                            Tell us about your property goals and we'll match you with the perfect opportunities.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <User className="w-4 h-4 inline mr-2" />
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                                        }`}
                                                    placeholder="Your full name"
                                                />
                                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Mail className="w-4 h-4 inline mr-2" />
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                                        }`}
                                                    placeholder="your@email.com"
                                                />
                                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Phone className="w-4 h-4 inline mr-2" />
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="+1 (555) 123-4567"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Building className="w-4 h-4 inline mr-2" />
                                                    Company (Optional)
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Property Interest
                                                </label>
                                                <select
                                                    value={formData.propertyInterest}
                                                    onChange={(e) => handleInputChange('propertyInterest', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                >
                                                    <option value="">Select property type</option>
                                                    <option value="residential">Residential</option>
                                                    <option value="commercial">Commercial</option>
                                                    <option value="luxury">Luxury Properties</option>
                                                    <option value="nft">NFT Properties</option>
                                                    <option value="investment">Investment Properties</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <DollarSign className="w-4 h-4 inline mr-2" />
                                                    Budget Range
                                                </label>
                                                <select
                                                    value={formData.budgetRange}
                                                    onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="under-500k">Under $500K</option>
                                                    <option value="500k-1m">$500K - $1M</option>
                                                    <option value="1m-2m">$1M - $2M</option>
                                                    <option value="2m-5m">$2M - $5M</option>
                                                    <option value="5m-plus">$5M+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Calendar className="w-4 h-4 inline mr-2" />
                                                    Timeline
                                                </label>
                                                <select
                                                    value={formData.timeline}
                                                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                >
                                                    <option value="">Select timeline</option>
                                                    <option value="asap">ASAP</option>
                                                    <option value="3-months">Within 3 months</option>
                                                    <option value="6-months">Within 6 months</option>
                                                    <option value="1-year">Within 1 year</option>
                                                    <option value="exploring">Just exploring</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Preferred Contact Method
                                                </label>
                                                <select
                                                    value={formData.preferredContact}
                                                    onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                >
                                                    <option value="email">Email</option>
                                                    <option value="phone">Phone</option>
                                                    <option value="both">Both</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                <MessageSquare className="w-4 h-4 inline mr-2" />
                                                Message *
                                            </label>
                                            <textarea
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => handleInputChange('message', e.target.value)}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                                                    }`}
                                                placeholder="Tell us about your property goals, specific requirements, or any questions you have..."
                                            ></textarea>
                                            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                    <span>Sending Message...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                                        <CheckCircle className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                                    <p className="text-gray-600 mb-6 text-lg">
                                        Thank you for contacting us! Our expert team will review your message and get back to you within 24 hours.
                                    </p>
                                    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg p-6 mb-6">
                                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                                            <div className="flex items-center space-x-2">
                                                <Clock className="w-4 h-4" />
                                                <span>Response within 24h</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Shield className="w-4 h-4" />
                                                <span>Secure & Confidential</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={resetForm}
                                        className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-semibold transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Additional Content Cards to Fill Space */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {/* FAQ Section */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">How do blockchain properties work?</h4>
                                        <p className="text-sm text-gray-600">Properties are tokenized as NFTs, ensuring transparent ownership and secure transactions on the blockchain.</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">What are the benefits?</h4>
                                        <p className="text-sm text-gray-600">Instant verification, global accessibility, fractional ownership, and reduced transaction costs.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Is it secure?</h4>
                                        <p className="text-sm text-gray-600">Yes, all transactions are cryptographically secured and immutable on the blockchain.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Process Steps */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Process</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Consultation</h4>
                                            <p className="text-sm text-gray-600">We understand your needs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Property Match</h4>
                                            <p className="text-sm text-gray-600">Find perfect properties</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Secure Transaction</h4>
                                            <p className="text-sm text-gray-600">Blockchain-verified purchase</p>
                                        </div>

                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                                            <p className="text-sm text-gray-600">Post-purchase assistance & portfolio management</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Contact Details */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">sales@propchain.com</p>
                                        <p className="text-gray-600">support@propchain.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                                        <p className="text-gray-600">+1 (555) 123-PROP</p>
                                        <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                                        <p className="text-gray-600">123 Blockchain Ave</p>
                                        <p className="text-gray-600">New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                                        <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                                        <p className="text-gray-600">Sat-Sun: 10AM-4PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Team Member */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Meet Our Expert</h3>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <User className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">Sarah Johnson</h4>
                                <p className="text-blue-600 font-medium mb-4">Senior Property Consultant</p>

                                <div className="space-y-2 text-sm text-gray-600 mb-6">
                                    <div className="flex items-center justify-center space-x-2">
                                        <Award className="w-4 h-4 text-yellow-500" />
                                        <span>8+ Years Experience</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span>Blockchain Certified</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2 ">
                                        <Users className="w-4 h-4 text-blue-500" />
                                        <span>500+ Happy Clients</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">
                                    "I specialize in luxury properties and blockchain-based real estate investments. Let's find your perfect property!"
                                </p>

                                <div className="flex justify-center space-x-3">
                                    <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl shadow-2xl p-8 text-white">
                            <h3 className="text-xl font-bold mb-6">Why Choose PropChain?</h3>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Shield className="w-6 h-6 text-blue-200 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Blockchain Security</p>
                                        <p className="text-sm text-blue-100">Every transaction verified</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Zap className="w-6 h-6 text-emerald-200 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Fast Processing</p>
                                        <p className="text-sm text-emerald-100">Quick approvals & closings</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <TrendingUp className="w-6 h-6 text-purple-200 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Expert Guidance</p>
                                        <p className="text-sm text-purple-100">Market insights & advice</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <GlobeIcon className="w-6 h-6 text-yellow-200 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">Global Reach</p>
                                        <p className="text-sm text-yellow-100">Worldwide property access</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Enhanced Stats Section */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Transforming Real Estate Globally
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our innovative blockchain platform is revolutionizing how people buy, sell, and invest in properties worldwide
                        </p>
                    </div>

                    {/* Interactive Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div className="group relative">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Building2 className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">2,847+</div>
                                <div className="text-gray-600 font-medium mb-3">Properties Sold</div>
                                <div className="text-xs text-blue-600 bg-blue-50 rounded-full px-3 py-1 inline-block">
                                    +15% This Month
                                </div>
                            </div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <DollarSign className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">$8.2B+</div>
                                <div className="text-gray-600 font-medium mb-3">Total Volume</div>
                                <div className="text-xs text-emerald-600 bg-emerald-50 rounded-full px-3 py-1 inline-block">
                                    Record High
                                </div>
                            </div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">4,500+</div>
                                <div className="text-gray-600 font-medium mb-3">Happy Clients</div>
                                <div className="text-xs text-purple-600 bg-purple-50 rounded-full px-3 py-1 inline-block">
                                    Worldwide
                                </div>
                            </div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                        </div>

                        <div className="group relative">
                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <Star className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">99.8%</div>
                                <div className="text-gray-600 font-medium mb-3">Satisfaction Rate</div>
                                <div className="text-xs text-orange-600 bg-orange-50 rounded-full px-3 py-1 inline-block">
                                    Industry Leading
                                </div>
                            </div>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur"></div>
                        </div>
                    </div>

                    {/* Call to Action Banner */}
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_60%)]"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Join the Future of Real Estate?
                            </h3>
                            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                Start your journey with blockchain-powered property investments today
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/listings')}
                                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Get Started Now
                                </button>

                                <button
                                    onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                                    Schedule Demo
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};