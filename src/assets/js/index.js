(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var config = window.helpPopupConfig || {};

        // Create the help icon
        var helpIcon = document.createElement("button");
        helpIcon.id = "antenna-assistance-icon";
        helpIcon.innerHTML += `
            <svg class="icon-passive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74v1.4c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7v-3.6c0-70.7-57.3-128-128-128h-32C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
            </svg>`;
        helpIcon.innerHTML += `
        <svg class="icon-active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </svg>`;
        helpIcon.style.backgroundColor = `#${config.primaryColor || "007BFF"}`;
        helpIcon.querySelector("svg").style.fill =
            `#${config.secondaryColor || "FFFFFF"}`;
        document.body.appendChild(helpIcon);

        // Create the popup content
        var popup = document.createElement("div");
        popup.id = "antenna-assistance-content";

        var popupContent = "";

        // Only add the image if the URL is provided
        if (config.agencyLogoUrl) {
            popupContent += `<div class="antenna-assistance-image"><img title="${config.agencyLogoTitle || ""}" src="${config.agencyLogoUrl}" alt="Agency Logo"></div>`;
        }

        popupContent += `
            <h2>${config.assistanceTitle || "Need assistance?"}</h2>
            <p>${config.assistanceText || "Please contact"} <a style="color:#${config.primaryColor};" href="mailto:${config.assistanceEmail}">${config.assistanceEmail}</a></p>`;

        console.log("Popup content before append:", popupContent); // Check the generated HTML

        popup.innerHTML = popupContent;
        document.body.appendChild(popup);

        // Toggle the popup visibility on icon click
        helpIcon.addEventListener("click", function () {
            helpIcon.classList.toggle("active");
            popup.classList.toggle("active");
        });
    });
})();
