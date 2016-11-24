import { Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export class SuperMockBackend extends MockBackend {
    public requestUrl: string;

    public with(body: string, statusCode = 200): Http {
        this.connections.subscribe(c =>  {
            if (!this.requestUrl || c.request.url === this.requestUrl) {
               c.mockRespond(new Response(new ResponseOptions({
                   body: body,
                   status: statusCode
               })));
            }
        });

        return new Http(this, new BaseRequestOptions());
    }
}

// todo: maybe move this to a node package?
export class FakeHttpService {
    public static thatRespondsWith(body: string, statusCode = 200): Http {
        let fakeHttpBackend = new SuperMockBackend();
        fakeHttpBackend.with(body, statusCode);

        return new Http(fakeHttpBackend, new BaseRequestOptions());
    }

    public static thatRespondsTo(requestUrl: string): SuperMockBackend {
        let fakeHttpBackend = new SuperMockBackend();
        fakeHttpBackend.requestUrl = requestUrl;

        return fakeHttpBackend;
    }
}