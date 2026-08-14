import type { ReactNode } from "react";

export const convertToRichText = (s: string): ReactNode => {
    const chunks = s.split("**") // splits "used **Unreal** to" into "used ", "Unreal", " to"

    return chunks.map(
        // Odd chunks are the ones that were surrounded by **
        (chunk, i) => (i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk)
    )
}
