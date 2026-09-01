# Reconstructed the PostgreSQL frontend request pipeline

The learner can now describe the main request path: pgwire decodes a client request, the frontend prepares PostgreSQL SQL, `pg_query` produces a PostgreSQL AST, the translator produces a Turso AST, core compiles and executes VDBE, and the server maps results back into pgwire response objects. Future lessons can build from this pipeline, while reinforcing that `cli/main.rs` only launches server mode and pgwire, rather than the CLI directly calling `do_query`.

## Evidence

The learner reconstructed the full path in their own words and asked for code landmarks to make the ownership boundaries precise.
