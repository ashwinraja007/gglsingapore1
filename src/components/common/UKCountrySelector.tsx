import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const UKCountrySelector = () => {
  const navigate = useNavigate();

  const handleValueChange = (value: string) => {
    if (value === "global") navigate("/");
    if (value === "bd") navigate("/bangladesh");
    if (value === "pk") navigate("/pakistan");
    if (value === "uk") navigate("/uk");
  };

  return (
    <Select defaultValue="uk" onValueChange={handleValueChange}>
      <SelectTrigger className="w-[140px] h-9 bg-white/50 border-gray-200 text-gray-700 text-xs font-medium focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center gap-2">
          <img
            src="https://flagcdn.com/w20/gb.png"
            srcSet="https://flagcdn.com/w40/gb.png 2x"
            width="20"
            height="15"
            alt="UK"
            className="rounded-[2px] object-cover"
          />
          <SelectValue placeholder="Select Country" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="global">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/sg.png"
              srcSet="https://flagcdn.com/w40/sg.png 2x"
              width="20"
              height="15"
              alt="Singapore"
              className="rounded-[2px] object-cover"
            />
            <span>Global (SG)</span>
          </div>
        </SelectItem>
        <SelectItem value="bd">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/bd.png"
              srcSet="https://flagcdn.com/w40/bd.png 2x"
              width="20"
              height="15"
              alt="Bangladesh"
              className="rounded-[2px] object-cover"
            />
            <span>Bangladesh</span>
          </div>
        </SelectItem>
        <SelectItem value="pk">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/pk.png"
              srcSet="https://flagcdn.com/w40/pk.png 2x"
              width="20"
              height="15"
              alt="Pakistan"
              className="rounded-[2px] object-cover"
            />
            <span>Pakistan</span>
          </div>
        </SelectItem>
        <SelectItem value="uk">
          <div className="flex items-center gap-2">
            <img
              src="https://flagcdn.com/w20/gb.png"
              srcSet="https://flagcdn.com/w40/gb.png 2x"
              width="20"
              height="15"
              alt="UK"
              className="rounded-[2px] object-cover"
            />
            <span>United Kingdom</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UKCountrySelector;