interface ServiceCardProps {
  image: string;
  title: string;
}

export const ServiceCard = ({ image, title }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-16 h-16 mb-4" loading="lazy" />
      <h3 className="text-lg font-semibold text-center text-gray-800">{title}</h3>
    </div>
  );
};