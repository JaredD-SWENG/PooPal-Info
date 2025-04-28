import React, { useState } from 'react';
import { Home, Award, Shield, Activity, ChevronRight, Download, Menu, X, Play, ExternalLink, Calendar, BarChart2, MessageSquare, FileText, Wrench, WrenchIcon, AppleIcon, PhoneIcon, SmartphoneIcon, MedalIcon } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-md overflow-hidden">
              <img src="/poopal_logo.webp" alt="PooPal Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold">PooPal</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="font-medium hover:text-emerald-500 transition">Features</a>
            <a href="#technology" className="font-medium hover:text-emerald-500 transition">Technology</a>
            <a href="#benefits" className="font-medium hover:text-emerald-500 transition">Benefits</a>
          </div>
          
          <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-md font-medium transition">
            <a href="#contact" className="text-white">Contact Us</a>
          </button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="font-medium hover:text-emerald-500 transition" onClick={toggleMenu}>Features</a>
              <a href="#technology" className="font-medium hover:text-emerald-500 transition" onClick={toggleMenu}>Technology</a>
              <a href="#benefits" className="font-medium hover:text-emerald-500 transition" onClick={toggleMenu}>Benefits</a>
              <a href="#download" className="font-medium hover:text-emerald-500 transition" onClick={toggleMenu}>Download</a>
              <button className="hidden md:block bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-md font-medium transition">
                <a href="#contact" className="text-white">Contact Us</a>
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Your Smart Stool Tool</h1>
            <p className="text-lg text-slate-600 mb-8">
              A comprehensive gut health tracking system with hardware and mobile app components. PooPal provides automated, hassle-free stool monitoring without the discomfort of manual fecal sampling.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://appdistribution.firebase.dev/i/cc788b4e446ffc75" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-8 rounded-md font-medium transition flex items-center justify-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Test PooPal Now!
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-2">Click here to test PooPal (follow the invite instructions to install PooPal)</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200">
                <div className="aspect-w-16 aspect-h-9 rounded-lg mb-6 overflow-hidden">
                  <iframe 
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/s5pUFncUx-8" 
                    title="PooPal Demo Video"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2">PooPal Demo</h3>
                <p className="text-slate-600 mb-4">
                  Smart monitoring system that attaches to any standard toilet, providing automated gut health tracking with AI and accompanying mobile app.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-500 font-medium">Available Now</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">Beta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PooPal GIF Section - Enhanced */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-100 to-emerald-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Smart Tracking at Your Fingertips!</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-2">
              Our mobile app puts gut health tracking at your fingertips with an intuitive interface
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="max-w-xs">
              <div className="bg-white p-2 rounded-3xl shadow-lg border-4 border-slate-200">
                <img 
                  src="/poopal.gif" 
                  alt="PooPal Mobile App Demo" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
            <div className="max-w-sm text-left">
              <h3 className="text-xl font-semibold mb-3 text-emerald-700">Effortless Tracking</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>View your gut health logs in a clean calendar interface</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Navigate between daily, weekly and monthly views</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Get AI-powered insights about your digestive patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Share reports with healthcare providers with one tap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Components</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              PooPal combines advanced hardware and AI technology to provide a seamless health monitoring experience.
            </p>
          </div>
          
          {/* Hardware Component */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <WrenchIcon className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Hardware Component </h3>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 shadow-sm">
              <p className="text-lg mb-6">
                The hardware consists of a Raspberry Pi Zero with a camera and three color-coded buttons housed in a custom 3D-printed enclosure.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Features:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Color-coded buttons (red, green, yellow) for family member identification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>HD Low-light Camera for capturing stool samples</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>LED indicator for status feedback</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Firebase integration for secure image storage and classification</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-semibold mb-4">How it works:</h4>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-emerald-200 px-2 py-1 rounded-full mr-3 text-emerald-800 font-medium text-sm">1</div>
                  <span>Long press your assigned color button</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-200 px-2 py-1 rounded-full mr-3 text-emerald-800 font-medium text-sm">2</div>
                  <span>LED blinks to confirm capture</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-200 px-2 py-1 rounded-full mr-3 text-emerald-800 font-medium text-sm">3</div>
                  <span>Image is automatically captured and uploaded to Firebase</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-200 px-2 py-1 rounded-full mr-3 text-emerald-800 font-medium text-sm">4</div>
                  <span>AI analyzes the image and classifies according to the Bristol Stool Chart</span>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Mobile App Component */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <SmartphoneIcon className="text-emerald-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Mobile Application</h3>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 shadow-sm">
              <p className="text-lg mb-6">
                The Flutter-based mobile app provides a comprehensive interface for tracking and analyzing gut health data.
              </p>
              
              <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <FileText className="text-emerald-600" size={20} />
                    </div>
                    <h5 className="text-lg font-semibold">Logs Screen</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>View chronological history of all bowel movements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>AI-generated descriptions using Google's Gemini model</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Bristol Stool Chart classification for each entry</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Image privacy controls (tap to reveal)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="text-emerald-600" size={20} />
                    </div>
                    <h5 className="text-lg font-semibold">Calendar Screen</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Track bowel movement frequency and consistency over time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Toggle between weekly and monthly views</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <BarChart2 className="text-emerald-600" size={20} />
                    </div>
                    <h5 className="text-lg font-semibold">Analytics</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Distribution charts of stool types</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Trend analysis over time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Personalized insights based on your data</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <MessageSquare className="text-emerald-600" size={20} />
                    </div>
                    <h5 className="text-lg font-semibold">Chat Assistant</h5>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>AI-powered health assistant</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Contextual awareness of your stool history</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Answer questions about gut health</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                        <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                      </div>
                      <span>Export comprehensive PDF reports for medical consultations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section id="technology" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              PooPal uses advanced technology to deliver a seamless experience.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Hardware Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Raspberry Pi Zero 2 W as the main processing unit</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Low-light HD camera for image capture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Color-coded buttons for user differentiation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Secure local storage for temporary data</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-slate-50">
                <h3 className="text-2xl font-semibold mb-4">Software Architecture</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Python-based image processing pipeline</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>LLM integration for natural language descriptions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>Flutter-based cross-platform mobile application</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-emerald-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <span>End-to-end encryption for data transmission</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Demo Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See PooPal in Action</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Watch our video to see how PooPal works and how it can transform your approach to gut health monitoring.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-white shadow-lg rounded-xl overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/s5pUFncUx-8" 
                title="PooPal Demo Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
            <div className="flex justify-center mt-8">
              <a 
                href="https://appdistribution.firebase.dev/i/cc788b4e446ffc75" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-8 rounded-md font-medium transition"
              >
                <ExternalLink size={18} className="mr-2" />
                Test Our App Now
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-emerald-500 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              PooPal delivers immediate advantages for individuals monitoring their gut health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-600 bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-emerald-400">
              <h3 className="text-xl font-semibold mb-4">For Individuals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Elimination of manual tracking and visual inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Reduced psychological burden and increased compliance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Continuous health monitoring without user intervention</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Early detection of potential health issues</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-600 bg-opacity-80 rounded-xl p-6 shadow-md backdrop-blur-sm border border-emerald-400">
              <h3 className="text-xl font-semibold mb-4">For Healthcare Providers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Accurate, consistent longitudinal data</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Improved diagnosis and treatment monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Easy integration with electronic health records</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white bg-opacity-30 p-1 rounded-full mr-3 mt-1">
                    <div className="bg-white w-2 h-2 rounded-full"></div>
                  </div>
                  <span>Data-driven insights for personalized care plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
              {/* Awards and Recognition Section - NEW */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {/* Award 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="h-24 bg-emerald-500 flex items-center justify-center">
                  <MedalIcon className="text-white" size={56} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">Penn State Nittany AI Challenge - 1st Place</h3>
                    <span className="text-emerald-500 text-sm font-medium">2025</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Won 1st place in Penn State's premier Nittany AI Challenge - AI for Good. Awarded $5,500 in funding to continue the project. 
                  </p>
                </div>
              </div>
              
              {/* Award 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
                <div className="h-24 bg-slate-700 flex items-center justify-center">
                  <Award className="text-white" size={56} />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold">PIT-UN Grant</h3>
                    <span className="text-emerald-500 text-sm font-medium">2025</span>
                  </div>
                  <p className="text-slate-600 text-sm">
                    Received a grant worth $3,750 from The Public Interest Technology University Network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-10 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-md overflow-hidden">
                  <img src="/poopal_logo.webp" alt="PooPal Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-lg font-bold">PooPal</span>
              </div>
              <p className="text-slate-400 text-sm">
                Trust your Gut. Trust PooPal. 
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
              </ul>
            </div>
            
            <div id="contact">
              <div>
                <h4 className="font-medium mb-4">Contact Us</h4>
                <p className="text-slate-400 text-sm mb-4">
                  For inquiries, reach out to us via email: 
                </p>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center">
                  <span className="mr-2"></span>
                  <span> <a href="mailto:jjd6385@psu.edu" className="text-emerald-400 hover:text-white transition">Jared Daniel</a></span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2"></span>
                  <span> <a href="mailto:aad5609@psu.edu" className="text-emerald-400 hover:text-white transition">Alysse Deterville</a></span>
                </li>
              </ul>
            </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; 2025 PooPal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;