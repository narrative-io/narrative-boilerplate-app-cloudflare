## Narrative Data Cleanup App - Frontend using Cloudflare Pages

This is a boilerplate repository that can be used as a reference for external developers building a Native App in the [Narrative Data Commerce Platofrm](https://app.narrative.io).  This repository is the front end interface and is meant to be paired with the backend / APIs which can be found [here](https://github.com/narrative-io/data-cleaner-backend-cloudflare-workers).

### Requirements
The front end is build using [VueJS](https://vuejs.org/) and [Cloudflare Pages](https://pages.cloudflare.com/) and as such you'll need to have npm installed locally and have an account with Cloudflare.

### Environment
There is a `.devcontainer` directory checked into the repository which should allow for building a containerized development environment either locally or using a service like [Github Codespaces](https://github.com/features/codespaces). 

### Build
To build the project locally first make sure that `vue-cli-service` is installed via `npm i -g @vue/cli-service` and then run `vue-cli-service-build`

### Local Development
To serve the site locally with auto-refresh run `vue-cli-service serve`

### Cloudflare Pages Setup
Log into Cloudflare and choose `Pages` on the left hand navigation.  Create a new project and connect it to a Git repository where you're using for source control.  Choose that repo and the branch you want Cloudflare to deploy on your behalf.  Choose `Vue` from the preset build options.

Cloudflare will now deploy your updated app when there is an update to the branch you selected above.  You can also setup a custom domain to point to your pages.  This is the domain that will be preference in the Narrative App Manifest so that Narrative can call your application.

## Project Layout

### App Configuration / Setup
The following files have various configuration options that will be need to be updated:<br>

`package.json`: Update any dependencies (using `npm`) as well as the name and metadata about your project.<br>
`src/plugins/router/routes.js`: This defines the routes/endpoints that will be callable in your application.<br>
`manifest.json`: The Narrative App Manifest.  It's contents will be used to configure parts of the app.

### Making an App
`src/components/pages`: Contain the pages that are called by the router<br>
`src/utils`: Helper functions that can be used in your components / pages<br>
`src/App.vue`: The container HTML that will be used for the single page app.  This is what will embed all of the other pages referenced by the router.<br>
`public/`: Any public/static assets can be placed here.<br>