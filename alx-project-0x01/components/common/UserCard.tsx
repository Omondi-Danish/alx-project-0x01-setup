import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* User Header */}
      <div className="mb-4 border-b pb-3">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-lg text-blue-600">@{username}</p>
      </div>

      {/* Contact Information */}
      <div className="mb-4 space-y-2">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 w-20">Email:</span>
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline text-sm">
            {email}
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 w-20">Phone:</span>
          <a href={`tel:${phone}`} className="text-blue-500 hover:underline text-sm">
            {phone}
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 w-20">Website:</span>
          <a 
            href={`https://${website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm"
          >
            {website}
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Address:</h4>
        <div className="text-sm text-gray-600 pl-2">
          <p>{address.street}, {address.suite}</p>
          <p>{address.city}, {address.zipcode}</p>
        </div>
      </div>

      {/* Company */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Company:</h4>
        <div className="text-sm text-gray-600 pl-2">
          <p className="font-medium">{company.name}</p>
          <p className="italic">"{company.catchPhrase}"</p>
          <p className="text-xs text-gray-500">{company.bs}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t text-center">
        <span className="text-xs text-gray-400">User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;