import {WhereBuilder} from '@loopback/repository';
import {DbPersonDataSource} from '../datasources';
import {Person} from '../models';
import {PersonRepository} from '../repositories';
import {getDatasource} from '../__tests__/helpers/datasource.factory';
import {PersonController} from './person.controller';

type ControllerModel = Person;
const mockRequestBody = new Person();
const mockResponse = new Person();
const mockResponseArr = [mockResponse];

describe('PersonController', () => {
  let controller: PersonController;
  let taskRepo: PersonRepository;

  beforeEach(() => {
    const datasource = getDatasource(DbPersonDataSource.dataSourceName);
    taskRepo = new PersonRepository(datasource);
    controller = new PersonController(taskRepo);
  });

  describe('create', () => {
    it('should return repository result', async () => {
      const repoSpy = jest
        .spyOn(taskRepo, 'create')
        .mockResolvedValueOnce(mockResponse);

      const res = await controller.create(mockRequestBody);
      expect(res).toBe(mockResponse);
      expect(repoSpy).toHaveBeenCalledWith(mockRequestBody);
    });
  });

  describe('count', () => {
    it('should return repository result', async () => {
      const mockRes = {count: 100};
      const repoSpy = jest
        .spyOn(taskRepo, 'count')
        .mockResolvedValueOnce(mockRes);

      const mockWhere = new WhereBuilder<Omit<ControllerModel, 'id'>>().build();
      const res = await controller.count(mockWhere);
      expect(res).toBe(mockRes);
      expect(repoSpy).toHaveBeenCalledWith(mockWhere);
    });
  });

  describe('find', () => {
    it('should return repository result', async () => {
      const repoSpy = jest
        .spyOn(taskRepo, 'find')
        .mockResolvedValueOnce(mockResponseArr);

      const mockFilter = {where: new WhereBuilder<ControllerModel>().build()};
      const res = await controller.find(mockFilter);
      expect(res).toBe(mockResponseArr);
      expect(repoSpy).toHaveBeenCalledWith(mockFilter);
    });
  });

  describe('updateAll', () => {
    it('should return repository result', async () => {
      const mockRes = {count: 1};
      const repoSpy = jest
        .spyOn(taskRepo, 'updateAll')
        .mockResolvedValueOnce(mockRes);

      const mockWhere = new WhereBuilder<Person>().build();
      const res = await controller.updateAll(mockRequestBody, mockWhere);
      expect(res).toBe(mockRes);
      expect(repoSpy).toHaveBeenCalledWith(mockRequestBody, mockWhere);
    });
  });

  describe('findById', () => {
    it('should return repository result', async () => {
      const mockId = 'mock-id';
      const repoSpy = jest
        .spyOn(taskRepo, 'findById')
        .mockResolvedValueOnce(mockResponse);

      const mockFilter = {};
      const res = await controller.findById(mockId, mockFilter);
      expect(res).toBe(mockResponse);
      expect(repoSpy).toHaveBeenCalledWith(mockId, mockFilter);
    });
  });

  describe('updateById', () => {
    it('should return repository result', async () => {
      const mockId = 'mock-id';
      const repoSpy = jest
        .spyOn(taskRepo, 'updateById')
        .mockResolvedValueOnce();

      const res = await controller.updateById(mockId, mockRequestBody);
      expect(res).toBeUndefined();
      expect(repoSpy).toHaveBeenCalledWith(mockId, mockRequestBody);
    });
  });

  describe('replaceById', () => {
    it('should return repository result', async () => {
      const mockId = 'mock-id';
      const repoSpy = jest
        .spyOn(taskRepo, 'replaceById')
        .mockResolvedValueOnce();

      const res = await controller.replaceById(mockId, mockRequestBody);
      expect(res).toBeUndefined();
      expect(repoSpy).toHaveBeenCalledWith(mockId, mockRequestBody);
    });
  });

  describe('deleteById', () => {
    it('should return repository result', async () => {
      const mockId = 'mock-id';
      const repoSpy = jest
        .spyOn(taskRepo, 'deleteById')
        .mockResolvedValueOnce();

      const res = await controller.deleteById(mockId);
      expect(res).toBeUndefined();
      expect(repoSpy).toHaveBeenCalledWith(mockId);
    });
  });
});
