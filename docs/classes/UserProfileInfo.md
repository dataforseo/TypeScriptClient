[**Documentation**](../README.md)

***

[Documentation](../README.md) / UserProfileInfo

# Class: UserProfileInfo

Defined in: main.ts:194941

## Implements

- [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new UserProfileInfo()

> **new UserProfileInfo**(`data`?): [`UserProfileInfo`](UserProfileInfo.md)

Defined in: main.ts:194955

#### Parameters

##### data?

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

## Properties

### avatar?

> `optional` **avatar**: `string`

Defined in: main.ts:194945

URL to the profile picture of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`avatar`](../interfaces/IUserProfileInfo.md#avatar)

***

### locations?

> `optional` **locations**: `string`

Defined in: main.ts:194951

country of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`locations`](../interfaces/IUserProfileInfo.md#locations)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:194943

the name of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`name`](../interfaces/IUserProfileInfo.md#name)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:194949

total number of reviews submitted by the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`reviews_count`](../interfaces/IUserProfileInfo.md#reviews_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:194947

URL of the video

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`url`](../interfaces/IUserProfileInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:194964

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:194985

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`UserProfileInfo`](UserProfileInfo.md)

Defined in: main.ts:194978

#### Parameters

##### data

`any`

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)
