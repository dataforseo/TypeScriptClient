[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaRedditLiveRequestInfo

# Class: BusinessDataSocialMediaRedditLiveRequestInfo

Defined in: main.ts:230152

## Implements

- [`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaRedditLiveRequestInfo()

> **new BusinessDataSocialMediaRedditLiveRequestInfo**(`data`?): [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

Defined in: main.ts:230169

#### Parameters

##### data?

[`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Returns

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:230165

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:230159

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md).[`targets`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230178

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230200

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

Defined in: main.ts:230193

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)
