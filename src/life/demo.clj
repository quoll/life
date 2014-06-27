(ns life.demo
  "This is a reproduction (with modifications) in Clojure of the video,
  \"Conway's Game of Life in APL\" found at
  https://www.youtube.com/watch?v=a9xAKttWgP4"
  (:use [clojure.core.matrix]
        [life.matrix]
        [life.display]
        [life.pic])
  (:require [clojure.core.matrix.operators :as m]))

;; Here is a sequence of the first 9 natural numbers
(range 9)

;; A 3x3 reshape gives us a 3 row, 3 column matrix
(reshape (array (range 9)) [3 3])

;; Which of the items of this matrix are members of the "init" set:
;; 1 for yes, 0 for no.
(def init #{1 2 3 4 7})
(emap (nbool init) (reshape (array (range 9)) [3 3]))

;; We'll call this boolean matrix "r"
(def r (emap (nbool init) (reshape (array (range 9)) [3 3])))

;; We can embed r is a slightly larger matrix: a 5x7 "take" of r
;; which pads below and on the right with zeros. Take is implemented
;; in life.matrix.
(takeof [5 7] r)

;; We can center our original within this by doing the -2 rotation about
;; a vertical axis (the second dimension [1] of the matrix)
(rotate (takeof [5 7] r) 1 -2)

;; and a -1 rotation about a horizontal axis
;; (the first dimension [0] of the matrix)
(rotate (rotate (takeof [5 7] r) 1 -2) 0 -1)

;; We'll call this larger matrix "R"
(def R (rotate (rotate (takeof [5 7] r) 1 -2) 0 -1))

;; Here is a vector of 3 matrices
[R R R]

;; We can see this more clearly if we use a library function which draws
;; boxes around sub-arrays
(disp [R R R])

;; mapping rotate onto [1 0 -1] and the matrices distributes the rotation
;; onto corresponding items in the first and second argument vectors.
;; So we see our original "0 rotation" in the center, and a 1 and -1 rotation
;; on either side
(disp (map #(rotate %2 1 %1) [1 0 -1] [R R R]))

;; We can simplify this slightly by having just one copy of R, which is
;; repeated to match the length of the first vector, as map only operates
;; until one of its vector arguments has been exhausted.
;; So we get the same result
(disp (map #(rotate %2 1 %1) [1 0 -1] (repeat R)))

;; Next we'll do the [1 0 -1] outer-product with column rotation.
;; This creates a function that applies the provided "rotate" function to
;; each element of the second vector argument on the first dimension of the
;; matrix argument, composed with the same function applied with each element
;; of the first vector argument on the second dimension of the matrix argument.
;; outer-fn is implemented in life.matrix.
;; So we get a matrix, in this case a 3x3 matrix, with our original in the center
;; surrounded by all possible 1 rotations
(disp ((outer-fn rotate [1 0 -1] [1 0 -1]) R))

;; Since the outer-product function is not standard in Clojure, a similar effect
;; can be made by performing the vertical rotations first, using the mapping
;; technique above, followed by the horizontal rotations. These are done by mapping
;; the horizontal rotation operation across each element of the vertical-rotated
;; matrix vector
(disp (map (fn [d] (map #(rotate %2 1 %1) [1 0 -1] (repeat d)))
           (map #(rotate %2 0 %1) [1 0 -1] (repeat R))))

;; Matrices return rows preferentially over columns using the "slices" function.
;; We can select columns by selecting slices in the second dimension instead of
;; the default first dimension. Visually, this will transpose the grid.
(disp (slices ((outer-fn rotate [1 0 -1] [1 0 -1]) R) 1))

;; If we do a column sum of the 3x3 matrix we get a 3 vector
(disp (map (partial apply add) (slices ((outer-fn rotate [1 0 -1] [1 0 -1]) R) 1)))

;; And if we sum the vector we see a "neighbor count" for each cell in our original
;; matrix R
(disp (apply add (map (partial apply add) (slices ((outer-fn rotate [1 0 -1] [1 0 -1]) R)))))

;; Stepping back to the outer-product for the moment, Clojure handles outer
;; products more naturally by creating a single dimensional sequence of each
;; combination. Since all the elements of the previous grid are to be added
;; then the commutativity and associativity of addition means that addition may
;; be performed as a single step on a sequence, rather than as a pair of steps
;; on a 2D matrix.

;; The sequence containing the full outer-product of rotations can be performed
;; using the "for" operation
(disp (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))

;; And the final "neighbor count" matrix is done by applying the add operation
;; over the sequence. This is an identical result to the previous "neighbor count"
;; matrix. Since it is shorter and more idiomatic to Clojure, we will use this
;; expression. Recall that this is a neighbor count for each cell in our original
;; matrix R
(disp (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y))))

;; The rules of Conway's Game of Life are that you have a 1 in the following
;; generation if the neighbor count including itself is 3, or if the neighbor
;; count including itself is a 4 and the original cell was occupied.

;; So first, find the 3s and 4s.
;; The =x function creates a function on a matrix that will return a boolean matrix
;; where cells are 1 when equal to the given scalar, and 0 otherwise. This is
;; implemented in life.matrix.
;; When the =x function is built on the neighbor-count matrix, it can then be
;; mapped to the values 3 and 4
(disp (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))

;; And we're interested in any 3, and a 4 corresponding to an occupied cell, which
;; is just our original matrix R. So we AND those masks to the 3s and 4s matrices
(disp (map and* [1 R] (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))

;; And both of these matrices contributes to the next generation. So if we OR them together
(disp (apply or* (map and* [1 R] (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))))

;; and disclose the result we see a simple matrix for the next generation of the
;; Game of Life
(apply or* (map and* [1 R] (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4])))

;; So here we have a single array expression for the next generation.
;; You'll notice that the size of the matrix R is not specified anywhere, so that
;; the expression is applicable to a matrix of any size.

;; Let's extract it as a function, by replacing all occurances of R with a formal
;; parameter o, and the function "life"
(defn life [o]
  (apply or*
         (map and*
              [1 o]
              (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate o 1 x) 0 y)))) [3 4]))))

;; Test it
(disp [R (life R) (life (life R))])

;; There are the first 3 generations

;; We can abstract this progression by making function "gen" for "generation" which
;; is "life" to the power of the right argument, applied to the left argument.
;; "power" is not built in to Clojure, so it has been implemented in life.matrix.
(defn gen [o g] ((power life g) o))

;; So R bound to gen applied to each of the first 4 numbers give us 4 generations
(disp (map (partial gen R) (range 4)))

;; Next, let's make a larger arena still, so RR is the 15x35 take of R, rotated by
;; 10,20
(def RR (rotate (rotate (takeof [15 35] R) 1 20) 0 10))

;; This is a 15x35 matrix of 0s and 1s with our original R in the center
;; It's easier to see this if it is plotted as an image. So we make a picture
;; with square corresponding to the 0s and 1s in RR
(def pic (image RR))

;; Open a display window for this, so that it can be seen and show the pic
(open-window)
(draw pic)

;; Finally, make an animation to show it working
;; All we have to do is apply the "life" function and the power limit to the
;; original population. The power limit finds a fixpoint of its operand
;; function "life", by applying it successively to generations until the result
;; and argument are identical. This is not a Clojure function, so it is
;; implemented in life.matrix.
;; We will wrap the life function in an outer function, where we won't change
;; anything, except it gives the opportunity to introduce a side effect of
;; updating the picture in the window with the image built from the argument
;; to the function that is applied by the fixpoint operation. Changes in this
;; image will be reflected in the display window, so we should see it working.
;; We want just 2 small refinements. First, we're not interested in the result
;; of the power-limit, so we can wrap in a do/nil to discard it. Second, to
;; have a chance of seeing it working we need to apply a small time delay,
;; so will will include 1/8 of a second, or 125ms.

(defn draw-life [o]
  (draw (image o))
  (Thread/sleep 125)
  (life o))

(do (power-limit draw-life RR) nil)

;; There we see it running. The way we've coded it with rotations, we've
;; produced Life on a torus, so the edges wrap.

;; So, there you are. Life... in Clojure.
