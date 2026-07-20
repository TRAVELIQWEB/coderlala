import { FileText, Mail } from 'lucide-react';

const stats = [
  {
    title: 'Total Blog',
    value: '128',
    change: '+12%',
    icon: <FileText className="text-white!" size={24} />,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Total Enquiry',
    value: '342',
    change: '+8%',
    icon: <Mail className="text-white!" size={24} />,
    color: 'from-purple-500 to-purple-600',
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="w-full glass-card  text-card-foreground rounded-2xl shadow-sm border border-border p-5 sm:p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start gap-3">
            <div className="min-w-0">
              <p className="text-base sm:text-lg font-semibold text-muted-foreground truncate">
                {stat.title}
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-foreground mt-2">
                {stat.value}
              </p>
              {/* <div className="flex flex-wrap items-center mt-2 gap-1.5">
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  {stat.change}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm">
                  from last month
                </span>
              </div> */}
            </div>
            <div
              className={`shrink-0 p-2.5 sm:p-3 rounded-xl bg-linear-to-br ${stat.color} bg-opacity-10 dark:bg-opacity-20`}
            >
              {stat.icon}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full bg-linear-to-r ${stat.color} rounded-full`}
                style={{ width: '75%' }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}