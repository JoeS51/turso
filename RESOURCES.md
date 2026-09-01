# Turso PostgreSQL Frontend Resources

## Knowledge

- [PostgreSQL documentation: Frontend/Backend Protocol, Message Flow](https://www.postgresql.org/docs/current/protocol-flow.html)
  Primary specification for startup, simple-query, extended-query, error, and transaction message behavior. Use when judging protocol compatibility.
- [PostgreSQL documentation: Frontend/Backend Protocol, Message Formats](https://www.postgresql.org/docs/current/protocol-message-formats.html)
  Primary byte-level definition of messages such as `Query`, `RowDescription`, `DataRow`, `CommandComplete`, and `ReadyForQuery`.
- [`postgres/server/lib.rs`](postgres/server/lib.rs)
  Repository source for TCP acceptance, pgwire handlers, result metadata, value encoding, command tags, and wire-facing error conversion.
- [`postgres/frontend/session.rs`](postgres/frontend/session.rs)
  Repository source for PostgreSQL-aware connection state, special statements, parsing and translation orchestration, and Turso core preparation.
- [`postgres/parser/lib.rs`](postgres/parser/lib.rs)
  Small entrypoint around `pg_query` parsing and statement splitting.
- [`postgres/parser/translator.rs`](postgres/parser/translator.rs)
  Main PostgreSQL AST to Turso AST compatibility layer. Use when syntax parses but cannot yet execute through core.
- [`postgres/cli/tests/tursopg.rs`](postgres/cli/tests/tursopg.rs)
  Raw protocol integration coverage, including a minimal client that writes and reads PostgreSQL frames.
- [`postgres/conformance/pg-sqltests/`](postgres/conformance/pg-sqltests/)
  PostgreSQL wire conformance corpus. Use first for SQL behavior that real PostgreSQL also exhibits.
- [`pg_query` crate repository](https://github.com/pganalyze/pg_query.rs)
  Upstream parser binding used by Turso's PostgreSQL parser crate; it exposes PostgreSQL's parser as a protobuf AST.
- [`pgwire` crate documentation](https://docs.rs/pgwire/0.36.3/pgwire/)
  Documentation for the pinned server framework that owns wire framing and calls Turso's handlers.

## Wisdom (Communities)

- [Turso Discord](https://discord.gg/turso)
  Project community for checking design assumptions and learning current contributor priorities.
- [Turso GitHub issues and pull requests](https://github.com/tursodatabase/turso/issues)
  Real compatibility reports and reviewed implementation choices. Use to test whether a proposed contribution solves an actual user problem.
- [PostgreSQL Hackers mailing list](https://www.postgresql.org/list/pgsql-hackers/)
  Primary community for PostgreSQL implementation and protocol discussions. Use when the specification leaves behavior unclear.

## Gaps

- There is no single repository document describing the PostgreSQL frontend end to end; the course reference map fills this gap from source evidence.
