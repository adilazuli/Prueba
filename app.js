
const videoUploaded = document.getElementById("videoFile");
const audioUploaded = document.getElementById("audioFile");




const player = new Plyr('#video-preview');
// const audio = new Plyr('#audio-preview');



videoUploaded.onchange = function(event) {
    let file = event.target.files[0];
    let blobURL = URL.createObjectURL(file);
    document.querySelector("video").style.display = 'block';
    document.querySelector("video").src = blobURL;
    document.querySelector("video").play()
}

audioUploaded.onchange = function(event) {
    let file = event.target.files[0];
    let blobURL = URL.createObjectURL(file);
    document.querySelector("audio").style.display = 'block';
    document.querySelector("audio").src = blobURL;
    document.querySelector("audio").play();
}

videoUploaded.addEventListener("change", (e) => {
    console.log(e);
    let FileName = videoUploaded.files[0].name;
    let FileType = videoUploaded.files[0].type;
    let FileSize = videoUploaded.files[0].size;

    document.getElementById("FileNameInfo").textContent = FileName;
    document.getElementById("FileTypeInfo").textContent = FileType;
    var totalSizeMB = FileSize / Math.pow(1024, 2);
    document.getElementById("FileSizeInfo").textContent = totalSizeMB.toFixed(2);
});

audioUploaded.addEventListener("change", (e) => {
    console.log(e);
    let FileName = audioUploaded.files[0].name;
    let FileType = audioUploaded.files[0].type;
    let FileSize = audioUploaded.files[0].size;

    document.getElementById("AudioNameInfo").textContent = FileName;
    document.getElementById("AudioTypeInfo").textContent = FileType;
    var totalSizeMB = FileSize / Math.pow(1024, 2);
    document.getElementById("AudioSizeInfo").textContent = totalSizeMB.toFixed(2);
});

/**
 * Permite activar las funciones de los botones
 * @param {string} id 
 */
function showOptions(id) {
    var ocultar = document.getElementsByClassName("fade");
    for (var i = 0; i<ocultar.length; i++) {
        ocultar[i].classList.remove("activo");
    }

    document.getElementById(id).classList.add('activo')
}

function showColorVideo(color) {
    var ocultar = document.getElementsByClassName(color);
    for (var i = 0; i<ocultar.length; i++) {
        ocultar[i].classList.remove(color);
    }

    player.style = '--plyr-color-main: #1ac266'
}