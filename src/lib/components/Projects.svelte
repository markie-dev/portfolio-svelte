<script lang="ts">
    import { projects } from '$lib/stores/projects';
    import ProjectLinks from './ProjectLinks.svelte';
</script>

<style>
    .tech-tag {
        background: rgba(240, 240, 240, 0.5);
        position: relative;
        transition: all 0.3s ease;
        z-index: 1;
    }

    :global(.dark) .tech-tag {
        background: rgba(30, 30, 30, 0.5);
    }

    .tech-tag::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        background: linear-gradient(
            -45deg,
            rgba(255, 158, 205, 0.15),
            rgba(126, 178, 255, 0.15),
            rgba(255, 158, 205, 0.25),
            rgba(126, 178, 255, 0.25)
        );
        background-size: 300% 300%;
        animation: gradient 8s ease infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    :global(.dark) .tech-tag::before {
        background: linear-gradient(
            -45deg,
            rgba(255, 158, 205, 0.07),
            rgba(126, 178, 255, 0.07),
            rgba(255, 158, 205, 0.12),
            rgba(126, 178, 255, 0.12)
        );
    }

    .tech-tag:hover::before {
        opacity: 1;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>

<div id="projects">
    <div class="grid grid-cols-1 gap-8">
        {#each $projects as project}
            <div class="bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-zinc-800">
                <div class="aspect-video overflow-hidden">
                    {#if project.media.type === 'video'}
                        <video 
                            class="w-full h-full object-cover"
                            style="transform: scale({project.media.zoom || 1}); transform-origin: center center;"
                            autoplay
                            muted
                            loop
                            playsinline
                            preload="auto"
                        >
                            {#if project.media.sources.webm}
                                <source src={project.media.sources.webm} type="video/webm">
                            {/if}
                            {#if project.media.sources.mp4}
                                <source src={project.media.sources.mp4} type="video/mp4">
                            {/if}
                            Your browser does not support the video tag.
                        </video>
                    {:else}
                        <img
                            src={project.media.sources.image}
                            alt={project.title}
                            class="w-full h-full object-cover"
                            style="transform: scale({project.media.zoom || 1}); transform-origin: center center;"
                        />
                    {/if}
                </div>
                
                <div class="py-6 px-4 sm:px-6">
                    <div class="mb-2">
                        <div class="md:flex md:items-center md:gap-4">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                            
                            <div class="hidden md:flex flex-wrap gap-2">
                                {#each project.technologies as tech}
                                    <span 
                                        class="tech-tag px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700"
                                    >
                                        {tech}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>

                    <p class="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div class="md:hidden flex flex-wrap gap-2 mb-4">
                        {#each project.technologies as tech}
                            <span 
                                class="tech-tag px-3 py-1 rounded-full text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700"
                            >
                                {tech}
                            </span>
                        {/each}
                    </div>
                    
                    <ProjectLinks 
                        githubUrl={project.githubUrl} 
                        liveUrl={project.liveUrl} 
                    />
                </div>
            </div>
        {/each}
    </div>
</div> 