interface PortalLinkProps {
  icon: string;
  title: string;
}

export const PortalLink = ({ icon, title }: PortalLinkProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <img src={icon} alt="" className="w-8 h-8" loading="lazy" />
      <span className="font-medium text-gray-800">{title}</span>
    </div>
  );
};