# Contributing

## Request for changes/ Pull Requests

You first need to create a fork of the [VocabGenie](https://github.com/ghpranav/VocabGenie) repository to commit your changes to it. Methods to fork a repository can be found in the [GitHub Documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Then add your fork as a local project:

```sh
# Using HTTPS
git clone https://github.com/ghpranav/VocabGenie.git

# Using SSH
git clone git@github.com:ghpranav/VocabGenie.git
```

> [Which remote URL should be used ?](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)

Then, go to your local folder

```sh
cd VocabGenie
```

Add git remote controls :

```sh
# Using HTTPS
git remote add fork https://github.com/YOUR-USERNAME/VocabGenie.git
git remote add upstream https://github.com/ghpranav/VocabGenie.git


# Using SSH
git remote add fork git@github.com:YOUR-USERNAME/VocabGenie.git
git remote add upstream git@github.com/ghpranav/VocabGenie.git
```

You can now verify that you have your two git remotes:

```sh
git remote -v
```

## Receive remote updates

In view of staying up to date with the central repository:

```sh
git pull upstream master
```

## Choose a base branch

Choose `main` as the base branch for your changes.

```sh
# Switch to the desired branch
git switch main

# Pull down any upstream changes
git pull

# Create a new branch to work on
git switch --create type/1234-name-issue
```

Commit your changes, then push the branch to your fork with `git push -u fork` and open a pull request on [the VocabGenie repository](https://github.com/ghpranav/VocabGenie) following the template provided.

## Branch naming convention

The branch name should be in the format `type/issue-number-short-description`. For example, `bug/1234-fix-typo`.

| Type of change          |                    | Branches                     |
| ----------------------- | ------------------ | ---------------------------- |
| Bug fixes               | :bug:              | bug/1234-fix-typo            |
| New features            | :sparkles:         | feature/1234-new-feature     |
| Documentation           | :memo:             | docs/1234-update-readme      |
| Refactoring             | :recycle:          | refactor/1234-clean-up       |
| Performance improvement | :zap:              | perf/1234-improve-speed      |
| Breaking changes        | :boom:             | breaking/1234-remove-feature |
| Tests                   | :white_check_mark: | test/1234-add-unit-tests     |
| Continuous Integration  | :green_heart:      | ci/1234-add-github-actions   |
| Other                   | :package:          | misc/1234-anything-else      |
