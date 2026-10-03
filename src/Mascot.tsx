import { useEffect, useRef, useState, type CSSProperties } from "react"

type Point = { x: number; y: number }
type Mode = "idle" | "walk" | "fly"
type Facing = "left" | "right"

const SIZE = 64
const MARGIN = 16
const NAV_CLEARANCE = 88
const MESSAGES = ["Ship it!", "Nice scroll.", "Let’s build.", "Beep boop.", "On it."]

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function bounds() {
  return {
    minX: MARGIN,
    maxX: Math.max(MARGIN, window.innerWidth - SIZE - MARGIN),
    minY: NAV_CLEARANCE,
    maxY: Math.max(NAV_CLEARANCE, window.innerHeight - SIZE - MARGIN),
  }
}

function walkBand() {
  const { minY, maxY } = bounds()
  const floor = minY + (maxY - minY) * 0.58
  return {
    minY: clamp(floor, minY, maxY),
    maxY,
  }
}

function flyBand() {
  const { minY, maxY } = bounds()
  const ceiling = minY + (maxY - minY) * 0.48
  return {
    minY,
    maxY: clamp(ceiling, minY, maxY),
  }
}

function nextWalkPoint(from: Point): Point {
  const { minX, maxX } = bounds()
  const band = walkBand()
  const direction = Math.random() > 0.5 ? 1 : -1
  const stride = randomBetween(140, 320)
  return {
    x: clamp(from.x + direction * stride, minX, maxX),
    y: clamp(from.y + randomBetween(-18, 28), band.minY, band.maxY),
  }
}

function nextFlyPoint(from: Point): Point {
  const { minX, maxX } = bounds()
  const band = flyBand()
  let point = from
  for (let i = 0; i < 8; i += 1) {
    const candidate = {
      x: randomBetween(minX, maxX),
      y: randomBetween(band.minY, band.maxY),
    }
    if (Math.hypot(candidate.x - from.x, candidate.y - from.y) > 140) {
      return candidate
    }
    point = candidate
  }
  return point
}

function travelMs(from: Point, to: Point, mode: Mode) {
  const distance = Math.hypot(to.x - from.x, to.y - from.y)
  if (mode === "fly") return clamp(distance * 3.1, 1100, 2600)
  return clamp(distance * 5.4, 1500, 3600)
}

function initialPoint(): Point {
  if (typeof window === "undefined") return { x: MARGIN, y: NAV_CLEARANCE }
  const { maxX, maxY } = bounds()
  if (prefersReducedMotion()) {
    return { x: maxX - 8, y: maxY - 8 }
  }
  const band = walkBand()
  return {
    x: Math.max(MARGIN, maxX - 48),
    y: clamp(window.innerHeight * 0.62, band.minY, band.maxY),
  }
}

export function Mascot() {
  const [pos, setPos] = useState<Point>(initialPoint)
  const [facing, setFacing] = useState<Facing>("left")
  const [mode, setMode] = useState<Mode>("idle")
  const [blinking, setBlinking] = useState(false)
  const [smiling, setSmiling] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [duration, setDuration] = useState(1800)

  const posRef = useRef(pos)
  const modeRef = useRef<Mode>("idle")
  const moveTimer = useRef<number | null>(null)
  const expressionTimer = useRef<number | null>(null)
  const blinkTimer = useRef<number | null>(null)
  const smileTimer = useRef<number | null>(null)
  const bubbleTimer = useRef<number | null>(null)
  const reducedRef = useRef(
    typeof window !== "undefined" ? prefersReducedMotion() : false,
  )

  useEffect(() => {
    posRef.current = pos
  }, [pos])

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  useEffect(() => {
    const clearMove = () => {
      if (moveTimer.current) window.clearTimeout(moveTimer.current)
      if (expressionTimer.current) window.clearTimeout(expressionTimer.current)
    }

    const clearAll = () => {
      clearMove()
      if (blinkTimer.current) window.clearTimeout(blinkTimer.current)
      if (smileTimer.current) window.clearTimeout(smileTimer.current)
      if (bubbleTimer.current) window.clearTimeout(bubbleTimer.current)
    }

    const park = () => {
      const { maxX, maxY } = bounds()
      const next = { x: maxX - 8, y: maxY - 8 }
      posRef.current = next
      setPos(next)
      setFacing("left")
      setMode("idle")
      modeRef.current = "idle"
    }

    const flashSmile = (ms = 900) => {
      setSmiling(true)
      if (smileTimer.current) window.clearTimeout(smileTimer.current)
      smileTimer.current = window.setTimeout(() => setSmiling(false), ms)
    }

    const blinkOnce = () => {
      setBlinking(true)
      window.setTimeout(() => setBlinking(false), 140)
    }

    const scheduleBlink = () => {
      if (reducedRef.current) return
      blinkTimer.current = window.setTimeout(() => {
        blinkOnce()
        if (Math.random() > 0.72) {
          window.setTimeout(blinkOnce, 180)
        }
        scheduleBlink()
      }, randomBetween(2200, 5200))
    }

    const goIdle = (thenMs: number) => {
      setMode("idle")
      modeRef.current = "idle"
      if (Math.random() > 0.45) flashSmile(randomBetween(700, 1400))
      moveTimer.current = window.setTimeout(runCycle, thenMs)
    }

    const runCycle = () => {
      if (reducedRef.current) return

      const from = posRef.current
      const preferFly = Math.random() > 0.55
      const nextMode: Mode = preferFly ? "fly" : "walk"
      const to = nextMode === "fly" ? nextFlyPoint(from) : nextWalkPoint(from)
      const ms = travelMs(from, to, nextMode)

      setFacing(to.x >= from.x ? "right" : "left")
      setDuration(ms)
      setMode(nextMode)
      modeRef.current = nextMode
      setPos(to)

      if (nextMode === "fly") flashSmile(650)

      expressionTimer.current = window.setTimeout(() => {
        goIdle(randomBetween(900, 2400))
      }, ms)
    }

    const onResize = () => {
      if (reducedRef.current) {
        park()
        return
      }
      const { minX, maxX, minY, maxY } = bounds()
      setPos((current) => ({
        x: clamp(current.x, minX, maxX),
        y: clamp(current.y, minY, maxY),
      }))
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onMotionChange = () => {
      reducedRef.current = motionQuery.matches
      clearAll()
      if (motionQuery.matches) {
        park()
        return
      }
      scheduleBlink()
      moveTimer.current = window.setTimeout(runCycle, 1200)
    }

    reducedRef.current = motionQuery.matches
    if (!motionQuery.matches) {
      scheduleBlink()
      moveTimer.current = window.setTimeout(runCycle, 1200)
    } else {
      park()
    }

    motionQuery.addEventListener("change", onMotionChange)
    window.addEventListener("resize", onResize)

    return () => {
      clearAll()
      motionQuery.removeEventListener("change", onMotionChange)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const onInteract = () => {
    setSmiling(true)
    if (smileTimer.current) window.clearTimeout(smileTimer.current)
    smileTimer.current = window.setTimeout(() => setSmiling(false), 1200)

    setBlinking(true)
    window.setTimeout(() => setBlinking(false), 120)

    const nextMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)] ?? "Beep!"
    setMessage(nextMessage)
    if (bubbleTimer.current) window.clearTimeout(bubbleTimer.current)
    bubbleTimer.current = window.setTimeout(() => setMessage(null), 1800)

    if (reducedRef.current) return

    const from = posRef.current
    const to = nextFlyPoint(from)
    const ms = travelMs(from, to, "fly")
    setFacing(to.x >= from.x ? "right" : "left")
    setDuration(ms)
    setMode("fly")
    modeRef.current = "fly"
    setPos(to)
  }

  return (
    <button
      type="button"
      className={`mascot mascot--${mode}${blinking ? " mascot--blink" : ""}${smiling ? " mascot--smile" : ""}`}
      style={
        {
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          "--mascot-travel": `${duration}ms`,
        } as CSSProperties
      }
      onClick={onInteract}
      aria-label="Friendly site mascot. Click to say hi."
    >
      {message ? <span className="mascot-bubble">{message}</span> : null}

      <svg
        className={`mascot-svg${facing === "left" ? " mascot-svg--left" : ""}`}
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <ellipse className="mascot-shadow" cx="32" cy="58" rx="14" ry="3.5" />

        <g className="mascot-wings">
          <path className="mascot-wing mascot-wing--left" d="M16 30c-8-2-12 4-10 9 4-1 8-3 10-7z" />
          <path className="mascot-wing mascot-wing--right" d="M48 30c8-2 12 4 10 9-4-1-8-3-10-7z" />
        </g>

        <g className="mascot-figure">
          <rect className="mascot-body" x="14" y="18" width="36" height="30" rx="12" />
          <rect className="mascot-face" x="18" y="24" width="28" height="16" rx="8" />

          <g className="mascot-eyes">
            <ellipse className="mascot-eye mascot-eye--left" cx="26" cy="32" rx="2.5" ry="2.5" />
            <ellipse className="mascot-eye mascot-eye--right" cx="38" cy="32" rx="2.5" ry="2.5" />
          </g>

          <path className="mascot-smile" d="M28 36.2c1.4 1.1 6.6 1.1 8 0" />
          <path className="mascot-smile mascot-smile--big" d="M26.5 35.6c2.2 2.4 8.8 2.4 11 0" />

          <circle className="mascot-antenna-tip" cx="32" cy="8" r="3.2" />
          <path className="mascot-antenna" d="M32 11v7" />

          <rect className="mascot-badge" x="27" y="42" width="10" height="4" rx="2" />
          <rect className="mascot-foot mascot-foot--left" x="20" y="46" width="8" height="6" rx="3" />
          <rect className="mascot-foot mascot-foot--right" x="36" y="46" width="8" height="6" rx="3" />
        </g>
      </svg>
    </button>
  )
}
