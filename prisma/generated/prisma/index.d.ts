
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model news_post
 * 
 */
export type news_post = $Result.DefaultSelection<Prisma.$news_postPayload>
/**
 * Model jadwal_jimpit
 * 
 */
export type jadwal_jimpit = $Result.DefaultSelection<Prisma.$jadwal_jimpitPayload>
/**
 * Model days
 * 
 */
export type days = $Result.DefaultSelection<Prisma.$daysPayload>
/**
 * Model resson
 * 
 */
export type resson = $Result.DefaultSelection<Prisma.$ressonPayload>
/**
 * Model feedback
 * 
 */
export type feedback = $Result.DefaultSelection<Prisma.$feedbackPayload>
/**
 * Model noted
 * 
 */
export type noted = $Result.DefaultSelection<Prisma.$notedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const roleUser: {
  own: 'own',
  admin: 'admin',
  external_user: 'external_user'
};

export type roleUser = (typeof roleUser)[keyof typeof roleUser]


export const onPublish: {
  publish: 'publish',
  unpublish: 'unpublish'
};

export type onPublish = (typeof onPublish)[keyof typeof onPublish]


export const an_active: {
  active: 'active',
  nonactive: 'nonactive'
};

export type an_active = (typeof an_active)[keyof typeof an_active]

}

export type roleUser = $Enums.roleUser

export const roleUser: typeof $Enums.roleUser

export type onPublish = $Enums.onPublish

export const onPublish: typeof $Enums.onPublish

export type an_active = $Enums.an_active

export const an_active: typeof $Enums.an_active

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news_post`: Exposes CRUD operations for the **news_post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News_posts
    * const news_posts = await prisma.news_post.findMany()
    * ```
    */
  get news_post(): Prisma.news_postDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal_jimpit`: Exposes CRUD operations for the **jadwal_jimpit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwal_jimpits
    * const jadwal_jimpits = await prisma.jadwal_jimpit.findMany()
    * ```
    */
  get jadwal_jimpit(): Prisma.jadwal_jimpitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.days`: Exposes CRUD operations for the **days** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Days
    * const days = await prisma.days.findMany()
    * ```
    */
  get days(): Prisma.daysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resson`: Exposes CRUD operations for the **resson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressons
    * const ressons = await prisma.resson.findMany()
    * ```
    */
  get resson(): Prisma.ressonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.feedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noted`: Exposes CRUD operations for the **noted** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Noteds
    * const noteds = await prisma.noted.findMany()
    * ```
    */
  get noted(): Prisma.notedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    categories: 'categories',
    news_post: 'news_post',
    jadwal_jimpit: 'jadwal_jimpit',
    days: 'days',
    resson: 'resson',
    feedback: 'feedback',
    noted: 'noted'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "categories" | "news_post" | "jadwal_jimpit" | "days" | "resson" | "feedback" | "noted"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      news_post: {
        payload: Prisma.$news_postPayload<ExtArgs>
        fields: Prisma.news_postFieldRefs
        operations: {
          findUnique: {
            args: Prisma.news_postFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.news_postFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>
          }
          findFirst: {
            args: Prisma.news_postFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.news_postFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>
          }
          findMany: {
            args: Prisma.news_postFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>[]
          }
          create: {
            args: Prisma.news_postCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>
          }
          createMany: {
            args: Prisma.news_postCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.news_postCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>[]
          }
          delete: {
            args: Prisma.news_postDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>
          }
          update: {
            args: Prisma.news_postUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>
          }
          deleteMany: {
            args: Prisma.news_postDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.news_postUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.news_postUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>[]
          }
          upsert: {
            args: Prisma.news_postUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$news_postPayload>
          }
          aggregate: {
            args: Prisma.News_postAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews_post>
          }
          groupBy: {
            args: Prisma.news_postGroupByArgs<ExtArgs>
            result: $Utils.Optional<News_postGroupByOutputType>[]
          }
          count: {
            args: Prisma.news_postCountArgs<ExtArgs>
            result: $Utils.Optional<News_postCountAggregateOutputType> | number
          }
        }
      }
      jadwal_jimpit: {
        payload: Prisma.$jadwal_jimpitPayload<ExtArgs>
        fields: Prisma.jadwal_jimpitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.jadwal_jimpitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.jadwal_jimpitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>
          }
          findFirst: {
            args: Prisma.jadwal_jimpitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.jadwal_jimpitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>
          }
          findMany: {
            args: Prisma.jadwal_jimpitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>[]
          }
          create: {
            args: Prisma.jadwal_jimpitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>
          }
          createMany: {
            args: Prisma.jadwal_jimpitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.jadwal_jimpitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>[]
          }
          delete: {
            args: Prisma.jadwal_jimpitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>
          }
          update: {
            args: Prisma.jadwal_jimpitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>
          }
          deleteMany: {
            args: Prisma.jadwal_jimpitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.jadwal_jimpitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.jadwal_jimpitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>[]
          }
          upsert: {
            args: Prisma.jadwal_jimpitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$jadwal_jimpitPayload>
          }
          aggregate: {
            args: Prisma.Jadwal_jimpitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal_jimpit>
          }
          groupBy: {
            args: Prisma.jadwal_jimpitGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jadwal_jimpitGroupByOutputType>[]
          }
          count: {
            args: Prisma.jadwal_jimpitCountArgs<ExtArgs>
            result: $Utils.Optional<Jadwal_jimpitCountAggregateOutputType> | number
          }
        }
      }
      days: {
        payload: Prisma.$daysPayload<ExtArgs>
        fields: Prisma.daysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.daysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.daysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          findFirst: {
            args: Prisma.daysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.daysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          findMany: {
            args: Prisma.daysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>[]
          }
          create: {
            args: Prisma.daysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          createMany: {
            args: Prisma.daysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.daysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>[]
          }
          delete: {
            args: Prisma.daysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          update: {
            args: Prisma.daysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          deleteMany: {
            args: Prisma.daysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.daysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.daysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>[]
          }
          upsert: {
            args: Prisma.daysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$daysPayload>
          }
          aggregate: {
            args: Prisma.DaysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDays>
          }
          groupBy: {
            args: Prisma.daysGroupByArgs<ExtArgs>
            result: $Utils.Optional<DaysGroupByOutputType>[]
          }
          count: {
            args: Prisma.daysCountArgs<ExtArgs>
            result: $Utils.Optional<DaysCountAggregateOutputType> | number
          }
        }
      }
      resson: {
        payload: Prisma.$ressonPayload<ExtArgs>
        fields: Prisma.ressonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ressonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ressonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>
          }
          findFirst: {
            args: Prisma.ressonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ressonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>
          }
          findMany: {
            args: Prisma.ressonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>[]
          }
          create: {
            args: Prisma.ressonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>
          }
          createMany: {
            args: Prisma.ressonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ressonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>[]
          }
          delete: {
            args: Prisma.ressonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>
          }
          update: {
            args: Prisma.ressonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>
          }
          deleteMany: {
            args: Prisma.ressonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ressonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ressonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>[]
          }
          upsert: {
            args: Prisma.ressonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressonPayload>
          }
          aggregate: {
            args: Prisma.RessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResson>
          }
          groupBy: {
            args: Prisma.ressonGroupByArgs<ExtArgs>
            result: $Utils.Optional<RessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.ressonCountArgs<ExtArgs>
            result: $Utils.Optional<RessonCountAggregateOutputType> | number
          }
        }
      }
      feedback: {
        payload: Prisma.$feedbackPayload<ExtArgs>
        fields: Prisma.feedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.feedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.feedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findFirst: {
            args: Prisma.feedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.feedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          findMany: {
            args: Prisma.feedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          create: {
            args: Prisma.feedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          createMany: {
            args: Prisma.feedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.feedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          delete: {
            args: Prisma.feedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          update: {
            args: Prisma.feedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          deleteMany: {
            args: Prisma.feedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.feedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.feedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>[]
          }
          upsert: {
            args: Prisma.feedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$feedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.feedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.feedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      noted: {
        payload: Prisma.$notedPayload<ExtArgs>
        fields: Prisma.notedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>
          }
          findFirst: {
            args: Prisma.notedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>
          }
          findMany: {
            args: Prisma.notedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>[]
          }
          create: {
            args: Prisma.notedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>
          }
          createMany: {
            args: Prisma.notedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>[]
          }
          delete: {
            args: Prisma.notedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>
          }
          update: {
            args: Prisma.notedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>
          }
          deleteMany: {
            args: Prisma.notedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>[]
          }
          upsert: {
            args: Prisma.notedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notedPayload>
          }
          aggregate: {
            args: Prisma.NotedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoted>
          }
          groupBy: {
            args: Prisma.notedGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotedGroupByOutputType>[]
          }
          count: {
            args: Prisma.notedCountArgs<ExtArgs>
            result: $Utils.Optional<NotedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    categories?: categoriesOmit
    news_post?: news_postOmit
    jadwal_jimpit?: jadwal_jimpitOmit
    days?: daysOmit
    resson?: ressonOmit
    feedback?: feedbackOmit
    noted?: notedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ressons: number
    post: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ressons?: boolean | UserCountOutputTypeCountRessonsArgs
    post?: boolean | UserCountOutputTypeCountPostArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ressonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: news_postWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    posts: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoriesCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: news_postWhereInput
  }


  /**
   * Count Type DaysCountOutputType
   */

  export type DaysCountOutputType = {
    jadwals: number
  }

  export type DaysCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwals?: boolean | DaysCountOutputTypeCountJadwalsArgs
  }

  // Custom InputTypes
  /**
   * DaysCountOutputType without action
   */
  export type DaysCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaysCountOutputType
     */
    select?: DaysCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DaysCountOutputType without action
   */
  export type DaysCountOutputTypeCountJadwalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwal_jimpitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.roleUser | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.roleUser | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.roleUser
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    ressons?: boolean | user$ressonsArgs<ExtArgs>
    post?: boolean | user$postArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ressons?: boolean | user$ressonsArgs<ExtArgs>
    post?: boolean | user$postArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      ressons: Prisma.$ressonPayload<ExtArgs>[]
      post: Prisma.$news_postPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.roleUser
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ressons<T extends user$ressonsArgs<ExtArgs> = {}>(args?: Subset<T, user$ressonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post<T extends user$postArgs<ExtArgs> = {}>(args?: Subset<T, user$postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'roleUser'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.ressons
   */
  export type user$ressonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    where?: ressonWhereInput
    orderBy?: ressonOrderByWithRelationInput | ressonOrderByWithRelationInput[]
    cursor?: ressonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RessonScalarFieldEnum | RessonScalarFieldEnum[]
  }

  /**
   * user.post
   */
  export type user$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    where?: news_postWhereInput
    orderBy?: news_postOrderByWithRelationInput | news_postOrderByWithRelationInput[]
    cursor?: news_postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: News_postScalarFieldEnum | News_postScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    posts?: boolean | categories$postsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | categories$postsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      posts: Prisma.$news_postPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends categories$postsArgs<ExtArgs> = {}>(args?: Subset<T, categories$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly createdAt: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.posts
   */
  export type categories$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    where?: news_postWhereInput
    orderBy?: news_postOrderByWithRelationInput | news_postOrderByWithRelationInput[]
    cursor?: news_postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: News_postScalarFieldEnum | News_postScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model news_post
   */

  export type AggregateNews_post = {
    _count: News_postCountAggregateOutputType | null
    _avg: News_postAvgAggregateOutputType | null
    _sum: News_postSumAggregateOutputType | null
    _min: News_postMinAggregateOutputType | null
    _max: News_postMaxAggregateOutputType | null
  }

  export type News_postAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type News_postSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type News_postMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    image_url: string | null
    slug: string | null
    authorId: number | null
    is_publish: $Enums.onPublish | null
    categoryId: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type News_postMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    image_url: string | null
    slug: string | null
    authorId: number | null
    is_publish: $Enums.onPublish | null
    categoryId: number | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type News_postCountAggregateOutputType = {
    id: number
    title: number
    content: number
    image_url: number
    slug: number
    authorId: number
    is_publish: number
    categoryId: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type News_postAvgAggregateInputType = {
    id?: true
    authorId?: true
    categoryId?: true
  }

  export type News_postSumAggregateInputType = {
    id?: true
    authorId?: true
    categoryId?: true
  }

  export type News_postMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    image_url?: true
    slug?: true
    authorId?: true
    is_publish?: true
    categoryId?: true
    createdAt?: true
    updateAt?: true
  }

  export type News_postMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    image_url?: true
    slug?: true
    authorId?: true
    is_publish?: true
    categoryId?: true
    createdAt?: true
    updateAt?: true
  }

  export type News_postCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    image_url?: true
    slug?: true
    authorId?: true
    is_publish?: true
    categoryId?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type News_postAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news_post to aggregate.
     */
    where?: news_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_posts to fetch.
     */
    orderBy?: news_postOrderByWithRelationInput | news_postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: news_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned news_posts
    **/
    _count?: true | News_postCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: News_postAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: News_postSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: News_postMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: News_postMaxAggregateInputType
  }

  export type GetNews_postAggregateType<T extends News_postAggregateArgs> = {
        [P in keyof T & keyof AggregateNews_post]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews_post[P]>
      : GetScalarType<T[P], AggregateNews_post[P]>
  }




  export type news_postGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: news_postWhereInput
    orderBy?: news_postOrderByWithAggregationInput | news_postOrderByWithAggregationInput[]
    by: News_postScalarFieldEnum[] | News_postScalarFieldEnum
    having?: news_postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: News_postCountAggregateInputType | true
    _avg?: News_postAvgAggregateInputType
    _sum?: News_postSumAggregateInputType
    _min?: News_postMinAggregateInputType
    _max?: News_postMaxAggregateInputType
  }

  export type News_postGroupByOutputType = {
    id: number
    title: string
    content: string
    image_url: string
    slug: string
    authorId: number
    is_publish: $Enums.onPublish
    categoryId: number
    createdAt: Date
    updateAt: Date
    _count: News_postCountAggregateOutputType | null
    _avg: News_postAvgAggregateOutputType | null
    _sum: News_postSumAggregateOutputType | null
    _min: News_postMinAggregateOutputType | null
    _max: News_postMaxAggregateOutputType | null
  }

  type GetNews_postGroupByPayload<T extends news_postGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<News_postGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof News_postGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], News_postGroupByOutputType[P]>
            : GetScalarType<T[P], News_postGroupByOutputType[P]>
        }
      >
    >


  export type news_postSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    slug?: boolean
    authorId?: boolean
    is_publish?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    author?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news_post"]>

  export type news_postSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    slug?: boolean
    authorId?: boolean
    is_publish?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    author?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news_post"]>

  export type news_postSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    slug?: boolean
    authorId?: boolean
    is_publish?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    author?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news_post"]>

  export type news_postSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    image_url?: boolean
    slug?: boolean
    authorId?: boolean
    is_publish?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type news_postOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "image_url" | "slug" | "authorId" | "is_publish" | "categoryId" | "createdAt" | "updateAt", ExtArgs["result"]["news_post"]>
  export type news_postInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type news_postIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type news_postIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | userDefaultArgs<ExtArgs>
    category?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $news_postPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "news_post"
    objects: {
      author: Prisma.$userPayload<ExtArgs>
      category: Prisma.$categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      image_url: string
      slug: string
      authorId: number
      is_publish: $Enums.onPublish
      categoryId: number
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["news_post"]>
    composites: {}
  }

  type news_postGetPayload<S extends boolean | null | undefined | news_postDefaultArgs> = $Result.GetResult<Prisma.$news_postPayload, S>

  type news_postCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<news_postFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: News_postCountAggregateInputType | true
    }

  export interface news_postDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['news_post'], meta: { name: 'news_post' } }
    /**
     * Find zero or one News_post that matches the filter.
     * @param {news_postFindUniqueArgs} args - Arguments to find a News_post
     * @example
     * // Get one News_post
     * const news_post = await prisma.news_post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends news_postFindUniqueArgs>(args: SelectSubset<T, news_postFindUniqueArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News_post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {news_postFindUniqueOrThrowArgs} args - Arguments to find a News_post
     * @example
     * // Get one News_post
     * const news_post = await prisma.news_post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends news_postFindUniqueOrThrowArgs>(args: SelectSubset<T, news_postFindUniqueOrThrowArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News_post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_postFindFirstArgs} args - Arguments to find a News_post
     * @example
     * // Get one News_post
     * const news_post = await prisma.news_post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends news_postFindFirstArgs>(args?: SelectSubset<T, news_postFindFirstArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News_post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_postFindFirstOrThrowArgs} args - Arguments to find a News_post
     * @example
     * // Get one News_post
     * const news_post = await prisma.news_post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends news_postFindFirstOrThrowArgs>(args?: SelectSubset<T, news_postFindFirstOrThrowArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News_posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_postFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News_posts
     * const news_posts = await prisma.news_post.findMany()
     * 
     * // Get first 10 News_posts
     * const news_posts = await prisma.news_post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const news_postWithIdOnly = await prisma.news_post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends news_postFindManyArgs>(args?: SelectSubset<T, news_postFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News_post.
     * @param {news_postCreateArgs} args - Arguments to create a News_post.
     * @example
     * // Create one News_post
     * const News_post = await prisma.news_post.create({
     *   data: {
     *     // ... data to create a News_post
     *   }
     * })
     * 
     */
    create<T extends news_postCreateArgs>(args: SelectSubset<T, news_postCreateArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News_posts.
     * @param {news_postCreateManyArgs} args - Arguments to create many News_posts.
     * @example
     * // Create many News_posts
     * const news_post = await prisma.news_post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends news_postCreateManyArgs>(args?: SelectSubset<T, news_postCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News_posts and returns the data saved in the database.
     * @param {news_postCreateManyAndReturnArgs} args - Arguments to create many News_posts.
     * @example
     * // Create many News_posts
     * const news_post = await prisma.news_post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News_posts and only return the `id`
     * const news_postWithIdOnly = await prisma.news_post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends news_postCreateManyAndReturnArgs>(args?: SelectSubset<T, news_postCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News_post.
     * @param {news_postDeleteArgs} args - Arguments to delete one News_post.
     * @example
     * // Delete one News_post
     * const News_post = await prisma.news_post.delete({
     *   where: {
     *     // ... filter to delete one News_post
     *   }
     * })
     * 
     */
    delete<T extends news_postDeleteArgs>(args: SelectSubset<T, news_postDeleteArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News_post.
     * @param {news_postUpdateArgs} args - Arguments to update one News_post.
     * @example
     * // Update one News_post
     * const news_post = await prisma.news_post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends news_postUpdateArgs>(args: SelectSubset<T, news_postUpdateArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News_posts.
     * @param {news_postDeleteManyArgs} args - Arguments to filter News_posts to delete.
     * @example
     * // Delete a few News_posts
     * const { count } = await prisma.news_post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends news_postDeleteManyArgs>(args?: SelectSubset<T, news_postDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News_posts
     * const news_post = await prisma.news_post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends news_postUpdateManyArgs>(args: SelectSubset<T, news_postUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News_posts and returns the data updated in the database.
     * @param {news_postUpdateManyAndReturnArgs} args - Arguments to update many News_posts.
     * @example
     * // Update many News_posts
     * const news_post = await prisma.news_post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News_posts and only return the `id`
     * const news_postWithIdOnly = await prisma.news_post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends news_postUpdateManyAndReturnArgs>(args: SelectSubset<T, news_postUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News_post.
     * @param {news_postUpsertArgs} args - Arguments to update or create a News_post.
     * @example
     * // Update or create a News_post
     * const news_post = await prisma.news_post.upsert({
     *   create: {
     *     // ... data to create a News_post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News_post we want to update
     *   }
     * })
     */
    upsert<T extends news_postUpsertArgs>(args: SelectSubset<T, news_postUpsertArgs<ExtArgs>>): Prisma__news_postClient<$Result.GetResult<Prisma.$news_postPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News_posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_postCountArgs} args - Arguments to filter News_posts to count.
     * @example
     * // Count the number of News_posts
     * const count = await prisma.news_post.count({
     *   where: {
     *     // ... the filter for the News_posts we want to count
     *   }
     * })
    **/
    count<T extends news_postCountArgs>(
      args?: Subset<T, news_postCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], News_postCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {News_postAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends News_postAggregateArgs>(args: Subset<T, News_postAggregateArgs>): Prisma.PrismaPromise<GetNews_postAggregateType<T>>

    /**
     * Group by News_post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {news_postGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends news_postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: news_postGroupByArgs['orderBy'] }
        : { orderBy?: news_postGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, news_postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNews_postGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the news_post model
   */
  readonly fields: news_postFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for news_post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__news_postClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the news_post model
   */
  interface news_postFieldRefs {
    readonly id: FieldRef<"news_post", 'Int'>
    readonly title: FieldRef<"news_post", 'String'>
    readonly content: FieldRef<"news_post", 'String'>
    readonly image_url: FieldRef<"news_post", 'String'>
    readonly slug: FieldRef<"news_post", 'String'>
    readonly authorId: FieldRef<"news_post", 'Int'>
    readonly is_publish: FieldRef<"news_post", 'onPublish'>
    readonly categoryId: FieldRef<"news_post", 'Int'>
    readonly createdAt: FieldRef<"news_post", 'DateTime'>
    readonly updateAt: FieldRef<"news_post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * news_post findUnique
   */
  export type news_postFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * Filter, which news_post to fetch.
     */
    where: news_postWhereUniqueInput
  }

  /**
   * news_post findUniqueOrThrow
   */
  export type news_postFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * Filter, which news_post to fetch.
     */
    where: news_postWhereUniqueInput
  }

  /**
   * news_post findFirst
   */
  export type news_postFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * Filter, which news_post to fetch.
     */
    where?: news_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_posts to fetch.
     */
    orderBy?: news_postOrderByWithRelationInput | news_postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news_posts.
     */
    cursor?: news_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news_posts.
     */
    distinct?: News_postScalarFieldEnum | News_postScalarFieldEnum[]
  }

  /**
   * news_post findFirstOrThrow
   */
  export type news_postFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * Filter, which news_post to fetch.
     */
    where?: news_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_posts to fetch.
     */
    orderBy?: news_postOrderByWithRelationInput | news_postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for news_posts.
     */
    cursor?: news_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of news_posts.
     */
    distinct?: News_postScalarFieldEnum | News_postScalarFieldEnum[]
  }

  /**
   * news_post findMany
   */
  export type news_postFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * Filter, which news_posts to fetch.
     */
    where?: news_postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of news_posts to fetch.
     */
    orderBy?: news_postOrderByWithRelationInput | news_postOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing news_posts.
     */
    cursor?: news_postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` news_posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` news_posts.
     */
    skip?: number
    distinct?: News_postScalarFieldEnum | News_postScalarFieldEnum[]
  }

  /**
   * news_post create
   */
  export type news_postCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * The data needed to create a news_post.
     */
    data: XOR<news_postCreateInput, news_postUncheckedCreateInput>
  }

  /**
   * news_post createMany
   */
  export type news_postCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many news_posts.
     */
    data: news_postCreateManyInput | news_postCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * news_post createManyAndReturn
   */
  export type news_postCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * The data used to create many news_posts.
     */
    data: news_postCreateManyInput | news_postCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * news_post update
   */
  export type news_postUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * The data needed to update a news_post.
     */
    data: XOR<news_postUpdateInput, news_postUncheckedUpdateInput>
    /**
     * Choose, which news_post to update.
     */
    where: news_postWhereUniqueInput
  }

  /**
   * news_post updateMany
   */
  export type news_postUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update news_posts.
     */
    data: XOR<news_postUpdateManyMutationInput, news_postUncheckedUpdateManyInput>
    /**
     * Filter which news_posts to update
     */
    where?: news_postWhereInput
    /**
     * Limit how many news_posts to update.
     */
    limit?: number
  }

  /**
   * news_post updateManyAndReturn
   */
  export type news_postUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * The data used to update news_posts.
     */
    data: XOR<news_postUpdateManyMutationInput, news_postUncheckedUpdateManyInput>
    /**
     * Filter which news_posts to update
     */
    where?: news_postWhereInput
    /**
     * Limit how many news_posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * news_post upsert
   */
  export type news_postUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * The filter to search for the news_post to update in case it exists.
     */
    where: news_postWhereUniqueInput
    /**
     * In case the news_post found by the `where` argument doesn't exist, create a new news_post with this data.
     */
    create: XOR<news_postCreateInput, news_postUncheckedCreateInput>
    /**
     * In case the news_post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<news_postUpdateInput, news_postUncheckedUpdateInput>
  }

  /**
   * news_post delete
   */
  export type news_postDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
    /**
     * Filter which news_post to delete.
     */
    where: news_postWhereUniqueInput
  }

  /**
   * news_post deleteMany
   */
  export type news_postDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which news_posts to delete
     */
    where?: news_postWhereInput
    /**
     * Limit how many news_posts to delete.
     */
    limit?: number
  }

  /**
   * news_post without action
   */
  export type news_postDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the news_post
     */
    select?: news_postSelect<ExtArgs> | null
    /**
     * Omit specific fields from the news_post
     */
    omit?: news_postOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: news_postInclude<ExtArgs> | null
  }


  /**
   * Model jadwal_jimpit
   */

  export type AggregateJadwal_jimpit = {
    _count: Jadwal_jimpitCountAggregateOutputType | null
    _avg: Jadwal_jimpitAvgAggregateOutputType | null
    _sum: Jadwal_jimpitSumAggregateOutputType | null
    _min: Jadwal_jimpitMinAggregateOutputType | null
    _max: Jadwal_jimpitMaxAggregateOutputType | null
  }

  export type Jadwal_jimpitAvgAggregateOutputType = {
    id: number | null
    dayId: number | null
  }

  export type Jadwal_jimpitSumAggregateOutputType = {
    id: number | null
    dayId: number | null
  }

  export type Jadwal_jimpitMinAggregateOutputType = {
    id: number | null
    members: string | null
    note: string | null
    dayId: number | null
    createdAt: Date | null
  }

  export type Jadwal_jimpitMaxAggregateOutputType = {
    id: number | null
    members: string | null
    note: string | null
    dayId: number | null
    createdAt: Date | null
  }

  export type Jadwal_jimpitCountAggregateOutputType = {
    id: number
    members: number
    note: number
    dayId: number
    createdAt: number
    _all: number
  }


  export type Jadwal_jimpitAvgAggregateInputType = {
    id?: true
    dayId?: true
  }

  export type Jadwal_jimpitSumAggregateInputType = {
    id?: true
    dayId?: true
  }

  export type Jadwal_jimpitMinAggregateInputType = {
    id?: true
    members?: true
    note?: true
    dayId?: true
    createdAt?: true
  }

  export type Jadwal_jimpitMaxAggregateInputType = {
    id?: true
    members?: true
    note?: true
    dayId?: true
    createdAt?: true
  }

  export type Jadwal_jimpitCountAggregateInputType = {
    id?: true
    members?: true
    note?: true
    dayId?: true
    createdAt?: true
    _all?: true
  }

  export type Jadwal_jimpitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwal_jimpit to aggregate.
     */
    where?: jadwal_jimpitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_jimpits to fetch.
     */
    orderBy?: jadwal_jimpitOrderByWithRelationInput | jadwal_jimpitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: jadwal_jimpitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_jimpits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_jimpits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned jadwal_jimpits
    **/
    _count?: true | Jadwal_jimpitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jadwal_jimpitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jadwal_jimpitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jadwal_jimpitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jadwal_jimpitMaxAggregateInputType
  }

  export type GetJadwal_jimpitAggregateType<T extends Jadwal_jimpitAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal_jimpit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal_jimpit[P]>
      : GetScalarType<T[P], AggregateJadwal_jimpit[P]>
  }




  export type jadwal_jimpitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: jadwal_jimpitWhereInput
    orderBy?: jadwal_jimpitOrderByWithAggregationInput | jadwal_jimpitOrderByWithAggregationInput[]
    by: Jadwal_jimpitScalarFieldEnum[] | Jadwal_jimpitScalarFieldEnum
    having?: jadwal_jimpitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jadwal_jimpitCountAggregateInputType | true
    _avg?: Jadwal_jimpitAvgAggregateInputType
    _sum?: Jadwal_jimpitSumAggregateInputType
    _min?: Jadwal_jimpitMinAggregateInputType
    _max?: Jadwal_jimpitMaxAggregateInputType
  }

  export type Jadwal_jimpitGroupByOutputType = {
    id: number
    members: string
    note: string
    dayId: number
    createdAt: Date
    _count: Jadwal_jimpitCountAggregateOutputType | null
    _avg: Jadwal_jimpitAvgAggregateOutputType | null
    _sum: Jadwal_jimpitSumAggregateOutputType | null
    _min: Jadwal_jimpitMinAggregateOutputType | null
    _max: Jadwal_jimpitMaxAggregateOutputType | null
  }

  type GetJadwal_jimpitGroupByPayload<T extends jadwal_jimpitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jadwal_jimpitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jadwal_jimpitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jadwal_jimpitGroupByOutputType[P]>
            : GetScalarType<T[P], Jadwal_jimpitGroupByOutputType[P]>
        }
      >
    >


  export type jadwal_jimpitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    members?: boolean
    note?: boolean
    dayId?: boolean
    createdAt?: boolean
    day?: boolean | daysDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal_jimpit"]>

  export type jadwal_jimpitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    members?: boolean
    note?: boolean
    dayId?: boolean
    createdAt?: boolean
    day?: boolean | daysDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal_jimpit"]>

  export type jadwal_jimpitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    members?: boolean
    note?: boolean
    dayId?: boolean
    createdAt?: boolean
    day?: boolean | daysDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal_jimpit"]>

  export type jadwal_jimpitSelectScalar = {
    id?: boolean
    members?: boolean
    note?: boolean
    dayId?: boolean
    createdAt?: boolean
  }

  export type jadwal_jimpitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "members" | "note" | "dayId" | "createdAt", ExtArgs["result"]["jadwal_jimpit"]>
  export type jadwal_jimpitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | daysDefaultArgs<ExtArgs>
  }
  export type jadwal_jimpitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | daysDefaultArgs<ExtArgs>
  }
  export type jadwal_jimpitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    day?: boolean | daysDefaultArgs<ExtArgs>
  }

  export type $jadwal_jimpitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "jadwal_jimpit"
    objects: {
      day: Prisma.$daysPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      members: string
      note: string
      dayId: number
      createdAt: Date
    }, ExtArgs["result"]["jadwal_jimpit"]>
    composites: {}
  }

  type jadwal_jimpitGetPayload<S extends boolean | null | undefined | jadwal_jimpitDefaultArgs> = $Result.GetResult<Prisma.$jadwal_jimpitPayload, S>

  type jadwal_jimpitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<jadwal_jimpitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jadwal_jimpitCountAggregateInputType | true
    }

  export interface jadwal_jimpitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['jadwal_jimpit'], meta: { name: 'jadwal_jimpit' } }
    /**
     * Find zero or one Jadwal_jimpit that matches the filter.
     * @param {jadwal_jimpitFindUniqueArgs} args - Arguments to find a Jadwal_jimpit
     * @example
     * // Get one Jadwal_jimpit
     * const jadwal_jimpit = await prisma.jadwal_jimpit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends jadwal_jimpitFindUniqueArgs>(args: SelectSubset<T, jadwal_jimpitFindUniqueArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal_jimpit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {jadwal_jimpitFindUniqueOrThrowArgs} args - Arguments to find a Jadwal_jimpit
     * @example
     * // Get one Jadwal_jimpit
     * const jadwal_jimpit = await prisma.jadwal_jimpit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends jadwal_jimpitFindUniqueOrThrowArgs>(args: SelectSubset<T, jadwal_jimpitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal_jimpit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_jimpitFindFirstArgs} args - Arguments to find a Jadwal_jimpit
     * @example
     * // Get one Jadwal_jimpit
     * const jadwal_jimpit = await prisma.jadwal_jimpit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends jadwal_jimpitFindFirstArgs>(args?: SelectSubset<T, jadwal_jimpitFindFirstArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal_jimpit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_jimpitFindFirstOrThrowArgs} args - Arguments to find a Jadwal_jimpit
     * @example
     * // Get one Jadwal_jimpit
     * const jadwal_jimpit = await prisma.jadwal_jimpit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends jadwal_jimpitFindFirstOrThrowArgs>(args?: SelectSubset<T, jadwal_jimpitFindFirstOrThrowArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwal_jimpits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_jimpitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwal_jimpits
     * const jadwal_jimpits = await prisma.jadwal_jimpit.findMany()
     * 
     * // Get first 10 Jadwal_jimpits
     * const jadwal_jimpits = await prisma.jadwal_jimpit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwal_jimpitWithIdOnly = await prisma.jadwal_jimpit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends jadwal_jimpitFindManyArgs>(args?: SelectSubset<T, jadwal_jimpitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal_jimpit.
     * @param {jadwal_jimpitCreateArgs} args - Arguments to create a Jadwal_jimpit.
     * @example
     * // Create one Jadwal_jimpit
     * const Jadwal_jimpit = await prisma.jadwal_jimpit.create({
     *   data: {
     *     // ... data to create a Jadwal_jimpit
     *   }
     * })
     * 
     */
    create<T extends jadwal_jimpitCreateArgs>(args: SelectSubset<T, jadwal_jimpitCreateArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwal_jimpits.
     * @param {jadwal_jimpitCreateManyArgs} args - Arguments to create many Jadwal_jimpits.
     * @example
     * // Create many Jadwal_jimpits
     * const jadwal_jimpit = await prisma.jadwal_jimpit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends jadwal_jimpitCreateManyArgs>(args?: SelectSubset<T, jadwal_jimpitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jadwal_jimpits and returns the data saved in the database.
     * @param {jadwal_jimpitCreateManyAndReturnArgs} args - Arguments to create many Jadwal_jimpits.
     * @example
     * // Create many Jadwal_jimpits
     * const jadwal_jimpit = await prisma.jadwal_jimpit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jadwal_jimpits and only return the `id`
     * const jadwal_jimpitWithIdOnly = await prisma.jadwal_jimpit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends jadwal_jimpitCreateManyAndReturnArgs>(args?: SelectSubset<T, jadwal_jimpitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jadwal_jimpit.
     * @param {jadwal_jimpitDeleteArgs} args - Arguments to delete one Jadwal_jimpit.
     * @example
     * // Delete one Jadwal_jimpit
     * const Jadwal_jimpit = await prisma.jadwal_jimpit.delete({
     *   where: {
     *     // ... filter to delete one Jadwal_jimpit
     *   }
     * })
     * 
     */
    delete<T extends jadwal_jimpitDeleteArgs>(args: SelectSubset<T, jadwal_jimpitDeleteArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal_jimpit.
     * @param {jadwal_jimpitUpdateArgs} args - Arguments to update one Jadwal_jimpit.
     * @example
     * // Update one Jadwal_jimpit
     * const jadwal_jimpit = await prisma.jadwal_jimpit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends jadwal_jimpitUpdateArgs>(args: SelectSubset<T, jadwal_jimpitUpdateArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwal_jimpits.
     * @param {jadwal_jimpitDeleteManyArgs} args - Arguments to filter Jadwal_jimpits to delete.
     * @example
     * // Delete a few Jadwal_jimpits
     * const { count } = await prisma.jadwal_jimpit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends jadwal_jimpitDeleteManyArgs>(args?: SelectSubset<T, jadwal_jimpitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwal_jimpits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_jimpitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwal_jimpits
     * const jadwal_jimpit = await prisma.jadwal_jimpit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends jadwal_jimpitUpdateManyArgs>(args: SelectSubset<T, jadwal_jimpitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwal_jimpits and returns the data updated in the database.
     * @param {jadwal_jimpitUpdateManyAndReturnArgs} args - Arguments to update many Jadwal_jimpits.
     * @example
     * // Update many Jadwal_jimpits
     * const jadwal_jimpit = await prisma.jadwal_jimpit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jadwal_jimpits and only return the `id`
     * const jadwal_jimpitWithIdOnly = await prisma.jadwal_jimpit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends jadwal_jimpitUpdateManyAndReturnArgs>(args: SelectSubset<T, jadwal_jimpitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jadwal_jimpit.
     * @param {jadwal_jimpitUpsertArgs} args - Arguments to update or create a Jadwal_jimpit.
     * @example
     * // Update or create a Jadwal_jimpit
     * const jadwal_jimpit = await prisma.jadwal_jimpit.upsert({
     *   create: {
     *     // ... data to create a Jadwal_jimpit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal_jimpit we want to update
     *   }
     * })
     */
    upsert<T extends jadwal_jimpitUpsertArgs>(args: SelectSubset<T, jadwal_jimpitUpsertArgs<ExtArgs>>): Prisma__jadwal_jimpitClient<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwal_jimpits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_jimpitCountArgs} args - Arguments to filter Jadwal_jimpits to count.
     * @example
     * // Count the number of Jadwal_jimpits
     * const count = await prisma.jadwal_jimpit.count({
     *   where: {
     *     // ... the filter for the Jadwal_jimpits we want to count
     *   }
     * })
    **/
    count<T extends jadwal_jimpitCountArgs>(
      args?: Subset<T, jadwal_jimpitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jadwal_jimpitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal_jimpit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_jimpitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Jadwal_jimpitAggregateArgs>(args: Subset<T, Jadwal_jimpitAggregateArgs>): Prisma.PrismaPromise<GetJadwal_jimpitAggregateType<T>>

    /**
     * Group by Jadwal_jimpit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {jadwal_jimpitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends jadwal_jimpitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: jadwal_jimpitGroupByArgs['orderBy'] }
        : { orderBy?: jadwal_jimpitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, jadwal_jimpitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwal_jimpitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the jadwal_jimpit model
   */
  readonly fields: jadwal_jimpitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for jadwal_jimpit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__jadwal_jimpitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    day<T extends daysDefaultArgs<ExtArgs> = {}>(args?: Subset<T, daysDefaultArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the jadwal_jimpit model
   */
  interface jadwal_jimpitFieldRefs {
    readonly id: FieldRef<"jadwal_jimpit", 'Int'>
    readonly members: FieldRef<"jadwal_jimpit", 'String'>
    readonly note: FieldRef<"jadwal_jimpit", 'String'>
    readonly dayId: FieldRef<"jadwal_jimpit", 'Int'>
    readonly createdAt: FieldRef<"jadwal_jimpit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * jadwal_jimpit findUnique
   */
  export type jadwal_jimpitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_jimpit to fetch.
     */
    where: jadwal_jimpitWhereUniqueInput
  }

  /**
   * jadwal_jimpit findUniqueOrThrow
   */
  export type jadwal_jimpitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_jimpit to fetch.
     */
    where: jadwal_jimpitWhereUniqueInput
  }

  /**
   * jadwal_jimpit findFirst
   */
  export type jadwal_jimpitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_jimpit to fetch.
     */
    where?: jadwal_jimpitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_jimpits to fetch.
     */
    orderBy?: jadwal_jimpitOrderByWithRelationInput | jadwal_jimpitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwal_jimpits.
     */
    cursor?: jadwal_jimpitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_jimpits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_jimpits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwal_jimpits.
     */
    distinct?: Jadwal_jimpitScalarFieldEnum | Jadwal_jimpitScalarFieldEnum[]
  }

  /**
   * jadwal_jimpit findFirstOrThrow
   */
  export type jadwal_jimpitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_jimpit to fetch.
     */
    where?: jadwal_jimpitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_jimpits to fetch.
     */
    orderBy?: jadwal_jimpitOrderByWithRelationInput | jadwal_jimpitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for jadwal_jimpits.
     */
    cursor?: jadwal_jimpitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_jimpits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_jimpits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of jadwal_jimpits.
     */
    distinct?: Jadwal_jimpitScalarFieldEnum | Jadwal_jimpitScalarFieldEnum[]
  }

  /**
   * jadwal_jimpit findMany
   */
  export type jadwal_jimpitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * Filter, which jadwal_jimpits to fetch.
     */
    where?: jadwal_jimpitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of jadwal_jimpits to fetch.
     */
    orderBy?: jadwal_jimpitOrderByWithRelationInput | jadwal_jimpitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing jadwal_jimpits.
     */
    cursor?: jadwal_jimpitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` jadwal_jimpits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` jadwal_jimpits.
     */
    skip?: number
    distinct?: Jadwal_jimpitScalarFieldEnum | Jadwal_jimpitScalarFieldEnum[]
  }

  /**
   * jadwal_jimpit create
   */
  export type jadwal_jimpitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * The data needed to create a jadwal_jimpit.
     */
    data: XOR<jadwal_jimpitCreateInput, jadwal_jimpitUncheckedCreateInput>
  }

  /**
   * jadwal_jimpit createMany
   */
  export type jadwal_jimpitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many jadwal_jimpits.
     */
    data: jadwal_jimpitCreateManyInput | jadwal_jimpitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * jadwal_jimpit createManyAndReturn
   */
  export type jadwal_jimpitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * The data used to create many jadwal_jimpits.
     */
    data: jadwal_jimpitCreateManyInput | jadwal_jimpitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * jadwal_jimpit update
   */
  export type jadwal_jimpitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * The data needed to update a jadwal_jimpit.
     */
    data: XOR<jadwal_jimpitUpdateInput, jadwal_jimpitUncheckedUpdateInput>
    /**
     * Choose, which jadwal_jimpit to update.
     */
    where: jadwal_jimpitWhereUniqueInput
  }

  /**
   * jadwal_jimpit updateMany
   */
  export type jadwal_jimpitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update jadwal_jimpits.
     */
    data: XOR<jadwal_jimpitUpdateManyMutationInput, jadwal_jimpitUncheckedUpdateManyInput>
    /**
     * Filter which jadwal_jimpits to update
     */
    where?: jadwal_jimpitWhereInput
    /**
     * Limit how many jadwal_jimpits to update.
     */
    limit?: number
  }

  /**
   * jadwal_jimpit updateManyAndReturn
   */
  export type jadwal_jimpitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * The data used to update jadwal_jimpits.
     */
    data: XOR<jadwal_jimpitUpdateManyMutationInput, jadwal_jimpitUncheckedUpdateManyInput>
    /**
     * Filter which jadwal_jimpits to update
     */
    where?: jadwal_jimpitWhereInput
    /**
     * Limit how many jadwal_jimpits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * jadwal_jimpit upsert
   */
  export type jadwal_jimpitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * The filter to search for the jadwal_jimpit to update in case it exists.
     */
    where: jadwal_jimpitWhereUniqueInput
    /**
     * In case the jadwal_jimpit found by the `where` argument doesn't exist, create a new jadwal_jimpit with this data.
     */
    create: XOR<jadwal_jimpitCreateInput, jadwal_jimpitUncheckedCreateInput>
    /**
     * In case the jadwal_jimpit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<jadwal_jimpitUpdateInput, jadwal_jimpitUncheckedUpdateInput>
  }

  /**
   * jadwal_jimpit delete
   */
  export type jadwal_jimpitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    /**
     * Filter which jadwal_jimpit to delete.
     */
    where: jadwal_jimpitWhereUniqueInput
  }

  /**
   * jadwal_jimpit deleteMany
   */
  export type jadwal_jimpitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which jadwal_jimpits to delete
     */
    where?: jadwal_jimpitWhereInput
    /**
     * Limit how many jadwal_jimpits to delete.
     */
    limit?: number
  }

  /**
   * jadwal_jimpit without action
   */
  export type jadwal_jimpitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
  }


  /**
   * Model days
   */

  export type AggregateDays = {
    _count: DaysCountAggregateOutputType | null
    _avg: DaysAvgAggregateOutputType | null
    _sum: DaysSumAggregateOutputType | null
    _min: DaysMinAggregateOutputType | null
    _max: DaysMaxAggregateOutputType | null
  }

  export type DaysAvgAggregateOutputType = {
    id: number | null
  }

  export type DaysSumAggregateOutputType = {
    id: number | null
  }

  export type DaysMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type DaysMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type DaysCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type DaysAvgAggregateInputType = {
    id?: true
  }

  export type DaysSumAggregateInputType = {
    id?: true
  }

  export type DaysMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type DaysMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type DaysCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type DaysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which days to aggregate.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned days
    **/
    _count?: true | DaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaysMaxAggregateInputType
  }

  export type GetDaysAggregateType<T extends DaysAggregateArgs> = {
        [P in keyof T & keyof AggregateDays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDays[P]>
      : GetScalarType<T[P], AggregateDays[P]>
  }




  export type daysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: daysWhereInput
    orderBy?: daysOrderByWithAggregationInput | daysOrderByWithAggregationInput[]
    by: DaysScalarFieldEnum[] | DaysScalarFieldEnum
    having?: daysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaysCountAggregateInputType | true
    _avg?: DaysAvgAggregateInputType
    _sum?: DaysSumAggregateInputType
    _min?: DaysMinAggregateInputType
    _max?: DaysMaxAggregateInputType
  }

  export type DaysGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: DaysCountAggregateOutputType | null
    _avg: DaysAvgAggregateOutputType | null
    _sum: DaysSumAggregateOutputType | null
    _min: DaysMinAggregateOutputType | null
    _max: DaysMaxAggregateOutputType | null
  }

  type GetDaysGroupByPayload<T extends daysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaysGroupByOutputType[P]>
            : GetScalarType<T[P], DaysGroupByOutputType[P]>
        }
      >
    >


  export type daysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    jadwals?: boolean | days$jadwalsArgs<ExtArgs>
    _count?: boolean | DaysCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["days"]>

  export type daysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["days"]>

  export type daysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["days"]>

  export type daysSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type daysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["days"]>
  export type daysInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwals?: boolean | days$jadwalsArgs<ExtArgs>
    _count?: boolean | DaysCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type daysIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type daysIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $daysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "days"
    objects: {
      jadwals: Prisma.$jadwal_jimpitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["days"]>
    composites: {}
  }

  type daysGetPayload<S extends boolean | null | undefined | daysDefaultArgs> = $Result.GetResult<Prisma.$daysPayload, S>

  type daysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<daysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DaysCountAggregateInputType | true
    }

  export interface daysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['days'], meta: { name: 'days' } }
    /**
     * Find zero or one Days that matches the filter.
     * @param {daysFindUniqueArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends daysFindUniqueArgs>(args: SelectSubset<T, daysFindUniqueArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Days that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {daysFindUniqueOrThrowArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends daysFindUniqueOrThrowArgs>(args: SelectSubset<T, daysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysFindFirstArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends daysFindFirstArgs>(args?: SelectSubset<T, daysFindFirstArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Days that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysFindFirstOrThrowArgs} args - Arguments to find a Days
     * @example
     * // Get one Days
     * const days = await prisma.days.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends daysFindFirstOrThrowArgs>(args?: SelectSubset<T, daysFindFirstOrThrowArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Days that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Days
     * const days = await prisma.days.findMany()
     * 
     * // Get first 10 Days
     * const days = await prisma.days.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daysWithIdOnly = await prisma.days.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends daysFindManyArgs>(args?: SelectSubset<T, daysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Days.
     * @param {daysCreateArgs} args - Arguments to create a Days.
     * @example
     * // Create one Days
     * const Days = await prisma.days.create({
     *   data: {
     *     // ... data to create a Days
     *   }
     * })
     * 
     */
    create<T extends daysCreateArgs>(args: SelectSubset<T, daysCreateArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Days.
     * @param {daysCreateManyArgs} args - Arguments to create many Days.
     * @example
     * // Create many Days
     * const days = await prisma.days.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends daysCreateManyArgs>(args?: SelectSubset<T, daysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Days and returns the data saved in the database.
     * @param {daysCreateManyAndReturnArgs} args - Arguments to create many Days.
     * @example
     * // Create many Days
     * const days = await prisma.days.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Days and only return the `id`
     * const daysWithIdOnly = await prisma.days.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends daysCreateManyAndReturnArgs>(args?: SelectSubset<T, daysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Days.
     * @param {daysDeleteArgs} args - Arguments to delete one Days.
     * @example
     * // Delete one Days
     * const Days = await prisma.days.delete({
     *   where: {
     *     // ... filter to delete one Days
     *   }
     * })
     * 
     */
    delete<T extends daysDeleteArgs>(args: SelectSubset<T, daysDeleteArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Days.
     * @param {daysUpdateArgs} args - Arguments to update one Days.
     * @example
     * // Update one Days
     * const days = await prisma.days.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends daysUpdateArgs>(args: SelectSubset<T, daysUpdateArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Days.
     * @param {daysDeleteManyArgs} args - Arguments to filter Days to delete.
     * @example
     * // Delete a few Days
     * const { count } = await prisma.days.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends daysDeleteManyArgs>(args?: SelectSubset<T, daysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Days
     * const days = await prisma.days.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends daysUpdateManyArgs>(args: SelectSubset<T, daysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Days and returns the data updated in the database.
     * @param {daysUpdateManyAndReturnArgs} args - Arguments to update many Days.
     * @example
     * // Update many Days
     * const days = await prisma.days.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Days and only return the `id`
     * const daysWithIdOnly = await prisma.days.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends daysUpdateManyAndReturnArgs>(args: SelectSubset<T, daysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Days.
     * @param {daysUpsertArgs} args - Arguments to update or create a Days.
     * @example
     * // Update or create a Days
     * const days = await prisma.days.upsert({
     *   create: {
     *     // ... data to create a Days
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Days we want to update
     *   }
     * })
     */
    upsert<T extends daysUpsertArgs>(args: SelectSubset<T, daysUpsertArgs<ExtArgs>>): Prisma__daysClient<$Result.GetResult<Prisma.$daysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysCountArgs} args - Arguments to filter Days to count.
     * @example
     * // Count the number of Days
     * const count = await prisma.days.count({
     *   where: {
     *     // ... the filter for the Days we want to count
     *   }
     * })
    **/
    count<T extends daysCountArgs>(
      args?: Subset<T, daysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DaysAggregateArgs>(args: Subset<T, DaysAggregateArgs>): Prisma.PrismaPromise<GetDaysAggregateType<T>>

    /**
     * Group by Days.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {daysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends daysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: daysGroupByArgs['orderBy'] }
        : { orderBy?: daysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, daysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the days model
   */
  readonly fields: daysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for days.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__daysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwals<T extends days$jadwalsArgs<ExtArgs> = {}>(args?: Subset<T, days$jadwalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$jadwal_jimpitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the days model
   */
  interface daysFieldRefs {
    readonly id: FieldRef<"days", 'Int'>
    readonly name: FieldRef<"days", 'String'>
    readonly createdAt: FieldRef<"days", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * days findUnique
   */
  export type daysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days findUniqueOrThrow
   */
  export type daysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days findFirst
   */
  export type daysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for days.
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of days.
     */
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }

  /**
   * days findFirstOrThrow
   */
  export type daysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for days.
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of days.
     */
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }

  /**
   * days findMany
   */
  export type daysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * Filter, which days to fetch.
     */
    where?: daysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of days to fetch.
     */
    orderBy?: daysOrderByWithRelationInput | daysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing days.
     */
    cursor?: daysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` days from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` days.
     */
    skip?: number
    distinct?: DaysScalarFieldEnum | DaysScalarFieldEnum[]
  }

  /**
   * days create
   */
  export type daysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * The data needed to create a days.
     */
    data: XOR<daysCreateInput, daysUncheckedCreateInput>
  }

  /**
   * days createMany
   */
  export type daysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many days.
     */
    data: daysCreateManyInput | daysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * days createManyAndReturn
   */
  export type daysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The data used to create many days.
     */
    data: daysCreateManyInput | daysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * days update
   */
  export type daysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * The data needed to update a days.
     */
    data: XOR<daysUpdateInput, daysUncheckedUpdateInput>
    /**
     * Choose, which days to update.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days updateMany
   */
  export type daysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update days.
     */
    data: XOR<daysUpdateManyMutationInput, daysUncheckedUpdateManyInput>
    /**
     * Filter which days to update
     */
    where?: daysWhereInput
    /**
     * Limit how many days to update.
     */
    limit?: number
  }

  /**
   * days updateManyAndReturn
   */
  export type daysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * The data used to update days.
     */
    data: XOR<daysUpdateManyMutationInput, daysUncheckedUpdateManyInput>
    /**
     * Filter which days to update
     */
    where?: daysWhereInput
    /**
     * Limit how many days to update.
     */
    limit?: number
  }

  /**
   * days upsert
   */
  export type daysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * The filter to search for the days to update in case it exists.
     */
    where: daysWhereUniqueInput
    /**
     * In case the days found by the `where` argument doesn't exist, create a new days with this data.
     */
    create: XOR<daysCreateInput, daysUncheckedCreateInput>
    /**
     * In case the days was found with the provided `where` argument, update it with this data.
     */
    update: XOR<daysUpdateInput, daysUncheckedUpdateInput>
  }

  /**
   * days delete
   */
  export type daysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
    /**
     * Filter which days to delete.
     */
    where: daysWhereUniqueInput
  }

  /**
   * days deleteMany
   */
  export type daysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which days to delete
     */
    where?: daysWhereInput
    /**
     * Limit how many days to delete.
     */
    limit?: number
  }

  /**
   * days.jadwals
   */
  export type days$jadwalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the jadwal_jimpit
     */
    select?: jadwal_jimpitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the jadwal_jimpit
     */
    omit?: jadwal_jimpitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: jadwal_jimpitInclude<ExtArgs> | null
    where?: jadwal_jimpitWhereInput
    orderBy?: jadwal_jimpitOrderByWithRelationInput | jadwal_jimpitOrderByWithRelationInput[]
    cursor?: jadwal_jimpitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_jimpitScalarFieldEnum | Jadwal_jimpitScalarFieldEnum[]
  }

  /**
   * days without action
   */
  export type daysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the days
     */
    select?: daysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the days
     */
    omit?: daysOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: daysInclude<ExtArgs> | null
  }


  /**
   * Model resson
   */

  export type AggregateResson = {
    _count: RessonCountAggregateOutputType | null
    _avg: RessonAvgAggregateOutputType | null
    _sum: RessonSumAggregateOutputType | null
    _min: RessonMinAggregateOutputType | null
    _max: RessonMaxAggregateOutputType | null
  }

  export type RessonAvgAggregateOutputType = {
    id: number | null
    reassonId: number | null
  }

  export type RessonSumAggregateOutputType = {
    id: number | null
    reassonId: number | null
  }

  export type RessonMinAggregateOutputType = {
    id: number | null
    reassonId: number | null
    content: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type RessonMaxAggregateOutputType = {
    id: number | null
    reassonId: number | null
    content: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type RessonCountAggregateOutputType = {
    id: number
    reassonId: number
    content: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type RessonAvgAggregateInputType = {
    id?: true
    reassonId?: true
  }

  export type RessonSumAggregateInputType = {
    id?: true
    reassonId?: true
  }

  export type RessonMinAggregateInputType = {
    id?: true
    reassonId?: true
    content?: true
    createdAt?: true
    updateAt?: true
  }

  export type RessonMaxAggregateInputType = {
    id?: true
    reassonId?: true
    content?: true
    createdAt?: true
    updateAt?: true
  }

  export type RessonCountAggregateInputType = {
    id?: true
    reassonId?: true
    content?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type RessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resson to aggregate.
     */
    where?: ressonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressons to fetch.
     */
    orderBy?: ressonOrderByWithRelationInput | ressonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ressonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ressons
    **/
    _count?: true | RessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RessonMaxAggregateInputType
  }

  export type GetRessonAggregateType<T extends RessonAggregateArgs> = {
        [P in keyof T & keyof AggregateResson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResson[P]>
      : GetScalarType<T[P], AggregateResson[P]>
  }




  export type ressonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ressonWhereInput
    orderBy?: ressonOrderByWithAggregationInput | ressonOrderByWithAggregationInput[]
    by: RessonScalarFieldEnum[] | RessonScalarFieldEnum
    having?: ressonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RessonCountAggregateInputType | true
    _avg?: RessonAvgAggregateInputType
    _sum?: RessonSumAggregateInputType
    _min?: RessonMinAggregateInputType
    _max?: RessonMaxAggregateInputType
  }

  export type RessonGroupByOutputType = {
    id: number
    reassonId: number
    content: string
    createdAt: Date
    updateAt: Date
    _count: RessonCountAggregateOutputType | null
    _avg: RessonAvgAggregateOutputType | null
    _sum: RessonSumAggregateOutputType | null
    _min: RessonMinAggregateOutputType | null
    _max: RessonMaxAggregateOutputType | null
  }

  type GetRessonGroupByPayload<T extends ressonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RessonGroupByOutputType[P]>
            : GetScalarType<T[P], RessonGroupByOutputType[P]>
        }
      >
    >


  export type ressonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reassonId?: boolean
    content?: boolean
    createdAt?: boolean
    updateAt?: boolean
    resson?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resson"]>

  export type ressonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reassonId?: boolean
    content?: boolean
    createdAt?: boolean
    updateAt?: boolean
    resson?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resson"]>

  export type ressonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reassonId?: boolean
    content?: boolean
    createdAt?: boolean
    updateAt?: boolean
    resson?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resson"]>

  export type ressonSelectScalar = {
    id?: boolean
    reassonId?: boolean
    content?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type ressonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reassonId" | "content" | "createdAt" | "updateAt", ExtArgs["result"]["resson"]>
  export type ressonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resson?: boolean | userDefaultArgs<ExtArgs>
  }
  export type ressonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resson?: boolean | userDefaultArgs<ExtArgs>
  }
  export type ressonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resson?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $ressonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resson"
    objects: {
      resson: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reassonId: number
      content: string
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["resson"]>
    composites: {}
  }

  type ressonGetPayload<S extends boolean | null | undefined | ressonDefaultArgs> = $Result.GetResult<Prisma.$ressonPayload, S>

  type ressonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ressonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RessonCountAggregateInputType | true
    }

  export interface ressonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resson'], meta: { name: 'resson' } }
    /**
     * Find zero or one Resson that matches the filter.
     * @param {ressonFindUniqueArgs} args - Arguments to find a Resson
     * @example
     * // Get one Resson
     * const resson = await prisma.resson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ressonFindUniqueArgs>(args: SelectSubset<T, ressonFindUniqueArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ressonFindUniqueOrThrowArgs} args - Arguments to find a Resson
     * @example
     * // Get one Resson
     * const resson = await prisma.resson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ressonFindUniqueOrThrowArgs>(args: SelectSubset<T, ressonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressonFindFirstArgs} args - Arguments to find a Resson
     * @example
     * // Get one Resson
     * const resson = await prisma.resson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ressonFindFirstArgs>(args?: SelectSubset<T, ressonFindFirstArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressonFindFirstOrThrowArgs} args - Arguments to find a Resson
     * @example
     * // Get one Resson
     * const resson = await prisma.resson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ressonFindFirstOrThrowArgs>(args?: SelectSubset<T, ressonFindFirstOrThrowArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ressons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressons
     * const ressons = await prisma.resson.findMany()
     * 
     * // Get first 10 Ressons
     * const ressons = await prisma.resson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ressonWithIdOnly = await prisma.resson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ressonFindManyArgs>(args?: SelectSubset<T, ressonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resson.
     * @param {ressonCreateArgs} args - Arguments to create a Resson.
     * @example
     * // Create one Resson
     * const Resson = await prisma.resson.create({
     *   data: {
     *     // ... data to create a Resson
     *   }
     * })
     * 
     */
    create<T extends ressonCreateArgs>(args: SelectSubset<T, ressonCreateArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ressons.
     * @param {ressonCreateManyArgs} args - Arguments to create many Ressons.
     * @example
     * // Create many Ressons
     * const resson = await prisma.resson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ressonCreateManyArgs>(args?: SelectSubset<T, ressonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ressons and returns the data saved in the database.
     * @param {ressonCreateManyAndReturnArgs} args - Arguments to create many Ressons.
     * @example
     * // Create many Ressons
     * const resson = await prisma.resson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ressons and only return the `id`
     * const ressonWithIdOnly = await prisma.resson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ressonCreateManyAndReturnArgs>(args?: SelectSubset<T, ressonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resson.
     * @param {ressonDeleteArgs} args - Arguments to delete one Resson.
     * @example
     * // Delete one Resson
     * const Resson = await prisma.resson.delete({
     *   where: {
     *     // ... filter to delete one Resson
     *   }
     * })
     * 
     */
    delete<T extends ressonDeleteArgs>(args: SelectSubset<T, ressonDeleteArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resson.
     * @param {ressonUpdateArgs} args - Arguments to update one Resson.
     * @example
     * // Update one Resson
     * const resson = await prisma.resson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ressonUpdateArgs>(args: SelectSubset<T, ressonUpdateArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ressons.
     * @param {ressonDeleteManyArgs} args - Arguments to filter Ressons to delete.
     * @example
     * // Delete a few Ressons
     * const { count } = await prisma.resson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ressonDeleteManyArgs>(args?: SelectSubset<T, ressonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressons
     * const resson = await prisma.resson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ressonUpdateManyArgs>(args: SelectSubset<T, ressonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressons and returns the data updated in the database.
     * @param {ressonUpdateManyAndReturnArgs} args - Arguments to update many Ressons.
     * @example
     * // Update many Ressons
     * const resson = await prisma.resson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ressons and only return the `id`
     * const ressonWithIdOnly = await prisma.resson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ressonUpdateManyAndReturnArgs>(args: SelectSubset<T, ressonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resson.
     * @param {ressonUpsertArgs} args - Arguments to update or create a Resson.
     * @example
     * // Update or create a Resson
     * const resson = await prisma.resson.upsert({
     *   create: {
     *     // ... data to create a Resson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resson we want to update
     *   }
     * })
     */
    upsert<T extends ressonUpsertArgs>(args: SelectSubset<T, ressonUpsertArgs<ExtArgs>>): Prisma__ressonClient<$Result.GetResult<Prisma.$ressonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ressons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressonCountArgs} args - Arguments to filter Ressons to count.
     * @example
     * // Count the number of Ressons
     * const count = await prisma.resson.count({
     *   where: {
     *     // ... the filter for the Ressons we want to count
     *   }
     * })
    **/
    count<T extends ressonCountArgs>(
      args?: Subset<T, ressonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RessonAggregateArgs>(args: Subset<T, RessonAggregateArgs>): Prisma.PrismaPromise<GetRessonAggregateType<T>>

    /**
     * Group by Resson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ressonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ressonGroupByArgs['orderBy'] }
        : { orderBy?: ressonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ressonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resson model
   */
  readonly fields: ressonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ressonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resson<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the resson model
   */
  interface ressonFieldRefs {
    readonly id: FieldRef<"resson", 'Int'>
    readonly reassonId: FieldRef<"resson", 'Int'>
    readonly content: FieldRef<"resson", 'String'>
    readonly createdAt: FieldRef<"resson", 'DateTime'>
    readonly updateAt: FieldRef<"resson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * resson findUnique
   */
  export type ressonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * Filter, which resson to fetch.
     */
    where: ressonWhereUniqueInput
  }

  /**
   * resson findUniqueOrThrow
   */
  export type ressonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * Filter, which resson to fetch.
     */
    where: ressonWhereUniqueInput
  }

  /**
   * resson findFirst
   */
  export type ressonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * Filter, which resson to fetch.
     */
    where?: ressonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressons to fetch.
     */
    orderBy?: ressonOrderByWithRelationInput | ressonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ressons.
     */
    cursor?: ressonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ressons.
     */
    distinct?: RessonScalarFieldEnum | RessonScalarFieldEnum[]
  }

  /**
   * resson findFirstOrThrow
   */
  export type ressonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * Filter, which resson to fetch.
     */
    where?: ressonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressons to fetch.
     */
    orderBy?: ressonOrderByWithRelationInput | ressonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ressons.
     */
    cursor?: ressonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ressons.
     */
    distinct?: RessonScalarFieldEnum | RessonScalarFieldEnum[]
  }

  /**
   * resson findMany
   */
  export type ressonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * Filter, which ressons to fetch.
     */
    where?: ressonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressons to fetch.
     */
    orderBy?: ressonOrderByWithRelationInput | ressonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ressons.
     */
    cursor?: ressonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressons.
     */
    skip?: number
    distinct?: RessonScalarFieldEnum | RessonScalarFieldEnum[]
  }

  /**
   * resson create
   */
  export type ressonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * The data needed to create a resson.
     */
    data: XOR<ressonCreateInput, ressonUncheckedCreateInput>
  }

  /**
   * resson createMany
   */
  export type ressonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ressons.
     */
    data: ressonCreateManyInput | ressonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resson createManyAndReturn
   */
  export type ressonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * The data used to create many ressons.
     */
    data: ressonCreateManyInput | ressonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * resson update
   */
  export type ressonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * The data needed to update a resson.
     */
    data: XOR<ressonUpdateInput, ressonUncheckedUpdateInput>
    /**
     * Choose, which resson to update.
     */
    where: ressonWhereUniqueInput
  }

  /**
   * resson updateMany
   */
  export type ressonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ressons.
     */
    data: XOR<ressonUpdateManyMutationInput, ressonUncheckedUpdateManyInput>
    /**
     * Filter which ressons to update
     */
    where?: ressonWhereInput
    /**
     * Limit how many ressons to update.
     */
    limit?: number
  }

  /**
   * resson updateManyAndReturn
   */
  export type ressonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * The data used to update ressons.
     */
    data: XOR<ressonUpdateManyMutationInput, ressonUncheckedUpdateManyInput>
    /**
     * Filter which ressons to update
     */
    where?: ressonWhereInput
    /**
     * Limit how many ressons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * resson upsert
   */
  export type ressonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * The filter to search for the resson to update in case it exists.
     */
    where: ressonWhereUniqueInput
    /**
     * In case the resson found by the `where` argument doesn't exist, create a new resson with this data.
     */
    create: XOR<ressonCreateInput, ressonUncheckedCreateInput>
    /**
     * In case the resson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ressonUpdateInput, ressonUncheckedUpdateInput>
  }

  /**
   * resson delete
   */
  export type ressonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
    /**
     * Filter which resson to delete.
     */
    where: ressonWhereUniqueInput
  }

  /**
   * resson deleteMany
   */
  export type ressonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ressons to delete
     */
    where?: ressonWhereInput
    /**
     * Limit how many ressons to delete.
     */
    limit?: number
  }

  /**
   * resson without action
   */
  export type ressonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resson
     */
    select?: ressonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resson
     */
    omit?: ressonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ressonInclude<ExtArgs> | null
  }


  /**
   * Model feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    CreatedAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    CreatedAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    title: number
    content: number
    CreatedAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    CreatedAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    CreatedAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    CreatedAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedback to aggregate.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type feedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: feedbackWhereInput
    orderBy?: feedbackOrderByWithAggregationInput | feedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: feedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    title: string
    content: string
    CreatedAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends feedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type feedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    CreatedAt?: boolean
  }, ExtArgs["result"]["feedback"]>

  export type feedbackSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    CreatedAt?: boolean
  }

  export type feedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "CreatedAt", ExtArgs["result"]["feedback"]>

  export type $feedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "feedback"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      CreatedAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type feedbackGetPayload<S extends boolean | null | undefined | feedbackDefaultArgs> = $Result.GetResult<Prisma.$feedbackPayload, S>

  type feedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<feedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface feedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feedback'], meta: { name: 'feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {feedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedbackFindUniqueArgs>(args: SelectSubset<T, feedbackFindUniqueArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, feedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedbackFindFirstArgs>(args?: SelectSubset<T, feedbackFindFirstArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, feedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends feedbackFindManyArgs>(args?: SelectSubset<T, feedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {feedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends feedbackCreateArgs>(args: SelectSubset<T, feedbackCreateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {feedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends feedbackCreateManyArgs>(args?: SelectSubset<T, feedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {feedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends feedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, feedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {feedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends feedbackDeleteArgs>(args: SelectSubset<T, feedbackDeleteArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {feedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends feedbackUpdateArgs>(args: SelectSubset<T, feedbackUpdateArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {feedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends feedbackDeleteManyArgs>(args?: SelectSubset<T, feedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends feedbackUpdateManyArgs>(args: SelectSubset<T, feedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {feedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends feedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, feedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {feedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends feedbackUpsertArgs>(args: SelectSubset<T, feedbackUpsertArgs<ExtArgs>>): Prisma__feedbackClient<$Result.GetResult<Prisma.$feedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends feedbackCountArgs>(
      args?: Subset<T, feedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends feedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedbackGroupByArgs['orderBy'] }
        : { orderBy?: feedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, feedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the feedback model
   */
  readonly fields: feedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the feedback model
   */
  interface feedbackFieldRefs {
    readonly id: FieldRef<"feedback", 'Int'>
    readonly title: FieldRef<"feedback", 'String'>
    readonly content: FieldRef<"feedback", 'String'>
    readonly CreatedAt: FieldRef<"feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * feedback findUnique
   */
  export type feedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findUniqueOrThrow
   */
  export type feedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback findFirst
   */
  export type feedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findFirstOrThrow
   */
  export type feedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedback to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback findMany
   */
  export type feedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter, which feedbacks to fetch.
     */
    where?: feedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of feedbacks to fetch.
     */
    orderBy?: feedbackOrderByWithRelationInput | feedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing feedbacks.
     */
    cursor?: feedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * feedback create
   */
  export type feedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data needed to create a feedback.
     */
    data: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
  }

  /**
   * feedback createMany
   */
  export type feedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback createManyAndReturn
   */
  export type feedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data used to create many feedbacks.
     */
    data: feedbackCreateManyInput | feedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * feedback update
   */
  export type feedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data needed to update a feedback.
     */
    data: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
    /**
     * Choose, which feedback to update.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback updateMany
   */
  export type feedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback updateManyAndReturn
   */
  export type feedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The data used to update feedbacks.
     */
    data: XOR<feedbackUpdateManyMutationInput, feedbackUncheckedUpdateManyInput>
    /**
     * Filter which feedbacks to update
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to update.
     */
    limit?: number
  }

  /**
   * feedback upsert
   */
  export type feedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * The filter to search for the feedback to update in case it exists.
     */
    where: feedbackWhereUniqueInput
    /**
     * In case the feedback found by the `where` argument doesn't exist, create a new feedback with this data.
     */
    create: XOR<feedbackCreateInput, feedbackUncheckedCreateInput>
    /**
     * In case the feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedbackUpdateInput, feedbackUncheckedUpdateInput>
  }

  /**
   * feedback delete
   */
  export type feedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
    /**
     * Filter which feedback to delete.
     */
    where: feedbackWhereUniqueInput
  }

  /**
   * feedback deleteMany
   */
  export type feedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which feedbacks to delete
     */
    where?: feedbackWhereInput
    /**
     * Limit how many feedbacks to delete.
     */
    limit?: number
  }

  /**
   * feedback without action
   */
  export type feedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feedback
     */
    select?: feedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the feedback
     */
    omit?: feedbackOmit<ExtArgs> | null
  }


  /**
   * Model noted
   */

  export type AggregateNoted = {
    _count: NotedCountAggregateOutputType | null
    _avg: NotedAvgAggregateOutputType | null
    _sum: NotedSumAggregateOutputType | null
    _min: NotedMinAggregateOutputType | null
    _max: NotedMaxAggregateOutputType | null
  }

  export type NotedAvgAggregateOutputType = {
    id: number | null
  }

  export type NotedSumAggregateOutputType = {
    id: number | null
  }

  export type NotedMinAggregateOutputType = {
    id: number | null
    content: string | null
    is_active: $Enums.an_active | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type NotedMaxAggregateOutputType = {
    id: number | null
    content: string | null
    is_active: $Enums.an_active | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type NotedCountAggregateOutputType = {
    id: number
    content: number
    is_active: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type NotedAvgAggregateInputType = {
    id?: true
  }

  export type NotedSumAggregateInputType = {
    id?: true
  }

  export type NotedMinAggregateInputType = {
    id?: true
    content?: true
    is_active?: true
    createdAt?: true
    updateAt?: true
  }

  export type NotedMaxAggregateInputType = {
    id?: true
    content?: true
    is_active?: true
    createdAt?: true
    updateAt?: true
  }

  export type NotedCountAggregateInputType = {
    id?: true
    content?: true
    is_active?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type NotedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which noted to aggregate.
     */
    where?: notedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noteds to fetch.
     */
    orderBy?: notedOrderByWithRelationInput | notedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned noteds
    **/
    _count?: true | NotedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotedMaxAggregateInputType
  }

  export type GetNotedAggregateType<T extends NotedAggregateArgs> = {
        [P in keyof T & keyof AggregateNoted]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoted[P]>
      : GetScalarType<T[P], AggregateNoted[P]>
  }




  export type notedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notedWhereInput
    orderBy?: notedOrderByWithAggregationInput | notedOrderByWithAggregationInput[]
    by: NotedScalarFieldEnum[] | NotedScalarFieldEnum
    having?: notedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotedCountAggregateInputType | true
    _avg?: NotedAvgAggregateInputType
    _sum?: NotedSumAggregateInputType
    _min?: NotedMinAggregateInputType
    _max?: NotedMaxAggregateInputType
  }

  export type NotedGroupByOutputType = {
    id: number
    content: string
    is_active: $Enums.an_active
    createdAt: Date
    updateAt: Date
    _count: NotedCountAggregateOutputType | null
    _avg: NotedAvgAggregateOutputType | null
    _sum: NotedSumAggregateOutputType | null
    _min: NotedMinAggregateOutputType | null
    _max: NotedMaxAggregateOutputType | null
  }

  type GetNotedGroupByPayload<T extends notedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotedGroupByOutputType[P]>
            : GetScalarType<T[P], NotedGroupByOutputType[P]>
        }
      >
    >


  export type notedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["noted"]>

  export type notedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["noted"]>

  export type notedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["noted"]>

  export type notedSelectScalar = {
    id?: boolean
    content?: boolean
    is_active?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type notedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "is_active" | "createdAt" | "updateAt", ExtArgs["result"]["noted"]>

  export type $notedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "noted"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      is_active: $Enums.an_active
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["noted"]>
    composites: {}
  }

  type notedGetPayload<S extends boolean | null | undefined | notedDefaultArgs> = $Result.GetResult<Prisma.$notedPayload, S>

  type notedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotedCountAggregateInputType | true
    }

  export interface notedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['noted'], meta: { name: 'noted' } }
    /**
     * Find zero or one Noted that matches the filter.
     * @param {notedFindUniqueArgs} args - Arguments to find a Noted
     * @example
     * // Get one Noted
     * const noted = await prisma.noted.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notedFindUniqueArgs>(args: SelectSubset<T, notedFindUniqueArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Noted that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notedFindUniqueOrThrowArgs} args - Arguments to find a Noted
     * @example
     * // Get one Noted
     * const noted = await prisma.noted.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notedFindUniqueOrThrowArgs>(args: SelectSubset<T, notedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noted that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notedFindFirstArgs} args - Arguments to find a Noted
     * @example
     * // Get one Noted
     * const noted = await prisma.noted.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notedFindFirstArgs>(args?: SelectSubset<T, notedFindFirstArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Noted that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notedFindFirstOrThrowArgs} args - Arguments to find a Noted
     * @example
     * // Get one Noted
     * const noted = await prisma.noted.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notedFindFirstOrThrowArgs>(args?: SelectSubset<T, notedFindFirstOrThrowArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Noteds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Noteds
     * const noteds = await prisma.noted.findMany()
     * 
     * // Get first 10 Noteds
     * const noteds = await prisma.noted.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notedWithIdOnly = await prisma.noted.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notedFindManyArgs>(args?: SelectSubset<T, notedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Noted.
     * @param {notedCreateArgs} args - Arguments to create a Noted.
     * @example
     * // Create one Noted
     * const Noted = await prisma.noted.create({
     *   data: {
     *     // ... data to create a Noted
     *   }
     * })
     * 
     */
    create<T extends notedCreateArgs>(args: SelectSubset<T, notedCreateArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Noteds.
     * @param {notedCreateManyArgs} args - Arguments to create many Noteds.
     * @example
     * // Create many Noteds
     * const noted = await prisma.noted.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notedCreateManyArgs>(args?: SelectSubset<T, notedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Noteds and returns the data saved in the database.
     * @param {notedCreateManyAndReturnArgs} args - Arguments to create many Noteds.
     * @example
     * // Create many Noteds
     * const noted = await prisma.noted.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Noteds and only return the `id`
     * const notedWithIdOnly = await prisma.noted.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notedCreateManyAndReturnArgs>(args?: SelectSubset<T, notedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Noted.
     * @param {notedDeleteArgs} args - Arguments to delete one Noted.
     * @example
     * // Delete one Noted
     * const Noted = await prisma.noted.delete({
     *   where: {
     *     // ... filter to delete one Noted
     *   }
     * })
     * 
     */
    delete<T extends notedDeleteArgs>(args: SelectSubset<T, notedDeleteArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Noted.
     * @param {notedUpdateArgs} args - Arguments to update one Noted.
     * @example
     * // Update one Noted
     * const noted = await prisma.noted.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notedUpdateArgs>(args: SelectSubset<T, notedUpdateArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Noteds.
     * @param {notedDeleteManyArgs} args - Arguments to filter Noteds to delete.
     * @example
     * // Delete a few Noteds
     * const { count } = await prisma.noted.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notedDeleteManyArgs>(args?: SelectSubset<T, notedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Noteds
     * const noted = await prisma.noted.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notedUpdateManyArgs>(args: SelectSubset<T, notedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Noteds and returns the data updated in the database.
     * @param {notedUpdateManyAndReturnArgs} args - Arguments to update many Noteds.
     * @example
     * // Update many Noteds
     * const noted = await prisma.noted.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Noteds and only return the `id`
     * const notedWithIdOnly = await prisma.noted.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notedUpdateManyAndReturnArgs>(args: SelectSubset<T, notedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Noted.
     * @param {notedUpsertArgs} args - Arguments to update or create a Noted.
     * @example
     * // Update or create a Noted
     * const noted = await prisma.noted.upsert({
     *   create: {
     *     // ... data to create a Noted
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Noted we want to update
     *   }
     * })
     */
    upsert<T extends notedUpsertArgs>(args: SelectSubset<T, notedUpsertArgs<ExtArgs>>): Prisma__notedClient<$Result.GetResult<Prisma.$notedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Noteds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notedCountArgs} args - Arguments to filter Noteds to count.
     * @example
     * // Count the number of Noteds
     * const count = await prisma.noted.count({
     *   where: {
     *     // ... the filter for the Noteds we want to count
     *   }
     * })
    **/
    count<T extends notedCountArgs>(
      args?: Subset<T, notedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Noted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotedAggregateArgs>(args: Subset<T, NotedAggregateArgs>): Prisma.PrismaPromise<GetNotedAggregateType<T>>

    /**
     * Group by Noted.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notedGroupByArgs['orderBy'] }
        : { orderBy?: notedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the noted model
   */
  readonly fields: notedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for noted.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the noted model
   */
  interface notedFieldRefs {
    readonly id: FieldRef<"noted", 'Int'>
    readonly content: FieldRef<"noted", 'String'>
    readonly is_active: FieldRef<"noted", 'an_active'>
    readonly createdAt: FieldRef<"noted", 'DateTime'>
    readonly updateAt: FieldRef<"noted", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * noted findUnique
   */
  export type notedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * Filter, which noted to fetch.
     */
    where: notedWhereUniqueInput
  }

  /**
   * noted findUniqueOrThrow
   */
  export type notedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * Filter, which noted to fetch.
     */
    where: notedWhereUniqueInput
  }

  /**
   * noted findFirst
   */
  export type notedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * Filter, which noted to fetch.
     */
    where?: notedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noteds to fetch.
     */
    orderBy?: notedOrderByWithRelationInput | notedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for noteds.
     */
    cursor?: notedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of noteds.
     */
    distinct?: NotedScalarFieldEnum | NotedScalarFieldEnum[]
  }

  /**
   * noted findFirstOrThrow
   */
  export type notedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * Filter, which noted to fetch.
     */
    where?: notedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noteds to fetch.
     */
    orderBy?: notedOrderByWithRelationInput | notedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for noteds.
     */
    cursor?: notedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noteds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of noteds.
     */
    distinct?: NotedScalarFieldEnum | NotedScalarFieldEnum[]
  }

  /**
   * noted findMany
   */
  export type notedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * Filter, which noteds to fetch.
     */
    where?: notedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of noteds to fetch.
     */
    orderBy?: notedOrderByWithRelationInput | notedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing noteds.
     */
    cursor?: notedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` noteds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` noteds.
     */
    skip?: number
    distinct?: NotedScalarFieldEnum | NotedScalarFieldEnum[]
  }

  /**
   * noted create
   */
  export type notedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * The data needed to create a noted.
     */
    data: XOR<notedCreateInput, notedUncheckedCreateInput>
  }

  /**
   * noted createMany
   */
  export type notedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many noteds.
     */
    data: notedCreateManyInput | notedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * noted createManyAndReturn
   */
  export type notedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * The data used to create many noteds.
     */
    data: notedCreateManyInput | notedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * noted update
   */
  export type notedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * The data needed to update a noted.
     */
    data: XOR<notedUpdateInput, notedUncheckedUpdateInput>
    /**
     * Choose, which noted to update.
     */
    where: notedWhereUniqueInput
  }

  /**
   * noted updateMany
   */
  export type notedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update noteds.
     */
    data: XOR<notedUpdateManyMutationInput, notedUncheckedUpdateManyInput>
    /**
     * Filter which noteds to update
     */
    where?: notedWhereInput
    /**
     * Limit how many noteds to update.
     */
    limit?: number
  }

  /**
   * noted updateManyAndReturn
   */
  export type notedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * The data used to update noteds.
     */
    data: XOR<notedUpdateManyMutationInput, notedUncheckedUpdateManyInput>
    /**
     * Filter which noteds to update
     */
    where?: notedWhereInput
    /**
     * Limit how many noteds to update.
     */
    limit?: number
  }

  /**
   * noted upsert
   */
  export type notedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * The filter to search for the noted to update in case it exists.
     */
    where: notedWhereUniqueInput
    /**
     * In case the noted found by the `where` argument doesn't exist, create a new noted with this data.
     */
    create: XOR<notedCreateInput, notedUncheckedCreateInput>
    /**
     * In case the noted was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notedUpdateInput, notedUncheckedUpdateInput>
  }

  /**
   * noted delete
   */
  export type notedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
    /**
     * Filter which noted to delete.
     */
    where: notedWhereUniqueInput
  }

  /**
   * noted deleteMany
   */
  export type notedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which noteds to delete
     */
    where?: notedWhereInput
    /**
     * Limit how many noteds to delete.
     */
    limit?: number
  }

  /**
   * noted without action
   */
  export type notedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the noted
     */
    select?: notedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the noted
     */
    omit?: notedOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const News_postScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    image_url: 'image_url',
    slug: 'slug',
    authorId: 'authorId',
    is_publish: 'is_publish',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type News_postScalarFieldEnum = (typeof News_postScalarFieldEnum)[keyof typeof News_postScalarFieldEnum]


  export const Jadwal_jimpitScalarFieldEnum: {
    id: 'id',
    members: 'members',
    note: 'note',
    dayId: 'dayId',
    createdAt: 'createdAt'
  };

  export type Jadwal_jimpitScalarFieldEnum = (typeof Jadwal_jimpitScalarFieldEnum)[keyof typeof Jadwal_jimpitScalarFieldEnum]


  export const DaysScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type DaysScalarFieldEnum = (typeof DaysScalarFieldEnum)[keyof typeof DaysScalarFieldEnum]


  export const RessonScalarFieldEnum: {
    id: 'id',
    reassonId: 'reassonId',
    content: 'content',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type RessonScalarFieldEnum = (typeof RessonScalarFieldEnum)[keyof typeof RessonScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    CreatedAt: 'CreatedAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const NotedScalarFieldEnum: {
    id: 'id',
    content: 'content',
    is_active: 'is_active',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type NotedScalarFieldEnum = (typeof NotedScalarFieldEnum)[keyof typeof NotedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'roleUser'
   */
  export type EnumroleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roleUser'>
    


  /**
   * Reference to a field of type 'roleUser[]'
   */
  export type ListEnumroleUserFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'roleUser[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'onPublish'
   */
  export type EnumonPublishFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'onPublish'>
    


  /**
   * Reference to a field of type 'onPublish[]'
   */
  export type ListEnumonPublishFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'onPublish[]'>
    


  /**
   * Reference to a field of type 'an_active'
   */
  export type Enuman_activeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'an_active'>
    


  /**
   * Reference to a field of type 'an_active[]'
   */
  export type ListEnuman_activeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'an_active[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumroleUserFilter<"user"> | $Enums.roleUser
    createdAt?: DateTimeFilter<"user"> | Date | string
    ressons?: RessonListRelationFilter
    post?: News_postListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    ressons?: ressonOrderByRelationAggregateInput
    post?: news_postOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    role?: EnumroleUserFilter<"user"> | $Enums.roleUser
    createdAt?: DateTimeFilter<"user"> | Date | string
    ressons?: RessonListRelationFilter
    post?: News_postListRelationFilter
  }, "id" | "username">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumroleUserWithAggregatesFilter<"user"> | $Enums.roleUser
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    createdAt?: DateTimeFilter<"categories"> | Date | string
    posts?: News_postListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    posts?: news_postOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    createdAt?: DateTimeFilter<"categories"> | Date | string
    posts?: News_postListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"categories"> | Date | string
  }

  export type news_postWhereInput = {
    AND?: news_postWhereInput | news_postWhereInput[]
    OR?: news_postWhereInput[]
    NOT?: news_postWhereInput | news_postWhereInput[]
    id?: IntFilter<"news_post"> | number
    title?: StringFilter<"news_post"> | string
    content?: StringFilter<"news_post"> | string
    image_url?: StringFilter<"news_post"> | string
    slug?: StringFilter<"news_post"> | string
    authorId?: IntFilter<"news_post"> | number
    is_publish?: EnumonPublishFilter<"news_post"> | $Enums.onPublish
    categoryId?: IntFilter<"news_post"> | number
    createdAt?: DateTimeFilter<"news_post"> | Date | string
    updateAt?: DateTimeFilter<"news_post"> | Date | string
    author?: XOR<UserScalarRelationFilter, userWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }

  export type news_postOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    slug?: SortOrder
    authorId?: SortOrder
    is_publish?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    author?: userOrderByWithRelationInput
    category?: categoriesOrderByWithRelationInput
  }

  export type news_postWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: news_postWhereInput | news_postWhereInput[]
    OR?: news_postWhereInput[]
    NOT?: news_postWhereInput | news_postWhereInput[]
    title?: StringFilter<"news_post"> | string
    content?: StringFilter<"news_post"> | string
    image_url?: StringFilter<"news_post"> | string
    authorId?: IntFilter<"news_post"> | number
    is_publish?: EnumonPublishFilter<"news_post"> | $Enums.onPublish
    categoryId?: IntFilter<"news_post"> | number
    createdAt?: DateTimeFilter<"news_post"> | Date | string
    updateAt?: DateTimeFilter<"news_post"> | Date | string
    author?: XOR<UserScalarRelationFilter, userWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
  }, "id" | "slug">

  export type news_postOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    slug?: SortOrder
    authorId?: SortOrder
    is_publish?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: news_postCountOrderByAggregateInput
    _avg?: news_postAvgOrderByAggregateInput
    _max?: news_postMaxOrderByAggregateInput
    _min?: news_postMinOrderByAggregateInput
    _sum?: news_postSumOrderByAggregateInput
  }

  export type news_postScalarWhereWithAggregatesInput = {
    AND?: news_postScalarWhereWithAggregatesInput | news_postScalarWhereWithAggregatesInput[]
    OR?: news_postScalarWhereWithAggregatesInput[]
    NOT?: news_postScalarWhereWithAggregatesInput | news_postScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"news_post"> | number
    title?: StringWithAggregatesFilter<"news_post"> | string
    content?: StringWithAggregatesFilter<"news_post"> | string
    image_url?: StringWithAggregatesFilter<"news_post"> | string
    slug?: StringWithAggregatesFilter<"news_post"> | string
    authorId?: IntWithAggregatesFilter<"news_post"> | number
    is_publish?: EnumonPublishWithAggregatesFilter<"news_post"> | $Enums.onPublish
    categoryId?: IntWithAggregatesFilter<"news_post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"news_post"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"news_post"> | Date | string
  }

  export type jadwal_jimpitWhereInput = {
    AND?: jadwal_jimpitWhereInput | jadwal_jimpitWhereInput[]
    OR?: jadwal_jimpitWhereInput[]
    NOT?: jadwal_jimpitWhereInput | jadwal_jimpitWhereInput[]
    id?: IntFilter<"jadwal_jimpit"> | number
    members?: StringFilter<"jadwal_jimpit"> | string
    note?: StringFilter<"jadwal_jimpit"> | string
    dayId?: IntFilter<"jadwal_jimpit"> | number
    createdAt?: DateTimeFilter<"jadwal_jimpit"> | Date | string
    day?: XOR<DaysScalarRelationFilter, daysWhereInput>
  }

  export type jadwal_jimpitOrderByWithRelationInput = {
    id?: SortOrder
    members?: SortOrder
    note?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
    day?: daysOrderByWithRelationInput
  }

  export type jadwal_jimpitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: jadwal_jimpitWhereInput | jadwal_jimpitWhereInput[]
    OR?: jadwal_jimpitWhereInput[]
    NOT?: jadwal_jimpitWhereInput | jadwal_jimpitWhereInput[]
    members?: StringFilter<"jadwal_jimpit"> | string
    note?: StringFilter<"jadwal_jimpit"> | string
    dayId?: IntFilter<"jadwal_jimpit"> | number
    createdAt?: DateTimeFilter<"jadwal_jimpit"> | Date | string
    day?: XOR<DaysScalarRelationFilter, daysWhereInput>
  }, "id">

  export type jadwal_jimpitOrderByWithAggregationInput = {
    id?: SortOrder
    members?: SortOrder
    note?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
    _count?: jadwal_jimpitCountOrderByAggregateInput
    _avg?: jadwal_jimpitAvgOrderByAggregateInput
    _max?: jadwal_jimpitMaxOrderByAggregateInput
    _min?: jadwal_jimpitMinOrderByAggregateInput
    _sum?: jadwal_jimpitSumOrderByAggregateInput
  }

  export type jadwal_jimpitScalarWhereWithAggregatesInput = {
    AND?: jadwal_jimpitScalarWhereWithAggregatesInput | jadwal_jimpitScalarWhereWithAggregatesInput[]
    OR?: jadwal_jimpitScalarWhereWithAggregatesInput[]
    NOT?: jadwal_jimpitScalarWhereWithAggregatesInput | jadwal_jimpitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"jadwal_jimpit"> | number
    members?: StringWithAggregatesFilter<"jadwal_jimpit"> | string
    note?: StringWithAggregatesFilter<"jadwal_jimpit"> | string
    dayId?: IntWithAggregatesFilter<"jadwal_jimpit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"jadwal_jimpit"> | Date | string
  }

  export type daysWhereInput = {
    AND?: daysWhereInput | daysWhereInput[]
    OR?: daysWhereInput[]
    NOT?: daysWhereInput | daysWhereInput[]
    id?: IntFilter<"days"> | number
    name?: StringFilter<"days"> | string
    createdAt?: DateTimeFilter<"days"> | Date | string
    jadwals?: Jadwal_jimpitListRelationFilter
  }

  export type daysOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    jadwals?: jadwal_jimpitOrderByRelationAggregateInput
  }

  export type daysWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: daysWhereInput | daysWhereInput[]
    OR?: daysWhereInput[]
    NOT?: daysWhereInput | daysWhereInput[]
    name?: StringFilter<"days"> | string
    createdAt?: DateTimeFilter<"days"> | Date | string
    jadwals?: Jadwal_jimpitListRelationFilter
  }, "id">

  export type daysOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: daysCountOrderByAggregateInput
    _avg?: daysAvgOrderByAggregateInput
    _max?: daysMaxOrderByAggregateInput
    _min?: daysMinOrderByAggregateInput
    _sum?: daysSumOrderByAggregateInput
  }

  export type daysScalarWhereWithAggregatesInput = {
    AND?: daysScalarWhereWithAggregatesInput | daysScalarWhereWithAggregatesInput[]
    OR?: daysScalarWhereWithAggregatesInput[]
    NOT?: daysScalarWhereWithAggregatesInput | daysScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"days"> | number
    name?: StringWithAggregatesFilter<"days"> | string
    createdAt?: DateTimeWithAggregatesFilter<"days"> | Date | string
  }

  export type ressonWhereInput = {
    AND?: ressonWhereInput | ressonWhereInput[]
    OR?: ressonWhereInput[]
    NOT?: ressonWhereInput | ressonWhereInput[]
    id?: IntFilter<"resson"> | number
    reassonId?: IntFilter<"resson"> | number
    content?: StringFilter<"resson"> | string
    createdAt?: DateTimeFilter<"resson"> | Date | string
    updateAt?: DateTimeFilter<"resson"> | Date | string
    resson?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type ressonOrderByWithRelationInput = {
    id?: SortOrder
    reassonId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    resson?: userOrderByWithRelationInput
  }

  export type ressonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ressonWhereInput | ressonWhereInput[]
    OR?: ressonWhereInput[]
    NOT?: ressonWhereInput | ressonWhereInput[]
    reassonId?: IntFilter<"resson"> | number
    content?: StringFilter<"resson"> | string
    createdAt?: DateTimeFilter<"resson"> | Date | string
    updateAt?: DateTimeFilter<"resson"> | Date | string
    resson?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type ressonOrderByWithAggregationInput = {
    id?: SortOrder
    reassonId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: ressonCountOrderByAggregateInput
    _avg?: ressonAvgOrderByAggregateInput
    _max?: ressonMaxOrderByAggregateInput
    _min?: ressonMinOrderByAggregateInput
    _sum?: ressonSumOrderByAggregateInput
  }

  export type ressonScalarWhereWithAggregatesInput = {
    AND?: ressonScalarWhereWithAggregatesInput | ressonScalarWhereWithAggregatesInput[]
    OR?: ressonScalarWhereWithAggregatesInput[]
    NOT?: ressonScalarWhereWithAggregatesInput | ressonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"resson"> | number
    reassonId?: IntWithAggregatesFilter<"resson"> | number
    content?: StringWithAggregatesFilter<"resson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"resson"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"resson"> | Date | string
  }

  export type feedbackWhereInput = {
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    id?: IntFilter<"feedback"> | number
    title?: StringFilter<"feedback"> | string
    content?: StringFilter<"feedback"> | string
    CreatedAt?: DateTimeFilter<"feedback"> | Date | string
  }

  export type feedbackOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    CreatedAt?: SortOrder
  }

  export type feedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: feedbackWhereInput | feedbackWhereInput[]
    OR?: feedbackWhereInput[]
    NOT?: feedbackWhereInput | feedbackWhereInput[]
    title?: StringFilter<"feedback"> | string
    content?: StringFilter<"feedback"> | string
    CreatedAt?: DateTimeFilter<"feedback"> | Date | string
  }, "id">

  export type feedbackOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    CreatedAt?: SortOrder
    _count?: feedbackCountOrderByAggregateInput
    _avg?: feedbackAvgOrderByAggregateInput
    _max?: feedbackMaxOrderByAggregateInput
    _min?: feedbackMinOrderByAggregateInput
    _sum?: feedbackSumOrderByAggregateInput
  }

  export type feedbackScalarWhereWithAggregatesInput = {
    AND?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    OR?: feedbackScalarWhereWithAggregatesInput[]
    NOT?: feedbackScalarWhereWithAggregatesInput | feedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"feedback"> | number
    title?: StringWithAggregatesFilter<"feedback"> | string
    content?: StringWithAggregatesFilter<"feedback"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"feedback"> | Date | string
  }

  export type notedWhereInput = {
    AND?: notedWhereInput | notedWhereInput[]
    OR?: notedWhereInput[]
    NOT?: notedWhereInput | notedWhereInput[]
    id?: IntFilter<"noted"> | number
    content?: StringFilter<"noted"> | string
    is_active?: Enuman_activeFilter<"noted"> | $Enums.an_active
    createdAt?: DateTimeFilter<"noted"> | Date | string
    updateAt?: DateTimeFilter<"noted"> | Date | string
  }

  export type notedOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type notedWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notedWhereInput | notedWhereInput[]
    OR?: notedWhereInput[]
    NOT?: notedWhereInput | notedWhereInput[]
    content?: StringFilter<"noted"> | string
    is_active?: Enuman_activeFilter<"noted"> | $Enums.an_active
    createdAt?: DateTimeFilter<"noted"> | Date | string
    updateAt?: DateTimeFilter<"noted"> | Date | string
  }, "id">

  export type notedOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: notedCountOrderByAggregateInput
    _avg?: notedAvgOrderByAggregateInput
    _max?: notedMaxOrderByAggregateInput
    _min?: notedMinOrderByAggregateInput
    _sum?: notedSumOrderByAggregateInput
  }

  export type notedScalarWhereWithAggregatesInput = {
    AND?: notedScalarWhereWithAggregatesInput | notedScalarWhereWithAggregatesInput[]
    OR?: notedScalarWhereWithAggregatesInput[]
    NOT?: notedScalarWhereWithAggregatesInput | notedScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"noted"> | number
    content?: StringWithAggregatesFilter<"noted"> | string
    is_active?: Enuman_activeWithAggregatesFilter<"noted"> | $Enums.an_active
    createdAt?: DateTimeWithAggregatesFilter<"noted"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"noted"> | Date | string
  }

  export type userCreateInput = {
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
    ressons?: ressonCreateNestedManyWithoutRessonInput
    post?: news_postCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
    ressons?: ressonUncheckedCreateNestedManyWithoutRessonInput
    post?: news_postUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ressons?: ressonUpdateManyWithoutRessonNestedInput
    post?: news_postUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ressons?: ressonUncheckedUpdateManyWithoutRessonNestedInput
    post?: news_postUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesCreateInput = {
    name: string
    createdAt?: Date | string
    posts?: news_postCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    posts?: news_postUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: news_postUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: news_postUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postCreateInput = {
    title: string
    content: string
    image_url: string
    slug: string
    is_publish?: $Enums.onPublish
    createdAt?: Date | string
    updateAt?: Date | string
    author: userCreateNestedOneWithoutPostInput
    category: categoriesCreateNestedOneWithoutPostsInput
  }

  export type news_postUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    image_url: string
    slug: string
    authorId: number
    is_publish?: $Enums.onPublish
    categoryId: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type news_postUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: userUpdateOneRequiredWithoutPostNestedInput
    category?: categoriesUpdateOneRequiredWithoutPostsNestedInput
  }

  export type news_postUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postCreateManyInput = {
    id?: number
    title: string
    content: string
    image_url: string
    slug: string
    authorId: number
    is_publish?: $Enums.onPublish
    categoryId: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type news_postUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitCreateInput = {
    members: string
    note: string
    createdAt?: Date | string
    day: daysCreateNestedOneWithoutJadwalsInput
  }

  export type jadwal_jimpitUncheckedCreateInput = {
    id?: number
    members: string
    note: string
    dayId: number
    createdAt?: Date | string
  }

  export type jadwal_jimpitUpdateInput = {
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    day?: daysUpdateOneRequiredWithoutJadwalsNestedInput
  }

  export type jadwal_jimpitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    dayId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitCreateManyInput = {
    id?: number
    members: string
    note: string
    dayId: number
    createdAt?: Date | string
  }

  export type jadwal_jimpitUpdateManyMutationInput = {
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    dayId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daysCreateInput = {
    name: string
    createdAt?: Date | string
    jadwals?: jadwal_jimpitCreateNestedManyWithoutDayInput
  }

  export type daysUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    jadwals?: jadwal_jimpitUncheckedCreateNestedManyWithoutDayInput
  }

  export type daysUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwals?: jadwal_jimpitUpdateManyWithoutDayNestedInput
  }

  export type daysUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwals?: jadwal_jimpitUncheckedUpdateManyWithoutDayNestedInput
  }

  export type daysCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type daysUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daysUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressonCreateInput = {
    content: string
    createdAt?: Date | string
    updateAt?: Date | string
    resson: userCreateNestedOneWithoutRessonsInput
  }

  export type ressonUncheckedCreateInput = {
    id?: number
    reassonId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ressonUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resson?: userUpdateOneRequiredWithoutRessonsNestedInput
  }

  export type ressonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reassonId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressonCreateManyInput = {
    id?: number
    reassonId: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ressonUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reassonId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackCreateInput = {
    title: string
    content: string
    CreatedAt?: Date | string
  }

  export type feedbackUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    CreatedAt?: Date | string
  }

  export type feedbackUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackCreateManyInput = {
    id?: number
    title: string
    content: string
    CreatedAt?: Date | string
  }

  export type feedbackUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type feedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notedCreateInput = {
    content: string
    is_active?: $Enums.an_active
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type notedUncheckedCreateInput = {
    id?: number
    content: string
    is_active?: $Enums.an_active
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type notedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_active?: Enuman_activeFieldUpdateOperationsInput | $Enums.an_active
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_active?: Enuman_activeFieldUpdateOperationsInput | $Enums.an_active
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notedCreateManyInput = {
    id?: number
    content: string
    is_active?: $Enums.an_active
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type notedUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_active?: Enuman_activeFieldUpdateOperationsInput | $Enums.an_active
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_active?: Enuman_activeFieldUpdateOperationsInput | $Enums.an_active
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumroleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserFilter<$PrismaModel> | $Enums.roleUser
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RessonListRelationFilter = {
    every?: ressonWhereInput
    some?: ressonWhereInput
    none?: ressonWhereInput
  }

  export type News_postListRelationFilter = {
    every?: news_postWhereInput
    some?: news_postWhereInput
    none?: news_postWhereInput
  }

  export type ressonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type news_postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumroleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserWithAggregatesFilter<$PrismaModel> | $Enums.roleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleUserFilter<$PrismaModel>
    _max?: NestedEnumroleUserFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumonPublishFilter<$PrismaModel = never> = {
    equals?: $Enums.onPublish | EnumonPublishFieldRefInput<$PrismaModel>
    in?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    notIn?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    not?: NestedEnumonPublishFilter<$PrismaModel> | $Enums.onPublish
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type news_postCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    slug?: SortOrder
    authorId?: SortOrder
    is_publish?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type news_postAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type news_postMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    slug?: SortOrder
    authorId?: SortOrder
    is_publish?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type news_postMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image_url?: SortOrder
    slug?: SortOrder
    authorId?: SortOrder
    is_publish?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type news_postSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type EnumonPublishWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.onPublish | EnumonPublishFieldRefInput<$PrismaModel>
    in?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    notIn?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    not?: NestedEnumonPublishWithAggregatesFilter<$PrismaModel> | $Enums.onPublish
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumonPublishFilter<$PrismaModel>
    _max?: NestedEnumonPublishFilter<$PrismaModel>
  }

  export type DaysScalarRelationFilter = {
    is?: daysWhereInput
    isNot?: daysWhereInput
  }

  export type jadwal_jimpitCountOrderByAggregateInput = {
    id?: SortOrder
    members?: SortOrder
    note?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
  }

  export type jadwal_jimpitAvgOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
  }

  export type jadwal_jimpitMaxOrderByAggregateInput = {
    id?: SortOrder
    members?: SortOrder
    note?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
  }

  export type jadwal_jimpitMinOrderByAggregateInput = {
    id?: SortOrder
    members?: SortOrder
    note?: SortOrder
    dayId?: SortOrder
    createdAt?: SortOrder
  }

  export type jadwal_jimpitSumOrderByAggregateInput = {
    id?: SortOrder
    dayId?: SortOrder
  }

  export type Jadwal_jimpitListRelationFilter = {
    every?: jadwal_jimpitWhereInput
    some?: jadwal_jimpitWhereInput
    none?: jadwal_jimpitWhereInput
  }

  export type jadwal_jimpitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type daysCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type daysAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type daysMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type daysMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type daysSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ressonCountOrderByAggregateInput = {
    id?: SortOrder
    reassonId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ressonAvgOrderByAggregateInput = {
    id?: SortOrder
    reassonId?: SortOrder
  }

  export type ressonMaxOrderByAggregateInput = {
    id?: SortOrder
    reassonId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ressonMinOrderByAggregateInput = {
    id?: SortOrder
    reassonId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ressonSumOrderByAggregateInput = {
    id?: SortOrder
    reassonId?: SortOrder
  }

  export type feedbackCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    CreatedAt?: SortOrder
  }

  export type feedbackAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type feedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    CreatedAt?: SortOrder
  }

  export type feedbackMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    CreatedAt?: SortOrder
  }

  export type feedbackSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enuman_activeFilter<$PrismaModel = never> = {
    equals?: $Enums.an_active | Enuman_activeFieldRefInput<$PrismaModel>
    in?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    notIn?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    not?: NestedEnuman_activeFilter<$PrismaModel> | $Enums.an_active
  }

  export type notedCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type notedAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type notedMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type notedMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type notedSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enuman_activeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.an_active | Enuman_activeFieldRefInput<$PrismaModel>
    in?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    notIn?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    not?: NestedEnuman_activeWithAggregatesFilter<$PrismaModel> | $Enums.an_active
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuman_activeFilter<$PrismaModel>
    _max?: NestedEnuman_activeFilter<$PrismaModel>
  }

  export type ressonCreateNestedManyWithoutRessonInput = {
    create?: XOR<ressonCreateWithoutRessonInput, ressonUncheckedCreateWithoutRessonInput> | ressonCreateWithoutRessonInput[] | ressonUncheckedCreateWithoutRessonInput[]
    connectOrCreate?: ressonCreateOrConnectWithoutRessonInput | ressonCreateOrConnectWithoutRessonInput[]
    createMany?: ressonCreateManyRessonInputEnvelope
    connect?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
  }

  export type news_postCreateNestedManyWithoutAuthorInput = {
    create?: XOR<news_postCreateWithoutAuthorInput, news_postUncheckedCreateWithoutAuthorInput> | news_postCreateWithoutAuthorInput[] | news_postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutAuthorInput | news_postCreateOrConnectWithoutAuthorInput[]
    createMany?: news_postCreateManyAuthorInputEnvelope
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
  }

  export type ressonUncheckedCreateNestedManyWithoutRessonInput = {
    create?: XOR<ressonCreateWithoutRessonInput, ressonUncheckedCreateWithoutRessonInput> | ressonCreateWithoutRessonInput[] | ressonUncheckedCreateWithoutRessonInput[]
    connectOrCreate?: ressonCreateOrConnectWithoutRessonInput | ressonCreateOrConnectWithoutRessonInput[]
    createMany?: ressonCreateManyRessonInputEnvelope
    connect?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
  }

  export type news_postUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<news_postCreateWithoutAuthorInput, news_postUncheckedCreateWithoutAuthorInput> | news_postCreateWithoutAuthorInput[] | news_postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutAuthorInput | news_postCreateOrConnectWithoutAuthorInput[]
    createMany?: news_postCreateManyAuthorInputEnvelope
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleUserFieldUpdateOperationsInput = {
    set?: $Enums.roleUser
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ressonUpdateManyWithoutRessonNestedInput = {
    create?: XOR<ressonCreateWithoutRessonInput, ressonUncheckedCreateWithoutRessonInput> | ressonCreateWithoutRessonInput[] | ressonUncheckedCreateWithoutRessonInput[]
    connectOrCreate?: ressonCreateOrConnectWithoutRessonInput | ressonCreateOrConnectWithoutRessonInput[]
    upsert?: ressonUpsertWithWhereUniqueWithoutRessonInput | ressonUpsertWithWhereUniqueWithoutRessonInput[]
    createMany?: ressonCreateManyRessonInputEnvelope
    set?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    disconnect?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    delete?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    connect?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    update?: ressonUpdateWithWhereUniqueWithoutRessonInput | ressonUpdateWithWhereUniqueWithoutRessonInput[]
    updateMany?: ressonUpdateManyWithWhereWithoutRessonInput | ressonUpdateManyWithWhereWithoutRessonInput[]
    deleteMany?: ressonScalarWhereInput | ressonScalarWhereInput[]
  }

  export type news_postUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<news_postCreateWithoutAuthorInput, news_postUncheckedCreateWithoutAuthorInput> | news_postCreateWithoutAuthorInput[] | news_postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutAuthorInput | news_postCreateOrConnectWithoutAuthorInput[]
    upsert?: news_postUpsertWithWhereUniqueWithoutAuthorInput | news_postUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: news_postCreateManyAuthorInputEnvelope
    set?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    disconnect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    delete?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    update?: news_postUpdateWithWhereUniqueWithoutAuthorInput | news_postUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: news_postUpdateManyWithWhereWithoutAuthorInput | news_postUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: news_postScalarWhereInput | news_postScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ressonUncheckedUpdateManyWithoutRessonNestedInput = {
    create?: XOR<ressonCreateWithoutRessonInput, ressonUncheckedCreateWithoutRessonInput> | ressonCreateWithoutRessonInput[] | ressonUncheckedCreateWithoutRessonInput[]
    connectOrCreate?: ressonCreateOrConnectWithoutRessonInput | ressonCreateOrConnectWithoutRessonInput[]
    upsert?: ressonUpsertWithWhereUniqueWithoutRessonInput | ressonUpsertWithWhereUniqueWithoutRessonInput[]
    createMany?: ressonCreateManyRessonInputEnvelope
    set?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    disconnect?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    delete?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    connect?: ressonWhereUniqueInput | ressonWhereUniqueInput[]
    update?: ressonUpdateWithWhereUniqueWithoutRessonInput | ressonUpdateWithWhereUniqueWithoutRessonInput[]
    updateMany?: ressonUpdateManyWithWhereWithoutRessonInput | ressonUpdateManyWithWhereWithoutRessonInput[]
    deleteMany?: ressonScalarWhereInput | ressonScalarWhereInput[]
  }

  export type news_postUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<news_postCreateWithoutAuthorInput, news_postUncheckedCreateWithoutAuthorInput> | news_postCreateWithoutAuthorInput[] | news_postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutAuthorInput | news_postCreateOrConnectWithoutAuthorInput[]
    upsert?: news_postUpsertWithWhereUniqueWithoutAuthorInput | news_postUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: news_postCreateManyAuthorInputEnvelope
    set?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    disconnect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    delete?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    update?: news_postUpdateWithWhereUniqueWithoutAuthorInput | news_postUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: news_postUpdateManyWithWhereWithoutAuthorInput | news_postUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: news_postScalarWhereInput | news_postScalarWhereInput[]
  }

  export type news_postCreateNestedManyWithoutCategoryInput = {
    create?: XOR<news_postCreateWithoutCategoryInput, news_postUncheckedCreateWithoutCategoryInput> | news_postCreateWithoutCategoryInput[] | news_postUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutCategoryInput | news_postCreateOrConnectWithoutCategoryInput[]
    createMany?: news_postCreateManyCategoryInputEnvelope
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
  }

  export type news_postUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<news_postCreateWithoutCategoryInput, news_postUncheckedCreateWithoutCategoryInput> | news_postCreateWithoutCategoryInput[] | news_postUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutCategoryInput | news_postCreateOrConnectWithoutCategoryInput[]
    createMany?: news_postCreateManyCategoryInputEnvelope
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
  }

  export type news_postUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<news_postCreateWithoutCategoryInput, news_postUncheckedCreateWithoutCategoryInput> | news_postCreateWithoutCategoryInput[] | news_postUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutCategoryInput | news_postCreateOrConnectWithoutCategoryInput[]
    upsert?: news_postUpsertWithWhereUniqueWithoutCategoryInput | news_postUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: news_postCreateManyCategoryInputEnvelope
    set?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    disconnect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    delete?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    update?: news_postUpdateWithWhereUniqueWithoutCategoryInput | news_postUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: news_postUpdateManyWithWhereWithoutCategoryInput | news_postUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: news_postScalarWhereInput | news_postScalarWhereInput[]
  }

  export type news_postUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<news_postCreateWithoutCategoryInput, news_postUncheckedCreateWithoutCategoryInput> | news_postCreateWithoutCategoryInput[] | news_postUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: news_postCreateOrConnectWithoutCategoryInput | news_postCreateOrConnectWithoutCategoryInput[]
    upsert?: news_postUpsertWithWhereUniqueWithoutCategoryInput | news_postUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: news_postCreateManyCategoryInputEnvelope
    set?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    disconnect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    delete?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    connect?: news_postWhereUniqueInput | news_postWhereUniqueInput[]
    update?: news_postUpdateWithWhereUniqueWithoutCategoryInput | news_postUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: news_postUpdateManyWithWhereWithoutCategoryInput | news_postUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: news_postScalarWhereInput | news_postScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutPostInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    connect?: userWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutPostsInput = {
    create?: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPostsInput
    connect?: categoriesWhereUniqueInput
  }

  export type EnumonPublishFieldUpdateOperationsInput = {
    set?: $Enums.onPublish
  }

  export type userUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    connectOrCreate?: userCreateOrConnectWithoutPostInput
    upsert?: userUpsertWithoutPostInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPostInput, userUpdateWithoutPostInput>, userUncheckedUpdateWithoutPostInput>
  }

  export type categoriesUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPostsInput
    upsert?: categoriesUpsertWithoutPostsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutPostsInput, categoriesUpdateWithoutPostsInput>, categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type daysCreateNestedOneWithoutJadwalsInput = {
    create?: XOR<daysCreateWithoutJadwalsInput, daysUncheckedCreateWithoutJadwalsInput>
    connectOrCreate?: daysCreateOrConnectWithoutJadwalsInput
    connect?: daysWhereUniqueInput
  }

  export type daysUpdateOneRequiredWithoutJadwalsNestedInput = {
    create?: XOR<daysCreateWithoutJadwalsInput, daysUncheckedCreateWithoutJadwalsInput>
    connectOrCreate?: daysCreateOrConnectWithoutJadwalsInput
    upsert?: daysUpsertWithoutJadwalsInput
    connect?: daysWhereUniqueInput
    update?: XOR<XOR<daysUpdateToOneWithWhereWithoutJadwalsInput, daysUpdateWithoutJadwalsInput>, daysUncheckedUpdateWithoutJadwalsInput>
  }

  export type jadwal_jimpitCreateNestedManyWithoutDayInput = {
    create?: XOR<jadwal_jimpitCreateWithoutDayInput, jadwal_jimpitUncheckedCreateWithoutDayInput> | jadwal_jimpitCreateWithoutDayInput[] | jadwal_jimpitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: jadwal_jimpitCreateOrConnectWithoutDayInput | jadwal_jimpitCreateOrConnectWithoutDayInput[]
    createMany?: jadwal_jimpitCreateManyDayInputEnvelope
    connect?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
  }

  export type jadwal_jimpitUncheckedCreateNestedManyWithoutDayInput = {
    create?: XOR<jadwal_jimpitCreateWithoutDayInput, jadwal_jimpitUncheckedCreateWithoutDayInput> | jadwal_jimpitCreateWithoutDayInput[] | jadwal_jimpitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: jadwal_jimpitCreateOrConnectWithoutDayInput | jadwal_jimpitCreateOrConnectWithoutDayInput[]
    createMany?: jadwal_jimpitCreateManyDayInputEnvelope
    connect?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
  }

  export type jadwal_jimpitUpdateManyWithoutDayNestedInput = {
    create?: XOR<jadwal_jimpitCreateWithoutDayInput, jadwal_jimpitUncheckedCreateWithoutDayInput> | jadwal_jimpitCreateWithoutDayInput[] | jadwal_jimpitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: jadwal_jimpitCreateOrConnectWithoutDayInput | jadwal_jimpitCreateOrConnectWithoutDayInput[]
    upsert?: jadwal_jimpitUpsertWithWhereUniqueWithoutDayInput | jadwal_jimpitUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: jadwal_jimpitCreateManyDayInputEnvelope
    set?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    disconnect?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    delete?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    connect?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    update?: jadwal_jimpitUpdateWithWhereUniqueWithoutDayInput | jadwal_jimpitUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: jadwal_jimpitUpdateManyWithWhereWithoutDayInput | jadwal_jimpitUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: jadwal_jimpitScalarWhereInput | jadwal_jimpitScalarWhereInput[]
  }

  export type jadwal_jimpitUncheckedUpdateManyWithoutDayNestedInput = {
    create?: XOR<jadwal_jimpitCreateWithoutDayInput, jadwal_jimpitUncheckedCreateWithoutDayInput> | jadwal_jimpitCreateWithoutDayInput[] | jadwal_jimpitUncheckedCreateWithoutDayInput[]
    connectOrCreate?: jadwal_jimpitCreateOrConnectWithoutDayInput | jadwal_jimpitCreateOrConnectWithoutDayInput[]
    upsert?: jadwal_jimpitUpsertWithWhereUniqueWithoutDayInput | jadwal_jimpitUpsertWithWhereUniqueWithoutDayInput[]
    createMany?: jadwal_jimpitCreateManyDayInputEnvelope
    set?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    disconnect?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    delete?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    connect?: jadwal_jimpitWhereUniqueInput | jadwal_jimpitWhereUniqueInput[]
    update?: jadwal_jimpitUpdateWithWhereUniqueWithoutDayInput | jadwal_jimpitUpdateWithWhereUniqueWithoutDayInput[]
    updateMany?: jadwal_jimpitUpdateManyWithWhereWithoutDayInput | jadwal_jimpitUpdateManyWithWhereWithoutDayInput[]
    deleteMany?: jadwal_jimpitScalarWhereInput | jadwal_jimpitScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutRessonsInput = {
    create?: XOR<userCreateWithoutRessonsInput, userUncheckedCreateWithoutRessonsInput>
    connectOrCreate?: userCreateOrConnectWithoutRessonsInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutRessonsNestedInput = {
    create?: XOR<userCreateWithoutRessonsInput, userUncheckedCreateWithoutRessonsInput>
    connectOrCreate?: userCreateOrConnectWithoutRessonsInput
    upsert?: userUpsertWithoutRessonsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRessonsInput, userUpdateWithoutRessonsInput>, userUncheckedUpdateWithoutRessonsInput>
  }

  export type Enuman_activeFieldUpdateOperationsInput = {
    set?: $Enums.an_active
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumroleUserFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserFilter<$PrismaModel> | $Enums.roleUser
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumroleUserWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.roleUser | EnumroleUserFieldRefInput<$PrismaModel>
    in?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    notIn?: $Enums.roleUser[] | ListEnumroleUserFieldRefInput<$PrismaModel>
    not?: NestedEnumroleUserWithAggregatesFilter<$PrismaModel> | $Enums.roleUser
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleUserFilter<$PrismaModel>
    _max?: NestedEnumroleUserFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumonPublishFilter<$PrismaModel = never> = {
    equals?: $Enums.onPublish | EnumonPublishFieldRefInput<$PrismaModel>
    in?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    notIn?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    not?: NestedEnumonPublishFilter<$PrismaModel> | $Enums.onPublish
  }

  export type NestedEnumonPublishWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.onPublish | EnumonPublishFieldRefInput<$PrismaModel>
    in?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    notIn?: $Enums.onPublish[] | ListEnumonPublishFieldRefInput<$PrismaModel>
    not?: NestedEnumonPublishWithAggregatesFilter<$PrismaModel> | $Enums.onPublish
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumonPublishFilter<$PrismaModel>
    _max?: NestedEnumonPublishFilter<$PrismaModel>
  }

  export type NestedEnuman_activeFilter<$PrismaModel = never> = {
    equals?: $Enums.an_active | Enuman_activeFieldRefInput<$PrismaModel>
    in?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    notIn?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    not?: NestedEnuman_activeFilter<$PrismaModel> | $Enums.an_active
  }

  export type NestedEnuman_activeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.an_active | Enuman_activeFieldRefInput<$PrismaModel>
    in?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    notIn?: $Enums.an_active[] | ListEnuman_activeFieldRefInput<$PrismaModel>
    not?: NestedEnuman_activeWithAggregatesFilter<$PrismaModel> | $Enums.an_active
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnuman_activeFilter<$PrismaModel>
    _max?: NestedEnuman_activeFilter<$PrismaModel>
  }

  export type ressonCreateWithoutRessonInput = {
    content: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ressonUncheckedCreateWithoutRessonInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ressonCreateOrConnectWithoutRessonInput = {
    where: ressonWhereUniqueInput
    create: XOR<ressonCreateWithoutRessonInput, ressonUncheckedCreateWithoutRessonInput>
  }

  export type ressonCreateManyRessonInputEnvelope = {
    data: ressonCreateManyRessonInput | ressonCreateManyRessonInput[]
    skipDuplicates?: boolean
  }

  export type news_postCreateWithoutAuthorInput = {
    title: string
    content: string
    image_url: string
    slug: string
    is_publish?: $Enums.onPublish
    createdAt?: Date | string
    updateAt?: Date | string
    category: categoriesCreateNestedOneWithoutPostsInput
  }

  export type news_postUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content: string
    image_url: string
    slug: string
    is_publish?: $Enums.onPublish
    categoryId: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type news_postCreateOrConnectWithoutAuthorInput = {
    where: news_postWhereUniqueInput
    create: XOR<news_postCreateWithoutAuthorInput, news_postUncheckedCreateWithoutAuthorInput>
  }

  export type news_postCreateManyAuthorInputEnvelope = {
    data: news_postCreateManyAuthorInput | news_postCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ressonUpsertWithWhereUniqueWithoutRessonInput = {
    where: ressonWhereUniqueInput
    update: XOR<ressonUpdateWithoutRessonInput, ressonUncheckedUpdateWithoutRessonInput>
    create: XOR<ressonCreateWithoutRessonInput, ressonUncheckedCreateWithoutRessonInput>
  }

  export type ressonUpdateWithWhereUniqueWithoutRessonInput = {
    where: ressonWhereUniqueInput
    data: XOR<ressonUpdateWithoutRessonInput, ressonUncheckedUpdateWithoutRessonInput>
  }

  export type ressonUpdateManyWithWhereWithoutRessonInput = {
    where: ressonScalarWhereInput
    data: XOR<ressonUpdateManyMutationInput, ressonUncheckedUpdateManyWithoutRessonInput>
  }

  export type ressonScalarWhereInput = {
    AND?: ressonScalarWhereInput | ressonScalarWhereInput[]
    OR?: ressonScalarWhereInput[]
    NOT?: ressonScalarWhereInput | ressonScalarWhereInput[]
    id?: IntFilter<"resson"> | number
    reassonId?: IntFilter<"resson"> | number
    content?: StringFilter<"resson"> | string
    createdAt?: DateTimeFilter<"resson"> | Date | string
    updateAt?: DateTimeFilter<"resson"> | Date | string
  }

  export type news_postUpsertWithWhereUniqueWithoutAuthorInput = {
    where: news_postWhereUniqueInput
    update: XOR<news_postUpdateWithoutAuthorInput, news_postUncheckedUpdateWithoutAuthorInput>
    create: XOR<news_postCreateWithoutAuthorInput, news_postUncheckedCreateWithoutAuthorInput>
  }

  export type news_postUpdateWithWhereUniqueWithoutAuthorInput = {
    where: news_postWhereUniqueInput
    data: XOR<news_postUpdateWithoutAuthorInput, news_postUncheckedUpdateWithoutAuthorInput>
  }

  export type news_postUpdateManyWithWhereWithoutAuthorInput = {
    where: news_postScalarWhereInput
    data: XOR<news_postUpdateManyMutationInput, news_postUncheckedUpdateManyWithoutAuthorInput>
  }

  export type news_postScalarWhereInput = {
    AND?: news_postScalarWhereInput | news_postScalarWhereInput[]
    OR?: news_postScalarWhereInput[]
    NOT?: news_postScalarWhereInput | news_postScalarWhereInput[]
    id?: IntFilter<"news_post"> | number
    title?: StringFilter<"news_post"> | string
    content?: StringFilter<"news_post"> | string
    image_url?: StringFilter<"news_post"> | string
    slug?: StringFilter<"news_post"> | string
    authorId?: IntFilter<"news_post"> | number
    is_publish?: EnumonPublishFilter<"news_post"> | $Enums.onPublish
    categoryId?: IntFilter<"news_post"> | number
    createdAt?: DateTimeFilter<"news_post"> | Date | string
    updateAt?: DateTimeFilter<"news_post"> | Date | string
  }

  export type news_postCreateWithoutCategoryInput = {
    title: string
    content: string
    image_url: string
    slug: string
    is_publish?: $Enums.onPublish
    createdAt?: Date | string
    updateAt?: Date | string
    author: userCreateNestedOneWithoutPostInput
  }

  export type news_postUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    content: string
    image_url: string
    slug: string
    authorId: number
    is_publish?: $Enums.onPublish
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type news_postCreateOrConnectWithoutCategoryInput = {
    where: news_postWhereUniqueInput
    create: XOR<news_postCreateWithoutCategoryInput, news_postUncheckedCreateWithoutCategoryInput>
  }

  export type news_postCreateManyCategoryInputEnvelope = {
    data: news_postCreateManyCategoryInput | news_postCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type news_postUpsertWithWhereUniqueWithoutCategoryInput = {
    where: news_postWhereUniqueInput
    update: XOR<news_postUpdateWithoutCategoryInput, news_postUncheckedUpdateWithoutCategoryInput>
    create: XOR<news_postCreateWithoutCategoryInput, news_postUncheckedCreateWithoutCategoryInput>
  }

  export type news_postUpdateWithWhereUniqueWithoutCategoryInput = {
    where: news_postWhereUniqueInput
    data: XOR<news_postUpdateWithoutCategoryInput, news_postUncheckedUpdateWithoutCategoryInput>
  }

  export type news_postUpdateManyWithWhereWithoutCategoryInput = {
    where: news_postScalarWhereInput
    data: XOR<news_postUpdateManyMutationInput, news_postUncheckedUpdateManyWithoutCategoryInput>
  }

  export type userCreateWithoutPostInput = {
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
    ressons?: ressonCreateNestedManyWithoutRessonInput
  }

  export type userUncheckedCreateWithoutPostInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
    ressons?: ressonUncheckedCreateNestedManyWithoutRessonInput
  }

  export type userCreateOrConnectWithoutPostInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
  }

  export type categoriesCreateWithoutPostsInput = {
    name: string
    createdAt?: Date | string
  }

  export type categoriesUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type categoriesCreateOrConnectWithoutPostsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
  }

  export type userUpsertWithoutPostInput = {
    update: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
    create: XOR<userCreateWithoutPostInput, userUncheckedCreateWithoutPostInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPostInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPostInput, userUncheckedUpdateWithoutPostInput>
  }

  export type userUpdateWithoutPostInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ressons?: ressonUpdateManyWithoutRessonNestedInput
  }

  export type userUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ressons?: ressonUncheckedUpdateManyWithoutRessonNestedInput
  }

  export type categoriesUpsertWithoutPostsInput = {
    update: XOR<categoriesUpdateWithoutPostsInput, categoriesUncheckedUpdateWithoutPostsInput>
    create: XOR<categoriesCreateWithoutPostsInput, categoriesUncheckedCreateWithoutPostsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutPostsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutPostsInput, categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type categoriesUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriesUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daysCreateWithoutJadwalsInput = {
    name: string
    createdAt?: Date | string
  }

  export type daysUncheckedCreateWithoutJadwalsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type daysCreateOrConnectWithoutJadwalsInput = {
    where: daysWhereUniqueInput
    create: XOR<daysCreateWithoutJadwalsInput, daysUncheckedCreateWithoutJadwalsInput>
  }

  export type daysUpsertWithoutJadwalsInput = {
    update: XOR<daysUpdateWithoutJadwalsInput, daysUncheckedUpdateWithoutJadwalsInput>
    create: XOR<daysCreateWithoutJadwalsInput, daysUncheckedCreateWithoutJadwalsInput>
    where?: daysWhereInput
  }

  export type daysUpdateToOneWithWhereWithoutJadwalsInput = {
    where?: daysWhereInput
    data: XOR<daysUpdateWithoutJadwalsInput, daysUncheckedUpdateWithoutJadwalsInput>
  }

  export type daysUpdateWithoutJadwalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type daysUncheckedUpdateWithoutJadwalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitCreateWithoutDayInput = {
    members: string
    note: string
    createdAt?: Date | string
  }

  export type jadwal_jimpitUncheckedCreateWithoutDayInput = {
    id?: number
    members: string
    note: string
    createdAt?: Date | string
  }

  export type jadwal_jimpitCreateOrConnectWithoutDayInput = {
    where: jadwal_jimpitWhereUniqueInput
    create: XOR<jadwal_jimpitCreateWithoutDayInput, jadwal_jimpitUncheckedCreateWithoutDayInput>
  }

  export type jadwal_jimpitCreateManyDayInputEnvelope = {
    data: jadwal_jimpitCreateManyDayInput | jadwal_jimpitCreateManyDayInput[]
    skipDuplicates?: boolean
  }

  export type jadwal_jimpitUpsertWithWhereUniqueWithoutDayInput = {
    where: jadwal_jimpitWhereUniqueInput
    update: XOR<jadwal_jimpitUpdateWithoutDayInput, jadwal_jimpitUncheckedUpdateWithoutDayInput>
    create: XOR<jadwal_jimpitCreateWithoutDayInput, jadwal_jimpitUncheckedCreateWithoutDayInput>
  }

  export type jadwal_jimpitUpdateWithWhereUniqueWithoutDayInput = {
    where: jadwal_jimpitWhereUniqueInput
    data: XOR<jadwal_jimpitUpdateWithoutDayInput, jadwal_jimpitUncheckedUpdateWithoutDayInput>
  }

  export type jadwal_jimpitUpdateManyWithWhereWithoutDayInput = {
    where: jadwal_jimpitScalarWhereInput
    data: XOR<jadwal_jimpitUpdateManyMutationInput, jadwal_jimpitUncheckedUpdateManyWithoutDayInput>
  }

  export type jadwal_jimpitScalarWhereInput = {
    AND?: jadwal_jimpitScalarWhereInput | jadwal_jimpitScalarWhereInput[]
    OR?: jadwal_jimpitScalarWhereInput[]
    NOT?: jadwal_jimpitScalarWhereInput | jadwal_jimpitScalarWhereInput[]
    id?: IntFilter<"jadwal_jimpit"> | number
    members?: StringFilter<"jadwal_jimpit"> | string
    note?: StringFilter<"jadwal_jimpit"> | string
    dayId?: IntFilter<"jadwal_jimpit"> | number
    createdAt?: DateTimeFilter<"jadwal_jimpit"> | Date | string
  }

  export type userCreateWithoutRessonsInput = {
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
    post?: news_postCreateNestedManyWithoutAuthorInput
  }

  export type userUncheckedCreateWithoutRessonsInput = {
    id?: number
    username: string
    password: string
    role?: $Enums.roleUser
    createdAt?: Date | string
    post?: news_postUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type userCreateOrConnectWithoutRessonsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRessonsInput, userUncheckedCreateWithoutRessonsInput>
  }

  export type userUpsertWithoutRessonsInput = {
    update: XOR<userUpdateWithoutRessonsInput, userUncheckedUpdateWithoutRessonsInput>
    create: XOR<userCreateWithoutRessonsInput, userUncheckedCreateWithoutRessonsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRessonsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRessonsInput, userUncheckedUpdateWithoutRessonsInput>
  }

  export type userUpdateWithoutRessonsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: news_postUpdateManyWithoutAuthorNestedInput
  }

  export type userUncheckedUpdateWithoutRessonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleUserFieldUpdateOperationsInput | $Enums.roleUser
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: news_postUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ressonCreateManyRessonInput = {
    id?: number
    content: string
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type news_postCreateManyAuthorInput = {
    id?: number
    title: string
    content: string
    image_url: string
    slug: string
    is_publish?: $Enums.onPublish
    categoryId: number
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type ressonUpdateWithoutRessonInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressonUncheckedUpdateWithoutRessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ressonUncheckedUpdateManyWithoutRessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoriesUpdateOneRequiredWithoutPostsNestedInput
  }

  export type news_postUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postCreateManyCategoryInput = {
    id?: number
    title: string
    content: string
    image_url: string
    slug: string
    authorId: number
    is_publish?: $Enums.onPublish
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type news_postUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: userUpdateOneRequiredWithoutPostNestedInput
  }

  export type news_postUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type news_postUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    is_publish?: EnumonPublishFieldUpdateOperationsInput | $Enums.onPublish
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitCreateManyDayInput = {
    id?: number
    members: string
    note: string
    createdAt?: Date | string
  }

  export type jadwal_jimpitUpdateWithoutDayInput = {
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitUncheckedUpdateWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type jadwal_jimpitUncheckedUpdateManyWithoutDayInput = {
    id?: IntFieldUpdateOperationsInput | number
    members?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}