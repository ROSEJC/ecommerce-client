import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function ContactCard({ type, title, content }) {
  let icon = null;
  if (type === "Locate") {
    icon = <MapPin className="w-6 h-6 text-black dark:text-white" />;
  } else if (type === "Phone") {
    icon = <Phone className="w-6 h-6 text-black dark:text-white" />;
  } else if (type === "Clock") {
    icon = <Clock className="w-6 h-6 text-black dark:text-white" />;
  } else if (type === "Mail") {
    icon = <Mail className="w-6 h-6 text-black dark:text-white" />;
  }

  return (
    <div className="flex items-stretch gap-3 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-md shadow-sm w-full max-w-[250px] text-lg mx-0">
      <div className="flex items-center text-lg text-black dark:text-white">
        {icon}
      </div>
      <div className="flex flex-col justify-center text-lg">
        <h4 className="font-semibold text-black dark:text-white text-lg">
          {title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 text-lg">{content}</p>
      </div>
    </div>
  );
}
