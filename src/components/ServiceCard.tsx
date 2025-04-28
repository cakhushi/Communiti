import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, link, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover-lift relative overflow-hidden group", 
      className
    )}>
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-70 transition-all duration-500 group-hover:scale-150 animate-pulse-slow"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-md transform transition-transform group-hover:rotate-3 button-pop">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-vibrant-purple transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-vibrant-purple hover:text-vibrant-pink font-medium group button-pop"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
