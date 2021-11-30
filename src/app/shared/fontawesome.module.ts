import { NgModule } from "@angular/core";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

@NgModule({
    imports: [
        FontAwesomeModule
    ],
    exports: [
        FontAwesomeModule
    ]
})

export class FontawesomeModule { 
    constructor (library: FaIconLibrary) {

        library.addIcons(faCoffee);
        library.addIcons(faFacebook);
        library.addIcons(faWhatsapp);
        library.addIcons(faInstagram);
        library.addIcons(faLinkedin);
        library.addIcons(faLinkedinIn);
    }
}