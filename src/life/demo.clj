(ns life.demo
  (:use [clojure.core.matrix]
        [life.matrix]
        [life.display]
        [life.pic])
  (:require [clojure.core.matrix.operators :as m]))

(range 9)

(reshape (array (range 9)) [3 3])

(def init #{1 2 3 4 7})

(def r (emap (nbool init) (reshape (array (range 9)) [3 3])))

(takeof [5 7] r)

(def R (rotate (rotate (takeof [5 7] r) 1 -2) 0 -1))

(map #(rotate %2 1 %1) [1 0 -1] [R R R])
(map #(rotate %2 1 %1) [1 0 -1] (repeat R))

(map (fn [d] (map #(rotate %2 0 %1) [1 0 -1] (repeat d)))
     (map #(rotate %2 1 %1) [1 0 -1] (repeat R)))  ;; transposed from video

;; more direct would be:
;; (disp (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y))))
;; (disp (map (=x (apply add (for [y [1 0 -1] x [1 0 -1]] (rotate (rotate R 1 x) 0 y)))) [3 4]))

(def grid ((outer-fn rotate [1 0 -1] [1 0 -1]) R))

;; slices does rows, then columns, while APL explicitly selected columns, then rows
;; dimensional slice selection is still TODO in core.matrix
(disp (map (partial apply add) (slices grid)))
(disp (apply add (map (partial apply add) (slices grid))))

(disp (map (=x (apply add (map (partial apply add) (slices grid)))) [3 4]))

(disp (map and* [1 R] (map (=x (apply add (map (partial apply add) (slices grid)))) [3 4])))

(disp (apply or* (map and*
                      [1 R]
                      (map (=x (apply add (map (partial apply add)
                                               (slices ((outer-fn rotate [1 0 -1] [1 0 -1]) R)))))
                           [3 4]))))

;; so here is the life function
(defn life [o]
  (apply or*
         (map and*
              [1 o]
              (map (=x (apply add (map (partial apply add)
                                       (slices ((outer-fn rotate [1 0 -1] [1 0 -1]) o)))))
                   [3 4]))))

(defn gen [o g] ((power life g) o))

(disp (map (partial gen R) (range 4)))

(def RR (rotate (rotate (takeof [15 35] R) 1 20) 0 10))

(defn draw-life [o]
  (let [r (life o)]
    (draw (pic r))
    (Thread/sleep 125)
    r))

(open-window)
(power-limit draw-life RR)

