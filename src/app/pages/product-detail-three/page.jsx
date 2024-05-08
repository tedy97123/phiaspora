import React from "react";
import Link from "next/link";
 
import Tagline from "@/app/components/tagline";
import Navbar from "@/app/components/navbar";
import ProductDetail from "@/app/components/product-detail";
import ProductAboutTab from "@/app/components/product-about-tab";
import ArrivalItem from "@/app/components/arrival-item";
import Footer from "@/app/components/footer";
import Switcher from "@/app/components/switcher";
import ProductViewThree from "@/app/components/product-view-three";
import ScrollToTop from "@/app/components/scroll-to-top";

export default function ProductDetailThree(){
    return(
        <>
        <Tagline/>
        <Navbar navClass="defaultscroll is-sticky tagline-height"/>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">Mens Brown Jecket</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-blue-500"><Link href="/">Phiaspora</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-blue-500"><Link href="/shop-grid">Store</Link></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-blue-500" aria-current="page">Mens Brown Jecket</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div className="lg:col-span-5">
                        <ProductViewThree/>
                    </div>
                    <div className="lg:col-span-7">
                        <ProductDetail/>
                    </div>
                </div>
                
                <ProductAboutTab/>
            </div>

            <ArrivalItem/>
        </section>
        <Footer/>
        <Switcher/>
        <ScrollToTop/>
        </>
    )
}