(ns life.core
  (:require [clojure.core.matrix :refer [emap reshape array rotate add]]
            [life.matrix :refer [nbool takeof and* or* =x power-limit]]
            [clojure.core.matrix.operators :as m]
            #?(:clj [life.display :refer :all])
            #?(:clj [life.pic :refer :all])))

(def init #{1 2 3 4 7})

(def r (emap (nbool init) (reshape (array (range 9)) [3 3])))

(def R (rotate (rotate (takeof [5 7] r) 1 -2) 0 -1))

(def RR (rotate (rotate (takeof [15 35] R) 1 20) 0 10))

(defn life [o]
  (apply or*
         (map and*
              [1 o]
              (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate o 1 x) 0 y))))
                   [3 4]))))

#?(:clj
  (defn draw-life [o]
    (if (draw (image o))
      (Thread/sleep 125)
      (System/exit 0))
    (life o)))

#?(:clj
  (defn -main [& args]
    (open-window)
    (power-limit draw-life RR)
    (inform-exitable)))

