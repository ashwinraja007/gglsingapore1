import React, { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Globe,
  ExternalLink,
  Phone,
  Mail,
  Home,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

/* -------------------- Types -------------------- */
interface City {
  name: string;
  lat: number;
  lng: number;
  address?: string;
  contacts?: string[];
  email?: string;
}

interface Country {
  code: string;
  name: string;
  lat: number;
  lng: number;
  cities: City[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/* -------------------- Data -------------------- */
const countries: Country[] = [
  {
    code: "in",
    name: "India",
    lat: 20.5937,
    lng: 78.9629,
    cities: [
      {
        name: "Kochi",
        lat: 9.9323,
        lng: 76.2996,
        address:
          "CC 59/801A Elizabeth Memorial Building, Thevara Ferry Jn, Cochin 682013, Kerala",
        contacts: ["+91 484 4019192 / 93"],
        email: "info.india@ggl.sg",
      },
      {
        name: "Mumbai",
        lat: 19.01123,
        lng: 73.03715,
        address:
          "803 / 804, Shelton Cubix, Plot No. 87, Sector-15, CBD Belapur, Navi Mumbai, Maharashtra - 400614",
        contacts: ["022-35131688 / 35113475 / 35082586"],
        email: "info.india@ggl.sg",
      },
      {
        name: "Delhi",
        lat: 28.62748,
        lng: 77.2221,
        address:
          "903, Surya Kiran Building, K.G Marg, Connaught Place, New Delhi - 110001",
        contacts: ["+91 11 49322447"],
        email: "info.india@ggl.sg",
      },
    ],
  },
  {
    code: "sg",
    name: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    cities: [
      {
        name: "Singapore",
        lat: 1.3521,
        lng: 103.8198,
        address:
          "Blk 511 Kampong Bahru Road, #03-01 Keppel Distripark, Singapore - 099447",
        contacts: ["+65 6908 4188"],
        email: "june@ggl.sg",
      },
    ],
  },
  {
    code: "ae",
    name: "United Arab Emirates",
    lat: 25.2048,
    lng: 55.2708,
    cities: [
      {
        name: "Dubai",
        lat: 25.2048,
        lng: 55.2708,
        address: "Office #509, Al Nazar Plaza, Oud Metha, Dubai",
        contacts: ["+971 4 3433388"],
      },
    ],
  },
];

/* Sort alphabetically */
const sortedCountries = [...countries].sort((a, b) =>
  a.name.localeCompare(b.name)
);

/* -------------------- Component -------------------- */
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [selectedCityIndexes, setSelectedCityIndexes] = useState<
    Record<string, number>
  >({});
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!sortedCountries.length) return;

    const initialIndexes: Record<string, number> = {};
    sortedCountries.forEach((c) => (initialIndexes[c.name] = 0));
    setSelectedCityIndexes(initialIndexes);
    setExpandedCountry(sortedCountries[0].name);
  }, []);

  const navigateToLocation = (lat: number, lng: number) => {
    const iframe = document.querySelector(
      'iframe[title="Interactive Map"]'
    ) as HTMLIFrameElement | null;

    if (!iframe) return;

    iframe.src = `https://www.google.com/maps/d/u/0/embed?mid=1d5jZQlEjnKqnsGHvdJWR5wB_-fcQ_Zk&z=10&ll=${lat},${lng}&output=embed`;
  };

  const handleCitySelection = (country: Country, index: number) => {
    setSelectedCityIndexes((prev) => ({
      ...prev,
      [country.name]: index,
    }));

    const city = country.cities[index];
    navigateToLocation(city.lat, city.lng);
  };

  return (
    <>
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <div className="my-3 w-full max-w-[520px] mx-auto px-2">
        <div className="flex items-center gap-2 px-4 py-3 bg-amber-500 text-white rounded-t-xl">
          <Globe className="w-5 h-5" />
          <h2 className="font-bold text-lg">Global Locations</h2>
        </div>

        <ScrollArea className="h-[calc(100vh-8rem)] bg-white rounded-b-xl shadow-md">
          <div className="p-4">
            <Accordion
              type="single"
              collapsible
              value={expandedCountry ?? ""}
            >
              {sortedCountries.map((country) => (
                <AccordionItem
                  key={country.name}
                  value={country.name}
                  className="border rounded-lg mb-3"
                >
                  <AccordionTrigger
                    onClick={() => {
                      setExpandedCountry(country.name);
                      navigateToLocation(country.lat, country.lng);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={`/${country.code}.svg`}
                        className="w-6 h-6"
                        alt={country.name}
                      />
                      {country.name}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    {country.cities.map((city, idx) => (
                      <Button
                        key={city.name}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start mb-2",
                          selectedCityIndexes[country.name] === idx &&
                            "bg-red-100"
                        )}
                        onClick={() =>
                          handleCitySelection(country, idx)
                        }
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {city.name}
                        <ChevronRight className="ml-auto w-4 h-4" />
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default Sidebar;
