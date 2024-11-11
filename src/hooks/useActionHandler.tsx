// src/hooks/useActionHandler.ts
import { useToast } from "@/hooks/use-toast";

type ActionHandlerOptions = {
  action?: () => Promise<void>;
  successMessage: string;
  errorMessage?: string;
};

export const useActionHandler = () => {
  const { toast } = useToast();

  return (options: ActionHandlerOptions) => async () => {
    try {
      await options.action?.();
      toast({
        duration: 3000,
        variant: "default",
        title: "Success",
        description: options.successMessage,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: options.errorMessage || "Something went wrong",
      });
    }
  };
};
