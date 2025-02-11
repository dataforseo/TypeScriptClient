[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataUserProfileInfo

# Class: BusinessDataUserProfileInfo

Defined in: main.ts:227204

## Implements

- [`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataUserProfileInfo()

> **new BusinessDataUserProfileInfo**(`data`?): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

Defined in: main.ts:227218

#### Parameters

##### data?

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md)

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:227210

URL to the reviewer’s profile picture

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`image_url`](../interfaces/IBusinessDataUserProfileInfo.md#image_url)

***

### location?

> `optional` **location**: `string`

Defined in: main.ts:227212

country of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`location`](../interfaces/IBusinessDataUserProfileInfo.md#location)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:227206

the name of the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`name`](../interfaces/IBusinessDataUserProfileInfo.md#name)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:227214

total number of reviews submitted by the reviewer

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`reviews_count`](../interfaces/IBusinessDataUserProfileInfo.md#reviews_count)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:227208

URL to the reviewer’s profile

#### Implementation of

[`IBusinessDataUserProfileInfo`](../interfaces/IBusinessDataUserProfileInfo.md).[`url`](../interfaces/IBusinessDataUserProfileInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227227

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:227248

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)

Defined in: main.ts:227241

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataUserProfileInfo`](BusinessDataUserProfileInfo.md)
