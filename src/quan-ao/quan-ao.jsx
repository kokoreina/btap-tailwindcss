export function Quanao() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-4/5 max-w-5xl flex">
                <div className="w-1/4 p-4 flex flex-col items-center">
                    <div className="mb-2 border border-gray-300 rounded-md overflow-hidden">
                        <img src="shopping.webp" alt="shirt" className="w-full" />
                    </div>
                </div>
                <div className="w-3/4 p-6">
                    <h1 className="text-sm text-gray-500">POLO RALPH</h1>
                    <h2 className="text-2xl my-2">
                        Custom Fit Polo Bear Oxford Shirt
                    </h2>
                    <p className="text-lg my-2">
                        Blue polo with a classic cut. Made of smooth and soft
                        cotton.
                    </p>
                    <div className="my-4 text-2xl flex items-center">
                        <span className="text-black mr-4">$99.00</span>
                        <span className="bg-blue-500 text-white py-1 px-2 rounded-md mr-4">
                            -25%
                        </span>
                        <span className="text-gray-500 line-through">
                            $132.00
                        </span>
                    </div>
                    <div className="my-4">
                        <h3 className="text-lg mb-2">Choose Size</h3>
                        <button className="bg-white border border-gray-300 py-2 px-4 rounded-md mr-2">
                            S
                        </button>
                        <button className="bg-blue-500 text-white border border-blue-500 py-2 px-4 rounded-md mr-2">
                            M
                        </button>
                        <button className="bg-white border border-gray-300 py-2 px-4 rounded-md mr-2">
                            L
                        </button>
                        <button className="bg-white border border-gray-300 py-2 px-4 rounded-md mr-2">
                            XL
                        </button>
                        <button className="bg-white border border-gray-300 py-2 px-4 rounded-md">
                            XXL
                        </button>
                    </div>
                    <button className="bg-blue-500 text-white py-4 px-8 rounded-md w-full mt-4">
                        ADD TO BAG
                    </button>
                </div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden w-3/4 max-w-5xl flex p-20">

                <div className="w-2/3 p-6 border-r">
                    <h2 className="text-xl font-semibold mb-4">
                        Your product list
                    </h2>
                    <div className="flex justify-between mb-4">
                        <span>3 Items</span>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <img
                            src="tải xuống.jpg"
                            alt="Product Image"
                            className="w-16 h-16 rounded-md border border-gray-300"
                        />
                        <div className="flex-1 px-4">
                            <h3 className="font-semibold">
                                Illuminating face cream
                            </h3>
                        </div>
                        <div className="flex items-center">
                            <button className="px-2 py-1 border rounded">
                                -
                            </button>
                            <span className="px-4">1</span>
                            <button className="px-2 py-1 border rounded">
                                +
                            </button>
                        </div>
                        <span className="text-lg font-semibold">$12.99</span>
                        <button className="text-red-500 ml-4">×</button>
                    </div>
 
                    <div className="flex justify-between items-center mb-4">
                        <img
                            src="acd.jpg"
                            alt="Product Image"
                            className="w-16 h-16 rounded-md border border-gray-300"
                        />
                        <div className="flex-1 px-4">
                            <h3 className="font-semibold">
                                Illuminating face cream
                            </h3>
                        </div>
                        <div className="flex items-center">
                            <button className="px-2 py-1 border rounded">
                                -
                            </button>
                            <span className="px-4">1</span>
                            <button className="px-2 py-1 border rounded">
                                +
                            </button>
                        </div>
                        <span className="text-lg font-semibold">$9.99</span>
                        <button className="text-red-500 ml-4">×</button>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <img
                            src="images.jpg"
                            alt="Product Image"
                            className="w-16 h-16 rounded-md border border-gray-300"
                        />
                        <div className="flex-1 px-4">
                            <h3 className="font-semibold">
                                Intense lift up serum
                            </h3>
                        </div>
                        <div className="flex items-center">
                            <button className="px-2 py-1 border rounded">
                                -
                            </button>
                            <span className="px-4">1</span>
                            <button className="px-2 py-1 border rounded">
                                +
                            </button>
                        </div>
                        <span className="text-lg font-semibold">$29.99</span>
                        <button className="text-red-500 ml-4">×</button>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <img
                            src="abc.jpg"
                            alt="Product Image"
                            className="w-16 h-16 rounded-md border border-gray-300"
                        />
                        <div className="flex-1 px-4">
                            <h3 className="font-semibold">CBD Premium Oil</h3>
                        </div>
                        <div className="flex items-center">
                            <button className="px-2 py-1 border rounded">
                                -
                            </button>
                            <span className="px-4">1</span>
                            <button className="px-2 py-1 border rounded">
                                +
                            </button>
                        </div>
                        <span className="text-lg font-semibold">$32.99</span>
                        <button className="text-red-500 ml-4">×</button>
                    </div>
                </div>

                <div className="w-1/3 p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Order Summary
                    </h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>$85.96</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Tax</span>
                        <span>$6.88</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <div className="flex justify-between mb-4 font-bold">
                        <span>Total</span>
                        <span>$92.84</span>
                    </div>
                    <button className="bg-black text-white py-2 px-4 rounded w-full">
                        Pay now
                    </button>
                    <div className="mt-4">
                        <h3 className="text-lg mb-2">Promo Code</h3>
                        <input
                            type="text"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            placeholder="Enter promo code"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
