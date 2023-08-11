import type { UserId } from '$/commonTypesWithClient/branded';
import type { EnemyModel } from '$/commonTypesWithClient/models';

export type Methods = {
  get: {
    query: {
      display: number;
    };
    resBody: { body: EnemyModel[]; hasChange: boolean };
  };
  post: {
    reqBody: {
      enemyId: string;
      userId: UserId;
    };
  };
};
