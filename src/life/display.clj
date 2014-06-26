(ns life.display
  (:use [clojure.core.matrix]))

(defn strof [c l] (apply str (take l (repeatedly (constantly c)))))

(defn disp-3d
  ([a] (disp-3d a true))
  ([a print-first]
   (let [[grids h w] (shape a)
         single (str (strof \- (inc (* 2 w))) "+")
         side (apply str "+" (repeat grids single))]
     (when print-first (println side))
     (doseq [rn (range h)]
       (print "|")
       (doseq [g (slices a)]
         (doseq [c (slice g rn)]
           (print (str " " c)))
         (print " |"))
       (println))
     (println side))))

(defn disp-4d [a]
  (let [[f & r] (slices a)]
    (disp-3d f)
    (doseq [s r]
      (disp-3d s false))))

(defn disp [a]
  (let [d (dimensionality a)]
    (case d
      (0 1) (println a)
      2 (disp-3d [a])
      3 (disp-3d a)
      4 (disp-4d a))))

