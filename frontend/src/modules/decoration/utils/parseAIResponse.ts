export function parseAIResponse<T>(
  data: string
): T {

  return JSON.parse(data);
}