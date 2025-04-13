
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model UserGame
 * 
 */
export type UserGame = $Result.DefaultSelection<Prisma.$UserGamePayload>
/**
 * Model TeamGame
 * 
 */
export type TeamGame = $Result.DefaultSelection<Prisma.$TeamGamePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model TeamInvitation
 * 
 */
export type TeamInvitation = $Result.DefaultSelection<Prisma.$TeamInvitationPayload>
/**
 * Model VideoClip
 * 
 */
export type VideoClip = $Result.DefaultSelection<Prisma.$VideoClipPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InvitationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]


export const TeamMemberRole: {
  Owner: 'Owner',
  Captain: 'Captain',
  Member: 'Member'
};

export type TeamMemberRole = (typeof TeamMemberRole)[keyof typeof TeamMemberRole]


export const PlayerRole: {
  Assaulter: 'Assaulter',
  Sniper: 'Sniper',
  Leader: 'Leader',
  All_rounder: 'All_rounder'
};

export type PlayerRole = (typeof PlayerRole)[keyof typeof PlayerRole]


export const ExperienceLevel: {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced',
  Professional: 'Professional'
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel]


export const Region: {
  North_America: 'North_America',
  Asia: 'Asia',
  Europe: 'Europe'
};

export type Region = (typeof Region)[keyof typeof Region]


export const AuthType: {
  Google: 'Google'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]

}

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

export type TeamMemberRole = $Enums.TeamMemberRole

export const TeamMemberRole: typeof $Enums.TeamMemberRole

export type PlayerRole = $Enums.PlayerRole

export const PlayerRole: typeof $Enums.PlayerRole

export type ExperienceLevel = $Enums.ExperienceLevel

export const ExperienceLevel: typeof $Enums.ExperienceLevel

export type Region = $Enums.Region

export const Region: typeof $Enums.Region

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGame`: Exposes CRUD operations for the **UserGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGames
    * const userGames = await prisma.userGame.findMany()
    * ```
    */
  get userGame(): Prisma.UserGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamGame`: Exposes CRUD operations for the **TeamGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamGames
    * const teamGames = await prisma.teamGame.findMany()
    * ```
    */
  get teamGame(): Prisma.TeamGameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamInvitation`: Exposes CRUD operations for the **TeamInvitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamInvitations
    * const teamInvitations = await prisma.teamInvitation.findMany()
    * ```
    */
  get teamInvitation(): Prisma.TeamInvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoClip`: Exposes CRUD operations for the **VideoClip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoClips
    * const videoClips = await prisma.videoClip.findMany()
    * ```
    */
  get videoClip(): Prisma.VideoClipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Game: 'Game',
    UserGame: 'UserGame',
    TeamGame: 'TeamGame',
    Team: 'Team',
    TeamMember: 'TeamMember',
    TeamInvitation: 'TeamInvitation',
    VideoClip: 'VideoClip',
    Like: 'Like',
    Comment: 'Comment'
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
      modelProps: "user" | "game" | "userGame" | "teamGame" | "team" | "teamMember" | "teamInvitation" | "videoClip" | "like" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      UserGame: {
        payload: Prisma.$UserGamePayload<ExtArgs>
        fields: Prisma.UserGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findFirst: {
            args: Prisma.UserGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          findMany: {
            args: Prisma.UserGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          create: {
            args: Prisma.UserGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          createMany: {
            args: Prisma.UserGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          delete: {
            args: Prisma.UserGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          update: {
            args: Prisma.UserGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          deleteMany: {
            args: Prisma.UserGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>[]
          }
          upsert: {
            args: Prisma.UserGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGamePayload>
          }
          aggregate: {
            args: Prisma.UserGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGame>
          }
          groupBy: {
            args: Prisma.UserGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGameCountArgs<ExtArgs>
            result: $Utils.Optional<UserGameCountAggregateOutputType> | number
          }
        }
      }
      TeamGame: {
        payload: Prisma.$TeamGamePayload<ExtArgs>
        fields: Prisma.TeamGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>
          }
          findFirst: {
            args: Prisma.TeamGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>
          }
          findMany: {
            args: Prisma.TeamGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>[]
          }
          create: {
            args: Prisma.TeamGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>
          }
          createMany: {
            args: Prisma.TeamGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamGameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>[]
          }
          delete: {
            args: Prisma.TeamGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>
          }
          update: {
            args: Prisma.TeamGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>
          }
          deleteMany: {
            args: Prisma.TeamGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamGameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>[]
          }
          upsert: {
            args: Prisma.TeamGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamGamePayload>
          }
          aggregate: {
            args: Prisma.TeamGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamGame>
          }
          groupBy: {
            args: Prisma.TeamGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamGameCountArgs<ExtArgs>
            result: $Utils.Optional<TeamGameCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      TeamInvitation: {
        payload: Prisma.$TeamInvitationPayload<ExtArgs>
        fields: Prisma.TeamInvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamInvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamInvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          findFirst: {
            args: Prisma.TeamInvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamInvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          findMany: {
            args: Prisma.TeamInvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>[]
          }
          create: {
            args: Prisma.TeamInvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          createMany: {
            args: Prisma.TeamInvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamInvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>[]
          }
          delete: {
            args: Prisma.TeamInvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          update: {
            args: Prisma.TeamInvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          deleteMany: {
            args: Prisma.TeamInvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamInvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamInvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>[]
          }
          upsert: {
            args: Prisma.TeamInvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamInvitationPayload>
          }
          aggregate: {
            args: Prisma.TeamInvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamInvitation>
          }
          groupBy: {
            args: Prisma.TeamInvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamInvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamInvitationCountArgs<ExtArgs>
            result: $Utils.Optional<TeamInvitationCountAggregateOutputType> | number
          }
        }
      }
      VideoClip: {
        payload: Prisma.$VideoClipPayload<ExtArgs>
        fields: Prisma.VideoClipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoClipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoClipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>
          }
          findFirst: {
            args: Prisma.VideoClipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoClipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>
          }
          findMany: {
            args: Prisma.VideoClipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>[]
          }
          create: {
            args: Prisma.VideoClipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>
          }
          createMany: {
            args: Prisma.VideoClipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoClipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>[]
          }
          delete: {
            args: Prisma.VideoClipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>
          }
          update: {
            args: Prisma.VideoClipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>
          }
          deleteMany: {
            args: Prisma.VideoClipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoClipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoClipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>[]
          }
          upsert: {
            args: Prisma.VideoClipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoClipPayload>
          }
          aggregate: {
            args: Prisma.VideoClipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoClip>
          }
          groupBy: {
            args: Prisma.VideoClipGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoClipGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoClipCountArgs<ExtArgs>
            result: $Utils.Optional<VideoClipCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    game?: GameOmit
    userGame?: UserGameOmit
    teamGame?: TeamGameOmit
    team?: TeamOmit
    teamMember?: TeamMemberOmit
    teamInvitation?: TeamInvitationOmit
    videoClip?: VideoClipOmit
    like?: LikeOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    games: number
    team: number
    ownedTeam: number
    videos: number
    gamesPlayed: number
    sentInvitation: number
    receivedInvites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | UserCountOutputTypeCountGamesArgs
    team?: boolean | UserCountOutputTypeCountTeamArgs
    ownedTeam?: boolean | UserCountOutputTypeCountOwnedTeamArgs
    videos?: boolean | UserCountOutputTypeCountVideosArgs
    gamesPlayed?: boolean | UserCountOutputTypeCountGamesPlayedArgs
    sentInvitation?: boolean | UserCountOutputTypeCountSentInvitationArgs
    receivedInvites?: boolean | UserCountOutputTypeCountReceivedInvitesArgs
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
  export type UserCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoClipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGamesPlayedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamInvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamInvitationWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    players: number
    teams: number
    videos: number
    userGames: number
    teamGames: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | GameCountOutputTypeCountPlayersArgs
    teams?: boolean | GameCountOutputTypeCountTeamsArgs
    videos?: boolean | GameCountOutputTypeCountVideosArgs
    userGames?: boolean | GameCountOutputTypeCountUserGamesArgs
    teamGames?: boolean | GameCountOutputTypeCountTeamGamesArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoClipWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountUserGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountTeamGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamGameWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    games: number
    members: number
    invitation: number
    gamesPlayed: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | TeamCountOutputTypeCountGamesArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    invitation?: boolean | TeamCountOutputTypeCountInvitationArgs
    gamesPlayed?: boolean | TeamCountOutputTypeCountGamesPlayedArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamInvitationWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountGamesPlayedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamGameWhereInput
  }


  /**
   * Count Type VideoClipCountOutputType
   */

  export type VideoClipCountOutputType = {
    likes: number
    comments: number
  }

  export type VideoClipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | VideoClipCountOutputTypeCountLikesArgs
    comments?: boolean | VideoClipCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * VideoClipCountOutputType without action
   */
  export type VideoClipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClipCountOutputType
     */
    select?: VideoClipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoClipCountOutputType without action
   */
  export type VideoClipCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * VideoClipCountOutputType without action
   */
  export type VideoClipCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    bio: string | null
    gamertag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    bio: string | null
    gamertag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    bio: number
    gamertag: number
    playerRole: number
    experienceLevel: number
    region: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    bio?: true
    gamertag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    bio?: true
    gamertag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    bio?: true
    gamertag?: true
    playerRole?: true
    experienceLevel?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    bio: string
    gamertag: string | null
    playerRole: $Enums.PlayerRole[]
    experienceLevel: $Enums.ExperienceLevel[]
    region: $Enums.Region[]
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    bio?: boolean
    gamertag?: boolean
    playerRole?: boolean
    experienceLevel?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    games?: boolean | User$gamesArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    ownedTeam?: boolean | User$ownedTeamArgs<ExtArgs>
    videos?: boolean | User$videosArgs<ExtArgs>
    gamesPlayed?: boolean | User$gamesPlayedArgs<ExtArgs>
    sentInvitation?: boolean | User$sentInvitationArgs<ExtArgs>
    receivedInvites?: boolean | User$receivedInvitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    bio?: boolean
    gamertag?: boolean
    playerRole?: boolean
    experienceLevel?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    bio?: boolean
    gamertag?: boolean
    playerRole?: boolean
    experienceLevel?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    bio?: boolean
    gamertag?: boolean
    playerRole?: boolean
    experienceLevel?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "bio" | "gamertag" | "playerRole" | "experienceLevel" | "region" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | User$gamesArgs<ExtArgs>
    team?: boolean | User$teamArgs<ExtArgs>
    ownedTeam?: boolean | User$ownedTeamArgs<ExtArgs>
    videos?: boolean | User$videosArgs<ExtArgs>
    gamesPlayed?: boolean | User$gamesPlayedArgs<ExtArgs>
    sentInvitation?: boolean | User$sentInvitationArgs<ExtArgs>
    receivedInvites?: boolean | User$receivedInvitesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
      team: Prisma.$TeamMemberPayload<ExtArgs>[]
      ownedTeam: Prisma.$TeamPayload<ExtArgs>[]
      videos: Prisma.$VideoClipPayload<ExtArgs>[]
      gamesPlayed: Prisma.$UserGamePayload<ExtArgs>[]
      sentInvitation: Prisma.$TeamInvitationPayload<ExtArgs>[]
      receivedInvites: Prisma.$TeamInvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      bio: string
      gamertag: string | null
      playerRole: $Enums.PlayerRole[]
      experienceLevel: $Enums.ExperienceLevel[]
      region: $Enums.Region[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends User$gamesArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    team<T extends User$teamArgs<ExtArgs> = {}>(args?: Subset<T, User$teamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedTeam<T extends User$ownedTeamArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedTeamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends User$videosArgs<ExtArgs> = {}>(args?: Subset<T, User$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesPlayed<T extends User$gamesPlayedArgs<ExtArgs> = {}>(args?: Subset<T, User$gamesPlayedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentInvitation<T extends User$sentInvitationArgs<ExtArgs> = {}>(args?: Subset<T, User$sentInvitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedInvites<T extends User$receivedInvitesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedInvitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly gamertag: FieldRef<"User", 'String'>
    readonly playerRole: FieldRef<"User", 'PlayerRole[]'>
    readonly experienceLevel: FieldRef<"User", 'ExperienceLevel[]'>
    readonly region: FieldRef<"User", 'Region[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.games
   */
  export type User$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * User.team
   */
  export type User$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.ownedTeam
   */
  export type User$ownedTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * User.videos
   */
  export type User$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    where?: VideoClipWhereInput
    orderBy?: VideoClipOrderByWithRelationInput | VideoClipOrderByWithRelationInput[]
    cursor?: VideoClipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoClipScalarFieldEnum | VideoClipScalarFieldEnum[]
  }

  /**
   * User.gamesPlayed
   */
  export type User$gamesPlayedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * User.sentInvitation
   */
  export type User$sentInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    where?: TeamInvitationWhereInput
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    cursor?: TeamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * User.receivedInvites
   */
  export type User$receivedInvitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    where?: TeamInvitationWhereInput
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    cursor?: TeamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GameMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: string
    name: string
    _count: GameCountAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    players?: boolean | Game$playersArgs<ExtArgs>
    teams?: boolean | Game$teamsArgs<ExtArgs>
    videos?: boolean | Game$videosArgs<ExtArgs>
    userGames?: boolean | Game$userGamesArgs<ExtArgs>
    teamGames?: boolean | Game$teamGamesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Game$playersArgs<ExtArgs>
    teams?: boolean | Game$teamsArgs<ExtArgs>
    videos?: boolean | Game$videosArgs<ExtArgs>
    userGames?: boolean | Game$userGamesArgs<ExtArgs>
    teamGames?: boolean | Game$teamGamesArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      players: Prisma.$UserPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      videos: Prisma.$VideoClipPayload<ExtArgs>[]
      userGames: Prisma.$UserGamePayload<ExtArgs>[]
      teamGames: Prisma.$TeamGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Game$playersArgs<ExtArgs> = {}>(args?: Subset<T, Game$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends Game$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Game$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends Game$videosArgs<ExtArgs> = {}>(args?: Subset<T, Game$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userGames<T extends Game$userGamesArgs<ExtArgs> = {}>(args?: Subset<T, Game$userGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamGames<T extends Game$teamGamesArgs<ExtArgs> = {}>(args?: Subset<T, Game$teamGamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'String'>
    readonly name: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.players
   */
  export type Game$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Game.teams
   */
  export type Game$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Game.videos
   */
  export type Game$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    where?: VideoClipWhereInput
    orderBy?: VideoClipOrderByWithRelationInput | VideoClipOrderByWithRelationInput[]
    cursor?: VideoClipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoClipScalarFieldEnum | VideoClipScalarFieldEnum[]
  }

  /**
   * Game.userGames
   */
  export type Game$userGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    cursor?: UserGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * Game.teamGames
   */
  export type Game$teamGamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    where?: TeamGameWhereInput
    orderBy?: TeamGameOrderByWithRelationInput | TeamGameOrderByWithRelationInput[]
    cursor?: TeamGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamGameScalarFieldEnum | TeamGameScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model UserGame
   */

  export type AggregateUserGame = {
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  export type UserGameMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    experiece: $Enums.ExperienceLevel | null
  }

  export type UserGameMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gameId: string | null
    experiece: $Enums.ExperienceLevel | null
  }

  export type UserGameCountAggregateOutputType = {
    id: number
    userId: number
    gameId: number
    experiece: number
    _all: number
  }


  export type UserGameMinAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    experiece?: true
  }

  export type UserGameMaxAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    experiece?: true
  }

  export type UserGameCountAggregateInputType = {
    id?: true
    userId?: true
    gameId?: true
    experiece?: true
    _all?: true
  }

  export type UserGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGame to aggregate.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGames
    **/
    _count?: true | UserGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGameMaxAggregateInputType
  }

  export type GetUserGameAggregateType<T extends UserGameAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGame[P]>
      : GetScalarType<T[P], AggregateUserGame[P]>
  }




  export type UserGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGameWhereInput
    orderBy?: UserGameOrderByWithAggregationInput | UserGameOrderByWithAggregationInput[]
    by: UserGameScalarFieldEnum[] | UserGameScalarFieldEnum
    having?: UserGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGameCountAggregateInputType | true
    _min?: UserGameMinAggregateInputType
    _max?: UserGameMaxAggregateInputType
  }

  export type UserGameGroupByOutputType = {
    id: string
    userId: string
    gameId: string
    experiece: $Enums.ExperienceLevel
    _count: UserGameCountAggregateOutputType | null
    _min: UserGameMinAggregateOutputType | null
    _max: UserGameMaxAggregateOutputType | null
  }

  type GetUserGameGroupByPayload<T extends UserGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGameGroupByOutputType[P]>
            : GetScalarType<T[P], UserGameGroupByOutputType[P]>
        }
      >
    >


  export type UserGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    experiece?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    experiece?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gameId?: boolean
    experiece?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGame"]>

  export type UserGameSelectScalar = {
    id?: boolean
    userId?: boolean
    gameId?: boolean
    experiece?: boolean
  }

  export type UserGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gameId" | "experiece", ExtArgs["result"]["userGame"]>
  export type UserGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type UserGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $UserGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGame"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gameId: string
      experiece: $Enums.ExperienceLevel
    }, ExtArgs["result"]["userGame"]>
    composites: {}
  }

  type UserGameGetPayload<S extends boolean | null | undefined | UserGameDefaultArgs> = $Result.GetResult<Prisma.$UserGamePayload, S>

  type UserGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGameCountAggregateInputType | true
    }

  export interface UserGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGame'], meta: { name: 'UserGame' } }
    /**
     * Find zero or one UserGame that matches the filter.
     * @param {UserGameFindUniqueArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGameFindUniqueArgs>(args: SelectSubset<T, UserGameFindUniqueArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGameFindUniqueOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGameFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGameFindFirstArgs>(args?: SelectSubset<T, UserGameFindFirstArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindFirstOrThrowArgs} args - Arguments to find a UserGame
     * @example
     * // Get one UserGame
     * const userGame = await prisma.userGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGameFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGames
     * const userGames = await prisma.userGame.findMany()
     * 
     * // Get first 10 UserGames
     * const userGames = await prisma.userGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGameWithIdOnly = await prisma.userGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGameFindManyArgs>(args?: SelectSubset<T, UserGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGame.
     * @param {UserGameCreateArgs} args - Arguments to create a UserGame.
     * @example
     * // Create one UserGame
     * const UserGame = await prisma.userGame.create({
     *   data: {
     *     // ... data to create a UserGame
     *   }
     * })
     * 
     */
    create<T extends UserGameCreateArgs>(args: SelectSubset<T, UserGameCreateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGames.
     * @param {UserGameCreateManyArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGameCreateManyArgs>(args?: SelectSubset<T, UserGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGames and returns the data saved in the database.
     * @param {UserGameCreateManyAndReturnArgs} args - Arguments to create many UserGames.
     * @example
     * // Create many UserGames
     * const userGame = await prisma.userGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGameCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGame.
     * @param {UserGameDeleteArgs} args - Arguments to delete one UserGame.
     * @example
     * // Delete one UserGame
     * const UserGame = await prisma.userGame.delete({
     *   where: {
     *     // ... filter to delete one UserGame
     *   }
     * })
     * 
     */
    delete<T extends UserGameDeleteArgs>(args: SelectSubset<T, UserGameDeleteArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGame.
     * @param {UserGameUpdateArgs} args - Arguments to update one UserGame.
     * @example
     * // Update one UserGame
     * const userGame = await prisma.userGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGameUpdateArgs>(args: SelectSubset<T, UserGameUpdateArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGames.
     * @param {UserGameDeleteManyArgs} args - Arguments to filter UserGames to delete.
     * @example
     * // Delete a few UserGames
     * const { count } = await prisma.userGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGameDeleteManyArgs>(args?: SelectSubset<T, UserGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGameUpdateManyArgs>(args: SelectSubset<T, UserGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGames and returns the data updated in the database.
     * @param {UserGameUpdateManyAndReturnArgs} args - Arguments to update many UserGames.
     * @example
     * // Update many UserGames
     * const userGame = await prisma.userGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGames and only return the `id`
     * const userGameWithIdOnly = await prisma.userGame.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserGameUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGame.
     * @param {UserGameUpsertArgs} args - Arguments to update or create a UserGame.
     * @example
     * // Update or create a UserGame
     * const userGame = await prisma.userGame.upsert({
     *   create: {
     *     // ... data to create a UserGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGame we want to update
     *   }
     * })
     */
    upsert<T extends UserGameUpsertArgs>(args: SelectSubset<T, UserGameUpsertArgs<ExtArgs>>): Prisma__UserGameClient<$Result.GetResult<Prisma.$UserGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameCountArgs} args - Arguments to filter UserGames to count.
     * @example
     * // Count the number of UserGames
     * const count = await prisma.userGame.count({
     *   where: {
     *     // ... the filter for the UserGames we want to count
     *   }
     * })
    **/
    count<T extends UserGameCountArgs>(
      args?: Subset<T, UserGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGameAggregateArgs>(args: Subset<T, UserGameAggregateArgs>): Prisma.PrismaPromise<GetUserGameAggregateType<T>>

    /**
     * Group by UserGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGameGroupByArgs} args - Group by arguments.
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
      T extends UserGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGameGroupByArgs['orderBy'] }
        : { orderBy?: UserGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGame model
   */
  readonly fields: UserGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserGame model
   */
  interface UserGameFieldRefs {
    readonly id: FieldRef<"UserGame", 'String'>
    readonly userId: FieldRef<"UserGame", 'String'>
    readonly gameId: FieldRef<"UserGame", 'String'>
    readonly experiece: FieldRef<"UserGame", 'ExperienceLevel'>
  }
    

  // Custom InputTypes
  /**
   * UserGame findUnique
   */
  export type UserGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findUniqueOrThrow
   */
  export type UserGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame findFirst
   */
  export type UserGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findFirstOrThrow
   */
  export type UserGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGame to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGames.
     */
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame findMany
   */
  export type UserGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter, which UserGames to fetch.
     */
    where?: UserGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGames to fetch.
     */
    orderBy?: UserGameOrderByWithRelationInput | UserGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGames.
     */
    cursor?: UserGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGames.
     */
    skip?: number
    distinct?: UserGameScalarFieldEnum | UserGameScalarFieldEnum[]
  }

  /**
   * UserGame create
   */
  export type UserGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGame.
     */
    data: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
  }

  /**
   * UserGame createMany
   */
  export type UserGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGame createManyAndReturn
   */
  export type UserGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to create many UserGames.
     */
    data: UserGameCreateManyInput | UserGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame update
   */
  export type UserGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGame.
     */
    data: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
    /**
     * Choose, which UserGame to update.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame updateMany
   */
  export type UserGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
  }

  /**
   * UserGame updateManyAndReturn
   */
  export type UserGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * The data used to update UserGames.
     */
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyInput>
    /**
     * Filter which UserGames to update
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGame upsert
   */
  export type UserGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGame to update in case it exists.
     */
    where: UserGameWhereUniqueInput
    /**
     * In case the UserGame found by the `where` argument doesn't exist, create a new UserGame with this data.
     */
    create: XOR<UserGameCreateInput, UserGameUncheckedCreateInput>
    /**
     * In case the UserGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGameUpdateInput, UserGameUncheckedUpdateInput>
  }

  /**
   * UserGame delete
   */
  export type UserGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
    /**
     * Filter which UserGame to delete.
     */
    where: UserGameWhereUniqueInput
  }

  /**
   * UserGame deleteMany
   */
  export type UserGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGames to delete
     */
    where?: UserGameWhereInput
    /**
     * Limit how many UserGames to delete.
     */
    limit?: number
  }

  /**
   * UserGame without action
   */
  export type UserGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGame
     */
    select?: UserGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGame
     */
    omit?: UserGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGameInclude<ExtArgs> | null
  }


  /**
   * Model TeamGame
   */

  export type AggregateTeamGame = {
    _count: TeamGameCountAggregateOutputType | null
    _min: TeamGameMinAggregateOutputType | null
    _max: TeamGameMaxAggregateOutputType | null
  }

  export type TeamGameMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    gameId: string | null
    experiece: $Enums.ExperienceLevel | null
  }

  export type TeamGameMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    gameId: string | null
    experiece: $Enums.ExperienceLevel | null
  }

  export type TeamGameCountAggregateOutputType = {
    id: number
    teamId: number
    gameId: number
    experiece: number
    _all: number
  }


  export type TeamGameMinAggregateInputType = {
    id?: true
    teamId?: true
    gameId?: true
    experiece?: true
  }

  export type TeamGameMaxAggregateInputType = {
    id?: true
    teamId?: true
    gameId?: true
    experiece?: true
  }

  export type TeamGameCountAggregateInputType = {
    id?: true
    teamId?: true
    gameId?: true
    experiece?: true
    _all?: true
  }

  export type TeamGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamGame to aggregate.
     */
    where?: TeamGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGames to fetch.
     */
    orderBy?: TeamGameOrderByWithRelationInput | TeamGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamGames
    **/
    _count?: true | TeamGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamGameMaxAggregateInputType
  }

  export type GetTeamGameAggregateType<T extends TeamGameAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamGame[P]>
      : GetScalarType<T[P], AggregateTeamGame[P]>
  }




  export type TeamGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamGameWhereInput
    orderBy?: TeamGameOrderByWithAggregationInput | TeamGameOrderByWithAggregationInput[]
    by: TeamGameScalarFieldEnum[] | TeamGameScalarFieldEnum
    having?: TeamGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamGameCountAggregateInputType | true
    _min?: TeamGameMinAggregateInputType
    _max?: TeamGameMaxAggregateInputType
  }

  export type TeamGameGroupByOutputType = {
    id: string
    teamId: string
    gameId: string
    experiece: $Enums.ExperienceLevel
    _count: TeamGameCountAggregateOutputType | null
    _min: TeamGameMinAggregateOutputType | null
    _max: TeamGameMaxAggregateOutputType | null
  }

  type GetTeamGameGroupByPayload<T extends TeamGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGameGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGameGroupByOutputType[P]>
        }
      >
    >


  export type TeamGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    gameId?: boolean
    experiece?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamGame"]>

  export type TeamGameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    gameId?: boolean
    experiece?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamGame"]>

  export type TeamGameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    gameId?: boolean
    experiece?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamGame"]>

  export type TeamGameSelectScalar = {
    id?: boolean
    teamId?: boolean
    gameId?: boolean
    experiece?: boolean
  }

  export type TeamGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "gameId" | "experiece", ExtArgs["result"]["teamGame"]>
  export type TeamGameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type TeamGameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type TeamGameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $TeamGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamGame"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      gameId: string
      experiece: $Enums.ExperienceLevel
    }, ExtArgs["result"]["teamGame"]>
    composites: {}
  }

  type TeamGameGetPayload<S extends boolean | null | undefined | TeamGameDefaultArgs> = $Result.GetResult<Prisma.$TeamGamePayload, S>

  type TeamGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamGameCountAggregateInputType | true
    }

  export interface TeamGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamGame'], meta: { name: 'TeamGame' } }
    /**
     * Find zero or one TeamGame that matches the filter.
     * @param {TeamGameFindUniqueArgs} args - Arguments to find a TeamGame
     * @example
     * // Get one TeamGame
     * const teamGame = await prisma.teamGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamGameFindUniqueArgs>(args: SelectSubset<T, TeamGameFindUniqueArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamGameFindUniqueOrThrowArgs} args - Arguments to find a TeamGame
     * @example
     * // Get one TeamGame
     * const teamGame = await prisma.teamGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamGameFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameFindFirstArgs} args - Arguments to find a TeamGame
     * @example
     * // Get one TeamGame
     * const teamGame = await prisma.teamGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamGameFindFirstArgs>(args?: SelectSubset<T, TeamGameFindFirstArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameFindFirstOrThrowArgs} args - Arguments to find a TeamGame
     * @example
     * // Get one TeamGame
     * const teamGame = await prisma.teamGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamGameFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamGames
     * const teamGames = await prisma.teamGame.findMany()
     * 
     * // Get first 10 TeamGames
     * const teamGames = await prisma.teamGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamGameWithIdOnly = await prisma.teamGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamGameFindManyArgs>(args?: SelectSubset<T, TeamGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamGame.
     * @param {TeamGameCreateArgs} args - Arguments to create a TeamGame.
     * @example
     * // Create one TeamGame
     * const TeamGame = await prisma.teamGame.create({
     *   data: {
     *     // ... data to create a TeamGame
     *   }
     * })
     * 
     */
    create<T extends TeamGameCreateArgs>(args: SelectSubset<T, TeamGameCreateArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamGames.
     * @param {TeamGameCreateManyArgs} args - Arguments to create many TeamGames.
     * @example
     * // Create many TeamGames
     * const teamGame = await prisma.teamGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamGameCreateManyArgs>(args?: SelectSubset<T, TeamGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamGames and returns the data saved in the database.
     * @param {TeamGameCreateManyAndReturnArgs} args - Arguments to create many TeamGames.
     * @example
     * // Create many TeamGames
     * const teamGame = await prisma.teamGame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamGames and only return the `id`
     * const teamGameWithIdOnly = await prisma.teamGame.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamGameCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamGameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamGame.
     * @param {TeamGameDeleteArgs} args - Arguments to delete one TeamGame.
     * @example
     * // Delete one TeamGame
     * const TeamGame = await prisma.teamGame.delete({
     *   where: {
     *     // ... filter to delete one TeamGame
     *   }
     * })
     * 
     */
    delete<T extends TeamGameDeleteArgs>(args: SelectSubset<T, TeamGameDeleteArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamGame.
     * @param {TeamGameUpdateArgs} args - Arguments to update one TeamGame.
     * @example
     * // Update one TeamGame
     * const teamGame = await prisma.teamGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamGameUpdateArgs>(args: SelectSubset<T, TeamGameUpdateArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamGames.
     * @param {TeamGameDeleteManyArgs} args - Arguments to filter TeamGames to delete.
     * @example
     * // Delete a few TeamGames
     * const { count } = await prisma.teamGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamGameDeleteManyArgs>(args?: SelectSubset<T, TeamGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamGames
     * const teamGame = await prisma.teamGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamGameUpdateManyArgs>(args: SelectSubset<T, TeamGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamGames and returns the data updated in the database.
     * @param {TeamGameUpdateManyAndReturnArgs} args - Arguments to update many TeamGames.
     * @example
     * // Update many TeamGames
     * const teamGame = await prisma.teamGame.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamGames and only return the `id`
     * const teamGameWithIdOnly = await prisma.teamGame.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamGameUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamGameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamGame.
     * @param {TeamGameUpsertArgs} args - Arguments to update or create a TeamGame.
     * @example
     * // Update or create a TeamGame
     * const teamGame = await prisma.teamGame.upsert({
     *   create: {
     *     // ... data to create a TeamGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamGame we want to update
     *   }
     * })
     */
    upsert<T extends TeamGameUpsertArgs>(args: SelectSubset<T, TeamGameUpsertArgs<ExtArgs>>): Prisma__TeamGameClient<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameCountArgs} args - Arguments to filter TeamGames to count.
     * @example
     * // Count the number of TeamGames
     * const count = await prisma.teamGame.count({
     *   where: {
     *     // ... the filter for the TeamGames we want to count
     *   }
     * })
    **/
    count<T extends TeamGameCountArgs>(
      args?: Subset<T, TeamGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamGameAggregateArgs>(args: Subset<T, TeamGameAggregateArgs>): Prisma.PrismaPromise<GetTeamGameAggregateType<T>>

    /**
     * Group by TeamGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGameGroupByArgs} args - Group by arguments.
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
      T extends TeamGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGameGroupByArgs['orderBy'] }
        : { orderBy?: TeamGameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamGame model
   */
  readonly fields: TeamGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamGame model
   */
  interface TeamGameFieldRefs {
    readonly id: FieldRef<"TeamGame", 'String'>
    readonly teamId: FieldRef<"TeamGame", 'String'>
    readonly gameId: FieldRef<"TeamGame", 'String'>
    readonly experiece: FieldRef<"TeamGame", 'ExperienceLevel'>
  }
    

  // Custom InputTypes
  /**
   * TeamGame findUnique
   */
  export type TeamGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * Filter, which TeamGame to fetch.
     */
    where: TeamGameWhereUniqueInput
  }

  /**
   * TeamGame findUniqueOrThrow
   */
  export type TeamGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * Filter, which TeamGame to fetch.
     */
    where: TeamGameWhereUniqueInput
  }

  /**
   * TeamGame findFirst
   */
  export type TeamGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * Filter, which TeamGame to fetch.
     */
    where?: TeamGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGames to fetch.
     */
    orderBy?: TeamGameOrderByWithRelationInput | TeamGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamGames.
     */
    cursor?: TeamGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamGames.
     */
    distinct?: TeamGameScalarFieldEnum | TeamGameScalarFieldEnum[]
  }

  /**
   * TeamGame findFirstOrThrow
   */
  export type TeamGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * Filter, which TeamGame to fetch.
     */
    where?: TeamGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGames to fetch.
     */
    orderBy?: TeamGameOrderByWithRelationInput | TeamGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamGames.
     */
    cursor?: TeamGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamGames.
     */
    distinct?: TeamGameScalarFieldEnum | TeamGameScalarFieldEnum[]
  }

  /**
   * TeamGame findMany
   */
  export type TeamGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * Filter, which TeamGames to fetch.
     */
    where?: TeamGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamGames to fetch.
     */
    orderBy?: TeamGameOrderByWithRelationInput | TeamGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamGames.
     */
    cursor?: TeamGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamGames.
     */
    skip?: number
    distinct?: TeamGameScalarFieldEnum | TeamGameScalarFieldEnum[]
  }

  /**
   * TeamGame create
   */
  export type TeamGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamGame.
     */
    data: XOR<TeamGameCreateInput, TeamGameUncheckedCreateInput>
  }

  /**
   * TeamGame createMany
   */
  export type TeamGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamGames.
     */
    data: TeamGameCreateManyInput | TeamGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamGame createManyAndReturn
   */
  export type TeamGameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * The data used to create many TeamGames.
     */
    data: TeamGameCreateManyInput | TeamGameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamGame update
   */
  export type TeamGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamGame.
     */
    data: XOR<TeamGameUpdateInput, TeamGameUncheckedUpdateInput>
    /**
     * Choose, which TeamGame to update.
     */
    where: TeamGameWhereUniqueInput
  }

  /**
   * TeamGame updateMany
   */
  export type TeamGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamGames.
     */
    data: XOR<TeamGameUpdateManyMutationInput, TeamGameUncheckedUpdateManyInput>
    /**
     * Filter which TeamGames to update
     */
    where?: TeamGameWhereInput
    /**
     * Limit how many TeamGames to update.
     */
    limit?: number
  }

  /**
   * TeamGame updateManyAndReturn
   */
  export type TeamGameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * The data used to update TeamGames.
     */
    data: XOR<TeamGameUpdateManyMutationInput, TeamGameUncheckedUpdateManyInput>
    /**
     * Filter which TeamGames to update
     */
    where?: TeamGameWhereInput
    /**
     * Limit how many TeamGames to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamGame upsert
   */
  export type TeamGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamGame to update in case it exists.
     */
    where: TeamGameWhereUniqueInput
    /**
     * In case the TeamGame found by the `where` argument doesn't exist, create a new TeamGame with this data.
     */
    create: XOR<TeamGameCreateInput, TeamGameUncheckedCreateInput>
    /**
     * In case the TeamGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamGameUpdateInput, TeamGameUncheckedUpdateInput>
  }

  /**
   * TeamGame delete
   */
  export type TeamGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    /**
     * Filter which TeamGame to delete.
     */
    where: TeamGameWhereUniqueInput
  }

  /**
   * TeamGame deleteMany
   */
  export type TeamGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamGames to delete
     */
    where?: TeamGameWhereInput
    /**
     * Limit how many TeamGames to delete.
     */
    limit?: number
  }

  /**
   * TeamGame without action
   */
  export type TeamGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    logoUrl: string | null
    isRecruiting: boolean | null
    region: $Enums.Region | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    logoUrl: string | null
    isRecruiting: boolean | null
    region: $Enums.Region | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    description: number
    logoUrl: number
    isRecruiting: number
    region: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logoUrl?: true
    isRecruiting?: true
    region?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logoUrl?: true
    isRecruiting?: true
    region?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    logoUrl?: true
    isRecruiting?: true
    region?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    description: string
    logoUrl: string | null
    isRecruiting: boolean
    region: $Enums.Region | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    logoUrl?: boolean
    isRecruiting?: boolean
    region?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    games?: boolean | Team$gamesArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    invitation?: boolean | Team$invitationArgs<ExtArgs>
    gamesPlayed?: boolean | Team$gamesPlayedArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    logoUrl?: boolean
    isRecruiting?: boolean
    region?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    logoUrl?: boolean
    isRecruiting?: boolean
    region?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    logoUrl?: boolean
    isRecruiting?: boolean
    region?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "logoUrl" | "isRecruiting" | "region" | "ownerId" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    games?: boolean | Team$gamesArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    invitation?: boolean | Team$invitationArgs<ExtArgs>
    gamesPlayed?: boolean | Team$gamesPlayedArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      games: Prisma.$GamePayload<ExtArgs>[]
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs>
      invitation: Prisma.$TeamInvitationPayload<ExtArgs>[]
      gamesPlayed: Prisma.$TeamGamePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      logoUrl: string | null
      isRecruiting: boolean
      region: $Enums.Region | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    games<T extends Team$gamesArgs<ExtArgs> = {}>(args?: Subset<T, Team$gamesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invitation<T extends Team$invitationArgs<ExtArgs> = {}>(args?: Subset<T, Team$invitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesPlayed<T extends Team$gamesPlayedArgs<ExtArgs> = {}>(args?: Subset<T, Team$gamesPlayedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly logoUrl: FieldRef<"Team", 'String'>
    readonly isRecruiting: FieldRef<"Team", 'Boolean'>
    readonly region: FieldRef<"Team", 'Region'>
    readonly ownerId: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.games
   */
  export type Team$gamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Team.invitation
   */
  export type Team$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    where?: TeamInvitationWhereInput
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    cursor?: TeamInvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * Team.gamesPlayed
   */
  export type Team$gamesPlayedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamGame
     */
    select?: TeamGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamGame
     */
    omit?: TeamGameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamGameInclude<ExtArgs> | null
    where?: TeamGameWhereInput
    orderBy?: TeamGameOrderByWithRelationInput | TeamGameOrderByWithRelationInput[]
    cursor?: TeamGameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamGameScalarFieldEnum | TeamGameScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    role: $Enums.TeamMemberRole | null
    joinedAt: Date | null
    userId: string | null
    teamId: string | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    role: $Enums.TeamMemberRole | null
    joinedAt: Date | null
    userId: string | null
    teamId: string | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    role: number
    joinedAt: number
    userId: number
    teamId: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    teamId?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    teamId?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    role?: true
    joinedAt?: true
    userId?: true
    teamId?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    role: $Enums.TeamMemberRole
    joinedAt: Date
    userId: string
    teamId: string
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    role?: boolean
    joinedAt?: boolean
    userId?: boolean
    teamId?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "joinedAt" | "userId" | "teamId", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.TeamMemberRole
      joinedAt: Date
      userId: string
      teamId: string
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'TeamMemberRole'>
    readonly joinedAt: FieldRef<"TeamMember", 'DateTime'>
    readonly userId: FieldRef<"TeamMember", 'String'>
    readonly teamId: FieldRef<"TeamMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model TeamInvitation
   */

  export type AggregateTeamInvitation = {
    _count: TeamInvitationCountAggregateOutputType | null
    _min: TeamInvitationMinAggregateOutputType | null
    _max: TeamInvitationMaxAggregateOutputType | null
  }

  export type TeamInvitationMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    senderId: string | null
    receiverId: string | null
    status: $Enums.InvitationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamInvitationMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    senderId: string | null
    receiverId: string | null
    status: $Enums.InvitationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamInvitationCountAggregateOutputType = {
    id: number
    teamId: number
    senderId: number
    receiverId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamInvitationMinAggregateInputType = {
    id?: true
    teamId?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamInvitationMaxAggregateInputType = {
    id?: true
    teamId?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamInvitationCountAggregateInputType = {
    id?: true
    teamId?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamInvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamInvitation to aggregate.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamInvitations
    **/
    _count?: true | TeamInvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamInvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamInvitationMaxAggregateInputType
  }

  export type GetTeamInvitationAggregateType<T extends TeamInvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamInvitation[P]>
      : GetScalarType<T[P], AggregateTeamInvitation[P]>
  }




  export type TeamInvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamInvitationWhereInput
    orderBy?: TeamInvitationOrderByWithAggregationInput | TeamInvitationOrderByWithAggregationInput[]
    by: TeamInvitationScalarFieldEnum[] | TeamInvitationScalarFieldEnum
    having?: TeamInvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamInvitationCountAggregateInputType | true
    _min?: TeamInvitationMinAggregateInputType
    _max?: TeamInvitationMaxAggregateInputType
  }

  export type TeamInvitationGroupByOutputType = {
    id: string
    teamId: string
    senderId: string
    receiverId: string
    status: $Enums.InvitationStatus
    createdAt: Date
    updatedAt: Date
    _count: TeamInvitationCountAggregateOutputType | null
    _min: TeamInvitationMinAggregateOutputType | null
    _max: TeamInvitationMaxAggregateOutputType | null
  }

  type GetTeamInvitationGroupByPayload<T extends TeamInvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamInvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamInvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamInvitationGroupByOutputType[P]>
            : GetScalarType<T[P], TeamInvitationGroupByOutputType[P]>
        }
      >
    >


  export type TeamInvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamInvitation"]>

  export type TeamInvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamInvitation"]>

  export type TeamInvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamInvitation"]>

  export type TeamInvitationSelectScalar = {
    id?: boolean
    teamId?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamInvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "senderId" | "receiverId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["teamInvitation"]>
  export type TeamInvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamInvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamInvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | TeamDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamInvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamInvitation"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      senderId: string
      receiverId: string
      status: $Enums.InvitationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teamInvitation"]>
    composites: {}
  }

  type TeamInvitationGetPayload<S extends boolean | null | undefined | TeamInvitationDefaultArgs> = $Result.GetResult<Prisma.$TeamInvitationPayload, S>

  type TeamInvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamInvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamInvitationCountAggregateInputType | true
    }

  export interface TeamInvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamInvitation'], meta: { name: 'TeamInvitation' } }
    /**
     * Find zero or one TeamInvitation that matches the filter.
     * @param {TeamInvitationFindUniqueArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamInvitationFindUniqueArgs>(args: SelectSubset<T, TeamInvitationFindUniqueArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamInvitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamInvitationFindUniqueOrThrowArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamInvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamInvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamInvitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationFindFirstArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamInvitationFindFirstArgs>(args?: SelectSubset<T, TeamInvitationFindFirstArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamInvitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationFindFirstOrThrowArgs} args - Arguments to find a TeamInvitation
     * @example
     * // Get one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamInvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamInvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamInvitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamInvitations
     * const teamInvitations = await prisma.teamInvitation.findMany()
     * 
     * // Get first 10 TeamInvitations
     * const teamInvitations = await prisma.teamInvitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamInvitationWithIdOnly = await prisma.teamInvitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamInvitationFindManyArgs>(args?: SelectSubset<T, TeamInvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamInvitation.
     * @param {TeamInvitationCreateArgs} args - Arguments to create a TeamInvitation.
     * @example
     * // Create one TeamInvitation
     * const TeamInvitation = await prisma.teamInvitation.create({
     *   data: {
     *     // ... data to create a TeamInvitation
     *   }
     * })
     * 
     */
    create<T extends TeamInvitationCreateArgs>(args: SelectSubset<T, TeamInvitationCreateArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamInvitations.
     * @param {TeamInvitationCreateManyArgs} args - Arguments to create many TeamInvitations.
     * @example
     * // Create many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamInvitationCreateManyArgs>(args?: SelectSubset<T, TeamInvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamInvitations and returns the data saved in the database.
     * @param {TeamInvitationCreateManyAndReturnArgs} args - Arguments to create many TeamInvitations.
     * @example
     * // Create many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamInvitations and only return the `id`
     * const teamInvitationWithIdOnly = await prisma.teamInvitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamInvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamInvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamInvitation.
     * @param {TeamInvitationDeleteArgs} args - Arguments to delete one TeamInvitation.
     * @example
     * // Delete one TeamInvitation
     * const TeamInvitation = await prisma.teamInvitation.delete({
     *   where: {
     *     // ... filter to delete one TeamInvitation
     *   }
     * })
     * 
     */
    delete<T extends TeamInvitationDeleteArgs>(args: SelectSubset<T, TeamInvitationDeleteArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamInvitation.
     * @param {TeamInvitationUpdateArgs} args - Arguments to update one TeamInvitation.
     * @example
     * // Update one TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamInvitationUpdateArgs>(args: SelectSubset<T, TeamInvitationUpdateArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamInvitations.
     * @param {TeamInvitationDeleteManyArgs} args - Arguments to filter TeamInvitations to delete.
     * @example
     * // Delete a few TeamInvitations
     * const { count } = await prisma.teamInvitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamInvitationDeleteManyArgs>(args?: SelectSubset<T, TeamInvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamInvitationUpdateManyArgs>(args: SelectSubset<T, TeamInvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamInvitations and returns the data updated in the database.
     * @param {TeamInvitationUpdateManyAndReturnArgs} args - Arguments to update many TeamInvitations.
     * @example
     * // Update many TeamInvitations
     * const teamInvitation = await prisma.teamInvitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamInvitations and only return the `id`
     * const teamInvitationWithIdOnly = await prisma.teamInvitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamInvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamInvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamInvitation.
     * @param {TeamInvitationUpsertArgs} args - Arguments to update or create a TeamInvitation.
     * @example
     * // Update or create a TeamInvitation
     * const teamInvitation = await prisma.teamInvitation.upsert({
     *   create: {
     *     // ... data to create a TeamInvitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamInvitation we want to update
     *   }
     * })
     */
    upsert<T extends TeamInvitationUpsertArgs>(args: SelectSubset<T, TeamInvitationUpsertArgs<ExtArgs>>): Prisma__TeamInvitationClient<$Result.GetResult<Prisma.$TeamInvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamInvitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationCountArgs} args - Arguments to filter TeamInvitations to count.
     * @example
     * // Count the number of TeamInvitations
     * const count = await prisma.teamInvitation.count({
     *   where: {
     *     // ... the filter for the TeamInvitations we want to count
     *   }
     * })
    **/
    count<T extends TeamInvitationCountArgs>(
      args?: Subset<T, TeamInvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamInvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamInvitationAggregateArgs>(args: Subset<T, TeamInvitationAggregateArgs>): Prisma.PrismaPromise<GetTeamInvitationAggregateType<T>>

    /**
     * Group by TeamInvitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamInvitationGroupByArgs} args - Group by arguments.
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
      T extends TeamInvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamInvitationGroupByArgs['orderBy'] }
        : { orderBy?: TeamInvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamInvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamInvitation model
   */
  readonly fields: TeamInvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamInvitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamInvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamInvitation model
   */
  interface TeamInvitationFieldRefs {
    readonly id: FieldRef<"TeamInvitation", 'String'>
    readonly teamId: FieldRef<"TeamInvitation", 'String'>
    readonly senderId: FieldRef<"TeamInvitation", 'String'>
    readonly receiverId: FieldRef<"TeamInvitation", 'String'>
    readonly status: FieldRef<"TeamInvitation", 'InvitationStatus'>
    readonly createdAt: FieldRef<"TeamInvitation", 'DateTime'>
    readonly updatedAt: FieldRef<"TeamInvitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamInvitation findUnique
   */
  export type TeamInvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation findUniqueOrThrow
   */
  export type TeamInvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation findFirst
   */
  export type TeamInvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamInvitations.
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamInvitations.
     */
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * TeamInvitation findFirstOrThrow
   */
  export type TeamInvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitation to fetch.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamInvitations.
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamInvitations.
     */
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * TeamInvitation findMany
   */
  export type TeamInvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter, which TeamInvitations to fetch.
     */
    where?: TeamInvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamInvitations to fetch.
     */
    orderBy?: TeamInvitationOrderByWithRelationInput | TeamInvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamInvitations.
     */
    cursor?: TeamInvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamInvitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamInvitations.
     */
    skip?: number
    distinct?: TeamInvitationScalarFieldEnum | TeamInvitationScalarFieldEnum[]
  }

  /**
   * TeamInvitation create
   */
  export type TeamInvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamInvitation.
     */
    data: XOR<TeamInvitationCreateInput, TeamInvitationUncheckedCreateInput>
  }

  /**
   * TeamInvitation createMany
   */
  export type TeamInvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamInvitations.
     */
    data: TeamInvitationCreateManyInput | TeamInvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamInvitation createManyAndReturn
   */
  export type TeamInvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * The data used to create many TeamInvitations.
     */
    data: TeamInvitationCreateManyInput | TeamInvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamInvitation update
   */
  export type TeamInvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamInvitation.
     */
    data: XOR<TeamInvitationUpdateInput, TeamInvitationUncheckedUpdateInput>
    /**
     * Choose, which TeamInvitation to update.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation updateMany
   */
  export type TeamInvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamInvitations.
     */
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyInput>
    /**
     * Filter which TeamInvitations to update
     */
    where?: TeamInvitationWhereInput
    /**
     * Limit how many TeamInvitations to update.
     */
    limit?: number
  }

  /**
   * TeamInvitation updateManyAndReturn
   */
  export type TeamInvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * The data used to update TeamInvitations.
     */
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyInput>
    /**
     * Filter which TeamInvitations to update
     */
    where?: TeamInvitationWhereInput
    /**
     * Limit how many TeamInvitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamInvitation upsert
   */
  export type TeamInvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamInvitation to update in case it exists.
     */
    where: TeamInvitationWhereUniqueInput
    /**
     * In case the TeamInvitation found by the `where` argument doesn't exist, create a new TeamInvitation with this data.
     */
    create: XOR<TeamInvitationCreateInput, TeamInvitationUncheckedCreateInput>
    /**
     * In case the TeamInvitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamInvitationUpdateInput, TeamInvitationUncheckedUpdateInput>
  }

  /**
   * TeamInvitation delete
   */
  export type TeamInvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
    /**
     * Filter which TeamInvitation to delete.
     */
    where: TeamInvitationWhereUniqueInput
  }

  /**
   * TeamInvitation deleteMany
   */
  export type TeamInvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamInvitations to delete
     */
    where?: TeamInvitationWhereInput
    /**
     * Limit how many TeamInvitations to delete.
     */
    limit?: number
  }

  /**
   * TeamInvitation without action
   */
  export type TeamInvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamInvitation
     */
    select?: TeamInvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamInvitation
     */
    omit?: TeamInvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInvitationInclude<ExtArgs> | null
  }


  /**
   * Model VideoClip
   */

  export type AggregateVideoClip = {
    _count: VideoClipCountAggregateOutputType | null
    _min: VideoClipMinAggregateOutputType | null
    _max: VideoClipMaxAggregateOutputType | null
  }

  export type VideoClipMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    userId: string | null
    gameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoClipMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    videoUrl: string | null
    thumbnailUrl: string | null
    userId: string | null
    gameId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoClipCountAggregateOutputType = {
    id: number
    title: number
    description: number
    videoUrl: number
    thumbnailUrl: number
    userId: number
    gameId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoClipMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    videoUrl?: true
    thumbnailUrl?: true
    userId?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoClipMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    videoUrl?: true
    thumbnailUrl?: true
    userId?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoClipCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    videoUrl?: true
    thumbnailUrl?: true
    userId?: true
    gameId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoClipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoClip to aggregate.
     */
    where?: VideoClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClips to fetch.
     */
    orderBy?: VideoClipOrderByWithRelationInput | VideoClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoClips
    **/
    _count?: true | VideoClipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoClipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoClipMaxAggregateInputType
  }

  export type GetVideoClipAggregateType<T extends VideoClipAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoClip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoClip[P]>
      : GetScalarType<T[P], AggregateVideoClip[P]>
  }




  export type VideoClipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoClipWhereInput
    orderBy?: VideoClipOrderByWithAggregationInput | VideoClipOrderByWithAggregationInput[]
    by: VideoClipScalarFieldEnum[] | VideoClipScalarFieldEnum
    having?: VideoClipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoClipCountAggregateInputType | true
    _min?: VideoClipMinAggregateInputType
    _max?: VideoClipMaxAggregateInputType
  }

  export type VideoClipGroupByOutputType = {
    id: string
    title: string
    description: string | null
    videoUrl: string
    thumbnailUrl: string | null
    userId: string
    gameId: string
    createdAt: Date
    updatedAt: Date
    _count: VideoClipCountAggregateOutputType | null
    _min: VideoClipMinAggregateOutputType | null
    _max: VideoClipMaxAggregateOutputType | null
  }

  type GetVideoClipGroupByPayload<T extends VideoClipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoClipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoClipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoClipGroupByOutputType[P]>
            : GetScalarType<T[P], VideoClipGroupByOutputType[P]>
        }
      >
    >


  export type VideoClipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    userId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    likes?: boolean | VideoClip$likesArgs<ExtArgs>
    comments?: boolean | VideoClip$commentsArgs<ExtArgs>
    _count?: boolean | VideoClipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoClip"]>

  export type VideoClipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    userId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoClip"]>

  export type VideoClipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    userId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoClip"]>

  export type VideoClipSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    videoUrl?: boolean
    thumbnailUrl?: boolean
    userId?: boolean
    gameId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoClipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "videoUrl" | "thumbnailUrl" | "userId" | "gameId" | "createdAt" | "updatedAt", ExtArgs["result"]["videoClip"]>
  export type VideoClipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
    likes?: boolean | VideoClip$likesArgs<ExtArgs>
    comments?: boolean | VideoClip$commentsArgs<ExtArgs>
    _count?: boolean | VideoClipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoClipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type VideoClipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $VideoClipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoClip"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
      likes: Prisma.$LikePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      videoUrl: string
      thumbnailUrl: string | null
      userId: string
      gameId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["videoClip"]>
    composites: {}
  }

  type VideoClipGetPayload<S extends boolean | null | undefined | VideoClipDefaultArgs> = $Result.GetResult<Prisma.$VideoClipPayload, S>

  type VideoClipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoClipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoClipCountAggregateInputType | true
    }

  export interface VideoClipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoClip'], meta: { name: 'VideoClip' } }
    /**
     * Find zero or one VideoClip that matches the filter.
     * @param {VideoClipFindUniqueArgs} args - Arguments to find a VideoClip
     * @example
     * // Get one VideoClip
     * const videoClip = await prisma.videoClip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoClipFindUniqueArgs>(args: SelectSubset<T, VideoClipFindUniqueArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoClip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoClipFindUniqueOrThrowArgs} args - Arguments to find a VideoClip
     * @example
     * // Get one VideoClip
     * const videoClip = await prisma.videoClip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoClipFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoClipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoClip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipFindFirstArgs} args - Arguments to find a VideoClip
     * @example
     * // Get one VideoClip
     * const videoClip = await prisma.videoClip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoClipFindFirstArgs>(args?: SelectSubset<T, VideoClipFindFirstArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoClip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipFindFirstOrThrowArgs} args - Arguments to find a VideoClip
     * @example
     * // Get one VideoClip
     * const videoClip = await prisma.videoClip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoClipFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoClipFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoClips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoClips
     * const videoClips = await prisma.videoClip.findMany()
     * 
     * // Get first 10 VideoClips
     * const videoClips = await prisma.videoClip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoClipWithIdOnly = await prisma.videoClip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoClipFindManyArgs>(args?: SelectSubset<T, VideoClipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoClip.
     * @param {VideoClipCreateArgs} args - Arguments to create a VideoClip.
     * @example
     * // Create one VideoClip
     * const VideoClip = await prisma.videoClip.create({
     *   data: {
     *     // ... data to create a VideoClip
     *   }
     * })
     * 
     */
    create<T extends VideoClipCreateArgs>(args: SelectSubset<T, VideoClipCreateArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoClips.
     * @param {VideoClipCreateManyArgs} args - Arguments to create many VideoClips.
     * @example
     * // Create many VideoClips
     * const videoClip = await prisma.videoClip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoClipCreateManyArgs>(args?: SelectSubset<T, VideoClipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoClips and returns the data saved in the database.
     * @param {VideoClipCreateManyAndReturnArgs} args - Arguments to create many VideoClips.
     * @example
     * // Create many VideoClips
     * const videoClip = await prisma.videoClip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoClips and only return the `id`
     * const videoClipWithIdOnly = await prisma.videoClip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoClipCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoClipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoClip.
     * @param {VideoClipDeleteArgs} args - Arguments to delete one VideoClip.
     * @example
     * // Delete one VideoClip
     * const VideoClip = await prisma.videoClip.delete({
     *   where: {
     *     // ... filter to delete one VideoClip
     *   }
     * })
     * 
     */
    delete<T extends VideoClipDeleteArgs>(args: SelectSubset<T, VideoClipDeleteArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoClip.
     * @param {VideoClipUpdateArgs} args - Arguments to update one VideoClip.
     * @example
     * // Update one VideoClip
     * const videoClip = await prisma.videoClip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoClipUpdateArgs>(args: SelectSubset<T, VideoClipUpdateArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoClips.
     * @param {VideoClipDeleteManyArgs} args - Arguments to filter VideoClips to delete.
     * @example
     * // Delete a few VideoClips
     * const { count } = await prisma.videoClip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoClipDeleteManyArgs>(args?: SelectSubset<T, VideoClipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoClips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoClips
     * const videoClip = await prisma.videoClip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoClipUpdateManyArgs>(args: SelectSubset<T, VideoClipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoClips and returns the data updated in the database.
     * @param {VideoClipUpdateManyAndReturnArgs} args - Arguments to update many VideoClips.
     * @example
     * // Update many VideoClips
     * const videoClip = await prisma.videoClip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoClips and only return the `id`
     * const videoClipWithIdOnly = await prisma.videoClip.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoClipUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoClipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoClip.
     * @param {VideoClipUpsertArgs} args - Arguments to update or create a VideoClip.
     * @example
     * // Update or create a VideoClip
     * const videoClip = await prisma.videoClip.upsert({
     *   create: {
     *     // ... data to create a VideoClip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoClip we want to update
     *   }
     * })
     */
    upsert<T extends VideoClipUpsertArgs>(args: SelectSubset<T, VideoClipUpsertArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoClips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipCountArgs} args - Arguments to filter VideoClips to count.
     * @example
     * // Count the number of VideoClips
     * const count = await prisma.videoClip.count({
     *   where: {
     *     // ... the filter for the VideoClips we want to count
     *   }
     * })
    **/
    count<T extends VideoClipCountArgs>(
      args?: Subset<T, VideoClipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoClipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoClip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoClipAggregateArgs>(args: Subset<T, VideoClipAggregateArgs>): Prisma.PrismaPromise<GetVideoClipAggregateType<T>>

    /**
     * Group by VideoClip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoClipGroupByArgs} args - Group by arguments.
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
      T extends VideoClipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoClipGroupByArgs['orderBy'] }
        : { orderBy?: VideoClipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoClipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoClipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoClip model
   */
  readonly fields: VideoClipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoClip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends VideoClip$likesArgs<ExtArgs> = {}>(args?: Subset<T, VideoClip$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends VideoClip$commentsArgs<ExtArgs> = {}>(args?: Subset<T, VideoClip$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VideoClip model
   */
  interface VideoClipFieldRefs {
    readonly id: FieldRef<"VideoClip", 'String'>
    readonly title: FieldRef<"VideoClip", 'String'>
    readonly description: FieldRef<"VideoClip", 'String'>
    readonly videoUrl: FieldRef<"VideoClip", 'String'>
    readonly thumbnailUrl: FieldRef<"VideoClip", 'String'>
    readonly userId: FieldRef<"VideoClip", 'String'>
    readonly gameId: FieldRef<"VideoClip", 'String'>
    readonly createdAt: FieldRef<"VideoClip", 'DateTime'>
    readonly updatedAt: FieldRef<"VideoClip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoClip findUnique
   */
  export type VideoClipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * Filter, which VideoClip to fetch.
     */
    where: VideoClipWhereUniqueInput
  }

  /**
   * VideoClip findUniqueOrThrow
   */
  export type VideoClipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * Filter, which VideoClip to fetch.
     */
    where: VideoClipWhereUniqueInput
  }

  /**
   * VideoClip findFirst
   */
  export type VideoClipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * Filter, which VideoClip to fetch.
     */
    where?: VideoClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClips to fetch.
     */
    orderBy?: VideoClipOrderByWithRelationInput | VideoClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoClips.
     */
    cursor?: VideoClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoClips.
     */
    distinct?: VideoClipScalarFieldEnum | VideoClipScalarFieldEnum[]
  }

  /**
   * VideoClip findFirstOrThrow
   */
  export type VideoClipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * Filter, which VideoClip to fetch.
     */
    where?: VideoClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClips to fetch.
     */
    orderBy?: VideoClipOrderByWithRelationInput | VideoClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoClips.
     */
    cursor?: VideoClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoClips.
     */
    distinct?: VideoClipScalarFieldEnum | VideoClipScalarFieldEnum[]
  }

  /**
   * VideoClip findMany
   */
  export type VideoClipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * Filter, which VideoClips to fetch.
     */
    where?: VideoClipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoClips to fetch.
     */
    orderBy?: VideoClipOrderByWithRelationInput | VideoClipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoClips.
     */
    cursor?: VideoClipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoClips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoClips.
     */
    skip?: number
    distinct?: VideoClipScalarFieldEnum | VideoClipScalarFieldEnum[]
  }

  /**
   * VideoClip create
   */
  export type VideoClipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoClip.
     */
    data: XOR<VideoClipCreateInput, VideoClipUncheckedCreateInput>
  }

  /**
   * VideoClip createMany
   */
  export type VideoClipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoClips.
     */
    data: VideoClipCreateManyInput | VideoClipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoClip createManyAndReturn
   */
  export type VideoClipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * The data used to create many VideoClips.
     */
    data: VideoClipCreateManyInput | VideoClipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoClip update
   */
  export type VideoClipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoClip.
     */
    data: XOR<VideoClipUpdateInput, VideoClipUncheckedUpdateInput>
    /**
     * Choose, which VideoClip to update.
     */
    where: VideoClipWhereUniqueInput
  }

  /**
   * VideoClip updateMany
   */
  export type VideoClipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoClips.
     */
    data: XOR<VideoClipUpdateManyMutationInput, VideoClipUncheckedUpdateManyInput>
    /**
     * Filter which VideoClips to update
     */
    where?: VideoClipWhereInput
    /**
     * Limit how many VideoClips to update.
     */
    limit?: number
  }

  /**
   * VideoClip updateManyAndReturn
   */
  export type VideoClipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * The data used to update VideoClips.
     */
    data: XOR<VideoClipUpdateManyMutationInput, VideoClipUncheckedUpdateManyInput>
    /**
     * Filter which VideoClips to update
     */
    where?: VideoClipWhereInput
    /**
     * Limit how many VideoClips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoClip upsert
   */
  export type VideoClipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoClip to update in case it exists.
     */
    where: VideoClipWhereUniqueInput
    /**
     * In case the VideoClip found by the `where` argument doesn't exist, create a new VideoClip with this data.
     */
    create: XOR<VideoClipCreateInput, VideoClipUncheckedCreateInput>
    /**
     * In case the VideoClip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoClipUpdateInput, VideoClipUncheckedUpdateInput>
  }

  /**
   * VideoClip delete
   */
  export type VideoClipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
    /**
     * Filter which VideoClip to delete.
     */
    where: VideoClipWhereUniqueInput
  }

  /**
   * VideoClip deleteMany
   */
  export type VideoClipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoClips to delete
     */
    where?: VideoClipWhereInput
    /**
     * Limit how many VideoClips to delete.
     */
    limit?: number
  }

  /**
   * VideoClip.likes
   */
  export type VideoClip$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * VideoClip.comments
   */
  export type VideoClip$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * VideoClip without action
   */
  export type VideoClipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoClip
     */
    select?: VideoClipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoClip
     */
    omit?: VideoClipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoClipInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    videoId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type LikeMinAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    createdAt?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    createdAt?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    videoId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: string
    videoId: string
    userId: string
    createdAt: Date
    _count: LikeCountAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "userId" | "createdAt", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      video: Prisma.$VideoClipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoClipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoClipDefaultArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'String'>
    readonly videoId: FieldRef<"Like", 'String'>
    readonly userId: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    videoId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    videoId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    videoId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    videoId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    videoId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    videoId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    videoId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    videoId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "videoId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoClipDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      video: Prisma.$VideoClipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      videoId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoClipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoClipDefaultArgs<ExtArgs>>): Prisma__VideoClipClient<$Result.GetResult<Prisma.$VideoClipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly videoId: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
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
    fullName: 'fullName',
    email: 'email',
    bio: 'bio',
    gamertag: 'gamertag',
    playerRole: 'playerRole',
    experienceLevel: 'experienceLevel',
    region: 'region',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const UserGameScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gameId: 'gameId',
    experiece: 'experiece'
  };

  export type UserGameScalarFieldEnum = (typeof UserGameScalarFieldEnum)[keyof typeof UserGameScalarFieldEnum]


  export const TeamGameScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    gameId: 'gameId',
    experiece: 'experiece'
  };

  export type TeamGameScalarFieldEnum = (typeof TeamGameScalarFieldEnum)[keyof typeof TeamGameScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    logoUrl: 'logoUrl',
    isRecruiting: 'isRecruiting',
    region: 'region',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    role: 'role',
    joinedAt: 'joinedAt',
    userId: 'userId',
    teamId: 'teamId'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const TeamInvitationScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamInvitationScalarFieldEnum = (typeof TeamInvitationScalarFieldEnum)[keyof typeof TeamInvitationScalarFieldEnum]


  export const VideoClipScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    videoUrl: 'videoUrl',
    thumbnailUrl: 'thumbnailUrl',
    userId: 'userId',
    gameId: 'gameId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VideoClipScalarFieldEnum = (typeof VideoClipScalarFieldEnum)[keyof typeof VideoClipScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    videoId: 'videoId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'PlayerRole[]'
   */
  export type ListEnumPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerRole[]'>
    


  /**
   * Reference to a field of type 'PlayerRole'
   */
  export type EnumPlayerRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlayerRole'>
    


  /**
   * Reference to a field of type 'ExperienceLevel[]'
   */
  export type ListEnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel[]'>
    


  /**
   * Reference to a field of type 'ExperienceLevel'
   */
  export type EnumExperienceLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExperienceLevel'>
    


  /**
   * Reference to a field of type 'Region[]'
   */
  export type ListEnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region[]'>
    


  /**
   * Reference to a field of type 'Region'
   */
  export type EnumRegionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Region'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TeamMemberRole'
   */
  export type EnumTeamMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamMemberRole'>
    


  /**
   * Reference to a field of type 'TeamMemberRole[]'
   */
  export type ListEnumTeamMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamMemberRole[]'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    gamertag?: StringNullableFilter<"User"> | string | null
    playerRole?: EnumPlayerRoleNullableListFilter<"User">
    experienceLevel?: EnumExperienceLevelNullableListFilter<"User">
    region?: EnumRegionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    games?: GameListRelationFilter
    team?: TeamMemberListRelationFilter
    ownedTeam?: TeamListRelationFilter
    videos?: VideoClipListRelationFilter
    gamesPlayed?: UserGameListRelationFilter
    sentInvitation?: TeamInvitationListRelationFilter
    receivedInvites?: TeamInvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    gamertag?: SortOrderInput | SortOrder
    playerRole?: SortOrder
    experienceLevel?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    games?: GameOrderByRelationAggregateInput
    team?: TeamMemberOrderByRelationAggregateInput
    ownedTeam?: TeamOrderByRelationAggregateInput
    videos?: VideoClipOrderByRelationAggregateInput
    gamesPlayed?: UserGameOrderByRelationAggregateInput
    sentInvitation?: TeamInvitationOrderByRelationAggregateInput
    receivedInvites?: TeamInvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    gamertag?: StringNullableFilter<"User"> | string | null
    playerRole?: EnumPlayerRoleNullableListFilter<"User">
    experienceLevel?: EnumExperienceLevelNullableListFilter<"User">
    region?: EnumRegionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    games?: GameListRelationFilter
    team?: TeamMemberListRelationFilter
    ownedTeam?: TeamListRelationFilter
    videos?: VideoClipListRelationFilter
    gamesPlayed?: UserGameListRelationFilter
    sentInvitation?: TeamInvitationListRelationFilter
    receivedInvites?: TeamInvitationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    gamertag?: SortOrderInput | SortOrder
    playerRole?: SortOrder
    experienceLevel?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    bio?: StringWithAggregatesFilter<"User"> | string
    gamertag?: StringNullableWithAggregatesFilter<"User"> | string | null
    playerRole?: EnumPlayerRoleNullableListFilter<"User">
    experienceLevel?: EnumExperienceLevelNullableListFilter<"User">
    region?: EnumRegionNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: StringFilter<"Game"> | string
    name?: StringFilter<"Game"> | string
    players?: UserListRelationFilter
    teams?: TeamListRelationFilter
    videos?: VideoClipListRelationFilter
    userGames?: UserGameListRelationFilter
    teamGames?: TeamGameListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    players?: UserOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    videos?: VideoClipOrderByRelationAggregateInput
    userGames?: UserGameOrderByRelationAggregateInput
    teamGames?: TeamGameOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    players?: UserListRelationFilter
    teams?: TeamListRelationFilter
    videos?: VideoClipListRelationFilter
    userGames?: UserGameListRelationFilter
    teamGames?: TeamGameListRelationFilter
  }, "id" | "name">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Game"> | string
    name?: StringWithAggregatesFilter<"Game"> | string
  }

  export type UserGameWhereInput = {
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    id?: StringFilter<"UserGame"> | string
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    experiece?: EnumExperienceLevelFilter<"UserGame"> | $Enums.ExperienceLevel
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type UserGameOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type UserGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_gameId?: UserGameUserIdGameIdCompoundUniqueInput
    AND?: UserGameWhereInput | UserGameWhereInput[]
    OR?: UserGameWhereInput[]
    NOT?: UserGameWhereInput | UserGameWhereInput[]
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    experiece?: EnumExperienceLevelFilter<"UserGame"> | $Enums.ExperienceLevel
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "userId_gameId">

  export type UserGameOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
    _count?: UserGameCountOrderByAggregateInput
    _max?: UserGameMaxOrderByAggregateInput
    _min?: UserGameMinOrderByAggregateInput
  }

  export type UserGameScalarWhereWithAggregatesInput = {
    AND?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    OR?: UserGameScalarWhereWithAggregatesInput[]
    NOT?: UserGameScalarWhereWithAggregatesInput | UserGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGame"> | string
    userId?: StringWithAggregatesFilter<"UserGame"> | string
    gameId?: StringWithAggregatesFilter<"UserGame"> | string
    experiece?: EnumExperienceLevelWithAggregatesFilter<"UserGame"> | $Enums.ExperienceLevel
  }

  export type TeamGameWhereInput = {
    AND?: TeamGameWhereInput | TeamGameWhereInput[]
    OR?: TeamGameWhereInput[]
    NOT?: TeamGameWhereInput | TeamGameWhereInput[]
    id?: StringFilter<"TeamGame"> | string
    teamId?: StringFilter<"TeamGame"> | string
    gameId?: StringFilter<"TeamGame"> | string
    experiece?: EnumExperienceLevelFilter<"TeamGame"> | $Enums.ExperienceLevel
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type TeamGameOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
    team?: TeamOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type TeamGameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_gameId?: TeamGameTeamIdGameIdCompoundUniqueInput
    AND?: TeamGameWhereInput | TeamGameWhereInput[]
    OR?: TeamGameWhereInput[]
    NOT?: TeamGameWhereInput | TeamGameWhereInput[]
    teamId?: StringFilter<"TeamGame"> | string
    gameId?: StringFilter<"TeamGame"> | string
    experiece?: EnumExperienceLevelFilter<"TeamGame"> | $Enums.ExperienceLevel
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id" | "teamId_gameId">

  export type TeamGameOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
    _count?: TeamGameCountOrderByAggregateInput
    _max?: TeamGameMaxOrderByAggregateInput
    _min?: TeamGameMinOrderByAggregateInput
  }

  export type TeamGameScalarWhereWithAggregatesInput = {
    AND?: TeamGameScalarWhereWithAggregatesInput | TeamGameScalarWhereWithAggregatesInput[]
    OR?: TeamGameScalarWhereWithAggregatesInput[]
    NOT?: TeamGameScalarWhereWithAggregatesInput | TeamGameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamGame"> | string
    teamId?: StringWithAggregatesFilter<"TeamGame"> | string
    gameId?: StringWithAggregatesFilter<"TeamGame"> | string
    experiece?: EnumExperienceLevelWithAggregatesFilter<"TeamGame"> | $Enums.ExperienceLevel
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    description?: StringFilter<"Team"> | string
    logoUrl?: StringNullableFilter<"Team"> | string | null
    isRecruiting?: BoolFilter<"Team"> | boolean
    region?: EnumRegionNullableFilter<"Team"> | $Enums.Region | null
    ownerId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    games?: GameListRelationFilter
    members?: TeamMemberListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitation?: TeamInvitationListRelationFilter
    gamesPlayed?: TeamGameListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isRecruiting?: SortOrder
    region?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    games?: GameOrderByRelationAggregateInput
    members?: TeamMemberOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    invitation?: TeamInvitationOrderByRelationAggregateInput
    gamesPlayed?: TeamGameOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringFilter<"Team"> | string
    logoUrl?: StringNullableFilter<"Team"> | string | null
    isRecruiting?: BoolFilter<"Team"> | boolean
    region?: EnumRegionNullableFilter<"Team"> | $Enums.Region | null
    ownerId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    games?: GameListRelationFilter
    members?: TeamMemberListRelationFilter
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    invitation?: TeamInvitationListRelationFilter
    gamesPlayed?: TeamGameListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    isRecruiting?: SortOrder
    region?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringWithAggregatesFilter<"Team"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Team"> | string | null
    isRecruiting?: BoolWithAggregatesFilter<"Team"> | boolean
    region?: EnumRegionNullableWithAggregatesFilter<"Team"> | $Enums.Region | null
    ownerId?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: EnumTeamMemberRoleFilter<"TeamMember"> | $Enums.TeamMemberRole
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: TeamMemberUserIdTeamIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    role?: EnumTeamMemberRoleFilter<"TeamMember"> | $Enums.TeamMemberRole
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: EnumTeamMemberRoleWithAggregatesFilter<"TeamMember"> | $Enums.TeamMemberRole
    joinedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
    userId?: StringWithAggregatesFilter<"TeamMember"> | string
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string
  }

  export type TeamInvitationWhereInput = {
    AND?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    OR?: TeamInvitationWhereInput[]
    NOT?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    id?: StringFilter<"TeamInvitation"> | string
    teamId?: StringFilter<"TeamInvitation"> | string
    senderId?: StringFilter<"TeamInvitation"> | string
    receiverId?: StringFilter<"TeamInvitation"> | string
    status?: EnumInvitationStatusFilter<"TeamInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    teams?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamInvitationOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teams?: TeamOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type TeamInvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    OR?: TeamInvitationWhereInput[]
    NOT?: TeamInvitationWhereInput | TeamInvitationWhereInput[]
    teamId?: StringFilter<"TeamInvitation"> | string
    senderId?: StringFilter<"TeamInvitation"> | string
    receiverId?: StringFilter<"TeamInvitation"> | string
    status?: EnumInvitationStatusFilter<"TeamInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    teams?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TeamInvitationOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamInvitationCountOrderByAggregateInput
    _max?: TeamInvitationMaxOrderByAggregateInput
    _min?: TeamInvitationMinOrderByAggregateInput
  }

  export type TeamInvitationScalarWhereWithAggregatesInput = {
    AND?: TeamInvitationScalarWhereWithAggregatesInput | TeamInvitationScalarWhereWithAggregatesInput[]
    OR?: TeamInvitationScalarWhereWithAggregatesInput[]
    NOT?: TeamInvitationScalarWhereWithAggregatesInput | TeamInvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamInvitation"> | string
    teamId?: StringWithAggregatesFilter<"TeamInvitation"> | string
    senderId?: StringWithAggregatesFilter<"TeamInvitation"> | string
    receiverId?: StringWithAggregatesFilter<"TeamInvitation"> | string
    status?: EnumInvitationStatusWithAggregatesFilter<"TeamInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeWithAggregatesFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeamInvitation"> | Date | string
  }

  export type VideoClipWhereInput = {
    AND?: VideoClipWhereInput | VideoClipWhereInput[]
    OR?: VideoClipWhereInput[]
    NOT?: VideoClipWhereInput | VideoClipWhereInput[]
    id?: StringFilter<"VideoClip"> | string
    title?: StringFilter<"VideoClip"> | string
    description?: StringNullableFilter<"VideoClip"> | string | null
    videoUrl?: StringFilter<"VideoClip"> | string
    thumbnailUrl?: StringNullableFilter<"VideoClip"> | string | null
    userId?: StringFilter<"VideoClip"> | string
    gameId?: StringFilter<"VideoClip"> | string
    createdAt?: DateTimeFilter<"VideoClip"> | Date | string
    updatedAt?: DateTimeFilter<"VideoClip"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }

  export type VideoClipOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type VideoClipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoClipWhereInput | VideoClipWhereInput[]
    OR?: VideoClipWhereInput[]
    NOT?: VideoClipWhereInput | VideoClipWhereInput[]
    title?: StringFilter<"VideoClip"> | string
    description?: StringNullableFilter<"VideoClip"> | string | null
    videoUrl?: StringFilter<"VideoClip"> | string
    thumbnailUrl?: StringNullableFilter<"VideoClip"> | string | null
    userId?: StringFilter<"VideoClip"> | string
    gameId?: StringFilter<"VideoClip"> | string
    createdAt?: DateTimeFilter<"VideoClip"> | Date | string
    updatedAt?: DateTimeFilter<"VideoClip"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
    likes?: LikeListRelationFilter
    comments?: CommentListRelationFilter
  }, "id">

  export type VideoClipOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoClipCountOrderByAggregateInput
    _max?: VideoClipMaxOrderByAggregateInput
    _min?: VideoClipMinOrderByAggregateInput
  }

  export type VideoClipScalarWhereWithAggregatesInput = {
    AND?: VideoClipScalarWhereWithAggregatesInput | VideoClipScalarWhereWithAggregatesInput[]
    OR?: VideoClipScalarWhereWithAggregatesInput[]
    NOT?: VideoClipScalarWhereWithAggregatesInput | VideoClipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoClip"> | string
    title?: StringWithAggregatesFilter<"VideoClip"> | string
    description?: StringNullableWithAggregatesFilter<"VideoClip"> | string | null
    videoUrl?: StringWithAggregatesFilter<"VideoClip"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"VideoClip"> | string | null
    userId?: StringWithAggregatesFilter<"VideoClip"> | string
    gameId?: StringWithAggregatesFilter<"VideoClip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VideoClip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VideoClip"> | Date | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: StringFilter<"Like"> | string
    videoId?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    video?: XOR<VideoClipScalarRelationFilter, VideoClipWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    video?: VideoClipOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    videoId_userId?: LikeVideoIdUserIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    videoId?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    video?: XOR<VideoClipScalarRelationFilter, VideoClipWhereInput>
  }, "id" | "videoId_userId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Like"> | string
    videoId?: StringWithAggregatesFilter<"Like"> | string
    userId?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    video?: XOR<VideoClipScalarRelationFilter, VideoClipWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideoClipOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    video?: XOR<VideoClipScalarRelationFilter, VideoClipWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    videoId?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    team?: TeamMemberCreateNestedManyWithoutUserInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    id?: string
    name: string
    players?: UserCreateNestedManyWithoutGamesInput
    teams?: TeamCreateNestedManyWithoutGamesInput
    videos?: VideoClipCreateNestedManyWithoutGameInput
    userGames?: UserGameCreateNestedManyWithoutGameInput
    teamGames?: TeamGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: string
    name: string
    players?: UserUncheckedCreateNestedManyWithoutGamesInput
    teams?: TeamUncheckedCreateNestedManyWithoutGamesInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutGameInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
    teamGames?: TeamGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUpdateManyWithoutGamesNestedInput
    teams?: TeamUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUpdateManyWithoutGameNestedInput
    userGames?: UserGameUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUncheckedUpdateManyWithoutGamesNestedInput
    teams?: TeamUncheckedUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutGameNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: string
    name: string
  }

  export type GameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserGameCreateInput = {
    id?: string
    experiece: $Enums.ExperienceLevel
    user: UserCreateNestedOneWithoutGamesPlayedInput
    game: GameCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateInput = {
    id?: string
    userId: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type UserGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    user?: UserUpdateOneRequiredWithoutGamesPlayedNestedInput
    game?: GameUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type UserGameCreateManyInput = {
    id?: string
    userId: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type UserGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type UserGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamGameCreateInput = {
    id?: string
    experiece: $Enums.ExperienceLevel
    team: TeamCreateNestedOneWithoutGamesPlayedInput
    game: GameCreateNestedOneWithoutTeamGamesInput
  }

  export type TeamGameUncheckedCreateInput = {
    id?: string
    teamId: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type TeamGameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    team?: TeamUpdateOneRequiredWithoutGamesPlayedNestedInput
    game?: GameUpdateOneRequiredWithoutTeamGamesNestedInput
  }

  export type TeamGameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamGameCreateManyInput = {
    id?: string
    teamId: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type TeamGameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamGameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutTeamsInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    owner: UserCreateNestedOneWithoutOwnedTeamInput
    invitation?: TeamInvitationCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    ownerId: string
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutTeamsInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    invitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedTeamNestedInput
    invitation?: TeamInvitationUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    invitation?: TeamInvitationUncheckedUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    ownerId: string
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    userId: string
    teamId: string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    userId: string
    teamId: string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamInvitationCreateInput = {
    id?: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    teams: TeamCreateNestedOneWithoutInvitationInput
    sender: UserCreateNestedOneWithoutSentInvitationInput
    receiver: UserCreateNestedOneWithoutReceivedInvitesInput
  }

  export type TeamInvitationUncheckedCreateInput = {
    id?: string
    teamId: string
    senderId: string
    receiverId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateOneRequiredWithoutInvitationNestedInput
    sender?: UserUpdateOneRequiredWithoutSentInvitationNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type TeamInvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationCreateManyInput = {
    id?: string
    teamId: string
    senderId: string
    receiverId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipCreateInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    game: GameCreateNestedOneWithoutVideosInput
    likes?: LikeCreateNestedManyWithoutVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
  }

  export type VideoClipUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    userId: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoClipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    game?: GameUpdateOneRequiredWithoutVideosNestedInput
    likes?: LikeUpdateManyWithoutVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    userId: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoClipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    video: VideoClipCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: string
    videoId: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoClipUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id?: string
    videoId: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoClipCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content?: string
    videoId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoClipUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content?: string
    videoId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumPlayerRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.PlayerRole | EnumPlayerRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.PlayerRole[] | ListEnumPlayerRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumExperienceLevelNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel> | null
    has?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    hasSome?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumRegionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    has?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type VideoClipListRelationFilter = {
    every?: VideoClipWhereInput
    some?: VideoClipWhereInput
    none?: VideoClipWhereInput
  }

  export type UserGameListRelationFilter = {
    every?: UserGameWhereInput
    some?: UserGameWhereInput
    none?: UserGameWhereInput
  }

  export type TeamInvitationListRelationFilter = {
    every?: TeamInvitationWhereInput
    some?: TeamInvitationWhereInput
    none?: TeamInvitationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoClipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamInvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    gamertag?: SortOrder
    playerRole?: SortOrder
    experienceLevel?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    gamertag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    gamertag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TeamGameListRelationFilter = {
    every?: TeamGameWhereInput
    some?: TeamGameWhereInput
    none?: TeamGameWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamGameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type UserGameUserIdGameIdCompoundUniqueInput = {
    userId: string
    gameId: string
  }

  export type UserGameCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
  }

  export type UserGameMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
  }

  export type UserGameMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
  }

  export type EnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamGameTeamIdGameIdCompoundUniqueInput = {
    teamId: string
    gameId: string
  }

  export type TeamGameCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
  }

  export type TeamGameMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
  }

  export type TeamGameMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    gameId?: SortOrder
    experiece?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    isRecruiting?: SortOrder
    region?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    isRecruiting?: SortOrder
    region?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    isRecruiting?: SortOrder
    region?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
  }

  export type EnumTeamMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamMemberRoleFilter<$PrismaModel> | $Enums.TeamMemberRole
  }

  export type TeamMemberUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
  }

  export type EnumTeamMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamMemberRoleFilter<$PrismaModel>
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type TeamInvitationCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamInvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamInvitationMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoClipCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoClipMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoClipMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    videoUrl?: SortOrder
    thumbnailUrl?: SortOrder
    userId?: SortOrder
    gameId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoClipScalarRelationFilter = {
    is?: VideoClipWhereInput
    isNot?: VideoClipWhereInput
  }

  export type LikeVideoIdUserIdCompoundUniqueInput = {
    videoId: string
    userId: string
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    videoId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateplayerRoleInput = {
    set: $Enums.PlayerRole[]
  }

  export type UserCreateexperienceLevelInput = {
    set: $Enums.ExperienceLevel[]
  }

  export type UserCreateregionInput = {
    set: $Enums.Region[]
  }

  export type GameCreateNestedManyWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput> | GameCreateWithoutPlayersInput[] | GameUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput | GameCreateOrConnectWithoutPlayersInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type VideoClipCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoClipCreateWithoutUserInput, VideoClipUncheckedCreateWithoutUserInput> | VideoClipCreateWithoutUserInput[] | VideoClipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutUserInput | VideoClipCreateOrConnectWithoutUserInput[]
    createMany?: VideoClipCreateManyUserInputEnvelope
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type TeamInvitationCreateNestedManyWithoutSenderInput = {
    create?: XOR<TeamInvitationCreateWithoutSenderInput, TeamInvitationUncheckedCreateWithoutSenderInput> | TeamInvitationCreateWithoutSenderInput[] | TeamInvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutSenderInput | TeamInvitationCreateOrConnectWithoutSenderInput[]
    createMany?: TeamInvitationCreateManySenderInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type TeamInvitationCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TeamInvitationCreateWithoutReceiverInput, TeamInvitationUncheckedCreateWithoutReceiverInput> | TeamInvitationCreateWithoutReceiverInput[] | TeamInvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutReceiverInput | TeamInvitationCreateOrConnectWithoutReceiverInput[]
    createMany?: TeamInvitationCreateManyReceiverInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayersInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput> | GameCreateWithoutPlayersInput[] | GameUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput | GameCreateOrConnectWithoutPlayersInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type VideoClipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoClipCreateWithoutUserInput, VideoClipUncheckedCreateWithoutUserInput> | VideoClipCreateWithoutUserInput[] | VideoClipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutUserInput | VideoClipCreateOrConnectWithoutUserInput[]
    createMany?: VideoClipCreateManyUserInputEnvelope
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type TeamInvitationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<TeamInvitationCreateWithoutSenderInput, TeamInvitationUncheckedCreateWithoutSenderInput> | TeamInvitationCreateWithoutSenderInput[] | TeamInvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutSenderInput | TeamInvitationCreateOrConnectWithoutSenderInput[]
    createMany?: TeamInvitationCreateManySenderInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<TeamInvitationCreateWithoutReceiverInput, TeamInvitationUncheckedCreateWithoutReceiverInput> | TeamInvitationCreateWithoutReceiverInput[] | TeamInvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutReceiverInput | TeamInvitationCreateOrConnectWithoutReceiverInput[]
    createMany?: TeamInvitationCreateManyReceiverInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateplayerRoleInput = {
    set?: $Enums.PlayerRole[]
    push?: $Enums.PlayerRole | $Enums.PlayerRole[]
  }

  export type UserUpdateexperienceLevelInput = {
    set?: $Enums.ExperienceLevel[]
    push?: $Enums.ExperienceLevel | $Enums.ExperienceLevel[]
  }

  export type UserUpdateregionInput = {
    set?: $Enums.Region[]
    push?: $Enums.Region | $Enums.Region[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput> | GameCreateWithoutPlayersInput[] | GameUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput | GameCreateOrConnectWithoutPlayersInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayersInput | GameUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayersInput | GameUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayersInput | GameUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput | TeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOwnerInput | TeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOwnerInput | TeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type VideoClipUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoClipCreateWithoutUserInput, VideoClipUncheckedCreateWithoutUserInput> | VideoClipCreateWithoutUserInput[] | VideoClipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutUserInput | VideoClipCreateOrConnectWithoutUserInput[]
    upsert?: VideoClipUpsertWithWhereUniqueWithoutUserInput | VideoClipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoClipCreateManyUserInputEnvelope
    set?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    disconnect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    delete?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    update?: VideoClipUpdateWithWhereUniqueWithoutUserInput | VideoClipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoClipUpdateManyWithWhereWithoutUserInput | VideoClipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoClipScalarWhereInput | VideoClipScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type TeamInvitationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutSenderInput, TeamInvitationUncheckedCreateWithoutSenderInput> | TeamInvitationCreateWithoutSenderInput[] | TeamInvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutSenderInput | TeamInvitationCreateOrConnectWithoutSenderInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutSenderInput | TeamInvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TeamInvitationCreateManySenderInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutSenderInput | TeamInvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutSenderInput | TeamInvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type TeamInvitationUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutReceiverInput, TeamInvitationUncheckedCreateWithoutReceiverInput> | TeamInvitationCreateWithoutReceiverInput[] | TeamInvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutReceiverInput | TeamInvitationCreateOrConnectWithoutReceiverInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutReceiverInput | TeamInvitationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TeamInvitationCreateManyReceiverInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutReceiverInput | TeamInvitationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutReceiverInput | TeamInvitationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayersNestedInput = {
    create?: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput> | GameCreateWithoutPlayersInput[] | GameUncheckedCreateWithoutPlayersInput[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayersInput | GameCreateOrConnectWithoutPlayersInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayersInput | GameUpsertWithWhereUniqueWithoutPlayersInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayersInput | GameUpdateWithWhereUniqueWithoutPlayersInput[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayersInput | GameUpdateManyWithWhereWithoutPlayersInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput | TeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOwnerInput | TeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOwnerInput | TeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type VideoClipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoClipCreateWithoutUserInput, VideoClipUncheckedCreateWithoutUserInput> | VideoClipCreateWithoutUserInput[] | VideoClipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutUserInput | VideoClipCreateOrConnectWithoutUserInput[]
    upsert?: VideoClipUpsertWithWhereUniqueWithoutUserInput | VideoClipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoClipCreateManyUserInputEnvelope
    set?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    disconnect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    delete?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    update?: VideoClipUpdateWithWhereUniqueWithoutUserInput | VideoClipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoClipUpdateManyWithWhereWithoutUserInput | VideoClipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoClipScalarWhereInput | VideoClipScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput> | UserGameCreateWithoutUserInput[] | UserGameUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutUserInput | UserGameCreateOrConnectWithoutUserInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutUserInput | UserGameUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGameCreateManyUserInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutUserInput | UserGameUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutUserInput | UserGameUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutSenderInput, TeamInvitationUncheckedCreateWithoutSenderInput> | TeamInvitationCreateWithoutSenderInput[] | TeamInvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutSenderInput | TeamInvitationCreateOrConnectWithoutSenderInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutSenderInput | TeamInvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: TeamInvitationCreateManySenderInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutSenderInput | TeamInvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutSenderInput | TeamInvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutReceiverInput, TeamInvitationUncheckedCreateWithoutReceiverInput> | TeamInvitationCreateWithoutReceiverInput[] | TeamInvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutReceiverInput | TeamInvitationCreateOrConnectWithoutReceiverInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutReceiverInput | TeamInvitationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: TeamInvitationCreateManyReceiverInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutReceiverInput | TeamInvitationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutReceiverInput | TeamInvitationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput> | UserCreateWithoutGamesInput[] | UserUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput | UserCreateOrConnectWithoutGamesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutGamesInput = {
    create?: XOR<TeamCreateWithoutGamesInput, TeamUncheckedCreateWithoutGamesInput> | TeamCreateWithoutGamesInput[] | TeamUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGamesInput | TeamCreateOrConnectWithoutGamesInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type VideoClipCreateNestedManyWithoutGameInput = {
    create?: XOR<VideoClipCreateWithoutGameInput, VideoClipUncheckedCreateWithoutGameInput> | VideoClipCreateWithoutGameInput[] | VideoClipUncheckedCreateWithoutGameInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutGameInput | VideoClipCreateOrConnectWithoutGameInput[]
    createMany?: VideoClipCreateManyGameInputEnvelope
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
  }

  export type UserGameCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type TeamGameCreateNestedManyWithoutGameInput = {
    create?: XOR<TeamGameCreateWithoutGameInput, TeamGameUncheckedCreateWithoutGameInput> | TeamGameCreateWithoutGameInput[] | TeamGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutGameInput | TeamGameCreateOrConnectWithoutGameInput[]
    createMany?: TeamGameCreateManyGameInputEnvelope
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput> | UserCreateWithoutGamesInput[] | UserUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput | UserCreateOrConnectWithoutGamesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutGamesInput = {
    create?: XOR<TeamCreateWithoutGamesInput, TeamUncheckedCreateWithoutGamesInput> | TeamCreateWithoutGamesInput[] | TeamUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGamesInput | TeamCreateOrConnectWithoutGamesInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type VideoClipUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<VideoClipCreateWithoutGameInput, VideoClipUncheckedCreateWithoutGameInput> | VideoClipCreateWithoutGameInput[] | VideoClipUncheckedCreateWithoutGameInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutGameInput | VideoClipCreateOrConnectWithoutGameInput[]
    createMany?: VideoClipCreateManyGameInputEnvelope
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
  }

  export type UserGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
  }

  export type TeamGameUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<TeamGameCreateWithoutGameInput, TeamGameUncheckedCreateWithoutGameInput> | TeamGameCreateWithoutGameInput[] | TeamGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutGameInput | TeamGameCreateOrConnectWithoutGameInput[]
    createMany?: TeamGameCreateManyGameInputEnvelope
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput> | UserCreateWithoutGamesInput[] | UserUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput | UserCreateOrConnectWithoutGamesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGamesInput | UserUpsertWithWhereUniqueWithoutGamesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGamesInput | UserUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGamesInput | UserUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutGamesNestedInput = {
    create?: XOR<TeamCreateWithoutGamesInput, TeamUncheckedCreateWithoutGamesInput> | TeamCreateWithoutGamesInput[] | TeamUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGamesInput | TeamCreateOrConnectWithoutGamesInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGamesInput | TeamUpsertWithWhereUniqueWithoutGamesInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGamesInput | TeamUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGamesInput | TeamUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type VideoClipUpdateManyWithoutGameNestedInput = {
    create?: XOR<VideoClipCreateWithoutGameInput, VideoClipUncheckedCreateWithoutGameInput> | VideoClipCreateWithoutGameInput[] | VideoClipUncheckedCreateWithoutGameInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutGameInput | VideoClipCreateOrConnectWithoutGameInput[]
    upsert?: VideoClipUpsertWithWhereUniqueWithoutGameInput | VideoClipUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: VideoClipCreateManyGameInputEnvelope
    set?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    disconnect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    delete?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    update?: VideoClipUpdateWithWhereUniqueWithoutGameInput | VideoClipUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: VideoClipUpdateManyWithWhereWithoutGameInput | VideoClipUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: VideoClipScalarWhereInput | VideoClipScalarWhereInput[]
  }

  export type UserGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type TeamGameUpdateManyWithoutGameNestedInput = {
    create?: XOR<TeamGameCreateWithoutGameInput, TeamGameUncheckedCreateWithoutGameInput> | TeamGameCreateWithoutGameInput[] | TeamGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutGameInput | TeamGameCreateOrConnectWithoutGameInput[]
    upsert?: TeamGameUpsertWithWhereUniqueWithoutGameInput | TeamGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TeamGameCreateManyGameInputEnvelope
    set?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    disconnect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    delete?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    update?: TeamGameUpdateWithWhereUniqueWithoutGameInput | TeamGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TeamGameUpdateManyWithWhereWithoutGameInput | TeamGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TeamGameScalarWhereInput | TeamGameScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput> | UserCreateWithoutGamesInput[] | UserUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGamesInput | UserCreateOrConnectWithoutGamesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGamesInput | UserUpsertWithWhereUniqueWithoutGamesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGamesInput | UserUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGamesInput | UserUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: XOR<TeamCreateWithoutGamesInput, TeamUncheckedCreateWithoutGamesInput> | TeamCreateWithoutGamesInput[] | TeamUncheckedCreateWithoutGamesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutGamesInput | TeamCreateOrConnectWithoutGamesInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutGamesInput | TeamUpsertWithWhereUniqueWithoutGamesInput[]
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutGamesInput | TeamUpdateWithWhereUniqueWithoutGamesInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutGamesInput | TeamUpdateManyWithWhereWithoutGamesInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type VideoClipUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<VideoClipCreateWithoutGameInput, VideoClipUncheckedCreateWithoutGameInput> | VideoClipCreateWithoutGameInput[] | VideoClipUncheckedCreateWithoutGameInput[]
    connectOrCreate?: VideoClipCreateOrConnectWithoutGameInput | VideoClipCreateOrConnectWithoutGameInput[]
    upsert?: VideoClipUpsertWithWhereUniqueWithoutGameInput | VideoClipUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: VideoClipCreateManyGameInputEnvelope
    set?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    disconnect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    delete?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    connect?: VideoClipWhereUniqueInput | VideoClipWhereUniqueInput[]
    update?: VideoClipUpdateWithWhereUniqueWithoutGameInput | VideoClipUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: VideoClipUpdateManyWithWhereWithoutGameInput | VideoClipUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: VideoClipScalarWhereInput | VideoClipScalarWhereInput[]
  }

  export type UserGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput> | UserGameCreateWithoutGameInput[] | UserGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: UserGameCreateOrConnectWithoutGameInput | UserGameCreateOrConnectWithoutGameInput[]
    upsert?: UserGameUpsertWithWhereUniqueWithoutGameInput | UserGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: UserGameCreateManyGameInputEnvelope
    set?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    disconnect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    delete?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    connect?: UserGameWhereUniqueInput | UserGameWhereUniqueInput[]
    update?: UserGameUpdateWithWhereUniqueWithoutGameInput | UserGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: UserGameUpdateManyWithWhereWithoutGameInput | UserGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
  }

  export type TeamGameUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<TeamGameCreateWithoutGameInput, TeamGameUncheckedCreateWithoutGameInput> | TeamGameCreateWithoutGameInput[] | TeamGameUncheckedCreateWithoutGameInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutGameInput | TeamGameCreateOrConnectWithoutGameInput[]
    upsert?: TeamGameUpsertWithWhereUniqueWithoutGameInput | TeamGameUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: TeamGameCreateManyGameInputEnvelope
    set?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    disconnect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    delete?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    update?: TeamGameUpdateWithWhereUniqueWithoutGameInput | TeamGameUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: TeamGameUpdateManyWithWhereWithoutGameInput | TeamGameUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: TeamGameScalarWhereInput | TeamGameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGamesPlayedInput = {
    create?: XOR<UserCreateWithoutGamesPlayedInput, UserUncheckedCreateWithoutGamesPlayedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesPlayedInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutUserGamesInput = {
    create?: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserGamesInput
    connect?: GameWhereUniqueInput
  }

  export type EnumExperienceLevelFieldUpdateOperationsInput = {
    set?: $Enums.ExperienceLevel
  }

  export type UserUpdateOneRequiredWithoutGamesPlayedNestedInput = {
    create?: XOR<UserCreateWithoutGamesPlayedInput, UserUncheckedCreateWithoutGamesPlayedInput>
    connectOrCreate?: UserCreateOrConnectWithoutGamesPlayedInput
    upsert?: UserUpsertWithoutGamesPlayedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGamesPlayedInput, UserUpdateWithoutGamesPlayedInput>, UserUncheckedUpdateWithoutGamesPlayedInput>
  }

  export type GameUpdateOneRequiredWithoutUserGamesNestedInput = {
    create?: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutUserGamesInput
    upsert?: GameUpsertWithoutUserGamesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutUserGamesInput, GameUpdateWithoutUserGamesInput>, GameUncheckedUpdateWithoutUserGamesInput>
  }

  export type TeamCreateNestedOneWithoutGamesPlayedInput = {
    create?: XOR<TeamCreateWithoutGamesPlayedInput, TeamUncheckedCreateWithoutGamesPlayedInput>
    connectOrCreate?: TeamCreateOrConnectWithoutGamesPlayedInput
    connect?: TeamWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutTeamGamesInput = {
    create?: XOR<GameCreateWithoutTeamGamesInput, GameUncheckedCreateWithoutTeamGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamGamesInput
    connect?: GameWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutGamesPlayedNestedInput = {
    create?: XOR<TeamCreateWithoutGamesPlayedInput, TeamUncheckedCreateWithoutGamesPlayedInput>
    connectOrCreate?: TeamCreateOrConnectWithoutGamesPlayedInput
    upsert?: TeamUpsertWithoutGamesPlayedInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutGamesPlayedInput, TeamUpdateWithoutGamesPlayedInput>, TeamUncheckedUpdateWithoutGamesPlayedInput>
  }

  export type GameUpdateOneRequiredWithoutTeamGamesNestedInput = {
    create?: XOR<GameCreateWithoutTeamGamesInput, GameUncheckedCreateWithoutTeamGamesInput>
    connectOrCreate?: GameCreateOrConnectWithoutTeamGamesInput
    upsert?: GameUpsertWithoutTeamGamesInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutTeamGamesInput, GameUpdateWithoutTeamGamesInput>, GameUncheckedUpdateWithoutTeamGamesInput>
  }

  export type GameCreateNestedManyWithoutTeamsInput = {
    create?: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput> | GameCreateWithoutTeamsInput[] | GameUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTeamsInput | GameCreateOrConnectWithoutTeamsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOwnedTeamInput = {
    create?: XOR<UserCreateWithoutOwnedTeamInput, UserUncheckedCreateWithoutOwnedTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedTeamInput
    connect?: UserWhereUniqueInput
  }

  export type TeamInvitationCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamsInput, TeamInvitationUncheckedCreateWithoutTeamsInput> | TeamInvitationCreateWithoutTeamsInput[] | TeamInvitationUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamsInput | TeamInvitationCreateOrConnectWithoutTeamsInput[]
    createMany?: TeamInvitationCreateManyTeamsInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type TeamGameCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamGameCreateWithoutTeamInput, TeamGameUncheckedCreateWithoutTeamInput> | TeamGameCreateWithoutTeamInput[] | TeamGameUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutTeamInput | TeamGameCreateOrConnectWithoutTeamInput[]
    createMany?: TeamGameCreateManyTeamInputEnvelope
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput> | GameCreateWithoutTeamsInput[] | GameUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTeamsInput | GameCreateOrConnectWithoutTeamsInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamInvitationUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamsInput, TeamInvitationUncheckedCreateWithoutTeamsInput> | TeamInvitationCreateWithoutTeamsInput[] | TeamInvitationUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamsInput | TeamInvitationCreateOrConnectWithoutTeamsInput[]
    createMany?: TeamInvitationCreateManyTeamsInputEnvelope
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
  }

  export type TeamGameUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamGameCreateWithoutTeamInput, TeamGameUncheckedCreateWithoutTeamInput> | TeamGameCreateWithoutTeamInput[] | TeamGameUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutTeamInput | TeamGameCreateOrConnectWithoutTeamInput[]
    createMany?: TeamGameCreateManyTeamInputEnvelope
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumRegionFieldUpdateOperationsInput = {
    set?: $Enums.Region | null
  }

  export type GameUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput> | GameCreateWithoutTeamsInput[] | GameUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTeamsInput | GameCreateOrConnectWithoutTeamsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutTeamsInput | GameUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutTeamsInput | GameUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutTeamsInput | GameUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedTeamNestedInput = {
    create?: XOR<UserCreateWithoutOwnedTeamInput, UserUncheckedCreateWithoutOwnedTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedTeamInput
    upsert?: UserUpsertWithoutOwnedTeamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedTeamInput, UserUpdateWithoutOwnedTeamInput>, UserUncheckedUpdateWithoutOwnedTeamInput>
  }

  export type TeamInvitationUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamsInput, TeamInvitationUncheckedCreateWithoutTeamsInput> | TeamInvitationCreateWithoutTeamsInput[] | TeamInvitationUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamsInput | TeamInvitationCreateOrConnectWithoutTeamsInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutTeamsInput | TeamInvitationUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: TeamInvitationCreateManyTeamsInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutTeamsInput | TeamInvitationUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutTeamsInput | TeamInvitationUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type TeamGameUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamGameCreateWithoutTeamInput, TeamGameUncheckedCreateWithoutTeamInput> | TeamGameCreateWithoutTeamInput[] | TeamGameUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutTeamInput | TeamGameCreateOrConnectWithoutTeamInput[]
    upsert?: TeamGameUpsertWithWhereUniqueWithoutTeamInput | TeamGameUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamGameCreateManyTeamInputEnvelope
    set?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    disconnect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    delete?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    update?: TeamGameUpdateWithWhereUniqueWithoutTeamInput | TeamGameUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamGameUpdateManyWithWhereWithoutTeamInput | TeamGameUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamGameScalarWhereInput | TeamGameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput> | GameCreateWithoutTeamsInput[] | GameUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: GameCreateOrConnectWithoutTeamsInput | GameCreateOrConnectWithoutTeamsInput[]
    upsert?: GameUpsertWithWhereUniqueWithoutTeamsInput | GameUpsertWithWhereUniqueWithoutTeamsInput[]
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutTeamsInput | GameUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: GameUpdateManyWithWhereWithoutTeamsInput | GameUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type TeamInvitationUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<TeamInvitationCreateWithoutTeamsInput, TeamInvitationUncheckedCreateWithoutTeamsInput> | TeamInvitationCreateWithoutTeamsInput[] | TeamInvitationUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: TeamInvitationCreateOrConnectWithoutTeamsInput | TeamInvitationCreateOrConnectWithoutTeamsInput[]
    upsert?: TeamInvitationUpsertWithWhereUniqueWithoutTeamsInput | TeamInvitationUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: TeamInvitationCreateManyTeamsInputEnvelope
    set?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    disconnect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    delete?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    connect?: TeamInvitationWhereUniqueInput | TeamInvitationWhereUniqueInput[]
    update?: TeamInvitationUpdateWithWhereUniqueWithoutTeamsInput | TeamInvitationUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: TeamInvitationUpdateManyWithWhereWithoutTeamsInput | TeamInvitationUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
  }

  export type TeamGameUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamGameCreateWithoutTeamInput, TeamGameUncheckedCreateWithoutTeamInput> | TeamGameCreateWithoutTeamInput[] | TeamGameUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamGameCreateOrConnectWithoutTeamInput | TeamGameCreateOrConnectWithoutTeamInput[]
    upsert?: TeamGameUpsertWithWhereUniqueWithoutTeamInput | TeamGameUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamGameCreateManyTeamInputEnvelope
    set?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    disconnect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    delete?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    connect?: TeamGameWhereUniqueInput | TeamGameWhereUniqueInput[]
    update?: TeamGameUpdateWithWhereUniqueWithoutTeamInput | TeamGameUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamGameUpdateManyWithWhereWithoutTeamInput | TeamGameUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamGameScalarWhereInput | TeamGameScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type EnumTeamMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamMemberRole
  }

  export type UserUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput
    upsert?: UserUpsertWithoutTeamInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamInput, UserUpdateWithoutTeamInput>, UserUncheckedUpdateWithoutTeamInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamCreateNestedOneWithoutInvitationInput = {
    create?: XOR<TeamCreateWithoutInvitationInput, TeamUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: TeamCreateOrConnectWithoutInvitationInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentInvitationInput = {
    create?: XOR<UserCreateWithoutSentInvitationInput, UserUncheckedCreateWithoutSentInvitationInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedInvitesInput = {
    create?: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type TeamUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<TeamCreateWithoutInvitationInput, TeamUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: TeamCreateOrConnectWithoutInvitationInput
    upsert?: TeamUpsertWithoutInvitationInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutInvitationInput, TeamUpdateWithoutInvitationInput>, TeamUncheckedUpdateWithoutInvitationInput>
  }

  export type UserUpdateOneRequiredWithoutSentInvitationNestedInput = {
    create?: XOR<UserCreateWithoutSentInvitationInput, UserUncheckedCreateWithoutSentInvitationInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentInvitationInput
    upsert?: UserUpsertWithoutSentInvitationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentInvitationInput, UserUpdateWithoutSentInvitationInput>, UserUncheckedUpdateWithoutSentInvitationInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedInvitesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedInvitesInput
    upsert?: UserUpsertWithoutReceivedInvitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedInvitesInput, UserUpdateWithoutReceivedInvitesInput>, UserUncheckedUpdateWithoutReceivedInvitesInput>
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutVideosInput = {
    create?: XOR<GameCreateWithoutVideosInput, GameUncheckedCreateWithoutVideosInput>
    connectOrCreate?: GameCreateOrConnectWithoutVideosInput
    connect?: GameWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutVideoInput = {
    create?: XOR<LikeCreateWithoutVideoInput, LikeUncheckedCreateWithoutVideoInput> | LikeCreateWithoutVideoInput[] | LikeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutVideoInput | LikeCreateOrConnectWithoutVideoInput[]
    createMany?: LikeCreateManyVideoInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutVideoInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<LikeCreateWithoutVideoInput, LikeUncheckedCreateWithoutVideoInput> | LikeCreateWithoutVideoInput[] | LikeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutVideoInput | LikeCreateOrConnectWithoutVideoInput[]
    createMany?: LikeCreateManyVideoInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideosInput, UserUpdateWithoutVideosInput>, UserUncheckedUpdateWithoutVideosInput>
  }

  export type GameUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<GameCreateWithoutVideosInput, GameUncheckedCreateWithoutVideosInput>
    connectOrCreate?: GameCreateOrConnectWithoutVideosInput
    upsert?: GameUpsertWithoutVideosInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutVideosInput, GameUpdateWithoutVideosInput>, GameUncheckedUpdateWithoutVideosInput>
  }

  export type LikeUpdateManyWithoutVideoNestedInput = {
    create?: XOR<LikeCreateWithoutVideoInput, LikeUncheckedCreateWithoutVideoInput> | LikeCreateWithoutVideoInput[] | LikeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutVideoInput | LikeCreateOrConnectWithoutVideoInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutVideoInput | LikeUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: LikeCreateManyVideoInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutVideoInput | LikeUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutVideoInput | LikeUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutVideoNestedInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput | CommentUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput | CommentUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput | CommentUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<LikeCreateWithoutVideoInput, LikeUncheckedCreateWithoutVideoInput> | LikeCreateWithoutVideoInput[] | LikeUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutVideoInput | LikeCreateOrConnectWithoutVideoInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutVideoInput | LikeUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: LikeCreateManyVideoInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutVideoInput | LikeUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutVideoInput | LikeUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput> | CommentCreateWithoutVideoInput[] | CommentUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutVideoInput | CommentCreateOrConnectWithoutVideoInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutVideoInput | CommentUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: CommentCreateManyVideoInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutVideoInput | CommentUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutVideoInput | CommentUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type VideoClipCreateNestedOneWithoutLikesInput = {
    create?: XOR<VideoClipCreateWithoutLikesInput, VideoClipUncheckedCreateWithoutLikesInput>
    connectOrCreate?: VideoClipCreateOrConnectWithoutLikesInput
    connect?: VideoClipWhereUniqueInput
  }

  export type VideoClipUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<VideoClipCreateWithoutLikesInput, VideoClipUncheckedCreateWithoutLikesInput>
    connectOrCreate?: VideoClipCreateOrConnectWithoutLikesInput
    upsert?: VideoClipUpsertWithoutLikesInput
    connect?: VideoClipWhereUniqueInput
    update?: XOR<XOR<VideoClipUpdateToOneWithWhereWithoutLikesInput, VideoClipUpdateWithoutLikesInput>, VideoClipUncheckedUpdateWithoutLikesInput>
  }

  export type VideoClipCreateNestedOneWithoutCommentsInput = {
    create?: XOR<VideoClipCreateWithoutCommentsInput, VideoClipUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoClipCreateOrConnectWithoutCommentsInput
    connect?: VideoClipWhereUniqueInput
  }

  export type VideoClipUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<VideoClipCreateWithoutCommentsInput, VideoClipUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: VideoClipCreateOrConnectWithoutCommentsInput
    upsert?: VideoClipUpsertWithoutCommentsInput
    connect?: VideoClipWhereUniqueInput
    update?: XOR<XOR<VideoClipUpdateToOneWithWhereWithoutCommentsInput, VideoClipUpdateWithoutCommentsInput>, VideoClipUncheckedUpdateWithoutCommentsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumExperienceLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelFilter<$PrismaModel> | $Enums.ExperienceLevel
  }

  export type NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExperienceLevel | EnumExperienceLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExperienceLevel[] | ListEnumExperienceLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumExperienceLevelWithAggregatesFilter<$PrismaModel> | $Enums.ExperienceLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExperienceLevelFilter<$PrismaModel>
    _max?: NestedEnumExperienceLevelFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRegionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableFilter<$PrismaModel> | $Enums.Region | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Region | EnumRegionFieldRefInput<$PrismaModel> | null
    in?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Region[] | ListEnumRegionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRegionNullableWithAggregatesFilter<$PrismaModel> | $Enums.Region | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRegionNullableFilter<$PrismaModel>
    _max?: NestedEnumRegionNullableFilter<$PrismaModel>
  }

  export type NestedEnumTeamMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamMemberRoleFilter<$PrismaModel> | $Enums.TeamMemberRole
  }

  export type NestedEnumTeamMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamMemberRole | EnumTeamMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamMemberRole[] | ListEnumTeamMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamMemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvitationStatus[] | ListEnumInvitationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type GameCreateWithoutPlayersInput = {
    id?: string
    name: string
    teams?: TeamCreateNestedManyWithoutGamesInput
    videos?: VideoClipCreateNestedManyWithoutGameInput
    userGames?: UserGameCreateNestedManyWithoutGameInput
    teamGames?: TeamGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    teams?: TeamUncheckedCreateNestedManyWithoutGamesInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutGameInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
    teamGames?: TeamGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayersInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    teamId: string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutTeamsInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    invitation?: TeamInvitationCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutTeamsInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    invitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
  }

  export type TeamCreateManyOwnerInputEnvelope = {
    data: TeamCreateManyOwnerInput | TeamCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type VideoClipCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game: GameCreateNestedOneWithoutVideosInput
    likes?: LikeCreateNestedManyWithoutVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
  }

  export type VideoClipUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoClipCreateOrConnectWithoutUserInput = {
    where: VideoClipWhereUniqueInput
    create: XOR<VideoClipCreateWithoutUserInput, VideoClipUncheckedCreateWithoutUserInput>
  }

  export type VideoClipCreateManyUserInputEnvelope = {
    data: VideoClipCreateManyUserInput | VideoClipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutUserInput = {
    id?: string
    experiece: $Enums.ExperienceLevel
    game: GameCreateNestedOneWithoutUserGamesInput
  }

  export type UserGameUncheckedCreateWithoutUserInput = {
    id?: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type UserGameCreateOrConnectWithoutUserInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameCreateManyUserInputEnvelope = {
    data: UserGameCreateManyUserInput | UserGameCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamInvitationCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    teams: TeamCreateNestedOneWithoutInvitationInput
    receiver: UserCreateNestedOneWithoutReceivedInvitesInput
  }

  export type TeamInvitationUncheckedCreateWithoutSenderInput = {
    id?: string
    teamId: string
    receiverId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationCreateOrConnectWithoutSenderInput = {
    where: TeamInvitationWhereUniqueInput
    create: XOR<TeamInvitationCreateWithoutSenderInput, TeamInvitationUncheckedCreateWithoutSenderInput>
  }

  export type TeamInvitationCreateManySenderInputEnvelope = {
    data: TeamInvitationCreateManySenderInput | TeamInvitationCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type TeamInvitationCreateWithoutReceiverInput = {
    id?: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    teams: TeamCreateNestedOneWithoutInvitationInput
    sender: UserCreateNestedOneWithoutSentInvitationInput
  }

  export type TeamInvitationUncheckedCreateWithoutReceiverInput = {
    id?: string
    teamId: string
    senderId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationCreateOrConnectWithoutReceiverInput = {
    where: TeamInvitationWhereUniqueInput
    create: XOR<TeamInvitationCreateWithoutReceiverInput, TeamInvitationUncheckedCreateWithoutReceiverInput>
  }

  export type TeamInvitationCreateManyReceiverInputEnvelope = {
    data: TeamInvitationCreateManyReceiverInput | TeamInvitationCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutPlayersInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
    create: XOR<GameCreateWithoutPlayersInput, GameUncheckedCreateWithoutPlayersInput>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayersInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayersInput, GameUncheckedUpdateWithoutPlayersInput>
  }

  export type GameUpdateManyWithWhereWithoutPlayersInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayersInput>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: StringFilter<"Game"> | string
    name?: StringFilter<"Game"> | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    role?: EnumTeamMemberRoleFilter<"TeamMember"> | $Enums.TeamMemberRole
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
  }

  export type TeamUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>
  }

  export type TeamUpdateManyWithWhereWithoutOwnerInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    description?: StringFilter<"Team"> | string
    logoUrl?: StringNullableFilter<"Team"> | string | null
    isRecruiting?: BoolFilter<"Team"> | boolean
    region?: EnumRegionNullableFilter<"Team"> | $Enums.Region | null
    ownerId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type VideoClipUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoClipWhereUniqueInput
    update: XOR<VideoClipUpdateWithoutUserInput, VideoClipUncheckedUpdateWithoutUserInput>
    create: XOR<VideoClipCreateWithoutUserInput, VideoClipUncheckedCreateWithoutUserInput>
  }

  export type VideoClipUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoClipWhereUniqueInput
    data: XOR<VideoClipUpdateWithoutUserInput, VideoClipUncheckedUpdateWithoutUserInput>
  }

  export type VideoClipUpdateManyWithWhereWithoutUserInput = {
    where: VideoClipScalarWhereInput
    data: XOR<VideoClipUpdateManyMutationInput, VideoClipUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoClipScalarWhereInput = {
    AND?: VideoClipScalarWhereInput | VideoClipScalarWhereInput[]
    OR?: VideoClipScalarWhereInput[]
    NOT?: VideoClipScalarWhereInput | VideoClipScalarWhereInput[]
    id?: StringFilter<"VideoClip"> | string
    title?: StringFilter<"VideoClip"> | string
    description?: StringNullableFilter<"VideoClip"> | string | null
    videoUrl?: StringFilter<"VideoClip"> | string
    thumbnailUrl?: StringNullableFilter<"VideoClip"> | string | null
    userId?: StringFilter<"VideoClip"> | string
    gameId?: StringFilter<"VideoClip"> | string
    createdAt?: DateTimeFilter<"VideoClip"> | Date | string
    updatedAt?: DateTimeFilter<"VideoClip"> | Date | string
  }

  export type UserGameUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
    create: XOR<UserGameCreateWithoutUserInput, UserGameUncheckedCreateWithoutUserInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutUserInput, UserGameUncheckedUpdateWithoutUserInput>
  }

  export type UserGameUpdateManyWithWhereWithoutUserInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGameScalarWhereInput = {
    AND?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    OR?: UserGameScalarWhereInput[]
    NOT?: UserGameScalarWhereInput | UserGameScalarWhereInput[]
    id?: StringFilter<"UserGame"> | string
    userId?: StringFilter<"UserGame"> | string
    gameId?: StringFilter<"UserGame"> | string
    experiece?: EnumExperienceLevelFilter<"UserGame"> | $Enums.ExperienceLevel
  }

  export type TeamInvitationUpsertWithWhereUniqueWithoutSenderInput = {
    where: TeamInvitationWhereUniqueInput
    update: XOR<TeamInvitationUpdateWithoutSenderInput, TeamInvitationUncheckedUpdateWithoutSenderInput>
    create: XOR<TeamInvitationCreateWithoutSenderInput, TeamInvitationUncheckedCreateWithoutSenderInput>
  }

  export type TeamInvitationUpdateWithWhereUniqueWithoutSenderInput = {
    where: TeamInvitationWhereUniqueInput
    data: XOR<TeamInvitationUpdateWithoutSenderInput, TeamInvitationUncheckedUpdateWithoutSenderInput>
  }

  export type TeamInvitationUpdateManyWithWhereWithoutSenderInput = {
    where: TeamInvitationScalarWhereInput
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyWithoutSenderInput>
  }

  export type TeamInvitationScalarWhereInput = {
    AND?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
    OR?: TeamInvitationScalarWhereInput[]
    NOT?: TeamInvitationScalarWhereInput | TeamInvitationScalarWhereInput[]
    id?: StringFilter<"TeamInvitation"> | string
    teamId?: StringFilter<"TeamInvitation"> | string
    senderId?: StringFilter<"TeamInvitation"> | string
    receiverId?: StringFilter<"TeamInvitation"> | string
    status?: EnumInvitationStatusFilter<"TeamInvitation"> | $Enums.InvitationStatus
    createdAt?: DateTimeFilter<"TeamInvitation"> | Date | string
    updatedAt?: DateTimeFilter<"TeamInvitation"> | Date | string
  }

  export type TeamInvitationUpsertWithWhereUniqueWithoutReceiverInput = {
    where: TeamInvitationWhereUniqueInput
    update: XOR<TeamInvitationUpdateWithoutReceiverInput, TeamInvitationUncheckedUpdateWithoutReceiverInput>
    create: XOR<TeamInvitationCreateWithoutReceiverInput, TeamInvitationUncheckedCreateWithoutReceiverInput>
  }

  export type TeamInvitationUpdateWithWhereUniqueWithoutReceiverInput = {
    where: TeamInvitationWhereUniqueInput
    data: XOR<TeamInvitationUpdateWithoutReceiverInput, TeamInvitationUncheckedUpdateWithoutReceiverInput>
  }

  export type TeamInvitationUpdateManyWithWhereWithoutReceiverInput = {
    where: TeamInvitationScalarWhereInput
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutGamesInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamMemberCreateNestedManyWithoutUserInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutGamesInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutGamesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type TeamCreateWithoutGamesInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    owner: UserCreateNestedOneWithoutOwnedTeamInput
    invitation?: TeamInvitationCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutGamesInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    ownerId: string
    createdAt: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    invitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutGamesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGamesInput, TeamUncheckedCreateWithoutGamesInput>
  }

  export type VideoClipCreateWithoutGameInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    likes?: LikeCreateNestedManyWithoutVideoInput
    comments?: CommentCreateNestedManyWithoutVideoInput
  }

  export type VideoClipUncheckedCreateWithoutGameInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutVideoInput
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoClipCreateOrConnectWithoutGameInput = {
    where: VideoClipWhereUniqueInput
    create: XOR<VideoClipCreateWithoutGameInput, VideoClipUncheckedCreateWithoutGameInput>
  }

  export type VideoClipCreateManyGameInputEnvelope = {
    data: VideoClipCreateManyGameInput | VideoClipCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserGameCreateWithoutGameInput = {
    id?: string
    experiece: $Enums.ExperienceLevel
    user: UserCreateNestedOneWithoutGamesPlayedInput
  }

  export type UserGameUncheckedCreateWithoutGameInput = {
    id?: string
    userId: string
    experiece: $Enums.ExperienceLevel
  }

  export type UserGameCreateOrConnectWithoutGameInput = {
    where: UserGameWhereUniqueInput
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameCreateManyGameInputEnvelope = {
    data: UserGameCreateManyGameInput | UserGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type TeamGameCreateWithoutGameInput = {
    id?: string
    experiece: $Enums.ExperienceLevel
    team: TeamCreateNestedOneWithoutGamesPlayedInput
  }

  export type TeamGameUncheckedCreateWithoutGameInput = {
    id?: string
    teamId: string
    experiece: $Enums.ExperienceLevel
  }

  export type TeamGameCreateOrConnectWithoutGameInput = {
    where: TeamGameWhereUniqueInput
    create: XOR<TeamGameCreateWithoutGameInput, TeamGameUncheckedCreateWithoutGameInput>
  }

  export type TeamGameCreateManyGameInputEnvelope = {
    data: TeamGameCreateManyGameInput | TeamGameCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGamesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
    create: XOR<UserCreateWithoutGamesInput, UserUncheckedCreateWithoutGamesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGamesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGamesInput, UserUncheckedUpdateWithoutGamesInput>
  }

  export type UserUpdateManyWithWhereWithoutGamesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGamesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    bio?: StringFilter<"User"> | string
    gamertag?: StringNullableFilter<"User"> | string | null
    playerRole?: EnumPlayerRoleNullableListFilter<"User">
    experienceLevel?: EnumExperienceLevelNullableListFilter<"User">
    region?: EnumRegionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutGamesInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutGamesInput, TeamUncheckedUpdateWithoutGamesInput>
    create: XOR<TeamCreateWithoutGamesInput, TeamUncheckedCreateWithoutGamesInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutGamesInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutGamesInput, TeamUncheckedUpdateWithoutGamesInput>
  }

  export type TeamUpdateManyWithWhereWithoutGamesInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutGamesInput>
  }

  export type VideoClipUpsertWithWhereUniqueWithoutGameInput = {
    where: VideoClipWhereUniqueInput
    update: XOR<VideoClipUpdateWithoutGameInput, VideoClipUncheckedUpdateWithoutGameInput>
    create: XOR<VideoClipCreateWithoutGameInput, VideoClipUncheckedCreateWithoutGameInput>
  }

  export type VideoClipUpdateWithWhereUniqueWithoutGameInput = {
    where: VideoClipWhereUniqueInput
    data: XOR<VideoClipUpdateWithoutGameInput, VideoClipUncheckedUpdateWithoutGameInput>
  }

  export type VideoClipUpdateManyWithWhereWithoutGameInput = {
    where: VideoClipScalarWhereInput
    data: XOR<VideoClipUpdateManyMutationInput, VideoClipUncheckedUpdateManyWithoutGameInput>
  }

  export type UserGameUpsertWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    update: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
    create: XOR<UserGameCreateWithoutGameInput, UserGameUncheckedCreateWithoutGameInput>
  }

  export type UserGameUpdateWithWhereUniqueWithoutGameInput = {
    where: UserGameWhereUniqueInput
    data: XOR<UserGameUpdateWithoutGameInput, UserGameUncheckedUpdateWithoutGameInput>
  }

  export type UserGameUpdateManyWithWhereWithoutGameInput = {
    where: UserGameScalarWhereInput
    data: XOR<UserGameUpdateManyMutationInput, UserGameUncheckedUpdateManyWithoutGameInput>
  }

  export type TeamGameUpsertWithWhereUniqueWithoutGameInput = {
    where: TeamGameWhereUniqueInput
    update: XOR<TeamGameUpdateWithoutGameInput, TeamGameUncheckedUpdateWithoutGameInput>
    create: XOR<TeamGameCreateWithoutGameInput, TeamGameUncheckedCreateWithoutGameInput>
  }

  export type TeamGameUpdateWithWhereUniqueWithoutGameInput = {
    where: TeamGameWhereUniqueInput
    data: XOR<TeamGameUpdateWithoutGameInput, TeamGameUncheckedUpdateWithoutGameInput>
  }

  export type TeamGameUpdateManyWithWhereWithoutGameInput = {
    where: TeamGameScalarWhereInput
    data: XOR<TeamGameUpdateManyMutationInput, TeamGameUncheckedUpdateManyWithoutGameInput>
  }

  export type TeamGameScalarWhereInput = {
    AND?: TeamGameScalarWhereInput | TeamGameScalarWhereInput[]
    OR?: TeamGameScalarWhereInput[]
    NOT?: TeamGameScalarWhereInput | TeamGameScalarWhereInput[]
    id?: StringFilter<"TeamGame"> | string
    teamId?: StringFilter<"TeamGame"> | string
    gameId?: StringFilter<"TeamGame"> | string
    experiece?: EnumExperienceLevelFilter<"TeamGame"> | $Enums.ExperienceLevel
  }

  export type UserCreateWithoutGamesPlayedInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    team?: TeamMemberCreateNestedManyWithoutUserInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutGamesPlayedInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutGamesPlayedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGamesPlayedInput, UserUncheckedCreateWithoutGamesPlayedInput>
  }

  export type GameCreateWithoutUserGamesInput = {
    id?: string
    name: string
    players?: UserCreateNestedManyWithoutGamesInput
    teams?: TeamCreateNestedManyWithoutGamesInput
    videos?: VideoClipCreateNestedManyWithoutGameInput
    teamGames?: TeamGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutUserGamesInput = {
    id?: string
    name: string
    players?: UserUncheckedCreateNestedManyWithoutGamesInput
    teams?: TeamUncheckedCreateNestedManyWithoutGamesInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutGameInput
    teamGames?: TeamGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutUserGamesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
  }

  export type UserUpsertWithoutGamesPlayedInput = {
    update: XOR<UserUpdateWithoutGamesPlayedInput, UserUncheckedUpdateWithoutGamesPlayedInput>
    create: XOR<UserCreateWithoutGamesPlayedInput, UserUncheckedCreateWithoutGamesPlayedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGamesPlayedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGamesPlayedInput, UserUncheckedUpdateWithoutGamesPlayedInput>
  }

  export type UserUpdateWithoutGamesPlayedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesPlayedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type GameUpsertWithoutUserGamesInput = {
    update: XOR<GameUpdateWithoutUserGamesInput, GameUncheckedUpdateWithoutUserGamesInput>
    create: XOR<GameCreateWithoutUserGamesInput, GameUncheckedCreateWithoutUserGamesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutUserGamesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutUserGamesInput, GameUncheckedUpdateWithoutUserGamesInput>
  }

  export type GameUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUpdateManyWithoutGamesNestedInput
    teams?: TeamUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutUserGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUncheckedUpdateManyWithoutGamesNestedInput
    teams?: TeamUncheckedUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type TeamCreateWithoutGamesPlayedInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutTeamsInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    owner: UserCreateNestedOneWithoutOwnedTeamInput
    invitation?: TeamInvitationCreateNestedManyWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutGamesPlayedInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    ownerId: string
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutTeamsInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    invitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type TeamCreateOrConnectWithoutGamesPlayedInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutGamesPlayedInput, TeamUncheckedCreateWithoutGamesPlayedInput>
  }

  export type GameCreateWithoutTeamGamesInput = {
    id?: string
    name: string
    players?: UserCreateNestedManyWithoutGamesInput
    teams?: TeamCreateNestedManyWithoutGamesInput
    videos?: VideoClipCreateNestedManyWithoutGameInput
    userGames?: UserGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTeamGamesInput = {
    id?: string
    name: string
    players?: UserUncheckedCreateNestedManyWithoutGamesInput
    teams?: TeamUncheckedCreateNestedManyWithoutGamesInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutGameInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTeamGamesInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTeamGamesInput, GameUncheckedCreateWithoutTeamGamesInput>
  }

  export type TeamUpsertWithoutGamesPlayedInput = {
    update: XOR<TeamUpdateWithoutGamesPlayedInput, TeamUncheckedUpdateWithoutGamesPlayedInput>
    create: XOR<TeamCreateWithoutGamesPlayedInput, TeamUncheckedCreateWithoutGamesPlayedInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutGamesPlayedInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutGamesPlayedInput, TeamUncheckedUpdateWithoutGamesPlayedInput>
  }

  export type TeamUpdateWithoutGamesPlayedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedTeamNestedInput
    invitation?: TeamInvitationUpdateManyWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutGamesPlayedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    invitation?: TeamInvitationUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type GameUpsertWithoutTeamGamesInput = {
    update: XOR<GameUpdateWithoutTeamGamesInput, GameUncheckedUpdateWithoutTeamGamesInput>
    create: XOR<GameCreateWithoutTeamGamesInput, GameUncheckedCreateWithoutTeamGamesInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutTeamGamesInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutTeamGamesInput, GameUncheckedUpdateWithoutTeamGamesInput>
  }

  export type GameUpdateWithoutTeamGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUpdateManyWithoutGamesNestedInput
    teams?: TeamUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUpdateManyWithoutGameNestedInput
    userGames?: UserGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTeamGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUncheckedUpdateManyWithoutGamesNestedInput
    teams?: TeamUncheckedUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutGameNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateWithoutTeamsInput = {
    id?: string
    name: string
    players?: UserCreateNestedManyWithoutGamesInput
    videos?: VideoClipCreateNestedManyWithoutGameInput
    userGames?: UserGameCreateNestedManyWithoutGameInput
    teamGames?: TeamGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    players?: UserUncheckedCreateNestedManyWithoutGamesInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutGameInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
    teamGames?: TeamGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutTeamsInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput>
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    userId: string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOwnedTeamInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    team?: TeamMemberCreateNestedManyWithoutUserInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOwnedTeamInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOwnedTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedTeamInput, UserUncheckedCreateWithoutOwnedTeamInput>
  }

  export type TeamInvitationCreateWithoutTeamsInput = {
    id?: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentInvitationInput
    receiver: UserCreateNestedOneWithoutReceivedInvitesInput
  }

  export type TeamInvitationUncheckedCreateWithoutTeamsInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationCreateOrConnectWithoutTeamsInput = {
    where: TeamInvitationWhereUniqueInput
    create: XOR<TeamInvitationCreateWithoutTeamsInput, TeamInvitationUncheckedCreateWithoutTeamsInput>
  }

  export type TeamInvitationCreateManyTeamsInputEnvelope = {
    data: TeamInvitationCreateManyTeamsInput | TeamInvitationCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type TeamGameCreateWithoutTeamInput = {
    id?: string
    experiece: $Enums.ExperienceLevel
    game: GameCreateNestedOneWithoutTeamGamesInput
  }

  export type TeamGameUncheckedCreateWithoutTeamInput = {
    id?: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type TeamGameCreateOrConnectWithoutTeamInput = {
    where: TeamGameWhereUniqueInput
    create: XOR<TeamGameCreateWithoutTeamInput, TeamGameUncheckedCreateWithoutTeamInput>
  }

  export type TeamGameCreateManyTeamInputEnvelope = {
    data: TeamGameCreateManyTeamInput | TeamGameCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutTeamsInput = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutTeamsInput, GameUncheckedUpdateWithoutTeamsInput>
    create: XOR<GameCreateWithoutTeamsInput, GameUncheckedCreateWithoutTeamsInput>
  }

  export type GameUpdateWithWhereUniqueWithoutTeamsInput = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutTeamsInput, GameUncheckedUpdateWithoutTeamsInput>
  }

  export type GameUpdateManyWithWhereWithoutTeamsInput = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutTeamsInput>
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserUpsertWithoutOwnedTeamInput = {
    update: XOR<UserUpdateWithoutOwnedTeamInput, UserUncheckedUpdateWithoutOwnedTeamInput>
    create: XOR<UserCreateWithoutOwnedTeamInput, UserUncheckedCreateWithoutOwnedTeamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedTeamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedTeamInput, UserUncheckedUpdateWithoutOwnedTeamInput>
  }

  export type UserUpdateWithoutOwnedTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type TeamInvitationUpsertWithWhereUniqueWithoutTeamsInput = {
    where: TeamInvitationWhereUniqueInput
    update: XOR<TeamInvitationUpdateWithoutTeamsInput, TeamInvitationUncheckedUpdateWithoutTeamsInput>
    create: XOR<TeamInvitationCreateWithoutTeamsInput, TeamInvitationUncheckedCreateWithoutTeamsInput>
  }

  export type TeamInvitationUpdateWithWhereUniqueWithoutTeamsInput = {
    where: TeamInvitationWhereUniqueInput
    data: XOR<TeamInvitationUpdateWithoutTeamsInput, TeamInvitationUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamInvitationUpdateManyWithWhereWithoutTeamsInput = {
    where: TeamInvitationScalarWhereInput
    data: XOR<TeamInvitationUpdateManyMutationInput, TeamInvitationUncheckedUpdateManyWithoutTeamsInput>
  }

  export type TeamGameUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamGameWhereUniqueInput
    update: XOR<TeamGameUpdateWithoutTeamInput, TeamGameUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamGameCreateWithoutTeamInput, TeamGameUncheckedCreateWithoutTeamInput>
  }

  export type TeamGameUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamGameWhereUniqueInput
    data: XOR<TeamGameUpdateWithoutTeamInput, TeamGameUncheckedUpdateWithoutTeamInput>
  }

  export type TeamGameUpdateManyWithWhereWithoutTeamInput = {
    where: TeamGameScalarWhereInput
    data: XOR<TeamGameUpdateManyMutationInput, TeamGameUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutTeamsInput
    owner: UserCreateNestedOneWithoutOwnedTeamInput
    invitation?: TeamInvitationCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    ownerId: string
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutTeamsInput
    invitation?: TeamInvitationUncheckedCreateNestedManyWithoutTeamsInput
    gamesPlayed?: TeamGameUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutTeamInput = {
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutTeamsNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedTeamNestedInput
    invitation?: TeamInvitationUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutTeamsNestedInput
    invitation?: TeamInvitationUncheckedUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutInvitationInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutTeamsInput
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    owner: UserCreateNestedOneWithoutOwnedTeamInput
    gamesPlayed?: TeamGameCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutInvitationInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    ownerId: string
    createdAt: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutTeamsInput
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
    gamesPlayed?: TeamGameUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutInvitationInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutInvitationInput, TeamUncheckedCreateWithoutInvitationInput>
  }

  export type UserCreateWithoutSentInvitationInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    team?: TeamMemberCreateNestedManyWithoutUserInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentInvitationInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentInvitationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentInvitationInput, UserUncheckedCreateWithoutSentInvitationInput>
  }

  export type UserCreateWithoutReceivedInvitesInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    team?: TeamMemberCreateNestedManyWithoutUserInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    videos?: VideoClipCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedInvitesInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    videos?: VideoClipUncheckedCreateNestedManyWithoutUserInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedInvitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
  }

  export type TeamUpsertWithoutInvitationInput = {
    update: XOR<TeamUpdateWithoutInvitationInput, TeamUncheckedUpdateWithoutInvitationInput>
    create: XOR<TeamCreateWithoutInvitationInput, TeamUncheckedCreateWithoutInvitationInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutInvitationInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutInvitationInput, TeamUncheckedUpdateWithoutInvitationInput>
  }

  export type TeamUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedTeamNestedInput
    gamesPlayed?: TeamGameUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    gamesPlayed?: TeamGameUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutSentInvitationInput = {
    update: XOR<UserUpdateWithoutSentInvitationInput, UserUncheckedUpdateWithoutSentInvitationInput>
    create: XOR<UserCreateWithoutSentInvitationInput, UserUncheckedCreateWithoutSentInvitationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentInvitationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentInvitationInput, UserUncheckedUpdateWithoutSentInvitationInput>
  }

  export type UserUpdateWithoutSentInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedInvitesInput = {
    update: XOR<UserUpdateWithoutReceivedInvitesInput, UserUncheckedUpdateWithoutReceivedInvitesInput>
    create: XOR<UserCreateWithoutReceivedInvitesInput, UserUncheckedCreateWithoutReceivedInvitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedInvitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedInvitesInput, UserUncheckedUpdateWithoutReceivedInvitesInput>
  }

  export type UserUpdateWithoutReceivedInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedInvitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutVideosInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameCreateNestedManyWithoutPlayersInput
    team?: TeamMemberCreateNestedManyWithoutUserInput
    ownedTeam?: TeamCreateNestedManyWithoutOwnerInput
    gamesPlayed?: UserGameCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    id?: string
    fullName: string
    email: string
    bio?: string
    gamertag?: string | null
    playerRole?: UserCreateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserCreateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserCreateregionInput | $Enums.Region[]
    createdAt?: Date | string
    updatedAt?: Date | string
    games?: GameUncheckedCreateNestedManyWithoutPlayersInput
    team?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    ownedTeam?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    gamesPlayed?: UserGameUncheckedCreateNestedManyWithoutUserInput
    sentInvitation?: TeamInvitationUncheckedCreateNestedManyWithoutSenderInput
    receivedInvites?: TeamInvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type GameCreateWithoutVideosInput = {
    id?: string
    name: string
    players?: UserCreateNestedManyWithoutGamesInput
    teams?: TeamCreateNestedManyWithoutGamesInput
    userGames?: UserGameCreateNestedManyWithoutGameInput
    teamGames?: TeamGameCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutVideosInput = {
    id?: string
    name: string
    players?: UserUncheckedCreateNestedManyWithoutGamesInput
    teams?: TeamUncheckedCreateNestedManyWithoutGamesInput
    userGames?: UserGameUncheckedCreateNestedManyWithoutGameInput
    teamGames?: TeamGameUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutVideosInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutVideosInput, GameUncheckedCreateWithoutVideosInput>
  }

  export type LikeCreateWithoutVideoInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeUncheckedCreateWithoutVideoInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutVideoInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutVideoInput, LikeUncheckedCreateWithoutVideoInput>
  }

  export type LikeCreateManyVideoInputEnvelope = {
    data: LikeCreateManyVideoInput | LikeCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutVideoInput = {
    id?: string
    content?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutVideoInput = {
    id?: string
    content?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutVideoInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentCreateManyVideoInputEnvelope = {
    data: CommentCreateManyVideoInput | CommentCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutPlayersNestedInput
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type GameUpsertWithoutVideosInput = {
    update: XOR<GameUpdateWithoutVideosInput, GameUncheckedUpdateWithoutVideosInput>
    create: XOR<GameCreateWithoutVideosInput, GameUncheckedCreateWithoutVideosInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutVideosInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutVideosInput, GameUncheckedUpdateWithoutVideosInput>
  }

  export type GameUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUpdateManyWithoutGamesNestedInput
    teams?: TeamUpdateManyWithoutGamesNestedInput
    userGames?: UserGameUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUncheckedUpdateManyWithoutGamesNestedInput
    teams?: TeamUncheckedUpdateManyWithoutGamesNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutVideoInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutVideoInput, LikeUncheckedUpdateWithoutVideoInput>
    create: XOR<LikeCreateWithoutVideoInput, LikeUncheckedCreateWithoutVideoInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutVideoInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutVideoInput, LikeUncheckedUpdateWithoutVideoInput>
  }

  export type LikeUpdateManyWithWhereWithoutVideoInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutVideoInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: StringFilter<"Like"> | string
    videoId?: StringFilter<"Like"> | string
    userId?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
    create: XOR<CommentCreateWithoutVideoInput, CommentUncheckedCreateWithoutVideoInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutVideoInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutVideoInput, CommentUncheckedUpdateWithoutVideoInput>
  }

  export type CommentUpdateManyWithWhereWithoutVideoInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutVideoInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    videoId?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type VideoClipCreateWithoutLikesInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    game: GameCreateNestedOneWithoutVideosInput
    comments?: CommentCreateNestedManyWithoutVideoInput
  }

  export type VideoClipUncheckedCreateWithoutLikesInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    userId: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoClipCreateOrConnectWithoutLikesInput = {
    where: VideoClipWhereUniqueInput
    create: XOR<VideoClipCreateWithoutLikesInput, VideoClipUncheckedCreateWithoutLikesInput>
  }

  export type VideoClipUpsertWithoutLikesInput = {
    update: XOR<VideoClipUpdateWithoutLikesInput, VideoClipUncheckedUpdateWithoutLikesInput>
    create: XOR<VideoClipCreateWithoutLikesInput, VideoClipUncheckedCreateWithoutLikesInput>
    where?: VideoClipWhereInput
  }

  export type VideoClipUpdateToOneWithWhereWithoutLikesInput = {
    where?: VideoClipWhereInput
    data: XOR<VideoClipUpdateWithoutLikesInput, VideoClipUncheckedUpdateWithoutLikesInput>
  }

  export type VideoClipUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    game?: GameUpdateOneRequiredWithoutVideosNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    game: GameCreateNestedOneWithoutVideosInput
    likes?: LikeCreateNestedManyWithoutVideoInput
  }

  export type VideoClipUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    userId: string
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoClipCreateOrConnectWithoutCommentsInput = {
    where: VideoClipWhereUniqueInput
    create: XOR<VideoClipCreateWithoutCommentsInput, VideoClipUncheckedCreateWithoutCommentsInput>
  }

  export type VideoClipUpsertWithoutCommentsInput = {
    update: XOR<VideoClipUpdateWithoutCommentsInput, VideoClipUncheckedUpdateWithoutCommentsInput>
    create: XOR<VideoClipCreateWithoutCommentsInput, VideoClipUncheckedCreateWithoutCommentsInput>
    where?: VideoClipWhereInput
  }

  export type VideoClipUpdateToOneWithWhereWithoutCommentsInput = {
    where?: VideoClipWhereInput
    data: XOR<VideoClipUpdateWithoutCommentsInput, VideoClipUncheckedUpdateWithoutCommentsInput>
  }

  export type VideoClipUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    game?: GameUpdateOneRequiredWithoutVideosNestedInput
    likes?: LikeUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    teamId: string
  }

  export type TeamCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string
    logoUrl?: string | null
    isRecruiting?: boolean
    region?: $Enums.Region | null
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type VideoClipCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    gameId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameCreateManyUserInput = {
    id?: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type TeamInvitationCreateManySenderInput = {
    id?: string
    teamId: string
    receiverId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamInvitationCreateManyReceiverInput = {
    id?: string
    teamId: string
    senderId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUpdateManyWithoutGameNestedInput
    userGames?: UserGameUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teams?: TeamUncheckedUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutGameNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    invitation?: TeamInvitationUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    games?: GameUncheckedUpdateManyWithoutTeamsNestedInput
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    invitation?: TeamInvitationUncheckedUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutVideosNestedInput
    likes?: LikeUpdateManyWithoutVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gameId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    game?: GameUpdateOneRequiredWithoutUserGamesNestedInput
  }

  export type UserGameUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type UserGameUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamInvitationUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateOneRequiredWithoutInvitationNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type TeamInvitationUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateOneRequiredWithoutInvitationNestedInput
    sender?: UserUpdateOneRequiredWithoutSentInvitationNestedInput
  }

  export type TeamInvitationUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipCreateManyGameInput = {
    id?: string
    title: string
    description?: string | null
    videoUrl: string
    thumbnailUrl?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGameCreateManyGameInput = {
    id?: string
    userId: string
    experiece: $Enums.ExperienceLevel
  }

  export type TeamGameCreateManyGameInput = {
    id?: string
    teamId: string
    experiece: $Enums.ExperienceLevel
  }

  export type UserUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamMemberUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedTeam?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutUserNestedInput
    gamesPlayed?: UserGameUncheckedUpdateManyWithoutUserNestedInput
    sentInvitation?: TeamInvitationUncheckedUpdateManyWithoutSenderNestedInput
    receivedInvites?: TeamInvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    playerRole?: UserUpdateplayerRoleInput | $Enums.PlayerRole[]
    experienceLevel?: UserUpdateexperienceLevelInput | $Enums.ExperienceLevel[]
    region?: UserUpdateregionInput | $Enums.Region[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    owner?: UserUpdateOneRequiredWithoutOwnedTeamNestedInput
    invitation?: TeamInvitationUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
    invitation?: TeamInvitationUncheckedUpdateManyWithoutTeamsNestedInput
    gamesPlayed?: TeamGameUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutGamesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isRecruiting?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableEnumRegionFieldUpdateOperationsInput | $Enums.Region | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoClipUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    likes?: LikeUpdateManyWithoutVideoNestedInput
    comments?: CommentUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutVideoNestedInput
    comments?: CommentUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoClipUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGameUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    user?: UserUpdateOneRequiredWithoutGamesPlayedNestedInput
  }

  export type UserGameUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type UserGameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamGameUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    team?: TeamUpdateOneRequiredWithoutGamesPlayedNestedInput
  }

  export type TeamGameUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamGameUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string
    role: $Enums.TeamMemberRole
    joinedAt?: Date | string
    userId: string
  }

  export type TeamInvitationCreateManyTeamsInput = {
    id?: string
    senderId: string
    receiverId: string
    status?: $Enums.InvitationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamGameCreateManyTeamInput = {
    id?: string
    gameId: string
    experiece: $Enums.ExperienceLevel
  }

  export type GameUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUpdateManyWithoutGameNestedInput
    userGames?: UserGameUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    players?: UserUncheckedUpdateManyWithoutGamesNestedInput
    videos?: VideoClipUncheckedUpdateManyWithoutGameNestedInput
    userGames?: UserGameUncheckedUpdateManyWithoutGameNestedInput
    teamGames?: TeamGameUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamMemberRoleFieldUpdateOperationsInput | $Enums.TeamMemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamInvitationUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentInvitationNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedInvitesNestedInput
  }

  export type TeamInvitationUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamInvitationUncheckedUpdateManyWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamGameUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
    game?: GameUpdateOneRequiredWithoutTeamGamesNestedInput
  }

  export type TeamGameUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type TeamGameUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameId?: StringFieldUpdateOperationsInput | string
    experiece?: EnumExperienceLevelFieldUpdateOperationsInput | $Enums.ExperienceLevel
  }

  export type LikeCreateManyVideoInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type CommentCreateManyVideoInput = {
    id?: string
    content?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikeUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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