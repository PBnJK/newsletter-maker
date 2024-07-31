/* bla bla explanation
 * afsasfaf
 */

let configBoxHidden = true;

/* Toggle config box */
function handleTgConfigs() {
	configBoxHidden = !configBoxHidden;

	const CONFIG_BOX = document.getElementById("config-box");
	CONFIG_BOX.hidden = configBoxHidden;
}

function hideThing(thing, cb) {
	thing.hidden = !cb.checked;
}

/* Toggle subtitle */
function handleTgSub(cb) {
	hideThing(document.getElementById("subtitle"), cb);
}

/* Toggle date */
function handleTgDate(cb) {
	hideThing(document.getElementById("date"), cb);
}

/* Toggle before body */
function handleTgBfBody(cb) {
	hideThing(document.getElementById("bf-body"), cb);
}

/* Toggle image */
function handleTgImage(cb) {
	hideThing(document.getElementById("image-change"), cb);
}

/* Toggle image subtitle */
function handleTgImageSub(cb) {
	hideThing(document.getElementById("image-sub"), cb);
}

/* Toggle after body */
function handleTgAfBody(cb) {
	hideThing(document.getElementById("af-body"), cb);
}

/* Toggle credits */
function handleTgCredits(cb) {
	hideThing(document.getElementById("about"), cb);
}

/* Handle contenteditable mutations
 * https://stackoverflow.com/a/27755298
 */
function isEmpty(mut) {
	let target = document.querySelector('.body');

	if( target.textContent == '' ) {
		target.innerHTML = '';
	}
}

function setUpMutations(mut) {
	mut.forEach(isEmpty);
}

const OBSERVER = new MutationObserver(setUpMutations);
const CONFIG = { attributes: true, childList: true, characterData: true };

OBSERVER.observe(document.querySelector('.body'), CONFIG);

/* Change the image */
function changeImage() {
    const INPUT = document.getElementById('file-input');
	INPUT.setAttribute('accept', 'image/*');

    INPUT.onchange = _ => { 
        const IMG = new Image();
        
        IMG.onload = function() {
            if(this.width <= 320 && this.height <= 320) {
                document.getElementById('image').setAttribute('image-rendering', 'pixelated');
            } else {
                document.getElementById('image').setAttribute('image-rendering', 'auto');
            }

        }
		
		if( !INPUT.files[0].type.includes('image/') ) {
			alert("Select and image, please!");
			return;
		}

        IMG.src = URL.createObjectURL(INPUT.files[0]);
        document.getElementById('image').src = IMG.src;
    }

    INPUT.click();
}
