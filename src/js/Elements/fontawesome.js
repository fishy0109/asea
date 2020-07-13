FontAwesomeConfig = {
  keepOriginalSource: false,
  searchPseudoElements: true
}

import {library, dom} from '@fortawesome/fontawesome-svg-core'

import {
  faInstagram,
  faFacebookF,
  faFacebookSquare,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'


import {
  faSearch,
  faUndoAlt,
  faSlidersH,
  faChevronLeft,
  faChevronRight,
  faHomeAlt,
  faLongArrowRight,
  faPlayCircle,
  faRepeat
} from '@fortawesome/pro-regular-svg-icons'

import {
  faExclamationTriangle, 
  faDownload,
  faThList,
  faTh,
  faSquare,
  faCheckSquare,
  faMapMarker,
  faSortDown,
  faEnvelope,
  faFilePdf,
  faMailbox,
  faWalking,
  faPlay,
  faPause,
  faHeart as fasHeart,
  faSearch as fasSearch,
  faClock
} from '@fortawesome/pro-solid-svg-icons'

import {
  faSearch as falSearch,
  faHeart,
  faCheck,
  faTimes,
  faKeyboard,
  faSquare as falSquare,
  faLongArrowDown,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faExternalLinkSquare,
  faEnvelopeOpenText,
  faFileAlt
} from '@fortawesome/pro-light-svg-icons'

export default class FontAwesome {
  constructor() {

    library.add(

      // free-brands-svg-icons
      faInstagram,
      faFacebookF,
      faFacebookSquare,
      faLinkedinIn,
      faTwitter,
      faYoutube,

      // pro-regular-svg-icons
      faSearch,
      faUndoAlt,
      faSlidersH,
      faChevronLeft,
      faChevronRight,
      faHomeAlt,
      faLongArrowRight,
      faPlayCircle,
      faRepeat,

      // pro-solid-svg-icons
      faExclamationTriangle, 
      faDownload,
      faThList,
      faTh,
      faSquare,
      faCheckSquare,
      fasHeart,
      fasSearch,
      faMapMarker,
      faSortDown,
      faEnvelope,
      faFilePdf,
      faFileAlt,
      faWalking,
      faMailbox,
      faPlay,
      faPause,
      faClock,

      // pro-light-svg-icons
      falSearch,
      faHeart,
      faCheck,
      faTimes,
      faKeyboard,
      falSquare,
      faLongArrowDown,
      faArrowDown,
      faArrowLeft,
      faArrowRight,
      faExternalLinkSquare,
      faEnvelopeOpenText
    );

    dom.watch();

    this.inserted()
  }

  inserted() {
    // Anything extra to bind or insert manually.
  }
}
