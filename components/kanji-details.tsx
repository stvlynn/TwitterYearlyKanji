interface KanjiDetailsProps {
  explanation: string;
  reason: string;
}

export function KanjiDetails({ explanation, reason }: KanjiDetailsProps) {
  const explanationLines = explanation.split('\n').filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Meaning */}
      <div className="bg-muted rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Meaning</h2>
        <ul className="space-y-2">
          {explanationLines.map((line, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 font-medium">{index + 1}.</span>
              <span>{line.replace(`${index + 1}. `, '')}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Analysis */}
      <div className="bg-muted rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Analysis</h2>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {reason}
        </p>
      </div>
    </div>
  );
}