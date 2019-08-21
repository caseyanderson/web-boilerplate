# generic web-starter

*Note*: HT to Kevin Powell, and specifically [this](https://www.youtube.com/watch?v=QgMQeLymAdU) video, for the inspiration/assistance

Generic project setup for local web development. `gulpjs` compiles `scss` on change (using `gulp-sass`), all changes to `html` and `scss` files are synced via `BrowserSync`.


## installation

1. check to make sure you have the following installed: `node`, `npm` (normally comes with `node`) and `npx` (ditto):

    * `node --version`
    * `npm --version`
    * `npx --version`

    If you are missing these you can install them from `homebrew` (`brew install node`):

2. install `gulp` globally (on your CPU): `npm install gulp-cli -g`
3. clone this repo into a project directory (named `PROJECTNAME`), `cd` into that directory: `git clone git@github.com:caseyanderson/web-starter.git PROJECTNAME && cd PROJECTNAME`
4. initialize the project directory with `npm`, answer the questions: `npm init`
5. install local versions of `gulp`, `gulp-sass`, and `BrowserSync` to our project directory (`PROJECTNAME`):`npm install --save-dev gulp gulp-sass browser-sync`
6. launch `BrowserSync` server and watch `scss` and `html` files for changes: `gulp watch`
7. manually recompile `css` from `scss` (note: this happens automatically on change by running `gulp watch`): `gulp style`
