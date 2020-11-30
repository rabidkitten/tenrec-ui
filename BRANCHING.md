# Branching

## General Naming Guidelines

The general naming guideline uses the following convention, which is further
described in the sections that follow:

`Prefix/Issue Number-Short-Summary`

For example:

`feature/123-add-zoom-image-component`

### Prefixes

All branch names begin with one of the following prefixes, which depend on the
type of work being performed:

| Type | Prefix | Description |
|---|---|---|
| Feature | feature | Use when developing a new feature or enhancement. |
| Bug | bug | Used when fixing a bug, outside of a feature or enhancement. |

The prefix should be lowercase.

### Issue Number

The issue number is the number in GIT that identifies the issue being worked on.

### Short Summary

The Issue Number and Short Summary should be separated by a hyphen. The Short
Summary is a few words in all lowercase that describe the work. For example,
`add-zoom-image-component` could be used to describe the addition of the
ZoomImage component to the project.

## Feature Branches

Feature branches are used when developing a new feature or enhancements. When
starting development, the deployment in which this feature will be released may
not be known. No matter when the feature branch will be finished, it will always
be merged back into the master branch.

During the lifespan of the feature development, you should watch the master
branch (network tool or branch tool in GitHub) to see if there have been commits
since the feature was branched. Any and all changes to master should be merged
into the feature branch (refreshing the branch) before merging back to master;
this can be done at various times during the project or at the end, but time to
handle merge conflicts should be accounted for.

## Bug Branches

Bug branches are used when fixing a reproducible problem in an existing feature
or enhancement. Bugs are not new features and their scope should not extend
beyond the next deployment. For that reason, a bug branch typically will not
last longer than one deployment cycle. Additionally, bug branches are used to
explicitly track the difference between bug development and feature development.
No matter when the bug branch will be finished, it will always be merged back
into master.

Although likelihood will be less, during the lifespan of the bug development,
you should watch the master branch (network tool or branch tool in GitHub)
to see if there have been commits since the bug was branched. Any and all
changes to master should be merged into the bug before merging back to master;
this can be done at various times during the project or at the end, but time to
handle merge conflicts should be accounted for.
