<script lang="ts">
    import { At, LinkedinLogo, GithubLogo, Sun, Moon } from "phosphor-svelte";
    import { onMount } from 'svelte';

    // Theme handling
    let theme: string;
    
    onMount(() => {
        // Initialize theme based on localStorage, defaulting to light
        theme = localStorage.theme || 'light';
        // Ensure HTML class matches the theme
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
    
    function toggleTheme() {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.theme = theme;
        document.documentElement.classList.toggle('dark');
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<footer class="w-full mx-auto py-8">
    <div class="border-t-2 border-gray-400"></div>
    <div class="flex justify-between items-center mt-8">
        <div class="flex items-center gap-4">
            <button
                on:click={scrollToTop}
                class="text-lg sm:text-2xl font-bold text-black dark:text-white hover:text-red-700 dark:hover:text-red-700 transition-colors duration-200"
            >
                marcus ellison
            </button>
            <div class="flex items-center gap-2">
                <button
                    on:click={toggleTheme}
                    class="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
                    aria-label="Toggle dark mode"
                >
                    {#if theme === 'dark'}
                        <Sun size={30} weight="bold" />
                    {:else}
                        <Moon size={30} weight="bold" />
                    {/if}
                </button>
            </div>
        </div>
        
        <div class="flex gap-2">
            <button
                on:click={() => window.location.href = "mailto:marcus.d.ellison@gmail.com"}
                class="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
                aria-label="Email"
            >
                <At size={30} weight="bold" />
            </button>

            <button 
                on:click={() => window.open("https://github.com/markie-dev", "_blank")}
                class="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
                aria-label="GitHub"
            >
                <GithubLogo size={30} weight="bold" />
            </button>

            <button 
                on:click={() => window.open("https://www.linkedin.com/in/marcus-ellison-0974681b9/", "_blank")}
                class="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
            >
                <LinkedinLogo size={30} weight="bold" />
            </button>
        </div>
    </div>
</footer> 