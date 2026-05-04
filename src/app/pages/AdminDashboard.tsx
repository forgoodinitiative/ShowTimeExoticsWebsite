import { useState } from "react";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";
import { cars as initialCars, Car } from "../data/cars";
import { toast } from "sonner";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [cars, setCars] = useState<Car[]>(initialCars);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production this would be handled by Supabase
    if (password === "admin123") {
      setIsAuthenticated(true);
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    toast.info("Logged out");
  };

  const handleDeleteCar = (id: string) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      setCars(cars.filter((car) => car.id !== id));
      toast.success("Car deleted successfully");
    }
  };

  const handleUpdateAvailability = (id: string) => {
    setCars(
      cars.map((car) =>
        car.id === id ? { ...car, available: !car.available } : car
      )
    );
    toast.success("Availability updated");
  };

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white/5 border border-white/10 p-8">
            <h1 className="text-3xl mb-6 tracking-tight text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Enter admin password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
              >
                Login
              </button>
              <p className="text-sm text-gray-400 text-center">
                Demo password: admin123
                <br />
                (In production, this would use Supabase authentication)
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl mb-2 tracking-tight">Admin Dashboard</h1>
              <p className="text-gray-400">Manage your fleet and inquiries</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 bg-blue-500/10 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-blue-400">
            📝 <strong>Note:</strong> This is a frontend demo. In production, fleet management and inquiry
            handling would be powered by Supabase for real-time updates, file storage, and database persistence.
          </p>
        </div>
      </section>

      {/* Fleet Management */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl tracking-tight">Fleet Management</h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              <Plus size={18} />
              <span>Add Vehicle</span>
            </button>
          </div>

          {showAddForm && (
            <div className="bg-white/5 border border-white/10 p-6 mb-6">
              <h3 className="text-xl mb-4">Add New Vehicle</h3>
              <p className="text-gray-400 text-sm">
                In production, this form would allow you to upload images and add vehicle details
                to your Supabase database.
              </p>
              <button
                onClick={() => setShowAddForm(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4">
            {cars.map((car) => (
              <div
                key={car.id}
                className="bg-white/5 border border-white/10 p-6 flex items-center justify-between"
              >
                <div className="flex items-center space-x-6">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.model}`}
                    className="w-32 h-20 object-cover"
                  />
                  <div>
                    <h3 className="text-xl">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-sm text-gray-400">{car.category}</p>
                    <p className="text-sm text-gray-500 mt-1">{car.rate}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleUpdateAvailability(car.id)}
                    className={`px-4 py-2 text-sm uppercase tracking-wider ${
                      car.available
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                        : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    } transition-colors`}
                  >
                    {car.available ? "Available" : "Booked"}
                  </button>
                  <button
                    onClick={() => setEditingCar(car)}
                    className="p-2 hover:bg-white/10 transition-colors"
                    title="Edit"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDeleteCar(car.id)}
                    className="p-2 hover:bg-red-500/20 text-red-400 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiries Section */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl mb-6 tracking-tight">Recent Inquiries</h2>
          <div className="bg-white/5 border border-white/10 p-8 text-center">
            <p className="text-gray-400 mb-2">No inquiries yet</p>
            <p className="text-sm text-gray-500">
              In production, inquiries submitted through the contact form would appear here,
              stored in Supabase with real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* Edit Modal */}
      {editingCar && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-white/20 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl mb-6">
              Edit {editingCar.brand} {editingCar.model}
            </h2>
            <p className="text-gray-400 mb-6">
              In production, you would be able to edit all vehicle details including images,
              descriptions, and pricing through this interface, with changes saved to Supabase.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setEditingCar(null)}
                className="flex-1 bg-white/10 px-6 py-3 hover:bg-white/20 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  toast.success("Changes saved (demo)");
                  setEditingCar(null);
                }}
                className="flex-1 bg-white text-black px-6 py-3 hover:bg-gray-200 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
