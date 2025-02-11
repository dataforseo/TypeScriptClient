[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaPinterestLiveRequestInfo

# Class: BusinessDataSocialMediaPinterestLiveRequestInfo

Defined in: main.ts:230142

## Implements

- [`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaPinterestLiveRequestInfo()

> **new BusinessDataSocialMediaPinterestLiveRequestInfo**(`data`?): [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

Defined in: main.ts:230159

#### Parameters

##### data?

[`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Returns

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:230155

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:230149

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md).[`targets`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230168

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230190

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

Defined in: main.ts:230183

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)
