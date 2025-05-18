
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/layout/Header";
import { BrandBriefForm, BrandBriefData } from "@/components/brand/BrandBriefForm";
import { BrandIdentityPreview } from "@/components/brand/BrandIdentityPreview";
import { toast } from "sonner";

const CreateBrand = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'brief' | 'preview'>('brief');
  const [brandData, setBrandData] = useState<BrandBriefData | null>(null);
  const [generatedBrand, setGeneratedBrand] = useState<{
    tagline: string;
    missionStatement: string;
    voiceDescription: string;
  } | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/auth');
    }
  }, [navigate]);
  
  const handleBriefSubmit = (data: BrandBriefData) => {
    setBrandData(data);
    
    // Simulate AI generation - in a real app, this would call the AI service
    // Generate brand strategy based on inputs
    const generatedContent = {
      tagline: generateTagline(data.brandName, data.industry, data.tone),
      missionStatement: generateMissionStatement(data.brandName, data.industry, data.description),
      voiceDescription: generateVoiceDescription(data.tone, data.targetAudience)
    };
    
    setGeneratedBrand(generatedContent);
    setStep('preview');
  };
  
  const handleSaveBrandKit = () => {
    // In a real app, this would save to the database
    toast.success('Brand kit saved successfully');
    navigate('/dashboard');
  };
  
  // Simple generators for demo purposes
  const generateTagline = (name: string, industry: string, tone: string) => {
    const taglines = [
      `Transforming ${industry} for tomorrow`,
      `${name}: Redefining ${industry}`,
      `Innovative ${industry} solutions`,
      `The future of ${industry} is here`
    ];
    return taglines[Math.floor(Math.random() * taglines.length)];
  };
  
  const generateMissionStatement = (name: string, industry: string, description: string) => {
    return `At ${name}, our mission is to provide innovative ${industry} solutions that address the unique challenges of our customers. We are committed to delivering excellence through ${description.toLowerCase().includes('quality') ? 'quality' : 'cutting-edge'} products and services.`;
  };
  
  const generateVoiceDescription = (tone: string, audience: string) => {
    return `The ${tone.toLowerCase()} tone of our brand communicates expertise and reliability to our ${audience} audience. Our messaging should be clear, direct, and focused on solutions, while maintaining a ${tone.toLowerCase()} approach that resonates with ${audience}.`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            {step === 'brief' ? 'Create Your Brand Identity' : 'Your Brand Identity'}
          </h1>
          
          <div className="flex justify-center">
            {step === 'brief' ? (
              <BrandBriefForm onSubmit={handleBriefSubmit} />
            ) : (
              generatedBrand && brandData && (
                <BrandIdentityPreview 
                  brandName={brandData.brandName}
                  tagline={generatedBrand.tagline}
                  missionStatement={generatedBrand.missionStatement}
                  voiceDescription={generatedBrand.voiceDescription}
                  onSave={handleSaveBrandKit}
                />
              )
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-border py-4 px-4">
        <div className="container mx-auto">
          <p className="text-sm text-center text-muted-foreground">
            © 2025 BrandCraft AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreateBrand;
