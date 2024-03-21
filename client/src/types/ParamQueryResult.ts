type RiaQuerySuccessData = Array<{
  name: string;
  value: number;
}>;
type RiaQuerySuccess = {
  status: "success";
  data: RiaQuerySuccessData;
};

type RiaQueryErrorData = { error: { message: string } };
type RiaQueryError = {
  status: "error";
  data: RiaQueryErrorData;
};

type RiaQueryResponse = RiaQuerySuccess | RiaQueryError;

export type { RiaQuerySuccessData, RiaQuerySuccess, RiaQueryErrorData, RiaQueryError, RiaQueryResponse };
