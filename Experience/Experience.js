const CLASSES = {
    EXPERIENCE_BODY: "js-experience-body",
    EXPERIENCE_TABS: "experience__tabs",
    EXPERIENCE_TAB: "experience__tab",
    EXPERIENCE_TAB_BACKGROUND: "experience__tab-background",
    EXPERIENCE_TAB_CONTENT: "experience__contents",
    EXPERIENCE_TAB_CONTENT_ITEM: "experience__content",
    ACTIVE: "active"
}
class Experience {
    constructor() {
        this.experienceBody = document.querySelector(`.${CLASSES.EXPERIENCE_BODY}`)
        this.experienceTabs = document.querySelector(`.${CLASSES.EXPERIENCE_TABS}`)
        this.experienceTabs = document.querySelectorAll(`.${CLASSES.EXPERIENCE_TAB}`)
        this.experienceTabBackground = document.querySelector(`.${CLASSES.EXPERIENCE_TAB_BACKGROUND}`)
        this.experienceTabContent = document.querySelectorAll(`.${CLASSES.EXPERIENCE_TAB_CONTENT_ITEM}`)
        this.experienceTabContents = document.querySelectorAll(`.${CLASSES.EXPERIENCE_TAB_CONTENT_ITEM}`)
        this.heightTab = this.experienceTabs[0].offsetHeight
        this.indexActiveTab = 0
        this.getIndexActiveTab()
        this.onClickTabEvent()
        window.addEventListener("resize", () => {
            this.onResizeEvent()
        })
        this.setHeightAndPositionTabBackground()
        this.setHeightExperienceContent()
    }
    getIndexActiveTab() {
        this.experienceTabs.forEach((e, index) => {
            if(e.classList.contains(CLASSES.ACTIVE)) this.indexActiveTab = index
        })
    }
    setHeightExperienceContent() {
        let maxheight = 0;
        this.experienceTabContents.forEach((e, _) => {
            if(e.offsetHeight > maxheight) maxheight = e.offsetHeight
        })
        this.experienceBody.style.height = `${maxheight}px`
    }
    onClickTabEvent() {
        this.experienceTabs.forEach((e, index) => {
            e.addEventListener("click", () => {
                this.removeActiveClass()
                e.classList.add(CLASSES.ACTIVE)
                this.indexActiveTab = index
                this.setHeightAndPositionTabBackground()
                this.setActiveContent()
            })
        })
    }
    removeActiveClass() {
        this.experienceTabs.forEach((e, _) => {
            e.classList.remove(CLASSES.ACTIVE)
        })
        this.experienceTabContents.forEach((e, _) => {
            e.classList.remove(CLASSES.ACTIVE)
        })
    }
    setActiveContent() {
        this.experienceTabContents.forEach((e, index) => {
            if(index === this.indexActiveTab) e.classList.add(CLASSES.ACTIVE)
        })
    }
    setHeightAndPositionTabBackground() {
        this.experienceTabBackground.style.height = `${this.heightTab}px`
        this.experienceTabBackground.style.top = `${this.indexActiveTab * this.heightTab}px`
    }
    onResizeEvent() {
        this.heightTab = this.experienceTabs[0].offsetHeight
    }
}

export default Experience