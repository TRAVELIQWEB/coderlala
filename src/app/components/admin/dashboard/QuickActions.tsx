import { Plus, Download, Settings, UserPlus, Shield, Bell } from 'lucide-react';

interface QuickActionsProps {
  userRole: 'Admin' | 'Agent';
}

export default function QuickActions({ userRole }: QuickActionsProps) {
  const adminActions = [
    { icon: <UserPlus size={20} />, label: 'Add New User', color: 'bg-blue-500' },
    { icon: <Shield size={20} />, label: 'Manage Permissions', color: 'bg-purple-500' },
    { icon: <Download size={20} />, label: 'Export Data', color: 'bg-green-500' },
    { icon: <Settings size={20} />, label: 'System Settings', color: 'bg-gray-700' },
  ];

  const agentActions = [
    { icon: <Plus size={20} />, label: 'New Ticket', color: 'bg-blue-500' },
    { icon: <Bell size={20} />, label: 'Send Notification', color: 'bg-yellow-500' },
    { icon: <Download size={20} />, label: 'Download Reports', color: 'bg-green-500' },
    { icon: <Settings size={20} />, label: 'Profile Settings', color: 'bg-gray-700' },
  ];

  const actions = userRole === 'Admin' ? adminActions : agentActions;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
      
      <div className="space-y-4">
        {actions.map((action) => (
          <button
            key={action.label}
            className="w-full flex items-center p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
          >
            <div className={`${action.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform`}>
              {action.icon}
            </div>
            <span className="ml-4 font-medium text-gray-800">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Role-specific tip */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
        <p className="text-sm text-gray-700">
          {userRole === 'Admin' 
            ? 'As an administrator, you have full access to manage users, permissions, and system configurations.'
            : 'As an agent, you can manage tickets, communicate with users, and generate reports.'
          }
        </p>
      </div>
    </div>
  );
}