'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import { useCreateSupportTicketMutation } from '@/redux/api/baseApi';

// Add interface for form data
interface ISupportForm {
  name: string;
  designation: string;
  instituteOffice: string;
  email: string;
  buildingName: string;
  roomNumber: string;
  mobileNumber: string;
  category: string;
  problemDescription: string;
  attachmentUrl: string;
}

const SupportPage = () => {
  const [createSupportTicket] = useCreateSupportTicketMutation();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ISupportForm>();

  const onSubmit = async (data: ISupportForm) => {
    try {
      const formData = {
        ...data,
        status: 'PENDING'
      };

      console.log("Final form data:", formData);

      const response = await createSupportTicket(formData).unwrap();
      reset();
      alert('Support ticket submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit support ticket. Please try again.');
    }
  };

  // Add error handler
  const onError = (errors: any) => {
    console.log('Form Errors:', errors); 
  };

  return (
    <div className="w-[90%] max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Support Request Form
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            {' '}KU Help Desk
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Submit your support request and our team will assist you as soon as possible
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
              <input
                type="text"
                {...register('name', { 
                  required: 'Name is required',
                  minLength: { value: 3, message: 'Name must be at least 3 characters' }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input
                type="text"
                {...register('designation', { required: 'Designation is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Assistant Professor"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department/Office</label>
              <input
                type="text"
                {...register('instituteOffice', { required: 'Department/Office is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Department of Computer Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /.*@ku\.ac\.bd$/,
                    message: 'Must be a KU email address'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your.email@ku.ac.bd"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Location and Contact */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Building Name</label>
              <input
                type="text"
                {...register('buildingName', { required: 'Building name is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Computer Lab"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Room Number</label>
              <input
                type="text"
                {...register('roomNumber', { required: 'Room number is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 101"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                {...register('mobileNumber', { 
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^01\d{9}$/,
                    message: 'Invalid mobile number format'
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="01XXXXXXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                <option value="IT">IT Support</option>
                <option value="ELECTRICAL">Electrical</option>
                <option value="PLUMBING">Plumbing</option>
                <option value="CARPENTRY">Carpentry</option>
                <option value="CLEANING">Cleaning</option>
                <option value="SECURITY">Security</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Problem Description */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Problem Description*</label>
          <textarea
            {...register('problemDescription', { 
              required: 'Problem description is required',
              minLength: {
                value: 20,
                message: 'Please provide more details (minimum 20 characters)'
              }
            })}
            rows={4}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.problemDescription ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your problem in detail..."
          />
          {errors.problemDescription && (
            <p className="text-red-500 text-sm mt-1">{errors.problemDescription.message}</p>
          )}
        </div>

        {/* File Attachment */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Attachment URL (if any)</label>
          <input
            type="url"
            {...register('attachmentUrl')}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter attachment URL (optional)"
          />
          {errors.attachmentUrl && (
            <p className="text-red-500 text-sm mt-1">{errors.attachmentUrl.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="w-full flex justify-center items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <FiSend className="mr-2" />
            Submit Support Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportPage;
