// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { services } from '../data/services/service';
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Code2,
  Award
} from 'lucide-react';
import Link from 'next/link';
import * as LucideIcons from "lucide-react";
import { FAQAccordion } from '../component/ServiceFAQAccordion';
import { FinalCTA } from '@/app/components/sections/cta';
import { ProjectDetails } from '../component/ProjectDetails';
import TravelPortalSolutionAdvantage from './_components/TravelPortalSolutionAdvantage';
import ServiceProcessSection from './_components/ServiceProcessSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = (LucideIcons as any)[service.icon];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-2 items-start">
            <div className="lg:w-2/3">
              {/* Breadcrumb & Badge */}
              <div className="flex items-center gap-3 mb-6">
                <Link href="/services" className="text-sm">
                  Services
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-sm font-medium text-blue-500">{service.title}</span>
              </div>

              <div className="flex items-center mb-2">
                <div className={`w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-lg`}>
                  {service.icon === 'Globe' ? (
                    <img src="/images/transportation.png" alt="Travel Icon" className="w-14 h-14 object-contain" />
                  ) : IconComponent ? (
                    <IconComponent className="w-10 h-10 text-blue-500" strokeWidth={1.5} />
                  ) : (
                    <span className="text-4xl">✨</span>
                  )}
                </div>
                <span className={`inline-block px-4 py-2 bg-${service.color}-500 text-white! rounded-r-full text-sm font-semibold`}>
                  {service.headerHeading || 'Expert Solution'}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">
                  {service.title}
                </span>
              </h1>

              <p className="text-2xl mb-4 leading-relaxed font-medium">
                {service.tagline}
              </p>

              <p className="text-lg mb-10 leading-relaxed max-w-2xl">
                {service.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href={`/contact`}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold 
                               bg-linear-to-r from-blue-500 to-indigo-600
                               hover:from-blue-600 hover:to-indigo-700
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(37,99,235,0.5)]
                               flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative text-white!">Get Started Today</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white! group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
                <Link
                  href="/portfolio"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold 
                               bg-linear-to-r from-orange-500 to-orange-600
                               hover:from-orange-600 hover:to-orange-700
                               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                               shadow-[0_10px_40px_-15px_rgba(234,88,12,0.5)]
                               flex items-center justify-center gap-2 sm:gap-3 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative text-white!">View Portfolio</span>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white! group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-600/40! dark:border-gray-200/40!">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">10+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            <ProjectDetails service={service} />
          </div>
        </div>
      </section>

      {/* Why Choose This Service Section */}
      <section className="py-20 glass-card rounded-none! border-x-0!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Why Our Approach Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              The {service.title} Advantage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We don't just deliver services—we partner with you to ensure measurable results that directly impact your bottom line. Our proven methodology combines industry expertise with cutting-edge technology to solve your most pressing business challenges.
            </p>
          </div>

          <TravelPortalSolutionAdvantage />

        </div>
      </section>

      {/* Comprehensive Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <div className="mb-12">
                <span className="text-sm font-semibold uppercase tracking-wider">Core Deliverables</span>
                <h2 className="text-4xl font-bold mt-4">
                  What's Included
                </h2>
                <p className="mt-4 text-lg">
                  Comprehensive features designed to solve your business challenges and deliver maximum value.
                </p>
              </div>
              <div className="grid gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex cursor-pointer items-center gap-2 p-2 glass-card transition-colors mb-0">
                    <div className={`w-10 h-10 bg-${service.color}-100 rounded-lg flex items-center justify-center shrink-0`}>
                      <CheckCircle className={`w-5 h-5 text-${service.color}-600`} strokeWidth={2} />
                    </div>
                    <p className="font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <div className="mb-12">
                <span className="text-sm font-semibold uppercase tracking-wider">Impact & ROI</span>
                <h2 className="text-4xl font-bold mt-4">
                  Key Benefits
                </h2>
                <p className="mt-4 text-lg">
                  Measurable outcomes that drive business growth and competitive advantage.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { icon: TrendingUp, title: "Increased ROI", desc: "Drive measurable business results and revenue growth", color: "green" },
                  { icon: Users, title: "User Satisfaction", desc: "Delight users with intuitive and engaging experiences", color: "blue" },
                  { icon: Zap, title: "Performance Boost", desc: "Dramatically improve speed and operational efficiency", color: "yellow" },
                  { icon: Shield, title: "Future-Proof", desc: "Built on scalable architecture that grows with you", color: "purple" },
                  { icon: Calendar, title: "Time Savings", desc: "Faster time-to-market and accelerated growth", color: "orange" },
                  { icon: BarChart3, title: "Data Insights", desc: "Comprehensive analytics for informed decisions", color: "indigo" }
                ].map((benefit, idx) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <div key={idx} className="p-2 cursor-pointer glass-card transition-colors">
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 bg-${service.color}-100 rounded-lg flex items-center justify-center shrink-0`}>
                          <BenefitIcon className="size-6 text-blue-600 shrink-0" strokeWidth={2} />
                        </div>

                        <div>
                          <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 glass-card rounded-none! border-x-0!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              We follow a structured, transparent approach that ensures success at every stage of your project.
            </p>
          </div>

          <ServiceProcessSection serviceId={service.id} />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider">Modern Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Best-in-Class Technologies
            </h2>
            <p className="text-lg max-w-3xl mx-auto mt-6">
              We leverage the latest, most reliable technologies to build scalable, secure, and future-proof solutions that stand the test of time.
            </p>
          </div>
          <div className="relative group mb-16">
            <div className="relative glass-card rounded-2xl overflow-hidden aspect-video max-w-5xl mx-auto shadow-2xl">
              <img
                src="/images/advanced-technology-data-center-research.webp"
                alt={`${service.title} Technology Stack and Infrastructure`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <p className="text-white! text-lg font-medium">
                  Utilizing industry-leading frameworks and tools to build high-performance solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {service.technologies.map((tech, index) => (
              <div
                key={index}
                className="group px-4 py-1 glass-card transition-all cursor-pointer"
              >
                <span className="font-semibold group-hover:text-blue-600 transition-colors flex items-center gap-2" >
                  <Code2 className="w-4 h-4" />
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Results Section */}
      <section className="py-20 glass-card rounded-none! border-x-0!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Measurable Results</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Real Results, Real Impact
              </h2>
              <p className="text-lg mb-8">
                Our clients don't just get a project completed—they get a transformative partnership that drives real business results. Every engagement is backed by our commitment to your success.
              </p>

              <div className="space-y-6 glass-card p-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
                      <BarChart3 className="h-6 w-6 text-white!" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Average ROI</h3>
                    <p className=" mt-2">Our clients typically see 300%+ ROI within the first 12 months of implementation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20">
                      <TrendingUp className="h-6 w-6 text-white!" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Growth Acceleration</h3>
                    <p className=" mt-2">On average, our solutions help businesses scale revenue by 250% and operations efficiency by 60%.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/20">
                      <Award className="h-6 w-6 text-white!" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Industry Recognition</h3>
                    <p className=" mt-2">Trusted by industry leaders and recognized for innovation, quality, and customer success.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              {/* <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div> */}
              <div className="relative glass-card rounded-2xl overflow-hidden aspect-video sm:aspect-square lg:aspect-auto lg:h-125">
                <img
                  src="/images/modern-tech-office-collaborative-workspace.webp"
                  alt="Digital Transformation Results"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider">Questions?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg">
              Find answers to common questions about our {service.title.toLowerCase()} service.
            </p>
          </div>

          <FAQAccordion faqs={[
            {
              q: `What's included in the ${service.title} package?`,
              a: `Our comprehensive ${service.title.toLowerCase()} package includes end-to-end service delivery, professional consulting, technical implementation, quality assurance, and ongoing support. We tailor every package to match your specific requirements and business objectives.`
            },
            {
              q: "Do you provide ongoing support after launch?",
              a: "Absolutely! We offer flexible support plans ranging from basic maintenance to comprehensive managed services. Our team remains available to handle updates, optimizations, and new feature development as your business evolves."
            },
            {
              q: "What is the typical timeline for this service?",
              a: `The timeline for ${service.title} typically ranges from ${service.delivery}. However, we can adjust based on project scope, complexity, and your specific requirements. We'll provide a detailed timeline during the initial consultation.`
            },
            {
              q: "How much does this service cost?",
              a: `The investment range for ${service.title} is typically ${service.priceRange}. The final cost depends on your specific needs, project complexity, and timeline. We provide transparent pricing with no hidden fees and flexible payment options.`
            },
            {
              q: "Can you integrate with our existing systems?",
              a: `Yes, we specialize in seamless integrations with existing systems and third-party platforms. Our team will work with your IT department to ensure smooth integration, minimal disruption, and complete data consistency.`
            },
            {
              q: "What makes your approach different?",
              a: `We combine proven industry expertise with cutting-edge technology and a client-first mentality. We don't just deliver solutions—we partner with you for long-term success, ensuring measurable ROI and sustainable business growth.`
            }
          ]} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 glass-card rounded-none! border-x-0!">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider">Client Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold  mt-4 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              Hear from companies that have transformed their business with our {service.title.toLowerCase()} solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-card rounded-xl border border-gray-200 p-8 hover:border-blue-400 transition-colors flex flex-col items-center text-center">
                {testimonial.imageUrl && testimonial.imageUrl !== '' && (
                  <img src={testimonial.imageUrl} alt={testimonial.author} className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-blue-400" />
                )}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400!">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              How We Compare
            </h2>
          </div>

          <div className="overflow-x-auto glass-card p-3">
            <table className="w-full ">
              <thead>
                <tr className="border-b-2 border-gray-600/40">
                  <th className="text-left py-4 px-6 font-bold">Feature</th>
                  <th className="text-center py-4 px-6">
                    Our Solution
                  </th>
                  <th className="text-center py-4 px-6">Competitors</th>
                </tr>
              </thead>
              <tbody>
                {service.comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/20 last:border-0">
                    <td className="py-4 px-6 font-medium ">{row.feature}</td>
                    <td className="text-center py-4 px-6">
                      <CheckCircle className="w-6 h-6 text-green-500 mx-auto" strokeWidth={2} />
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.comp ? <CheckCircle className="w-6 h-6 text-green-500 mx-auto" strokeWidth={2} /> : <span className="text-gray-400">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}