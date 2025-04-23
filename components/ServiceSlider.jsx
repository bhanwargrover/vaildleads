import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Brand & Growth Strategy",
    description:
      "Brand identity, GTM strategy, AI-assisted market research, and scalable brand systems for business growth.",
    pastWork:
      "✅ Tress Lounge Franchise Strategy – helped structure brand narrative and sales strategy for 75 franchise units at $600K CAD each",
  },
  {
    Icon: RxRocket,
    title: "Performance Marketing",
    description:
      "Revenue-focused campaigns using Meta/Google Ads, AI targeting, A/B testing, and funnel optimization.",
    pastWork: "✅ Lead generation strategy & automation for Tress Lounge",
  },
  {
    Icon: RxPencil2,
    title: "Social & Content Strategy",
    description:
      "AI-powered content planning, Reels editing, and engagement tactics to boost visibility and conversions.",
    pastWork: "✅ Built social content plan for ValidLeads.ai pre-launch",
  },
  {
    Icon: RxDesktop,
    title: "SEO & Website Optimization",
    description:
      "Technical audits, AI-powered keyword research, on/off-page SEO, and Google My Business optimization.",
    pastWork:
      "✅ Full-site audit and SEO strategy for VisualAccent (Darwin, Australia)",
  },
  {
    Icon: RxReader,
    title: "AI Solutions for Growth",
    description:
      "Lead filtering agents, workflow automation, prompt engineering, and custom AI toolstack setups.",
    pastWork: "✅ Founder of ValidLeads.ai – AI-powered lead quality filter platform",
  },
  {
    Icon: RxCrop,
    title: "Design & No-Code Setup",
    description:
      "Figma wireframes, landing pages with no-code tools, email integrations, and CRM setup.",
    pastWork: "✅ Figma design setup & landing page strategy for ValidLeads.ai",
  },
];

const ServiceSlider = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        freeMode
        className="h-[380px] sm:h-[420px]"
      >
        {serviceData.map((item, i) => (
          <SwiperSlide key={i} className="flex h-full">
            <div className="bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 w-full rounded-2xl p-6 flex flex-col justify-between h-full min-h-[380px] cursor-pointer group shadow-md">
              {/* Icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Past Work */}
              <div className="text-sm text-white/80 mb-4">
                <strong>Past Work:</strong>
                <p className="whitespace-pre-wrap">{item.pastWork}</p>
              </div>

              {/* Arrow */}
              <div className="text-3xl mt-6">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
