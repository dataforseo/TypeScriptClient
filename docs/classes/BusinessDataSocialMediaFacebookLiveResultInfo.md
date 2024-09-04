[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataSocialMediaFacebookLiveResultInfo

# Class: BusinessDataSocialMediaFacebookLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveResultInfo()

> **new BusinessDataSocialMediaFacebookLiveResultInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Defined in

main.ts:219684

## Properties

### like\_count?

> `optional` **like\_count**: `number`

number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`like_count`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#like_count)

#### Defined in

main.ts:219680

***

### page\_url?

> `optional` **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#page_url)

#### Defined in

main.ts:219677

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#type)

#### Defined in

main.ts:219674

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:219693

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:219712

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Defined in

main.ts:219705
