import { CheckCircle, Clock, AlertCircle, Download } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'Sarah Johnson',
    action: 'completed project',
    project: 'E-commerce Platform',
    time: '10 minutes ago',
    status: 'completed',
    icon: <CheckCircle className="text-green-500" size={16} />,
  },
  {
    id: 2,
    user: 'Mike Chen',
    action: 'uploaded files',
    project: 'Mobile App Design',
    time: '45 minutes ago',
    status: 'upload',
    icon: <Download className="text-blue-500" size={16} />,
  },
  {
    id: 3,
    user: 'Alex Rivera',
    action: 'reported issue',
    project: 'Dashboard Analytics',
    time: '2 hours ago',
    status: 'warning',
    icon: <AlertCircle className="text-yellow-500" size={16} />,
  },
  {
    id: 4,
    user: 'Emma Wilson',
    action: 'started review',
    project: 'Admin Panel UI',
    time: '4 hours ago',
    status: 'pending',
    icon: <Clock className="text-purple-500" size={16} />,
  },
  {
    id: 5,
    user: 'David Kim',
    action: 'deployed update',
    project: 'API Service',
    time: '1 day ago',
    status: 'completed',
    icon: <CheckCircle className="text-green-500" size={16} />,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
          View all
        </a>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              {activity.icon}
            </div>
            
            <div className="ml-4 flex-1">
              <p className="text-gray-800">
                <span className="font-semibold">{activity.user}</span>{' '}
                {activity.action}{' '}
                <span className="text-blue-600 font-medium">{activity.project}</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
            </div>

            <span className={`
              px-3 py-1 rounded-full text-xs font-medium
              ${activity.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
              ${activity.status === 'pending' ? 'bg-purple-100 text-purple-800' : ''}
              ${activity.status === 'warning' ? 'bg-yellow-100 text-yellow-800' : ''}
              ${activity.status === 'upload' ? 'bg-blue-100 text-blue-800' : ''}
            `}>
              {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}