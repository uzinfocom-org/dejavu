import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    const { query } = parse(req.url || '/', true);
    const { full_name } = query;
    
    if (Array.isArray(full_name)) {
        throw new Error('Expected a single full name');
    }

    const parsedRequest: ParsedRequest = {
        full_name: full_name
    };

    return parsedRequest
}

export default parseRequest;
