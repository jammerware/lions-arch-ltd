import { Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

// todo: maybe move this to a node package?
export class FakeHttpService {
    static thatRespondsWith(body: string, statusCode: number = 200): Http {
        let fakeHttpBackend = new MockBackend();
        fakeHttpBackend.connections.subscribe(c => { 
            c.mockRespond(new Response(new ResponseOptions({
                body: body,
                status: statusCode
            })));
        });

        return new Http(fakeHttpBackend, new BaseRequestOptions());
    }
}