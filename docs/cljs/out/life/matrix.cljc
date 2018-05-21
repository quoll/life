(ns life.matrix
  "Implements functionality to duplicate APL operations used in Life"
  (:require [clojure.core.matrix :refer [shape compute-matrix mget
                                         emap add array]]))

(defn nbool
  "Create a function from a boolean function, mapping a truthy value to 1 or 0.
   e.g. ((nbool not) false) => 1
        ((nbool not) true) => 0"
  [f] (fn [v] (if (f v) 1 0)))

(defn takeof
  "Creates a matrix of a given shape that contains a given matrix 'a'.
   If the new matrix is smaller than the source matrix, then the source
   matrix is truncated.
   If the new matrix is larger than the source matrix in any dimension,
   then it is padded out using the 'default' value, or 0 if not provided."
  ([sh a] (takeof sh a 0))
  ([sh a default]
   (let [src-shape (shape a)]
     (compute-matrix sh
                     (fn [& idx]
                       (if (every? identity (map < idx src-shape))
                         (apply mget a idx)
                         default))))))

(defn and*
  "Performs an element-wise boolean AND operation on matrices
   using numerical boolean values (0/1)"
  [a b] (emap (nbool #(= 2 %)) (add a b)))

(defn or*
  "Performs an element-wise boolean OR operation on matrices
   using numerical boolean values (0/1)"
  [a b] (emap (nbool #(not (zero? %))) (add a b)))

(defn outer
  "Creates an outer product of 2 sequences. The elements of the product
   are stored in a record with keys :a :b. Ideally these would be a
   2-element vector, but matrix operations treat such vectors as a new
   dimension."
  [a b]
  (array
    (for [x a]
      (for [y b]
        {:a x :b y}))))

(defn outer-fn
  "Creates a function based on applying f bound to a single argument,
   across remaining arguments that are the outer product of x and y."
  [f x y]
  (fn [m]
    (emap (fn [{:keys [a b]}] (f (f m 0 a) 1 b))
          (outer x y))))

(defn =x
  "Creates a function from a matrix, that when a applied to a scalar will
   return a boolean matrix where every matrix element that matches the
   scalar will be true (1) in the result.
   e.g. ((=x [1 2 3]) 2) => [0 1 0]
        ((=x [1 2 3]) 3) => [0 0 1]"
  [a]
  (fn [x] (emap (nbool #(= x %)) a)))

(defn power [f n]
  "Returns a function that applies f n times.
   e.g. ((power inc 3) 2) => 5"
  #(nth (iterate f %) n))

(defn power-limit
  "Finds the fixpoint of a function starting at a given argument.
   The function is repeatedly applied to the result of the previous application
   until the result from the function is the same as the argument that led to it.
   e.g. (power-limit #(min (inc %) 10) 1) => 10"
  [f a]
  (let [s (iterate f a)]
    (ffirst
      (drop-while (fn [[x y]] (not= x y))
                  (map vector s (rest s))))))

