# Change history for ui-developer

## [1.4.0] (IN PROGRESS)

* Use PropTypes, not React.PropTypes. Refs STRIPES-427.
* Use more-current stripes-components. Refs STRIPES-495.

## [1.3.0](https://github.com/folio-org/ui-developer/tree/v1.3.0) (2017-09-01)
[Full Changelog](https://github.com/folio-org/ui-developer/compare/v1.2.0...v1.3.0)

* Add okapiInterfaces and permissionSets to package.json. Fixes UID-1.
* New developer settings page for setting the authentication token. Fixes UID-2.
* Use new-style specification of action-names. Fixes UID-3
* Add new permission, `settings.developer.enabled`. Fixes UID-8.
* Upgrade dependencies to stripes-components 1.7.0, stripes-connect 2.7.0 and stripes-core 2.7.0.

## [1.2.0](https://github.com/folio-org/ui-developer/tree/v1.2.0) (2017-06-19)
[Full Changelog](https://github.com/folio-org/ui-developer/compare/v1.1.0...v1.2.0)

* Hot-keys test page now uses the key bindings provided by stripes-core rather than a hardwired set of bindings. Fixes STRIPES-424.
* Hot-keys module specifies `actionNames` for stripes-core's aggregation. Relates to STRPCORE-2.

## [1.1.0](https://github.com/folio-org/ui-developer/tree/v1.1.0) (2017-06-11)
[Full Changelog](https://github.com/folio-org/ui-developer/compare/v1.0.0...v1.1.0)

* Add new "HotKeys Test" settings area.
* Rip old HotKeys testing code out of Configuration area.
* Add new "Plugin Test" settings area.

## [1.0.0](https://github.com/folio-org/ui-developer/tree/v1.0.0) (2017-06-08)
[Full Changelog](https://github.com/folio-org/ui-developer/compare/v0.1.0...v1.0.0)

* Configuration area allows autoLogin username/password to be set. Fixes STRIPES-396.
* Support run-time toggling of the `showPerms`, `listInvisiblePerms`, and `hasAllPerms` settings. Fixes STRIPES-404.
* Add proof-of-concept use of hotkeys: command+up to go to Home page, command+down to go to About page. Towards STRIPES-13.
* Upgrade dependencies: stripes-components v0.12.0, stripes-core v1.9.0 and stripes-connect v2.2.0.

## [0.1.0](https://github.com/folio-org/ui-developer/tree/v0.1.0) (2017-05-22)

* The first formal release.

