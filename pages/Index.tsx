import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const products = [
  {
    "id": "qsgigfq7s",
    "title": "Premium Product QSG",
    "price": "$249.57",
    "image": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    "description": "High-quality product with premium features and excellent build quality.",
    "features": [
      "Premium materials",
      "Fast shipping",
      "1-year warranty",
      "Customer support"
    ],
    "amazonUrl": "https://www.amazon.com/Twister-Arm-Trainer-Adjustable-Equipment/dp/B0F6LH1NY6/ref=zg_bsnr_c_sporting-goods_d_sccl_2/130-1910533-3978569?pd_rd_w=xCQQB&content-id=amzn1.sym.fef9af56-6177-46e9-8710-a5293a68dd39&pf_rd_p=fef9af56-6177-46e9-8710-a5293a68dd39&pf_rd_r=NDS0KX27EM9GGFK59P1P&pd_rd_wg=S5xvS&pd_rd_r=b2022a73-53a7-4e7d-883c-e2c180e4d834&pd_rd_i=B0F6LH1NY6&th=1"
  },
  {
    "id": "1e7jll7vx",
    "title": "Premium Product 1E7",
    "price": "$50.72",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    "description": "High-quality product with premium features and excellent build quality.",
    "features": [
      "Premium materials",
      "Fast shipping",
      "1-year warranty",
      "Customer support"
    ],
    "amazonUrl": "https://www.amazon.com/Twister-Arm-Trainer-Adjustable-Equipment/dp/B0F6LH1NY6/ref=zg_bsnr_c_sporting-goods_d_sccl_2/130-1910533-3978569?pd_rd_w=xCQQB&content-id=amzn1.sym.fef9af56-6177-46e9-8710-a5293a68dd39&pf_rd_p=fef9af56-6177-46e9-8710-a5293a68dd39&pf_rd_r=NDS0KX27EM9GGFK59P1P&pd_rd_wg=S5xvS&pd_rd_r=b2022a73-53a7-4e7d-883c-e2c180e4d834&pd_rd_i=B0F6LH1NY6&th=1"
  },
  {
    "id": "3r11nzmjw",
    "title": "Premium Product 3R1",
    "price": "$168.22",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    "description": "High-quality product with premium features and excellent build quality.",
    "features": [
      "Premium materials",
      "Fast shipping",
      "1-year warranty",
      "Customer support"
    ],
    "amazonUrl": "https://www.amazon.com/Twister-Arm-Trainer-Adjustable-Equipment/dp/B0F6LH1NY6/ref=zg_bsnr_c_sporting-goods_d_sccl_2/130-1910533-3978569?pd_rd_w=xCQQB&content-id=amzn1.sym.fef9af56-6177-46e9-8710-a5293a68dd39&pf_rd_p=fef9af56-6177-46e9-8710-a5293a68dd39&pf_rd_r=NDS0KX27EM9GGFK59P1P&pd_rd_wg=S5xvS&pd_rd_r=b2022a73-53a7-4e7d-883c-e2c180e4d834&pd_rd_i=B0F6LH1NY6&th=1"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">ABDSAFOJSFOJSFAOJ</h1>
            <p className="text-xl opacity-90">sfaknfkas</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}