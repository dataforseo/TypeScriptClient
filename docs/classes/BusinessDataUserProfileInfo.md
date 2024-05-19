**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataUserProfileInfo

# Class: BusinessDataUserProfileInfo

## Implements

- [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataUserProfileInfo(data)

> **new BusinessDataUserProfileInfo**(`data`?): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Parameters

• **data?**: [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Source

main.ts:209224

## Properties

### image\_url?

> **`optional`** **image\_url**: `string`

URL to the reviewer’s profile picture

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`image_url`](../interfaces/IBusinessDataUserProfileInfo.md#image_url)

#### Source

main.ts:209216

***

### location?

> **`optional`** **location**: `string`

country of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`location`](../interfaces/IBusinessDataUserProfileInfo.md#location)

#### Source

main.ts:209218

***

### name?

> **`optional`** **name**: `string`

the name of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`name`](../interfaces/IBusinessDataUserProfileInfo.md#name)

#### Source

main.ts:209212

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`reviews_count`](../interfaces/IBusinessDataUserProfileInfo.md#reviews_count)

#### Source

main.ts:209220

***

### url?

> **`optional`** **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`url`](../interfaces/IBusinessDataUserProfileInfo.md#url)

#### Source

main.ts:209214

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209233

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209254

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Source

main.ts:209247
