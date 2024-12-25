export interface DifyResponse {
  event: string;
  workflow_run_id: string;
  task_id: string;
  data: {
    id: string;
    workflow_id: string;
    sequence_number: number;
    status: string;
    outputs: {
      reason: string;
      kanji: string;
      katakana: string;
      romaji: string;
      explaination: string;
    };
    error: string | null;
    elapsed_time: number;
    total_tokens: number;
    total_steps: number;
    created_by: {
      id: string;
      user: string;
    };
    created_at: number;
    finished_at: number;
    files: any[];
  };
}

export interface APIError {
  message: string;
  status?: number;
}