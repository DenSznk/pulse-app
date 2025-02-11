import Link from "next/link";
import React from "react";
import properties from "../../properties.json";
import Image from "next/image";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl shadow-md relative">
            <Image
              src="images/properties/a1.jpg"
              alt=""
              className="w-full h-auto rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">Apartment</div>
                <h3 className="text-xl font-bold">Boston Commons Retreat</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                $4,200/mo
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 3
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 2
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Monthly
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Boston MA </span>
                </div>
                <Link
                  href="property.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-md relative">
            <Image
              src="images/properties/b1.jpg"
              alt=""
              className="object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">Loft</div>
                <h3 className="text-xl font-bold">Cozy Downtown Loft</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                $4,000/mo
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 2
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 2
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,800 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Monthly
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> New York NY </span>
                </div>
                <Link
                  href="property.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-md relative">
            <Image
              src="images/properties/c1.jpg"
              alt=""
              className="object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">Condo</div>
                <h3 className="text-xl font-bold">Luxury Condo</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                $3,300/mo
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 3
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 2
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  2,200 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Nightly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Monthly
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Los Angeles CA </span>
                </div>
                <Link
                  href="property.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-md relative">
            <Image
              src="images/properties/d1.jpg"
              alt=""
              className="object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">Cottage or Cabin</div>
                <h3 className="text-xl font-bold">Charming Cottage Getaway</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                $2,000/wk
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 2
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 1
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  900 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Austin TX </span>
                </div>
                <Link
                  href="property.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-md relative">
            <Image
              src="images/properties/e1.jpg"
              alt=""
              className="object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">Studio</div>
                <h3 className="text-xl font-bold">Modern Downtown Studio</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                $4,200/mo
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 1
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 1
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  900 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Monthly
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Chicago IL </span>
                </div>
                <Link
                  href="property.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-xl shadow-md relative">
            <Image
              src="images/properties/f1.jpg"
              alt=""
              className="object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">House</div>
                <h3 className="text-xl font-bold">Seaside Retreat</h3>
              </div>
              <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                $2,500/wk
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4">
                <p>
                  <i className="fa-solid fa-bed"></i> 4
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 3
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  2,800 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>

              <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Monthly
                </p>
              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Miami FL </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
