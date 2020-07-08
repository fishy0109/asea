/**
 * Search
 */
class Search {

  constructor() {
    this.init()
  }

  init() {
    // console.log('Search!!!')

    var $searchTrigger = $('.main-header-search-trigger')
    var $searchClose = $('.close-main-header-search')
    var $mainHeaderNav = $('.main-header-nav')
    var $headerSearchInput = $('#main-header-search-field')

    $($searchTrigger).on('click', function (e) {
      e.preventDefault()
      $mainHeaderNav.addClass('hide-main-header-nav-wrap')
      $headerSearchInput.focus()
    })

    $($searchClose).on('click', function (e) {
      e.preventDefault()
      $mainHeaderNav.removeClass('hide-main-header-nav-wrap')
    })
  }
}

export default Search
