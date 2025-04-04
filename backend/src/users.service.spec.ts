import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service'
import { getModelToken } from '@nestjs/mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let mockUserModel: any;

  beforeEach(async () => {
    mockUserModel = {
      prototype: {
        save: jest.fn(),
      },
      create: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: function (dto: CreateUserDto) {
            return {
              ...dto,
              save: mockUserModel.prototype.save,
            };
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should create a user', async () => {
    const dto: CreateUserDto = { email: 'test@example.com', password: '123456' };

    const mockSavedUser = { ...dto, _id: 'abc123' };
    mockUserModel.prototype.save.mockResolvedValue(mockSavedUser);

    const result = await service.create(dto);

    expect(mockUserModel.prototype.save).toHaveBeenCalled();
    expect(result).toEqual(mockSavedUser);
  });
});