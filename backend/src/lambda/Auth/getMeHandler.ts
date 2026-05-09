


import { makeGetMeController } from "../../main/factories/Auth/makeGetMeController";

export const handler = async (event: any) => {
  const controller = makeGetMeController();
  const userId = event.pathParameters?.id
  return await controller.handle(userId); 
};