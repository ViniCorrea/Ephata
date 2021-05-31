interface ContextError {
  message: string;
  status: number | { code: number; description?: string };
}

export default class AppError extends Error {
  public readonly message: string;
  public readonly stack: string;
  public readonly status: {
    code: number;
    description?: string;
  };

  constructor(context: ContextError) {
    const { message, status } = {
      status: {
        code: 400,
        description: 'Parece que algo não funcionou como o esperado!',
      },
      ...context,
    };
    super(message);
    this.message = message;
    this.status = typeof status === 'number' ? { code: status } : status;
  }
}
