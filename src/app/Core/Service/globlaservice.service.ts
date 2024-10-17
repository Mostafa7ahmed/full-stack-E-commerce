import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GloblaserviceService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  authRoute: string = '/api/v1/auth/';
  addressesRouter = "/api/v1/addresses/";
   API_Department = "https://66d266e4184dce1713cd8067.mockapi.io/";
   API_Prodcuts ="https://66cbd8fd4290b1c4f19b3a54.mockapi.io/";
   API_Message ="https://66d266e4184dce1713cd8067.mockapi.io/Ecommerce/Message"

  constructor() { }
}
