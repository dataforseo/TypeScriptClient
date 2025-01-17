[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataUserProfileInfo

# Class: BusinessDataUserProfileInfo

Defined in: main.ts:226696

## Implements

- [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataUserProfileInfo()

> **new BusinessDataUserProfileInfo**(`data`?): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

Defined in: main.ts:226710

#### Parameters

##### data?

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:226702

URL to the reviewer’s profile picture

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`image_url`](../interfaces/IBusinessDataUserProfileInfo.md#image_url)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:226704

country of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`location`](../interfaces/IBusinessDataUserProfileInfo.md#location)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:226698

the name of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`name`](../interfaces/IBusinessDataUserProfileInfo.md#name)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:226706

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`reviews_count`](../interfaces/IBusinessDataUserProfileInfo.md#reviews_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:226700

URL to the reviewer’s profile

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`url`](../interfaces/IBusinessDataUserProfileInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:226719

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:226740

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

Defined in: main.ts:226733

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)
