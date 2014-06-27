# Life

Clojure Version of APL Life.

This is a reimplementation of the REPL driven APL implementation
shown on https://www.youtube.com/watch?v=a9xAKttWgP4

After watching it I figured that it shouldn't be too hard to do
in Clojure, plus it was a good opportunity to familiarize myself
with `core.matrix`.

The session is documented in `life.demo`. This duplicates the APL
steps as closely as possible, alongside a transcript of the
original dialog. Where Clojure differs, due to the lack of a
built-in function, or where another approach works better, then
the comments describe the changes. Any missing functionality has
been provided in `life.matrix`.

The file is runnable, but as it prints the intermediate matrices
as part of the tutorial, it is really designed for interaction with
a REPL. The final implementation is duplicated in `life.core`,
where it can be called with `lein run`..

`life.matrix` includes several matric functions to help implement
the APL approach, such as an operation for converting boolean
true/false to 1/0. There are also other APL-style boolean operations
that work on 1/0 and can be applied to matrices. Finally, there are
a couple of non-matrix operations, such as the `power` operator for
functions and `power-limit` for finding a fixpoint.

`life.display` does simple printing of a 2D matrix, similarly to
the `disp` function in the APL video. `life.pic` contains simple
Swing code that creates a window for displaying a world matrix.
The Swing code uses a simple global value for displaying the
matrix as this allowed me to keep it simple and avoid compiling
any classes.

## License

Copyright © 2014 Paul Gearon

Distributed under the APL 2.0
