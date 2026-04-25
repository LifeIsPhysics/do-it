import "./styles/reset.css";
import "./styles/stylesheet.css";
import { UIFactory } from "./ui_factory.js";
import {ToDo, Project} from "./data_structures.js";
import { format, addDays } from "date-fns";

const IndexController = (function(document, window) {
    const elements = {
        sidebar: document.querySelector(".sidebar"), 
        main: document.querySelector(".main"),
    };

    const projects = [
        { id: "inbox", label: "Inbox", iconName: "inbox" },
        { id: "today", label: "Today", iconName: "today" },
        { id: "upcoming", label: "Upcoming", iconName: "calendar_month" }
    ];

    const setupEventListeners = () => {
        elements.sidebar.addEventListener("click", (e) => {
            const tabButton = e.target.closest("[data-tab]");
            if (tabButton) {
                const tabId = tabButton.dataset.tab;
                const selectedProject = projects.find(p => p.id === tabId);
                if (selectedProject) {
                    renderMainContent(selectedProject);
                    updateActiveUI(tabButton);
                }
            }
        });
    };

    const updateActiveUI = (activeBtn) => {
        document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("is-active"));
        activeBtn.classList.add("is-active");
    };

    const renderSidebar = (projectsArray) => { 
        if (!elements.sidebar) return;
        const navHtml = projectsArray
            .map(proj => UIFactory.createSidebarItem(proj.id, proj.label, proj.iconName))
            .join('');
        
            elements.sidebar.innerHTML = UIFactory.createAddTaskButton() + navHtml;
        };

    const renderMainContent = (project) => { 
        if (!elements.main) return;
        
        elements.main.innerHTML = UIFactory.createMainLayout(project.label, "Mark all as read");
    };

    return {
        init: function() {
            elements.sidebar.insertAdjacentHTML('afterbegin', UIFactory.createAddTaskButton());
            renderSidebar(projects);
            renderMainContent(projects[0]);
            
            setupEventListeners();
        },
    };
})(document, window);

IndexController.init();


const savedData = localStorage.getItem('userProjects');
if (savedData) {
    const projects = JSON.parse(savedData);
    console.log(projects);
}

