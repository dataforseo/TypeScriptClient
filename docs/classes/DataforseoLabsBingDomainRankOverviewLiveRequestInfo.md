**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainRankOverviewLiveRequestInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveRequestInfo

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainRankOverviewLiveRequestInfo(data)

> **new DataforseoLabsBingDomainRankOverviewLiveRequestInfo**(`data`?): [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Source

main.ts:108743

## Properties

### language\_code?

> **`optional`** **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_code)

#### Source

main.ts:108723

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#language_name)

#### Source

main.ts:108714

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned results for domain
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#limit)

#### Source

main.ts:108728

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_code)

#### Source

main.ts:108705

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#location_name)

#### Source

main.ts:108695

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned items
optional field
default value: 0
if you specify the 10 value, the first ten items in the results array will be omitted and the data will be provided for the successive items

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#offset)

#### Source

main.ts:108733

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#tag)

#### Source

main.ts:108739

***

### target?

> **`optional`** **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsBingDomainRankOverviewLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveRequestInfo.md#target)

#### Source

main.ts:108685

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:108752

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:108776

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveRequestInfo`](DataforseoLabsBingDomainRankOverviewLiveRequestInfo.md)

#### Source

main.ts:108769
