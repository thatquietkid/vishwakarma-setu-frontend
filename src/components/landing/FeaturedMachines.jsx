import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Configuration: Update this if your backend runs on a different port/URL
const API_BASE_URL = 'http://localhost:1326'; 

function FeaturedMachines() {
  const [machines, setMachines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMachines = async () => {
      try {
        // NOTE: Ensure this matches your CURL port (1326 based on your log)
        const response = await fetch(`http://localhost:1326/api/machines?limit=4&sort=oldest`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch machines');
        }

        const result = await response.json();
        
        // 👇 FIX: Check if result is an Array directly
        if (Array.isArray(result)) {
          setMachines(result);
        } else {
          // Fallback if your API wraps it in { data: ... } later
          setMachines(result.data || []); 
        }

      } catch (err) {
        console.error("Error fetching machines:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMachines();
  }, []);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://via.placeholder.com/400x225?text=No+Image';
    if (imagePath.startsWith('http')) return imagePath;
    return `${API_BASE_URL}/uploads/${imagePath}`;
  };

  if (loading) {
    return (
      <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-light dark:text-text-dark">Loading verified machines...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">Error loading machines: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-text-light dark:text-text-dark">Featured Verified Machines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {machines.map((machine) => (
            <div key={machine.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* ... Image Logic ... */}
              <div className="relative">
                 <div className="w-full bg-center bg-no-repeat aspect-video bg-cover" 
                      style={{ backgroundImage: `url("${getImageUrl(machine.images?.[0])}")` }}></div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">{machine.title}</h3>
                <p className="text-secondary dark:text-gray-400 text-sm mt-1">Manufacture: {machine.manufacturer}</p>
                <p className="text-lg font-bold text-primary dark:text-accent mt-2">${machine.price_for_sale}</p>
                <p className="text-secondary dark:text-gray-400 text-sm">{machine.location}</p>
                
                {/* --- UPDATE HERE: USE LINK --- */}
                <Link 
                  to={`/machines/${machine.id}`}
                  className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:opacity-90"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMachines;