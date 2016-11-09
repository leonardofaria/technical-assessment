# Technical Assessment

[Demo](https://leonardofaria.github.io/technical-assessment/)

-----

## Installation

You will need to install [NodeJS](http://nodejs.org/).

```sh
# Clone the repository:
$ git clone git@github.com:leonardofaria/technical-assessment.git
$ cd technical-assessment

# Installs all the dependencies:
$ npm install && npm start

# Starts a local server on port 3000:
$ gulp
```


-----

## Deployment

You have two options:

### Github pages

This option deploys the content of `public` directory into a gh-pages branch.

`gulp deploy:github`

### Rsync

This option deploys the content of `public` directory using Rsync via SSH.

`gulp deploy:rsync --hostname='xx.com' --username='user' --destination='~/www/app'`
