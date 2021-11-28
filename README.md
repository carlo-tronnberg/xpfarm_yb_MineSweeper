[![Run Tests](https://github.com/carlo-tronnberg/xpfarm_yb_MineSweeper/actions/workflows/main.yml/badge.svg)](https://github.com/carlo-tronnberg/xpfarm_yb_MineSweeper/actions/workflows/main.yml/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=bugs)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=carlo-tronnberg_xpfarm_yb_MineSweeper&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=carlo-tronnberg_xpfarm_yb_MineSweeper)
[![Open Issues](https://img.shields.io/github/issues/carlo-tronnberg/badge.svg)](https://github.com/carlo-tronnberg/xpfarm_yb_MineSweeper/issues)

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg)
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg)
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg)
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Metrics report](metrics.md) -
[Complexity report](complexity-report.md)

# xpfarm_yb_MineSweeper 
xpfarm_yb_MineSweeper

---

## Installation

To set up the project, you need node installed.

To install dependencies, run the following:

```sh
npm install
```

## Run the tests

To run the tests, there is a script in the project root called `test`. It calculates code coverage, incorporates
watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you
can achieve the same with the command the script contains:

```sh
npm test -- --watchAll --collect-coverage --verbose
```

## Stories with few scenarios

## UAT Scenario

UAT description (what the user would accept)
The given name will be converted to a greeting format

### User story #1 - <Short description>
```
As a ... [context, who is the user, whom this story provides value for ]
I want to ... [steps]
So that ... [motivation, value]
```

#### Scenario #1
```
  Given ...
  When ... (action you want to do)
  Then ...
```

#### Scenario #2
```
  Given ...
  When ... (action you want to do)
  Then ...
```

