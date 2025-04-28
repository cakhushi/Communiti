import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  className?: string;
  imageSrc?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  className,
  imageSrc
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 hover-lift relative overflow-hidden group", 
      className
    )}>
      <div className="relative z-10">
        <div className="mb-4 text-vibrant-purple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-20 group-hover:opacity-100 transition-opacity"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        <p className="text-gray-700 mb-6 italic relative group-hover:text-gray-800 transition-colors">{quote}</p>
        <div className="flex items-center mt-6">
          {imageSrc && (
            <div className="mr-4 w-12 h-12 rounded-full overflow-hidden border-2 border-vibrant-pink/30 group-hover:border-vibrant-pink transition-colors">
              <img src={imageSrc} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-800 group-hover:text-vibrant-purple transition-colors">{author}</p>
            <p className="text-gray-600 text-sm group-hover:text-vibrant-pink transition-colors">
              {position}, {company}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-purple-100 via-pink-100 to-transparent rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-vibrant-teal/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all group-hover:bottom-0 group-hover:left-0"></div>
    </div>
  );
};

export default TestimonialCard;
