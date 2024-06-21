**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / UserProfileInfo

# Class: UserProfileInfo

## Implements

- [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new UserProfileInfo(data)

> **new UserProfileInfo**(`data`?): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

• **data?**: [`IUserProfileInfo`](../interfaces/IUserProfileInfo.md)

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Source

main.ts:184462

## Properties

### avatar?

> **`optional`** **avatar**: `string`

URL to the profile picture of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`avatar`](../interfaces/IUserProfileInfo.md#avatar)

#### Source

main.ts:184452

***

### locations?

> **`optional`** **locations**: `string`

country of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`locations`](../interfaces/IUserProfileInfo.md#locations)

#### Source

main.ts:184458

***

### name?

> **`optional`** **name**: `string`

the name of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`name`](../interfaces/IUserProfileInfo.md#name)

#### Source

main.ts:184450

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`reviews_count`](../interfaces/IUserProfileInfo.md#reviews_count)

#### Source

main.ts:184456

***

### url?

> **`optional`** **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`url`](../interfaces/IUserProfileInfo.md#url)

#### Source

main.ts:184454

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:184471

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:184492

***

### fromJS()

> **`static`** **fromJS**(`data`): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Source

main.ts:184485
