# UI Components

A small draft collection of nice / fancy / interesting UI elements. 
Storybook is used to easily display each element in a separate tab.

## Getting started

To get started, first clone the project using
```shell script
git clone https://github.com/florianbuehler/ui-components.git
```
Alternatively you can also clone it using SSH `git@github.com:florianbuehler/ui-components.git`.

Once you cloned the project successfully, navigate into the root project folder and run
```shell script
npm install
```
to install all required packages in the `node_modules` folder.


## Development

The following commands are available after checking out the repository and can be useful during development phase:

```shell script
npm run lint
```
Runs the two commands `npm run eslint` and `npm run stylelint`. See below for a description of the two commands.

```shell script
npm run fix-lint
```
Runs the two commands `npm run fix-eslint` and `npm run fix-stylelint`. See below for a description of the two commands.

```shell script
npm run eslint
```
To see all formatting and code snippets which do not fit the code quality standards specified in the Eslint & Prettier configurations you can use `npm run eslint`. The command outputs a list of all violations in the terminal.

```shell script
npm run fix-eslint
```
If you don't want to fix the code quality issues found by Eslint & Prettier by hand you can simply run `fix-eslint`.
It will try to fix all violations and output the violations which couldn't be fixed automatically.

```shell script
npm run stylelint
```
Similar to `fix-lint` showing all code style deviations for .ts and .tsx files by running Eslint & Prettier,
`fix-stylint` runs the [stylelint](https://stylelint.io/) linter, to enforce consistent and clean style sheets (for both .css and .scss files).

```shell script
npm run fix-stylelint
```
Tries to fix all violations found by `stylelint`.

```shell script
npm run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

From the CRA documentation:

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
