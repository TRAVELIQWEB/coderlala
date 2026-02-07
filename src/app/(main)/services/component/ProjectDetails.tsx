import { ArrowRight, CalendarDays, CheckCircle, Clock, IndianRupee, Target } from 'lucide-react'
import Link from 'next/link';
export const ProjectDetails = (service: any) => {
  return (
    <>            {/* Premium Sidebar */}
      <div className="lg:w-1/3 mt-10 lg:mt-0">
        <div className="glass-card rounded-2xl border border-gray-200 p-8 sticky top-24 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Details</h3>

          <div className="space-y-8">
            {/* Delivery Time */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Delivery Timeline</p>
                <p className="text-xl font-bold text-gray-900 mt-1">{service.delivery}</p>
                <p className="text-sm text-gray-600 mt-1">Flexible schedule based on requirements</p>
              </div>
            </div>

            {/* Investment */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                <IndianRupee className="w-6 h-6 text-green-600" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Investment Range</p>
                <p className="text-xl font-bold text-gray-900 mt-1">{service.priceRange}</p>
                <p className="text-sm text-gray-600 mt-1">Transparent pricing with no hidden fees</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Perfect for
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-gray-600">Startups launching MVPs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-gray-600">Businesses scaling operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-gray-600">Enterprises modernizing systems</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">Have questions? Let's discuss your specific needs.</p>
              <Link
                href={`https://calendly.com/salman-nizam-coderlala/30min`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold 
                               bg-linear-to-r from-blue-500 to-indigo-600
                               hover:from-blue-600 hover:to-indigo-700
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                               flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
              >
                <span className="relative text-white!">Schedule Consultation</span>
                <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-white! group-hover:translate-x-1 transition-transform shrink-0" />

              </Link>
            </div>
          </div>
        </div>
      </div></>
  )
}

