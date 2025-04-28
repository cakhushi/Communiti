import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";

interface BlogPostProps {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

export function BlogPost({
  title,
  slug,
  excerpt,
  category,
  coverImage,
  author,
  date,
  readTime,
}: BlogPostProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {readTime}
          </div>
        </div>
        <CardTitle className="text-xl font-bold leading-tight">
          <Link to={`/blog/${slug}`} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2 text-sm">
          {excerpt}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">{author.name}</div>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3" />
          {date}
        </div>
      </CardFooter>
    </Card>
  );
} 