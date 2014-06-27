(ns life.pic
  (:use [clojure.core.matrix])
  (:import [java.awt Graphics Color Dimension]
           [java.awt.image BufferedImage]
           [java.awt.event KeyListener KeyEvent WindowListener WindowEvent]
           [javax.swing JPanel JFrame SwingUtilities]))

(def sq "size of a square in pixels" 25)
(def window-name "Life")
(def default-width 700)
(def default-height 300)

(def life-color Color/BLUE)

(def current-image (atom nil))
(def canvas (atom :uninitialized))
(def may-exit (atom false))

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

(defn image
  "Convert an array to an image"
  [a]
  (let [[height width] (shape a)
        img (BufferedImage. (* sq width) (* sq height) BufferedImage/TYPE_INT_RGB)]
    (render (.createGraphics img) a)
    img))

(defn draw
  [^BufferedImage i]
  (when (not (nil? @canvas))
    (when (and (not= :uninitialized @canvas) (.isVisible @canvas))
      (swap! current-image (constantly i))
      (.repaint @canvas 0 0 0 (.getWidth @canvas) (.getHeight @canvas))))
  @canvas)

(defn new-drawer []
  (proxy [JPanel] []
    (paint [^Graphics graphics-context]
      (let [^int width (proxy-super getWidth)
            ^int height (proxy-super getHeight)]
        (when @current-image
          (.drawImage graphics-context @current-image 0 0 width height nil))))))

(defn set-closed []
  (swap! canvas (constantly nil))
  (when @may-exit (System/exit 0)))

(defn inform-exitable [] (swap! may-exit (constantly true)))

(defn show-window []
  (let [^JPanel drawing-obj (new-drawer)
        _ (swap! canvas (constantly drawing-obj))
        ^JFrame frame (JFrame. window-name)
        closer (proxy [KeyListener] []
                 (keyPressed [^KeyEvent e]
                   (when (= (.getKeyChar e) \q)
                     (.dispose frame)))
                 (keyReleased [e])
                 (keyTyped [e]))
        wnd-listen (proxy [WindowListener][]
                     (windowActivated [e])
                     (windowClosed [e] (set-closed))
                     (windowClosing [e] (set-closed))
                     (windowDeactivated [e])
                     (windowDeiconified [e])
                     (windowIconified [e])
                     (windowOpened [e]))]
    (.setPreferredSize drawing-obj (Dimension. default-width default-height))
    (.add (.getContentPane frame) drawing-obj)
    (doto frame
      (.pack)
      (.setBackground Color/WHITE)
      (.addKeyListener closer)
      (.addWindowListener wnd-listen)
      (.setVisible true))))

(defn open-window []
  (SwingUtilities/invokeLater #(show-window)))
