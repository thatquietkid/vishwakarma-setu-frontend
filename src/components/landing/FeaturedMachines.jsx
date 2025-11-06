import React from 'react';

function FeaturedMachines() {
  return (
    <section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark mb-10">Featured Verified Machines</h2>
        {/* ImageGrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="CNC Milling Machine"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDA0QHa98tIKqMWwJkT8_4I39rMyG5kyB3KK7KZbjcZmsQOvzGDLlkDW3lKgh1ulrjCdigUIxKzJS5GhcpydedbWpzQZWLQz-Ei_EVc3Fh4SXJt65Hf_ENT6-x5wPb81lF6WWG-1pOOAYR9rAorREXMZbGLxiW03Apa2rQztRSJwNxKdXdnJX0ZisWWvzZ3-bqtri-r6au2sANVohn3XmDw4TR6pfyvHumg870eEUTJggVEyFrXxFhefKV42D37a0FSBUsnzBgnqw")' }}
              ></div>
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-accent/90 text-white text-xs font-bold py-1 px-2 rounded-full">
                <span className="material-symbols-outlined !text-sm">verified</span>
                <span>Vishwakarma Verified</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">CNC Milling Machine</h3>
              <p className="text-secondary dark:text-gray-400 text-sm mt-1">Manufacturer: Haas, Model: VF-2</p>
              <p className="text-lg font-bold text-primary dark:text-accent mt-2">$55,000</p>
              <p className="text-secondary dark:text-gray-400 text-sm">Mumbai</p>
              <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                View Details
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Industrial Lathe"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDhQhCvJhDOeevQHNpNbovTDOlEZDb9RTzWrFme0oz1Lg4QrIJKMNpOZyyWTFK8FpRBjQ_-ClzYA0ZzfOC2NPiUd6pIdL5SiKFkZy6KaR-TvhHY-6b5comK_jz_FGyPc6GScfALnhaPv_ggw9qzHjUxl6u_OE5Nrgo3KJHis7dcc8oMSVisa6HReYHcOjIqy4TfYlpII69WCY4sSREuqsRk1DOBK32ffuoYOnFnaFK4vBD1-G_u4MMpgSmVkVXeevNaOXnfM6e5g")' }}
              ></div>
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-accent/90 text-white text-xs font-bold py-1 px-2 rounded-full">
                <span className="material-symbols-outlined !text-sm">verified</span>
                <span>Vishwakarma Verified</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Industrial Lathe</h3>
              <p className="text-secondary dark:text-gray-400 text-sm mt-1">Manufacturer: Mazak, Model: Q-Turn</p>
              <p className="text-lg font-bold text-primary dark:text-accent mt-2">$42,000</p>
              <p className="text-secondary dark:text-gray-400 text-sm">Pune</p>
              <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                View Details
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Hydraulic Press Brake"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmhR1BW4zA_pzUQDhhbhOx-_sncwGCzh3HzQa0iatkj4LKy06EItiPu1N60rAEVpCPIwBsmtx3RyadzCsvfU_oicGrbdKtBS3McNVyicwMoMZS65AlxLQ8XJdsYp87M_Z2RQIg7VI85cr_wymZ-cWJrjmepzG5TbKWBmLz7l5T2Vt5LckrwHtO4hTexa0zi2cI1zRUjEMbG33LU_elSqFQO3FeMufHfrVjtAJW5Yq3gLO22bVAJbeGLqRqAYflFKU4jrEwXyfSZA")' }}
              ></div>
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-accent/90 text-white text-xs font-bold py-1 px-2 rounded-full">
                <span className="material-symbols-outlined !text-sm">verified</span>
                <span>Vishwakarma Verified</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Hydraulic Press Brake</h3>
              <p className="text-secondary dark:text-gray-400 text-sm mt-1">Manufacturer: Amada, Model: HFE M2</p>
              <p className="text-lg font-bold text-primary dark:text-accent mt-2">$78,000</p>
              <p className="text-secondary dark:text-gray-400 text-sm">Ahmedabad</p>
              <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                View Details
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                data-alt="Laser Cutting Machine"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAwysWF0d82DLevb4cPGbE0lTmC3MAn-RELSOVBMevD9S06MCpLoEH6upTwPPA-YXJviNeLFT7oySXJqwKXqcETm9ZRL_XTDUF733E99Zvn1E0iDprRpl4mvNdMSplgzD-B85vI4eIcuxvOlRUkk8gFT0C4p3cQIc1busmMDyh-LY38hRZQSFR9j1u1FdUMQ8ZrbGTUdUwW_KeBphhoZkxfvOqaDTyKM0F24uTS3Qvz-db5HHeahfJDWqwpnxSYwU0X8GKtIi78w")' }}
              ></div>
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-accent/90 text-white text-xs font-bold py-1 px-2 rounded-full">
                <span className="material-symbols-outlined !text-sm">verified</span>
                <span>Vishwakarma Verified</span>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Laser Cutting Machine</h3>
              <p className="text-secondary dark:text-gray-400 text-sm mt-1">Manufacturer: Trumpf, Model: TruLaser 3030</p>
              <p className="text-lg font-bold text-primary dark:text-accent mt-2">$120,000</p>
              <p className="text-secondary dark:text-gray-400 text-sm">Bangalore</p>
              <button className="mt-4 w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMachines;