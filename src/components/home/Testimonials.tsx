import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    position: 'Fleet Manager, ConsTech Ltd',
    content: 'The quality of Nova Auto\'s JCB parts is outstanding. We\'ve significantly reduced our machinery downtime since switching to them as our primary supplier. Their technical support team is also incredibly knowledgeable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    position: 'Procurement Director, BuildCorp',
    content: 'Nova Auto has been our trusted partner for JCB spare parts for over 5 years. Their catalog is comprehensive, prices are competitive, and delivery is always prompt. I highly recommend their services.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'David Rodriguez',
    position: 'Maintenance Supervisor, EarthMovers Inc',
    content: 'Finding reliable parts for our aging JCB fleet was a challenge until we discovered Nova Auto. Their team helped us source even the most difficult-to-find components, saving us from costly equipment replacements.',
    rating: 4,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what industry professionals have to say about Nova Auto's products and services.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`w-full flex-shrink-0 transition-all duration-500 transform ${
                  index === currentTestimonial 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-full opacity-0 absolute'
                }`}
              >
                <div className="bg-white rounded-lg shadow-custom p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 object-cover rounded-full border-2 border-accent"
                      />
                    </div>
                    
                    <div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18}
                            className={i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-600 italic mb-4">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <div className="font-semibold text-primary">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-accent scale-125' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:text-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:text-accent transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;