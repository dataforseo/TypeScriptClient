[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / UserProfileInfo

# Class: UserProfileInfo

## Implements

- [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new UserProfileInfo()

> **new UserProfileInfo**(`data`?): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

• **data?**: [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Defined in

main.ts:184967

## Properties

### avatar?

> `optional` **avatar**: `string`

URL to the profile picture of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`avatar`](../interfaces/IUserProfileInfo.md#avatar)

#### Defined in

main.ts:184957

***

### locations?

> `optional` **locations**: `string`

country of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`locations`](../interfaces/IUserProfileInfo.md#locations)

#### Defined in

main.ts:184963

***

### name?

> `optional` **name**: `string`

the name of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`name`](../interfaces/IUserProfileInfo.md#name)

#### Defined in

main.ts:184955

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`reviews_count`](../interfaces/IUserProfileInfo.md#reviews_count)

#### Defined in

main.ts:184961

***

### url?

> `optional` **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`url`](../interfaces/IUserProfileInfo.md#url)

#### Defined in

main.ts:184959

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:184976

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:184997

***

### fromJS()

> `static` **fromJS**(`data`): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Defined in

main.ts:184990
