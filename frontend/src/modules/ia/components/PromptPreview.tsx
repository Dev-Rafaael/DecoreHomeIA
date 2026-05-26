type Props = {
  prompt: string;
}

export function PromptPreview({
  prompt
}: Props) {

  return (
    <div>
      <pre>{prompt}</pre>
    </div>
  );
}