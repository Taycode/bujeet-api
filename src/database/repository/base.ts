import {Callback, FilterQuery, Model, ProjectionType, QueryOptions, UpdateQuery} from "mongoose";

export class BaseRepository<T> {
    private Model: Model<T>;

    constructor(model: Model<T>){
        this.Model = model;
    }

    create(payload = {}): Promise<T> {
        return this.Model.create(payload);
    }

    async findOne(filter?: FilterQuery<T>,
                  projection?: ProjectionType<T> | null,
                  options?: QueryOptions<T> | null) {
        return this.Model.findOne<T>(filter, projection, options);
    }

    async findOneAndUpdate(filter?: FilterQuery<T>,
                           update?: UpdateQuery<T>,
                           options?: QueryOptions<T> | null,) {
        return this.Model.findOneAndUpdate<T>(filter, update, options);
    }
    async findById(id: string) {
        return this.Model.findById<T>(id)
            .catch(() => null);
    }

    async find(filter: FilterQuery<T>,
               projection?: ProjectionType<T> | null,
               options?: QueryOptions<T> | null): Promise<T[]> {
        return this.Model.find<T>(filter,projection, options);
    }

    createMany(data : any): Promise<T[]> {
        return this.Model.insertMany<T>(data);
    }
}

