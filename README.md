# Life

Clojure Version of APL Life.

This is a reimplementation of the REPL driven APL implementation
shown on https://www.youtube.com/watch?v=a9xAKttWgP4

After watching it I figured that it shouldn't be too hard to do
in Clojure, plus it was a good opportunity to familiarize myself
with `core.matrix`.

The code is in `life.core`. It tries to duplicate the steps in the
video (not completely - for instance adding columns of matricies
is hard, as `core.matrix` only slices by row, for now).

The code prints where the demo prints, so it more for calling from
a REPL than running directly.

Where `core.matrix` does not implement the needed APL operations I
implemented them in `life.matrix`. This included an operation for
converting booleans to 1/0 along with boolean operations that work
on 1/0 and can be applied to matrices, as in APL. There were also
non-matrix operations, such as the power operator for functions
and power-limit for finding a fixpoint.

`life.display` does simple printing of a 2D matrix, similarly to
the `disp` function in the APL video. `life.pic` contains simple
Swing code that creates a window for displaying a world matrix.
The Swing code uses a simple global value for displaying the
matrix as this allowed me to keep it simple and avoid compiling
any classes.

## License

Copyright © 2014 Paul Gearon

Distributed under the APL 2.0
