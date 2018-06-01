import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, ResponseType} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import {User} from "../models/user.model";
import {USERS} from "../mocks/mock-users";

class MockError extends Response implements Error {
  name:any;
  message:any;
}

export function fakeBackendFactory (backend: MockBackend, options: BaseRequestOptions) {
  backend.connections.subscribe((connection: MockConnection) => {
    setTimeout(() => {

      if (connection.request.url.endsWith('/api/authenticate/login') && connection.request.method === RequestMethod.Post) {
        let params = JSON.parse(connection.request.getBody());
        params["username"]="anita";
        let found: User = USERS.find((user: User) => {return (params.username === user.username);});     
      
        if (found){
          if(params.password === found.password) {
              connection.mockRespond(new Response(
                new ResponseOptions({status: 200, body: {validation : true}})
              ));
          }else{
              connection.mockRespond(new Response(
                new ResponseOptions({status: 200, body: {validation : false}})
              ));
          }
        } else {
          connection.mockRespond(new Response(
                new ResponseOptions({status: 200, body: {validation: false}})
              ));
        }
      }

      if (connection.request.url.endsWith('/api/authenticate/logout') && connection.request.method === RequestMethod.Post) {
          let params = JSON.parse(connection.request.getBody());
          connection.mockRespond(new Response(
          new ResponseOptions({status: 200, body: true})
        ));
      }
    }, 100);

  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
