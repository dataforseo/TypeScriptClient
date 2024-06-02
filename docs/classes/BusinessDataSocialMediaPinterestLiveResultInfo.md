**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaPinterestLiveResultInfo

# Class: BusinessDataSocialMediaPinterestLiveResultInfo

## Implements

- [`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaPinterestLiveResultInfo(data)

> **new BusinessDataSocialMediaPinterestLiveResultInfo**(`data`?): [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Source

main.ts:212222

## Properties

### page\_url?

> **`optional`** **page\_url**: `string`

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#page_url)

#### Source

main.ts:212214

***

### pins\_count?

> **`optional`** **pins\_count**: `number`

number of pins for the related page_url
pins on Pinterest correspond to content saves;
this field shows the number of content saves made from the related page_url using the Pinterest Save Button

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[`pins_count`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#pins_count)

#### Source

main.ts:212218

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#type)

#### Source

main.ts:212211

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:212231

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:212250

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Source

main.ts:212243
