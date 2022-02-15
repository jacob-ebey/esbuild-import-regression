# Esbuild regression of module marked external

When importing the `uuid` package, this should be marked with `__toModule`, instead it's marked with `__reExport`.

This is a regression and breaks codebases that previously worked.
