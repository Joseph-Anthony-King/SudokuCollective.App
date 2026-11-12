import { afterEach, describe, expect, it, vi } from 'vitest'
import { AdminPort } from '../../src/ports/adminPort'

describe('AdminPort', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('fetches the hello-world endpoint and returns its JSON response', async () => {
    const data = { message: 'Hello, world!' }
    const json = vi.fn().mockResolvedValue(data)
    const fetch = vi.fn().mockResolvedValue({ json })
    vi.stubGlobal('fetch', fetch)

    await expect(AdminPort.getHelloWorldAsync()).resolves.toEqual(data)

    expect(fetch).toHaveBeenCalledOnce()
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/api\/helloworld$/))
    expect(json).toHaveBeenCalledOnce()
  })
})
