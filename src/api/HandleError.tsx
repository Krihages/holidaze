type Error = {
  message: string;
};

export default function HandleError(error: Error) {
  return <div>{error.message ?? "Something went wrong"}</div>;
}
