const sections = document.querySelectorAll( 'section' ),
      sec1_bottle = document.querySelector( '.section1 .bottle' ),
      sec1_logotypo = document.querySelector( '.section1 .logotypo' ),
      sec1_city = document.querySelector( '.section1 .city' ),
      sec1_copy = document.querySelector( '.section1 .copy' ),
      sec1_copy_btn = document.querySelector( '.section1 .copy button' ),
      sec1_copy_cont = document.querySelector( '.section1 .copy .copy-container' ),
      sect1_shipsL = document.querySelector( '.section1 .Ships-L' ),
      sect1_shipsR = document.querySelector( '.section1 .Ships-R' ),
      section2 = document.querySelector( '.section2' ),
      sec2_train = document.querySelector( '.section2 .container .train' ),
      sec2_monaxo = document.querySelector( '.section2 .container .monaxo' ),
      sec2_petros = document.querySelector( '.section2 .container .petros' ),
      sect2_copy = document.querySelector( '.section2 .copy' ),
      sect2_copy_title = document.querySelector( '.section2 .copy .copy-title' ),
      sect2_copy_subtitle = document.querySelector( '.section2 .copy .copy-subtitle' ),
      sect2_copy_p = document.querySelector( '.section2 .copy .copy-p ' ),
      sect2_copy_img = document.querySelector( '.section2 .copy img' ),
      section3 = document.querySelector( '.section3' ),
      sect3_cont1_petrosSecret = document.querySelector( '.section3 .cont1 .petros-secret' ),
      sect3_cont1_pngSprite = document.querySelector( '.section3 .cont1 .petros-secret .png-sprite' ),
      sect3_cont2_machine = document.querySelector( '.section3 .cont2 .machine' ),
      sect3_cont2_pngSprite = document.querySelector( '.section3 .cont2 .png-sprite' ),
      sect3_1_copy = document.querySelector( '.section3 .cont1 .copy' ),
      sect3_1 = document.querySelector( '.section3 .cont1' ),
      sect3_1_copy_title = document.querySelector( '.section3 .cont1 .copy .copy-title' ),
      sect3_1_copy_subtitle = document.querySelector( '.section3 .cont1 .copy .copy-subtitle' ),
      sect3_1_copy_p = document.querySelector( '.section3 .cont1 .copy .copy-p' ),
      sect3_1_copy_img = document.querySelector( '.section3 .cont1 .copy img' ),
      sect3_2_copy_img = document.querySelector( '.section3 .cont2 .copy img' ),
      sec3_cont1_petrosSecret_img = document.querySelector( '.section3 .cont1 .petros-secret img' ),
      section4 = document.querySelector( '.section4' ),
      section4_cont1 = document.querySelector( '.section4 .cont1' ),
      section4_cont2 = document.querySelector( '.section4 .cont2' ),
      sect4_cont1_petrosFactory = document.querySelector( '.section4 .cont1 .petros-factory' ),
      sect4_cont1_handKey = document.querySelector( '.section4 .cont1 .hand-key' ),
      sect4_cont2_mamosBeer = document.querySelector( '.section4 .cont2 .mamos-beer' ),
      sect4_cont2_mamosGlass = document.querySelector( '.section4 .cont2 .mamos-glass' ),
      sect4_cont2_ballon = document.querySelector( '.section4 .cont2 .ballon' ),
      monaxo = document.querySelector( '.section2 .monaxo' ),
      train = document.querySelector( '.section2 .train' ),
      petros = document.querySelector( '.section2 .petros' ),
      machine = document.querySelector( '.section3 .cont2 .machine' ),
      copy = document.querySelector( '.section3 .cont2 .copy' ),
      petros_factory = document.querySelector( '.section4 .cont1 .petros-factory' ),
      hand_key = document.querySelector( '.section4 .cont1 .hand-key' ),
      likiskos1 = document.querySelector( '.section4 .cont2 .likiskos1' ),
      likiskos2 = document.querySelector( '.section4 .cont2 .likiskos2' ),
      likiskos3 = document.querySelector( '.section4 .cont2 .likiskos3' ),
      likiskos4 = document.querySelector( '.section4 .cont2 .likiskos4' ),
      buttonSec5 = document.querySelector( '.section4 .cont2 button' ),
      mamosGlass = document.querySelector( '.section4 .cont2 .mamos-glass' ),
      sect4_copy_img = document.querySelector( '.section4 .copy img' ),
      sect4_cont1_clouds = document.querySelector( '.section4 .cont1 .clouds' )
     

      



const html =  document.querySelector( 'html' ),
        body =  document.querySelector( 'body' )

// device detection
var isMobile = false;
if ( /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test( navigator.userAgent ) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test( navigator.userAgent.substr( 0, 4 ) ) ) { 
    isMobile = true;
}
if ( isMobile ) {
    html.style.overflow = `auto`
    body.style.overflow = `auto`
}

if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
    }
window.scrollTo( 0, 0 )

window.addEventListener( 'load', () => {
    if ( isMobile && window.innerWidth > 600 ) {
        section4.style.height = '200vh'
        section4_cont1.style.height = '50%'
        section4_cont2.style.height = '50%'
        sect4_cont1_clouds.style.bottom = '-16%'

        sec1_bottle.style.cssText = `
            transform: translate(-50%, -45%);
            width: 18%;
            top:45%; 
        `
        sect1_shipsL.style.cssText = `
            top: 50%;
            left: -4%;
            width: 35%;
        `
        sect1_shipsR.style.cssText = `
            top: 50%;
            right: -2%;
            width: 35%;
        `
        sec1_logotypo.style.cssText = `
            top: 5%;
            left: 50%;
            transform: translateX( -50% ) scale( 1.5 );
            animation: none;
            opacity: 1;
        `
        sec1_city.style.cssText = `
            width: 180%;
            animation: none;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
        `
        sec1_copy.style.cssText = `
            top: 70%;
            left: 50%;
            transform: translate(-50%, 0) scale( 1.1 );
            width: 50%;
        `
        sec1_copy_btn.style.cssText = `
            opacity: 1;
        `
        sec1_copy_cont.style.cssText = `
            opacity: 1;
        `


        sec2_train.style.cssText = `
            bottom: 6%;
            z-index: 22;
            width: 55%;
            right: 0;
        `
        sec2_monaxo.style.cssText = `
            bottom: 10%;
            z-index: 20;
            width: 90%;
            left:0;
        `
        sec2_petros.style.cssText = `
            bottom: 17%;
            right: -13%;
            transform: rotate(9deg);
            z-index: 21;
            width: 80%;
        `
        sect2_copy.style.cssText = `
            margin: 0;
            padding-top: 30px;
            width: 100%;
            background: url( '../images/Section1/mamos-label-blue-darker1.jpg' );
            height: 45%;
        `
        sect2_copy_title .style.cssText = `
            text-shadow: 0 2px 0 #2c2a25;
            color: #efd5ac;
        `
        sect2_copy_subtitle.style.cssText = `
            font-size: 18px;
            color: #efd5ac;
        `
        sect2_copy_p.style.cssText = `
            font-size: 12px;
            color: white;
        `

        
        sect3_cont1_petrosSecret.style.cssText = `
            width:100%;
        `
        sect3_1_copy.style.cssText = `
            margin: 0;
            padding-top: 30px;
            width: 100%;
            background: #21657c;
            height: 45%;
        `

        sect3_1_copy_title.style.cssText = `
            text-shadow: 0 2px 0 #2c2a25;
            color: #efd5ac;
        `
        sect3_1_copy_subtitle.style.cssText = `
            font-size: 18px;
            color: #efd5ac;
        `
        sect3_1_copy_p.style.cssText = `
                font-size: 12px;
                color: white;
        `

        sect3_1.style.cssText = `
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            width: 100vw;
            height: 100vh;
        `
        sec3_cont1_petrosSecret.src = `images/Section3/Petsos-secret-likiskos.png`
    }
} )




// Scroll to next section


// Stop Wheel after the first wheeling
function throttle( func, limit ) {
    let inThrottle
    return function() {
        const args = arguments,
            context = this
        if ( !inThrottle ) {
            func.apply( context, args )
            inThrottle = true
            setTimeout( () => ( inThrottle = false ), limit )
        }
    }
}

//Set variables
const footer = document.querySelector( 'footer' ),
      numberOfSections = sections.length

let direction = 1, currentSection = 1


// Fix double section if the user refresh in a random position
if ( currentSection > 3 && window.innerWidth > 600 && !isMobile ) sections[ 2 ].style.transform = 'translateX( -50% )'

// Fix section 4 if user refresh in the next one section
if ( currentSection > 4 ) {
    sections[ 2 ].style.transform = 'translateX( -50% )'
    machine.style.animation = `machine 0s ease-in-out 0s forwards`
    copy.style.animation = `copy-sect4 0s ease-in-out 0s forwards`
}

//Fix section 3
if ( currentSection == 3 ) {

}

// Wheel event
document.addEventListener( 'wheel', throttle( scrollChange, 1500 ) )
// Detect Wheel direction and call scroll-functionality
function scrollChange( e ) {
    if ( e.deltaY > 0 ) {
        direction = 1
    } else {
        direction = -1
    }
    smoothScroll( 1300 )
}

function smoothScroll( duration ) {
    //Current section update
    direction > 0 ? currentSection++ : currentSection--
    currentSection == 0 ? currentSection = 1 : null
    currentSection > numberOfSections + 3 ? currentSection = numberOfSections + 3 : null
    // Set variables  
    let vh = sections[ 0 ].clientHeight
    let startPosition = window.pageYOffset
    if ( currentSection == 7 && direction == 1 || currentSection == 6 && direction == -1 ) {
        vh = footer.clientHeight
        
    }
    let distance = direction * vh
    let startTime = null
    
    // Double section ( 3 & 4 ) to the right or to the or keep scrolling
    if ( currentSection == 4 && direction == 1 && window.innerWidth > 600 ) {
        sections[ 2 ].style.transform = 'translateX( -50% )'
        machine.style.animation = `machine 1.5s ease-in-out .5s forwards`
        copy.style.animation = `copy-sect4 1s ease-in-out .9s forwards`
    } else if ( currentSection == 3 && direction == -1 && window.innerWidth > 600 ) {
        copy.style.animation = `copy-sect4Reverse 1s ease-in-out forwards`
        machine.style.animation = `machineReverse 1.5s ease-in-out forwards`
        setTimeout( () => {
            sections[ 2 ].style.transform = 'translateX( 0 )'
        }, 1000 )
        
    } else {
        // Double section (4 & 5 ) up and down
        if ( currentSection == 6 && direction == 1 && window.innerWidth > 600 ) {
            section4_cont1.style.transform = `translateY( 100% )`
            section4_cont2.style.transform = `translateY( -100% )`
            
            mamosGlass.style.animation ='mamos-glass 1.5s ease-in-out forwards'
            likiskos1.style.animation ='likiskos1 1.5s ease-in-out forwards'
            likiskos3.style.animation ='likiskos1 1.5s ease-in-out .6s forwards'
            likiskos2.style.animation ='likiskos2 1.5s ease-in-out forwards'
            likiskos4.style.animation ='likiskos3 1.5s ease-in-out .6s forwards'
            buttonSec5.style.animation ='button-sec6 .7s ease-in-out 2s forwards'

        } else if ( currentSection == 5 && direction == -1 && window.innerWidth > 600) {
            section4_cont1.style.transform = `translateY( 0 )`
            section4_cont2.style.transform = `translateY( 0 )`
        } else {
            requestAnimationFrame( animation )

            if ( currentSection == 2 ) {
                setTimeout( () => {
                    monaxo.style.animation = `monaxo 1s ease-in-out forwards`
                    train.style.animation = `train 1s ease-in-out forwards`
                    petros.style.animation = `petros 1s ease-in-out .3s forwards`
                }, 600 )
            } else if ( currentSection == 5 ) {
                setTimeout( () => {
                    petros_factory.style.transform = `translateY( 0 )`
                    petros_factory.style.animation = `petros-factory 3s ease-in-out 2s infinite`
                    hand_key.style.transform = `translateX( -2% )`
                    hand_key.style.animation = `petros-hand 3s ease-in-out 2s infinite`
                }, 600 )
            } else if ( currentSection == 3 ) {
                setTimeout( () => {
                    pngSprite_likiskos.style.display = 'block'
                }, 1300 )
            }
        }
    }



           

    function animation( currentTime ) {
        if ( startTime === null ) startTime = currentTime
        let timeElapsed = currentTime - startTime
        let run = ease( timeElapsed, startPosition, distance, duration )
        window.scrollTo( 0, run )
        if ( timeElapsed < duration ) requestAnimationFrame( animation )
    }

    function ease(t, b, c, d) {
        t /= d / 2
        if ( t < 1 ) return c / 2 * t * t * t * t + b
        t -= 2
        return -c / 2 * ( t * t * t * t - 2 ) + b
    }
    
}
      


const section3_chlidren = document.querySelectorAll( '.section3 .container' )



let Sec3_cont1_changeImage = false




let scaleCopy







 // Section1 open window player
 const sec1_btn_watchMovie = document.querySelector( '.section1 .container .copy button' ),
       sec1_windowPlayer = document.querySelector( '.section1 .videoWindow' ),
       sec1_closeWindowPlayer = document.querySelector( '.section1 .videoWindow .closeBtn' )

sec1_btn_watchMovie.addEventListener( 'click', () => {
    sec1_windowPlayer.style.top = `0`
} )
sec1_closeWindowPlayer.addEventListener( 'click', () => {
    sec1_windowPlayer.style.top = `-100%`
} )


// Section2 png sprite resize
const petrosSecret = document.querySelector( '.section3 .cont1 .petros-secret img' ),
      pngSprite_likiskos = document.querySelector( '.section3 .cont1 .petros-secret .png-animation' ),
      machineImg = document.querySelector( '.section3 .cont2 .machine img' ),
      pngSprite_lamp = document.querySelector( '.section3 .cont2 .machine .png-animation' )







window.addEventListener( 'resize', initialize_Upadate )
window.addEventListener( 'load', initialize_Upadate )

function initialize_Upadate() {
    if ( window.innerWidth > 600 && !isMobile ) {
        if ( currentSection == 1 ) {
            window.scrollTo( 0, 0 )
        } else if ( currentSection == 2 ) {
            window.scrollTo( 0, section2.offsetTop )
        } else if ( currentSection == 3 ) {
            window.scrollTo( 0, section3.offsetTop )
        } else if ( currentSection == 4 ) {
            window.scrollTo( 0, section3.offsetTop )
            section3.style.transform = 'translateX( -50% )'
        } else if ( currentSection == 5 ) {
            window.scrollTo( 0, section4.offsetTop )
            section4_cont1.style.transform = `translateY( 0 )`
            section4_cont2.style.transform = `translateY( 0 )`
        } else if ( currentSection == 6 ) {
            window.scrollTo( 0, section4.offsetTop )
            section4_cont1.style.transform = `translateY( 100% )`
            section4_cont2.style.transform = `translateY( -100% )`
        } else if ( currentSection == 7 ) {
            window.scrollTo( 0, ( section4.offsetTop + footer.clientHeight ) )
        } else {
            window.scrollTo( 0, 0 )
            currentSection = 1
        }
        // Section 3
        if ( currentSection > 3 ) sections[ 2 ].style.transform = 'translateX( -50% )'
        sections[ 2 ].style.width = '200vw'
        sections[ 2 ].style.display = 'flex'
        sections[ 2 ].style.transition = 'transform 1s ease-in-out'

        // Initialize or upadate the children of the double section
        section3_chlidren.forEach( subDiv => {
            subDiv.style.width = '100vw'
        } )

        section4.style.height = '100vh'
        section4_cont1.style.height = '100%'
        section4_cont2.style.height = '100%'


        sect1_shipsR.style.animation = `ship-R 4s ease-in-out infinite`
        sect1_shipsL.style.animation = `ships-L 4s ease-in-out infinite`
        sec1_bottle.style.animation = ` bottle 1.3s ease-in-out`
        sec1_copy_cont.style.animation = `copy-container .7s ease-in-out 1.3s forwards`
        sec1_copy_btn.style.animation = `copy-button .7s ease-in-out 2s forwards`
        sec1_logotypo.style.animation = `logo-type .7s ease-in-out .5s forwards`
        sec1_city.style.animation = `city 1s ease-in-out forwards`


    } else if ( window.innerWidth < 600 && !isMobile ) {

        // Fix scrolling position on resize
        if ( currentSection == 1 ) {
            window.scrollTo( 0, 0 )
        } else if ( currentSection == 2 ) {
            window.scrollTo( 0, section2.offsetTop )
        } else if ( currentSection == 3 ) {
            window.scrollTo( 0, section3.offsetTop )
        } else if ( currentSection == 4 ) {
            window.scrollTo( 0, ( section3.offsetTop + window.innerHeight ) )
        } else if ( currentSection == 5 ) {
            window.scrollTo( 0, section4.offsetTop )
        } else if ( currentSection == 6 ) {
            window.scrollTo( 0, ( section4.offsetTop + window.innerHeight ) )
        } else if ( currentSection == 7 ) {
            window.scrollTo( 0, ( section4.offsetTop + window.innerHeight + footer.clientHeight ) )
        } else {
            window.scrollTo( 0, 0 )
            currentSection = 1
        }

       
        // Section 3
        sections[ 2 ].style.width = '100vw'
        sections[ 2 ].style.display = 'block'
        sections[ 2 ].style.transform = 'translateX( 0 )'
        sections[ 2 ].style.transition = 'transform 0s'

        // Initialize or upadate the children of the double section
        section3_chlidren.forEach( subDiv => {
            subDiv.style.width = '100vw'
        } )

        

        sect3_cont1_petrosSecret_img.style.width = `100%`
        sect3_cont2_machine.style.width = `145%`

        sect4_cont1_petrosFactory.style.width = `56%`
    }

    
    if ( window.innerWidth < 600 || isMobile ) {
        sec3_cont1_petrosSecret.src = `images/Section3/Petsos-secret-likiskos.png`
        Sec3_cont1_changeImage = true

        section4.style.height = '200vh'
        section4_cont1.style.height = '50%'
        section4_cont2.style.height = '50%'
        section4_cont1.style.transform = `translateY( 0 )`
        section4_cont2.style.transform = `translateY( 0 )`
    } 

    if ( window.innerWidth > 600 && !isMobile && Sec3_cont1_changeImage ) {
        sec3_cont1_petrosSecret_img.src = `images/Section3/Petros-secret.png`
    }




    if ( window.innerHeight < 600 && window.innerWidth > 600 ) {
        sec1_bottle.style.maxWidth = `130px`
        sect1_shipsL.style.width = `17%`
        sect1_shipsR.style.width = `17%`

        sec2_monaxo.style.width = `55%`
        sec2_train.style.width = `33%`
        sec2_petros.style.width = `45%`

        sect3_cont1_petrosSecret.style.width = `48%`
        sect3_cont1_pngSprite.style.left = `43%`
        sect3_cont2_machine.style.width = `50%`
        sect3_cont2_pngSprite.style.left = `48.5%`

        sect4_cont1_petrosFactory.style.width = `27%`
        //sect4_cont1_handKey.style.width = ``
        sect4_cont2_mamosBeer.style.width = `8%`
        sect4_cont2_mamosGlass.style.width = `20%`
    } else if ( window.innerHeight < 750 && window.innerWidth > 600 ) {
        sec1_bottle.style.maxWidth = `150px`
        sec1_bottle.style.maxHeight = `430px`

        sect1_shipsL.style.width = `20%`
        sect1_shipsR.style.width = `20%`


        sect3_cont1_petrosSecret.style.width = `54%`
        sect3_cont1_pngSprite.style.left = `46%`
        sect3_cont2_machine.style.width = `65%`
        sect3_cont2_pngSprite.style.left = `54.5%`

        sect4_cont1_petrosFactory.style.width = `28%`
        //sect4_cont1_handKey.style.width = ``
        sect4_cont2_mamosBeer.style.width = `9%`
        sect4_cont2_mamosGlass.style.width = `23%`
        likiskos1.style.left = `33%`
        likiskos3.style.left = `29%`
    } else if ( window.innerHeight > 750 && window.innerWidth > 600 ) {
        sec1_bottle.style.maxWidth = ``
        sec1_bottle.style.maxHeight = ``

        sec2_monaxo.style.width = `60%`
        sec2_train.style.width = `36%`
        sec2_petros.style.width = `60%`

        sect3_cont1_petrosSecret.style.width = `60%`
        sect3_cont1_pngSprite.style.left = `49%`
        sect3_cont2_machine.style.width = `80%`
        sect3_cont2_pngSprite.style.left = `56%`

        sect4_cont1_petrosFactory.style.width = `30%`
        //sect4_cont1_handKey.style.width = ``
        sect4_cont2_mamosBeer.style.width = `10%`
        sect4_cont2_mamosGlass.style.width = `25%`
        likiskos1.style.left = `31%`
        likiskos3.style.left = `27%`
    }
    

    if ( innerWidth > 600 ) {
        if ( !isMobile ) {
            scaleCopy = Math.max( .8, ( window.innerWidth / 1700 ) )
            sec1_copy.style.transform = `scale( ${scaleCopy} )`
 
        }
        
        sect2_copy_img.src = `images/Section1/text-divider.png`
        sect3_1_copy_img.src = `images/Section1/text-divider.png`
        sect3_2_copy_img.src = `images/Section1/text-divider.png`
        sect4_copy_img.src = `images/Section1/text-divider.png`
    } else {
        sec1_copy.style.transform = `translate(-50%, 0) scale(0.6)`
        sect2_copy_img.src = `images/Section2/text-divider.png`
        sect3_1_copy_img.src = `images/Section2/text-divider.png`
        sect3_2_copy_img.src = `images/Section2/text-divider.png`
        sect4_copy_img.src = `images/Section2/text-divider.png`
    }



    pngSprite_likiskos.style.transform = `scale( ${ petrosSecret.clientWidth / 2500 } )`
    pngSprite_lamp.style.transform = `scale( ${ machineImg.clientWidth / 1870 } )`

}