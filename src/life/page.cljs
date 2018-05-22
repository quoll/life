(ns life.page
  (:require [sablono.core :as sab]
            [clojure.core.matrix :refer [shape mget mset]]
            [life.core :refer [life]]))

(def sq "size of a square" 25)
(def life-color "blue")

(defn next-life
  [app-state]
  (fn []
    (let [{:keys [data gen timer]} @app-state
          next-gen (life data)]
      (if (= data next-gen)
        (do
          (swap! app-state assoc :finished true)
          (js/clearInterval timer))
        (swap! app-state assoc :data next-gen :gen (inc gen))))))

(defn flip-cell
  [app-state x y v]
  (swap! app-state update :data #(mset % y x (- 1 v)))
  (when (:finished @app-state)
    (swap! app-state assoc
           :finished false
           :timer (js/setInterval (next-life app-state) 125))))

(defn field
  [app-state]
  (let [data (:data @app-state)
        [height width] (shape data)
        pixel-width (* sq width)
        pixel-height (* sq height)]
    [:svg {:width (+ 2 pixel-width) :height (+ 2 pixel-height)}
     [:rect {:x 0 :y 0 :width (inc pixel-width) :height (inc pixel-height)
             :style {:stroke "black"
                     :stroke-width 1
                     :fill "white"}}]
     (vec
      (concat
       [:svg {:width pixel-width :height pixel-height :x 1 :y 1}]
       (for [x (range width) y (range height) :let [v (mget data y x)]]
         [:rect {:x (* x sq) :y (* y sq) :width sq :height sq
                 :style {:fill (if (zero? v) "white" "blue")
                         :stroke "white"
                         :stroke-width 1}
                 :onClick #(flip-cell app-state x y v)}])))]))

(defn display-data
  [app-state]
  (let [{:keys [gen]} @app-state]
    (sab/html [:div
               (field app-state)
               [:br]
               [:p "Generation: " gen]])))
