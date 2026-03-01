
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
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model InventoryStock
 * 
 */
export type InventoryStock = $Result.DefaultSelection<Prisma.$InventoryStockPayload>
/**
 * Model ProductSize
 * 
 */
export type ProductSize = $Result.DefaultSelection<Prisma.$ProductSizePayload>
/**
 * Model VariationGroup
 * 
 */
export type VariationGroup = $Result.DefaultSelection<Prisma.$VariationGroupPayload>
/**
 * Model VariationChoice
 * 
 */
export type VariationChoice = $Result.DefaultSelection<Prisma.$VariationChoicePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model OrderItemVariation
 * 
 */
export type OrderItemVariation = $Result.DefaultSelection<Prisma.$OrderItemVariationPayload>
/**
 * Model StoreSettings
 * 
 */
export type StoreSettings = $Result.DefaultSelection<Prisma.$StoreSettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
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
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
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
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryStock`: Exposes CRUD operations for the **InventoryStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryStocks
    * const inventoryStocks = await prisma.inventoryStock.findMany()
    * ```
    */
  get inventoryStock(): Prisma.InventoryStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSize`: Exposes CRUD operations for the **ProductSize** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSizes
    * const productSizes = await prisma.productSize.findMany()
    * ```
    */
  get productSize(): Prisma.ProductSizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variationGroup`: Exposes CRUD operations for the **VariationGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariationGroups
    * const variationGroups = await prisma.variationGroup.findMany()
    * ```
    */
  get variationGroup(): Prisma.VariationGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variationChoice`: Exposes CRUD operations for the **VariationChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VariationChoices
    * const variationChoices = await prisma.variationChoice.findMany()
    * ```
    */
  get variationChoice(): Prisma.VariationChoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItemVariation`: Exposes CRUD operations for the **OrderItemVariation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItemVariations
    * const orderItemVariations = await prisma.orderItemVariation.findMany()
    * ```
    */
  get orderItemVariation(): Prisma.OrderItemVariationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeSettings`: Exposes CRUD operations for the **StoreSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreSettings
    * const storeSettings = await prisma.storeSettings.findMany()
    * ```
    */
  get storeSettings(): Prisma.StoreSettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    Product: 'Product',
    Category: 'Category',
    InventoryStock: 'InventoryStock',
    ProductSize: 'ProductSize',
    VariationGroup: 'VariationGroup',
    VariationChoice: 'VariationChoice',
    Order: 'Order',
    OrderItem: 'OrderItem',
    OrderItemVariation: 'OrderItemVariation',
    StoreSettings: 'StoreSettings'
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
      modelProps: "product" | "category" | "inventoryStock" | "productSize" | "variationGroup" | "variationChoice" | "order" | "orderItem" | "orderItemVariation" | "storeSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryStock: {
        payload: Prisma.$InventoryStockPayload<ExtArgs>
        fields: Prisma.InventoryStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          findFirst: {
            args: Prisma.InventoryStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          findMany: {
            args: Prisma.InventoryStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>[]
          }
          create: {
            args: Prisma.InventoryStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          createMany: {
            args: Prisma.InventoryStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>[]
          }
          delete: {
            args: Prisma.InventoryStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          update: {
            args: Prisma.InventoryStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          deleteMany: {
            args: Prisma.InventoryStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>[]
          }
          upsert: {
            args: Prisma.InventoryStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryStockPayload>
          }
          aggregate: {
            args: Prisma.InventoryStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryStock>
          }
          groupBy: {
            args: Prisma.InventoryStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryStockCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryStockCountAggregateOutputType> | number
          }
        }
      }
      ProductSize: {
        payload: Prisma.$ProductSizePayload<ExtArgs>
        fields: Prisma.ProductSizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findFirst: {
            args: Prisma.ProductSizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          findMany: {
            args: Prisma.ProductSizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          create: {
            args: Prisma.ProductSizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          createMany: {
            args: Prisma.ProductSizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          delete: {
            args: Prisma.ProductSizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          update: {
            args: Prisma.ProductSizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          deleteMany: {
            args: Prisma.ProductSizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>[]
          }
          upsert: {
            args: Prisma.ProductSizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSizePayload>
          }
          aggregate: {
            args: Prisma.ProductSizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSize>
          }
          groupBy: {
            args: Prisma.ProductSizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSizeCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSizeCountAggregateOutputType> | number
          }
        }
      }
      VariationGroup: {
        payload: Prisma.$VariationGroupPayload<ExtArgs>
        fields: Prisma.VariationGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariationGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariationGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>
          }
          findFirst: {
            args: Prisma.VariationGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariationGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>
          }
          findMany: {
            args: Prisma.VariationGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>[]
          }
          create: {
            args: Prisma.VariationGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>
          }
          createMany: {
            args: Prisma.VariationGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariationGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>[]
          }
          delete: {
            args: Prisma.VariationGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>
          }
          update: {
            args: Prisma.VariationGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>
          }
          deleteMany: {
            args: Prisma.VariationGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariationGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariationGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>[]
          }
          upsert: {
            args: Prisma.VariationGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationGroupPayload>
          }
          aggregate: {
            args: Prisma.VariationGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariationGroup>
          }
          groupBy: {
            args: Prisma.VariationGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariationGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariationGroupCountArgs<ExtArgs>
            result: $Utils.Optional<VariationGroupCountAggregateOutputType> | number
          }
        }
      }
      VariationChoice: {
        payload: Prisma.$VariationChoicePayload<ExtArgs>
        fields: Prisma.VariationChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariationChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariationChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>
          }
          findFirst: {
            args: Prisma.VariationChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariationChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>
          }
          findMany: {
            args: Prisma.VariationChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>[]
          }
          create: {
            args: Prisma.VariationChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>
          }
          createMany: {
            args: Prisma.VariationChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariationChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>[]
          }
          delete: {
            args: Prisma.VariationChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>
          }
          update: {
            args: Prisma.VariationChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>
          }
          deleteMany: {
            args: Prisma.VariationChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariationChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariationChoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>[]
          }
          upsert: {
            args: Prisma.VariationChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariationChoicePayload>
          }
          aggregate: {
            args: Prisma.VariationChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariationChoice>
          }
          groupBy: {
            args: Prisma.VariationChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariationChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariationChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<VariationChoiceCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      OrderItemVariation: {
        payload: Prisma.$OrderItemVariationPayload<ExtArgs>
        fields: Prisma.OrderItemVariationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemVariationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemVariationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>
          }
          findFirst: {
            args: Prisma.OrderItemVariationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemVariationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>
          }
          findMany: {
            args: Prisma.OrderItemVariationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>[]
          }
          create: {
            args: Prisma.OrderItemVariationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>
          }
          createMany: {
            args: Prisma.OrderItemVariationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemVariationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>[]
          }
          delete: {
            args: Prisma.OrderItemVariationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>
          }
          update: {
            args: Prisma.OrderItemVariationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemVariationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemVariationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemVariationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemVariationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemVariationPayload>
          }
          aggregate: {
            args: Prisma.OrderItemVariationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItemVariation>
          }
          groupBy: {
            args: Prisma.OrderItemVariationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemVariationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemVariationCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemVariationCountAggregateOutputType> | number
          }
        }
      }
      StoreSettings: {
        payload: Prisma.$StoreSettingsPayload<ExtArgs>
        fields: Prisma.StoreSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>
          }
          findFirst: {
            args: Prisma.StoreSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>
          }
          findMany: {
            args: Prisma.StoreSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>[]
          }
          create: {
            args: Prisma.StoreSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>
          }
          createMany: {
            args: Prisma.StoreSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>[]
          }
          delete: {
            args: Prisma.StoreSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>
          }
          update: {
            args: Prisma.StoreSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>
          }
          deleteMany: {
            args: Prisma.StoreSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>[]
          }
          upsert: {
            args: Prisma.StoreSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreSettingsPayload>
          }
          aggregate: {
            args: Prisma.StoreSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreSettings>
          }
          groupBy: {
            args: Prisma.StoreSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<StoreSettingsCountAggregateOutputType> | number
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
    product?: ProductOmit
    category?: CategoryOmit
    inventoryStock?: InventoryStockOmit
    productSize?: ProductSizeOmit
    variationGroup?: VariationGroupOmit
    variationChoice?: VariationChoiceOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    orderItemVariation?: OrderItemVariationOmit
    storeSettings?: StoreSettingsOmit
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
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    sizes: number
    variationGroups: number
    orderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sizes?: boolean | ProductCountOutputTypeCountSizesArgs
    variationGroups?: boolean | ProductCountOutputTypeCountVariationGroupsArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariationGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationGroupWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type VariationGroupCountOutputType
   */

  export type VariationGroupCountOutputType = {
    choices: number
  }

  export type VariationGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | VariationGroupCountOutputTypeCountChoicesArgs
  }

  // Custom InputTypes
  /**
   * VariationGroupCountOutputType without action
   */
  export type VariationGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroupCountOutputType
     */
    select?: VariationGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariationGroupCountOutputType without action
   */
  export type VariationGroupCountOutputTypeCountChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationChoiceWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    variations: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variations?: boolean | OrderItemCountOutputTypeCountVariationsArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountVariationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemVariationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    basePrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    basePrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    categoryId: string | null
    basePrice: number | null
    trackInventory: boolean | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    categoryId: string | null
    basePrice: number | null
    trackInventory: boolean | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    categoryId: number
    basePrice: number
    trackInventory: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    basePrice?: true
  }

  export type ProductSumAggregateInputType = {
    basePrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    categoryId?: true
    basePrice?: true
    trackInventory?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    categoryId?: true
    basePrice?: true
    trackInventory?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    categoryId?: true
    basePrice?: true
    trackInventory?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    sku: string | null
    categoryId: string | null
    basePrice: number
    trackInventory: boolean
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    categoryId?: boolean
    basePrice?: boolean
    trackInventory?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    stock?: boolean | Product$stockArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    variationGroups?: boolean | Product$variationGroupsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    categoryId?: boolean
    basePrice?: boolean
    trackInventory?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    categoryId?: boolean
    basePrice?: boolean
    trackInventory?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    categoryId?: boolean
    basePrice?: boolean
    trackInventory?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sku" | "categoryId" | "basePrice" | "trackInventory" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    stock?: boolean | Product$stockArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    variationGroups?: boolean | Product$variationGroupsArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      stock: Prisma.$InventoryStockPayload<ExtArgs> | null
      sizes: Prisma.$ProductSizePayload<ExtArgs>[]
      variationGroups: Prisma.$VariationGroupPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sku: string | null
      categoryId: string | null
      basePrice: number
      trackInventory: boolean
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stock<T extends Product$stockArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sizes<T extends Product$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Product$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    variationGroups<T extends Product$variationGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variationGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly basePrice: FieldRef<"Product", 'Int'>
    readonly trackInventory: FieldRef<"Product", 'Boolean'>
    readonly active: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.stock
   */
  export type Product$stockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    where?: InventoryStockWhereInput
  }

  /**
   * Product.sizes
   */
  export type Product$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    cursor?: ProductSizeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * Product.variationGroups
   */
  export type Product$variationGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    where?: VariationGroupWhereInput
    orderBy?: VariationGroupOrderByWithRelationInput | VariationGroupOrderByWithRelationInput[]
    cursor?: VariationGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariationGroupScalarFieldEnum | VariationGroupScalarFieldEnum[]
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryStock
   */

  export type AggregateInventoryStock = {
    _count: InventoryStockCountAggregateOutputType | null
    _avg: InventoryStockAvgAggregateOutputType | null
    _sum: InventoryStockSumAggregateOutputType | null
    _min: InventoryStockMinAggregateOutputType | null
    _max: InventoryStockMaxAggregateOutputType | null
  }

  export type InventoryStockAvgAggregateOutputType = {
    qty: number | null
  }

  export type InventoryStockSumAggregateOutputType = {
    qty: number | null
  }

  export type InventoryStockMinAggregateOutputType = {
    id: string | null
    productId: string | null
    qty: number | null
  }

  export type InventoryStockMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    qty: number | null
  }

  export type InventoryStockCountAggregateOutputType = {
    id: number
    productId: number
    qty: number
    _all: number
  }


  export type InventoryStockAvgAggregateInputType = {
    qty?: true
  }

  export type InventoryStockSumAggregateInputType = {
    qty?: true
  }

  export type InventoryStockMinAggregateInputType = {
    id?: true
    productId?: true
    qty?: true
  }

  export type InventoryStockMaxAggregateInputType = {
    id?: true
    productId?: true
    qty?: true
  }

  export type InventoryStockCountAggregateInputType = {
    id?: true
    productId?: true
    qty?: true
    _all?: true
  }

  export type InventoryStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryStock to aggregate.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryStocks
    **/
    _count?: true | InventoryStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryStockMaxAggregateInputType
  }

  export type GetInventoryStockAggregateType<T extends InventoryStockAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryStock[P]>
      : GetScalarType<T[P], AggregateInventoryStock[P]>
  }




  export type InventoryStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryStockWhereInput
    orderBy?: InventoryStockOrderByWithAggregationInput | InventoryStockOrderByWithAggregationInput[]
    by: InventoryStockScalarFieldEnum[] | InventoryStockScalarFieldEnum
    having?: InventoryStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryStockCountAggregateInputType | true
    _avg?: InventoryStockAvgAggregateInputType
    _sum?: InventoryStockSumAggregateInputType
    _min?: InventoryStockMinAggregateInputType
    _max?: InventoryStockMaxAggregateInputType
  }

  export type InventoryStockGroupByOutputType = {
    id: string
    productId: string
    qty: number
    _count: InventoryStockCountAggregateOutputType | null
    _avg: InventoryStockAvgAggregateOutputType | null
    _sum: InventoryStockSumAggregateOutputType | null
    _min: InventoryStockMinAggregateOutputType | null
    _max: InventoryStockMaxAggregateOutputType | null
  }

  type GetInventoryStockGroupByPayload<T extends InventoryStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryStockGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryStockGroupByOutputType[P]>
        }
      >
    >


  export type InventoryStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    qty?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryStock"]>

  export type InventoryStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    qty?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryStock"]>

  export type InventoryStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    qty?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryStock"]>

  export type InventoryStockSelectScalar = {
    id?: boolean
    productId?: boolean
    qty?: boolean
  }

  export type InventoryStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "qty", ExtArgs["result"]["inventoryStock"]>
  export type InventoryStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type InventoryStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $InventoryStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryStock"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      qty: number
    }, ExtArgs["result"]["inventoryStock"]>
    composites: {}
  }

  type InventoryStockGetPayload<S extends boolean | null | undefined | InventoryStockDefaultArgs> = $Result.GetResult<Prisma.$InventoryStockPayload, S>

  type InventoryStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryStockCountAggregateInputType | true
    }

  export interface InventoryStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryStock'], meta: { name: 'InventoryStock' } }
    /**
     * Find zero or one InventoryStock that matches the filter.
     * @param {InventoryStockFindUniqueArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryStockFindUniqueArgs>(args: SelectSubset<T, InventoryStockFindUniqueArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryStockFindUniqueOrThrowArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryStockFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockFindFirstArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryStockFindFirstArgs>(args?: SelectSubset<T, InventoryStockFindFirstArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockFindFirstOrThrowArgs} args - Arguments to find a InventoryStock
     * @example
     * // Get one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryStockFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryStocks
     * const inventoryStocks = await prisma.inventoryStock.findMany()
     * 
     * // Get first 10 InventoryStocks
     * const inventoryStocks = await prisma.inventoryStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryStockWithIdOnly = await prisma.inventoryStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryStockFindManyArgs>(args?: SelectSubset<T, InventoryStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryStock.
     * @param {InventoryStockCreateArgs} args - Arguments to create a InventoryStock.
     * @example
     * // Create one InventoryStock
     * const InventoryStock = await prisma.inventoryStock.create({
     *   data: {
     *     // ... data to create a InventoryStock
     *   }
     * })
     * 
     */
    create<T extends InventoryStockCreateArgs>(args: SelectSubset<T, InventoryStockCreateArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryStocks.
     * @param {InventoryStockCreateManyArgs} args - Arguments to create many InventoryStocks.
     * @example
     * // Create many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryStockCreateManyArgs>(args?: SelectSubset<T, InventoryStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryStocks and returns the data saved in the database.
     * @param {InventoryStockCreateManyAndReturnArgs} args - Arguments to create many InventoryStocks.
     * @example
     * // Create many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryStocks and only return the `id`
     * const inventoryStockWithIdOnly = await prisma.inventoryStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryStockCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryStock.
     * @param {InventoryStockDeleteArgs} args - Arguments to delete one InventoryStock.
     * @example
     * // Delete one InventoryStock
     * const InventoryStock = await prisma.inventoryStock.delete({
     *   where: {
     *     // ... filter to delete one InventoryStock
     *   }
     * })
     * 
     */
    delete<T extends InventoryStockDeleteArgs>(args: SelectSubset<T, InventoryStockDeleteArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryStock.
     * @param {InventoryStockUpdateArgs} args - Arguments to update one InventoryStock.
     * @example
     * // Update one InventoryStock
     * const inventoryStock = await prisma.inventoryStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryStockUpdateArgs>(args: SelectSubset<T, InventoryStockUpdateArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryStocks.
     * @param {InventoryStockDeleteManyArgs} args - Arguments to filter InventoryStocks to delete.
     * @example
     * // Delete a few InventoryStocks
     * const { count } = await prisma.inventoryStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryStockDeleteManyArgs>(args?: SelectSubset<T, InventoryStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryStockUpdateManyArgs>(args: SelectSubset<T, InventoryStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryStocks and returns the data updated in the database.
     * @param {InventoryStockUpdateManyAndReturnArgs} args - Arguments to update many InventoryStocks.
     * @example
     * // Update many InventoryStocks
     * const inventoryStock = await prisma.inventoryStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryStocks and only return the `id`
     * const inventoryStockWithIdOnly = await prisma.inventoryStock.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryStockUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryStock.
     * @param {InventoryStockUpsertArgs} args - Arguments to update or create a InventoryStock.
     * @example
     * // Update or create a InventoryStock
     * const inventoryStock = await prisma.inventoryStock.upsert({
     *   create: {
     *     // ... data to create a InventoryStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryStock we want to update
     *   }
     * })
     */
    upsert<T extends InventoryStockUpsertArgs>(args: SelectSubset<T, InventoryStockUpsertArgs<ExtArgs>>): Prisma__InventoryStockClient<$Result.GetResult<Prisma.$InventoryStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockCountArgs} args - Arguments to filter InventoryStocks to count.
     * @example
     * // Count the number of InventoryStocks
     * const count = await prisma.inventoryStock.count({
     *   where: {
     *     // ... the filter for the InventoryStocks we want to count
     *   }
     * })
    **/
    count<T extends InventoryStockCountArgs>(
      args?: Subset<T, InventoryStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryStockAggregateArgs>(args: Subset<T, InventoryStockAggregateArgs>): Prisma.PrismaPromise<GetInventoryStockAggregateType<T>>

    /**
     * Group by InventoryStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryStockGroupByArgs} args - Group by arguments.
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
      T extends InventoryStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryStockGroupByArgs['orderBy'] }
        : { orderBy?: InventoryStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryStock model
   */
  readonly fields: InventoryStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InventoryStock model
   */
  interface InventoryStockFieldRefs {
    readonly id: FieldRef<"InventoryStock", 'String'>
    readonly productId: FieldRef<"InventoryStock", 'String'>
    readonly qty: FieldRef<"InventoryStock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InventoryStock findUnique
   */
  export type InventoryStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock findUniqueOrThrow
   */
  export type InventoryStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock findFirst
   */
  export type InventoryStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryStocks.
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryStocks.
     */
    distinct?: InventoryStockScalarFieldEnum | InventoryStockScalarFieldEnum[]
  }

  /**
   * InventoryStock findFirstOrThrow
   */
  export type InventoryStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStock to fetch.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryStocks.
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryStocks.
     */
    distinct?: InventoryStockScalarFieldEnum | InventoryStockScalarFieldEnum[]
  }

  /**
   * InventoryStock findMany
   */
  export type InventoryStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter, which InventoryStocks to fetch.
     */
    where?: InventoryStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryStocks to fetch.
     */
    orderBy?: InventoryStockOrderByWithRelationInput | InventoryStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryStocks.
     */
    cursor?: InventoryStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryStocks.
     */
    skip?: number
    distinct?: InventoryStockScalarFieldEnum | InventoryStockScalarFieldEnum[]
  }

  /**
   * InventoryStock create
   */
  export type InventoryStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryStock.
     */
    data: XOR<InventoryStockCreateInput, InventoryStockUncheckedCreateInput>
  }

  /**
   * InventoryStock createMany
   */
  export type InventoryStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryStocks.
     */
    data: InventoryStockCreateManyInput | InventoryStockCreateManyInput[]
  }

  /**
   * InventoryStock createManyAndReturn
   */
  export type InventoryStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryStocks.
     */
    data: InventoryStockCreateManyInput | InventoryStockCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryStock update
   */
  export type InventoryStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryStock.
     */
    data: XOR<InventoryStockUpdateInput, InventoryStockUncheckedUpdateInput>
    /**
     * Choose, which InventoryStock to update.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock updateMany
   */
  export type InventoryStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryStocks.
     */
    data: XOR<InventoryStockUpdateManyMutationInput, InventoryStockUncheckedUpdateManyInput>
    /**
     * Filter which InventoryStocks to update
     */
    where?: InventoryStockWhereInput
    /**
     * Limit how many InventoryStocks to update.
     */
    limit?: number
  }

  /**
   * InventoryStock updateManyAndReturn
   */
  export type InventoryStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * The data used to update InventoryStocks.
     */
    data: XOR<InventoryStockUpdateManyMutationInput, InventoryStockUncheckedUpdateManyInput>
    /**
     * Filter which InventoryStocks to update
     */
    where?: InventoryStockWhereInput
    /**
     * Limit how many InventoryStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryStock upsert
   */
  export type InventoryStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryStock to update in case it exists.
     */
    where: InventoryStockWhereUniqueInput
    /**
     * In case the InventoryStock found by the `where` argument doesn't exist, create a new InventoryStock with this data.
     */
    create: XOR<InventoryStockCreateInput, InventoryStockUncheckedCreateInput>
    /**
     * In case the InventoryStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryStockUpdateInput, InventoryStockUncheckedUpdateInput>
  }

  /**
   * InventoryStock delete
   */
  export type InventoryStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
    /**
     * Filter which InventoryStock to delete.
     */
    where: InventoryStockWhereUniqueInput
  }

  /**
   * InventoryStock deleteMany
   */
  export type InventoryStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryStocks to delete
     */
    where?: InventoryStockWhereInput
    /**
     * Limit how many InventoryStocks to delete.
     */
    limit?: number
  }

  /**
   * InventoryStock without action
   */
  export type InventoryStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryStock
     */
    select?: InventoryStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryStock
     */
    omit?: InventoryStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryStockInclude<ExtArgs> | null
  }


  /**
   * Model ProductSize
   */

  export type AggregateProductSize = {
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  export type ProductSizeAvgAggregateOutputType = {
    priceDelta: number | null
    sortOrder: number | null
  }

  export type ProductSizeSumAggregateOutputType = {
    priceDelta: number | null
    sortOrder: number | null
  }

  export type ProductSizeMinAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    priceDelta: number | null
    sortOrder: number | null
  }

  export type ProductSizeMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    priceDelta: number | null
    sortOrder: number | null
  }

  export type ProductSizeCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    priceDelta: number
    sortOrder: number
    _all: number
  }


  export type ProductSizeAvgAggregateInputType = {
    priceDelta?: true
    sortOrder?: true
  }

  export type ProductSizeSumAggregateInputType = {
    priceDelta?: true
    sortOrder?: true
  }

  export type ProductSizeMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    priceDelta?: true
    sortOrder?: true
  }

  export type ProductSizeMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    priceDelta?: true
    sortOrder?: true
  }

  export type ProductSizeCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    priceDelta?: true
    sortOrder?: true
    _all?: true
  }

  export type ProductSizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSize to aggregate.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSizes
    **/
    _count?: true | ProductSizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSizeMaxAggregateInputType
  }

  export type GetProductSizeAggregateType<T extends ProductSizeAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSize[P]>
      : GetScalarType<T[P], AggregateProductSize[P]>
  }




  export type ProductSizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSizeWhereInput
    orderBy?: ProductSizeOrderByWithAggregationInput | ProductSizeOrderByWithAggregationInput[]
    by: ProductSizeScalarFieldEnum[] | ProductSizeScalarFieldEnum
    having?: ProductSizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSizeCountAggregateInputType | true
    _avg?: ProductSizeAvgAggregateInputType
    _sum?: ProductSizeSumAggregateInputType
    _min?: ProductSizeMinAggregateInputType
    _max?: ProductSizeMaxAggregateInputType
  }

  export type ProductSizeGroupByOutputType = {
    id: string
    productId: string
    name: string
    priceDelta: number
    sortOrder: number
    _count: ProductSizeCountAggregateOutputType | null
    _avg: ProductSizeAvgAggregateOutputType | null
    _sum: ProductSizeSumAggregateOutputType | null
    _min: ProductSizeMinAggregateOutputType | null
    _max: ProductSizeMaxAggregateOutputType | null
  }

  type GetProductSizeGroupByPayload<T extends ProductSizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSizeGroupByOutputType[P]>
        }
      >
    >


  export type ProductSizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>

  export type ProductSizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>

  export type ProductSizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSize"]>

  export type ProductSizeSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
  }

  export type ProductSizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "priceDelta" | "sortOrder", ExtArgs["result"]["productSize"]>
  export type ProductSizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductSizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSize"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      name: string
      priceDelta: number
      sortOrder: number
    }, ExtArgs["result"]["productSize"]>
    composites: {}
  }

  type ProductSizeGetPayload<S extends boolean | null | undefined | ProductSizeDefaultArgs> = $Result.GetResult<Prisma.$ProductSizePayload, S>

  type ProductSizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSizeCountAggregateInputType | true
    }

  export interface ProductSizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSize'], meta: { name: 'ProductSize' } }
    /**
     * Find zero or one ProductSize that matches the filter.
     * @param {ProductSizeFindUniqueArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSizeFindUniqueArgs>(args: SelectSubset<T, ProductSizeFindUniqueArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSize that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSizeFindUniqueOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSizeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSizeFindFirstArgs>(args?: SelectSubset<T, ProductSizeFindFirstArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSize that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindFirstOrThrowArgs} args - Arguments to find a ProductSize
     * @example
     * // Get one ProductSize
     * const productSize = await prisma.productSize.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSizeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSizes
     * const productSizes = await prisma.productSize.findMany()
     * 
     * // Get first 10 ProductSizes
     * const productSizes = await prisma.productSize.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSizeWithIdOnly = await prisma.productSize.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSizeFindManyArgs>(args?: SelectSubset<T, ProductSizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSize.
     * @param {ProductSizeCreateArgs} args - Arguments to create a ProductSize.
     * @example
     * // Create one ProductSize
     * const ProductSize = await prisma.productSize.create({
     *   data: {
     *     // ... data to create a ProductSize
     *   }
     * })
     * 
     */
    create<T extends ProductSizeCreateArgs>(args: SelectSubset<T, ProductSizeCreateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSizes.
     * @param {ProductSizeCreateManyArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSizeCreateManyArgs>(args?: SelectSubset<T, ProductSizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSizes and returns the data saved in the database.
     * @param {ProductSizeCreateManyAndReturnArgs} args - Arguments to create many ProductSizes.
     * @example
     * // Create many ProductSizes
     * const productSize = await prisma.productSize.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSizes and only return the `id`
     * const productSizeWithIdOnly = await prisma.productSize.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSizeCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSize.
     * @param {ProductSizeDeleteArgs} args - Arguments to delete one ProductSize.
     * @example
     * // Delete one ProductSize
     * const ProductSize = await prisma.productSize.delete({
     *   where: {
     *     // ... filter to delete one ProductSize
     *   }
     * })
     * 
     */
    delete<T extends ProductSizeDeleteArgs>(args: SelectSubset<T, ProductSizeDeleteArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSize.
     * @param {ProductSizeUpdateArgs} args - Arguments to update one ProductSize.
     * @example
     * // Update one ProductSize
     * const productSize = await prisma.productSize.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSizeUpdateArgs>(args: SelectSubset<T, ProductSizeUpdateArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSizes.
     * @param {ProductSizeDeleteManyArgs} args - Arguments to filter ProductSizes to delete.
     * @example
     * // Delete a few ProductSizes
     * const { count } = await prisma.productSize.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSizeDeleteManyArgs>(args?: SelectSubset<T, ProductSizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSizeUpdateManyArgs>(args: SelectSubset<T, ProductSizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSizes and returns the data updated in the database.
     * @param {ProductSizeUpdateManyAndReturnArgs} args - Arguments to update many ProductSizes.
     * @example
     * // Update many ProductSizes
     * const productSize = await prisma.productSize.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSizes and only return the `id`
     * const productSizeWithIdOnly = await prisma.productSize.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductSizeUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSize.
     * @param {ProductSizeUpsertArgs} args - Arguments to update or create a ProductSize.
     * @example
     * // Update or create a ProductSize
     * const productSize = await prisma.productSize.upsert({
     *   create: {
     *     // ... data to create a ProductSize
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSize we want to update
     *   }
     * })
     */
    upsert<T extends ProductSizeUpsertArgs>(args: SelectSubset<T, ProductSizeUpsertArgs<ExtArgs>>): Prisma__ProductSizeClient<$Result.GetResult<Prisma.$ProductSizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeCountArgs} args - Arguments to filter ProductSizes to count.
     * @example
     * // Count the number of ProductSizes
     * const count = await prisma.productSize.count({
     *   where: {
     *     // ... the filter for the ProductSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductSizeCountArgs>(
      args?: Subset<T, ProductSizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSizeAggregateArgs>(args: Subset<T, ProductSizeAggregateArgs>): Prisma.PrismaPromise<GetProductSizeAggregateType<T>>

    /**
     * Group by ProductSize.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSizeGroupByArgs} args - Group by arguments.
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
      T extends ProductSizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSizeGroupByArgs['orderBy'] }
        : { orderBy?: ProductSizeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSize model
   */
  readonly fields: ProductSizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSize.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductSize model
   */
  interface ProductSizeFieldRefs {
    readonly id: FieldRef<"ProductSize", 'String'>
    readonly productId: FieldRef<"ProductSize", 'String'>
    readonly name: FieldRef<"ProductSize", 'String'>
    readonly priceDelta: FieldRef<"ProductSize", 'Int'>
    readonly sortOrder: FieldRef<"ProductSize", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProductSize findUnique
   */
  export type ProductSizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findUniqueOrThrow
   */
  export type ProductSizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize findFirst
   */
  export type ProductSizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findFirstOrThrow
   */
  export type ProductSizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSize to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSizes.
     */
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize findMany
   */
  export type ProductSizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter, which ProductSizes to fetch.
     */
    where?: ProductSizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSizes to fetch.
     */
    orderBy?: ProductSizeOrderByWithRelationInput | ProductSizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSizes.
     */
    cursor?: ProductSizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSizes.
     */
    skip?: number
    distinct?: ProductSizeScalarFieldEnum | ProductSizeScalarFieldEnum[]
  }

  /**
   * ProductSize create
   */
  export type ProductSizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSize.
     */
    data: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
  }

  /**
   * ProductSize createMany
   */
  export type ProductSizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
  }

  /**
   * ProductSize createManyAndReturn
   */
  export type ProductSizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSizes.
     */
    data: ProductSizeCreateManyInput | ProductSizeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSize update
   */
  export type ProductSizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSize.
     */
    data: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
    /**
     * Choose, which ProductSize to update.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize updateMany
   */
  export type ProductSizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
  }

  /**
   * ProductSize updateManyAndReturn
   */
  export type ProductSizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * The data used to update ProductSizes.
     */
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyInput>
    /**
     * Filter which ProductSizes to update
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSize upsert
   */
  export type ProductSizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSize to update in case it exists.
     */
    where: ProductSizeWhereUniqueInput
    /**
     * In case the ProductSize found by the `where` argument doesn't exist, create a new ProductSize with this data.
     */
    create: XOR<ProductSizeCreateInput, ProductSizeUncheckedCreateInput>
    /**
     * In case the ProductSize was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSizeUpdateInput, ProductSizeUncheckedUpdateInput>
  }

  /**
   * ProductSize delete
   */
  export type ProductSizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
    /**
     * Filter which ProductSize to delete.
     */
    where: ProductSizeWhereUniqueInput
  }

  /**
   * ProductSize deleteMany
   */
  export type ProductSizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSizes to delete
     */
    where?: ProductSizeWhereInput
    /**
     * Limit how many ProductSizes to delete.
     */
    limit?: number
  }

  /**
   * ProductSize without action
   */
  export type ProductSizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSize
     */
    select?: ProductSizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSize
     */
    omit?: ProductSizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSizeInclude<ExtArgs> | null
  }


  /**
   * Model VariationGroup
   */

  export type AggregateVariationGroup = {
    _count: VariationGroupCountAggregateOutputType | null
    _avg: VariationGroupAvgAggregateOutputType | null
    _sum: VariationGroupSumAggregateOutputType | null
    _min: VariationGroupMinAggregateOutputType | null
    _max: VariationGroupMaxAggregateOutputType | null
  }

  export type VariationGroupAvgAggregateOutputType = {
    minSelectable: number | null
    maxSelectable: number | null
    sortOrder: number | null
  }

  export type VariationGroupSumAggregateOutputType = {
    minSelectable: number | null
    maxSelectable: number | null
    sortOrder: number | null
  }

  export type VariationGroupMinAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    minSelectable: number | null
    maxSelectable: number | null
    required: boolean | null
    sortOrder: number | null
  }

  export type VariationGroupMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    name: string | null
    minSelectable: number | null
    maxSelectable: number | null
    required: boolean | null
    sortOrder: number | null
  }

  export type VariationGroupCountAggregateOutputType = {
    id: number
    productId: number
    name: number
    minSelectable: number
    maxSelectable: number
    required: number
    sortOrder: number
    _all: number
  }


  export type VariationGroupAvgAggregateInputType = {
    minSelectable?: true
    maxSelectable?: true
    sortOrder?: true
  }

  export type VariationGroupSumAggregateInputType = {
    minSelectable?: true
    maxSelectable?: true
    sortOrder?: true
  }

  export type VariationGroupMinAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    minSelectable?: true
    maxSelectable?: true
    required?: true
    sortOrder?: true
  }

  export type VariationGroupMaxAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    minSelectable?: true
    maxSelectable?: true
    required?: true
    sortOrder?: true
  }

  export type VariationGroupCountAggregateInputType = {
    id?: true
    productId?: true
    name?: true
    minSelectable?: true
    maxSelectable?: true
    required?: true
    sortOrder?: true
    _all?: true
  }

  export type VariationGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariationGroup to aggregate.
     */
    where?: VariationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationGroups to fetch.
     */
    orderBy?: VariationGroupOrderByWithRelationInput | VariationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariationGroups
    **/
    _count?: true | VariationGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationGroupMaxAggregateInputType
  }

  export type GetVariationGroupAggregateType<T extends VariationGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateVariationGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariationGroup[P]>
      : GetScalarType<T[P], AggregateVariationGroup[P]>
  }




  export type VariationGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationGroupWhereInput
    orderBy?: VariationGroupOrderByWithAggregationInput | VariationGroupOrderByWithAggregationInput[]
    by: VariationGroupScalarFieldEnum[] | VariationGroupScalarFieldEnum
    having?: VariationGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationGroupCountAggregateInputType | true
    _avg?: VariationGroupAvgAggregateInputType
    _sum?: VariationGroupSumAggregateInputType
    _min?: VariationGroupMinAggregateInputType
    _max?: VariationGroupMaxAggregateInputType
  }

  export type VariationGroupGroupByOutputType = {
    id: string
    productId: string
    name: string
    minSelectable: number
    maxSelectable: number
    required: boolean
    sortOrder: number
    _count: VariationGroupCountAggregateOutputType | null
    _avg: VariationGroupAvgAggregateOutputType | null
    _sum: VariationGroupSumAggregateOutputType | null
    _min: VariationGroupMinAggregateOutputType | null
    _max: VariationGroupMaxAggregateOutputType | null
  }

  type GetVariationGroupGroupByPayload<T extends VariationGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariationGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationGroupGroupByOutputType[P]>
            : GetScalarType<T[P], VariationGroupGroupByOutputType[P]>
        }
      >
    >


  export type VariationGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    minSelectable?: boolean
    maxSelectable?: boolean
    required?: boolean
    sortOrder?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    choices?: boolean | VariationGroup$choicesArgs<ExtArgs>
    _count?: boolean | VariationGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variationGroup"]>

  export type VariationGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    minSelectable?: boolean
    maxSelectable?: boolean
    required?: boolean
    sortOrder?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variationGroup"]>

  export type VariationGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    name?: boolean
    minSelectable?: boolean
    maxSelectable?: boolean
    required?: boolean
    sortOrder?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variationGroup"]>

  export type VariationGroupSelectScalar = {
    id?: boolean
    productId?: boolean
    name?: boolean
    minSelectable?: boolean
    maxSelectable?: boolean
    required?: boolean
    sortOrder?: boolean
  }

  export type VariationGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "name" | "minSelectable" | "maxSelectable" | "required" | "sortOrder", ExtArgs["result"]["variationGroup"]>
  export type VariationGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    choices?: boolean | VariationGroup$choicesArgs<ExtArgs>
    _count?: boolean | VariationGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VariationGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariationGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariationGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariationGroup"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      choices: Prisma.$VariationChoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      name: string
      minSelectable: number
      maxSelectable: number
      required: boolean
      sortOrder: number
    }, ExtArgs["result"]["variationGroup"]>
    composites: {}
  }

  type VariationGroupGetPayload<S extends boolean | null | undefined | VariationGroupDefaultArgs> = $Result.GetResult<Prisma.$VariationGroupPayload, S>

  type VariationGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariationGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariationGroupCountAggregateInputType | true
    }

  export interface VariationGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariationGroup'], meta: { name: 'VariationGroup' } }
    /**
     * Find zero or one VariationGroup that matches the filter.
     * @param {VariationGroupFindUniqueArgs} args - Arguments to find a VariationGroup
     * @example
     * // Get one VariationGroup
     * const variationGroup = await prisma.variationGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationGroupFindUniqueArgs>(args: SelectSubset<T, VariationGroupFindUniqueArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariationGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariationGroupFindUniqueOrThrowArgs} args - Arguments to find a VariationGroup
     * @example
     * // Get one VariationGroup
     * const variationGroup = await prisma.variationGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, VariationGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariationGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupFindFirstArgs} args - Arguments to find a VariationGroup
     * @example
     * // Get one VariationGroup
     * const variationGroup = await prisma.variationGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationGroupFindFirstArgs>(args?: SelectSubset<T, VariationGroupFindFirstArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariationGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupFindFirstOrThrowArgs} args - Arguments to find a VariationGroup
     * @example
     * // Get one VariationGroup
     * const variationGroup = await prisma.variationGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, VariationGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariationGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariationGroups
     * const variationGroups = await prisma.variationGroup.findMany()
     * 
     * // Get first 10 VariationGroups
     * const variationGroups = await prisma.variationGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variationGroupWithIdOnly = await prisma.variationGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariationGroupFindManyArgs>(args?: SelectSubset<T, VariationGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariationGroup.
     * @param {VariationGroupCreateArgs} args - Arguments to create a VariationGroup.
     * @example
     * // Create one VariationGroup
     * const VariationGroup = await prisma.variationGroup.create({
     *   data: {
     *     // ... data to create a VariationGroup
     *   }
     * })
     * 
     */
    create<T extends VariationGroupCreateArgs>(args: SelectSubset<T, VariationGroupCreateArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariationGroups.
     * @param {VariationGroupCreateManyArgs} args - Arguments to create many VariationGroups.
     * @example
     * // Create many VariationGroups
     * const variationGroup = await prisma.variationGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariationGroupCreateManyArgs>(args?: SelectSubset<T, VariationGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariationGroups and returns the data saved in the database.
     * @param {VariationGroupCreateManyAndReturnArgs} args - Arguments to create many VariationGroups.
     * @example
     * // Create many VariationGroups
     * const variationGroup = await prisma.variationGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariationGroups and only return the `id`
     * const variationGroupWithIdOnly = await prisma.variationGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariationGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, VariationGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariationGroup.
     * @param {VariationGroupDeleteArgs} args - Arguments to delete one VariationGroup.
     * @example
     * // Delete one VariationGroup
     * const VariationGroup = await prisma.variationGroup.delete({
     *   where: {
     *     // ... filter to delete one VariationGroup
     *   }
     * })
     * 
     */
    delete<T extends VariationGroupDeleteArgs>(args: SelectSubset<T, VariationGroupDeleteArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariationGroup.
     * @param {VariationGroupUpdateArgs} args - Arguments to update one VariationGroup.
     * @example
     * // Update one VariationGroup
     * const variationGroup = await prisma.variationGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariationGroupUpdateArgs>(args: SelectSubset<T, VariationGroupUpdateArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariationGroups.
     * @param {VariationGroupDeleteManyArgs} args - Arguments to filter VariationGroups to delete.
     * @example
     * // Delete a few VariationGroups
     * const { count } = await prisma.variationGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariationGroupDeleteManyArgs>(args?: SelectSubset<T, VariationGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariationGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariationGroups
     * const variationGroup = await prisma.variationGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariationGroupUpdateManyArgs>(args: SelectSubset<T, VariationGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariationGroups and returns the data updated in the database.
     * @param {VariationGroupUpdateManyAndReturnArgs} args - Arguments to update many VariationGroups.
     * @example
     * // Update many VariationGroups
     * const variationGroup = await prisma.variationGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariationGroups and only return the `id`
     * const variationGroupWithIdOnly = await prisma.variationGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariationGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, VariationGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariationGroup.
     * @param {VariationGroupUpsertArgs} args - Arguments to update or create a VariationGroup.
     * @example
     * // Update or create a VariationGroup
     * const variationGroup = await prisma.variationGroup.upsert({
     *   create: {
     *     // ... data to create a VariationGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariationGroup we want to update
     *   }
     * })
     */
    upsert<T extends VariationGroupUpsertArgs>(args: SelectSubset<T, VariationGroupUpsertArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariationGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupCountArgs} args - Arguments to filter VariationGroups to count.
     * @example
     * // Count the number of VariationGroups
     * const count = await prisma.variationGroup.count({
     *   where: {
     *     // ... the filter for the VariationGroups we want to count
     *   }
     * })
    **/
    count<T extends VariationGroupCountArgs>(
      args?: Subset<T, VariationGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariationGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationGroupAggregateArgs>(args: Subset<T, VariationGroupAggregateArgs>): Prisma.PrismaPromise<GetVariationGroupAggregateType<T>>

    /**
     * Group by VariationGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationGroupGroupByArgs} args - Group by arguments.
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
      T extends VariationGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationGroupGroupByArgs['orderBy'] }
        : { orderBy?: VariationGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariationGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariationGroup model
   */
  readonly fields: VariationGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariationGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariationGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    choices<T extends VariationGroup$choicesArgs<ExtArgs> = {}>(args?: Subset<T, VariationGroup$choicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VariationGroup model
   */
  interface VariationGroupFieldRefs {
    readonly id: FieldRef<"VariationGroup", 'String'>
    readonly productId: FieldRef<"VariationGroup", 'String'>
    readonly name: FieldRef<"VariationGroup", 'String'>
    readonly minSelectable: FieldRef<"VariationGroup", 'Int'>
    readonly maxSelectable: FieldRef<"VariationGroup", 'Int'>
    readonly required: FieldRef<"VariationGroup", 'Boolean'>
    readonly sortOrder: FieldRef<"VariationGroup", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VariationGroup findUnique
   */
  export type VariationGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * Filter, which VariationGroup to fetch.
     */
    where: VariationGroupWhereUniqueInput
  }

  /**
   * VariationGroup findUniqueOrThrow
   */
  export type VariationGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * Filter, which VariationGroup to fetch.
     */
    where: VariationGroupWhereUniqueInput
  }

  /**
   * VariationGroup findFirst
   */
  export type VariationGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * Filter, which VariationGroup to fetch.
     */
    where?: VariationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationGroups to fetch.
     */
    orderBy?: VariationGroupOrderByWithRelationInput | VariationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariationGroups.
     */
    cursor?: VariationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariationGroups.
     */
    distinct?: VariationGroupScalarFieldEnum | VariationGroupScalarFieldEnum[]
  }

  /**
   * VariationGroup findFirstOrThrow
   */
  export type VariationGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * Filter, which VariationGroup to fetch.
     */
    where?: VariationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationGroups to fetch.
     */
    orderBy?: VariationGroupOrderByWithRelationInput | VariationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariationGroups.
     */
    cursor?: VariationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariationGroups.
     */
    distinct?: VariationGroupScalarFieldEnum | VariationGroupScalarFieldEnum[]
  }

  /**
   * VariationGroup findMany
   */
  export type VariationGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * Filter, which VariationGroups to fetch.
     */
    where?: VariationGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationGroups to fetch.
     */
    orderBy?: VariationGroupOrderByWithRelationInput | VariationGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariationGroups.
     */
    cursor?: VariationGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationGroups.
     */
    skip?: number
    distinct?: VariationGroupScalarFieldEnum | VariationGroupScalarFieldEnum[]
  }

  /**
   * VariationGroup create
   */
  export type VariationGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a VariationGroup.
     */
    data: XOR<VariationGroupCreateInput, VariationGroupUncheckedCreateInput>
  }

  /**
   * VariationGroup createMany
   */
  export type VariationGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariationGroups.
     */
    data: VariationGroupCreateManyInput | VariationGroupCreateManyInput[]
  }

  /**
   * VariationGroup createManyAndReturn
   */
  export type VariationGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * The data used to create many VariationGroups.
     */
    data: VariationGroupCreateManyInput | VariationGroupCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariationGroup update
   */
  export type VariationGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a VariationGroup.
     */
    data: XOR<VariationGroupUpdateInput, VariationGroupUncheckedUpdateInput>
    /**
     * Choose, which VariationGroup to update.
     */
    where: VariationGroupWhereUniqueInput
  }

  /**
   * VariationGroup updateMany
   */
  export type VariationGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariationGroups.
     */
    data: XOR<VariationGroupUpdateManyMutationInput, VariationGroupUncheckedUpdateManyInput>
    /**
     * Filter which VariationGroups to update
     */
    where?: VariationGroupWhereInput
    /**
     * Limit how many VariationGroups to update.
     */
    limit?: number
  }

  /**
   * VariationGroup updateManyAndReturn
   */
  export type VariationGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * The data used to update VariationGroups.
     */
    data: XOR<VariationGroupUpdateManyMutationInput, VariationGroupUncheckedUpdateManyInput>
    /**
     * Filter which VariationGroups to update
     */
    where?: VariationGroupWhereInput
    /**
     * Limit how many VariationGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariationGroup upsert
   */
  export type VariationGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the VariationGroup to update in case it exists.
     */
    where: VariationGroupWhereUniqueInput
    /**
     * In case the VariationGroup found by the `where` argument doesn't exist, create a new VariationGroup with this data.
     */
    create: XOR<VariationGroupCreateInput, VariationGroupUncheckedCreateInput>
    /**
     * In case the VariationGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariationGroupUpdateInput, VariationGroupUncheckedUpdateInput>
  }

  /**
   * VariationGroup delete
   */
  export type VariationGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
    /**
     * Filter which VariationGroup to delete.
     */
    where: VariationGroupWhereUniqueInput
  }

  /**
   * VariationGroup deleteMany
   */
  export type VariationGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariationGroups to delete
     */
    where?: VariationGroupWhereInput
    /**
     * Limit how many VariationGroups to delete.
     */
    limit?: number
  }

  /**
   * VariationGroup.choices
   */
  export type VariationGroup$choicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    where?: VariationChoiceWhereInput
    orderBy?: VariationChoiceOrderByWithRelationInput | VariationChoiceOrderByWithRelationInput[]
    cursor?: VariationChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariationChoiceScalarFieldEnum | VariationChoiceScalarFieldEnum[]
  }

  /**
   * VariationGroup without action
   */
  export type VariationGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationGroup
     */
    select?: VariationGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationGroup
     */
    omit?: VariationGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationGroupInclude<ExtArgs> | null
  }


  /**
   * Model VariationChoice
   */

  export type AggregateVariationChoice = {
    _count: VariationChoiceCountAggregateOutputType | null
    _avg: VariationChoiceAvgAggregateOutputType | null
    _sum: VariationChoiceSumAggregateOutputType | null
    _min: VariationChoiceMinAggregateOutputType | null
    _max: VariationChoiceMaxAggregateOutputType | null
  }

  export type VariationChoiceAvgAggregateOutputType = {
    priceDelta: number | null
    sortOrder: number | null
  }

  export type VariationChoiceSumAggregateOutputType = {
    priceDelta: number | null
    sortOrder: number | null
  }

  export type VariationChoiceMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    name: string | null
    priceDelta: number | null
    sortOrder: number | null
  }

  export type VariationChoiceMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    name: string | null
    priceDelta: number | null
    sortOrder: number | null
  }

  export type VariationChoiceCountAggregateOutputType = {
    id: number
    groupId: number
    name: number
    priceDelta: number
    sortOrder: number
    _all: number
  }


  export type VariationChoiceAvgAggregateInputType = {
    priceDelta?: true
    sortOrder?: true
  }

  export type VariationChoiceSumAggregateInputType = {
    priceDelta?: true
    sortOrder?: true
  }

  export type VariationChoiceMinAggregateInputType = {
    id?: true
    groupId?: true
    name?: true
    priceDelta?: true
    sortOrder?: true
  }

  export type VariationChoiceMaxAggregateInputType = {
    id?: true
    groupId?: true
    name?: true
    priceDelta?: true
    sortOrder?: true
  }

  export type VariationChoiceCountAggregateInputType = {
    id?: true
    groupId?: true
    name?: true
    priceDelta?: true
    sortOrder?: true
    _all?: true
  }

  export type VariationChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariationChoice to aggregate.
     */
    where?: VariationChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationChoices to fetch.
     */
    orderBy?: VariationChoiceOrderByWithRelationInput | VariationChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariationChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VariationChoices
    **/
    _count?: true | VariationChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariationChoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariationChoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariationChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariationChoiceMaxAggregateInputType
  }

  export type GetVariationChoiceAggregateType<T extends VariationChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateVariationChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariationChoice[P]>
      : GetScalarType<T[P], AggregateVariationChoice[P]>
  }




  export type VariationChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariationChoiceWhereInput
    orderBy?: VariationChoiceOrderByWithAggregationInput | VariationChoiceOrderByWithAggregationInput[]
    by: VariationChoiceScalarFieldEnum[] | VariationChoiceScalarFieldEnum
    having?: VariationChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariationChoiceCountAggregateInputType | true
    _avg?: VariationChoiceAvgAggregateInputType
    _sum?: VariationChoiceSumAggregateInputType
    _min?: VariationChoiceMinAggregateInputType
    _max?: VariationChoiceMaxAggregateInputType
  }

  export type VariationChoiceGroupByOutputType = {
    id: string
    groupId: string
    name: string
    priceDelta: number
    sortOrder: number
    _count: VariationChoiceCountAggregateOutputType | null
    _avg: VariationChoiceAvgAggregateOutputType | null
    _sum: VariationChoiceSumAggregateOutputType | null
    _min: VariationChoiceMinAggregateOutputType | null
    _max: VariationChoiceMaxAggregateOutputType | null
  }

  type GetVariationChoiceGroupByPayload<T extends VariationChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariationChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariationChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariationChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], VariationChoiceGroupByOutputType[P]>
        }
      >
    >


  export type VariationChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
    group?: boolean | VariationGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variationChoice"]>

  export type VariationChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
    group?: boolean | VariationGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variationChoice"]>

  export type VariationChoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
    group?: boolean | VariationGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variationChoice"]>

  export type VariationChoiceSelectScalar = {
    id?: boolean
    groupId?: boolean
    name?: boolean
    priceDelta?: boolean
    sortOrder?: boolean
  }

  export type VariationChoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "name" | "priceDelta" | "sortOrder", ExtArgs["result"]["variationChoice"]>
  export type VariationChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | VariationGroupDefaultArgs<ExtArgs>
  }
  export type VariationChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | VariationGroupDefaultArgs<ExtArgs>
  }
  export type VariationChoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | VariationGroupDefaultArgs<ExtArgs>
  }

  export type $VariationChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VariationChoice"
    objects: {
      group: Prisma.$VariationGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      name: string
      priceDelta: number
      sortOrder: number
    }, ExtArgs["result"]["variationChoice"]>
    composites: {}
  }

  type VariationChoiceGetPayload<S extends boolean | null | undefined | VariationChoiceDefaultArgs> = $Result.GetResult<Prisma.$VariationChoicePayload, S>

  type VariationChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariationChoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariationChoiceCountAggregateInputType | true
    }

  export interface VariationChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VariationChoice'], meta: { name: 'VariationChoice' } }
    /**
     * Find zero or one VariationChoice that matches the filter.
     * @param {VariationChoiceFindUniqueArgs} args - Arguments to find a VariationChoice
     * @example
     * // Get one VariationChoice
     * const variationChoice = await prisma.variationChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariationChoiceFindUniqueArgs>(args: SelectSubset<T, VariationChoiceFindUniqueArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VariationChoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariationChoiceFindUniqueOrThrowArgs} args - Arguments to find a VariationChoice
     * @example
     * // Get one VariationChoice
     * const variationChoice = await prisma.variationChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariationChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, VariationChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariationChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceFindFirstArgs} args - Arguments to find a VariationChoice
     * @example
     * // Get one VariationChoice
     * const variationChoice = await prisma.variationChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariationChoiceFindFirstArgs>(args?: SelectSubset<T, VariationChoiceFindFirstArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VariationChoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceFindFirstOrThrowArgs} args - Arguments to find a VariationChoice
     * @example
     * // Get one VariationChoice
     * const variationChoice = await prisma.variationChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariationChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, VariationChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VariationChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VariationChoices
     * const variationChoices = await prisma.variationChoice.findMany()
     * 
     * // Get first 10 VariationChoices
     * const variationChoices = await prisma.variationChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variationChoiceWithIdOnly = await prisma.variationChoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariationChoiceFindManyArgs>(args?: SelectSubset<T, VariationChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VariationChoice.
     * @param {VariationChoiceCreateArgs} args - Arguments to create a VariationChoice.
     * @example
     * // Create one VariationChoice
     * const VariationChoice = await prisma.variationChoice.create({
     *   data: {
     *     // ... data to create a VariationChoice
     *   }
     * })
     * 
     */
    create<T extends VariationChoiceCreateArgs>(args: SelectSubset<T, VariationChoiceCreateArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VariationChoices.
     * @param {VariationChoiceCreateManyArgs} args - Arguments to create many VariationChoices.
     * @example
     * // Create many VariationChoices
     * const variationChoice = await prisma.variationChoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariationChoiceCreateManyArgs>(args?: SelectSubset<T, VariationChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VariationChoices and returns the data saved in the database.
     * @param {VariationChoiceCreateManyAndReturnArgs} args - Arguments to create many VariationChoices.
     * @example
     * // Create many VariationChoices
     * const variationChoice = await prisma.variationChoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VariationChoices and only return the `id`
     * const variationChoiceWithIdOnly = await prisma.variationChoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariationChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, VariationChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VariationChoice.
     * @param {VariationChoiceDeleteArgs} args - Arguments to delete one VariationChoice.
     * @example
     * // Delete one VariationChoice
     * const VariationChoice = await prisma.variationChoice.delete({
     *   where: {
     *     // ... filter to delete one VariationChoice
     *   }
     * })
     * 
     */
    delete<T extends VariationChoiceDeleteArgs>(args: SelectSubset<T, VariationChoiceDeleteArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VariationChoice.
     * @param {VariationChoiceUpdateArgs} args - Arguments to update one VariationChoice.
     * @example
     * // Update one VariationChoice
     * const variationChoice = await prisma.variationChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariationChoiceUpdateArgs>(args: SelectSubset<T, VariationChoiceUpdateArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VariationChoices.
     * @param {VariationChoiceDeleteManyArgs} args - Arguments to filter VariationChoices to delete.
     * @example
     * // Delete a few VariationChoices
     * const { count } = await prisma.variationChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariationChoiceDeleteManyArgs>(args?: SelectSubset<T, VariationChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariationChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VariationChoices
     * const variationChoice = await prisma.variationChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariationChoiceUpdateManyArgs>(args: SelectSubset<T, VariationChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VariationChoices and returns the data updated in the database.
     * @param {VariationChoiceUpdateManyAndReturnArgs} args - Arguments to update many VariationChoices.
     * @example
     * // Update many VariationChoices
     * const variationChoice = await prisma.variationChoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VariationChoices and only return the `id`
     * const variationChoiceWithIdOnly = await prisma.variationChoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariationChoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, VariationChoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VariationChoice.
     * @param {VariationChoiceUpsertArgs} args - Arguments to update or create a VariationChoice.
     * @example
     * // Update or create a VariationChoice
     * const variationChoice = await prisma.variationChoice.upsert({
     *   create: {
     *     // ... data to create a VariationChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VariationChoice we want to update
     *   }
     * })
     */
    upsert<T extends VariationChoiceUpsertArgs>(args: SelectSubset<T, VariationChoiceUpsertArgs<ExtArgs>>): Prisma__VariationChoiceClient<$Result.GetResult<Prisma.$VariationChoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VariationChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceCountArgs} args - Arguments to filter VariationChoices to count.
     * @example
     * // Count the number of VariationChoices
     * const count = await prisma.variationChoice.count({
     *   where: {
     *     // ... the filter for the VariationChoices we want to count
     *   }
     * })
    **/
    count<T extends VariationChoiceCountArgs>(
      args?: Subset<T, VariationChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariationChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VariationChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariationChoiceAggregateArgs>(args: Subset<T, VariationChoiceAggregateArgs>): Prisma.PrismaPromise<GetVariationChoiceAggregateType<T>>

    /**
     * Group by VariationChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariationChoiceGroupByArgs} args - Group by arguments.
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
      T extends VariationChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariationChoiceGroupByArgs['orderBy'] }
        : { orderBy?: VariationChoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariationChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariationChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VariationChoice model
   */
  readonly fields: VariationChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VariationChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariationChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends VariationGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariationGroupDefaultArgs<ExtArgs>>): Prisma__VariationGroupClient<$Result.GetResult<Prisma.$VariationGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VariationChoice model
   */
  interface VariationChoiceFieldRefs {
    readonly id: FieldRef<"VariationChoice", 'String'>
    readonly groupId: FieldRef<"VariationChoice", 'String'>
    readonly name: FieldRef<"VariationChoice", 'String'>
    readonly priceDelta: FieldRef<"VariationChoice", 'Int'>
    readonly sortOrder: FieldRef<"VariationChoice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VariationChoice findUnique
   */
  export type VariationChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * Filter, which VariationChoice to fetch.
     */
    where: VariationChoiceWhereUniqueInput
  }

  /**
   * VariationChoice findUniqueOrThrow
   */
  export type VariationChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * Filter, which VariationChoice to fetch.
     */
    where: VariationChoiceWhereUniqueInput
  }

  /**
   * VariationChoice findFirst
   */
  export type VariationChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * Filter, which VariationChoice to fetch.
     */
    where?: VariationChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationChoices to fetch.
     */
    orderBy?: VariationChoiceOrderByWithRelationInput | VariationChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariationChoices.
     */
    cursor?: VariationChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariationChoices.
     */
    distinct?: VariationChoiceScalarFieldEnum | VariationChoiceScalarFieldEnum[]
  }

  /**
   * VariationChoice findFirstOrThrow
   */
  export type VariationChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * Filter, which VariationChoice to fetch.
     */
    where?: VariationChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationChoices to fetch.
     */
    orderBy?: VariationChoiceOrderByWithRelationInput | VariationChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VariationChoices.
     */
    cursor?: VariationChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VariationChoices.
     */
    distinct?: VariationChoiceScalarFieldEnum | VariationChoiceScalarFieldEnum[]
  }

  /**
   * VariationChoice findMany
   */
  export type VariationChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * Filter, which VariationChoices to fetch.
     */
    where?: VariationChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VariationChoices to fetch.
     */
    orderBy?: VariationChoiceOrderByWithRelationInput | VariationChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VariationChoices.
     */
    cursor?: VariationChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VariationChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VariationChoices.
     */
    skip?: number
    distinct?: VariationChoiceScalarFieldEnum | VariationChoiceScalarFieldEnum[]
  }

  /**
   * VariationChoice create
   */
  export type VariationChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a VariationChoice.
     */
    data: XOR<VariationChoiceCreateInput, VariationChoiceUncheckedCreateInput>
  }

  /**
   * VariationChoice createMany
   */
  export type VariationChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VariationChoices.
     */
    data: VariationChoiceCreateManyInput | VariationChoiceCreateManyInput[]
  }

  /**
   * VariationChoice createManyAndReturn
   */
  export type VariationChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * The data used to create many VariationChoices.
     */
    data: VariationChoiceCreateManyInput | VariationChoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariationChoice update
   */
  export type VariationChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a VariationChoice.
     */
    data: XOR<VariationChoiceUpdateInput, VariationChoiceUncheckedUpdateInput>
    /**
     * Choose, which VariationChoice to update.
     */
    where: VariationChoiceWhereUniqueInput
  }

  /**
   * VariationChoice updateMany
   */
  export type VariationChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VariationChoices.
     */
    data: XOR<VariationChoiceUpdateManyMutationInput, VariationChoiceUncheckedUpdateManyInput>
    /**
     * Filter which VariationChoices to update
     */
    where?: VariationChoiceWhereInput
    /**
     * Limit how many VariationChoices to update.
     */
    limit?: number
  }

  /**
   * VariationChoice updateManyAndReturn
   */
  export type VariationChoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * The data used to update VariationChoices.
     */
    data: XOR<VariationChoiceUpdateManyMutationInput, VariationChoiceUncheckedUpdateManyInput>
    /**
     * Filter which VariationChoices to update
     */
    where?: VariationChoiceWhereInput
    /**
     * Limit how many VariationChoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VariationChoice upsert
   */
  export type VariationChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the VariationChoice to update in case it exists.
     */
    where: VariationChoiceWhereUniqueInput
    /**
     * In case the VariationChoice found by the `where` argument doesn't exist, create a new VariationChoice with this data.
     */
    create: XOR<VariationChoiceCreateInput, VariationChoiceUncheckedCreateInput>
    /**
     * In case the VariationChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariationChoiceUpdateInput, VariationChoiceUncheckedUpdateInput>
  }

  /**
   * VariationChoice delete
   */
  export type VariationChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
    /**
     * Filter which VariationChoice to delete.
     */
    where: VariationChoiceWhereUniqueInput
  }

  /**
   * VariationChoice deleteMany
   */
  export type VariationChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VariationChoices to delete
     */
    where?: VariationChoiceWhereInput
    /**
     * Limit how many VariationChoices to delete.
     */
    limit?: number
  }

  /**
   * VariationChoice without action
   */
  export type VariationChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariationChoice
     */
    select?: VariationChoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VariationChoice
     */
    omit?: VariationChoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariationChoiceInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    orderNumber: number | null
    subtotal: number | null
    discount: number | null
    fees: number | null
    tax: number | null
    total: number | null
  }

  export type OrderSumAggregateOutputType = {
    orderNumber: number | null
    subtotal: number | null
    discount: number | null
    fees: number | null
    tax: number | null
    total: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: number | null
    subtotal: number | null
    discount: number | null
    fees: number | null
    tax: number | null
    total: number | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: number | null
    subtotal: number | null
    discount: number | null
    fees: number | null
    tax: number | null
    total: number | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    orderNumber?: true
    subtotal?: true
    discount?: true
    fees?: true
    tax?: true
    total?: true
  }

  export type OrderSumAggregateInputType = {
    orderNumber?: true
    subtotal?: true
    discount?: true
    fees?: true
    tax?: true
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    subtotal?: true
    discount?: true
    fees?: true
    tax?: true
    total?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    subtotal?: true
    discount?: true
    fees?: true
    tax?: true
    total?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    subtotal?: true
    discount?: true
    fees?: true
    tax?: true
    total?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    subtotal?: boolean
    discount?: boolean
    fees?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    subtotal?: boolean
    discount?: boolean
    fees?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    subtotal?: boolean
    discount?: boolean
    fees?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    subtotal?: boolean
    discount?: boolean
    fees?: boolean
    tax?: boolean
    total?: boolean
    createdAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "subtotal" | "discount" | "fees" | "tax" | "total" | "createdAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Order$itemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      items: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: number
      subtotal: number
      discount: number
      fees: number
      tax: number
      total: number
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'Int'>
    readonly subtotal: FieldRef<"Order", 'Int'>
    readonly discount: FieldRef<"Order", 'Int'>
    readonly fees: FieldRef<"Order", 'Int'>
    readonly tax: FieldRef<"Order", 'Int'>
    readonly total: FieldRef<"Order", 'Int'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    unitBasePrice: number | null
    quantity: number | null
    lineTotal: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    unitBasePrice: number | null
    quantity: number | null
    lineTotal: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    productName: string | null
    sizeName: string | null
    unitBasePrice: number | null
    quantity: number | null
    lineTotal: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    productName: string | null
    sizeName: string | null
    unitBasePrice: number | null
    quantity: number | null
    lineTotal: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    productName: number
    sizeName: number
    unitBasePrice: number
    quantity: number
    lineTotal: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    unitBasePrice?: true
    quantity?: true
    lineTotal?: true
  }

  export type OrderItemSumAggregateInputType = {
    unitBasePrice?: true
    quantity?: true
    lineTotal?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    productName?: true
    sizeName?: true
    unitBasePrice?: true
    quantity?: true
    lineTotal?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    productName?: true
    sizeName?: true
    unitBasePrice?: true
    quantity?: true
    lineTotal?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    productName?: true
    sizeName?: true
    unitBasePrice?: true
    quantity?: true
    lineTotal?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    productName: string
    sizeName: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    sizeName?: boolean
    unitBasePrice?: boolean
    quantity?: boolean
    lineTotal?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variations?: boolean | OrderItem$variationsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    sizeName?: boolean
    unitBasePrice?: boolean
    quantity?: boolean
    lineTotal?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    sizeName?: boolean
    unitBasePrice?: boolean
    quantity?: boolean
    lineTotal?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    productName?: boolean
    sizeName?: boolean
    unitBasePrice?: boolean
    quantity?: boolean
    lineTotal?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "productName" | "sizeName" | "unitBasePrice" | "quantity" | "lineTotal", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    variations?: boolean | OrderItem$variationsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      variations: Prisma.$OrderItemVariationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      productName: string
      sizeName: string | null
      unitBasePrice: number
      quantity: number
      lineTotal: number
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variations<T extends OrderItem$variationsArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$variationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly productName: FieldRef<"OrderItem", 'String'>
    readonly sizeName: FieldRef<"OrderItem", 'String'>
    readonly unitBasePrice: FieldRef<"OrderItem", 'Int'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly lineTotal: FieldRef<"OrderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.variations
   */
  export type OrderItem$variationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    where?: OrderItemVariationWhereInput
    orderBy?: OrderItemVariationOrderByWithRelationInput | OrderItemVariationOrderByWithRelationInput[]
    cursor?: OrderItemVariationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemVariationScalarFieldEnum | OrderItemVariationScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model OrderItemVariation
   */

  export type AggregateOrderItemVariation = {
    _count: OrderItemVariationCountAggregateOutputType | null
    _avg: OrderItemVariationAvgAggregateOutputType | null
    _sum: OrderItemVariationSumAggregateOutputType | null
    _min: OrderItemVariationMinAggregateOutputType | null
    _max: OrderItemVariationMaxAggregateOutputType | null
  }

  export type OrderItemVariationAvgAggregateOutputType = {
    priceDelta: number | null
  }

  export type OrderItemVariationSumAggregateOutputType = {
    priceDelta: number | null
  }

  export type OrderItemVariationMinAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    groupName: string | null
    choiceName: string | null
    priceDelta: number | null
  }

  export type OrderItemVariationMaxAggregateOutputType = {
    id: string | null
    orderItemId: string | null
    groupName: string | null
    choiceName: string | null
    priceDelta: number | null
  }

  export type OrderItemVariationCountAggregateOutputType = {
    id: number
    orderItemId: number
    groupName: number
    choiceName: number
    priceDelta: number
    _all: number
  }


  export type OrderItemVariationAvgAggregateInputType = {
    priceDelta?: true
  }

  export type OrderItemVariationSumAggregateInputType = {
    priceDelta?: true
  }

  export type OrderItemVariationMinAggregateInputType = {
    id?: true
    orderItemId?: true
    groupName?: true
    choiceName?: true
    priceDelta?: true
  }

  export type OrderItemVariationMaxAggregateInputType = {
    id?: true
    orderItemId?: true
    groupName?: true
    choiceName?: true
    priceDelta?: true
  }

  export type OrderItemVariationCountAggregateInputType = {
    id?: true
    orderItemId?: true
    groupName?: true
    choiceName?: true
    priceDelta?: true
    _all?: true
  }

  export type OrderItemVariationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemVariation to aggregate.
     */
    where?: OrderItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemVariations to fetch.
     */
    orderBy?: OrderItemVariationOrderByWithRelationInput | OrderItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItemVariations
    **/
    _count?: true | OrderItemVariationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemVariationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemVariationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemVariationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemVariationMaxAggregateInputType
  }

  export type GetOrderItemVariationAggregateType<T extends OrderItemVariationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItemVariation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItemVariation[P]>
      : GetScalarType<T[P], AggregateOrderItemVariation[P]>
  }




  export type OrderItemVariationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemVariationWhereInput
    orderBy?: OrderItemVariationOrderByWithAggregationInput | OrderItemVariationOrderByWithAggregationInput[]
    by: OrderItemVariationScalarFieldEnum[] | OrderItemVariationScalarFieldEnum
    having?: OrderItemVariationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemVariationCountAggregateInputType | true
    _avg?: OrderItemVariationAvgAggregateInputType
    _sum?: OrderItemVariationSumAggregateInputType
    _min?: OrderItemVariationMinAggregateInputType
    _max?: OrderItemVariationMaxAggregateInputType
  }

  export type OrderItemVariationGroupByOutputType = {
    id: string
    orderItemId: string
    groupName: string
    choiceName: string
    priceDelta: number
    _count: OrderItemVariationCountAggregateOutputType | null
    _avg: OrderItemVariationAvgAggregateOutputType | null
    _sum: OrderItemVariationSumAggregateOutputType | null
    _min: OrderItemVariationMinAggregateOutputType | null
    _max: OrderItemVariationMaxAggregateOutputType | null
  }

  type GetOrderItemVariationGroupByPayload<T extends OrderItemVariationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemVariationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemVariationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemVariationGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemVariationGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemVariationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    groupName?: boolean
    choiceName?: boolean
    priceDelta?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemVariation"]>

  export type OrderItemVariationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    groupName?: boolean
    choiceName?: boolean
    priceDelta?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemVariation"]>

  export type OrderItemVariationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderItemId?: boolean
    groupName?: boolean
    choiceName?: boolean
    priceDelta?: boolean
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItemVariation"]>

  export type OrderItemVariationSelectScalar = {
    id?: boolean
    orderItemId?: boolean
    groupName?: boolean
    choiceName?: boolean
    priceDelta?: boolean
  }

  export type OrderItemVariationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderItemId" | "groupName" | "choiceName" | "priceDelta", ExtArgs["result"]["orderItemVariation"]>
  export type OrderItemVariationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }
  export type OrderItemVariationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }
  export type OrderItemVariationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | OrderItemDefaultArgs<ExtArgs>
  }

  export type $OrderItemVariationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItemVariation"
    objects: {
      orderItem: Prisma.$OrderItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderItemId: string
      groupName: string
      choiceName: string
      priceDelta: number
    }, ExtArgs["result"]["orderItemVariation"]>
    composites: {}
  }

  type OrderItemVariationGetPayload<S extends boolean | null | undefined | OrderItemVariationDefaultArgs> = $Result.GetResult<Prisma.$OrderItemVariationPayload, S>

  type OrderItemVariationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemVariationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemVariationCountAggregateInputType | true
    }

  export interface OrderItemVariationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItemVariation'], meta: { name: 'OrderItemVariation' } }
    /**
     * Find zero or one OrderItemVariation that matches the filter.
     * @param {OrderItemVariationFindUniqueArgs} args - Arguments to find a OrderItemVariation
     * @example
     * // Get one OrderItemVariation
     * const orderItemVariation = await prisma.orderItemVariation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemVariationFindUniqueArgs>(args: SelectSubset<T, OrderItemVariationFindUniqueArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItemVariation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemVariationFindUniqueOrThrowArgs} args - Arguments to find a OrderItemVariation
     * @example
     * // Get one OrderItemVariation
     * const orderItemVariation = await prisma.orderItemVariation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemVariationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemVariationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemVariation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationFindFirstArgs} args - Arguments to find a OrderItemVariation
     * @example
     * // Get one OrderItemVariation
     * const orderItemVariation = await prisma.orderItemVariation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemVariationFindFirstArgs>(args?: SelectSubset<T, OrderItemVariationFindFirstArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItemVariation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationFindFirstOrThrowArgs} args - Arguments to find a OrderItemVariation
     * @example
     * // Get one OrderItemVariation
     * const orderItemVariation = await prisma.orderItemVariation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemVariationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemVariationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItemVariations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItemVariations
     * const orderItemVariations = await prisma.orderItemVariation.findMany()
     * 
     * // Get first 10 OrderItemVariations
     * const orderItemVariations = await prisma.orderItemVariation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemVariationWithIdOnly = await prisma.orderItemVariation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemVariationFindManyArgs>(args?: SelectSubset<T, OrderItemVariationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItemVariation.
     * @param {OrderItemVariationCreateArgs} args - Arguments to create a OrderItemVariation.
     * @example
     * // Create one OrderItemVariation
     * const OrderItemVariation = await prisma.orderItemVariation.create({
     *   data: {
     *     // ... data to create a OrderItemVariation
     *   }
     * })
     * 
     */
    create<T extends OrderItemVariationCreateArgs>(args: SelectSubset<T, OrderItemVariationCreateArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItemVariations.
     * @param {OrderItemVariationCreateManyArgs} args - Arguments to create many OrderItemVariations.
     * @example
     * // Create many OrderItemVariations
     * const orderItemVariation = await prisma.orderItemVariation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemVariationCreateManyArgs>(args?: SelectSubset<T, OrderItemVariationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItemVariations and returns the data saved in the database.
     * @param {OrderItemVariationCreateManyAndReturnArgs} args - Arguments to create many OrderItemVariations.
     * @example
     * // Create many OrderItemVariations
     * const orderItemVariation = await prisma.orderItemVariation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItemVariations and only return the `id`
     * const orderItemVariationWithIdOnly = await prisma.orderItemVariation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemVariationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemVariationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItemVariation.
     * @param {OrderItemVariationDeleteArgs} args - Arguments to delete one OrderItemVariation.
     * @example
     * // Delete one OrderItemVariation
     * const OrderItemVariation = await prisma.orderItemVariation.delete({
     *   where: {
     *     // ... filter to delete one OrderItemVariation
     *   }
     * })
     * 
     */
    delete<T extends OrderItemVariationDeleteArgs>(args: SelectSubset<T, OrderItemVariationDeleteArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItemVariation.
     * @param {OrderItemVariationUpdateArgs} args - Arguments to update one OrderItemVariation.
     * @example
     * // Update one OrderItemVariation
     * const orderItemVariation = await prisma.orderItemVariation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemVariationUpdateArgs>(args: SelectSubset<T, OrderItemVariationUpdateArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItemVariations.
     * @param {OrderItemVariationDeleteManyArgs} args - Arguments to filter OrderItemVariations to delete.
     * @example
     * // Delete a few OrderItemVariations
     * const { count } = await prisma.orderItemVariation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemVariationDeleteManyArgs>(args?: SelectSubset<T, OrderItemVariationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItemVariations
     * const orderItemVariation = await prisma.orderItemVariation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemVariationUpdateManyArgs>(args: SelectSubset<T, OrderItemVariationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItemVariations and returns the data updated in the database.
     * @param {OrderItemVariationUpdateManyAndReturnArgs} args - Arguments to update many OrderItemVariations.
     * @example
     * // Update many OrderItemVariations
     * const orderItemVariation = await prisma.orderItemVariation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItemVariations and only return the `id`
     * const orderItemVariationWithIdOnly = await prisma.orderItemVariation.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemVariationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemVariationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItemVariation.
     * @param {OrderItemVariationUpsertArgs} args - Arguments to update or create a OrderItemVariation.
     * @example
     * // Update or create a OrderItemVariation
     * const orderItemVariation = await prisma.orderItemVariation.upsert({
     *   create: {
     *     // ... data to create a OrderItemVariation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItemVariation we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemVariationUpsertArgs>(args: SelectSubset<T, OrderItemVariationUpsertArgs<ExtArgs>>): Prisma__OrderItemVariationClient<$Result.GetResult<Prisma.$OrderItemVariationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItemVariations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationCountArgs} args - Arguments to filter OrderItemVariations to count.
     * @example
     * // Count the number of OrderItemVariations
     * const count = await prisma.orderItemVariation.count({
     *   where: {
     *     // ... the filter for the OrderItemVariations we want to count
     *   }
     * })
    **/
    count<T extends OrderItemVariationCountArgs>(
      args?: Subset<T, OrderItemVariationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemVariationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItemVariation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemVariationAggregateArgs>(args: Subset<T, OrderItemVariationAggregateArgs>): Prisma.PrismaPromise<GetOrderItemVariationAggregateType<T>>

    /**
     * Group by OrderItemVariation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemVariationGroupByArgs} args - Group by arguments.
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
      T extends OrderItemVariationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemVariationGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemVariationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemVariationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemVariationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItemVariation model
   */
  readonly fields: OrderItemVariationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItemVariation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemVariationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends OrderItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderItemDefaultArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItemVariation model
   */
  interface OrderItemVariationFieldRefs {
    readonly id: FieldRef<"OrderItemVariation", 'String'>
    readonly orderItemId: FieldRef<"OrderItemVariation", 'String'>
    readonly groupName: FieldRef<"OrderItemVariation", 'String'>
    readonly choiceName: FieldRef<"OrderItemVariation", 'String'>
    readonly priceDelta: FieldRef<"OrderItemVariation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderItemVariation findUnique
   */
  export type OrderItemVariationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemVariation to fetch.
     */
    where: OrderItemVariationWhereUniqueInput
  }

  /**
   * OrderItemVariation findUniqueOrThrow
   */
  export type OrderItemVariationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemVariation to fetch.
     */
    where: OrderItemVariationWhereUniqueInput
  }

  /**
   * OrderItemVariation findFirst
   */
  export type OrderItemVariationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemVariation to fetch.
     */
    where?: OrderItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemVariations to fetch.
     */
    orderBy?: OrderItemVariationOrderByWithRelationInput | OrderItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemVariations.
     */
    cursor?: OrderItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemVariations.
     */
    distinct?: OrderItemVariationScalarFieldEnum | OrderItemVariationScalarFieldEnum[]
  }

  /**
   * OrderItemVariation findFirstOrThrow
   */
  export type OrderItemVariationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemVariation to fetch.
     */
    where?: OrderItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemVariations to fetch.
     */
    orderBy?: OrderItemVariationOrderByWithRelationInput | OrderItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItemVariations.
     */
    cursor?: OrderItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemVariations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItemVariations.
     */
    distinct?: OrderItemVariationScalarFieldEnum | OrderItemVariationScalarFieldEnum[]
  }

  /**
   * OrderItemVariation findMany
   */
  export type OrderItemVariationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * Filter, which OrderItemVariations to fetch.
     */
    where?: OrderItemVariationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItemVariations to fetch.
     */
    orderBy?: OrderItemVariationOrderByWithRelationInput | OrderItemVariationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItemVariations.
     */
    cursor?: OrderItemVariationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItemVariations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItemVariations.
     */
    skip?: number
    distinct?: OrderItemVariationScalarFieldEnum | OrderItemVariationScalarFieldEnum[]
  }

  /**
   * OrderItemVariation create
   */
  export type OrderItemVariationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItemVariation.
     */
    data: XOR<OrderItemVariationCreateInput, OrderItemVariationUncheckedCreateInput>
  }

  /**
   * OrderItemVariation createMany
   */
  export type OrderItemVariationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItemVariations.
     */
    data: OrderItemVariationCreateManyInput | OrderItemVariationCreateManyInput[]
  }

  /**
   * OrderItemVariation createManyAndReturn
   */
  export type OrderItemVariationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItemVariations.
     */
    data: OrderItemVariationCreateManyInput | OrderItemVariationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemVariation update
   */
  export type OrderItemVariationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItemVariation.
     */
    data: XOR<OrderItemVariationUpdateInput, OrderItemVariationUncheckedUpdateInput>
    /**
     * Choose, which OrderItemVariation to update.
     */
    where: OrderItemVariationWhereUniqueInput
  }

  /**
   * OrderItemVariation updateMany
   */
  export type OrderItemVariationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItemVariations.
     */
    data: XOR<OrderItemVariationUpdateManyMutationInput, OrderItemVariationUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemVariations to update
     */
    where?: OrderItemVariationWhereInput
    /**
     * Limit how many OrderItemVariations to update.
     */
    limit?: number
  }

  /**
   * OrderItemVariation updateManyAndReturn
   */
  export type OrderItemVariationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * The data used to update OrderItemVariations.
     */
    data: XOR<OrderItemVariationUpdateManyMutationInput, OrderItemVariationUncheckedUpdateManyInput>
    /**
     * Filter which OrderItemVariations to update
     */
    where?: OrderItemVariationWhereInput
    /**
     * Limit how many OrderItemVariations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItemVariation upsert
   */
  export type OrderItemVariationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItemVariation to update in case it exists.
     */
    where: OrderItemVariationWhereUniqueInput
    /**
     * In case the OrderItemVariation found by the `where` argument doesn't exist, create a new OrderItemVariation with this data.
     */
    create: XOR<OrderItemVariationCreateInput, OrderItemVariationUncheckedCreateInput>
    /**
     * In case the OrderItemVariation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemVariationUpdateInput, OrderItemVariationUncheckedUpdateInput>
  }

  /**
   * OrderItemVariation delete
   */
  export type OrderItemVariationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
    /**
     * Filter which OrderItemVariation to delete.
     */
    where: OrderItemVariationWhereUniqueInput
  }

  /**
   * OrderItemVariation deleteMany
   */
  export type OrderItemVariationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItemVariations to delete
     */
    where?: OrderItemVariationWhereInput
    /**
     * Limit how many OrderItemVariations to delete.
     */
    limit?: number
  }

  /**
   * OrderItemVariation without action
   */
  export type OrderItemVariationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemVariation
     */
    select?: OrderItemVariationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItemVariation
     */
    omit?: OrderItemVariationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemVariationInclude<ExtArgs> | null
  }


  /**
   * Model StoreSettings
   */

  export type AggregateStoreSettings = {
    _count: StoreSettingsCountAggregateOutputType | null
    _avg: StoreSettingsAvgAggregateOutputType | null
    _sum: StoreSettingsSumAggregateOutputType | null
    _min: StoreSettingsMinAggregateOutputType | null
    _max: StoreSettingsMaxAggregateOutputType | null
  }

  export type StoreSettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSettingsSumAggregateOutputType = {
    id: number | null
  }

  export type StoreSettingsMinAggregateOutputType = {
    id: number | null
    storeName: string | null
  }

  export type StoreSettingsMaxAggregateOutputType = {
    id: number | null
    storeName: string | null
  }

  export type StoreSettingsCountAggregateOutputType = {
    id: number
    storeName: number
    _all: number
  }


  export type StoreSettingsAvgAggregateInputType = {
    id?: true
  }

  export type StoreSettingsSumAggregateInputType = {
    id?: true
  }

  export type StoreSettingsMinAggregateInputType = {
    id?: true
    storeName?: true
  }

  export type StoreSettingsMaxAggregateInputType = {
    id?: true
    storeName?: true
  }

  export type StoreSettingsCountAggregateInputType = {
    id?: true
    storeName?: true
    _all?: true
  }

  export type StoreSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreSettings to aggregate.
     */
    where?: StoreSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingsOrderByWithRelationInput | StoreSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreSettings
    **/
    _count?: true | StoreSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreSettingsMaxAggregateInputType
  }

  export type GetStoreSettingsAggregateType<T extends StoreSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreSettings[P]>
      : GetScalarType<T[P], AggregateStoreSettings[P]>
  }




  export type StoreSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreSettingsWhereInput
    orderBy?: StoreSettingsOrderByWithAggregationInput | StoreSettingsOrderByWithAggregationInput[]
    by: StoreSettingsScalarFieldEnum[] | StoreSettingsScalarFieldEnum
    having?: StoreSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreSettingsCountAggregateInputType | true
    _avg?: StoreSettingsAvgAggregateInputType
    _sum?: StoreSettingsSumAggregateInputType
    _min?: StoreSettingsMinAggregateInputType
    _max?: StoreSettingsMaxAggregateInputType
  }

  export type StoreSettingsGroupByOutputType = {
    id: number
    storeName: string
    _count: StoreSettingsCountAggregateOutputType | null
    _avg: StoreSettingsAvgAggregateOutputType | null
    _sum: StoreSettingsSumAggregateOutputType | null
    _min: StoreSettingsMinAggregateOutputType | null
    _max: StoreSettingsMaxAggregateOutputType | null
  }

  type GetStoreSettingsGroupByPayload<T extends StoreSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], StoreSettingsGroupByOutputType[P]>
        }
      >
    >


  export type StoreSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
  }, ExtArgs["result"]["storeSettings"]>

  export type StoreSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
  }, ExtArgs["result"]["storeSettings"]>

  export type StoreSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeName?: boolean
  }, ExtArgs["result"]["storeSettings"]>

  export type StoreSettingsSelectScalar = {
    id?: boolean
    storeName?: boolean
  }

  export type StoreSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeName", ExtArgs["result"]["storeSettings"]>

  export type $StoreSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeName: string
    }, ExtArgs["result"]["storeSettings"]>
    composites: {}
  }

  type StoreSettingsGetPayload<S extends boolean | null | undefined | StoreSettingsDefaultArgs> = $Result.GetResult<Prisma.$StoreSettingsPayload, S>

  type StoreSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreSettingsCountAggregateInputType | true
    }

  export interface StoreSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreSettings'], meta: { name: 'StoreSettings' } }
    /**
     * Find zero or one StoreSettings that matches the filter.
     * @param {StoreSettingsFindUniqueArgs} args - Arguments to find a StoreSettings
     * @example
     * // Get one StoreSettings
     * const storeSettings = await prisma.storeSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreSettingsFindUniqueArgs>(args: SelectSubset<T, StoreSettingsFindUniqueArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreSettingsFindUniqueOrThrowArgs} args - Arguments to find a StoreSettings
     * @example
     * // Get one StoreSettings
     * const storeSettings = await prisma.storeSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsFindFirstArgs} args - Arguments to find a StoreSettings
     * @example
     * // Get one StoreSettings
     * const storeSettings = await prisma.storeSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreSettingsFindFirstArgs>(args?: SelectSubset<T, StoreSettingsFindFirstArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsFindFirstOrThrowArgs} args - Arguments to find a StoreSettings
     * @example
     * // Get one StoreSettings
     * const storeSettings = await prisma.storeSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreSettings
     * const storeSettings = await prisma.storeSettings.findMany()
     * 
     * // Get first 10 StoreSettings
     * const storeSettings = await prisma.storeSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeSettingsWithIdOnly = await prisma.storeSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreSettingsFindManyArgs>(args?: SelectSubset<T, StoreSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreSettings.
     * @param {StoreSettingsCreateArgs} args - Arguments to create a StoreSettings.
     * @example
     * // Create one StoreSettings
     * const StoreSettings = await prisma.storeSettings.create({
     *   data: {
     *     // ... data to create a StoreSettings
     *   }
     * })
     * 
     */
    create<T extends StoreSettingsCreateArgs>(args: SelectSubset<T, StoreSettingsCreateArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreSettings.
     * @param {StoreSettingsCreateManyArgs} args - Arguments to create many StoreSettings.
     * @example
     * // Create many StoreSettings
     * const storeSettings = await prisma.storeSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreSettingsCreateManyArgs>(args?: SelectSubset<T, StoreSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreSettings and returns the data saved in the database.
     * @param {StoreSettingsCreateManyAndReturnArgs} args - Arguments to create many StoreSettings.
     * @example
     * // Create many StoreSettings
     * const storeSettings = await prisma.storeSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreSettings and only return the `id`
     * const storeSettingsWithIdOnly = await prisma.storeSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreSettings.
     * @param {StoreSettingsDeleteArgs} args - Arguments to delete one StoreSettings.
     * @example
     * // Delete one StoreSettings
     * const StoreSettings = await prisma.storeSettings.delete({
     *   where: {
     *     // ... filter to delete one StoreSettings
     *   }
     * })
     * 
     */
    delete<T extends StoreSettingsDeleteArgs>(args: SelectSubset<T, StoreSettingsDeleteArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreSettings.
     * @param {StoreSettingsUpdateArgs} args - Arguments to update one StoreSettings.
     * @example
     * // Update one StoreSettings
     * const storeSettings = await prisma.storeSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreSettingsUpdateArgs>(args: SelectSubset<T, StoreSettingsUpdateArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreSettings.
     * @param {StoreSettingsDeleteManyArgs} args - Arguments to filter StoreSettings to delete.
     * @example
     * // Delete a few StoreSettings
     * const { count } = await prisma.storeSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreSettingsDeleteManyArgs>(args?: SelectSubset<T, StoreSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreSettings
     * const storeSettings = await prisma.storeSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreSettingsUpdateManyArgs>(args: SelectSubset<T, StoreSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreSettings and returns the data updated in the database.
     * @param {StoreSettingsUpdateManyAndReturnArgs} args - Arguments to update many StoreSettings.
     * @example
     * // Update many StoreSettings
     * const storeSettings = await prisma.storeSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreSettings and only return the `id`
     * const storeSettingsWithIdOnly = await prisma.storeSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends StoreSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreSettings.
     * @param {StoreSettingsUpsertArgs} args - Arguments to update or create a StoreSettings.
     * @example
     * // Update or create a StoreSettings
     * const storeSettings = await prisma.storeSettings.upsert({
     *   create: {
     *     // ... data to create a StoreSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreSettings we want to update
     *   }
     * })
     */
    upsert<T extends StoreSettingsUpsertArgs>(args: SelectSubset<T, StoreSettingsUpsertArgs<ExtArgs>>): Prisma__StoreSettingsClient<$Result.GetResult<Prisma.$StoreSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsCountArgs} args - Arguments to filter StoreSettings to count.
     * @example
     * // Count the number of StoreSettings
     * const count = await prisma.storeSettings.count({
     *   where: {
     *     // ... the filter for the StoreSettings we want to count
     *   }
     * })
    **/
    count<T extends StoreSettingsCountArgs>(
      args?: Subset<T, StoreSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreSettingsAggregateArgs>(args: Subset<T, StoreSettingsAggregateArgs>): Prisma.PrismaPromise<GetStoreSettingsAggregateType<T>>

    /**
     * Group by StoreSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreSettingsGroupByArgs} args - Group by arguments.
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
      T extends StoreSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreSettingsGroupByArgs['orderBy'] }
        : { orderBy?: StoreSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreSettings model
   */
  readonly fields: StoreSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StoreSettings model
   */
  interface StoreSettingsFieldRefs {
    readonly id: FieldRef<"StoreSettings", 'Int'>
    readonly storeName: FieldRef<"StoreSettings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StoreSettings findUnique
   */
  export type StoreSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * Filter, which StoreSettings to fetch.
     */
    where: StoreSettingsWhereUniqueInput
  }

  /**
   * StoreSettings findUniqueOrThrow
   */
  export type StoreSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * Filter, which StoreSettings to fetch.
     */
    where: StoreSettingsWhereUniqueInput
  }

  /**
   * StoreSettings findFirst
   */
  export type StoreSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * Filter, which StoreSettings to fetch.
     */
    where?: StoreSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingsOrderByWithRelationInput | StoreSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreSettings.
     */
    cursor?: StoreSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreSettings.
     */
    distinct?: StoreSettingsScalarFieldEnum | StoreSettingsScalarFieldEnum[]
  }

  /**
   * StoreSettings findFirstOrThrow
   */
  export type StoreSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * Filter, which StoreSettings to fetch.
     */
    where?: StoreSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingsOrderByWithRelationInput | StoreSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreSettings.
     */
    cursor?: StoreSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreSettings.
     */
    distinct?: StoreSettingsScalarFieldEnum | StoreSettingsScalarFieldEnum[]
  }

  /**
   * StoreSettings findMany
   */
  export type StoreSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * Filter, which StoreSettings to fetch.
     */
    where?: StoreSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreSettings to fetch.
     */
    orderBy?: StoreSettingsOrderByWithRelationInput | StoreSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreSettings.
     */
    cursor?: StoreSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreSettings.
     */
    skip?: number
    distinct?: StoreSettingsScalarFieldEnum | StoreSettingsScalarFieldEnum[]
  }

  /**
   * StoreSettings create
   */
  export type StoreSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a StoreSettings.
     */
    data: XOR<StoreSettingsCreateInput, StoreSettingsUncheckedCreateInput>
  }

  /**
   * StoreSettings createMany
   */
  export type StoreSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreSettings.
     */
    data: StoreSettingsCreateManyInput | StoreSettingsCreateManyInput[]
  }

  /**
   * StoreSettings createManyAndReturn
   */
  export type StoreSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many StoreSettings.
     */
    data: StoreSettingsCreateManyInput | StoreSettingsCreateManyInput[]
  }

  /**
   * StoreSettings update
   */
  export type StoreSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a StoreSettings.
     */
    data: XOR<StoreSettingsUpdateInput, StoreSettingsUncheckedUpdateInput>
    /**
     * Choose, which StoreSettings to update.
     */
    where: StoreSettingsWhereUniqueInput
  }

  /**
   * StoreSettings updateMany
   */
  export type StoreSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreSettings.
     */
    data: XOR<StoreSettingsUpdateManyMutationInput, StoreSettingsUncheckedUpdateManyInput>
    /**
     * Filter which StoreSettings to update
     */
    where?: StoreSettingsWhereInput
    /**
     * Limit how many StoreSettings to update.
     */
    limit?: number
  }

  /**
   * StoreSettings updateManyAndReturn
   */
  export type StoreSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * The data used to update StoreSettings.
     */
    data: XOR<StoreSettingsUpdateManyMutationInput, StoreSettingsUncheckedUpdateManyInput>
    /**
     * Filter which StoreSettings to update
     */
    where?: StoreSettingsWhereInput
    /**
     * Limit how many StoreSettings to update.
     */
    limit?: number
  }

  /**
   * StoreSettings upsert
   */
  export type StoreSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the StoreSettings to update in case it exists.
     */
    where: StoreSettingsWhereUniqueInput
    /**
     * In case the StoreSettings found by the `where` argument doesn't exist, create a new StoreSettings with this data.
     */
    create: XOR<StoreSettingsCreateInput, StoreSettingsUncheckedCreateInput>
    /**
     * In case the StoreSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreSettingsUpdateInput, StoreSettingsUncheckedUpdateInput>
  }

  /**
   * StoreSettings delete
   */
  export type StoreSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
    /**
     * Filter which StoreSettings to delete.
     */
    where: StoreSettingsWhereUniqueInput
  }

  /**
   * StoreSettings deleteMany
   */
  export type StoreSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreSettings to delete
     */
    where?: StoreSettingsWhereInput
    /**
     * Limit how many StoreSettings to delete.
     */
    limit?: number
  }

  /**
   * StoreSettings without action
   */
  export type StoreSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreSettings
     */
    select?: StoreSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreSettings
     */
    omit?: StoreSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    categoryId: 'categoryId',
    basePrice: 'basePrice',
    trackInventory: 'trackInventory',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const InventoryStockScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    qty: 'qty'
  };

  export type InventoryStockScalarFieldEnum = (typeof InventoryStockScalarFieldEnum)[keyof typeof InventoryStockScalarFieldEnum]


  export const ProductSizeScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    priceDelta: 'priceDelta',
    sortOrder: 'sortOrder'
  };

  export type ProductSizeScalarFieldEnum = (typeof ProductSizeScalarFieldEnum)[keyof typeof ProductSizeScalarFieldEnum]


  export const VariationGroupScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    name: 'name',
    minSelectable: 'minSelectable',
    maxSelectable: 'maxSelectable',
    required: 'required',
    sortOrder: 'sortOrder'
  };

  export type VariationGroupScalarFieldEnum = (typeof VariationGroupScalarFieldEnum)[keyof typeof VariationGroupScalarFieldEnum]


  export const VariationChoiceScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    name: 'name',
    priceDelta: 'priceDelta',
    sortOrder: 'sortOrder'
  };

  export type VariationChoiceScalarFieldEnum = (typeof VariationChoiceScalarFieldEnum)[keyof typeof VariationChoiceScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    subtotal: 'subtotal',
    discount: 'discount',
    fees: 'fees',
    tax: 'tax',
    total: 'total',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    productName: 'productName',
    sizeName: 'sizeName',
    unitBasePrice: 'unitBasePrice',
    quantity: 'quantity',
    lineTotal: 'lineTotal'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const OrderItemVariationScalarFieldEnum: {
    id: 'id',
    orderItemId: 'orderItemId',
    groupName: 'groupName',
    choiceName: 'choiceName',
    priceDelta: 'priceDelta'
  };

  export type OrderItemVariationScalarFieldEnum = (typeof OrderItemVariationScalarFieldEnum)[keyof typeof OrderItemVariationScalarFieldEnum]


  export const StoreSettingsScalarFieldEnum: {
    id: 'id',
    storeName: 'storeName'
  };

  export type StoreSettingsScalarFieldEnum = (typeof StoreSettingsScalarFieldEnum)[keyof typeof StoreSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    basePrice?: IntFilter<"Product"> | number
    trackInventory?: BoolFilter<"Product"> | boolean
    active?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    stock?: XOR<InventoryStockNullableScalarRelationFilter, InventoryStockWhereInput> | null
    sizes?: ProductSizeListRelationFilter
    variationGroups?: VariationGroupListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    trackInventory?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    stock?: InventoryStockOrderByWithRelationInput
    sizes?: ProductSizeOrderByRelationAggregateInput
    variationGroups?: VariationGroupOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    sku?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    basePrice?: IntFilter<"Product"> | number
    trackInventory?: BoolFilter<"Product"> | boolean
    active?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    stock?: XOR<InventoryStockNullableScalarRelationFilter, InventoryStockWhereInput> | null
    sizes?: ProductSizeListRelationFilter
    variationGroups?: VariationGroupListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    basePrice?: SortOrder
    trackInventory?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    basePrice?: IntWithAggregatesFilter<"Product"> | number
    trackInventory?: BoolWithAggregatesFilter<"Product"> | boolean
    active?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type InventoryStockWhereInput = {
    AND?: InventoryStockWhereInput | InventoryStockWhereInput[]
    OR?: InventoryStockWhereInput[]
    NOT?: InventoryStockWhereInput | InventoryStockWhereInput[]
    id?: StringFilter<"InventoryStock"> | string
    productId?: StringFilter<"InventoryStock"> | string
    qty?: IntFilter<"InventoryStock"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type InventoryStockOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type InventoryStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: string
    AND?: InventoryStockWhereInput | InventoryStockWhereInput[]
    OR?: InventoryStockWhereInput[]
    NOT?: InventoryStockWhereInput | InventoryStockWhereInput[]
    qty?: IntFilter<"InventoryStock"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "productId">

  export type InventoryStockOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
    _count?: InventoryStockCountOrderByAggregateInput
    _avg?: InventoryStockAvgOrderByAggregateInput
    _max?: InventoryStockMaxOrderByAggregateInput
    _min?: InventoryStockMinOrderByAggregateInput
    _sum?: InventoryStockSumOrderByAggregateInput
  }

  export type InventoryStockScalarWhereWithAggregatesInput = {
    AND?: InventoryStockScalarWhereWithAggregatesInput | InventoryStockScalarWhereWithAggregatesInput[]
    OR?: InventoryStockScalarWhereWithAggregatesInput[]
    NOT?: InventoryStockScalarWhereWithAggregatesInput | InventoryStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryStock"> | string
    productId?: StringWithAggregatesFilter<"InventoryStock"> | string
    qty?: IntWithAggregatesFilter<"InventoryStock"> | number
  }

  export type ProductSizeWhereInput = {
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    id?: StringFilter<"ProductSize"> | string
    productId?: StringFilter<"ProductSize"> | string
    name?: StringFilter<"ProductSize"> | string
    priceDelta?: IntFilter<"ProductSize"> | number
    sortOrder?: IntFilter<"ProductSize"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductSizeOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductSizeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductSizeWhereInput | ProductSizeWhereInput[]
    OR?: ProductSizeWhereInput[]
    NOT?: ProductSizeWhereInput | ProductSizeWhereInput[]
    productId?: StringFilter<"ProductSize"> | string
    name?: StringFilter<"ProductSize"> | string
    priceDelta?: IntFilter<"ProductSize"> | number
    sortOrder?: IntFilter<"ProductSize"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductSizeOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
    _count?: ProductSizeCountOrderByAggregateInput
    _avg?: ProductSizeAvgOrderByAggregateInput
    _max?: ProductSizeMaxOrderByAggregateInput
    _min?: ProductSizeMinOrderByAggregateInput
    _sum?: ProductSizeSumOrderByAggregateInput
  }

  export type ProductSizeScalarWhereWithAggregatesInput = {
    AND?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    OR?: ProductSizeScalarWhereWithAggregatesInput[]
    NOT?: ProductSizeScalarWhereWithAggregatesInput | ProductSizeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductSize"> | string
    productId?: StringWithAggregatesFilter<"ProductSize"> | string
    name?: StringWithAggregatesFilter<"ProductSize"> | string
    priceDelta?: IntWithAggregatesFilter<"ProductSize"> | number
    sortOrder?: IntWithAggregatesFilter<"ProductSize"> | number
  }

  export type VariationGroupWhereInput = {
    AND?: VariationGroupWhereInput | VariationGroupWhereInput[]
    OR?: VariationGroupWhereInput[]
    NOT?: VariationGroupWhereInput | VariationGroupWhereInput[]
    id?: StringFilter<"VariationGroup"> | string
    productId?: StringFilter<"VariationGroup"> | string
    name?: StringFilter<"VariationGroup"> | string
    minSelectable?: IntFilter<"VariationGroup"> | number
    maxSelectable?: IntFilter<"VariationGroup"> | number
    required?: BoolFilter<"VariationGroup"> | boolean
    sortOrder?: IntFilter<"VariationGroup"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    choices?: VariationChoiceListRelationFilter
  }

  export type VariationGroupOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    required?: SortOrder
    sortOrder?: SortOrder
    product?: ProductOrderByWithRelationInput
    choices?: VariationChoiceOrderByRelationAggregateInput
  }

  export type VariationGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VariationGroupWhereInput | VariationGroupWhereInput[]
    OR?: VariationGroupWhereInput[]
    NOT?: VariationGroupWhereInput | VariationGroupWhereInput[]
    productId?: StringFilter<"VariationGroup"> | string
    name?: StringFilter<"VariationGroup"> | string
    minSelectable?: IntFilter<"VariationGroup"> | number
    maxSelectable?: IntFilter<"VariationGroup"> | number
    required?: BoolFilter<"VariationGroup"> | boolean
    sortOrder?: IntFilter<"VariationGroup"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    choices?: VariationChoiceListRelationFilter
  }, "id">

  export type VariationGroupOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    required?: SortOrder
    sortOrder?: SortOrder
    _count?: VariationGroupCountOrderByAggregateInput
    _avg?: VariationGroupAvgOrderByAggregateInput
    _max?: VariationGroupMaxOrderByAggregateInput
    _min?: VariationGroupMinOrderByAggregateInput
    _sum?: VariationGroupSumOrderByAggregateInput
  }

  export type VariationGroupScalarWhereWithAggregatesInput = {
    AND?: VariationGroupScalarWhereWithAggregatesInput | VariationGroupScalarWhereWithAggregatesInput[]
    OR?: VariationGroupScalarWhereWithAggregatesInput[]
    NOT?: VariationGroupScalarWhereWithAggregatesInput | VariationGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VariationGroup"> | string
    productId?: StringWithAggregatesFilter<"VariationGroup"> | string
    name?: StringWithAggregatesFilter<"VariationGroup"> | string
    minSelectable?: IntWithAggregatesFilter<"VariationGroup"> | number
    maxSelectable?: IntWithAggregatesFilter<"VariationGroup"> | number
    required?: BoolWithAggregatesFilter<"VariationGroup"> | boolean
    sortOrder?: IntWithAggregatesFilter<"VariationGroup"> | number
  }

  export type VariationChoiceWhereInput = {
    AND?: VariationChoiceWhereInput | VariationChoiceWhereInput[]
    OR?: VariationChoiceWhereInput[]
    NOT?: VariationChoiceWhereInput | VariationChoiceWhereInput[]
    id?: StringFilter<"VariationChoice"> | string
    groupId?: StringFilter<"VariationChoice"> | string
    name?: StringFilter<"VariationChoice"> | string
    priceDelta?: IntFilter<"VariationChoice"> | number
    sortOrder?: IntFilter<"VariationChoice"> | number
    group?: XOR<VariationGroupScalarRelationFilter, VariationGroupWhereInput>
  }

  export type VariationChoiceOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
    group?: VariationGroupOrderByWithRelationInput
  }

  export type VariationChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VariationChoiceWhereInput | VariationChoiceWhereInput[]
    OR?: VariationChoiceWhereInput[]
    NOT?: VariationChoiceWhereInput | VariationChoiceWhereInput[]
    groupId?: StringFilter<"VariationChoice"> | string
    name?: StringFilter<"VariationChoice"> | string
    priceDelta?: IntFilter<"VariationChoice"> | number
    sortOrder?: IntFilter<"VariationChoice"> | number
    group?: XOR<VariationGroupScalarRelationFilter, VariationGroupWhereInput>
  }, "id">

  export type VariationChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
    _count?: VariationChoiceCountOrderByAggregateInput
    _avg?: VariationChoiceAvgOrderByAggregateInput
    _max?: VariationChoiceMaxOrderByAggregateInput
    _min?: VariationChoiceMinOrderByAggregateInput
    _sum?: VariationChoiceSumOrderByAggregateInput
  }

  export type VariationChoiceScalarWhereWithAggregatesInput = {
    AND?: VariationChoiceScalarWhereWithAggregatesInput | VariationChoiceScalarWhereWithAggregatesInput[]
    OR?: VariationChoiceScalarWhereWithAggregatesInput[]
    NOT?: VariationChoiceScalarWhereWithAggregatesInput | VariationChoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VariationChoice"> | string
    groupId?: StringWithAggregatesFilter<"VariationChoice"> | string
    name?: StringWithAggregatesFilter<"VariationChoice"> | string
    priceDelta?: IntWithAggregatesFilter<"VariationChoice"> | number
    sortOrder?: IntWithAggregatesFilter<"VariationChoice"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: IntFilter<"Order"> | number
    subtotal?: IntFilter<"Order"> | number
    discount?: IntFilter<"Order"> | number
    fees?: IntFilter<"Order"> | number
    tax?: IntFilter<"Order"> | number
    total?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    items?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    items?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    subtotal?: IntFilter<"Order"> | number
    discount?: IntFilter<"Order"> | number
    fees?: IntFilter<"Order"> | number
    tax?: IntFilter<"Order"> | number
    total?: IntFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    items?: OrderItemListRelationFilter
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: IntWithAggregatesFilter<"Order"> | number
    subtotal?: IntWithAggregatesFilter<"Order"> | number
    discount?: IntWithAggregatesFilter<"Order"> | number
    fees?: IntWithAggregatesFilter<"Order"> | number
    tax?: IntWithAggregatesFilter<"Order"> | number
    total?: IntWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    productName?: StringFilter<"OrderItem"> | string
    sizeName?: StringNullableFilter<"OrderItem"> | string | null
    unitBasePrice?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    lineTotal?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    variations?: OrderItemVariationListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    sizeName?: SortOrderInput | SortOrder
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    variations?: OrderItemVariationOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    productName?: StringFilter<"OrderItem"> | string
    sizeName?: StringNullableFilter<"OrderItem"> | string | null
    unitBasePrice?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    lineTotal?: IntFilter<"OrderItem"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    variations?: OrderItemVariationListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    sizeName?: SortOrderInput | SortOrder
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    productName?: StringWithAggregatesFilter<"OrderItem"> | string
    sizeName?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    unitBasePrice?: IntWithAggregatesFilter<"OrderItem"> | number
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    lineTotal?: IntWithAggregatesFilter<"OrderItem"> | number
  }

  export type OrderItemVariationWhereInput = {
    AND?: OrderItemVariationWhereInput | OrderItemVariationWhereInput[]
    OR?: OrderItemVariationWhereInput[]
    NOT?: OrderItemVariationWhereInput | OrderItemVariationWhereInput[]
    id?: StringFilter<"OrderItemVariation"> | string
    orderItemId?: StringFilter<"OrderItemVariation"> | string
    groupName?: StringFilter<"OrderItemVariation"> | string
    choiceName?: StringFilter<"OrderItemVariation"> | string
    priceDelta?: IntFilter<"OrderItemVariation"> | number
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
  }

  export type OrderItemVariationOrderByWithRelationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    groupName?: SortOrder
    choiceName?: SortOrder
    priceDelta?: SortOrder
    orderItem?: OrderItemOrderByWithRelationInput
  }

  export type OrderItemVariationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemVariationWhereInput | OrderItemVariationWhereInput[]
    OR?: OrderItemVariationWhereInput[]
    NOT?: OrderItemVariationWhereInput | OrderItemVariationWhereInput[]
    orderItemId?: StringFilter<"OrderItemVariation"> | string
    groupName?: StringFilter<"OrderItemVariation"> | string
    choiceName?: StringFilter<"OrderItemVariation"> | string
    priceDelta?: IntFilter<"OrderItemVariation"> | number
    orderItem?: XOR<OrderItemScalarRelationFilter, OrderItemWhereInput>
  }, "id">

  export type OrderItemVariationOrderByWithAggregationInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    groupName?: SortOrder
    choiceName?: SortOrder
    priceDelta?: SortOrder
    _count?: OrderItemVariationCountOrderByAggregateInput
    _avg?: OrderItemVariationAvgOrderByAggregateInput
    _max?: OrderItemVariationMaxOrderByAggregateInput
    _min?: OrderItemVariationMinOrderByAggregateInput
    _sum?: OrderItemVariationSumOrderByAggregateInput
  }

  export type OrderItemVariationScalarWhereWithAggregatesInput = {
    AND?: OrderItemVariationScalarWhereWithAggregatesInput | OrderItemVariationScalarWhereWithAggregatesInput[]
    OR?: OrderItemVariationScalarWhereWithAggregatesInput[]
    NOT?: OrderItemVariationScalarWhereWithAggregatesInput | OrderItemVariationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItemVariation"> | string
    orderItemId?: StringWithAggregatesFilter<"OrderItemVariation"> | string
    groupName?: StringWithAggregatesFilter<"OrderItemVariation"> | string
    choiceName?: StringWithAggregatesFilter<"OrderItemVariation"> | string
    priceDelta?: IntWithAggregatesFilter<"OrderItemVariation"> | number
  }

  export type StoreSettingsWhereInput = {
    AND?: StoreSettingsWhereInput | StoreSettingsWhereInput[]
    OR?: StoreSettingsWhereInput[]
    NOT?: StoreSettingsWhereInput | StoreSettingsWhereInput[]
    id?: IntFilter<"StoreSettings"> | number
    storeName?: StringFilter<"StoreSettings"> | string
  }

  export type StoreSettingsOrderByWithRelationInput = {
    id?: SortOrder
    storeName?: SortOrder
  }

  export type StoreSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreSettingsWhereInput | StoreSettingsWhereInput[]
    OR?: StoreSettingsWhereInput[]
    NOT?: StoreSettingsWhereInput | StoreSettingsWhereInput[]
    storeName?: StringFilter<"StoreSettings"> | string
  }, "id">

  export type StoreSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    storeName?: SortOrder
    _count?: StoreSettingsCountOrderByAggregateInput
    _avg?: StoreSettingsAvgOrderByAggregateInput
    _max?: StoreSettingsMaxOrderByAggregateInput
    _min?: StoreSettingsMinOrderByAggregateInput
    _sum?: StoreSettingsSumOrderByAggregateInput
  }

  export type StoreSettingsScalarWhereWithAggregatesInput = {
    AND?: StoreSettingsScalarWhereWithAggregatesInput | StoreSettingsScalarWhereWithAggregatesInput[]
    OR?: StoreSettingsScalarWhereWithAggregatesInput[]
    NOT?: StoreSettingsScalarWhereWithAggregatesInput | StoreSettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreSettings"> | number
    storeName?: StringWithAggregatesFilter<"StoreSettings"> | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    stock?: InventoryStockCreateNestedOneWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    sku?: string | null
    categoryId?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stock?: InventoryStockUncheckedCreateNestedOneWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stock?: InventoryStockUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: InventoryStockUncheckedUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    sku?: string | null
    categoryId?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryStockCreateInput = {
    id?: string
    qty?: number
    product: ProductCreateNestedOneWithoutStockInput
  }

  export type InventoryStockUncheckedCreateInput = {
    id?: string
    productId: string
    qty?: number
  }

  export type InventoryStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutStockNestedInput
  }

  export type InventoryStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryStockCreateManyInput = {
    id?: string
    productId: string
    qty?: number
  }

  export type InventoryStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeCreateInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
    product: ProductCreateNestedOneWithoutSizesInput
  }

  export type ProductSizeUncheckedCreateInput = {
    id?: string
    productId: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type ProductSizeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
  }

  export type ProductSizeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeCreateManyInput = {
    id?: string
    productId: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type ProductSizeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationGroupCreateInput = {
    id?: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
    product: ProductCreateNestedOneWithoutVariationGroupsInput
    choices?: VariationChoiceCreateNestedManyWithoutGroupInput
  }

  export type VariationGroupUncheckedCreateInput = {
    id?: string
    productId: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
    choices?: VariationChoiceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type VariationGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutVariationGroupsNestedInput
    choices?: VariationChoiceUpdateManyWithoutGroupNestedInput
  }

  export type VariationGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    choices?: VariationChoiceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type VariationGroupCreateManyInput = {
    id?: string
    productId: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
  }

  export type VariationGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationChoiceCreateInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
    group: VariationGroupCreateNestedOneWithoutChoicesInput
  }

  export type VariationChoiceUncheckedCreateInput = {
    id?: string
    groupId: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type VariationChoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
    group?: VariationGroupUpdateOneRequiredWithoutChoicesNestedInput
  }

  export type VariationChoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationChoiceCreateManyInput = {
    id?: string
    groupId: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type VariationChoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationChoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
    variations?: OrderItemVariationCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    variations?: OrderItemVariationUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    variations?: OrderItemVariationUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    variations?: OrderItemVariationUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemVariationCreateInput = {
    id?: string
    groupName: string
    choiceName: string
    priceDelta: number
    orderItem: OrderItemCreateNestedOneWithoutVariationsInput
  }

  export type OrderItemVariationUncheckedCreateInput = {
    id?: string
    orderItemId: string
    groupName: string
    choiceName: string
    priceDelta: number
  }

  export type OrderItemVariationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    orderItem?: OrderItemUpdateOneRequiredWithoutVariationsNestedInput
  }

  export type OrderItemVariationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemVariationCreateManyInput = {
    id?: string
    orderItemId: string
    groupName: string
    choiceName: string
    priceDelta: number
  }

  export type OrderItemVariationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemVariationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderItemId?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
  }

  export type StoreSettingsCreateInput = {
    id: number
    storeName: string
  }

  export type StoreSettingsUncheckedCreateInput = {
    id: number
    storeName: string
  }

  export type StoreSettingsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
  }

  export type StoreSettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
  }

  export type StoreSettingsCreateManyInput = {
    id: number
    storeName: string
  }

  export type StoreSettingsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
  }

  export type StoreSettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type InventoryStockNullableScalarRelationFilter = {
    is?: InventoryStockWhereInput | null
    isNot?: InventoryStockWhereInput | null
  }

  export type ProductSizeListRelationFilter = {
    every?: ProductSizeWhereInput
    some?: ProductSizeWhereInput
    none?: ProductSizeWhereInput
  }

  export type VariationGroupListRelationFilter = {
    every?: VariationGroupWhereInput
    some?: VariationGroupWhereInput
    none?: VariationGroupWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductSizeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariationGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    categoryId?: SortOrder
    basePrice?: SortOrder
    trackInventory?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    categoryId?: SortOrder
    basePrice?: SortOrder
    trackInventory?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    categoryId?: SortOrder
    basePrice?: SortOrder
    trackInventory?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    basePrice?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryStockCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
  }

  export type InventoryStockAvgOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type InventoryStockMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
  }

  export type InventoryStockMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    qty?: SortOrder
  }

  export type InventoryStockSumOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type ProductSizeCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductSizeAvgOrderByAggregateInput = {
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductSizeMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductSizeMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductSizeSumOrderByAggregateInput = {
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationChoiceListRelationFilter = {
    every?: VariationChoiceWhereInput
    some?: VariationChoiceWhereInput
    none?: VariationChoiceWhereInput
  }

  export type VariationChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariationGroupCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    required?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationGroupAvgOrderByAggregateInput = {
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    required?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationGroupMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    name?: SortOrder
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    required?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationGroupSumOrderByAggregateInput = {
    minSelectable?: SortOrder
    maxSelectable?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationGroupScalarRelationFilter = {
    is?: VariationGroupWhereInput
    isNot?: VariationGroupWhereInput
  }

  export type VariationChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationChoiceAvgOrderByAggregateInput = {
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    name?: SortOrder
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type VariationChoiceSumOrderByAggregateInput = {
    priceDelta?: SortOrder
    sortOrder?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    orderNumber?: SortOrder
    subtotal?: SortOrder
    discount?: SortOrder
    fees?: SortOrder
    tax?: SortOrder
    total?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemVariationListRelationFilter = {
    every?: OrderItemVariationWhereInput
    some?: OrderItemVariationWhereInput
    none?: OrderItemVariationWhereInput
  }

  export type OrderItemVariationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    sizeName?: SortOrder
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    sizeName?: SortOrder
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    sizeName?: SortOrder
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    unitBasePrice?: SortOrder
    quantity?: SortOrder
    lineTotal?: SortOrder
  }

  export type OrderItemScalarRelationFilter = {
    is?: OrderItemWhereInput
    isNot?: OrderItemWhereInput
  }

  export type OrderItemVariationCountOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    groupName?: SortOrder
    choiceName?: SortOrder
    priceDelta?: SortOrder
  }

  export type OrderItemVariationAvgOrderByAggregateInput = {
    priceDelta?: SortOrder
  }

  export type OrderItemVariationMaxOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    groupName?: SortOrder
    choiceName?: SortOrder
    priceDelta?: SortOrder
  }

  export type OrderItemVariationMinOrderByAggregateInput = {
    id?: SortOrder
    orderItemId?: SortOrder
    groupName?: SortOrder
    choiceName?: SortOrder
    priceDelta?: SortOrder
  }

  export type OrderItemVariationSumOrderByAggregateInput = {
    priceDelta?: SortOrder
  }

  export type StoreSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
  }

  export type StoreSettingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
  }

  export type StoreSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    storeName?: SortOrder
  }

  export type StoreSettingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type InventoryStockCreateNestedOneWithoutProductInput = {
    create?: XOR<InventoryStockCreateWithoutProductInput, InventoryStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryStockCreateOrConnectWithoutProductInput
    connect?: InventoryStockWhereUniqueInput
  }

  export type ProductSizeCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type VariationGroupCreateNestedManyWithoutProductInput = {
    create?: XOR<VariationGroupCreateWithoutProductInput, VariationGroupUncheckedCreateWithoutProductInput> | VariationGroupCreateWithoutProductInput[] | VariationGroupUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationGroupCreateOrConnectWithoutProductInput | VariationGroupCreateOrConnectWithoutProductInput[]
    createMany?: VariationGroupCreateManyProductInputEnvelope
    connect?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type InventoryStockUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<InventoryStockCreateWithoutProductInput, InventoryStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryStockCreateOrConnectWithoutProductInput
    connect?: InventoryStockWhereUniqueInput
  }

  export type ProductSizeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
  }

  export type VariationGroupUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariationGroupCreateWithoutProductInput, VariationGroupUncheckedCreateWithoutProductInput> | VariationGroupCreateWithoutProductInput[] | VariationGroupUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationGroupCreateOrConnectWithoutProductInput | VariationGroupCreateOrConnectWithoutProductInput[]
    createMany?: VariationGroupCreateManyProductInputEnvelope
    connect?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type InventoryStockUpdateOneWithoutProductNestedInput = {
    create?: XOR<InventoryStockCreateWithoutProductInput, InventoryStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryStockCreateOrConnectWithoutProductInput
    upsert?: InventoryStockUpsertWithoutProductInput
    disconnect?: InventoryStockWhereInput | boolean
    delete?: InventoryStockWhereInput | boolean
    connect?: InventoryStockWhereUniqueInput
    update?: XOR<XOR<InventoryStockUpdateToOneWithWhereWithoutProductInput, InventoryStockUpdateWithoutProductInput>, InventoryStockUncheckedUpdateWithoutProductInput>
  }

  export type ProductSizeUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type VariationGroupUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariationGroupCreateWithoutProductInput, VariationGroupUncheckedCreateWithoutProductInput> | VariationGroupCreateWithoutProductInput[] | VariationGroupUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationGroupCreateOrConnectWithoutProductInput | VariationGroupCreateOrConnectWithoutProductInput[]
    upsert?: VariationGroupUpsertWithWhereUniqueWithoutProductInput | VariationGroupUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariationGroupCreateManyProductInputEnvelope
    set?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    disconnect?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    delete?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    connect?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    update?: VariationGroupUpdateWithWhereUniqueWithoutProductInput | VariationGroupUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariationGroupUpdateManyWithWhereWithoutProductInput | VariationGroupUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariationGroupScalarWhereInput | VariationGroupScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type InventoryStockUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<InventoryStockCreateWithoutProductInput, InventoryStockUncheckedCreateWithoutProductInput>
    connectOrCreate?: InventoryStockCreateOrConnectWithoutProductInput
    upsert?: InventoryStockUpsertWithoutProductInput
    disconnect?: InventoryStockWhereInput | boolean
    delete?: InventoryStockWhereInput | boolean
    connect?: InventoryStockWhereUniqueInput
    update?: XOR<XOR<InventoryStockUpdateToOneWithWhereWithoutProductInput, InventoryStockUpdateWithoutProductInput>, InventoryStockUncheckedUpdateWithoutProductInput>
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput> | ProductSizeCreateWithoutProductInput[] | ProductSizeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSizeCreateOrConnectWithoutProductInput | ProductSizeCreateOrConnectWithoutProductInput[]
    upsert?: ProductSizeUpsertWithWhereUniqueWithoutProductInput | ProductSizeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSizeCreateManyProductInputEnvelope
    set?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    disconnect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    delete?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    connect?: ProductSizeWhereUniqueInput | ProductSizeWhereUniqueInput[]
    update?: ProductSizeUpdateWithWhereUniqueWithoutProductInput | ProductSizeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSizeUpdateManyWithWhereWithoutProductInput | ProductSizeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
  }

  export type VariationGroupUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariationGroupCreateWithoutProductInput, VariationGroupUncheckedCreateWithoutProductInput> | VariationGroupCreateWithoutProductInput[] | VariationGroupUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariationGroupCreateOrConnectWithoutProductInput | VariationGroupCreateOrConnectWithoutProductInput[]
    upsert?: VariationGroupUpsertWithWhereUniqueWithoutProductInput | VariationGroupUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariationGroupCreateManyProductInputEnvelope
    set?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    disconnect?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    delete?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    connect?: VariationGroupWhereUniqueInput | VariationGroupWhereUniqueInput[]
    update?: VariationGroupUpdateWithWhereUniqueWithoutProductInput | VariationGroupUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariationGroupUpdateManyWithWhereWithoutProductInput | VariationGroupUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariationGroupScalarWhereInput | VariationGroupScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutStockInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockNestedInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    upsert?: ProductUpsertWithoutStockInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockInput, ProductUpdateWithoutStockInput>, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    upsert?: ProductUpsertWithoutSizesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSizesInput, ProductUpdateWithoutSizesInput>, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductCreateNestedOneWithoutVariationGroupsInput = {
    create?: XOR<ProductCreateWithoutVariationGroupsInput, ProductUncheckedCreateWithoutVariationGroupsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariationGroupsInput
    connect?: ProductWhereUniqueInput
  }

  export type VariationChoiceCreateNestedManyWithoutGroupInput = {
    create?: XOR<VariationChoiceCreateWithoutGroupInput, VariationChoiceUncheckedCreateWithoutGroupInput> | VariationChoiceCreateWithoutGroupInput[] | VariationChoiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: VariationChoiceCreateOrConnectWithoutGroupInput | VariationChoiceCreateOrConnectWithoutGroupInput[]
    createMany?: VariationChoiceCreateManyGroupInputEnvelope
    connect?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
  }

  export type VariationChoiceUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<VariationChoiceCreateWithoutGroupInput, VariationChoiceUncheckedCreateWithoutGroupInput> | VariationChoiceCreateWithoutGroupInput[] | VariationChoiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: VariationChoiceCreateOrConnectWithoutGroupInput | VariationChoiceCreateOrConnectWithoutGroupInput[]
    createMany?: VariationChoiceCreateManyGroupInputEnvelope
    connect?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutVariationGroupsNestedInput = {
    create?: XOR<ProductCreateWithoutVariationGroupsInput, ProductUncheckedCreateWithoutVariationGroupsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariationGroupsInput
    upsert?: ProductUpsertWithoutVariationGroupsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariationGroupsInput, ProductUpdateWithoutVariationGroupsInput>, ProductUncheckedUpdateWithoutVariationGroupsInput>
  }

  export type VariationChoiceUpdateManyWithoutGroupNestedInput = {
    create?: XOR<VariationChoiceCreateWithoutGroupInput, VariationChoiceUncheckedCreateWithoutGroupInput> | VariationChoiceCreateWithoutGroupInput[] | VariationChoiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: VariationChoiceCreateOrConnectWithoutGroupInput | VariationChoiceCreateOrConnectWithoutGroupInput[]
    upsert?: VariationChoiceUpsertWithWhereUniqueWithoutGroupInput | VariationChoiceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: VariationChoiceCreateManyGroupInputEnvelope
    set?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    disconnect?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    delete?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    connect?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    update?: VariationChoiceUpdateWithWhereUniqueWithoutGroupInput | VariationChoiceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: VariationChoiceUpdateManyWithWhereWithoutGroupInput | VariationChoiceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: VariationChoiceScalarWhereInput | VariationChoiceScalarWhereInput[]
  }

  export type VariationChoiceUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<VariationChoiceCreateWithoutGroupInput, VariationChoiceUncheckedCreateWithoutGroupInput> | VariationChoiceCreateWithoutGroupInput[] | VariationChoiceUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: VariationChoiceCreateOrConnectWithoutGroupInput | VariationChoiceCreateOrConnectWithoutGroupInput[]
    upsert?: VariationChoiceUpsertWithWhereUniqueWithoutGroupInput | VariationChoiceUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: VariationChoiceCreateManyGroupInputEnvelope
    set?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    disconnect?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    delete?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    connect?: VariationChoiceWhereUniqueInput | VariationChoiceWhereUniqueInput[]
    update?: VariationChoiceUpdateWithWhereUniqueWithoutGroupInput | VariationChoiceUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: VariationChoiceUpdateManyWithWhereWithoutGroupInput | VariationChoiceUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: VariationChoiceScalarWhereInput | VariationChoiceScalarWhereInput[]
  }

  export type VariationGroupCreateNestedOneWithoutChoicesInput = {
    create?: XOR<VariationGroupCreateWithoutChoicesInput, VariationGroupUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: VariationGroupCreateOrConnectWithoutChoicesInput
    connect?: VariationGroupWhereUniqueInput
  }

  export type VariationGroupUpdateOneRequiredWithoutChoicesNestedInput = {
    create?: XOR<VariationGroupCreateWithoutChoicesInput, VariationGroupUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: VariationGroupCreateOrConnectWithoutChoicesInput
    upsert?: VariationGroupUpsertWithoutChoicesInput
    connect?: VariationGroupWhereUniqueInput
    update?: XOR<XOR<VariationGroupUpdateToOneWithWhereWithoutChoicesInput, VariationGroupUpdateWithoutChoicesInput>, VariationGroupUncheckedUpdateWithoutChoicesInput>
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderItemVariationCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemVariationCreateWithoutOrderItemInput, OrderItemVariationUncheckedCreateWithoutOrderItemInput> | OrderItemVariationCreateWithoutOrderItemInput[] | OrderItemVariationUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemVariationCreateOrConnectWithoutOrderItemInput | OrderItemVariationCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemVariationCreateManyOrderItemInputEnvelope
    connect?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
  }

  export type OrderItemVariationUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<OrderItemVariationCreateWithoutOrderItemInput, OrderItemVariationUncheckedCreateWithoutOrderItemInput> | OrderItemVariationCreateWithoutOrderItemInput[] | OrderItemVariationUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemVariationCreateOrConnectWithoutOrderItemInput | OrderItemVariationCreateOrConnectWithoutOrderItemInput[]
    createMany?: OrderItemVariationCreateManyOrderItemInputEnvelope
    connect?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderItemVariationUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemVariationCreateWithoutOrderItemInput, OrderItemVariationUncheckedCreateWithoutOrderItemInput> | OrderItemVariationCreateWithoutOrderItemInput[] | OrderItemVariationUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemVariationCreateOrConnectWithoutOrderItemInput | OrderItemVariationCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemVariationUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemVariationUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemVariationCreateManyOrderItemInputEnvelope
    set?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    disconnect?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    delete?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    connect?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    update?: OrderItemVariationUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemVariationUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemVariationUpdateManyWithWhereWithoutOrderItemInput | OrderItemVariationUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemVariationScalarWhereInput | OrderItemVariationScalarWhereInput[]
  }

  export type OrderItemVariationUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<OrderItemVariationCreateWithoutOrderItemInput, OrderItemVariationUncheckedCreateWithoutOrderItemInput> | OrderItemVariationCreateWithoutOrderItemInput[] | OrderItemVariationUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: OrderItemVariationCreateOrConnectWithoutOrderItemInput | OrderItemVariationCreateOrConnectWithoutOrderItemInput[]
    upsert?: OrderItemVariationUpsertWithWhereUniqueWithoutOrderItemInput | OrderItemVariationUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: OrderItemVariationCreateManyOrderItemInputEnvelope
    set?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    disconnect?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    delete?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    connect?: OrderItemVariationWhereUniqueInput | OrderItemVariationWhereUniqueInput[]
    update?: OrderItemVariationUpdateWithWhereUniqueWithoutOrderItemInput | OrderItemVariationUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: OrderItemVariationUpdateManyWithWhereWithoutOrderItemInput | OrderItemVariationUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: OrderItemVariationScalarWhereInput | OrderItemVariationScalarWhereInput[]
  }

  export type OrderItemCreateNestedOneWithoutVariationsInput = {
    create?: XOR<OrderItemCreateWithoutVariationsInput, OrderItemUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariationsInput
    connect?: OrderItemWhereUniqueInput
  }

  export type OrderItemUpdateOneRequiredWithoutVariationsNestedInput = {
    create?: XOR<OrderItemCreateWithoutVariationsInput, OrderItemUncheckedCreateWithoutVariationsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutVariationsInput
    upsert?: OrderItemUpsertWithoutVariationsInput
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutVariationsInput, OrderItemUpdateWithoutVariationsInput>, OrderItemUncheckedUpdateWithoutVariationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type InventoryStockCreateWithoutProductInput = {
    id?: string
    qty?: number
  }

  export type InventoryStockUncheckedCreateWithoutProductInput = {
    id?: string
    qty?: number
  }

  export type InventoryStockCreateOrConnectWithoutProductInput = {
    where: InventoryStockWhereUniqueInput
    create: XOR<InventoryStockCreateWithoutProductInput, InventoryStockUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeCreateWithoutProductInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type ProductSizeUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type ProductSizeCreateOrConnectWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeCreateManyProductInputEnvelope = {
    data: ProductSizeCreateManyProductInput | ProductSizeCreateManyProductInput[]
  }

  export type VariationGroupCreateWithoutProductInput = {
    id?: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
    choices?: VariationChoiceCreateNestedManyWithoutGroupInput
  }

  export type VariationGroupUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
    choices?: VariationChoiceUncheckedCreateNestedManyWithoutGroupInput
  }

  export type VariationGroupCreateOrConnectWithoutProductInput = {
    where: VariationGroupWhereUniqueInput
    create: XOR<VariationGroupCreateWithoutProductInput, VariationGroupUncheckedCreateWithoutProductInput>
  }

  export type VariationGroupCreateManyProductInputEnvelope = {
    data: VariationGroupCreateManyProductInput | VariationGroupCreateManyProductInput[]
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    order: OrderCreateNestedOneWithoutItemsInput
    variations?: OrderItemVariationCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    variations?: OrderItemVariationUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryStockUpsertWithoutProductInput = {
    update: XOR<InventoryStockUpdateWithoutProductInput, InventoryStockUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryStockCreateWithoutProductInput, InventoryStockUncheckedCreateWithoutProductInput>
    where?: InventoryStockWhereInput
  }

  export type InventoryStockUpdateToOneWithWhereWithoutProductInput = {
    where?: InventoryStockWhereInput
    data: XOR<InventoryStockUpdateWithoutProductInput, InventoryStockUncheckedUpdateWithoutProductInput>
  }

  export type InventoryStockUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryStockUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    update: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSizeCreateWithoutProductInput, ProductSizeUncheckedCreateWithoutProductInput>
  }

  export type ProductSizeUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSizeWhereUniqueInput
    data: XOR<ProductSizeUpdateWithoutProductInput, ProductSizeUncheckedUpdateWithoutProductInput>
  }

  export type ProductSizeUpdateManyWithWhereWithoutProductInput = {
    where: ProductSizeScalarWhereInput
    data: XOR<ProductSizeUpdateManyMutationInput, ProductSizeUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSizeScalarWhereInput = {
    AND?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    OR?: ProductSizeScalarWhereInput[]
    NOT?: ProductSizeScalarWhereInput | ProductSizeScalarWhereInput[]
    id?: StringFilter<"ProductSize"> | string
    productId?: StringFilter<"ProductSize"> | string
    name?: StringFilter<"ProductSize"> | string
    priceDelta?: IntFilter<"ProductSize"> | number
    sortOrder?: IntFilter<"ProductSize"> | number
  }

  export type VariationGroupUpsertWithWhereUniqueWithoutProductInput = {
    where: VariationGroupWhereUniqueInput
    update: XOR<VariationGroupUpdateWithoutProductInput, VariationGroupUncheckedUpdateWithoutProductInput>
    create: XOR<VariationGroupCreateWithoutProductInput, VariationGroupUncheckedCreateWithoutProductInput>
  }

  export type VariationGroupUpdateWithWhereUniqueWithoutProductInput = {
    where: VariationGroupWhereUniqueInput
    data: XOR<VariationGroupUpdateWithoutProductInput, VariationGroupUncheckedUpdateWithoutProductInput>
  }

  export type VariationGroupUpdateManyWithWhereWithoutProductInput = {
    where: VariationGroupScalarWhereInput
    data: XOR<VariationGroupUpdateManyMutationInput, VariationGroupUncheckedUpdateManyWithoutProductInput>
  }

  export type VariationGroupScalarWhereInput = {
    AND?: VariationGroupScalarWhereInput | VariationGroupScalarWhereInput[]
    OR?: VariationGroupScalarWhereInput[]
    NOT?: VariationGroupScalarWhereInput | VariationGroupScalarWhereInput[]
    id?: StringFilter<"VariationGroup"> | string
    productId?: StringFilter<"VariationGroup"> | string
    name?: StringFilter<"VariationGroup"> | string
    minSelectable?: IntFilter<"VariationGroup"> | number
    maxSelectable?: IntFilter<"VariationGroup"> | number
    required?: BoolFilter<"VariationGroup"> | boolean
    sortOrder?: IntFilter<"VariationGroup"> | number
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    productName?: StringFilter<"OrderItem"> | string
    sizeName?: StringNullableFilter<"OrderItem"> | string | null
    unitBasePrice?: IntFilter<"OrderItem"> | number
    quantity?: IntFilter<"OrderItem"> | number
    lineTotal?: IntFilter<"OrderItem"> | number
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stock?: InventoryStockCreateNestedOneWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stock?: InventoryStockUncheckedCreateNestedOneWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    basePrice?: IntFilter<"Product"> | number
    trackInventory?: BoolFilter<"Product"> | boolean
    active?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductCreateWithoutStockInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockInput = {
    id?: string
    name: string
    sku?: string | null
    categoryId?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
  }

  export type ProductUpsertWithoutStockInput = {
    update: XOR<ProductUpdateWithoutStockInput, ProductUncheckedUpdateWithoutStockInput>
    create: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockInput, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutSizesInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    stock?: InventoryStockCreateNestedOneWithoutProductInput
    variationGroups?: VariationGroupCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSizesInput = {
    id?: string
    name: string
    sku?: string | null
    categoryId?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stock?: InventoryStockUncheckedCreateNestedOneWithoutProductInput
    variationGroups?: VariationGroupUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSizesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
  }

  export type ProductUpsertWithoutSizesInput = {
    update: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stock?: InventoryStockUpdateOneWithoutProductNestedInput
    variationGroups?: VariationGroupUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: InventoryStockUncheckedUpdateOneWithoutProductNestedInput
    variationGroups?: VariationGroupUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutVariationGroupsInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    stock?: InventoryStockCreateNestedOneWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutVariationGroupsInput = {
    id?: string
    name: string
    sku?: string | null
    categoryId?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stock?: InventoryStockUncheckedCreateNestedOneWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutVariationGroupsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariationGroupsInput, ProductUncheckedCreateWithoutVariationGroupsInput>
  }

  export type VariationChoiceCreateWithoutGroupInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type VariationChoiceUncheckedCreateWithoutGroupInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type VariationChoiceCreateOrConnectWithoutGroupInput = {
    where: VariationChoiceWhereUniqueInput
    create: XOR<VariationChoiceCreateWithoutGroupInput, VariationChoiceUncheckedCreateWithoutGroupInput>
  }

  export type VariationChoiceCreateManyGroupInputEnvelope = {
    data: VariationChoiceCreateManyGroupInput | VariationChoiceCreateManyGroupInput[]
  }

  export type ProductUpsertWithoutVariationGroupsInput = {
    update: XOR<ProductUpdateWithoutVariationGroupsInput, ProductUncheckedUpdateWithoutVariationGroupsInput>
    create: XOR<ProductCreateWithoutVariationGroupsInput, ProductUncheckedCreateWithoutVariationGroupsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariationGroupsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariationGroupsInput, ProductUncheckedUpdateWithoutVariationGroupsInput>
  }

  export type ProductUpdateWithoutVariationGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stock?: InventoryStockUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariationGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: InventoryStockUncheckedUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VariationChoiceUpsertWithWhereUniqueWithoutGroupInput = {
    where: VariationChoiceWhereUniqueInput
    update: XOR<VariationChoiceUpdateWithoutGroupInput, VariationChoiceUncheckedUpdateWithoutGroupInput>
    create: XOR<VariationChoiceCreateWithoutGroupInput, VariationChoiceUncheckedCreateWithoutGroupInput>
  }

  export type VariationChoiceUpdateWithWhereUniqueWithoutGroupInput = {
    where: VariationChoiceWhereUniqueInput
    data: XOR<VariationChoiceUpdateWithoutGroupInput, VariationChoiceUncheckedUpdateWithoutGroupInput>
  }

  export type VariationChoiceUpdateManyWithWhereWithoutGroupInput = {
    where: VariationChoiceScalarWhereInput
    data: XOR<VariationChoiceUpdateManyMutationInput, VariationChoiceUncheckedUpdateManyWithoutGroupInput>
  }

  export type VariationChoiceScalarWhereInput = {
    AND?: VariationChoiceScalarWhereInput | VariationChoiceScalarWhereInput[]
    OR?: VariationChoiceScalarWhereInput[]
    NOT?: VariationChoiceScalarWhereInput | VariationChoiceScalarWhereInput[]
    id?: StringFilter<"VariationChoice"> | string
    groupId?: StringFilter<"VariationChoice"> | string
    name?: StringFilter<"VariationChoice"> | string
    priceDelta?: IntFilter<"VariationChoice"> | number
    sortOrder?: IntFilter<"VariationChoice"> | number
  }

  export type VariationGroupCreateWithoutChoicesInput = {
    id?: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
    product: ProductCreateNestedOneWithoutVariationGroupsInput
  }

  export type VariationGroupUncheckedCreateWithoutChoicesInput = {
    id?: string
    productId: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
  }

  export type VariationGroupCreateOrConnectWithoutChoicesInput = {
    where: VariationGroupWhereUniqueInput
    create: XOR<VariationGroupCreateWithoutChoicesInput, VariationGroupUncheckedCreateWithoutChoicesInput>
  }

  export type VariationGroupUpsertWithoutChoicesInput = {
    update: XOR<VariationGroupUpdateWithoutChoicesInput, VariationGroupUncheckedUpdateWithoutChoicesInput>
    create: XOR<VariationGroupCreateWithoutChoicesInput, VariationGroupUncheckedCreateWithoutChoicesInput>
    where?: VariationGroupWhereInput
  }

  export type VariationGroupUpdateToOneWithWhereWithoutChoicesInput = {
    where?: VariationGroupWhereInput
    data: XOR<VariationGroupUpdateWithoutChoicesInput, VariationGroupUncheckedUpdateWithoutChoicesInput>
  }

  export type VariationGroupUpdateWithoutChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutVariationGroupsNestedInput
  }

  export type VariationGroupUncheckedUpdateWithoutChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    product: ProductCreateNestedOneWithoutOrderItemsInput
    variations?: OrderItemVariationCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    variations?: OrderItemVariationUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt?: Date | string
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderNumber: number
    subtotal: number
    discount: number
    fees: number
    tax: number
    total: number
    createdAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutProductsInput
    stock?: InventoryStockCreateNestedOneWithoutProductInput
    sizes?: ProductSizeCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    sku?: string | null
    categoryId?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stock?: InventoryStockUncheckedCreateNestedOneWithoutProductInput
    sizes?: ProductSizeUncheckedCreateNestedManyWithoutProductInput
    variationGroups?: VariationGroupUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderItemVariationCreateWithoutOrderItemInput = {
    id?: string
    groupName: string
    choiceName: string
    priceDelta: number
  }

  export type OrderItemVariationUncheckedCreateWithoutOrderItemInput = {
    id?: string
    groupName: string
    choiceName: string
    priceDelta: number
  }

  export type OrderItemVariationCreateOrConnectWithoutOrderItemInput = {
    where: OrderItemVariationWhereUniqueInput
    create: XOR<OrderItemVariationCreateWithoutOrderItemInput, OrderItemVariationUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemVariationCreateManyOrderItemInputEnvelope = {
    data: OrderItemVariationCreateManyOrderItemInput | OrderItemVariationCreateManyOrderItemInput[]
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    fees?: IntFieldUpdateOperationsInput | number
    tax?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stock?: InventoryStockUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: InventoryStockUncheckedUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderItemVariationUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemVariationWhereUniqueInput
    update: XOR<OrderItemVariationUpdateWithoutOrderItemInput, OrderItemVariationUncheckedUpdateWithoutOrderItemInput>
    create: XOR<OrderItemVariationCreateWithoutOrderItemInput, OrderItemVariationUncheckedCreateWithoutOrderItemInput>
  }

  export type OrderItemVariationUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: OrderItemVariationWhereUniqueInput
    data: XOR<OrderItemVariationUpdateWithoutOrderItemInput, OrderItemVariationUncheckedUpdateWithoutOrderItemInput>
  }

  export type OrderItemVariationUpdateManyWithWhereWithoutOrderItemInput = {
    where: OrderItemVariationScalarWhereInput
    data: XOR<OrderItemVariationUpdateManyMutationInput, OrderItemVariationUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderItemVariationScalarWhereInput = {
    AND?: OrderItemVariationScalarWhereInput | OrderItemVariationScalarWhereInput[]
    OR?: OrderItemVariationScalarWhereInput[]
    NOT?: OrderItemVariationScalarWhereInput | OrderItemVariationScalarWhereInput[]
    id?: StringFilter<"OrderItemVariation"> | string
    orderItemId?: StringFilter<"OrderItemVariation"> | string
    groupName?: StringFilter<"OrderItemVariation"> | string
    choiceName?: StringFilter<"OrderItemVariation"> | string
    priceDelta?: IntFilter<"OrderItemVariation"> | number
  }

  export type OrderItemCreateWithoutVariationsInput = {
    id?: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
    order: OrderCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutVariationsInput = {
    id?: string
    orderId: string
    productId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
  }

  export type OrderItemCreateOrConnectWithoutVariationsInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutVariationsInput, OrderItemUncheckedCreateWithoutVariationsInput>
  }

  export type OrderItemUpsertWithoutVariationsInput = {
    update: XOR<OrderItemUpdateWithoutVariationsInput, OrderItemUncheckedUpdateWithoutVariationsInput>
    create: XOR<OrderItemCreateWithoutVariationsInput, OrderItemUncheckedCreateWithoutVariationsInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutVariationsInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutVariationsInput, OrderItemUncheckedUpdateWithoutVariationsInput>
  }

  export type OrderItemUpdateWithoutVariationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutVariationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeCreateManyProductInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type VariationGroupCreateManyProductInput = {
    id?: string
    name: string
    minSelectable?: number
    maxSelectable?: number
    required?: boolean
    sortOrder?: number
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
  }

  export type ProductSizeUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductSizeUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationGroupUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    choices?: VariationChoiceUpdateManyWithoutGroupNestedInput
  }

  export type VariationGroupUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    choices?: VariationChoiceUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type VariationGroupUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    minSelectable?: IntFieldUpdateOperationsInput | number
    maxSelectable?: IntFieldUpdateOperationsInput | number
    required?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    variations?: OrderItemVariationUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    variations?: OrderItemVariationUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    sku?: string | null
    basePrice: number
    trackInventory?: boolean
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: InventoryStockUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: InventoryStockUncheckedUpdateOneWithoutProductNestedInput
    sizes?: ProductSizeUncheckedUpdateManyWithoutProductNestedInput
    variationGroups?: VariationGroupUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    basePrice?: IntFieldUpdateOperationsInput | number
    trackInventory?: BoolFieldUpdateOperationsInput | boolean
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VariationChoiceCreateManyGroupInput = {
    id?: string
    name: string
    priceDelta: number
    sortOrder?: number
  }

  export type VariationChoiceUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationChoiceUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type VariationChoiceUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    productName: string
    sizeName?: string | null
    unitBasePrice: number
    quantity: number
    lineTotal: number
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
    variations?: OrderItemVariationUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
    variations?: OrderItemVariationUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sizeName?: NullableStringFieldUpdateOperationsInput | string | null
    unitBasePrice?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    lineTotal?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemVariationCreateManyOrderItemInput = {
    id?: string
    groupName: string
    choiceName: string
    priceDelta: number
  }

  export type OrderItemVariationUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemVariationUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
  }

  export type OrderItemVariationUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupName?: StringFieldUpdateOperationsInput | string
    choiceName?: StringFieldUpdateOperationsInput | string
    priceDelta?: IntFieldUpdateOperationsInput | number
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