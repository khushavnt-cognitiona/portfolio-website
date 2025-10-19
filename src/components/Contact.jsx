import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    const { name, email, subject, message } = formData;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email';
    if (!subject.trim()) newErrors.subject = 'Subject is required';
    if (!message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('');
      return;
    }

    setLoading(true);
    setStatus('');

    // Simulate email sending (replace with actual EmailJS integration)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setLoading(false);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white text-center">Get In Touch</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Have a question or want to work together? I'd love to hear from you!</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info Cards */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
              <FaEnvelope className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">khushvant@example.com</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
              <FaPhone className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">+91 (Your Phone)</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mr-4">
              <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">India</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 rounded-lg flex items-center gap-3">
            <FaCheckCircle className="text-green-600 dark:text-green-400" size={24} />
            <div>
              <p className="font-semibold text-green-800 dark:text-green-200">Message Sent Successfully!</p>
              <p className="text-sm text-green-700 dark:text-green-300">I'll get back to you as soon as possible.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                  errors.name
                    ? 'border-red-500 dark:border-red-400'
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder="Your Name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                  errors.email
                    ? 'border-red-500 dark:border-red-400'
                    : 'border-gray-300 dark:border-gray-600'
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                errors.subject
                  ? 'border-red-500 dark:border-red-400'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="What is this about?"
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none ${
                errors.message
                  ? 'border-red-500 dark:border-red-400'
                  : 'border-gray-300 dark:border-gray-600'
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
              placeholder="Tell me more about your project or inquiry..."
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
