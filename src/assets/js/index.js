(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var config = window.helpPopupConfig || {};

        // Create the help icon
        var helpIcon = document.createElement("button");
        helpIcon.id = "antenna-assistance-icon";
        helpIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74v1.4c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7v-3.6c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
            </svg>`;
        helpIcon.style.backgroundColor = `#${config.primaryColor || "007BFF"}`;
        helpIcon.querySelector("svg").style.fill =
            `#${config.secondaryColor || "FFFFFF"}`;
        document.body.appendChild(helpIcon);

        // Create the popup content
        var popup = document.createElement("div");
        popup.id = "antenna-assistance-content";
        popup.style.display = "none";
        popup.innerHTML = `
            <h2>${config.assistanceTitle || "Need assistance?"}</h2>
            <p>${config.assistanceText || "Please contact"} <a style="color:#${config.primaryColor};" href="mailto:${config.assistanceEmail}">${config.assistanceEmail}</a></p>`;
        document.body.appendChild(popup);

        // Toggle the popup visibility on icon click
        helpIcon.addEventListener("click", function () {
            popup.style.display =
                popup.style.display === "none" ? "block" : "none";
        });
    });
})();
