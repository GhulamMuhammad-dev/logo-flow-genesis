
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Placeholder logo images 
const logoPlaceholders = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
];

// Sample color palettes
const colorPalettes = [
  { 
    name: "Modern Blue",
    colors: ["#60A5FA", "#3B82F6", "#2563EB", "#1D4ED8", "#1E40AF"] 
  },
  { 
    name: "Fresh Green", 
    colors: ["#34D399", "#10B981", "#059669", "#047857", "#065F46"] 
  },
  { 
    name: "Vibrant Coral", 
    colors: ["#FDA4AF", "#F87171", "#EF4444", "#DC2626", "#B91C1C"] 
  }
];

// Sample fonts
const fontOptions = [
  { name: "Inter", css: "font-sans" },
  { name: "Playfair Display", css: "font-serif" },
  { name: "Space Mono", css: "font-mono" }
];

interface BrandIdentityPreviewProps {
  brandName: string;
  tagline: string;
  missionStatement: string;
  voiceDescription: string;
  onSave: () => void;
}

export function BrandIdentityPreview({
  brandName,
  tagline,
  missionStatement,
  voiceDescription,
  onSave
}: BrandIdentityPreviewProps) {
  const [selectedLogoIndex, setSelectedLogoIndex] = useState(0);
  const [selectedPaletteIndex, setSelectedPaletteIndex] = useState(0);
  const [selectedFontIndex, setSelectedFontIndex] = useState(0);
  
  const handleDownload = () => {
    // In a real application, this would generate and download a PDF/ZIP
    toast.success('Brand kit downloaded');
  };

  const handleRegeneratePalette = () => {
    const newIndex = (selectedPaletteIndex + 1) % colorPalettes.length;
    setSelectedPaletteIndex(newIndex);
    toast.success('Generated new color palette');
  };

  const handleRegenerateFont = () => {
    const newIndex = (selectedFontIndex + 1) % fontOptions.length;
    setSelectedFontIndex(newIndex);
    toast.success('Generated new font pairing');
  };

  return (
    <div className="w-full max-w-4xl animate-fade-in">
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="logo">Logo</TabsTrigger>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="voice">Voice & Tone</TabsTrigger>
        </TabsList>
        
        <TabsContent value="preview" className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{brandName}</h1>
            <p className="text-lg text-muted-foreground">{tagline}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Logo</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="w-32 h-32 rounded-md logo-placeholder flex items-center justify-center text-white font-bold">
                  {brandName.substring(0, 2).toUpperCase()}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 justify-center">
                  {colorPalettes[selectedPaletteIndex].colors.map((color, i) => (
                    <div key={i} style={{ backgroundColor: color }} className="w-8 h-8 rounded-full" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-center ${fontOptions[selectedFontIndex].css}`}>
                  {fontOptions[selectedFontIndex].name}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" onClick={handleDownload}>
              Download Kit
            </Button>
            <Button onClick={onSave}>
              Save Brand Kit
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="logo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Your Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {logoPlaceholders.map((src, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedLogoIndex(index)}
                    className={`cursor-pointer p-4 border rounded-md ${
                      selectedLogoIndex === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <div className="w-full aspect-square logo-placeholder rounded-md flex items-center justify-center text-white font-bold text-3xl">
                      {brandName.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button className="w-full">Regenerate Logos</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">{colorPalettes[selectedPaletteIndex].name}</h3>
                <div className="grid grid-cols-5 gap-2">
                  {colorPalettes[selectedPaletteIndex].colors.map((color, i) => (
                    <div key={i} className="space-y-2">
                      <div 
                        style={{ backgroundColor: color }} 
                        className="w-full h-16 rounded-md"
                      ></div>
                      <p className="text-xs text-center">{color}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Typography</h3>
                <p className={`text-lg mb-1 ${fontOptions[selectedFontIndex].css}`}>
                  {fontOptions[selectedFontIndex].name}
                </p>
                <p className={`text-sm text-muted-foreground ${fontOptions[selectedFontIndex].css}`}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1" onClick={handleRegeneratePalette}>
                  Regenerate Colors
                </Button>
                <Button variant="outline" className="flex-1" onClick={handleRegenerateFont}>
                  Regenerate Font
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="voice" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Voice & Tone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Tagline</h3>
                <p className="text-xl font-medium">{tagline}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Mission Statement</h3>
                <p>{missionStatement}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Voice Description</h3>
                <p>{voiceDescription}</p>
              </div>
              <Button variant="outline" className="w-full">
                Regenerate Voice & Tone
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
