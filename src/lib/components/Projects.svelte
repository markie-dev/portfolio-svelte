<script lang="ts">
    import { projects } from '$lib/stores/projects';
    import ProjectLinks from './ProjectLinks.svelte';
</script>

<div class="mt-16" id="projects">
    <div class="grid grid-cols-1 gap-8">
        {#each $projects as project}
            <div class="bg-white dark:bg-zinc-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
                
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-4">
                        {#each project.technologies as tech}
                            <span 
                                class="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
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