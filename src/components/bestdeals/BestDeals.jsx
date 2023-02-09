import React from "react";

export const BestDeals = () => {
  return (
    <div className="items-center md:mx-48">
      <div className="my-2">
        <h2 className="text-2xl font-semibold">Best Deals</h2>
        <p className=" text-xl text-gray-700 font-semibold">
          Come experience the best haircut and color services
        </p>
      </div>

      <div className="md:flex flex-wrap my-4  ">
        <div className="my-4 md:mr-2">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 hover:"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg   "
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Hair Cut
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Uttam Nagar
              </p>
            </div>
          </a>
        </div>
        <div className="my-4 ">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Max Salon
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sector 22, Gurgaon
              </p>
            </div>
          </a>
        </div>
        <div className="my-4 md:mr-2">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                New Hair Style
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Sector 23,Gurgaon
              </p>{" "}
              <button className="p-1 bg-orange-600 w-12 text-xs font-bold text-white">
                -10%
              </button>
            </div>
          </a>
        </div>
        <div className="my-4">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-black">
                Hair Cut
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Gurgaon
              </p>{" "}
              <button className="p-1 bg-orange-600 w-12 text-xs font-bold text-white">
                -10%
              </button>
            </div>
          </a>
        </div>
        <div className="my-4">
          <a
            href="#"
            class="flex flex-col items-center md:w-[35rem] bg-white border rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 hover:ease-in duration-300"
          >
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2Fsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <p className="text-sm text-gray-600">Men's Haircut</p>
              <h5 class="mt-1 mb-2 text-xl font-bold tracking-tight text-black">
                Galaxy Salon
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Delhi
              </p>
              <button className="p-1 bg-orange-600 w-12 text-xs font-bold text-white">
                -10%
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
