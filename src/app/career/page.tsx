'use client'
import { useGetCareersQuery } from '@/redux/api/baseApi';
import React, { useState } from 'react';
import { FiDownload, FiCalendar, FiClock, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Career = () => {
  const { data: careerData } = useGetCareersQuery(undefined);
  const careers = careerData?.data || [];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Sort careers by date
  const sortedCareers = [...careers].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedCareers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="w-[90%] mx-auto py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Career Opportunities at{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Khulna University
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our team and be part of shaping the future of education. Explore current job openings and opportunities.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-blue-600">{careers.length}</h3>
          <p className="text-gray-600">Open Positions</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-purple-600">4 Departments</h3>
          <p className="text-gray-600">Hiring Now</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-600">Competitive</h3>
          <p className="text-gray-600">Benefits Package</p>
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleSortOrder}
          className="flex items-center px-4 py-2 text-sm text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          Sort by Last Date {sortOrder === 'desc' ? <FiChevronDown className="ml-2" /> : <FiChevronUp className="ml-2" />}
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">SL</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Position Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Posted Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 cursor-pointer" onClick={toggleSortOrder}>
                  <div className="flex items-center">
                    Last Date
                    {sortOrder === 'desc' ? <FiChevronDown className="ml-1" /> : <FiChevronUp className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((career, index) => (
                <tr key={career.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{career.title}</div>
                    <div className="text-xs text-gray-500">ID: {career.id.slice(0, 8)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiCalendar className="mr-2" />
                      {new Date(career.createdAt).toLocaleDateString('bn-BD')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiClock className="mr-2" />
                      {new Date(career.date).toLocaleDateString('bn-BD')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <a
                        href={career.documentsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        <FiDownload className="mr-2" />
                        Download
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {sortedCareers.length > itemsPerPage && (
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: Math.ceil(sortedCareers.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } shadow`}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(sortedCareers.length / itemsPerPage)}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* No Positions Message */}
      {careers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No positions currently available.</div>
        </div>
      )}

      {/* Apply Section */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Please review the job requirements carefully and submit your application through our online portal. Make sure to include all required documents.
        </p>
        <button className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Career;


