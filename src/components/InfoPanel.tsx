
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Info } from "lucide-react";

const InfoPanel: React.FC = () => {
  return (
    <Card className="w-full mb-4 bg-gradient-to-br from-amber-50/50 to-white border-amber-100">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2 text-amber-700">
          <Info className="h-4 w-4" />
          Global Network
        </CardTitle>
        <CardDescription>
          Our international presence spans across 15 countries with 30+ offices
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-gray-600">
        <p>
          Select a country or city from the list below to view office details and navigate to their location on the map.
          Each office provides comprehensive logistics services tailored to local market needs.
        </p>
      </CardContent>
    </Card>
  );
};

export default InfoPanel;
