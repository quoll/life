(ns life.pic
  (:use [clojure.core.matrix])
  (:import [java.awt Graphics Color Dimension]
           [java.awt.image BufferedImage]
           [java.awt.event KeyListener KeyEvent]
           [javax.swing JPanel JFrame SwingUtilities]))

(def sq "size of a square in pixels" 25)
(def window-name "Life")
(def default-width 600)
(def default-height 400)

(def life-color Color/BLUE)

(def image (atom nil))
(def canvas (atom nil))

(defn ^Graphics render
  "Render an array onto an image"
  [^Graphics g a]
  (let [[h w] (shape a)
        pl #(.fillRect g (* sq %1) (* sq %2) sq sq)]
    (.setColor g Color/WHITE)
    (.fillRect g 0 0 (* sq w) (* 2 sq h))
    (doseq [x (range w) y (range h)]
      (if-not (zero? (mget a y x))
        (do
          (.setColor g Color/BLUE)
          (pl x y))))))

(defn pic
  "Convert an array to an image"
  [a]
  (let [[height width] (shape a)
        image (BufferedImage. (* sq width) (* sq height) BufferedImage/TYPE_INT_RGB)]
    (render (.createGraphics image) a)
    image))

(defn draw
  [^BufferedImage i]
  (when @canvas
    (swap! image (constantly i))
    (.repaint @canvas 0 0 0 (.getWidth @canvas) (.getHeight @canvas))))

(defn new-drawer []
  (proxy [JPanel] []
    (paint [^Graphics graphics-context]
      (let [^int width (proxy-super getWidth)
            ^int height (proxy-super getHeight)]
        (when @image
          (.drawImage graphics-context @image 0 0 width height nil))))))

(defn show-window []
  (let [^JPanel drawing-obj (new-drawer)
        _ (swap! canvas (constantly drawing-obj))
        ^JFrame frame (JFrame. window-name)
        closer (proxy [KeyListener] []
                 (keyPressed [^KeyEvent e] (when (= (.getKeyChar e) \q) (.dispose frame)))
                 (keyReleased [e])
                 (keyTyped [e]))]
    (.setPreferredSize drawing-obj (Dimension. default-width default-height))
    (.add (.getContentPane frame) drawing-obj)
    (doto frame
      (.pack)
      (.setBackground Color/WHITE)
      (.addKeyListener closer)
      (.setVisible true))))

(defn open-window []
  (SwingUtilities/invokeLater #(show-window)))
