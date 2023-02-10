import Alert, { AlertProps } from "@mui/material/Alert";

interface ErrorAlertProps extends AlertProps {
  message: string;
  setShowErrorAltert: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErrorAlert = ({
  message,
  setShowErrorAltert,
}: ErrorAlertProps) => {
  return (
    <Alert
      severity="error"
      variant="filled"
      onClose={() => setShowErrorAltert(false)}
    >
      {message}
    </Alert>
  );
};
