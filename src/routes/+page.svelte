<script lang="ts">
    import Projects from '$lib/components/Projects.svelte';
    import IconGroup from '$lib/components/IconGroup.svelte';
    import Footer from '$lib/components/Footer.svelte';
</script>

<div class="max-w-5xl mx-auto pt-10 lg:pt-6 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <h1 class="text-3xl sm:text-4xl font-semibold sm:leading-normal dark:text-white">
            Howdy! I am a <span class="text-red-800 dark:text-red-600">Software Engineer</span> 
            that's committed to turning ideas into reality. Currently working on UNT's Datacomm team
        </h1>
        <h2 class="mt-12 text-xl sm:text-2xl font-semibold leading-normal dark:text-white">
            Bachelor's degree in Computer Science at the 
            <span class="text-red-800 dark:text-red-600">University of North Texas</span> (Spring 2025)
        </h2>
    </div>

    <IconGroup />
    <Projects />
    <Footer />
</div>