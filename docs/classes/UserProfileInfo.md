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

main.ts:183312

## Properties

### avatar?

> **`optional`** **avatar**: `string`

URL to the profile picture of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`avatar`](../interfaces/IUserProfileInfo.md#avatar)

#### Source

main.ts:183302

***

### locations?

> **`optional`** **locations**: `string`

country of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`locations`](../interfaces/IUserProfileInfo.md#locations)

#### Source

main.ts:183308

***

### name?

> **`optional`** **name**: `string`

the name of the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`name`](../interfaces/IUserProfileInfo.md#name)

#### Source

main.ts:183300

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`reviews_count`](../interfaces/IUserProfileInfo.md#reviews_count)

#### Source

main.ts:183306

***

### url?

> **`optional`** **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[`IUserProfileInfo`](../interfaces/IUserProfileInfo.md).[`url`](../interfaces/IUserProfileInfo.md#url)

#### Source

main.ts:183304

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:183321

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:183342

***

### fromJS()

> **`static`** **fromJS**(`data`): [`UserProfileInfo`](UserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`UserProfileInfo`](UserProfileInfo.md)

#### Source

main.ts:183335
