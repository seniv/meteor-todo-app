# Meteor Todo App

Just a Meteor-React todo app from [Meteor's website tutorial](https://www.meteor.com/tutorials/react/creating-an-app), but with little changes.

What was changed in this app:
1. Removed `accounts-ui` and `all blaze` packages
2. Added `mdg:validated-method` package for creating Valitated meteor's 
methods
3. Added npm package `simpl-schema` for mongo validations
4. Added `aldeed:collection2` package for applying validation-schemas to collections
5. Added `dburles:collection-helpers` package for apply helper-methods to collections
6. Added npm packages `recompose`, `react-router-dom`, `custom-hoc`, `styled-components`, for React-Client,
7. Client rewrited as SPA-App

## Run this app
1. Make sure you have installed [Meteor](https://www.meteor.com/install)
2. Clone this repo
3. Run app by running `meteor` command inside this repo's folder