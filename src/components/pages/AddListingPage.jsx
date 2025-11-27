import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import { useAuth } from '../../context/AuthContext';

function AddListingPage() {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Image Upload State
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    manufacturer: '',
    model_number: '',
    year_of_manufacture: '',
    listing_type: 'sale', // sale, rent, both
    price_for_sale: '',
    rental_price_per_month: '',
    security_deposit: '',
    spindle_speed: '',
    axis_travel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Image File Selection & Upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setUploadingImage(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file); // Key 'file' must match backend handler

    try {
      const response = await fetch('http://localhost:1326/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
          // Content-Type is automatically set by browser for FormData
        },
        body: formData
      });

      if (!response.ok) {
        // Attempt to parse specific error message from image upload endpoint
        const errorData = await response.json();
        throw new Error(errorData.error || 'Image upload failed');
      }

      const data = await response.json();
      // Assuming backend returns { "url": "/uploads/filename.jpg" } or similar
      setImageUrl(data.url); 
      console.log('Image uploaded:', data.url);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Failed to upload image. Please check file type/size.');
      setImageFile(null); // Reset file input on error
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Construct the payload to match API expectations
    const payload = {
      title: formData.title,
      description: formData.description,
      manufacturer: formData.manufacturer,
      model_number: formData.model_number,
      year_of_manufacture: parseInt(formData.year_of_manufacture),
      listing_type: formData.listing_type,
      status: "listed",
      price_for_sale: formData.price_for_sale ? parseFloat(formData.price_for_sale) : 0,
      rental_price_per_month: formData.rental_price_per_month ? parseFloat(formData.rental_price_per_month) : 0,
      security_deposit: formData.security_deposit ? parseFloat(formData.security_deposit) : 0,
      specs: {
        spindle_speed: formData.spindle_speed,
        axis_travel: formData.axis_travel
      },
      // Include the uploaded image URL
      image_url: imageUrl 
    };

    try {
      const response = await fetch('http://localhost:1326/api/machines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || `Listing failed with status: ${response.status}`);
        return; // Exit here on failure
      }

      const data = await response.json();
      console.log('Listing created:', data);
      navigate('/'); // Redirect to home or listing page
    } catch (err) {
      // Handle network errors (e.g., server down)
      console.error(err);
      setError('A network error occurred. Could not connect to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-gray-200 min-h-screen flex flex-col">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sm:p-10">
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-primary dark:text-white">Sell or Rent Your Machine</h1>
              <p className="text-secondary dark:text-gray-400 mt-2">Fill in the details below to list your machinery on Vishwakarma Setu.</p>
            </div>

            {/* --- UPDATED ERROR ALERT STYLING --- */}
            {error && (
              <div className="relative mb-6 p-4 pr-12 flex items-center space-x-3 
                          bg-red-600 dark:bg-red-800 text-white 
                          border border-red-700 dark:border-red-900 
                          rounded-lg shadow-lg animate-fade-in-down">
                <span className="material-symbols-outlined text-2xl">error</span>
                <p className="font-medium text-base flex-grow">{error}</p>
                <button 
                  onClick={() => setError('')} 
                  className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
                  aria-label="Close alert"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Basic Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Basic Details</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  {/* Image Upload Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Machine Image</label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-primary/10 file:text-primary
                          hover:file:bg-primary/20
                        "
                      />
                      {uploadingImage && <span className="text-sm text-secondary animate-pulse">Uploading...</span>}
                      {!uploadingImage && imageUrl && <span className="text-sm text-green-600 font-medium">✓ Uploaded</span>}
                    </div>
                    {/* Image Preview */}
                    {imageUrl && (
                      <div className="mt-4">
                        <img 
                          src={`http://localhost:1326${imageUrl}`} 
                          alt="Preview" 
                          className="h-32 w-auto object-cover rounded-lg border border-gray-200"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Listing Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary"
                      placeholder="e.g. 2019 Haas VF-2 CNC Mill"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="form-textarea w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-primary focus:border-primary"
                      placeholder="Describe the condition, features, and history of the machine..."
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Manufacturer</label>
                    <input
                      type="text"
                      name="manufacturer"
                      value={formData.manufacturer}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      placeholder="e.g. Haas Automation"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Model Number</label>
                    <input
                      type="text"
                      name="model_number"
                      value={formData.model_number}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      placeholder="e.g. VF-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Year of Manufacture</label>
                    <input
                      type="number"
                      name="year_of_manufacture"
                      value={formData.year_of_manufacture}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      placeholder="e.g. 2019"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Pricing & Type Section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Pricing & Listing Type</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Listing Type</label>
                  <select
                    name="listing_type"
                    value={formData.listing_type}
                    onChange={handleChange}
                    className="form-select w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  >
                    <option value="sale">For Sale Only</option>
                    <option value="rent">For Rent Only</option>
                    <option value="both">Both Sale & Rent</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(formData.listing_type === 'sale' || formData.listing_type === 'both') && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Sale Price (₹)</label>
                      <input
                        type="number"
                        name="price_for_sale"
                        value={formData.price_for_sale}
                        onChange={handleChange}
                        className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                        placeholder="0.00"
                      />
                    </div>
                  )}

                  {(formData.listing_type === 'rent' || formData.listing_type === 'both') && (
                    <>
                      <div>
                        <label className="block text-sm font-medium mb-2">Monthly Rental (₹)</label>
                        <input
                          type="number"
                          name="rental_price_per_month"
                          value={formData.rental_price_per_month}
                          onChange={handleChange}
                          className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                          placeholder="0.00"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Security Deposit (₹)</label>
                        <input
                          type="number"
                          name="security_deposit"
                          value={formData.security_deposit}
                          onChange={handleChange}
                          className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                          placeholder="0.00"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Technical Specs Section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">Technical Specifications</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Spindle Speed</label>
                    <input
                      type="text"
                      name="spindle_speed"
                      value={formData.spindle_speed}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      placeholder="e.g. 8100 RPM"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Axis Travel (X/Y/Z)</label>
                    <input
                      type="text"
                      name="axis_travel"
                      value={formData.axis_travel}
                      onChange={handleChange}
                      className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                      placeholder="e.g. 30x16x20 inches"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading || uploadingImage}
                  className="w-full flex items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-bold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Listing...' : (uploadingImage ? 'Uploading Image...' : 'Publish Listing')}
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AddListingPage;