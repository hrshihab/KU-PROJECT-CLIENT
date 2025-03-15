'use client'
import { useGetNocGoQuery } from '@/redux/api/baseApi';
import React, { useState } from 'react';
import { FiDownload, FiCalendar, FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface INOCGO {
  id: string;
  title: string;
  type: 'NOC' | 'GO';
  publishedDate: string;
  documentsUrl: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

const NOCGOPage = () => {
  const { data: nocGoData } = useGetNocGoQuery(undefined);
  const documents = nocGoData?.data || [];

  // States
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterType, setFilterType] = useState<'ALL' | 'NOC' | 'GO'>('ALL');

  // Filter and sort documents
  const filteredAndSortedDocs = [...documents]
    .filter(doc => !doc.isDeleted && (filterType === 'ALL' || doc.type === filterType))
    .sort((a, b) => {
      const dateA = new Date(a.publishedDate).getTime();
      const dateB = new Date(b.publishedDate).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedDocs.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Toggle sort order
  const toggleSortOrder = () => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');

  return (
    <div className="w-[90%] mx-auto py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          NOC and GO Documents
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            {' '}Khulna University
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access all No Objection Certificates (NOC) and Government Orders (GO) in one place
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-blue-600">
            {documents.filter((doc: INOCGO) => doc.type === 'NOC').length}
          </h3>
          <p className="text-gray-600">NOC Documents</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-purple-600">
            {documents.filter((doc: INOCGO) => doc.type === 'GO').length}
          </h3>
          <p className="text-gray-600">GO Documents</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-600">
            {documents.length}
          </h3>
          <p className="text-gray-600">Total Documents</p>
        </div>
      </div>

      {/* Filter and Sort Controls */}
      <div className="flex flex-wrap gap-4 justify-between mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setFilterType('ALL')}
            className={`px-4 py-2 rounded-lg ${
              filterType === 'ALL' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType('NOC')}
            className={`px-4 py-2 rounded-lg ${
              filterType === 'NOC' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            NOC
          </button>
          <button
            onClick={() => setFilterType('GO')}
            className={`px-4 py-2 rounded-lg ${
              filterType === 'GO' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            } shadow-sm transition-colors`}
          >
            GO
          </button>
        </div>
        <button
          onClick={toggleSortOrder}
          className="flex items-center px-4 py-2 text-sm text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          Sort by Date {sortOrder === 'desc' ? <FiChevronDown className="ml-2" /> : <FiChevronUp className="ml-2" />}
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">SL</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                  <div className="flex items-center cursor-pointer" onClick={toggleSortOrder}>
                    Published Date
                    {sortOrder === 'desc' ? <FiChevronDown className="ml-1" /> : <FiChevronUp className="ml-1" />}
                  </div>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((doc, index) => (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {indexOfFirstItem + index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{doc.title}</div>
                    <div className="text-xs text-gray-500">ID: {doc.id.slice(0, 8)}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      doc.type === 'NOC' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FiCalendar className="mr-2" />
                      {new Date(doc.publishedDate).toLocaleDateString('bn-BD')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <a
                        href={doc.documentsUrl}
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

      {/* Pagination - Updated Version */}
      {filteredAndSortedDocs.length > 0 && (
        <div className="mt-8 pb-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(filteredAndSortedDocs.length / itemsPerPage) }).map((_, index) => {
                // Always show first and last page
                // Show current page and 1 page before and after
                const pageNumber = index + 1;
                const isFirstPage = pageNumber === 1;
                const isLastPage = pageNumber === Math.ceil(filteredAndSortedDocs.length / itemsPerPage);
                const isCurrentPage = pageNumber === currentPage;
                const isNearCurrentPage = Math.abs(pageNumber - currentPage) <= 1;

                if (isFirstPage || isLastPage || isNearCurrentPage) {
                  return (
                    <button
                      key={index}
                      onClick={() => paginate(pageNumber)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isCurrentPage
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      } shadow`}
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  (currentPage <= 3 && pageNumber <= 5) ||
                  (currentPage >= Math.ceil(filteredAndSortedDocs.length / itemsPerPage) - 2 && 
                   pageNumber >= Math.ceil(filteredAndSortedDocs.length / itemsPerPage) - 4)
                ) {
                  return (
                    <button
                      key={index}
                      onClick={() => paginate(pageNumber)}
                      className="px-4 py-2 text-sm font-medium rounded-lg bg-white text-gray-600 hover:bg-gray-50 shadow transition-colors"
                    >
                      {pageNumber}
                    </button>
                  );
                } else if (
                  pageNumber === 2 ||
                  pageNumber === Math.ceil(filteredAndSortedDocs.length / itemsPerPage) - 1
                ) {
                  return (
                    <span key={index} className="px-2 text-gray-500">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredAndSortedDocs.length / itemsPerPage)}
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>

          {/* Page Information */}
          <div className="text-sm text-gray-500">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredAndSortedDocs.length)} of {filteredAndSortedDocs.length} entries
          </div>
        </div>
      )}

      {/* No Documents Message */}
      {filteredAndSortedDocs.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500">No documents available.</div>
        </div>
      )}
    </div>
  );
};

export default NOCGOPage;

