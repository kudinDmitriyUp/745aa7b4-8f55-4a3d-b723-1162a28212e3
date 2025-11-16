"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metric/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Award, Briefcase, Calendar, Camera, Crown, Gift, Handshake, Heart, HelpCircle, Key, MessageSquare, Phone, Sparkles, Star, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Gallery", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Elegance Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled elegance and world-class hospitality at our premium hotel destination"
          tag="5-Star Excellence"
          tagIcon={Crown}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "product" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326688931-k4x2rjh3.jpg",
              imageAlt: "Luxury hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326689510-cxyxp1ju.jpg",
              imageAlt: "Elegant hotel suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326690037-c0xetucw.jpg",
              imageAlt: "Hotel pool area"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326690594-fmwk0cth.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326691284-au4px045.jpg",
              imageAlt: "Spa wellness center"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We create extraordinary experiences that transform ordinary moments into cherished memories, blending timeless elegance with modern luxury to deliver unparalleled hospitality"
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "View Gallery", href: "blog" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Premium Amenities"
          description="Experience world-class facilities designed for your comfort and convenience"
          tag="Luxury Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326692685-gceetm6n.jpg",
              imageAlt: "Professional concierge service",
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body with our premium spa treatments and wellness facilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326693243-9715mq0x.jpg",
              imageAlt: "Luxury spa wellness center",
              button: { text: "Book Treatment", href: "contact" }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by our award-winning chefs using the finest ingredients",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326693973-kk8oacjq.jpg",
              imageAlt: "Fine dining restaurant",
              button: { text: "View Menu", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Premium Rooms"
          tagIcon={Key}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "deluxe-room",
              brand: "Grand Elegance",
              name: "Deluxe Room",
              price: "$450/night",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326694464-hfs1sk6r.jpg",
              imageAlt: "Deluxe hotel room",
              onProductClick: () => window.open('#contact', '_self')
            },
            {
              id: "presidential-suite",
              brand: "Grand Elegance",
              name: "Presidential Suite",
              price: "$1,250/night",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326695042-j917spr0.jpg",
              imageAlt: "Presidential suite",
              onProductClick: () => window.open('#contact', '_self')
            },
            {
              id: "royal-penthouse",
              brand: "Grand Elegance",
              name: "Royal Penthouse",
              price: "$2,800/night",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326695573-uiv11dzi.jpg",
              imageAlt: "Royal penthouse suite",
              onProductClick: () => window.open('#contact', '_self')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Stay Packages"
          description="Select the perfect package for your luxury getaway"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "weekend-escape",
              badge: "Popular Choice",
              badgeIcon: Heart,
              price: "$899/stay",
              subtitle: "Perfect for romantic getaways",
              features: [
                "2 nights in Deluxe Room",
                "Complimentary breakfast",
                "Spa treatment for two",
                "Welcome champagne",
                "Late checkout"
              ]
            },
            {
              id: "business-executive",
              badge: "Business Travel",
              badgeIcon: Briefcase,
              price: "$1,299/stay",
              subtitle: "Ideal for business travelers",
              features: [
                "3 nights in Executive Suite",
                "Business center access",
                "Airport transfers",
                "Meeting room credits",
                "Premium WiFi"
              ]
            },
            {
              id: "ultimate-luxury",
              badge: "Most Exclusive",
              badgeIcon: Crown,
              price: "$3,499/stay",
              subtitle: "The ultimate luxury experience",
              features: [
                "3 nights in Royal Penthouse",
                "Personal butler service",
                "Michelin-star dining",
                "Helicopter transfers",
                "Exclusive spa access"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Award-Winning Excellence"
          description="Recognized globally for our commitment to luxury and exceptional service"
          tag="Achievements"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "Awards",
              description: "International hospitality awards and recognitions",
              icon: Award
            },
            {
              id: "2",
              value: "98%",
              title: "Satisfaction",
              description: "Guest satisfaction rate from verified reviews",
              icon: Star
            },
            {
              id: "3",
              value: "25",
              title: "Years",
              description: "Years of exceptional hospitality service",
              icon: Calendar
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="Dedicated professionals committed to exceptional service"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "James Mitchell",
              role: "General Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326696283-jvbokbm2.jpg",
              imageAlt: "James Mitchell - General Manager"
            },
            {
              id: "2",
              name: "Marie Dubois",
              role: "Executive Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326697075-1vlhmeem.jpg",
              imageAlt: "Marie Dubois - Executive Chef"
            },
            {
              id: "3",
              name: "Alessandro Romano",
              role: "Head Concierge",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326697588-2qmpvuyc.jpg",
              imageAlt: "Alessandro Romano - Head Concierge"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear what our valued guests say about their stay"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, TechCorp",
              testimonial: "Absolutely exceptional service and attention to detail. The staff anticipated every need and the accommodations were beyond luxurious.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326698211-3wkmd8kc.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              testimonial: "This hotel redefined luxury for me. From the personalized butler service to the exquisite dining, everything was flawless.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326699158-9e6mf294.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Fashion Designer",
              testimonial: "A truly magical experience. The spa treatments were divine and the penthouse suite offered breathtaking views.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326699870-lec3l3be.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Entrepreneur",
              testimonial: "The perfect blend of elegance and comfort. Every moment of our stay felt like a special occasion.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326700548-fmm3nfy0.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Isabella Martinez",
              role: "Art Curator",
              testimonial: "Impeccable service and stunning architecture. The attention to cultural details made our stay unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326701396-qu82we8t.jpg",
              imageAlt: "Isabella Martinez"
            },
            {
              id: "6",
              name: "Robert Thompson",
              role: "Business Consultant",
              testimonial: "Outstanding hospitality and world-class amenities. This is how luxury should be experienced.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326701997-zx5nv1ul.jpg",
              imageAlt: "Robert Thompson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Luxury Travelers"
          description="Join discerning guests who choose excellence and sophistication"
          tag="Partnerships"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326702697-2gn8dwwf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326703412-09nj06p2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326704328-45jtnbnn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326705046-ord6ep5r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326705814-tx0y4yhu.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326706501-aosj16c6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326707203-a2gjfi2e.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about your luxury stay"
          tag="Help Center"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out can be arranged based on availability for an additional fee."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfers including limousine service and helicopter transfers for our suite guests. Please contact our concierge for arrangements."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three restaurants: a Michelin-starred fine dining restaurant, a casual bistro, and a rooftop bar. Room service is available 24/7."
            },
            {
              id: "4",
              title: "Is there a spa and fitness center?",
              content: "Our luxury spa offers a full range of treatments and our fitness center is equipped with state-of-the-art equipment and personal training services."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations made 48 hours prior to arrival receive a full refund. Cancellations within 48 hours are subject to a one-night charge."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel Gallery & Updates"
          description="Discover our latest features, events, and luxury experiences"
          tag="Featured Content"
          tagIcon={Camera}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Travel",
              title: "Top Luxury Destinations for 2024",
              excerpt: "Explore the world's most exclusive travel destinations and what makes them extraordinary",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326708229-ffdyjbf5.jpg",
              imageAlt: "Luxury travel destination",
              authorName: "Emma Wilson",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326698211-3wkmd8kc.jpg",
              date: "15 Jan 2024"
            },
            {
              id: "2",
              category: "Dining",
              title: "Culinary Excellence at Grand Elegance",
              excerpt: "Meet our executive chef and discover the artistry behind our award-winning cuisine",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326709043-tyh3v257.jpg",
              imageAlt: "Gourmet dining experience",
              authorName: "Chef Marie Dubois",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326697075-1vlhmeem.jpg",
              date: "12 Jan 2024"
            },
            {
              id: "3",
              category: "Wellness",
              title: "The Ultimate Spa Experience",
              excerpt: "Discover our signature treatments and wellness programs designed for total relaxation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326709524-up3ej356.jpg",
              imageAlt: "Luxury spa treatment",
              authorName: "Dr. Alexandra Green",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326699158-9e6mf294.jpg",
              date: "8 Jan 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Luxury Experience"
          description="Ready to experience unparalleled luxury? Contact our reservations team to plan your perfect stay."
          tagIcon={Phone}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763326710252-h9pvdxn7.jpg"
          imageAlt="Hotel reception desk"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Get Information"
          termsText="By submitting, you agree to receive exclusive offers and updates about our luxury accommodations."
        />
      </div>
    </ThemeProvider>
  );
}