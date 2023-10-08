# starter.react

Simple React/Typescript starter

## Description

This project is meant to be a React Starter for my personnal use.

Codacy's project token. See "Project API" in the Settings/Integrations tab of the codacy project.
This token will be use by travis to send coverage report to codacy.

#### `GITLAB_TOKEN`

Gitlab Token (project, group or personnal) with `api` and `write_permission`.

This token will be use for semantic-release. It enable the tool to update the repository with changelog, updated version of package.json, tag creation and release creation.

See:
* [Semantic-release/gitlab configuration](https://github.com/semantic-release/gitlab#configuration)

#### `FIREBASE_TOKEN`

Firebase access token.
It enable the publication of your package if it's not private.

#### `SENTRY_DSN`

Sentry Data Source Name identifier.

See:
* [Data Source Name (DSN)](https://docs.sentry.io/product/sentry-basics/concepts/dsn-explainer/)
