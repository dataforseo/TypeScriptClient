[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaPinterestLiveResultInfo

# Class: BusinessDataSocialMediaPinterestLiveResultInfo

Defined in: main.ts:230224

## Implements

- [`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaPinterestLiveResultInfo()

> **new BusinessDataSocialMediaPinterestLiveResultInfo**(`data`?): [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

Defined in: main.ts:230237

#### Parameters

##### data?

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md)

#### Returns

[`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

## Properties

### page\_url?

> `optional` **page\_url**: `string`

Defined in: main.ts:230229

URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[`page_url`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#page_url)

***

### pins\_count?

> `optional` **pins\_count**: `number`

Defined in: main.ts:230233

number of pins for the related page_url
pins on Pinterest correspond to content saves;
this field shows the number of content saves made from the related page_url using the Pinterest Save Button

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[`pins_count`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#pins_count)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:230226

type of element

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResultInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md).[`type`](../interfaces/IBusinessDataSocialMediaPinterestLiveResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230246

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230265

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)

Defined in: main.ts:230258

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaPinterestLiveResultInfo`](BusinessDataSocialMediaPinterestLiveResultInfo.md)
