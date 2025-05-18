
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const industryOptions = [
  "Technology", "Healthcare", "Finance", "Education", 
  "Food & Beverage", "Fashion", "Entertainment", "Retail",
  "Fitness", "Travel", "Real Estate", "Marketing"
];

const toneOptions = [
  "Professional", "Friendly", "Innovative", "Luxurious", 
  "Playful", "Bold", "Minimalist", "Traditional", "Futuristic"
];

const audienceOptions = [
  "B2B", "B2C", "Young Adults", "Parents", "Professionals", 
  "Enterprise", "Startups", "Seniors", "Students", "Families"
];

interface BrandBriefFormProps {
  onSubmit: (data: BrandBriefData) => void;
}

export interface BrandBriefData {
  brandName: string;
  industry: string;
  description: string;
  tone: string;
  targetAudience: string;
}

export function BrandBriefForm({ onSubmit }: BrandBriefFormProps) {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [description, setDescription] = useState('');
  const [tone, setTone] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      onSubmit({ 
        brandName, 
        industry, 
        description, 
        tone, 
        targetAudience 
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Your Brand Brief</CardTitle>
        <CardDescription>
          Tell us about your brand to generate your unique identity
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="brandName" className="text-sm font-medium">Brand Name *</label>
            <Input 
              id="brandName"
              placeholder="e.g. Acme Inc" 
              required
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="industry" className="text-sm font-medium">Industry *</label>
            <Select required value={industry} onValueChange={setIndustry}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent>
                {industryOptions.map((option) => (
                  <SelectItem key={option} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">Brand Description *</label>
            <Textarea 
              id="description"
              placeholder="Describe what your brand does, its mission and values..." 
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="tone" className="text-sm font-medium">Brand Tone *</label>
              <Select required value={tone} onValueChange={setTone}>
                <SelectTrigger id="tone">
                  <SelectValue placeholder="Select a tone" />
                </SelectTrigger>
                <SelectContent>
                  {toneOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="audience" className="text-sm font-medium">Target Audience *</label>
              <Select required value={targetAudience} onValueChange={setTargetAudience}>
                <SelectTrigger id="audience">
                  <SelectValue placeholder="Select an audience" />
                </SelectTrigger>
                <SelectContent>
                  {audienceOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={loading || !brandName || !industry || !description || !tone || !targetAudience}
          >
            {loading ? 'Generating...' : 'Generate Brand Identity'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
