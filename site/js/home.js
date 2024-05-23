const header = document.querySelector(".navbar");
const sectionOne = document.querySelector(".serviceBanner");

const sectionOneOptions = {
    rootMargin: "0px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        const deviceWidth = window.innerWidth;
        if (entry.isIntersecting && deviceWidth>=500) {
            header.classList.add("bg-dark");
        }
        else {
            header.classList.remove("bg-dark");
        }
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);