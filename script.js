var typed = new Typed(".typing",{
    strings:["","lecturer at Fayoum University","In Faculty Of Science","In Biochemistry Department "],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

var typed = new Typed(".name",{
    strings:["","Sara Mohamed Abokhalaf"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.remove("back-section");
            }
            for(let j=0; j<totalNavList; j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth<1200)
            {
                asidSectionTogglerBtn();
            }
        })
    }
    function showSection(element)
    {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("active");
        }
        const target= element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }
    
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        asid = document.querySelector(".asid");
        navTogglerBtn.addEventListener("click", () => 
        {
            asidSectionTogglerBtn();
        })
        function asidSectionTogglerBtn()
        {
            asid.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++)
            {
                allSection[i].classList.toggle("open");
            }
        }