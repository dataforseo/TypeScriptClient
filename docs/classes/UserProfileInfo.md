[**Documentation**](../README.md)

***

[Documentation](../README.md) / UserProfileInfo

# Class: UserProfileInfo

## Implements

- [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new UserProfileInfo()

> **new UserProfileInfo**(`data`?): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

##### data?

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Defined in

main.ts:194887

## Properties

### avatar?

> `optional` **avatar**: `string`

URL to the profile picture of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`avatar`](../interfaces/IUserProfileInfo.md#avatar)

#### Defined in

main.ts:194877

***

### locations?

> `optional` **locations**: `string`

country of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`locations`](../interfaces/IUserProfileInfo.md#locations)

#### Defined in

main.ts:194883

***

### name?

> `optional` **name**: `string`

the name of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`name`](../interfaces/IUserProfileInfo.md#name)

#### Defined in

main.ts:194875

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`reviews_count`](../interfaces/IUserProfileInfo.md#reviews_count)

#### Defined in

main.ts:194881

***

### url?

> `optional` **url**: `string`

URL of the video

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`url`](../interfaces/IUserProfileInfo.md#url)

#### Defined in

main.ts:194879

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:194896

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:194917

***

### fromJS()

> `static` **fromJS**(`data`): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Defined in

main.ts:194910
