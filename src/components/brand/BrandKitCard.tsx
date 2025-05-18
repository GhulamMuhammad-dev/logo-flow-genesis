
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash } from "lucide-react";

export interface BrandKit {
  id: string;
  brandName: string;
  tagline: string;
  createdAt: string;
  colorPalette: string[];
}

interface BrandKitCardProps {
  brandKit: BrandKit;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
}

export function BrandKitCard({ brandKit, onView, onDelete }: BrandKitCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{brandKit.brandName}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">{brandKit.tagline}</p>
        <div className="flex gap-2 mb-4">
          {brandKit.colorPalette.map((color, index) => (
            <div 
              key={index} 
              className="w-6 h-6 rounded-full" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Created on {new Date(brandKit.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm" onClick={() => onView(brandKit.id)}>
            <Edit className="mr-2 h-4 w-4" /> View
          </Button>
          <Button variant="outline" size="sm" onClick={() => onDelete(brandKit.id)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
