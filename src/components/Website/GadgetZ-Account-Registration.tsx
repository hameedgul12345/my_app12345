// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    nationality: '',
    language: '',
    gender: '',
    agreeTerms: false
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    nationality: '',
    language: '',
    gender: '',
    agreeTerms: ''
  });

  useEffect(() => {
    setIsLoaded(true);

    // Check for saved form data
    const savedData = localStorage.getItem('registrationFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(prevData => ({
          ...prevData,
          ...parsedData
        }));
      } catch (e) {
        console.error('Error parsing saved form data');
      }
    }

    return () => {
      // Save form data when component unmounts
      localStorage.setItem('registrationFormData', JSON.stringify(formData));
    };
  }, []);

  useEffect(() => {
    // Password strength checker
    if (formData.password) {
      let strength = 0;
      if (formData.password.length >= 8) strength += 1;
      if (/[A-Z]/.test(formData.password)) strength += 1;
      if (/[0-9]/.test(formData.password)) strength += 1;
      if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;
      setPasswordStrength(strength);
    } else {
      setPasswordStrength(0);
    }
  }, [formData.password]);

  const validateField = (name: string, value: string | boolean) => {
    let error = '';
    
    switch (name) {
      case 'firstName':
        if (!value) error = 'First name is required';
        break;
      case 'lastName':
        if (!value) error = 'Last name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value as string)) {
          error = 'Email is invalid';
        }
        break;
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if ((value as string).length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      case 'dateOfBirth':
        if (!value) error = 'Date of birth is required';
        break;
      case 'nationality':
        if (!value) error = 'Nationality is required';
        break;
      case 'language':
        if (!value) error = 'Language is required';
        break;
      case 'gender':
        if (!value) error = 'Gender is required';
        break;
      case 'agreeTerms':
        if (!value) error = 'You must agree to the terms and conditions';
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const fieldValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: fieldValue
    }));

    // Validate field on change
    if (Object.keys(formErrors).includes(name)) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: validateField(name, fieldValue)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
      dateOfBirth: validateField('dateOfBirth', formData.dateOfBirth),
      nationality: validateField('nationality', formData.nationality),
      language: validateField('language', formData.language),
      gender: validateField('gender', formData.gender),
      agreeTerms: validateField('agreeTerms', formData.agreeTerms)
    };
    
    setFormErrors(errors);
    
    // Check if there are any errors
    if (!Object.values(errors).some(error => error !== '')) {
      // Form is valid, proceed with submission
      console.log('Form submitted successfully', formData);
      
      // Clear saved form data
      localStorage.removeItem('registrationFormData');
      
      // Here you would typically send the data to your backend
      alert('Account created successfully! Redirecting to login...');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        nationality: '',
        language: '',
        gender: '',
        agreeTerms: false
      });
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      nationality: '',
      language: '',
      gender: '',
      agreeTerms: false
    });
    setFormErrors({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      nationality: '',
      language: '',
      gender: '',
      agreeTerms: ''
    });
    localStorage.removeItem('registrationFormData');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-[#2a1e1e] text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl font-bold">GadgetZ</h1>
          </div>
          <a 
            href="#" 
            className="text-white hover:text-[#ff5733] transition-colors duration-300 cursor-pointer flex items-center"
          >
            <i className="fas fa-home mr-2"></i>
            Back to Home
          </a>
        </div>
      </header>

      {/* Registration Form Section */}
      <section className={`flex-grow py-12 px-6 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000`}>
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2 relative overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20electronic%20gadgets%20and%20devices%20arranged%20in%20an%20aesthetic%20display%20with%20soft%20lighting%20and%20minimalist%20background%2C%20showcasing%20smartphones%2C%20tablets%2C%20smartwatches%2C%20and%20headphones%20with%20a%20clean%20and%20professional%20presentation%20style&width=800&height=1024&seq=123456&orientation=portrait" 
                alt="Gadgets and Electronics" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h2 className="text-white text-3xl font-bold mb-2">Join Our Community</h2>
                <p className="text-white/90 mb-4">Discover premium gadgets and exclusive deals</p>
                <div className="flex space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-mobile-alt text-white text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-laptop text-white text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-headphones text-white text-xl"></i>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <i className="fas fa-camera text-white text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="w-full md:w-1/2 bg-[#fff8f5] p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
                <p className="text-gray-600 mt-2">Join the GadgetZ community today</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-[#ff5733]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-3 border ${formErrors.firstName ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none`}
                      placeholder="Enter first name"
                    />
                    {formErrors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-[#ff5733]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-3 border ${formErrors.lastName ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none`}
                      placeholder="Enter last name"
                    />
                    {formErrors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-[#ff5733]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none`}
                    placeholder="Enter your email address"
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password <span className="text-[#ff5733]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-3 border ${formErrors.password ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none pr-10`}
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                  {formErrors.password && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
                  )}
                  
                  {/* Password strength indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              passwordStrength === 0 ? 'bg-red-500 w-1/4' : 
                              passwordStrength === 1 ? 'bg-orange-500 w-2/4' : 
                              passwordStrength === 2 ? 'bg-yellow-500 w-3/4' : 
                              'bg-green-500 w-full'
                            }`}
                          ></div>
                        </div>
                        <span className="ml-2 text-xs text-gray-600">
                          {passwordStrength === 0 ? 'Weak' : 
                           passwordStrength === 1 ? 'Fair' : 
                           passwordStrength === 2 ? 'Good' : 
                           'Strong'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Use 8+ characters with a mix of uppercase, lowercase, numbers, and symbols
                      </p>
                    </div>
                  )}
                </div>
                
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                    Date of Birth <span className="text-[#ff5733]">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-3 border ${formErrors.dateOfBirth ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none`}
                  />
                  {formErrors.dateOfBirth && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.dateOfBirth}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                      Nationality <span className="text-[#ff5733]">*</span>
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-3 border ${formErrors.nationality ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none`}
                    >
                      <option value="">Select nationality</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="IN">India</option>
                      <option value="BR">Brazil</option>
                    </select>
                    {formErrors.nationality && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.nationality}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                      Preferred Language <span className="text-[#ff5733]">*</span>
                    </label>
                    <select
                      id="language"
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className={`mt-1 block w-full px-4 py-3 border ${formErrors.language ? 'border-red-500' : 'border-[#ff5733]'} rounded-md shadow-sm focus:ring-[#ff5733] focus:border-[#ff5733] focus:outline-none`}
                    >
                      <option value="">Select language</option>
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                      <option value="ja">Japanese</option>
                      <option value="ko">Korean</option>
                      <option value="ar">Arabic</option>
                      <option value="hi">Hindi</option>
                      <option value="pt">Portuguese</option>
                    </select>
                    {formErrors.language && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.language}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender <span className="text-[#ff5733]">*</span>
                  </label>
                  <div className="mt-2 flex space-x-6">
                    <div className="flex items-center">
                      <input
                        id="gender-male"
                        name="gender"
                        type="radio"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#ff5733] focus:ring-[#ff5733] border-gray-300 cursor-pointer"
                      />
                      <label htmlFor="gender-male" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                        Male
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="gender-female"
                        name="gender"
                        type="radio"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#ff5733] focus:ring-[#ff5733] border-gray-300 cursor-pointer"
                      />
                      <label htmlFor="gender-female" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                        Female
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="gender-other"
                        name="gender"
                        type="radio"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#ff5733] focus:ring-[#ff5733] border-gray-300 cursor-pointer"
                      />
                      <label htmlFor="gender-other" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                        Other
                      </label>
                    </div>
                  </div>
                  {formErrors.gender && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.gender}</p>
                  )}
                </div>
                
                {/* Terms and Conditions */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#ff5733] focus:ring-[#ff5733] border-gray-300 rounded cursor-pointer"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeTerms" className="font-medium text-gray-700 cursor-pointer">
                        I agree to the <a href="#" className="text-[#ff5733] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#ff5733] hover:underline">Privacy Policy</a>
                      </label>
                      {formErrors.agreeTerms && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.agreeTerms}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Form Actions */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-8 bg-[#ff5733] border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-[#e04d2d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff5733] transition-colors duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <a href="#" className="text-[#ff5733] font-medium hover:underline cursor-pointer">
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#2a1e1e] text-white py-6 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">GadgetZ</h3>
            <p className="text-gray-300 text-sm mt-1">Premium products for the modern lifestyle</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>© 2025 GadgetZ. All rights reserved.</p>
            <div className="flex justify-center mt-2 space-x-4">
              <a href="#" className="hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-[#ff5733] transition-colors duration-300 cursor-pointer">Contact Us</a>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center space-x-4">
            <i className="fab fa-cc-visa text-xl text-gray-400"></i>
            <i className="fab fa-cc-mastercard text-xl text-gray-400"></i>
            <i className="fab fa-cc-paypal text-xl text-gray-400"></i>
            <i className="fab fa-cc-amex text-xl text-gray-400"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
