<script setup>
import ContactSVG from "../assets/svg/contact.svg";
</script>

<template>

<section className="bg-black pb-8" id="contact">
    <div className="lg:container px-5 pt-14">
    <h2 className="suptitle text-white" data-aos="fade-down">
        Hire Me
    </h2>
    <h4 className="title text-gray-500" data-aos="fade-down">
        FOR YOUR PROJECTS
    </h4>
    <br />
    <div className="flex items-center flex-col space-y-4 lg:flex-row">
        <Image
        src={ContactSVG}
        alt="Contact SVG"
        data-aos="fade-right"
        className="max-w-sm mt-4 md:mt-0 md:max-w-xl md:block text-gray-950"
        />
        <div
        data-aos="fade-left"
        className="ml-4 border-2 border-white max-w-md
        p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
        >
        <div className="w-full max-w-md bg-gray-950 p-5">
            <h2 className="text-lg font-semibold text-gray-300 mb-2">
            Contact details
            </h2>
            <address className="relative bg-gray-700 dark:border-gray-600 p-4 rounded-lg border border-gray-200 not-italic flex space-x-2">
            <div className="space-y-2 text-gray-500 dark:text-gray-400 leading-loose hidden sm:block">
                Name: <br />
                Email: <br />
            </div>
            <div id="contact-details" className="space-y-2 text-white font-medium leading-loose">
                Manav Pragnesh Vakharia <br />
                mpvwork06@gmail.com <br />
            </div>
            </address>
        </div>

        <p className="leading-7 text-gray-300">
            For business purposes, reach out via given details.
        </p>
        <br />
        <a
            href="mailto:mpvwork06@gmail.com "
            className="btn bg-white hover:bg-black text-black hover:text-white"
        >
            Hire Me
        </a>
        </div>
    </div>
    </div>
</section>

</template>