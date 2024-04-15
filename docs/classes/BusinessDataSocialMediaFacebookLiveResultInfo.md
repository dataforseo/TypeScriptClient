**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveResultInfo

# Class: BusinessDataSocialMediaFacebookLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveResultInfo(data)

> **new BusinessDataSocialMediaFacebookLiveResultInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Source

main.ts:211587

## Properties

### like\_count?

> **`optional`** **like\_count**: `number`

number of likes for the related page_url
this field shows the number of likes a page received through the Facebook Like Button embed

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`like_count`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#like_count)

#### Source

main.ts:211583

***

### page\_url?

> **`optional`** **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#page_url)

#### Source

main.ts:211580

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResultInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaFacebookLiveResultInfo.md#type)

#### Source

main.ts:211577

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:211596

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:211615

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveResultInfo`](BusinessDataSocialMediaFacebookLiveResultInfo.md)

#### Source

main.ts:211608
