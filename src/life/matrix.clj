(ns life.matrix
  (:use [clojure.core.matrix]))

(defn nbool [f] (fn [v] (if (f v) 1 0)))

(defn takeof
  ([sh a] (takeof sh a 0))
  ([sh a default]
   (let [src-shape (shape a)]
     (compute-matrix sh
                     (fn [& idx]
                       (if (every? identity (map < idx src-shape))
                         (apply mget a idx)
                         default))))))

(defn and* [a b] (emap (nbool #(= 2 %)) (add a b)))

(defn or* [a b] (emap (nbool #(not (zero? %))) (add a b)))

(defn outer [a b]
  (array
    (for [x a]
      (for [y b]
        {:a x :b y}))))

(defn outer-fn [f x y]
  (fn [m]
    (emap (fn [{:keys [a b]}] (f (f m 0 a) 1 b))
          (outer x y))))

(defn =x [a]
  (fn [x] (emap (nbool #(= x %)) a)))

(defn power [f n]
  (case n
    0 identity
    1 f
    (fn [x]
      (loop [r x, i n]
        (if (zero? i)
          r
          (recur (f r) (dec i)))))))

(defn power-limit [f a]
  (loop [a a]
    (let [r (f a)]
      (if (= r a)
        r
        (recur r)))))

