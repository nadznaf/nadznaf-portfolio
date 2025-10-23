"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Avoid hydration mismatch: render a disabled placeholder until mounted
    return (
      <Button variant="outline" aria-label="Toggle theme" title="Toggle theme" disabled>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          aria-hidden
        >
          <circle cx="12" cy="12" r="5" className="fill-current text-muted" />
        </svg>
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? (
        // Sun icon (light mode)
        <Sun className="size-4" aria-hidden />
      ) : (
        // Moon icon (dark mode)
        <Moon className="size-4" aria-hidden />
      )}
    </Button>
  )
}