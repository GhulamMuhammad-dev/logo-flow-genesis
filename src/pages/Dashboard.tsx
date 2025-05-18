
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { BrandKitCard, BrandKit } from "@/components/brand/BrandKitCard";
import { Link } from 'react-router-dom';
import { toast } from "sonner";

// Mock data for brand kits
const mockBrandKits: BrandKit[] = [
  {
    id: '1',
    brandName: 'TechFlow',
    tagline: 'Streamline your workflow',
    createdAt: '2023-09-15T14:30:00Z',
    colorPalette: ['#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF']
  },
  {
    id: '2',
    brandName: 'EcoGreen',
    tagline: 'Sustainable solutions for a greener tomorrow',
    createdAt: '2023-10-21T09:45:00Z',
    colorPalette: ['#34D399', '#10B981', '#059669', '#047857', '#065F46']
  },
  {
    id: '3',
    brandName: 'CoralWave',
    tagline: 'Ride the wave of innovation',
    createdAt: '2024-01-05T16:20:00Z',
    colorPalette: ['#FDA4AF', '#F87171', '#EF4444', '#DC2626', '#B91C1C']
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [brandKits, setBrandKits] = useState<BrandKit[]>([]);
  
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/auth');
      return;
    }
    
    // Load brand kits - in a real app, this would come from an API
    setBrandKits(mockBrandKits);
  }, [navigate]);
  
  const handleViewBrandKit = (id: string) => {
    navigate(`/brand/${id}`);
  };
  
  const handleDeleteBrandKit = (id: string) => {
    setBrandKits(brandKits.filter(kit => kit.id !== id));
    toast.success('Brand kit deleted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Brand Kits</h1>
            <Link to="/create">
              <Button>Create New Brand</Button>
            </Link>
          </div>
          
          {brandKits.length === 0 ? (
            <div className="bg-white rounded-lg border p-16 text-center">
              <h2 className="text-xl font-medium mb-4">No Brand Kits Yet</h2>
              <p className="text-muted-foreground mb-6">
                Create your first brand kit to get started.
              </p>
              <Link to="/create">
                <Button>Create Brand Kit</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandKits.map((brandKit) => (
                <BrandKitCard 
                  key={brandKit.id}
                  brandKit={brandKit}
                  onView={handleViewBrandKit}
                  onDelete={handleDeleteBrandKit}
                />
              ))}
            </div>
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

export default Dashboard;
