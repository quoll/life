(defproject life "0.1.0-SNAPSHOT"
  :description "Game of Life port from APL"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [net.mikera/core.matrix "0.62.0"]
                 [cljsjs/react "16.3.2-0"]
                 [cljsjs/react-dom "16.3.2-0"]
                 [thinktopic/aljabr "0.1.1"]
                 [sablono "0.8.3"]]
  :plugins [[lein-cljsbuild "1.1.7"] [lein-figwheel "0.5.16"]]
  :clean-targets ^{:protect false} [:target-path "out" "resources/public/cljs"]
  :cljsbuild {:builds [{:id "figwheel"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main "life.web"
                                   :asset-path "cljs/out"
                                   :output-to "resources/public/cljs/main.js"
                                   :output-dir "resources/public/cljs/out"}
                        }
                       {:id "dev"
                        :source-paths ["src"]
                        :compiler {:main "life.web"
                                   :optimizations :whitespace
                                   :language-in :ecmascript5-strict
                                   :language-out :ecmascript5-strict
                                   :asset-path "cljs/out"
                                   :output-to "resources/public/cljs/dev.js"
                                   :output-dir "out"}
                        }]
              }
  :figwheel {;; :server-port 3450
             :css-dirs ["resources/public/css"]}
  :main life.core)
