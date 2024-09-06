[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataUserProfileInfo

# Class: BusinessDataUserProfileInfo

## Implements

- [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataUserProfileInfo()

> **new BusinessDataUserProfileInfo**(`data`?): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Parameters

• **data?**: [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Defined in

main.ts:211709

## Properties

### image\_url?

> `optional` **image\_url**: `string`

URL to the reviewer’s profile picture

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`image_url`](../interfaces/IBusinessDataUserProfileInfo.md#image_url)

#### Defined in

main.ts:211701

***

### location?

> `optional` **location**: `string`

country of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`location`](../interfaces/IBusinessDataUserProfileInfo.md#location)

#### Defined in

main.ts:211703

***

### name?

> `optional` **name**: `string`

the name of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`name`](../interfaces/IBusinessDataUserProfileInfo.md#name)

#### Defined in

main.ts:211697

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`reviews_count`](../interfaces/IBusinessDataUserProfileInfo.md#reviews_count)

#### Defined in

main.ts:211705

***

### url?

> `optional` **url**: `string`

URL to the reviewer’s profile

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`url`](../interfaces/IBusinessDataUserProfileInfo.md#url)

#### Defined in

main.ts:211699

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:211718

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:211739

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

#### Defined in

main.ts:211732
