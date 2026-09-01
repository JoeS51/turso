# Mission: Contribute to Turso's PostgreSQL frontend

## Why
Build enough code-level understanding to make correct, tested contributions to Turso's PostgreSQL frontend rather than treating it as a black box.

## Success looks like
- Trace a PostgreSQL client request from the wire through parsing, translation, core execution, and response encoding
- Identify which crate and test harness owns a compatibility bug
- Implement and validate a focused frontend change without breaking PostgreSQL semantics

## Constraints
- The learner knows PostgreSQL concepts but is new to Turso internals
- Lessons should be short, practical, and tied to the current repository
- Claims should come from repository evidence or primary PostgreSQL documentation

## Out of scope
- A full tour of Turso's storage engine before it is needed by a frontend task
- PostgreSQL server internals that Turso does not emulate at the frontend boundary
