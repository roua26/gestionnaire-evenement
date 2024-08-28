import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";



@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(User)
        private readonly usersRepository : Repository<User>,
    ){}
    //async register(nom: string,prenom :string, dateNes: string, email:string, password: string): Promise<User> {
        
      // const user = this.usersRepository.create({ nom, prenom , dateNes , email, password });
      //  return this.usersRepository.save(user);
     // }
     async create(data: any): Promise <User>{
       return this.usersRepository.save(data);
    }
    async findOne(condition: any) :Promise <User|null>{
        return this.usersRepository.findOneBy(condition);
    }
    

}