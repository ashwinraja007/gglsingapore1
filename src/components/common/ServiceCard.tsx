
interface ServiceCardProps {
  image: string;
  title: string;
}

export const ServiceCard = ({ image, title }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="w-32 h-32 mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain" 
          loading="lazy" 
        />
      </div>
      <h3 className="text-lg font-semibold text-center text-gray-800">{title}</h3>
    </div>
  );
};
