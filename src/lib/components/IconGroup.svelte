<script lang="ts">
    import { At, LinkedinLogo, FileText, GithubLogo } from "phosphor-svelte";
</script>

<div class="flex gap-2 mt-8">
    <button 
        on:click={() => window.location.href = "mailto:marcus.d.ellison@gmail.com"}
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-100 hover:scale-110 transition-all duration-200"
        aria-label="Email"
    >
        <At size={30} weight="bold" class="hover:text-red-700 dark:text-white dark:hover:text-red-700 transition-colors duration-200" />
    </button>

    <button 
        on:click={() => window.open("/resume.pdf", "_blank")}
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-100 hover:scale-110 transition-all duration-200"
        aria-label="Resume"
    >
        <FileText size={30} weight="bold" class="hover:text-red-700 dark:text-white dark:hover:text-red-700 transition-colors duration-200" />
    </button>

    <button 
        on:click={() => window.open("https://github.com/markie-dev", "_blank")}
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-100 hover:scale-110 transition-all duration-200"
        aria-label="GitHub"
    >
        <GithubLogo size={30} weight="bold" class="hover:text-red-700 dark:text-white dark:hover:text-red-700 transition-colors duration-200" />
    </button>

    <button 
        on:click={() => window.open("https://www.linkedin.com/in/marcus-ellison-0974681b9/", "_blank")}
        class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-100 hover:scale-110 transition-all duration-200"
        aria-label="LinkedIn"
    >
        <LinkedinLogo size={30} weight="bold" class="hover:text-red-700 dark:text-white dark:hover:text-red-700 transition-colors duration-200" />
    </button>
</div>