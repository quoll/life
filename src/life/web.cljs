(ns life.web
  (:require [react-dom]
            ; [thinktopic.aljabr.core]
            [life.page :refer [display-data next-life]]
            [life.core :refer [RR]]))

; (set-current-implementation :aljabr)

(defonce app-state (atom {:data RR :gen 0}))

(defn render! [state]
  (.render js/ReactDOM
           (display-data state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render! app-state)))

(render! app-state)

(swap! app-state assoc :timer (js/setInterval (next-life app-state) 125))
