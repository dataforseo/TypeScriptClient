[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataSocialMediaRedditLiveRequestInfo

# Class: BusinessDataSocialMediaRedditLiveRequestInfo

## Implements

- [`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaRedditLiveRequestInfo()

> **new BusinessDataSocialMediaRedditLiveRequestInfo**(`data`?): [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Returns

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Defined in

main.ts:215158

## Properties

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md#tag)

#### Defined in

main.ts:215154

***

### targets?

> `optional` **targets**: `string`[]

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md).[`targets`](../interfaces/IBusinessDataSocialMediaRedditLiveRequestInfo.md#targets)

#### Defined in

main.ts:215148

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:215167

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:215189

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)

#### Defined in

main.ts:215182
