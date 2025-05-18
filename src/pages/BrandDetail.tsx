
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from "@/components/layout/Header";
import { BrandIdentityPreview } from "@/components/brand/BrandIdentityPreview";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample brand data - in a real app, this would come from an API
const mockBrands = {
  '1': {
    brandName: 'TechFlow',
    tagline: 'Streamline your workflow',
    missionStatement: 'At TechFlow, our mission is to provide innovative technology solutions that streamline workflows and enhance productivity for businesses of all sizes.',
    voiceDescription: 'The Professional tone of our brand communicates expertise and reliability to our B2B audience. Our messaging should be clear, direct, and focused on solutions, while maintaining a professional approach that resonates with enterprise clients.',
  },
  '2': {
    brandName: 'EcoGreen',
    tagline: 'Sustainable solutions for a greener tomorrow',
    missionStatement: 'EcoGreen is committed to developing sustainable products that help individuals and businesses reduce their environmental impact and contribute to a healthier planet.',
    voiceDescription: 'The Friendly tone of our brand conveys warmth and approachability to our environmentally conscious audience. Our voice should be educational and encouraging, inspiring customers to make sustainable choices.',
  },
  '3': {
    brandName: 'CoralWave',
    tagline: 'Ride the wave of innovation',
    missionStatement: 'CoralWave exists to push the boundaries of creativity and technology, providing cutting-edge solutions that help our clients stand out in a competitive marketplace.',
    voiceDescription: 'The Bold tone of our brand communicates confidence and innovation to our young professional audience. Our messaging should be dynamic, energetic, and forward-thinking, inspiring customers to embrace new ideas.',
  },
};

const BrandDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [brandData, setBrandData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/auth');
      return;
    }
    
    // Fetch brand data - in a real app, this would call an API
    if (id && mockBrands[id as keyof typeof mockBrands]) {
      setBrandData(mockBrands[id as keyof typeof mockBrands]);
    } else {
      navigate('/dashboard');
    }
    
    setLoading(false);
  }, [id, navigate]);
  
  const handleSave = () => {
    // In a real app, this would update the database
    navigate('/dashboard');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link to="/dashboard">
              <Button variant="ghost" className="mb-4">
                ← Back to Dashboard
              </Button>
            </Link>
            
            <h1 className="text-3xl font-bold">{brandData?.brandName}</h1>
            <p className="text-muted-foreground">{brandData?.tagline}</p>
          </div>
          
          {brandData && (
            <BrandIdentityPreview
              brandName={brandData.brandName}
              tagline={brandData.tagline}
              missionStatement={brandData.missionStatement}
              voiceDescription={brandData.voiceDescription}
              onSave={handleSave}
            />
          )}
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

export default BrandDetail;
