import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const API_BASE_URL = 'http://localhost:1326';

function MachineListingPage() {
  const { id } = useParams(); // Get the machine ID from the URL
  const [data, setData] = useState({
    machine: null,
    inspection: null,
    maintenance: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImage, setActiveImage] = useState('');

  // 1. Fetch Data
  useEffect(() => {
    const fetchMachineDetails = async () => {
      try {
        setLoading(true);
        // Execute requests in parallel for performance
        const [machineRes, inspectionRes, maintenanceRes] = await Promise.allSettled([
          fetch(`${API_BASE_URL}/api/machines/${id}`),
          fetch(`${API_BASE_URL}/api/machines/${id}/inspection`),
          fetch(`${API_BASE_URL}/api/machines/${id}/maintenance`)
        ]);

        if (machineRes.status === 'rejected' || !machineRes.value.ok) {
          throw new Error('Machine not found');
        }

        const machineData = await machineRes.value.json();
        const inspectionData = inspectionRes.status === 'fulfilled' && inspectionRes.value.ok 
            ? await inspectionRes.value.json() 
            : null;
        const maintenanceData = maintenanceRes.status === 'fulfilled' && maintenanceRes.value.ok 
            ? await maintenanceRes.value.json() 
            : [];

        setData({
          machine: machineData,
          inspection: inspectionData,
          maintenance: maintenanceData
        });

        // Set initial main image
        if (machineData.images && machineData.images.length > 0) {
            setActiveImage(getImageUrl(machineData.images[0]));
        }

      } catch (err) {
        console.error(err);
        setError("Could not load machine details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMachineDetails();
  }, [id]);

  // Helper: Image URL Resolver
  const getImageUrl = (imagePath) => {
    if (!imagePath) return 'https://via.placeholder.com/600x400?text=No+Image';
    if (imagePath.startsWith('http')) return imagePath;
    return `${API_BASE_URL}/uploads/${imagePath}`;
  };

  // Helper: Currency Formatter
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Helper: Calculate Totals (Mocking logistics for now based on % of price)
  const calculateCosts = (basePrice) => {
    const logistics = basePrice * 0.03; // Approx 3%
    const insurance = basePrice * 0.012; // Approx 1.2%
    return {
        logistics,
        insurance,
        total: basePrice + logistics + insurance
    };
  };

  if (loading) return <div className="flex h-screen justify-center items-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">Loading Details...</div>;
  if (error || !data.machine) return <div className="flex h-screen justify-center items-center bg-background-light dark:bg-background-dark text-red-500">{error || "Machine Not Found"}</div>;

  const { machine, inspection, maintenance } = data;
  const costs = calculateCosts(machine.price_for_sale);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display">
      <Navbar />

      <main className="layout-container flex h-full grow flex-col">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium hover:text-primary" to="/">Home</Link>
            <span className="text-text-muted-light">/</span>
            <Link className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium hover:text-primary" to="/machines">All Machines</Link>
            <span className="text-text-muted-light">/</span>
            <span className="text-text-light dark:text-text-dark text-sm font-medium">{machine.title}</span>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column: Media Gallery */}
            <div className="lg:col-span-3">
              <div className="flex flex-col gap-4">
                {/* Main Image */}
                <div 
                  className="w-full bg-center bg-no-repeat bg-cover bg-white rounded-xl aspect-[4/3] transition-all duration-300" 
                  style={{ backgroundImage: `url("${activeImage}")` }}
                ></div>
                
                {/* Thumbnails */}
                {machine.images && machine.images.length > 0 && (
                    <div className="grid grid-cols-4 gap-4">
                    {machine.images.map((img, index) => {
                        const url = getImageUrl(img);
                        return (
                            <div 
                                key={index}
                                onClick={() => setActiveImage(url)}
                                className={`w-full bg-center bg-no-repeat bg-cover aspect-square rounded-lg cursor-pointer border-2 ${activeImage === url ? 'border-primary' : 'border-transparent'}`}
                                style={{ backgroundImage: `url("${url}")` }}
                            ></div>
                        );
                    })}
                    </div>
                )}
              </div>
            </div>

            {/* Right Column: Purchase Box */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col gap-3 mb-6">
                  <h1 className="text-text-light dark:text-white text-3xl font-bold">{machine.title}</h1>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-base">
                    Make: {machine.manufacturer}, Model: {machine.model || 'N/A'}
                  </p>
                </div>

                {/* Verified Badge */}
                <div className="flex items-center gap-4 bg-secondary/10 dark:bg-secondary/20 text-secondary p-4 rounded-lg mb-6 border border-secondary/50">
                  <span className="material-symbols-outlined text-4xl">verified_user</span>
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg">Vishwakarma Verified</h3>
                    <p className="text-sm">Passed our rigid inspection process.</p>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex justify-between items-center text-text-muted-light dark:text-text-muted-dark">
                    <span>Machine Price</span>
                    <span className="text-text-light dark:text-text-dark font-medium">{formatCurrency(machine.price_for_sale)}</span>
                  </div>
                  <div className="flex justify-between items-center text-text-muted-light dark:text-text-muted-dark">
                    <span>Est. Logistics</span>
                    <span className="text-text-light dark:text-text-dark font-medium">{formatCurrency(costs.logistics)}</span>
                  </div>
                  <div className="flex justify-between items-center text-text-muted-light dark:text-text-muted-dark">
                    <span>Mandatory Insurance</span>
                    <span className="text-text-light dark:text-text-dark font-medium">{formatCurrency(costs.insurance)}</span>
                  </div>
                  <div className="border-t border-dashed border-gray-300 dark:border-gray-600 my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-text-light dark:text-white">Total Price</span>
                    <span className="font-bold text-lg text-primary dark:text-accent">{formatCurrency(costs.total)}</span>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-xs text-status-pass">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span>Payment secured by Escrow</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="flex w-full items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90 transition-colors">
                    Buy Now
                  </button>
                  <button className="flex w-full items-center justify-center rounded-lg h-12 px-6 bg-transparent border-2 border-primary text-primary text-base font-bold hover:bg-primary/10 transition-colors">
                    Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Expanded Vishwakarma Verified Report */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">assignment_turned_in</span>
              <h2 className="text-3xl font-bold text-text-light dark:text-white">Vishwakarma Verified Report</h2>
            </div>
            
            {!inspection ? (
                 <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">Inspection report pending or not available.</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Report Summary */}
                <div className="md:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-4">Inspection Summary</h3>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
                        {inspection.summary || "Machine operational with noted observations."}
                    </p>
                    <div className="space-y-2 text-sm">
                        <p><strong className="font-semibold">Inspector:</strong> {inspection.inspector_name || 'Assigned Inspector'}</p>
                        <p><strong className="font-semibold">Date:</strong> {inspection.inspection_date ? new Date(inspection.inspection_date).toLocaleDateString() : 'N/A'}</p>
                        <p><strong className="font-semibold">Verdict:</strong> <span className="font-bold text-status-pass">PASS</span></p>
                    </div>
                </div>

                {/* Dynamic Checklist */}
                <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-4">Technical Checklist</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {/* Example Mapping: Assuming Inspection object keys are booleans */}
                        {Object.entries(inspection).map(([key, value]) => {
                            if (typeof value !== 'boolean') return null;
                            const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                            return (
                                <div key={key} className="flex items-center gap-3">
                                    <span className={`material-symbols-outlined ${value ? 'text-status-pass' : 'text-status-fail'}`}>
                                        {value ? 'check_circle' : 'cancel'}
                                    </span>
                                    <span className="text-text-light dark:text-text-dark">{formattedKey}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            )}
          </div>

          {/* Maintenance History */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-4">Maintenance History</h3>
                {maintenance.length === 0 ? (
                    <p className="text-sm text-gray-500">No maintenance records found.</p>
                ) : (
                    <ul className="space-y-3">
                        {maintenance.map((record, index) => (
                            <li key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">description</span>
                                <div className="flex flex-col">
                                    <span className="font-medium text-sm">{record.description || "Service Record"}</span>
                                    <span className="text-xs text-text-muted-light dark:text-text-muted-dark">
                                        Date: {new Date(record.date).toLocaleDateString()}
                                    </span>
                                </div>
                                </div>
                                <span className="text-sm font-medium">{record.technician || "Service Center"}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MachineListingPage;