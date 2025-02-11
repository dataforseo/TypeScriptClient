[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveRequestInfo

# Class: BusinessDataSocialMediaFacebookLiveRequestInfo

Defined in: main.ts:230402

## Implements

- [`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveRequestInfo()

> **new BusinessDataSocialMediaFacebookLiveRequestInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

Defined in: main.ts:230419

#### Parameters

##### data?

[`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:230415

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:230409

target URLs
required field
target page should be specified with its absolute URL (including http:// or https://)
example:
https://dataforseo.com/
Note: you can specify 10 targets maximum. You will be charged per earch URL you specify in this array

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md).[`targets`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230428

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:230450

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

Defined in: main.ts:230443

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)
