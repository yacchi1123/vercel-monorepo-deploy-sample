export const getAPI = async <T>(
  url: string,
  params: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
): Promise<{
  statusCode: number
  data: T | null
  error: string | null
}> => {
  try {
    const response = await fetch(url, params)
    if (!response.ok) {
      return {
        statusCode: response.status,
        data: null,
        error: `HTTP error! status: ${response.status}`,
      }
    }
    const data: T = await response.json()
    return {
      statusCode: response.status,
      data,
      error: null,
    }
  } catch (error) {
    return {
      statusCode: 500,
      data: null,
      error: String(error),
    }
  }
}
