function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); //i love js
}

async function hideEverything() {
    var menubar = document.getElementById("menubar")
    var iconbar = document.getElementsByClassName("icon-bar")[0];
    var time = document.getElementById("time");
    time.style.display = "none";
    menubar.style.display = "none";
    iconbar.style.display = "none";
    await sleep(200);
    
    //
    menubar.style.display = "block";

    //
    var elements = menubar.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName == "DIV" && elements[i].className == "dropdown") {
            elements[i].style.display = "none";
        }
    }
    var elements = iconbar.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName == "DIV" && elements[i].className != "icon-text") {
            elements[i].style.display = "none";
        }
    }

    //
    var elements = menubar.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName == "DIV" && elements[i].className == "dropdown") {
            await sleep(100);
            elements[i].style.display = "inline-block";
        }
    }

    //
    await sleep(200);
    iconbar.style.display = "block";

    var elements = iconbar.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].tagName == "DIV" && elements[i].className != "dropdown") {
            await sleep(100);
            elements[i].style.display = "flex";
        }
    }
}

function updateTime() {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString(); // Format time as HH:MM:SS
    document.getElementById("time").textContent = formattedTime;
}

async function onStart() {
    await hideEverything();
    await sleep(200);
    updateTime();
    setInterval(updateTime, 1000);
    document.getElementById("time").style.display = "inline-block";
    await sleep(1000);
    openWindow("Macintosh HD");
    
}

var called = false;

const currentPath = window. location. href;
if (currentPath.includes("#faintedclient")) {
    openWindow("faintedclient");
}
else if (currentPath.includes("#raylauncher")) {
    openWindow("raylauncher");
}
else if (currentPath.includes("#raybot")) {
    openWindow("raybot");
}
else if (currentPath.includes("#doom")) {
    openWindow(`doom`);
}

window.addEventListener('unload', function () {
    if (called != false) {
        return;
    } else {
        window.parent.history.replaceState(null, '', '/');
        window.parent.location.reload();
    }
});

function openWindow(id) {
    closeAllWindows();
    
    const win = createWindow(id);
    document.body.appendChild(win);
    positionWindow(win);
}

function createWindow(id) {
    const win = document.createElement('div');
    win.className = 'window';
    win.id = id + '-window';
    var nid;
    if (id == "Macintosh HD") {
        nid = "macintoshhd";
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            <style>
                @font-face{
                    font-family: "krungthep";
                    src: url("/root/static/media/fonts/krungthep.eot");
                    src: url("/root/static/media/fonts/krungthep.eot?#iefix")format("embedded-opentype"),
                        url("/root/static/media/fonts/krungthep.woff")format("woff"),
                        url("/root/static/media/fonts/krungthep.woff2")format("woff2"),
                        url("/root/static/media/fonts/krungthep.ttf")format("truetype"),
                        url("/root/static/media/fonts/krungthep.svg#Krungthep")format("svg");
                    font-weight:normal;
                    font-style:normal;
                    font-display:swap;
                }
                body {
                    font-family: 'krungthep';
                    font-size: 14px;
                }
                .inner-icon-bar {
                    position: absolute;
                    left: 20px;
                    top: 40px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                }
                .inner-icon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 80px;
                    margin: 0 30px 10px 0;
                    cursor: pointer;
                }
                .inner-icon-img {
                    width: 50px;
                    height: 50px;
                    background-color: #CCCCCC;
                    border: 1px solid #000;
                    margin-bottom: 5px;
                }
                .inner-icon-text {
                    text-align: center;
                    word-wrap: break-word;
                    max-width: 100%;
                    font-size: 12px;
                    font-family: 'krungthep';
                }
            </style>
            <div class="inner-icon-bar">
                <div class="inner-icon" onclick="openWindow('portfolio')">
                    <img src="/root/static/media/images/file.png" alt="Portfolio" class="inner-icon-img">
                    <div class="inner-icon-text">Portfolio</div>
                </div>
                <div class="inner-icon" onclick="openWindow('about-this-computer')">
                    <img src="/root/static/media/images/file.png" alt="atc" class="inner-icon-img">
                    <div class="inner-icon-text">About</div>
                </div>
                <div class="inner-icon" onclick="openWindow('games')">
                    <img src="/root/static/media/images/folder.png" alt="atc" class="inner-icon-img">
                    <div class="inner-icon-text">Games</div>
                </div>
                <div class="inner-icon" onclick="openWindow('projects')">
                    <img src="/root/static/media/images/folder.png" alt="atc" class="inner-icon-img">
                    <div class="inner-icon-text">Projects</div>
                </div>
            </div>
        `; 
    }
    else if (id == "games") {
        nid = "games";
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            
            <style>
                @font-face{
                    font-family: "krungthep";
                    src: url("/root/static/media/fonts/krungthep.eot");
                    src: url("/root/static/media/fonts/krungthep.eot?#iefix")format("embedded-opentype"),
                        url("/root/static/media/fonts/krungthep.woff")format("woff"),
                        url("/root/static/media/fonts/krungthep.woff2")format("woff2"),
                        url("/root/static/media/fonts/krungthep.ttf")format("truetype"),
                        url("/root/static/media/fonts/krungthep.svg#Krungthep")format("svg");
                    font-weight:normal;
                    font-style:normal;
                    font-display:swap;
                }
                body {
                    font-family: 'krungthep';
                    font-size: 14px;
                }
                .inner-icon-bar {
                    position: absolute;
                    left: 20px;
                    top: 40px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                }
                .inner-icon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 80px;
                    margin: 0 30px 10px 0;
                    cursor: pointer;
                }
                .inner-icon-img {
                    width: 50px;
                    height: 50px;
                    background-color: #CCCCCC;
                    border: 1px solid #000;
                    margin-bottom: 5px;
                }
                .inner-icon-text {
                    text-align: center;
                    word-wrap: break-word;
                    max-width: 100%;
                    font-size: 12px;
                    font-family: 'krungthep';
                }
            </style>
            <div class="inner-icon-bar">
                <div class="inner-icon" onclick="openWindow('doom')">
                    <img src="/root/static/media/images/doom.png" alt="DOOM 1997" class="inner-icon-img">
                    <div class="inner-icon-text">DOOM 1997</div>
                </div>
                <div class="inner-icon" onclick="openWindow('mario')">
                    <img src="/root/static/media/images/mario.png" alt="atc" class="inner-icon-img">
                    <div class="inner-icon-text">Mario</div>
                </div>
                <div class="innericon" onclick="openWindow('sf2')">
                    <img src="/root/static/media/images/sf2.png" alt="atc" class="inner-icon-img">
                    <div class="inner-icon-text">SF 2</div>
                </div>
            </div>
            
        `; 
    }
    else if (id == "projects") {
        nid = "projects";
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            <style>
                @font-face{
                    font-family: "krungthep";
                    src: url("/root/static/media/fonts/krungthep.eot");
                    src: url("/root/static/media/fonts/krungthep.eot?#iefix")format("embedded-opentype"),
                        url("/root/static/media/fonts/krungthep.woff")format("woff"),
                        url("/root/static/media/fonts/krungthep.woff2")format("woff2"),
                        url("/root/static/media/fonts/krungthep.ttf")format("truetype"),
                        url("/root/static/media/fonts/krungthep.svg#Krungthep")format("svg");
                    font-weight:normal;
                    font-style:normal;
                    font-display:swap;
                }
                
                .inner-icon-bar {
                    position: absolute;
                    left: 20px;
                    top: 40px;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                }
                .inner-icon {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 80px;
                    margin: 0 30px 10px 0;
                    cursor: pointer;
                }
                .inner-icon-img {
                    width: 50px;
                    height: 50px;
                    background-color: #CCCCCC;
                    border: 1px solid #000;
                    margin-bottom: 5px;
                }
                .inner-icon-text {
                    text-align: center;
                    word-wrap: break-word;
                    max-width: 100%;
                    font-size: 11px;
                    font-family: 'krungthep';
                }
            </style>
            <div class="inner-icon-bar">
                <div class="inner-icon" onclick="openWindow('faintedclient')">
                    <img src="/root/static/media/images/file.png" alt="FaintedClient" class="inner-icon-img">
                    <div class="inner-icon-text">FaintedClient</div>
                </div>
                <div class="inner-icon" onclick="openWindow('raylauncher')">
                    <img src="/root/static/media/images/file.png" alt="RayLauncher" class="inner-icon-img">
                    <div class="inner-icon-text">RayLauncher</div>
                </div>
                <div class="inner-icon" onclick="openWindow('raybot')">
                    <img src="/root/static/media/images/file.png" alt="RayBot" class="inner-icon-img">
                    <div class="inner-icon-text">RayBot</div>
                </div>
            </div>

                    `
    }
    else if (id == "doom") { 
        nid = id.toLowerCase();
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            <iframe src="${"/root/doom/" + nid}.html"></iframe>
        `; 
    }
    else if (id == "mario") { 
        nid = id.toLowerCase();
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            <iframe src="${"/root/mario/index"}.html"></iframe>
        `; 
    }
    else if (id == "sf2") { 
        nid = id.toLowerCase();
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            <iframe src="https://www.retrogames.cc/embed/10030-street-fighter-ii-champion-edition-street-fighter-2-920513-etc.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
        `; 
    }
    else {
        nid = id.toLowerCase();
        win.innerHTML = `
            <div class="window-title"><span class="close-btn" onclick="closeWindow('${id}-window')">×</span>${id.charAt(0).toUpperCase() + id.slice(1)}</div>
            <iframe src="${"/root/html/" + nid}.html"></iframe>
        `; 
    } 
    return win;
}

function positionWindow(win) {
    const windows = document.querySelectorAll('.window');
    win.style.left = `${50 + windows.length * 20}px`;
    win.style.top = `${50 + windows.length * 20}px`;
    win.style.display = 'block';
    win.style.backgroundColor = 'white';
}

function closeWindow(id) {
    const win = document.getElementById(id);
    if (win) {
        win.remove();
    }
}

function closeAllWindows() {
    const windows = document.querySelectorAll('.window');
    windows.forEach(win => win.remove());
}

// Make windows draggable
document.addEventListener('mousedown', function(e) {
    if (e.target.className === 'window-title') {
        const win = e.target.parentElement;
        const startX = e.clientX - win.offsetLeft;
        const startY = e.clientY - win.offsetTop;

        function moveWindow(e) {
            win.style.left = `${e.clientX - startX}px`;
            win.style.top = `${e.clientY - startY}px`;
        }

        document.addEventListener('mousemove', moveWindow);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moveWindow);
        }, { once: true });
    }
});

/*async function dropdownShown() {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}*/ // this would be used if I could be assed to make dropdown an onclick with fancy javascript
// leave for last, not really needed. Get core functionality working first.
// nope, not doing it.