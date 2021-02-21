import axios from 'axios';
import {userService, postsService} from '../../src/services/apiServices'
import 'regenerator-runtime/runtime'
import { async } from 'regenerator-runtime';
import {emptyResponse, sampleUserResponse} from '../testHelpers'

jest.mock('axios');

describe("apiServices", ()=>{
    describe('userService list', ()=>{
        it('should call the right api /users', async ()=>{
            axios.get.mockImplementationOnce(() => Promise.resolve(emptyResponse));
            userService.list()
            expect(axios.get).toHaveBeenCalledWith('/users');
        });
        it('should return the exact result of axios query', async ()=>{
            axios.get.mockImplementationOnce(() => Promise.resolve(sampleUserResponse));
            await expect(userService.list()).resolves.toEqual(sampleUserResponse);
        });

    });    
});