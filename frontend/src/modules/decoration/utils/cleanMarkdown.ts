export function cleanMarkdown(
  text: string
) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}