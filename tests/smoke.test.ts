import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const metaPath = fileURLToPath(new URL('../metadata.json', import.meta.url))

describe('metadata.json', () => {
  it('JSON 으로 읽히고 필수 키가 있다', () => {
    const meta = JSON.parse(readFileSync(metaPath, 'utf8'))
    expect(typeof meta.name).toBe('string')
    expect(typeof meta.description).toBe('string')
    expect(Array.isArray(meta.requestFramePermissions)).toBe(true)
  })
})
