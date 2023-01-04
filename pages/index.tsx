import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

function index() {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white z-0 snap-y snap-mandatory overflow-scroll">
      <Head>
        <title>Asif's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/*Hero*/}
      <section className="snap-center" id="#Hero">
        <Hero />
      </section>

      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}

export default index;
