import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { useEffect, useRef, memo, useCallback, useState } from 'react';
import { PROJECT_IMAGES } from './constants/images';

const projects = [
  {
    id: 1,
    name: 'Eastfield',
    subtitle: 'By Urbanest Realty',
    location: 'Bangalore East - Hoskote',
    description: 'Modern luxury apartments with premium amenities and excellent connectivity to major IT hubs in Bangalore.',
    image: PROJECT_IMAGES.eastfield,
    features: ['3 BHK Premium Residences', '1744 - 1886 sq ft'],
    price: 'Starting from ₹1.39 Cr',
    propertyType: '3 BHK Premium Residences',
    area: '1744 - 1886 sq ft',
    status: 'Ongoing',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Security']
  },
  {
    id: 2,
    name: 'Serene Exotica',
    subtitle: 'By Urbanest Realty',
    location: 'Bangalore East - Malur Town',
    description: 'Tranquil living spaces designed for families seeking peace and luxury in a well-connected neighborhood.',
    image: PROJECT_IMAGES.serene,
    features: ['Premium Villa plots', '1500 - 5500 sq ft'],
    price: 'Starting from ₹59 Lakhs',
    propertyType: 'Premium Villa plots',
    area: '1500 - 5500 sq ft',
    status: 'Ongoing',
    amenities: ['Landscaped Gardens', 'Kids Play Area', 'Jogging Track', 'Library']
  },
  {
    id: 3,
    name: 'Elite-35',
    subtitle: 'By Urbanest Realty',
    location: 'Bangalore East - Budigere Cross',
    description: 'Premium residences featuring modern architecture and world-class facilities for contemporary living.',
    image: PROJECT_IMAGES.elite,
    features: ['3 BHK Apartments', '1200 - 1664 sq ft'],
    price: 'Starting from ₹80 Lakhs',
    propertyType: '3 BHK Apartments',
    area: '1200 - 1664 sq ft',
    status: 'Completed',
    amenities: ['Infinity Pool', 'Spa', 'Business Center', 'Garden']
  }
];

export const Projects = memo(function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [loadingProject, setLoadingProject] = useState<string | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Only enable auto-scroll on desktop (md and up)
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    const autoScroll = () => {
      if (mediaQuery.matches) {
        const nextButton = carousel.querySelector('[data-carousel="next"]') as HTMLButtonElement;
        if (nextButton) {
          nextButton.click();
        }
      }
    };

    const interval = setInterval(autoScroll, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle project click with loading state
  const handleProjectClick = useCallback((projectName: string, url: string) => {
    setLoadingProject(projectName);
    // Add small delay for visual feedback before navigation
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setLoadingProject(null);
    }, 100);
  }, []);

  return (
    <section id="projects" className="pt-12 pb-0 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-6 text-gray-900">OUR PROJECTS</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our exceptional portfolio of residential developments that showcase the perfect blend of modern design, 
            luxury amenities, and strategic locations across Bangalore.
          </p>
        </div>

        {/* Mobile Layout - Vertical Stack */}
        <div className="md:hidden space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-gray-200">
              <CardHeader className="pb-4 text-center">
                <div>
                  <CardTitle className={`text-gray-900 ${project.name === 'Eastfield' || project.name === 'Serene Exotica' || project.name === 'Elite-35' ? 'text-3xl font-bold' : 'text-xl'}`}>
                    {project.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 text-center">{project.subtitle}</p>
                </div>
                <CardDescription className="flex items-center justify-center text-gray-600 mt-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </CardDescription>
              </CardHeader>
              
              <div className="relative overflow-hidden group">
                {project.name === 'Eastfield' ? (
                  <div 
                    onClick={() => handleProjectClick('Eastfield', 'https://eastfieldbyurbanest.com')}
                    className="cursor-pointer relative"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover transition-all duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                    {loadingProject === 'Eastfield' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                      </div>
                    )}
                  </div>
                ) : project.name === 'Serene Exotica' ? (
                  <div 
                    onClick={() => handleProjectClick('Serene Exotica', 'https://sereneexotica.in')}
                    className="cursor-pointer relative"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover transition-all duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                    {loadingProject === 'Serene Exotica' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="w-8 h-8 text-white animate-spin" />
                      </div>
                    )}
                  </div>
                ) : (
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover transition-all duration-200"
                    loading="lazy"
                  />
                )}
                <Badge 
                  className="absolute top-4 right-4 !bg-black !text-white hover:!bg-gray-900"
                >
                  {project.status}
                </Badge>
              </div>
              
              <CardContent className="pt-4 pb-6 text-center">
                <div className="text-gray-900 font-bold text-lg mb-2 text-center">{project.price}</div>
                <p className="text-gray-700 mb-4 text-center">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700">
                      {feature}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Layout - Horizontal Carousel */}
        <div className="hidden md:block" ref={carouselRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-full lg:basis-full">
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white border-gray-200">
                    <CardHeader className="pb-4 text-center">
                      <div>
                        <CardTitle className={`text-gray-900 ${project.name === 'Eastfield' || project.name === 'Serene Exotica' || project.name === 'Elite-35' ? 'text-3xl font-bold' : 'text-xl'}`}>
                          {project.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600 text-center">{project.subtitle}</p>
                      </div>
                      <CardDescription className="flex items-center justify-center text-gray-600 mt-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </CardDescription>
                    </CardHeader>
                    
                    <div className="relative overflow-hidden group">
                      {project.name === 'Eastfield' ? (
                        <div 
                          onClick={() => handleProjectClick('Eastfield', 'https://eastfieldbyurbanest.com')}
                          className="cursor-pointer relative"
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={project.name}
                            className="w-full h-[500px] object-cover transition-all duration-200 group-hover:scale-105"
                            loading="lazy"
                          />
                          {loadingProject === 'Eastfield' && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Loader2 className="w-8 h-8 text-white animate-spin" />
                            </div>
                          )}
                        </div>
                      ) : project.name === 'Serene Exotica' ? (
                        <div 
                          onClick={() => handleProjectClick('Serene Exotica', 'https://sereneexotica.in')}
                          className="cursor-pointer relative"
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={project.name}
                            className="w-full h-[500px] object-cover transition-all duration-200 group-hover:scale-105"
                            loading="lazy"
                          />
                          {loadingProject === 'Serene Exotica' && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                              <Loader2 className="w-8 h-8 text-white animate-spin" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <ImageWithFallback
                          src={project.image}
                          alt={project.name}
                          className="w-full h-[500px] object-cover transition-all duration-200"
                          loading="lazy"
                        />
                      )}
                      <Badge 
                        className="absolute top-4 right-4 md:top-8 md:right-8 !bg-black !text-white hover:!bg-gray-900 rounded-none"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <CardContent className="pt-4 pb-6 text-center">
                      <div className="text-gray-900 font-bold text-lg mb-2 text-center">{project.price}</div>
                      <p className="text-gray-700 mb-4 text-center">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {project.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="border-gray-300 text-gray-700">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" data-carousel="prev" />
            <CarouselNext className="right-4" data-carousel="next" />
          </Carousel>
        </div>
      </div>
    </section>
  );
});
