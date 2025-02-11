[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveResultInfo

# Class: BusinessDataSocialMediaFacebookLiveResultInfo

Defined in: main.ts:230484

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveResultInfo()

> **new BusinessDataSocialMediaFacebookLiveResultInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

Defined in: main.ts:230496

#### Parameters

##### data?

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

## Properties

### like\_count?

> `optional` **like\_count**: `number`

Defined in: main.ts:230492

number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`like_count`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#like_count)

***

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:230489

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#page_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:230486

type of element

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230505

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230524

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

Defined in: main.ts:230517

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)
