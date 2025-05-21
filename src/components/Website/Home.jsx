import React from "react";
import Layout from "./Layout";

function Home() {
  const features = [
    {
      iconClass: "🚚",
      title: "Fast Delivery",
      desc: "We make sure your orders reach you quickly and safely. With our trusted delivery partners, you can expect your package at your doorstep in no time—because your time matters and we value your convenience.",
    },
    {
      iconClass: "📦",
      title: "Free Shipping",
      desc: "No extra costs, no hidden fees. Enjoy free shipping on all your orders. Whether it's a small item or a bulk purchase, we deliver it without any delivery charges—making shopping easier and more affordable for you.",
    },
    {
      iconClass: "🏆",
      title: "Best Quality",
      desc: "Our products are carefully chosen for durability and excellence. We work with trusted suppliers to ensure everything we sell meets high standards—because we believe you deserve only the best when it comes to quality and satisfaction.",
    },
  ];

  const testimonials = [
    {
      name: "Jerome Bell",
      title: "Web Designer",
      rating: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
    },
    {
      name: "Annette Black",
      title: "Dog Trainer",
      rating: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
    },
    {
      name: "Ralph Edwards",
      title: "UI/UX Designer",
      rating: 4,
      quote:
        "Lorem ipsum dolor sit amet consectetur the adipiscing elit vestibulum viverra eget felis interdum fusce odio lacus.",
    },
  ];

  const StarRating = ({ count }) => (
    <div className="text-yellow-400 mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`ri-star-${i < count ? "fill" : "line"} mr-1`}
        ></i>
      ))}
    </div>
  );



  
  return (
    <>
      <Layout>
        <div
          className="w-full flex flex-row items-start justify-between h-[90vh]"
          style={{
            backgroundImage: `url('/images/backhero.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-[50%] pt-24 px-12 flex flex-col items-start justify-center gap-4">
            <h1
              className="text-4xl font-medium text-[#ffffff] "
              style={{
                fontFamily: "Rowdies",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Tradition in Every Touch
            </h1>
            <p className="text-[#ffffff] text-[16px]">
              Each item in our store is carefully selected to bring you quality,
              style, and value. We focus on offering products that meet your
              everyday needs while adding comfort and convenience to your life.
              When you shop with us, you’re not just making a purchase — you’re
              choosing reliability, saving time, and enjoying a smooth online
              shopping experience.
            </p>
            <button className="bg-[#16b43d] font-semibold px-4 py-2 w-36 text-xl rounded-full text-white">
              Get Started
            </button>
          </div>
          <div className="w-[50%] pt-2">
            {/* <img
              src="/images/hero5.jpg"
              alt="Handcrafted Products"
              style={{ width: "800px", height: "85vh" }}
            /> */}
          </div>
        </div>
        <section className="py-16 text-center bg-white">
          <h2
            className="text-4xl font-bold text-[#16b43d] mb-2"
            style={{
              fontFamily: "Rowdies",
              fontWeight: 400,
              fontStyle: "normal",
            }}
          >
            Why Shop With Us
          </h2>
          <div className="w-20 h-1 mx-auto bg-[#16b43d] mb-10 rounded"></div>

          <div className=" gap-6 px-4 w-full flex flex-row justify-between ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#16b43d] text-white rounded-lg w-[40%] h-[40vh]  p-6 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
              >
                <h1 className="text-2xl">{feature.iconClass}</h1>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[14px] text-center">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div
          className="bg-cover bg-center py-16 px-4 text-center"
          style={{ backgroundImage: `url('/images/backreview1.jpg')` }}
        >
          <h3 className="text-sm uppercase bg-black text-white px-4 py-1 inline-block mb-3">
            Testimonials
          </h3>
          <h2 className="text-4xl font-bold mb-12 text-white">
            Client Feedback
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-6 shadow-lg relative">
                <StarRating count={item.rating} />
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.title}</p>
                <p className="text-gray-700 text-sm">{item.quote}</p>
                <div className="absolute top-4 right-4 text-3xl text-yellow-600">
                  <i className="ri-double-quotes-l"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
