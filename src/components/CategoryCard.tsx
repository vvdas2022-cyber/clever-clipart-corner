import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, icon: Icon, description, image, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] cursor-pointer">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
