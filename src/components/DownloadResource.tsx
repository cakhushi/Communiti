import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Eye, FileText, BookOpen, FileSpreadsheet } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ResourceProps {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "spreadsheet" | "document" | "guide";
  downloadUrl: string;
  previewUrl?: string;
  fileSize?: string;
  category: string;
  downloads?: number;
}

const DownloadResource = ({
  id,
  title,
  description,
  type,
  downloadUrl,
  previewUrl,
  fileSize = "2.3 MB",
  category,
  downloads = 0,
}: ResourceProps) => {
  const [downloadCount, setDownloadCount] = useState(downloads);

  const handleDownload = () => {
    // In a real app, this would trigger an analytics event and download the file
    setDownloadCount(prev => prev + 1);
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = title.replace(/\s+/g, "-").toLowerCase() + getFileExtension(type);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileExtension = (fileType: string) => {
    switch (fileType) {
      case "pdf":
        return ".pdf";
      case "spreadsheet":
        return ".xlsx";
      case "document":
        return ".docx";
      case "guide":
        return ".pdf";
      default:
        return ".pdf";
    }
  };

  const getFileIcon = () => {
    switch (type) {
      case "pdf":
        return <FileText className="h-10 w-10 text-red-500" />;
      case "spreadsheet":
        return <FileSpreadsheet className="h-10 w-10 text-green-600" />;
      case "document":
        return <FileText className="h-10 w-10 text-blue-500" />;
      case "guide":
        return <BookOpen className="h-10 w-10 text-purple-500" />;
      default:
        return <FileText className="h-10 w-10 text-gray-500" />;
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
            {getFileIcon()}
          </div>
          <div className="flex-grow">
            <div className="flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-lg line-clamp-2">{title}</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 mb-3 line-clamp-2">{description}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center text-xs text-gray-500">
                  <span>{fileSize}</span>
                  <span className="mx-1">•</span>
                  <span>{downloadCount} downloads</span>
                </div>
                <div className="flex gap-2">
                  {previewUrl && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full">
                          <Eye className="h-4 w-4 mr-1" />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh]">
                        <DialogHeader>
                          <DialogTitle>{title}</DialogTitle>
                          <DialogDescription>{description}</DialogDescription>
                        </DialogHeader>
                        <div className="relative w-full h-[70vh]">
                          <iframe 
                            src={previewUrl} 
                            className="absolute top-0 left-0 w-full h-full border-none"
                            title={`${title} preview`}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  <Button size="sm" onClick={handleDownload} className="rounded-full">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DownloadResource; 