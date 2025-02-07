interface PortalLinkProps {
  icon: string;
  title: string;
}

export const PortalLink = ({ icon, title }: PortalLinkProps) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-600/40 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <img src={icon} alt="" className="w-6 h-6" loading="lazy" />
      <span className="font-medium text-white text-sm">{title}</span>
    </div>
  );
};