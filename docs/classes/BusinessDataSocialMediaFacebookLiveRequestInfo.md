[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveRequestInfo

# Class: BusinessDataSocialMediaFacebookLiveRequestInfo

## Implements

- [`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveRequestInfo()

> **new BusinessDataSocialMediaFacebookLiveRequestInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Parameters

##### data?

[`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Defined in

main.ts:229843

## Properties

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md).[`tag`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md#tag)

#### Defined in

main.ts:229839

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

[`IBusinessDataSocialMediaFacebookLiveRequestInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md).[`targets`](../interfaces/IBusinessDataSocialMediaFacebookLiveRequestInfo.md#targets)

#### Defined in

main.ts:229833

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:229852

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:229874

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)

#### Defined in

main.ts:229867
