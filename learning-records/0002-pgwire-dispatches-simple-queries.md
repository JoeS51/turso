# Explained the pgwire-to-handler boundary

The learner can explain that an external `psql` query arrives as TCP bytes, `pgwire::process_socket` manages and decodes the PostgreSQL protocol, and pgwire invokes Turso's `do_query` callback with an ordinary Rust SQL string. Future lessons can assume this boundary is understood and focus on preparation and AST translation.

## Evidence

The learner reconstructed the handoff from memory and correctly distinguished it from the interactive shell path.
