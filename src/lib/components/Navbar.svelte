<script lang="ts">
    function scrollToSection(event: MouseEvent, id: string) {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 90;
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                    behavior: 'smooth'
                });
            }
    }
</script>

<div class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
    <nav class="backdrop-blur-md bg-white/60 dark:bg-background/60">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center py-3">
                <a 
                    href="/" 
                    on:click={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    class="text-lg sm:text-2xl font-bold hover:text-red-700 transition-colors duration-300 whitespace-nowrap dark:text-white"
                >
                    marcus ellison
                </a>
                <div class="flex text-gray-700 dark:text-gray-300 items-center gap-4 sm:gap-8 sm:text-lg ml-6 sm:ml-12">
                    <a 
                        href="#projects" 
                        on:click={(e) => scrollToSection(e, 'projects')}
                        class="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
                    >
                        projects
                    </a>
                    <a href="#about" class="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">about</a>
                    <a href="#contact" class="cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100">resume</a>
                </div>
            </div>
        </div>
    </nav>
</div>