import React, { useState, useMemo } from 'react';
import { 
  Search, Filter, Eye, AlertTriangle, Ban, MessageSquare, Clock, 
  X, User, Calendar, FileText, Image, Download, CheckCircle 
} from 'lucide-react';
import Layout from './Layout';

const AdminReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('details');

  const reports = [
    {
      id: 'RPT-001',
      type: 'Product Violation',
      reporter: 'John Smith',
      reported: 'TechStore Inc.',
      reason: 'Counterfeit Product',
      status: 'Under Review',
      priority: 'High',
      date: '2024-01-15',
      description: 'Customer reports receiving counterfeit electronics instead of genuine products.',
      evidence: ['product-image.jpg', 'receipt.pdf'],
      category: 'Product Quality'
    },
    {
      id: 'RPT-002',
      type: 'Seller Misconduct',
      reporter: 'Sarah Wilson',
      reported: 'Fashion Hub',
      reason: 'Delayed Shipping',
      status: 'Resolved',
      priority: 'Medium',
      date: '2024-01-14',
      description: 'Multiple complaints about extremely delayed shipping times without communication.',
      evidence: ['chat-screenshot.png'],
      category: 'Service Quality'
    },
    {
      id: 'RPT-003',
      type: 'Review Manipulation',
      reporter: 'Admin System',
      reported: 'HomeDecor Plus',
      reason: 'Fake Reviews',
      status: 'Investigating',
      priority: 'High',
      date: '2024-01-13',
      description: 'Automated system detected suspicious review patterns indicating fake reviews.',
      evidence: ['review-analysis.pdf', 'ip-logs.txt'],
      category: 'Platform Integrity'
    },
    {
      id: 'RPT-004',
      type: 'Payment Issue',
      reporter: 'Mike Johnson',
      reported: 'ElectroWorld',
      reason: 'Unauthorized Charges',
      status: 'Pending',
      priority: 'Critical',
      date: '2024-01-12',
      description: 'Customer charged multiple times for single purchase without authorization.',
      evidence: ['bank-statement.pdf', 'order-history.png'],
      category: 'Financial'
    }
  ];

  // Filter reports based on search term
  const filteredReports = useMemo(() => {
    if (!searchTerm.trim()) {
      return reports;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return reports.filter(report => 
      report.id.toLowerCase().includes(lowerSearchTerm) ||
      report.type.toLowerCase().includes(lowerSearchTerm) ||
      report.reporter.toLowerCase().includes(lowerSearchTerm) ||
      report.reported.toLowerCase().includes(lowerSearchTerm) ||
      report.status.toLowerCase().includes(lowerSearchTerm) ||
      report.priority.toLowerCase().includes(lowerSearchTerm) ||
      report.reason.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      case 'Investigating': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleStatusChange = (newStatus) => {
    console.log(`Changing status to: ${newStatus}`);
    // Here you would implement the actual status change logic
  };

  const handleActionTaken = (action) => {
    console.log(`Taking action: ${action}`);
    // Here you would implement the actual action logic
  };

  const ReportDetail = () => {
    if (!selectedReport) return null;

    const timeline = [
      {
        id: 1,
        action: 'Report Submitted',
        user: selectedReport.reporter,
        date: selectedReport.date,
        time: '10:30 AM',
        description: 'Initial report submitted by customer'
      },
      {
        id: 2,
        action: 'Under Review',
        user: 'Admin Team',
        date: selectedReport.date,
        time: '2:15 PM',
        description: 'Report assigned to investigation team'
      },
      {
        id: 3,
        action: 'Evidence Collected',
        user: 'Investigation Team',
        date: selectedReport.date,
        time: '4:45 PM',
        description: 'Additional evidence and documentation collected'
      }
    ];

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Report {selectedReport.id}</h2>
                <p className="text-gray-600">{selectedReport.type} - {selectedReport.reason}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedReport(null)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button 
                onClick={() => setActiveTab('details')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'details' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                Details
              </button>
              <button 
                onClick={() => setActiveTab('evidence')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'evidence' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                Evidence
              </button>
              <button 
                onClick={() => setActiveTab('timeline')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'timeline' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                Timeline
              </button>
              <button 
                onClick={() => setActiveTab('actions')}
                className={`px-4 py-2 rounded-lg ${activeTab === 'actions' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
              >
                Actions
              </button>
            </div>

            {activeTab === 'details' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Report Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Report ID:</span>
                        <span className="font-medium">{selectedReport.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{selectedReport.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{selectedReport.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Priority:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedReport.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                          selectedReport.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          selectedReport.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {selectedReport.priority}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedReport.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                          selectedReport.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                          selectedReport.status === 'Investigating' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {selectedReport.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date Reported:</span>
                        <span className="font-medium">{selectedReport.date}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Description</h4>
                    <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {selectedReport.description}
                    </p>
                  </div>
                </div>

                {/* Parties Involved */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Parties Involved</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <User className="w-5 h-5 text-gray-600" />
                          <h4 className="font-medium text-gray-900">Reporter</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{selectedReport.reporter}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Customer ID:</span>
                            <span className="font-medium">#CUS-001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">customer@email.com</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <h4 className="font-medium text-gray-900">Reported Party</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{selectedReport.reported}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Seller ID:</span>
                            <span className="font-medium">#SEL-001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Store Rating:</span>
                            <span className="font-medium">4.2/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'evidence' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Evidence & Documentation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedReport.evidence.map((file, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        {file.includes('.jpg') || file.includes('.png') ? (
                          <Image className="w-8 h-8 text-blue-600" />
                        ) : (
                          <FileText className="w-8 h-8 text-gray-600" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 truncate">{file}</p>
                          <p className="text-sm text-gray-600">Uploaded {selectedReport.date}</p>
                        </div>
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload additional evidence</p>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Choose Files
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Investigation Timeline</h3>
                
                <div className="space-y-4">
                  {timeline.map((event, index) => (
                    <div key={event.id} className="flex space-x-4 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{event.id}</span>
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-12 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{event.action}</h4>
                          <span className="text-sm text-gray-500">by {event.user}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'actions' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Take Action</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Status Update */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Update Status</h4>
                    <div className="space-y-4">
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        defaultValue={selectedReport.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Investigating">Investigating</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Dismissed">Dismissed</option>
                      </select>
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Update Status
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Actions</h4>
                    <div className="space-y-3">
                      <button 
                        onClick={() => handleActionTaken('warn')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Issue Warning</span>
                      </button>
                      <button 
                        onClick={() => handleActionTaken('suspend')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      >
                        <Ban className="w-4 h-4" />
                        <span>Suspend Account</span>
                      </button>
                      <button 
                        onClick={() => handleActionTaken('ban')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Ban className="w-4 h-4" />
                        <span>Ban Account</span>
                      </button>
                      <button 
                        onClick={() => handleActionTaken('dismiss')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Dismiss Report</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add Note */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Add Investigation Note</h4>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="Add notes about your investigation or actions taken..."
                  />
                  <button className="mt-3 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
  <Layout>
     <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Reports & Violations</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage customer reports and platform violations</p>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Search Results Counter */}
      {searchTerm && (
        <div className="text-sm text-gray-600">
          {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''} found for "{searchTerm}"
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Reports</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Pending</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Under Review</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">45</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
              <Ban className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Resolved</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">88</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Grid - Mobile Cards */}
      <div className="block sm:hidden space-y-4">
        {filteredReports.map((report, index) => (
          <div key={report.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow" style={{animationDelay: `${index * 100}ms`}}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{report.id}</h3>
                <p className="text-xs text-gray-500 mt-1">{report.type}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                  {report.priority}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reporter:</span>
                <span className="text-gray-900 truncate ml-2">{report.reporter}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reported:</span>
                <span className="text-gray-900 truncate ml-2">{report.reported}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-900">{report.date}</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedReport(report)}
              className="w-full mt-3 px-3 py-2 text-xs bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Reports Table - Desktop */}
      <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report ID
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reporter
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reported
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReports.map((report, index) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {report.id}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.type}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.reporter}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.reported}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                      {report.priority}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.date}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => setSelectedReport(report)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && <ReportDetail />}
    </div>
  </Layout> 
  );
};

export default AdminReports;