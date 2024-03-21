+ Launch project









CURRENT - Debug error
Wrong contract b/w client and server
Currently: client tries to fetch each filter individually
Correct: client fetches /api/filters, and passes all active filters as query params

* Task *
Implement stateless filter contract

* Decomposition *
+ Create endpoint on backend
+ Front-end:
  On init, front-end should request /api/filters with empty query string -> fetchFilters(activeFilters = null)
  On filter change, front-end should re-fetch filters with relevant query string -> fetchFilters(activeFilters = {}: FiltersType)
  Steps (homepage):
    + parse filters from query string || {}
    + call fetchFilters(activeFilters)
    + render filters

Back-end:
  + refactor dependency mechanism: rely on activeFilters instead of ones parsed from document
    + parse all from document

    + for each filter, see if dependency && !filters[dependency.name].value -> options = []

  + Car Listing search
    define CarListingType
    parse values from document
    return CarListingType from /api/search


+ get into context
> finish pending tasks
come up w/ a roadmap

Front-end:
    + handle dependencies
    + clear un-existing filter values
    >- handle search
      on submit:
        +generate query string
        +redirect to /?params
        +server component parses params & makes api call to /api/search?params
          define CarListingType
          return CarListingType from server
          fetch CarListingType
        + disable cache for listings fetch
        + render car listings
      + styles
      + /listing/[id] page
        + create /api/listing/:slug endpoint
          + accept slug
          + request page
          + parse:
            + id: string;
            + brand: string;
            + model: string;
            + year: string;
            + priceUsd: string;
            + mileage: string;
            + thumbnailUrl: string;
          + respond
        + reuse fetching flow to retrieve data from /api/listing/:slug endpoint
          debug endpoint handler on back-end: currently not sending correct slug
    + move folders to /src: utils, types, etc.
    + cache for
      + /filters (every 1m)
      + /search (every 30s)
      + /listing/:slug (every 10m)
    + create a project plan
      what should it contain?
        target MVP
        roadmap

+ to refactor

target MVP
pages:
  car listings page
    filters (dynamically generated, autoria & olx)
    cards list (click to visit single, like)
  single listing
    title, description, price, etc.
    image slider
  auth
    login / signup
      google
      email/password
  dashboard
    see liked


roadmap
+ single listing page
  text content
  slider
> auth
  login/signup
    email/password & jwt
    google sso
dashboard
  display list of liked posts
  remove from liked
merge olx
  research: api or parsing
  plan how to retrieve the necessary data
  back-end
    introduce adapter routers for autoria & olx
    setup olx endpoints
  integrate front-end


Feature:
Authorization


User stories:
~ as a user, I want to be able to authorize within the application
  ~ as a user, I want to be able to sign up for a new account
    I want to navigate to the signup page
    I want to enter login/password
    I want to get redirected to the homepage logged in
  ~ as a user, I want to be able to log into my account
    I want to navigate to the login page
    I want to enter login/password
    I want to get redirected to the homepage logged in

Flow:
user lands on homepage
  not logged in
    clicks "authorize" link
    navigates to /auth (signup by default)
    login/signup form (jwt: accessToken, refreshToken)
    sso google (github/other?)
  logged in
    profile icon
      tooltip logout
    dashboard



+ single listing page
  > 2 column layout
    slider
      > use swiper
          + use custom SVGs for arrows
          + low-quality images
          + custom pagination?
          full-screen slider
            develop modal flow
              + install zustand
              + create modalsStore: { activeModal: { type: MODAL_TYPES, initialProps: { typed for each modal_type } }, openModal, hideModal }
              + create <Modals /> component:
                if activeModal -> createPortal(<div class="wrapperClass">{modals[activeModal]}</div>, document.body)
              + display modal using shadcn <Dialog />
                + on mount -> show modal
                + on close -> store.hideModal()
                + embed gallery slider
                  default activeSlide idx
                + refactor cn() (duplicate)
                + work on type inferring (map specific modalType to initialProps)
                + sync open idx w/ main slider

    + title: make, model, year
    + mileage
    + price
    + description

Auth
~ back-end
  + set up db 
  + create riaApiRouter
  > create authRouter
  ~ create post /auth/signup endpoint on express server
    ~ validate user input
    ~ check if user doesn't exist
    ~ if exists -> respond w/ error
    ~ if !exists -> create user (encrypt password), generate accessToken, respond
  ~ create post /auth/login endpoint
    ~ validate user input
    ~ get user's password by login
    ~ if !exists -> respond w/ error
    ~ if exists -> compare password (decrypted)
      if !match -> error
      if match -> respond w/ accessToken
  ~ create /api/auth/* handlers and forward requests
~ front-end
  ~ add "Authorize" link to header nav
  ~ create /auth page
  ~ create a login/signup form component w/ toggle functionality



Update packages

