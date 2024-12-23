<script lang="ts">
    import { At, LinkedinLogo, FileText, GithubLogo } from "phosphor-svelte";
</script>

<div class="flex gap-2 mt-8">
    <button 
        on:click={() => window.location.href = "mailto:marcus.d.ellison@gmail.com"}
        class="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
        aria-label="Email"
    >
        <At size={30} weight="bold" />
    </button>

    <button 
        on:click={() => window.open("/resume.pdf", "_blank")}
        class="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
        aria-label="Resume"
    >
        <FileText size={30} weight="bold" />
    </button>

    <button 
        on:click={() => window.open("https://github.com/markie-dev", "_blank")}
        class="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
        aria-label="GitHub"
    >
        <GithubLogo size={30} weight="bold" />
    </button>

    <button 
        on:click={() => window.open("https://www.linkedin.com/in/marcus-ellison-0974681b9/", "_blank")}
        class="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-red-700 dark:hover:text-red-700 hover:scale-105 transition-all duration-200"
        aria-label="LinkedIn"
    >
        <LinkedinLogo size={30} weight="bold" />
    </button>
</div>