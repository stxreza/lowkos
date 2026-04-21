"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"



import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"

export interface ProductDropItem {
  category: string
  name: string
  summary: string
  sizes: string
  imageSrc: string
  href: string
  accentClassName?: string
}

export interface ProductDropCardProps {
  title: string
  subtitle: string
  items: ProductDropItem[]
  autoPlayMs?: number
}

const CATEGORY_COLORS: Record<string, string> = {
  "Engine Treatment": "#D73535",
  "Additive": "#D98324",
  "Tire Treatment": "#102E50",
}

export function ProductItemCard({ item }: { item: ProductDropItem }) {
  const badgeColor = CATEGORY_COLORS[item.category] ?? "#D73535"

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900 to-[#0a0a0a] text-white border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] cursor-pointer">
      
      {/* Product Image - Top, Aspect 1:1 */}
      <div className="relative aspect-square w-full bg-[#111] border-b border-white/5 overflow-hidden flex items-center justify-center p-4">
        
        {/* Subtle grid background for racing tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Category Badge overlaying in top-left */}
        <span
          className="absolute left-3 top-3 z-20 px-3 py-1 text-[0.6rem] font-black italic uppercase tracking-[0.1em] text-white rounded-sm skew-x-[-15deg] border border-white/10 shadow-lg"
          style={{ backgroundColor: badgeColor }}
        >
          <span className="skew-x-[15deg] block">{item.category}</span>
        </span>

        {/* Dynamic Abstract Shapes (Racing Stripes) */}
        <div className="absolute -bottom-4 -right-2 h-20 w-8 -skew-x-[25deg] opacity-20 transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: badgeColor }} />
        <div className="absolute -bottom-4 right-8 h-20 w-2 -skew-x-[25deg] opacity-20 transition-transform duration-500 group-hover:scale-110" style={{ backgroundColor: badgeColor }} />

        {/* Product Image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageSrc}
          alt={`${item.name} Lowkos Auto Clinic`}
          className="relative z-10 w-[85%] h-[85%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay with Button (Hover on Desktop, Click on Mobile) */}
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100 group-active:opacity-100">
          <Link
            href={item.href}
            className="skew-x-[-10deg] rounded-none bg-racing-red hover:bg-red-700 px-6 py-3 text-sm font-black italic uppercase tracking-wider text-white border-b-4 border-red-900 transition-transform hover:scale-105 shadow-xl"
          >
            <span className="skew-x-[10deg] block">Lihat Selengkapnya</span>
          </Link>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col p-4 md:p-5 relative">
        {/* Subtle accent line on top */}
        <div className="absolute top-0 left-0 h-[2px] w-1/3" style={{ backgroundColor: badgeColor }} />
        
        <h3 className="line-clamp-2 text-[1.2rem] font-black italic uppercase leading-[1.1] tracking-tight text-white md:text-[1.3rem]">
          {item.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-[0.85rem] leading-relaxed text-zinc-400 font-medium">
          {item.summary}
        </p>
      </div>
    </article>
  )
}


export function ProductDropCard({
  title,
  subtitle,
  items,
  autoPlayMs = 3800,
}: ProductDropCardProps) {
  const scrollerRef = React.useRef<HTMLDivElement>(null)
  const [canGoPrev, setCanGoPrev] = React.useState(false)
  const [canGoNext, setCanGoNext] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false)

  const updateControls = React.useCallback(() => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth

    setCanGoPrev(scroller.scrollLeft > 4)
    setCanGoNext(scroller.scrollLeft < maxScrollLeft - 4)
  }, [])

  const getStepWidth = React.useCallback(() => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return 0
    }

    const firstCard = scroller.querySelector<HTMLElement>("[data-product-card='true']")

    if (!firstCard) {
      return 0
    }

    const styles = window.getComputedStyle(scroller)
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0")

    return firstCard.offsetWidth + gap
  }, [])

  const scrollByStep = React.useCallback(
    (direction: "prev" | "next") => {
      const scroller = scrollerRef.current
      const stepWidth = getStepWidth()

      if (!scroller || stepWidth <= 0) {
        return
      }

      scroller.scrollBy({
        left: direction === "next" ? stepWidth : -stepWidth,
        behavior: "smooth",
      })
    },
    [getStepWidth]
  )

  const scrollToStart = React.useCallback(() => {
    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    scroller.scrollTo({ left: 0, behavior: "smooth" })
  }, [])

  React.useEffect(() => {
    updateControls()

    const scroller = scrollerRef.current

    if (!scroller) {
      return
    }

    const handleScroll = () => updateControls()
    const handleResize = () => updateControls()

    scroller.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      scroller.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [updateControls])

  React.useEffect(() => {
    if (isPaused) {
      return
    }

    const scroller = scrollerRef.current
    if (!scroller || scroller.scrollWidth <= scroller.clientWidth) {
      return
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)")

    if (!mediaQuery.matches) {
      return
    }

    const timer = window.setInterval(() => {
      const scroller = scrollerRef.current

      if (!scroller) {
        return
      }

      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth

      if (scroller.scrollLeft >= maxScrollLeft - 4) {
        scrollToStart()
        return
      }

      scrollByStep("next")
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, isPaused, items.length, scrollByStep, scrollToStart])

  return (
    <Card className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,18,0.98)_0%,rgba(10,10,10,0.98)_100%)] py-0 text-white shadow-[0_26px_80px_rgba(0,0,0,0.35)]">
      <CardHeader className="border-b border-white/10 px-5 pb-5 pt-6 md:px-8 md:pb-6 md:pt-7">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[3px] w-10 bg-racing-yellow" />
              <span className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-white/55">
                Racing Formula
              </span>
            </div>

            <CardTitle className="text-[2rem] italic font-black uppercase leading-none tracking-[-0.05em] text-white md:text-[2.8rem]">
              {title}
            </CardTitle>
            <CardDescription className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-[0.98rem]">
              {subtitle}
            </CardDescription>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            <Button
              variant="outline"
              size="icon"
              className="border-white/12 bg-white/5 text-white hover:bg-white/10"
              onClick={() => scrollByStep("prev")}
              disabled={!canGoPrev}
              aria-label="Produk sebelumnya"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-white/12 bg-white/5 text-white hover:bg-white/10"
              onClick={() => scrollByStep("next")}
              disabled={!canGoNext}
              aria-label="Produk berikutnya"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative px-0 py-0">
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-r from-black/70 to-transparent md:block" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-16 bg-gradient-to-l from-black/70 to-transparent md:block" />

        <div
          className="px-5 py-5 md:px-8 md:py-7"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {items.map((item) => (
              <div key={item.name} data-product-card="true" className="w-[72vw] max-w-[14rem] shrink-0 snap-start md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)]">
                <ProductItemCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
