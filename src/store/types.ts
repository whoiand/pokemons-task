export type DataAction = {
  PENDING: string;
  SUCCESS: string;
  FAILURE: string;
};

export type FetchDataRequestAction = {
  type: DataAction['FAILURE'];
};

export type FetchDataSuccessAction<DataType> = {
  type: DataAction['SUCCESS'];
  payload: DataType;
};

export type FetchDataFailureAction = {
  type: DataAction['FAILURE'];
  payload: string;
};

export type DataActions<DataType> =
  | FetchDataRequestAction
  | FetchDataSuccessAction<DataType>
  | FetchDataFailureAction;

export type FetchType = 'list' | 'entity';
