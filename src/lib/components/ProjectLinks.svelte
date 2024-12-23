<script lang="ts">
    import { GithubLogo, Globe } from 'phosphor-svelte';
    
    export let githubUrl: string;
    export let liveUrl: string;
</script>

<div class="flex gap-4">
    {#if githubUrl}
        <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-md 
                bg-gray-100 dark:bg-zinc-800 
                text-gray-700 dark:text-gray-300 
                hover:bg-gray-200 dark:hover:bg-zinc-700 
                hover:text-red-700 dark:hover:text-red-400 
                hover:scale-105 
                transition-all duration-200 ease-in-out"
        >
            <GithubLogo size={20} weight="bold" />
            <span class="font-medium text-sm sm:text-base">View Code</span>
        </a>
    {/if}
    {#if liveUrl}
        <a 
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 rounded-md 
                bg-gray-100 dark:bg-zinc-800 
                text-gray-700 dark:text-gray-300 
                hover:bg-gray-200 dark:hover:bg-zinc-700 
                hover:text-red-700 dark:hover:text-red-400 
                hover:scale-105 
                transition-all duration-200 ease-in-out"
        >
            <Globe size={20} weight="bold" />
            <span class="font-medium text-sm sm:text-base">Live Demo</span>
        </a>
    {:else}
        <span 
            class="flex items-center gap-2 px-4 py-2 rounded-md 
                border border-gray-200 dark:border-zinc-700 
                bg-gray-50/50 dark:bg-zinc-800/50 
                text-gray-400 dark:text-gray-500 
                opacity-60 cursor-not-allowed"
        >
            <Globe size={20} weight="bold" />
            <span class="font-medium text-sm sm:text-base">Demo Unavailable</span>
        </span>
    {/if}
</div> 