import { TrendingUp, Users, FileText, DollarSign } from 'lucide-react';

const stats = [
  {
    title: 'Total Users',
    value: '2,847',
    change: '+12%',
    icon: <Users className="text-blue-600" size={24} />,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Active Projects',
    value: '25',
    change: '+8%',
    icon: <FileText className="text-green-600" size={24} />,
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Revenue',
    value: '$42,580',
    change: '+23%',
    icon: <DollarSign className="text-purple-600" size={24} />,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Growth Rate',
    value: '18.2%',
    change: '+4.5%',
    icon: <TrendingUp className="text-cyan-600" size={24} />,
    color: 'from-cyan-500 to-cyan-600',
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
              <div className="flex items-center mt-2">
                <span className="text-green-600 text-sm font-medium">
                  {stat.change}
                </span>
                <span className="text-gray-500 text-sm ml-2">from last month</span>
              </div>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
              {stat.icon}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                style={{ width: '75%' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}