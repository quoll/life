(ns life.core
  (:use [clojure.core.matrix]
        [life.matrix]
        [life.display]
        [life.pic])
  (:require [clojure.core.matrix.operators :as m]))

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

(defn draw-life [o]
  (let [r (life o)]
    (if (draw (pic r))
      (Thread/sleep 125)
      (System/exit 0))
    r))

(defn -main [& args]
  (open-window)
  (power-limit draw-life RR))

