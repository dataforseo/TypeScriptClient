[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataSocialMediaPinterestLiveRequestInfo

# Class: BusinessDataSocialMediaPinterestLiveRequestInfo

## Implements

- [`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaPinterestLiveRequestInfo()

> **new BusinessDataSocialMediaPinterestLiveRequestInfo**(`data`?): [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Returns

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Defined in

main.ts:219347

## Properties

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md#tag)

#### Defined in

main.ts:219343

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

[`IBusinessDataSocialMediaPinterestLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md).[`targets`](../interfaces/IBusinessDataSocialMediaPinterestLiveRequestInfo.md#targets)

#### Defined in

main.ts:219337

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:219356

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:219378

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)

#### Defined in

main.ts:219371
